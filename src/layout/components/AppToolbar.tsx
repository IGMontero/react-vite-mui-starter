import { ArrowDropDown, NotificationsNone } from '@mui/icons-material'
import {
  AppBar,
  AppBarProps,
  Avatar,
  Button,
  Chip,
  IconButton,
  Link,
  Toolbar
} from '@mui/material'
import * as React from 'react'
import { useCurrentUser } from '../../core/auth'
import { Logo } from './Logo'
import { NotificationsMenu } from './NotificationsMenu'
import { UserMenu } from './UserMenu'
import { Link as NavLink } from 'react-router-dom'

export function AppToolbar(props: AppToolbarProps): JSX.Element {
  const { sx, ...other } = props
  const menuAnchorRef = React.createRef<HTMLButtonElement>()
  const me = useCurrentUser()

  const [anchorEl, setAnchorEl] = React.useState({
    userMenu: null as HTMLElement | null,
    notifications: null as HTMLElement | null
  })

  function openNotificationsMenu() {
    setAnchorEl((x) => ({ ...x, notifications: menuAnchorRef.current }))
  }

  function closeNotificationsMenu() {
    setAnchorEl((x) => ({ ...x, notifications: null }))
  }

  function openUserMenu() {
    setAnchorEl((x) => ({ ...x, userMenu: menuAnchorRef.current }))
  }

  function closeUserMenu() {
    setAnchorEl((x) => ({ ...x, userMenu: null }))
  }

  return (
    <AppBar
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, ...sx }}
      color="default"
      elevation={1}
      {...other}
    >
      <Toolbar>
        {/* App name / logo */}

        <Link
          sx={{ color: (theme) => theme.palette.primary.main }}
          color="inherit"
          underline="none"
          to="/dashboard"
          component={NavLink}
        >
          <Logo />
        </Link>

        <span style={{ flexGrow: 1 }} />

        {/* Account related controls (icon buttons) */}

        {/* {me !== undefined && <ThemeButton sx={{ mr: 1 }} />} */}

        {me && (
          <Chip
            sx={{
              height: 40,
              borderRadius: 20,
              fontWeight: 600,
              backgroundColor: (x) =>
                x.palette.mode === 'light'
                  ? x.palette.grey[300]
                  : x.palette.grey[700],
              '.MuiChip-avatar': { width: 32, height: 32 }
            }}
            component={NavLink as React.ElementType<any>}
            href="/settings/account"
            avatar={
              <Avatar
                alt={
                  me?.displayName ||
                  me?.email ||
                  (me?.isAnonymous ? 'Anonymous' : '')
                }
                src={me?.photoURL || undefined}
              />
            }
            label={getFirstName(
              me?.displayName ||
                me?.email ||
                (me?.isAnonymous ? 'Anonymous' : '')
            )}
          />
        )}
        {me && (
          <IconButton
            sx={{
              marginLeft: (x) => x.spacing(1),
              backgroundColor: (x) =>
                x.palette.mode === 'light'
                  ? x.palette.grey[300]
                  : x.palette.grey[700],
              width: 40,
              height: 40
            }}
            children={<NotificationsNone />}
            onClick={openNotificationsMenu}
          />
        )}
        {me && (
          <IconButton
            ref={menuAnchorRef}
            sx={{
              marginLeft: (x) => x.spacing(1),
              backgroundColor: (x) =>
                x.palette.mode === 'light'
                  ? x.palette.grey[300]
                  : x.palette.grey[700],
              width: 40,
              height: 40
            }}
            children={<ArrowDropDown />}
            onClick={openUserMenu}
          />
        )}
        {me === null && (
          <Button
            component={NavLink as React.ElementType<any>}
            variant="text"
            href="/login"
            color="inherit"
            children="Log in"
          />
        )}
        {me === null && (
          <Button
            component={NavLink as React.ElementType<any>}
            variant="outlined"
            href="/signup"
            color="inherit"
            children="Create an account"
          />
        )}
      </Toolbar>

      {/* Pop-up menus */}

      <NotificationsMenu
        anchorEl={anchorEl.notifications}
        onClose={closeNotificationsMenu}
        PaperProps={{ sx: { marginTop: '8px' } }}
      />
      <UserMenu
        anchorEl={anchorEl.userMenu}
        onClose={closeUserMenu}
        PaperProps={{ sx: { marginTop: '8px' } }}
      />
    </AppBar>
  )
}

function getFirstName(displayName: string): string {
  return displayName && displayName.split(' ')[0]
}

type AppToolbarProps = Omit<AppBarProps, 'children'>
