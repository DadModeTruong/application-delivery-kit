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

  it('keeps leaf items as links and renders dropdown parents as mobile sections', () => {
    render(
      <MobileNavigation
        items={[
          { href: '/home', label: 'Home' },
          {
            label: 'Components',
            children: [
              { href: '/components/forms', label: 'Forms' },
              { href: '/components/user-interface', label: 'User interface' },
            ],
          },
          { href: '/examples', label: 'Examples' },
        ]}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }))

    expect(screen.getByRole('navigation', { name: 'Global navigation' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Home' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Examples' })).toBeTruthy()
    expect(screen.getByText('Components')).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Forms' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'User interface' })).toBeTruthy()
    expect(screen.queryByRole('navigation', { name: 'Primary navigation' })).toBeNull()
    expect(screen.queryByRole('navigation', { name: 'On this page' })).toBeNull()
  })
})
