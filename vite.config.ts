import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'HorizontalCollapse',
      fileName: 'horizontalcollapse',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
