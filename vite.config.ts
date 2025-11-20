import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Vamsi-Shetty.github.io',
  server: {
    port: 3000,
  },
})
