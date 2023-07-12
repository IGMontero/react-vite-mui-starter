/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import {
  Alert,
  Button,
  Container,
  Divider,
  Link,
  TextField,
  Typography
} from '@mui/material'
import { useLocation } from 'react-router-dom'
import { AuthIcon } from '../../icons/AuthIcon'
import {
  Props,
  useHandleChange,
  useHandleSignIn,
  useHandleSubmit,
  useState,
  useSwitchSAML
} from './Login.hooks'
import { Notice } from './Notice'

/**
 * The login and registration page inspired by Notion. Example:
 *
 *    https://www.notion.so/login
 *    https://www.notion.so/signup
 */
export default function Login(props: Props): JSX.Element {
  const [state, setState] = useState(props)
  const handleChange = useHandleChange(setState)
  const handleSignIn = useHandleSignIn(setState)
  const [handleSubmit, submitInFlight] = useHandleSubmit(state, setState)
  const switchSAML = useSwitchSAML(setState)
  const { pathname, search } = useLocation()
  const isSignUp = props.mode === 'signup'

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
        flexGrow: 0.8
      }}
    >
      <Typography
        sx={{ mb: 2, fontWeight: 800, order: -3 }}
        variant="h1"
        align="center"
        children={isSignUp ? 'Sign Up' : 'Login'}
      />

      {state.error && (
        <Alert
          sx={{ mb: 2, order: -2 }}
          severity="error"
          children={state.error}
        />
      )}

      {state.otpSent && (
        <Alert sx={{ mb: 2 }} severity="success">
          Please enter the One Time Password (OTP) that has been sent to your
          email address.
        </Alert>
      )}

      <form id="login-form" onSubmit={handleSubmit}>
        {state.otpSent ? (
          <TextField
            key="code"
            name="code"
            variant="outlined"
            label="OTP code"
            placeholder="Enter OTP code..."
            InputLabelProps={{ shrink: true }}
            InputProps={{ sx: { fontWeight: 700 } }}
            onChange={handleChange}
            disabled={submitInFlight}
            autoComplete="off"
            autoFocus
            fullWidth
            required
          />
        ) : (
          <>
            <TextField
              sx={{ mb: 2 }}
              key="email"
              name="email"
              type="email"
              variant="outlined"
              label="Your email"
              placeholder="Enter your email address..."
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
              disabled={submitInFlight}
              fullWidth
              required
            />

            <TextField
              key="password"
              name="password"
              type="password"
              variant="outlined"
              label="Your password"
              placeholder="Enter your password..."
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
              disabled={submitInFlight}
              fullWidth
              required
            />
          </>
        )}
      </form>

      <Button
        color="inherit"
        form="login-form"
        type="submit"
        variant="outlined"
        size="large"
        children={
          state.otpSent
            ? 'Sign In'
            : isSignUp
            ? 'Sign Up with Email'
            : `Continue with ${state.saml ? 'SAML' : 'Email'}`
        }
        disabled={submitInFlight}
        fullWidth
      />

      {/* <Typography
        sx={{ color: 'text.secondary' }}
        variant="body2"
        align="center"
      >
        You can also{' '}
        <Link
          sx={{ ':hover': { color: 'text.primary' } }}
          color="inherit"
          href={`${pathname}${search}`}
          onClick={switchSAML}
        >
          continue with {state.saml ? 'email' : 'SAML SSO'}
        </Link>
      </Typography> */}

      {isSignUp ? (
        <Typography
          sx={{ color: 'text.secondary' }}
          variant="body2"
          align="center"
        >
          Already have an account?{' '}
          <Link
            sx={{ ':hover': { color: 'text.primary' } }}
            color="inherit"
            href={`login${search}`}
            // onClick={switchSAML}
          >
            Log In
          </Link>
        </Typography>
      ) : (
        <Typography
          sx={{ color: 'text.secondary' }}
          variant="body2"
          align="center"
        >
          Don&apos;t have an account?{' '}
          <Link
            sx={{ ':hover': { color: 'text.primary' } }}
            color="inherit"
            href={`signup${search}`}
          >
            Sign Up
          </Link>
        </Typography>
      )}

      <Divider
        sx={{ color: 'divider', order: isSignUp ? undefined : -1 }}
        children="OR"
      />

      <Button
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? 'white' : undefined,
          order: isSignUp ? undefined : -2
        }}
        color="inherit"
        type="submit"
        variant="outlined"
        size="large"
        children="Continue with Google"
        startIcon={<AuthIcon variant="google.com" />}
        onClick={handleSignIn}
        data-method="google.com"
        fullWidth
      />

      {/* <Button
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? 'white' : undefined,
          order: isSignUp ? undefined : -2
        }}
        color="inherit"
        type="submit"
        variant="outlined"
        size="large"
        children="Continue with Apple"
        startIcon={<AuthIcon variant="apple.com" />}
        onClick={handleSignIn}
        data-method="apple.com"
        fullWidth
      /> */}

      <Button
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? 'white' : undefined,
          order: isSignUp ? undefined : -2
        }}
        color="inherit"
        type="submit"
        variant="outlined"
        size="large"
        children="Continue as anonymous"
        startIcon={<AuthIcon color="inherit" variant="anonymous" />}
        onClick={handleSignIn}
        data-method="anonymous"
        fullWidth
      />

      <Notice sx={{ mt: 4 }} />
    </Container>
  )
}
