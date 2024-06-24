import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [reactRefresh()],
  build: {
    // outDir: 'build',
    // emptyOutDir: true,
    // rollupOptions: {
    //   input: {
    //     App: resolve(root, 'index.html'),
    //     home: resolve(root, 'home', 'index.html'),
    //     landing: resolve(root, 'landing', 'index.html'),
    //     shop: resolve(root, 'shop', 'index.html')
    //   }
    // }
  }
})