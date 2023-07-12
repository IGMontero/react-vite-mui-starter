import { Box, Toolbar } from '@mui/material'
import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { AppToolbar } from './components/AppToolbar'
import Copyright from './components/Copyright'
import MobileFooter from './components/MobileFooter'
import { useIsTablet } from '../hooks'
import DesktopDrawer from './components/DesktopDrawer'
import { drawerWidth } from './components/constants'

/**
 * The primary application layout.
 */
export function AppLayout(): JSX.Element {
  const isTablet = useIsTablet()

  return (
    <React.Fragment>
      <AppToolbar />
      <Toolbar />

      {!isTablet && (
        <React.Suspense fallback={<div />}>
          <DesktopDrawer />
        </React.Suspense>
      )}

      <Box
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` }
        }}
      >
        <React.Suspense>
          <Outlet />
        </React.Suspense>

        <Copyright />
      </Box>

      {isTablet && (
        <React.Suspense fallback={<div />}>
          <MobileFooter />
        </React.Suspense>
      )}
    </React.Fragment>
  )
}
