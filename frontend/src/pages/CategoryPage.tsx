import { useWallet } from '@txnlab/use-wallet'
import { SnackbarProvider } from 'notistack'
import { useState } from 'react'
import { CategoryModel, CategoryProvider } from '../providers/CategoryProvider'
import { GroupModel, GroupProvider } from '../providers/GroupProvider'

export default function App() {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openDemoModal, setOpenDemoModal] = useState<boolean>(false)
  const [appCallsDemoModal, setAppCallsDemoModal] = useState<boolean>(false)
  const { activeAddress } = useWallet()
  const [activeTab, setActiveTab] = useState('Environment')

  const groupList: GroupModel[] = GroupProvider.groupList
  const filteredGroups = groupList.filter((group) => group.category === activeTab)

  const categoryList: CategoryModel[] = CategoryProvider.categoryList
  const filteredCategory = categoryList.filter((category) => category.name === activeTab)

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
                    <div className="m-2 font-bold">AlgoAid Categories ⛑️</div>
                  </h1>
                </div>
                <div className="flex-auto w-64 ..."></div>

                <div className="flex-auto w-32 ..."></div>
              </div>
            </div>
            <div className="rounded-lg bg-white mx-auto">
              <div className="">
                <div className="grid">
                  <div className="tabs tabs-boxed">
                    <a className={`tab${activeTab === 'Environment' ? ' tab-active' : ''}`} onClick={() => setActiveTab('Environment')}>
                      Environment
                    </a>
                    <a className={`tab${activeTab === 'Community' ? ' tab-active' : ''}`} onClick={() => setActiveTab('Community')}>
                      Community
                    </a>
                    <a className={`tab${activeTab === 'Non-Profit' ? ' tab-active' : ''}`} onClick={() => setActiveTab('Non-Profit')}>
                      Non-Profit
                    </a>
                    <a className={`tab${activeTab === 'Animals' ? ' tab-active' : ''}`} onClick={() => setActiveTab('Animals')}>
                      Animals
                    </a>
                    <a className={`tab${activeTab === 'Medical' ? ' tab-active' : ''}`} onClick={() => setActiveTab('Medical')}>
                      Medical
                    </a>
                  </div>

                  {filteredCategory.map((category) => {
                    return (
                      <div className="m-6">
                        <h2>{category.name}</h2>
                        <p>{category.description}</p>
                      </div>
                    )
                  })}

                  {filteredGroups.map((group, index) => {
                    return (
                      <div className="card card-side bg-base-100 shadow-xl m-12">
                        <figure className="m-6">
                          <img
                            style={{
                              minHeight: '150px',
                              maxHeight: '150px',
                              maxWidth: '150px',
                              borderRadius: '20px',
                              objectFit: 'cover',
                            }}
                            src={group.imageUrl}
                            alt={`Image ${index}`}
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title m1-4">{group.title}</h2>
                          <p style={{ margin: '4px' }}>{group.description}</p>
                          <div className="card-actions justify-end">
                            {activeAddress && (
                              <button data-test-id="transactions-demo" className="btn m-2" onClick={toggleDemoModal}>
                                Fund this Organisation
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
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
