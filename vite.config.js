import react from 'react';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.json']
  },
});
