import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import strip from 'vite-plugin-strip';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(),
    strip({
      functions: ['console.log', 'console.debug', 'console.warn', 'console.error']
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    }
  },
  define: {
    // Some libraries use the global object, even though it doesn't exist in the browser.
    // Alternatively, we could add `<script>window.global = window;</script>` to index.html.
    // https://github.com/vitejs/vite/discussions/5912
    global: {},
  },
  build: {
    rollupOptions: {
        output:{
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    return id.toString().split('node_modules/')[1].split('/')[0].toString();
                }
            }
        }
    }
  },
})
