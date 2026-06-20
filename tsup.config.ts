import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['server.ts'],
  format: ['esm'],
  target: 'node22',
  platform: 'node',
  clean: true,
  skipNodeModulesBundle: true,
})
