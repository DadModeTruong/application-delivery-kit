import { describe, expect, it } from 'vitest'
import { normalizePath } from './path-utils'

describe('normalizePath', () => {
  it('removes trailing slashes while preserving the root path', () => {
    expect(normalizePath('/layouts/sidebar/')).toBe('/layouts/sidebar')
    expect(normalizePath('/')).toBe('/')
  })

  it('converts an empty pathname to the root path', () => {
    expect(normalizePath('')).toBe('/')
  })
})
