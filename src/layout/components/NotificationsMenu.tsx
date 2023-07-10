import { ListItemText, Menu, MenuItem, MenuProps } from '@mui/material'

export function NotificationsMenu(props: NotificationsMenuProps): JSX.Element {
  const { PaperProps, ...other } = props

  return (
    <Menu
      id="notifications-menu"
      role="menu"
      open={Boolean(props.anchorEl)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{ ...PaperProps, sx: { ...PaperProps?.sx, width: 320 } }}
      {...other}
    >
      <MenuItem>
        <ListItemText secondary="You have no notifications." />
      </MenuItem>
    </Menu>
  )
}

type NotificationsMenuProps = Omit<
  MenuProps,
  'id' | 'role' | 'open' | 'anchorOrigin' | 'transformOrigin'
>
