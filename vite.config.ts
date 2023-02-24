import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'HorizontalCollapse',
      // the proper extensions will be added
      fileName: 'horizontalcollapse',
      // fileName: (format) => 'horizontalcollapse.'+format + '.js',
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
