import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/hooks/*', 'src/utils/*'],
  outDir: 'dist',
  format: ['esm'],
  sourcemap: true,
  dts: true,
  clean: true,
  treeshake: true,
  skipNodeModulesBundle: true,
  target: 'esnext',
  external: ['react', 'react-dom'],
  minify: true,
  bundle: true,
  splitting: true,
})
