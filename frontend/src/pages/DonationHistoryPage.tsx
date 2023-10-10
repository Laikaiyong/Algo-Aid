import { SnackbarProvider } from 'notistack'

export default function DonationHistory() {
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

          <div className="w-full bg-base-300 p-4">
            <h1 className="text-2xl font-semibold">MyAlgorand Donation History</h1>
          </div>

          <div className="hero min-h-screen bg-teal-400 ">
            <div className="m-4">
              <table className="min-w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      TxID
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Block
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Age
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      From
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      To
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Fee
                    </th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <a
                        href={'https://testnet.algoexplorer.io/tx/QQE5PFUBOYSS4ZRUYP5WI47GVSYN6VHFQFZVVND7QNX6PSXME7HQ'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        QQE5PFUBO...
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">33548287</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">5 mins</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <a
                        href={'https://testnet.algoexplorer.io/address/4MVOEIBTPAQA6ZOSAXUD6TH35JM3FAKH2YWH4QRVKULC7KYZ7ZSSBEBNIQ'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        4MVOEIBT...
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <a
                        href={'https://testnet.algoexplorer.io/address/S2RBDBW2PVPW5V2UPW7MGMJEKX6NMF2XO7Z3APM6W2PO736YNXAU6TSXIU'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        S2RBDBW2...
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">10 Algos</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">0.001 Algos</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Transfer</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <a
                        href={'https://testnet.algoexplorer.io/tx/UZEGUADFVGWKOFMRAHHFJGBFD5GGJYBCF323HIUJQAMRGYXUMS5A'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        UZEGUADF...
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">33548240</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">3 mins</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <a
                        href={'https://testnet.algoexplorer.io/address/DISPE57MNLYKOMOK3H5IMBAYOYW3YL2CSI6MDOG3RDXSMET35DG4W6SOTI'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        DISPE5MN...
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <a
                        href={'https://testnet.algoexplorer.io/address/4MVOEIBTPAQA6ZOSAXUD6TH35JM3FAKH2YWH4QRVKULC7KYZ7ZSSBEBNIQ'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        4MVOEIBT...
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">20 Algos</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">0.001 Algos</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Transfer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
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
