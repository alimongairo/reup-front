import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(
      eslint({ cache: true, fix: true, failOnError: false }),
    ),
  ],
  server: {
    port: 3000,
  },

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
