import { getAnalytics } from 'firebase/analytics'
import { FirebaseError, initializeApp, type FirebaseApp } from 'firebase/app'
import {
  FacebookAuthProvider,
  fetchSignInMethodsForEmail,
  getAuth,
  GoogleAuthProvider,
  OAuthCredential,
  signInAnonymously,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  type Auth,
  type UserCredential
} from 'firebase/auth'
import { config } from './config.js'
export { AuthErrorCodes, linkWithCredential } from 'firebase/auth'
export { FirebaseError }

export const app = initializeApp(config.firebase)
export const auth = getAuth(app)
export const analytics = getAnalytics(app)

export function signIn(options: SignInOptions): Promise<UserCredential> {
  if (options.method === GoogleAuthProvider.PROVIDER_ID) {
    // https://developers.google.com/identity/protocols/oauth2/web-server
    const provider = new GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
    provider.setCustomParameters({
      ...(options.email && { login_hint: options.email }),
      prompt: 'consent'
    })
    return signInWithPopup(auth, provider)
  }

  // https://developers.facebook.com/docs/facebook-login/web
  // https://developers.facebook.com/docs/permissions/reference/
  if (options.method === FacebookAuthProvider.PROVIDER_ID) {
    const provider = new FacebookAuthProvider()
    provider.addScope('public_profile')
    provider.addScope('email')
    return signInWithPopup(auth, provider)
  }

  if (options.method === 'anonymous') {
    return signInAnonymously(auth)
  }

  if (options.method === 'email') {
    if (!options.email) {
      throw new Error('Email is required')
    }

    if (!options.password) {
      throw new Error('Password is required')
    }

    return signInWithEmailAndPassword(auth, options.email, options.password)
  }

  throw new Error(`Not supported: ${options.method}`)
}

export function signUpWithEmail(
  options: SignUpOptions
): Promise<UserCredential> {
  if (!options.email) {
    throw new Error('Email is required')
  }

  if (!options.password) {
    throw new Error('Password is required')
  }

  return createUserWithEmailAndPassword(auth, options.email, options.password)
}

export async function getExistingAccountFromError(
  error: FirebaseError | Error | unknown,
  method: SignInMethod
): Promise<ExistingAccount | undefined> {
  if (
    !(error instanceof FirebaseError) ||
    error.code !== 'auth/account-exists-with-different-credential' ||
    !error.customData?.email
  ) {
    return undefined
  }

  const email = error.customData?.email as string
  const signInMethods = (await fetchSignInMethodsForEmail(
    auth,
    email
  )) as SignInMethod[]

  if (signInMethods.length === 0) {
    return undefined
  }

  let credential: OAuthCredential | null = null

  if (method === GoogleAuthProvider.PROVIDER_ID) {
    credential = GoogleAuthProvider.credentialFromError(error)
  }

  if (method === FacebookAuthProvider.PROVIDER_ID) {
    credential = FacebookAuthProvider.credentialFromError(error)
  }

  return credential ? { email, credential, signInMethods } : undefined
}

// #region TypeScript declarations

export type SignInMethod =
  | typeof GoogleAuthProvider.PROVIDER_ID
  | typeof FacebookAuthProvider.PROVIDER_ID
  | 'apple.com'
  | 'anonymous'
  | 'email'

export type SignInOptions = {
  method: SignInMethod
  email?: string
  password?: string
}

export type SignUpOptions = {
  email?: string
  password?: string
}

export type Firebase = {
  app: FirebaseApp
  auth: Auth
  signIn: typeof signIn
}

export type ExistingAccount = {
  email: string
  signInMethods: SignInMethod[]
  credential: OAuthCredential
}
