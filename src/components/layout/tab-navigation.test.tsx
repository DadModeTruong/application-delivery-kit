import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { LayoutProvider } from './layout-provider'
import { TabNavigation } from './tab-navigation'

afterEach(cleanup)

describe('TabNavigation', () => {
  it('renders no landmark when no items resolve', () => {
    render(<TabNavigation aria-label="Section navigation" items={[]} />)

    expect(screen.queryByRole('navigation', { name: 'Section navigation' })).toBeNull()
  })

  it('prefers explicit items and activeHref over LayoutProvider context', () => {
    render(
      <LayoutProvider
        tabNavigation={[{ href: '/context', label: 'Context item' }]}
        activeHref="/context"
      >
        <TabNavigation
          aria-label="Section navigation"
          items={[{ href: '/provided', label: 'Provided item' }]}
          activeHref="/provided"
        />
      </LayoutProvider>,
    )

    expect(screen.queryByRole('link', { name: 'Context item' })).toBeNull()
    expect(screen.getByRole('link', { name: 'Provided item' }).getAttribute('href')).toBe(
      '/provided',
    )
    expect(screen.getByRole('link', { name: 'Provided item' }).getAttribute('aria-current')).toBe(
      'page',
    )
  })

  it('renders exact hrefs and marks only the exact active destination current', () => {
    render(
      <TabNavigation
        aria-label="Section navigation"
        items={[
          { href: '/components/header', label: 'Header' },
          { href: '/components/sidebar', label: 'Sidebar' },
        ]}
        activeHref="/components/sidebar"
      />,
    )

    expect(screen.getByRole('link', { name: 'Header' }).getAttribute('href')).toBe(
      '/components/header',
    )
    expect(screen.getByRole('link', { name: 'Header' }).getAttribute('aria-current')).toBeNull()
    expect(screen.getByRole('link', { name: 'Sidebar' }).getAttribute('aria-current')).toBe('page')
  })

  it('adds new-window attributes and an accessible hint to external links', () => {
    render(
      <TabNavigation
        aria-label="Resource navigation"
        items={[{ href: 'https://example.com', label: 'Reference', external: true }]}
      />,
    )

    const link = screen.getByRole('link', { name: /Reference/ })
    expect(link.getAttribute('target')).toBe('_blank')
    expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    expect(screen.getByText('(opens in new window)')).toBeTruthy()
  })
})
