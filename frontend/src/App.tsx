import { DeflyWalletConnect } from '@blockshake/defly-connect'
import { DaffiWalletConnect } from '@daffiwallet/connect'
import { PeraWalletConnect } from '@perawallet/connect'
import { PROVIDER_ID, ProvidersArray, WalletProvider, useInitializeProviders, useWallet } from '@txnlab/use-wallet'
import algosdk from 'algosdk'
import { SnackbarProvider } from 'notistack'
import { useState } from 'react'
import ConnectWallet from './components/ConnectWallet'
import Transact from './components/Transact'
import { getAlgodConfigFromViteEnvironment } from './utils/network/getAlgoClientConfigs'

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

interface GroupModel {
  id: number
  title: string
  description: string
  imageUrl: string
}
class GroupProvider {
  static groupList: GroupModel[] = [
    {
      id: 1,
      title: 'World WildLife Fund',
      description: 'Funding for Wildlife',
      imageUrl: 'https://logowik.com/content/uploads/images/753_wwf.jpg',
    },
    {
      id: 2,
      title: 'YAYASAN ZURIATCARE',
      description: 'Sebuah yayasan amal di bawah Awqaf Holdings Berhad.',
      imageUrl: 'https://ngohub-production.s3.amazonaws.com/logos/organization/1564/Thumbnail_Logo.jpg',
    },
    {
      id: 3,
      title: 'Youth Build Nation (YBN)',
      description: 'A nonprofit organisation aim to empower young Malaysians.',
      imageUrl:
        'https://ngohub-production.s3.amazonaws.com/header_images/organization/2773/header_94488791_255581725833536_6597782409104588800_o.png',
    },
  ]
}

export default function App() {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openDemoModal, setOpenDemoModal] = useState<boolean>(false)
  const [appCallsDemoModal, setAppCallsDemoModal] = useState<boolean>(false)
  const { activeAddress } = useWallet()
  const groupList: GroupModel[] = GroupProvider.groupList

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
      <WalletProvider value={walletProviders}>
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
                    <a href="">FundRaise</a>
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

            <div className="hero min-h-screen bg-teal-400 ">
              <div className="inset-x-0 top-20 absolute">
                <div className="flex flex-row">
                  <div className="flex-none ...">
                    <h1 className="text-3xl">
                      <div className="m-2 font-bold">AlgoAid Groups ⛑️</div>
                    </h1>
                  </div>
                  <div className="flex-auto w-64 ..."></div>

                  <div className="flex-auto w-32 ...">
                    <button className="btn m-2 btn-outline btn-info" data-test-id="connect-wallet" onClick={toggleWalletModal}>
                      Connect Wallet
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white mx-auto">
                <div className="grid">
                  <div className="">
                    {groupList.map((group, index) => {
                      return (
                        <div className="card card-side bg-base-100 shadow-xl">
                          <figure className="m-10">
                            <img
                              style={{
                                minHeight: '150px',
                                maxHeight: '150px',
                                borderRadius: '20px',
                                objectFit: 'cover',
                              }}
                              src={group.imageUrl}
                              alt="Movie"
                            />
                          </figure>
                          <div className="card-body">
                            <h2 className="card-title">{group.title}</h2>
                            <p>{group.description}</p>
                            <div className="card-actions justify-end">
                              {activeAddress && (
                                <button data-test-id="transactions-demo" className="btn m-2" onClick={toggleDemoModal}>
                                  Fund Raising
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
                </div>

                <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
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
                <a href="">FundRaise</a>
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
      </WalletProvider>
    </SnackbarProvider>
  )
}
