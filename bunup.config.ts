import { defineConfig } from 'bunup'

export default defineConfig({
  entry: ['src/hooks/*.ts', 'src/utils/*.ts'],
  format: 'esm',
  dts: {
    splitting: true,
  },
  target: 'browser',
  sourcemap: 'linked',
  splitting: true,
  sourceBase: './src',
  clean: true,
  exports: true,
  emitDCEAnnotations: true,
  drop: ['debugger'],
  unused: {
    level: 'error',
  },
})
