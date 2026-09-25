import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Header } from './header'
import { MobileNavigation } from './mobile-navigation'

afterEach(cleanup)

describe('Header', () => {
  it('uses the supplied navigation landmark label and current link state', () => {
    render(
      <Header
        logo={<a href="/">Application Delivery Kit</a>}
        navigationLabel="Global navigation"
        nav={[
          { href: '/examples', label: 'Examples' },
          { href: '/components', label: 'Components', current: true },
        ]}
      />,
    )

    expect(screen.getByRole('navigation', { name: 'Global navigation' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Components' }).getAttribute('aria-current')).toBe(
      'page',
    )
  })

  it('renders generic mobile sections with labelled navigation landmarks', () => {
    render(
      <MobileNavigation
        items={[{ href: '/home', label: 'Home' }]}
        sections={[
          { label: 'Primary navigation', items: [{ href: '/dashboard', label: 'Dashboard' }] },
          { label: 'On this page', items: [{ href: '#overview', label: 'Overview' }] },
        ]}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }))

    expect(screen.getByRole('navigation', { name: 'Global navigation' })).toBeTruthy()
    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeTruthy()
    expect(screen.getByRole('navigation', { name: 'On this page' })).toBeTruthy()

    const labelledSections = screen
      .getAllByRole('navigation')
      .filter((navigation) => navigation.getAttribute('aria-labelledby'))
    expect(labelledSections).toHaveLength(3)
    expect(labelledSections[1].getAttribute('aria-labelledby')).not.toBe(
      labelledSections[2].getAttribute('aria-labelledby'),
    )
  })
})
