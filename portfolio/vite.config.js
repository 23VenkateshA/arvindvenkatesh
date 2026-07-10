import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Served from https://23venkatesha.github.io/arvindvenkatesh/
  base: '/arvindvenkatesh/',
  plugins: [react(), tailwindcss()],
})
