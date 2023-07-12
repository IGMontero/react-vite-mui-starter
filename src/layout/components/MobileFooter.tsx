import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import { useCurrentRoute } from '../../hooks'
import { navigationItems } from '../../core/navigation'

export default function MobileFooter(): JSX.Element {
  const currentRoute = useCurrentRoute()
  const navigate = useNavigate()

  const handleChangeNavigation = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: any
  ) => {
    navigate(newValue)
  }

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={currentRoute}
        onChange={handleChangeNavigation}
      >
        {navigationItems.map((item) => {
          const { path, title, icon: Icon } = item
          return (
            <BottomNavigationAction
              key={title}
              value={path}
              label={title}
              icon={<Icon />}
            />
          )
        })}
      </BottomNavigation>
    </Paper>
  )
}
