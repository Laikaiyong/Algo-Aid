import { useWallet } from '@txnlab/use-wallet'
import { SnackbarProvider } from 'notistack'
import { useState } from 'react'

export interface PeopleModel {
  id: string
  imageURL: string
  name: string
  subtitle: string
  bio: string
  interests: string
  fundedGroups: number[] // IDs of funded groups
  // fundingHistory: number[] // nfts
}

const userList: PeopleModel[] = [
  {
    id: 'user1',
    imageURL: 'https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg',
    name: 'John Doeing Doedy',
    subtitle: 'Web3 Enthusiast',
    bio: 'The world is unfair, and I want to save it a little more with what I have.',
    interests: 'Web3, NFT, Crypto, Art',
    fundedGroups: [1, 2],
    // fundingHistory: [1, 2],
  },
]

const user = userList[0]

export default function App() {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openDemoModal, setOpenDemoModal] = useState<boolean>(false)
  const [appCallsDemoModal, setAppCallsDemoModal] = useState<boolean>(false)
  const { activeAddress } = useWallet()
  const [activeTab, setActiveTab] = useState('Environment')

  const toggleWalletModal = () => {
    setOpenWalletModal(!openWalletModal)
  }

  const toggleDemoModal = () => {
    setOpenDemoModal(!openDemoModal)
  }

  const toggleAppCallsModal = () => {
    setAppCallsDemoModal(!appCallsDemoModal)
  }

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
                  <a href="/category">Category</a>
                </li>
                <li>
                  <a href="/fundraise">FundRaise</a>
                </li>
                <li>
                  <a href="/donation">Donation History</a>
                </li>
                <li>
                  <a href="/profile">Profile</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hero min-h-screen bg-teal-400 ">
            <div className="inset-x-0 top-20 absolute">
              <div className="flex flex-row">
                <div className="flex-none ...">
                  <h1 className="text-3xl">
                    <div className="m-2 font-bold">Profile </div>
                  </h1>
                </div>
                <div className="flex-auto w-64 ..."></div>

                <div className="flex-auto w-32 ..."></div>
              </div>
            </div>
            <div className="rounded-lg bg-white mx-auto">
              <div className="">
                <div className="grid">
                  <div className="card w-96 bg-base-100 shadow-xl items-center">
                    <div className="avatar">
                      <div className="w-24 rounded">
                        <img
                          src={user.imageURL}
                          style={{
                            minHeight: '120px',
                            maxHeight: '120px',
                            maxWidth: '120px',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                    </div>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{user.name}</h2>
                      <p>{user.subtitle}</p>
                      <p>{user.bio}</p>
                    </div>
                  </div>
                  <h2 className="card-title">NFT</h2>
                  <div className="carousel carousel-end rounded-box w-96">
                    <div className="carousel-item">
                      <img
                        src="https://i.seadn.io/gae/ZLEV08sKVXMh2wIMgBEZU4mDMh2GTS_tsgkvtpD3Ef1rTMC9m5er2R-YeKrI_szAjRm5mmThYxoVSFtkctEne2Y13qBOF00-e8x6Og?auto=format&dpr=1&w=1000"
                        className="w-32 object-cover"
                        alt="Drink"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://i.seadn.io/gcs/files/40fe9196b4951acdfdc87e6031e36212.png?auto=format&dpr=1&w=1000"
                        className="w-32 object-cover"
                        alt="Drink"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://i.seadn.io/gcs/files/617dce18b41f497e5ab4eadfd4fcc277.jpg?auto=format&dpr=1&w=1000"
                        className="w-32 object-cover"
                        alt="Drink"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://i.seadn.io/gcs/files/4c8af00d8cec299096f2de22ed7edf73.png?auto=format&dpr=1&w=1000"
                        className="w-32 object-cover"
                        alt="Drink"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://i.seadn.io/gae/eLO3O67PZjQi3Nbn85A9RYeFpry-iULJgcSombA8TvAtzAoWjiEA5uVzaKrnUWHCgSbdQB9NEA5g3JWrRc53Q7SeEfg2yIh8PpEfYQ?auto=format&dpr=1&w=1000"
                        className="w-32 object-cover"
                        alt="Drink"
                      />
                    </div>
                  </div>
                </div>
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
              <a href="/category">Category</a>
            </li>
            <li>
              <a href="/fundraise">FundRaise</a>
            </li>
            <li>
              <a href="/donation">Donation History</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </SnackbarProvider>
  )
}
