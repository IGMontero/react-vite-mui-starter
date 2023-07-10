import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function SettingsLayout(): JSX.Element {
  return (
    <Box>
      <Outlet />
    </Box>
  )
}
