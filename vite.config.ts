import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import envars from 'envars'
import { Config, EnvName } from './src/core/config.js'
import { resolve } from 'node:path'

const envNames: EnvName[] = ['prod', 'test', 'local']

const configs = envNames.map((envName): [EnvName, Config] => {
  const envDir = resolve(__dirname, './env')
  const env = envars.config({ env: envName, cwd: envDir })

  return [
    envName,
    {
      app: {
        env: envName,
        name: env.APP_NAME,
        origin: env.APP_ORIGIN,
        hostname: new URL(env.APP_ORIGIN).hostname
      },
      firebase: {
        projectId: env.GOOGLE_CLOUD_PROJECT,
        appId: env.FIREBASE_APP_ID,
        apiKey: env.FIREBASE_API_KEY,
        authDomain: env.FIREBASE_AUTH_DOMAIN,
        measurementId: env.GA_MEASUREMENT_ID
      }
    }
  ]
})

process.env.VITE_CONFIG = JSON.stringify(Object.fromEntries(configs))

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/test.{ts,tsx}']
  }
})
