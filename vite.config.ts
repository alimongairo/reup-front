
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';
import svgr from "vite-plugin-svgr";
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(process.env.local, process.cwd())
  return {
    plugins: [
      svgr(),
      react(
        eslint({ cache: true, fix: true, failOnError: false }),
      ),
    ],
    server: {
      port: 3000,
    },
    define: {
      'process.env': env,
    }

  }
})
