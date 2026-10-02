import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { LayoutExampleContract } from './layout-example-contract'

afterEach(cleanup)

describe('LayoutExampleContract', () => {
  it.each(['header-only', 'secondary', 'sidebar', 'full'] as const)(
    'renders the complete contract for %s',
    (variant) => {
      render(<LayoutExampleContract variant={variant} />)

      expect(
        screen.getByRole('heading', { name: 'How to build and verify this layout' }),
      ).toBeTruthy()
      expect(screen.getAllByRole('tab').map((tab) => tab.textContent)).toEqual([
        'Guidance',
        'Requirements',
        'Criteria',
        'Verification',
        'Code',
      ])
      expect(screen.getByText(/Use the tabs to understand the composition/)).toBeTruthy()

      fireEvent.click(screen.getByRole('tab', { name: 'Requirements' }))
      expect(screen.getAllByText(/REQ-/).length).toBeGreaterThan(0)
      expect(screen.getByText(/User story:/)).toBeTruthy()

      fireEvent.click(screen.getByRole('tab', { name: 'Criteria' }))
      expect(screen.getAllByText(/CRIT-/).length).toBeGreaterThan(0)
      expect(screen.getAllByText('Given').length).toBeGreaterThan(0)
      expect(screen.getAllByText('When').length).toBeGreaterThan(0)
      expect(screen.getAllByText('Then').length).toBeGreaterThan(0)

      fireEvent.click(screen.getByRole('tab', { name: 'Verification' }))
      expect(screen.getAllByText(/VER-/).length).toBeGreaterThan(0)
      expect(screen.getAllByText('Expected result:').length).toBeGreaterThan(0)

      fireEvent.click(screen.getByRole('tab', { name: 'Code' }))
      expect(screen.getByText('Application Delivery Kit composition')).toBeTruthy()
      expect(screen.getByText('Complete rendered HTML structure')).toBeTruthy()
      expect(screen.getByText(/<header data-slot="header"/)).toBeTruthy()
      expect(screen.queryByText(/…|\.\.\./)).toBeNull()
    },
  )

  it('keeps tab and verification heading IDs unique when rendered more than once', () => {
    render(
      <>
        <LayoutExampleContract variant="header-only" />
        <LayoutExampleContract variant="sidebar" />
      </>,
    )

    const ids = [...document.querySelectorAll('[id]')].map((element) => element.id)
    expect(ids.length).toBe(new Set(ids).size)
  })
})
