import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
    server: {
    host: true,         // <-- this enables LAN access
    port: 5173          // optional: set a fixed port
  }
})
