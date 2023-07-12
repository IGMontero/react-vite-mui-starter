import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'

export const navigationRoutes = [
  {
    path: '/dashboard',
    title: 'Home',
    icon: HomeIcon
  },
  {
    path: '/search',
    title: 'Search',
    icon: SearchIcon
  },
  {
    path: '/settings/account',
    title: 'Profile',
    icon: PersonIcon
  }
]

export const navigationItems = Object.values(navigationRoutes)
