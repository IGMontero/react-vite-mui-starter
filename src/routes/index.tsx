import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '../layout/AppLayout'
import { BaseLayout } from '../layout/BaseLayout'
import { RootError } from '../layout/RootError'
import SettingsLayout from './settings/SettingsLayout'
import AuthGuard from './guards/AuthGuard'
import GuestGuard from './guards/GuestGuard'

const Login = lazy(() => import('./auth/Login'))
const Privacy = lazy(() => import('./legal/Privacy'))
const Terms = lazy(() => import('./legal/Terms'))
const AccountDetails = lazy(() => import('./settings/AccountDetails'))
const Dashboard = lazy(() => import('./dashboard/Dashboard'))

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
