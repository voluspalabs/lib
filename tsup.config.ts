import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/hooks/*', 'src/utils/*'],
  outDir: 'dist',
  format: ['esm'],
  dts: true,
  clean: true,
  treeshake: true,
  splitting: true,
  skipNodeModulesBundle: true,
  target: 'es2022',

  // Prod
  minify: true,
  bundle: true,
})
