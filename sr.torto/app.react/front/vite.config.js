import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginImages from 'vite-plugin-vue-images'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginImages()
  ],
})
