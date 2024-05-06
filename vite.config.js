import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/rog_14_0124',
  plugins: [react()],
  root: './vite',
  base: '/vite',
  // add conf for php
  build: {
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
