import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '../layout/AppLayout.js'
import { BaseLayout } from '../layout/BaseLayout.js'
import { RootError } from '../layout/RootError.js'
import SettingsLayout from './settings/SettingsLayout.js'
import AccountDetails from './settings/AccountDetails.js'
import Privacy from './legal/Privacy.js'
import Terms from './legal/Terms.js'
import AuthGuard from './guards/AuthGuard.js'
import GuestGuard from './guards/GuestGuard.js'

const Login = lazy(() => import('./auth/Login.js'))

const Dashboard = lazy(() => import('./dashboard/Dashboard.js'))

/**
 * Application routes
 * https://reactrouter.com/en/main/routers/create-browser-router
 */
export const router = createBrowserRouter([
  {
    path: '',
    element: (
      <GuestGuard>
        <BaseLayout />
      </GuestGuard>
    ),
    errorElement: <RootError />,
    children: [
      { path: 'login', element: <Login mode="login" /> },
      { path: 'signup', element: <Login mode="signup" /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'terms', element: <Terms /> },
      {
        path: '',
        element: <Navigate to="/login" replace />
      }
    ]
  },
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <RootError />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: 'dashboard',
        element: (
          <AuthGuard>
            <Dashboard />
          </AuthGuard>
        )
      },
      {
        path: 'settings',
        element: (
          <AuthGuard>
            <SettingsLayout />
          </AuthGuard>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="/settings/account" />
          },
          { path: 'account', element: <AccountDetails /> }
        ]
      }
    ]
  }
])
