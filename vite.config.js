import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './vite',
  base: '/vite',
  // add conf for php
  build: {
    assetsDir: '',
    outDir: '../public/assets',
    manifest: true,
    rollupOptions: {
      /* output: {
        manualChunks: undefined,
      }, */
      input: {
        'main.jsx': './vite/main.jsx',
      },
    },
  },
});
