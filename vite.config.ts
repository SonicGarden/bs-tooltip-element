import {defineConfig} from 'vite'

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
  }
})
