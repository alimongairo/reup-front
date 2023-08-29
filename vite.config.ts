import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(
    eslint({ cache: true, fix: true, failOnError: false }),
  )],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http/...',
  //       changeOrigin: true,
  //       followRedirects: true,
  //     },
  //   },
  // },
})
