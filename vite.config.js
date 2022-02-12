import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://jjhay-bot.github.io/grid-list',
  plugins: [react()]
})
