import pytest
from algokit_utils import (
    ApplicationClient,
    ApplicationSpecification,
    get_localnet_default_account,
)
from algosdk.v2client.algod import AlgodClient

from smart_contracts.smart_contract import contract as smart_contract_contract


@pytest.fixture(scope="session")
def smart_contract_app_spec(algod_client: AlgodClient) -> ApplicationSpecification:
    return smart_contract_contract.app.build(algod_client)


@pytest.fixture(scope="session")
def smart_contract_client(
    algod_client: AlgodClient, smart_contract_app_spec: ApplicationSpecification
) -> ApplicationClient:
    client = ApplicationClient(
        algod_client,
        app_spec=smart_contract_app_spec,
        signer=get_localnet_default_account(algod_client),
    )
    client.create()
    return client


def test_says_hello(smart_contract_client: ApplicationClient) -> None:
    result = smart_contract_client.call(smart_contract_contract.hello, name="World")

    assert result.return_value == "Hello, World"
