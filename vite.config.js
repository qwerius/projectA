import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // Anda bisa menambahkan pengaturan server di sini jika diperlukan
    port: 5173, // Port default Vite
  },
  resolve: {
    alias: {
      '@': '/src', // Alias untuk memudahkan import dari folder src
    },
  },
})
