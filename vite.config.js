import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif', '**/*.webp', '**/*.avif'],
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
