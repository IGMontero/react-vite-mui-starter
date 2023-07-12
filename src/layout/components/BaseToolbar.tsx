import { AppBar, AppBarProps, Box, Link, Toolbar } from '@mui/material'
import { Logo } from './Logo'
import { Link as NavLink } from 'react-router-dom'

export function BaseToolbar(props: AppBarProps): JSX.Element {
  return (
    <AppBar color="transparent" elevation={0} {...props}>
      <Toolbar>
        {/* Name / Logo */}

        <Link
          // sx={{ color: (theme) => theme.palette.primary.main }}
          color="inherit"
          underline="none"
          to="/login"
          component={NavLink}
        >
          <Logo />
        </Link>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} component="span" />

        {/* Close button */}
        {/* <IconButton component={Link} href="/">
          <Close />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  )
}
