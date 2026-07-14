import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves from a /arvindvenkatesh/ subpath; Vercel (and other
  // root-domain hosts) serve from /, so only apply the subpath for GH Pages.
  base: process.env.VERCEL ? '/' : '/arvindvenkatesh/',
  plugins: [react(), tailwindcss()],
})
