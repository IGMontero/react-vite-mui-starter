import { Navigate } from 'react-router-dom'
import { useAuthInitialized, useCurrentUser } from '../../core/auth'
import LoadingScreen from '../../layout/components/LoadingScreen'
// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
}

export default function GuestGuard(props: Props): JSX.Element {
  const me = useCurrentUser()
  const authInitialized = useAuthInitialized()

  if (!authInitialized) return <LoadingScreen />

  if (me) {
    return <Navigate to={'/dashboard'} />
  }

  return <>{props.children}</>
}
