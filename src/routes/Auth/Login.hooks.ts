import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn, SignInMethod, signUpWithEmail } from '../../core/firebase.js'

/**
 * Handles login / signup via Email
 */
export function useHandleSubmit(
  state: State,
  setState: SetState
): [submit: React.FormEventHandler, inFlight: boolean] {
  const [inFlight, setInFlight] = React.useState(false)
  const navigate = useNavigate()

  return [
    React.useCallback(
      async (event) => {
        event.preventDefault()
        try {
          setInFlight(true)

          let credential
          if (state.mode === 'login') {
            const method = 'email'
            credential = await signIn({
              method,
              email: state.email,
              password: state.password
            })
          } else {
            credential = await signUpWithEmail({
              email: state.email,
              password: state.password
            })
          }

          if (credential.user) {
            setState((prev) => (prev.error ? { ...prev, error: null } : prev))
            navigate('/')
          }
        } catch (err) {
          const error = (err as Error)?.message ?? 'Login failed.'
          setState((prev) => ({ ...prev, error }))
        } finally {
          setInFlight(false)
        }
      },
      [state.email, state.password, state.mode]
    ),
    inFlight
  ]
}

/**
 * The initial state of the Login component
 */
export function useState(props: Props) {
  return React.useState({
    mode: props.mode,
    email: '',
    password: '',
    code: '',
    saml: false,
    otpSent: undefined as boolean | null | undefined,
    error: undefined as string | null | undefined
  })
}

export function useHandleChange(setState: SetState) {
  return React.useCallback(
    function (event: React.ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target as Input
      setState((prev) =>
        prev[name] === value ? prev : { ...prev, [name]: value }
      )
    },
    [setState]
  )
}

export function useSwitchSAML(setState: SetState) {
  return React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      setState((prev) => ({
        ...prev,
        saml: !prev.saml,
        otpSent: false,
        code: ''
      }))
    },
    [setState]
  )
}

export function useHandleSignIn(setState: SetState) {
  const navigate = useNavigate()

  return React.useCallback(
    async function (event: React.MouseEvent<HTMLElement>) {
      try {
        const method = event.currentTarget.dataset.method as SignInMethod
        const credential = await signIn({ method })
        if (credential.user) {
          setState((prev) => (prev.error ? { ...prev, error: null } : prev))
          navigate('/')
        }
      } catch (err) {
        const error = (err as Error)?.message ?? 'Login failed.'
        setState((prev) => ({ ...prev, error }))
      }
    },
    [navigate, setState]
  )
}

export type Props = {
  mode: 'login' | 'signup'
}

export type State = ReturnType<typeof useState>[0]
export type SetState = ReturnType<typeof useState>[1]
export type Input = { name: keyof State; value: string }
