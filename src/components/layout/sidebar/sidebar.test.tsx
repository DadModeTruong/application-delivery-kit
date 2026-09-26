import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { LayoutProvider } from '../layout-provider'
import { Sidebar } from './sidebar'

afterEach(cleanup)

describe('Sidebar', () => {
  it('renders an explicitly supplied tree without reading LayoutProvider context', () => {
    render(
      <LayoutProvider activeHref="/context">
        <Sidebar
          aria-label="Section navigation"
          items={[{ href: '/provided', label: 'Provided item', current: true }]}
        />
      </LayoutProvider>,
    )

    expect(screen.getByRole('navigation', { name: 'Section navigation' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Provided item' }).getAttribute('aria-current')).toBe(
      'page',
    )
  })

  it('uses explicit current state and keeps one labelled navigation landmark', () => {
    render(
      <Sidebar
        aria-label="Documentation navigation"
        items={[
          {
            label: 'Guides',
            items: [
              { href: '/guides/intro', label: 'Introduction' },
              { href: '/guides/sidebar', label: 'Sidebar', current: true },
            ],
          },
        ]}
        activeHref="/guides/other"
      />,
    )

    expect(screen.getAllByRole('navigation')).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Sidebar' }).getAttribute('aria-current')).toBe('page')
    expect(
      screen.getByRole('link', { name: 'Introduction' }).getAttribute('aria-current'),
    ).toBeNull()
  })

  it('renders external links with a new-window hint', () => {
    render(
      <Sidebar
        aria-label="Resources navigation"
        items={[{ href: 'https://example.com', label: 'Reference', external: true }]}
      />,
    )

    const link = screen.getByRole('link', { name: /Reference/ })
    expect(link.getAttribute('target')).toBe('_blank')
    expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    expect(screen.getByText('(opens in new window)')).toBeTruthy()
  })
})
