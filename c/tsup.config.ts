import { defineConfig } from 'tsup'

export default defineConfig({
  dts: { resolve: true },
  entry: ['src/index.ts'],
  format: 'esm',
})
