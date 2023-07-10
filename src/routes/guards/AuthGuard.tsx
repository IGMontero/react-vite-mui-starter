import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useCurrentUser } from '../../core/auth'
// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
}

export default function AuthGuard(props: Props): JSX.Element {
  const me = useCurrentUser()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [requestedLocation, setRequestedLocation] = useState(null)

  if (!me) {
    // if (pathname !== requestedLocation) {
    //   setRequestedLocation(pathname)
    // }
    // return <Login />
    return <Navigate to={'login'} />
  }

  // if (requestedLocation && pathname !== requestedLocation) {
  //   setRequestedLocation(null)
  //   return <Navigate to={requestedLocation} />
  // }

  return <>{props.children}</>
}
