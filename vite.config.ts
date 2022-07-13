import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/bs-tooltip-element.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^bootstrap/
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => ['bs-tooltip'].includes(tag)
        }
      }
    })
  ]
})
