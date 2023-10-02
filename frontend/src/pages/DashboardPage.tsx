import { DeflyWalletConnect } from '@blockshake/defly-connect'
import { DaffiWalletConnect } from '@daffiwallet/connect'
import { PeraWalletConnect } from '@perawallet/connect'
import { PROVIDER_ID, ProvidersArray, useInitializeProviders, useWallet } from '@txnlab/use-wallet'
import algosdk from 'algosdk'
import { SnackbarProvider } from 'notistack'
import { useState } from 'react'
import ConnectWallet from '../components/ConnectWallet'
import { getAlgodConfigFromViteEnvironment } from '../utils/network/getAlgoClientConfigs'

let providersArray: ProvidersArray
if (import.meta.env.VITE_ALGOD_NETWORK === '') {
  providersArray = [{ id: PROVIDER_ID.KMD }]
} else {
  providersArray = [
    { id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect },
    { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
    { id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect },
    { id: PROVIDER_ID.EXODUS },
    // If you are interested in WalletConnect v2 provider
    // refer to https://github.com/TxnLab/use-wallet for detailed integration instructions
  ]
}

export default function App() {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openDemoModal, setOpenDemoModal] = useState<boolean>(false)
  const [appCallsDemoModal, setAppCallsDemoModal] = useState<boolean>(false)
  const { activeAddress } = useWallet()

  const toggleWalletModal = () => {
    setOpenWalletModal(!openWalletModal)
  }

  const toggleDemoModal = () => {
    setOpenDemoModal(!openDemoModal)
  }

  const toggleAppCallsModal = () => {
    setAppCallsDemoModal(!appCallsDemoModal)
  }

  const algodConfig = getAlgodConfigFromViteEnvironment()

  const walletProviders = useInitializeProviders({
    providers: providersArray,
    nodeConfig: {
      network: algodConfig.network,
      nodeServer: algodConfig.server,
      nodePort: String(algodConfig.port),
      nodeToken: String(algodConfig.token),
    },
    algosdkStatic: algosdk,
  })

  return (
    <SnackbarProvider maxSnack={3}>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">AlgoAid</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <a href="/">Dashboard</a>
                </li>
                <li>
                  <a>Category</a>
                </li>
                <li>
                  <a href="/fundraise">FundRaise</a>
                </li>
                <li>
                  <a>Donation History</a>
                </li>
                <li>
                  <a>Profile</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero min-h-screen bg-teal-400">
            <div className="hero-content text-center rounded-lg p-6 max-w-md bg-white mx-auto">
              <div className="max-w-md">
                <h1 className="text-4xl">
                  Welcome to <div className="font-bold">AlgoAid ⛑️</div>
                </h1>
                <p className="py-6">
                  AlgoAid is a Crowd Funding Platform that aims to reduce poverty in the community by utilizing blockchain technologies to
                  make transactions transparent and trustworthy.
                </p>

                <div className="grid">
                  {/* <a
                      data-test-id="getting-started"
                      className="btn btn-primary m-2"
                      target="_blank"
                      href="https://github.com/algorandfoundation/algokit-cli"
                    >
                      Getting started
                    </a> */}

                  <div className="divider" />
                  <button data-test-id="connect-wallet" className="btn m-2" onClick={toggleWalletModal}>
                    Go to your Wallet
                  </button>

                  {activeAddress && (
                    <button data-test-id="transactions-demo" className="btn m-2" onClick={toggleDemoModal}>
                      Go to your Transactions
                    </button>
                  )}

                  {activeAddress && (
                    <button data-test-id="appcalls-demo" className="btn m-2" onClick={toggleAppCallsModal}>
                      Contract Interactions Demo
                    </button>
                  )}
                </div>

                <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a>Category</a>
            </li>
            <li>
              <a href="/fundraise">FundRaise</a>
            </li>
            <li>
              <a>Donation History</a>
            </li>
            <li>
              <a>Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </SnackbarProvider>
  )
}
