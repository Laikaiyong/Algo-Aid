import logging

import algokit_utils
from algosdk.v2client.algod import AlgodClient
from algosdk.v2client.indexer import IndexerClient

logger = logging.getLogger(__name__)


def demo(
    deployedOnPublicNet=False,
    acc_addr=None,
    acc_privkey=None,
    acc_signer=None,
    algod_client=None,
    app_client=None,
    app_addr=None,
):
    # Setup - if `deployedOnPublicNet` is True, then all other params must be supplied
    acc_addr = (
        sandbox.get_accounts()[0].address if not deployedOnPublicNet else acc_addr
    )
    acc_privkey = (
        sandbox.get_accounts()[0].private_key
        if not deployedOnPublicNet
        else acc_privkey
    )
    acc_signer = (
        sandbox.get_accounts()[0].signer if not deployedOnPublicNet else acc_signer
    )
    algod_client = (
        sandbox.get_algod_client() if not deployedOnPublicNet else algod_client
    )

    app_client = (
        client.ApplicationClient(
            client=algod_client,
            app=FreedaPlay(version=8),
            signer=acc_signer,
        )
        if not deployedOnPublicNet
        else app_client
    )

    if not deployedOnPublicNet:
        print("Deploying app...")
        app_id, app_addr, txid = app_client.create()
        print(
            f"""Deployed app in txid {txid}
            App ID: {app_id}
            Address: {app_addr}\n"""
        )

    # Get suggested params before testing
    s_params = algod_client.suggested_params()

    # Begin testing
    print("Funding contract...\n")
    app_client.fund(1000000)

    print("Opting in to the contract...\n")
    app_client.opt_in()

    print("Creating aid nft...")
    callb = app_client.call(method=FreedaPlay.initAidNft)
    asa_id = callb.return_value

    print("The created ASA ID is " + str(asa_id) + "\n")

    print("Opting into created ASA...\n")
    optin_tx = tx.AssetOptInTxn(sender=acc_addr, sp=s_params, index=asa_id)
    algod_client.send_transaction(optin_tx.sign(acc_privkey))

    print("Activating season...")
    calla = app_client.call(method=FreedaPlay.toggleSeason, foreign_assets=[asa_id])
    print("Season status after 1st toggle: " + str(calla.return_value) + "\n")

    print("Checking aid nft value...")
    call0 = app_client.call(method=FreedaPlay.getAidNftValue)
    print(
        "The value of an aid nft is " + str(call0.return_value / 1000000) + " Algo(s)\n"
    )

    print("Buying aid nft...")
    pay_tx = tx.PaymentTxn(
        sender=acc_addr, sp=s_params, receiver=app_addr, amt=1000000 + 2000
    )  # add 2000 for fees
    pay_tx_signer = a_t_c.TransactionWithSigner(txn=pay_tx, signer=acc_signer)
    fundAndCall = a_t_c.AtomicTransactionComposer()
    fundAndCall.add_transaction(pay_tx_signer)
    call = app_client.call(
        atc=fundAndCall,
        method=FreedaPlay.purchaseAidNft,
        asset_id=asa_id,
        foreign_assets=[asa_id],
    )
    print("Aid NFT balance after buy: " + str(call.return_value) + "\n")

    print("Selling aid nft...")
    call2 = app_client.call(method=FreedaPlay.sellAidNft, foreign_assets=[asa_id])
    print("Aid NFT balance after sell: " + str(call2.return_value) + "\n")

    print("Deactivating season...")
    call3 = app_client.call(method=FreedaPlay.toggleSeason, foreign_assets=[asa_id])
    print("Season status after 2nd toggle: " + str(call3.return_value) + "\n")

    print("Unlocking asset when season is inactive...\n")
    app_client.call(method=FreedaPlay.unlockAsset, foreign_assets=[asa_id])

    print("Demo finished!")


# define deployment behaviour based on supplied app spec
def deploy(
    algod_client: AlgodClient,
    indexer_client: IndexerClient,
    app_spec: algokit_utils.ApplicationSpecification,
    deployer: algokit_utils.Account,
) -> None:
    from smart_contracts.artifacts.smart_contract.client import (
        SmartContractClient,
    )

    app_client = SmartContractClient(
        algod_client,
        creator=deployer,
        indexer_client=indexer_client,
    )
    app_client.deploy(
        on_schema_break=algokit_utils.OnSchemaBreak.AppendApp,
        on_update=algokit_utils.OnUpdate.AppendApp,
    )

    #  # Initialize account
    # acc_privkey = "city month away course stem treat kiwi basket alpha news siege atom vast latin appear shoe miss search idle ghost pool alley spot absent rail"
    # acc_addr = account.address_from_private_key(acc_privkey)
    # signer = a_t_c.AccountTransactionSigner(acc_privkey)

    # # Initialize client
    # algod_token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    # algod_address = "https://node.testnet.algoexplorerapi.io"  # Node URLs provided as sample; any valid node URLs will work
    # if not deployOnTestnet:
    #     input(
    #         "\nAre you sure you want to deploy Freeda Play application to Algorand MAINNET using account "
    #         + acc_addr
    #         + "?\nPress ENTER to deploy and control + C to cancel. "
    #     )
    #     algod_address = "https://node.algoexplorerapi.io"

    # algod_client = v2client.algod.AlgodClient(algod_token, algod_address)

    # app_client = client.ApplicationClient(
    #     client=algod_client,
    #     app=FreedaPlay(version=8),
    #     signer=signer,
    # )

    # print("\nDeploying app with account " + acc_addr + "...")
    # app_id, app_addr, txid = app_client.create()
    # print(
    #     f"""Deployed app in txid {txid}
    #     App ID: {app_id}
    #     Address: {app_addr}\n"""
    # )

    # if run_demo:
    #     demo(True, acc_addr, acc_privkey, signer, algod_client, app_client, app_addr)
