from algosdk import atomic_transaction_composer as a_t_c
from algosdk import v2client, account
from algosdk import transaction as tx


from pyteal import *
from beaker import *
import beaker
import pyteal as pt

app = beaker.Application("algo-aid")


@app.external
def initAidNft(*, output: abi.Uint64):
    return Seq(
        # Create an Aid NFT
        InnerTxnBuilder.Execute(
            {
                TxnField.type_enum: TxnType.AssetConfig,
                TxnField.config_asset_name: Bytes("WWF"),
                TxnField.config_asset_total: Int(1000),
                TxnField.config_asset_decimals: Int(0),
                TxnField.config_asset_url: Bytes(
                    "https://logowik.com/content/uploads/images/753_wwf.jpg"
                ),
                TxnField.config_asset_default_frozen: Int(0),
                TxnField.config_asset_reserve: Global.current_application_address(),
                TxnField.config_asset_manager: Global.current_application_address(),
                TxnField.config_asset_freeze: Global.current_application_address(),
                TxnField.config_asset_clawback: Global.current_application_address(),
            }
        ),
        # Output created Aid NFT ID
        output.set(InnerTxn.created_asset_id()),
    )


@app.external
def purchaseAidNft(asset_id: abi.Uint64, *, output: abi.Uint64):
    return Seq(
        # Check that supplied ASA is an Aid NFT
        creatorCheck := AssetParam.creator(Txn.assets[0]),
        Assert(creatorCheck.hasValue() == Int(1), comment="ASA supplied must exist"),
        Assert(
            creatorCheck.value() == Global.current_application_address(),
            comment="ASA supplied must be created by Freeda Play app",
        ),
        # Other basic checks
        Assert(
            Gtxn[0].type_enum() == TxnType.Payment,
            comment="First Txn in Group must be Payment",
        ),
        Assert(
            Gtxn[0].receiver() == Global.current_application_address(),
            comment="Receiver of Payment must be Application",
        ),
        # Send the Aid NFT to Txn.sender()
        InnerTxnBuilder.Execute(
            {
                TxnField.type_enum: TxnType.AssetTransfer,
                TxnField.sender: Global.current_application_address(),
                TxnField.asset_receiver: Txn.sender(),
                TxnField.asset_amount: Int(1),
                TxnField.xfer_asset: Txn.assets[0],
            }
        ),
        # Freeze the sent asset if the season is active
        InnerTxnBuilder.Execute(
            {
                TxnField.type_enum: TxnType.AssetFreeze,
                TxnField.freeze_asset: Txn.assets[0],
                TxnField.freeze_asset_account: Txn.sender(),
            }
        ),
        # Return the new Aid NFT balance of Txn.sender()
        balCheck := AssetHolding.balance(Txn.sender(), asset_id.get()),
        output.set(balCheck.value()),
    )


@app.external
def sellAidNft(*, output: abi.Uint64):
    return Seq(
        # Has to be a clawback txn since the asset is usually frozen
        InnerTxnBuilder.Execute(
            {
                TxnField.type_enum: TxnType.AssetTransfer,
                TxnField.asset_sender: Txn.sender(),
                TxnField.sender: Global.current_application_address(),
                TxnField.asset_receiver: Global.current_application_address(),
                TxnField.asset_amount: Int(1),
                TxnField.xfer_asset: Txn.assets[0],
            }
        ),
        # Reimburse Txn.sender() with proper Algo amount
        InnerTxnBuilder.Execute(
            {
                TxnField.type_enum: TxnType.Payment,
                TxnField.receiver: Txn.sender(),
            }
        ),
        # Return the new Aid NFT balance of Txn.sender()
        balCheck := AssetHolding.balance(Txn.sender(), Txn.assets[0]),
        output.set(balCheck.value()),
    )


@app.external
def unlockAsset():
    return Seq(
        InnerTxnBuilder.Execute(
            {
                TxnField.type_enum: TxnType.AssetFreeze,
                TxnField.freeze_asset: Txn.assets[0],
                TxnField.freeze_asset_account: Txn.sender(),
                TxnField.freeze_asset_frozen: Int(0),
            }
        ),
    )
