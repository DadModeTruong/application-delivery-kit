import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Footer } from './footer'

afterEach(cleanup)

describe('Footer', () => {
  it('renders caller content and ordered links in named landmarks', () => {
    render(
      <Footer
        copyright={<>© 2026 Example Co.</>}
        links={[
          { href: '/privacy', label: 'Privacy' },
          { href: '/accessibility', label: 'Accessibility' },
        ]}
      />,
    )

    expect(screen.getByRole('contentinfo')).toBeTruthy()
    expect(screen.getByRole('navigation', { name: 'Footer' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Privacy' }).getAttribute('href')).toBe('/privacy')
    expect(screen.getByRole('link', { name: 'Accessibility' }).getAttribute('href')).toBe(
      '/accessibility',
    )
  })

  it('omits the navigation landmark when links are empty', () => {
    render(<Footer copyright={<>© 2026 Example Co.</>} links={[]} />)

    expect(screen.getByRole('contentinfo')).toBeTruthy()
    expect(screen.queryByRole('navigation', { name: 'Footer' })).toBeNull()
  })

  it('renders external links with safe attributes and an accessible hint', () => {
    render(
      <Footer
        copyright={<>© 2026 Example Co.</>}
        links={[{ href: 'https://example.com', label: 'Reference', external: true }]}
      />,
    )

    const link = screen.getByRole('link', { name: /Reference/ })
    expect(link.getAttribute('target')).toBe('_blank')
    expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    expect(screen.getByText('(opens in new window)')).toBeTruthy()
  })

  it('exposes the selected full-width and border states', () => {
    render(<Footer size="full" bordered={false} copyright={<>© 2026 Example Co.</>} />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.getAttribute('data-size')).toBe('full')
    expect(footer.className).not.toContain('border-t')
  })
})
