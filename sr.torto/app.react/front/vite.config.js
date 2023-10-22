import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Se o seu código estiver em um diretório 'src', ajuste conforme necessário
    },
  },
  server: {
    open: true,
  },
  build: {
    assetsInlineLimit: 0, // Permite a inclusão de imagens diretamente no código
  },
});

