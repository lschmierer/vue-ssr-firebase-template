import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const ssr = process.argv.includes('--ssr')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: ssr
      ? {}
      : {
        input: ['src/_index.html']
      }
  }
})
