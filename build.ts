import { Glob } from 'bun'

await Bun.$`rm -rf dist`

const entrypoints = [
  ...new Glob('src/hooks/*.ts').scanSync('.'),
  ...new Glob('src/utils/*.ts').scanSync('.'),
]

const result = await Bun.build({
  entrypoints,
  outdir: './dist',
  format: 'esm',
  target: 'browser',
  packages: 'external',
  external: ['react', 'react-dom'],
  sourcemap: 'linked',
  minify: true,
  splitting: true,
  root: './src',
})

if (!result.success) {
  for (const log of result.logs) {
    // biome-ignore lint/suspicious/noConsole: build script output
    console.error(log)
  }
  process.exit(1)
}

await Bun.$`tsc --project tsconfig.build.json`
