import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { TryIt } from './try-it'

afterEach(cleanup)

describe('TryIt', () => {
  it('renders an alert callout with a labeled pointer icon and instructions', () => {
    render(<TryIt>Tab through the navigation links and resize the page.</TryIt>)

    const alert = screen.getByRole('alert')
    expect(alert).toBeTruthy()
    expect(screen.getByText('Try it')).toBeTruthy()
    expect(screen.getByText('Tab through the navigation links and resize the page.')).toBeTruthy()
    expect(alert.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true')
    const description = alert.querySelector('[data-slot=alert-description]')
    expect(description?.classList.contains('w-full')).toBe(true)
    expect(description?.classList.contains('![text-wrap:wrap]')).toBe(true)
  })
})
