import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'App'
import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from './theme'
import { CssBaseline } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { RecoilRoot } from 'recoil'
import { SnackbarProvider } from 'notistack'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider>
        <SnackbarProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </SnackbarProvider>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
)
