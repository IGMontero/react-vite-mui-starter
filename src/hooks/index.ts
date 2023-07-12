import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

export function useHandleInputChange(setState: any) {
  return React.useCallback(
    function (event: React.ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target as HTMLInputElement
      setState((prev: any) =>
        prev[name] === value ? prev : { ...prev, [name]: value }
      )
    },
    [setState]
  )
}

export function useCurrentRoute() {
  const location = useLocation()
  const [route, setRoute] = React.useState(location.pathname)
  React.useEffect(() => {
    setRoute(location.pathname)
  }, [location])
  return route
}

export function useIsMobile() {
  const theme = useTheme()
  const mq = useMediaQuery(theme.breakpoints.down('sm'))
  const [is, setIs] = React.useState(mq)
  React.useEffect(() => {
    if (mq) {
      setIs(true)
    } else {
      setIs(false)
    }
  }, [mq])
  return is
}

export function useIsTablet() {
  const theme = useTheme()
  const mq = useMediaQuery(theme.breakpoints.down('md'))
  const [is, setIs] = React.useState(mq)
  React.useEffect(() => {
    if (mq) {
      setIs(true)
    } else {
      setIs(false)
    }
  }, [mq])
  return is
}
