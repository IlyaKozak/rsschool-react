/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    silent: true,
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: true,
    },
  },
  optimizeDeps: { include: ['react/jsx-dev-runtime'] },
  build: {
    minify: false,
  },
  ssr: {
    noExternal: ['@reduxjs/toolkit/'],
  },
});
