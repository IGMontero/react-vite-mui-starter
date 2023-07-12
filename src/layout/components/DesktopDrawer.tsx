import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useCurrentRoute } from '../../hooks'
import { navigationItems } from '../../core/navigation'
import { drawerWidth } from './constants'
import FoodBankIcon from '@mui/icons-material/FoodBank'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import StarBorder from '@mui/icons-material/StarBorder'

export default function DesktopDrawer(): JSX.Element {
  const currentRoute = useCurrentRoute()
  const navigate = useNavigate()
  const [charityDrawerOpen, setCharityDrawerOpen] = useState(false)

  const handleChangeNavigation = (path: string) => {
    navigate(path)
  }

  const handleToggleCharityDrawer = () => {
    setCharityDrawerOpen(!charityDrawerOpen)
  }

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="navigation menu"
    >
      <Drawer
        elevation={2}
        color="default"
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
        open
      >
        <Paper sx={{ height: '100%' }}>
          <Toolbar />
          <Divider />
          <List>
            {navigationItems.map((item) => {
              const { path, title, icon: Icon } = item
              const isSelected = currentRoute === path
              return (
                <ListItem key={title} disablePadding>
                  <ListItemButton
                    selected={isSelected}
                    onClick={() => handleChangeNavigation(path)}
                  >
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={title} />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
          <Divider />
          {/* 
          Donate.. */}
          <span style={{ flexGrow: 1 }} />
          <List>
            <ListItemButton onClick={handleToggleCharityDrawer}>
              <ListItemIcon>
                <FoodBankIcon />
              </ListItemIcon>
              <ListItemText primary="Support a Charity" />
              {charityDrawerOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={charityDrawerOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Charity One" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Paper>
      </Drawer>
    </Box>
  )
}
