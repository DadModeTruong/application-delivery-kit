import { readFile } from 'node:fs/promises'

const source = await readFile(new URL('../src/routes/route-manifest.ts', import.meta.url), 'utf8')
const paths = [...source.matchAll(/path: ["']([^"']+)["']/g)].map((match) => match[1])
const duplicates = paths.filter((path, index) => paths.indexOf(path) !== index)
if (duplicates.length > 0) {
  console.error('Duplicate route paths: ' + [...new Set(duplicates)].join(', '))
  process.exit(1)
}
if (!paths.includes('/')) {
  console.error('Route manifest must include /')
  process.exit(1)
}
console.log('Validated ' + paths.length + ' route paths.')
