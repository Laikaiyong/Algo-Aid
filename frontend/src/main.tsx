import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FundRaisePage from './App'
import ErrorBoundary from './components/ErrorBoundary'
import './styles/main.css'

import CategoryPage from './pages/CategoryPage'
import DashboardPage from './pages/DashboardPage'
import DonationHistoryPage from './pages/DonationHistoryPage'
import ProfilePage from './pages/ProfilePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
  },
  {
    path: '/fundraise',
    element: <FundRaisePage />,
  },
  {
    path: '/category',
    element: <CategoryPage />,
  },
  {
    path: '/donation',
    element: <DonationHistoryPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>,
)
