import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      '@instinct/files': path.resolve(__dirname, 'src/instinct-files.tsx'),
    },
  },
});
