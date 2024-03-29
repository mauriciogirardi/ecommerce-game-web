/// <reference types="vitest" />

import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  },
  test: {
    setupFiles: ['./tests/setup.ts'],
    globals: true,
    environment: 'happy-dom',
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.test.{ts,tsx}', 'src/components/**/*.{ts,tsx}'],
      exclude: [
        'src/@types/**',
        'src/app/**',
        'src/components/**/*.stories.tsx'
      ]
    },
    watch: {
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/.next/**',
        '**/.vscode/**',
        '**/.husky/**',
        '**/coverage/**'
      ]
    }
  }
})
