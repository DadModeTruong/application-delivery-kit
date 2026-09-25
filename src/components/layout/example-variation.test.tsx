import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { ExampleVariation } from './example-variation'

afterEach(cleanup)

const supplemental = {
  guidance: {
    explanation: 'Use this example to demonstrate the shared pattern.',
    doItems: ['Keep the semantic structure.'],
    dontItems: ['Do not hide the primary action.'],
  },
  code: {
    language: 'tsx',
    source: '<Example />',
  },
  requirements: {
    userStory: 'As a user, I want a clear example.',
    acceptanceCriteria: [{ title: 'Behavior', text: 'The example is understandable.' }],
  },
  verification: {
    sections: [{ title: 'Functional', items: ['Render the example.'] }],
  },
}

describe('ExampleVariation supplemental content', () => {
  it('renders standardized tabs and switches supplemental content', () => {
    render(
      <ExampleVariation
        title="Example"
        summary="A summary"
        tryIt="Interact with the example."
        supplemental={supplemental}
      >
        <div>Live example</div>
      </ExampleVariation>,
    )

    expect(screen.getByRole('tab', { name: 'Guidance' })).toBeTruthy()
    expect(screen.getByRole('tab', { name: 'Code' })).toBeTruthy()
    expect(screen.getByRole('tab', { name: 'Story & criteria' })).toBeTruthy()
    expect(screen.getByRole('tab', { name: 'Verification' })).toBeTruthy()
    expect(screen.getByText('Use this example to demonstrate the shared pattern.')).toBeTruthy()

    fireEvent.click(screen.getByRole('tab', { name: 'Code' }))

    expect(screen.getByText('<Example />')).toBeTruthy()
  })

  it('keeps tab and verification relationships unique across examples', () => {
    render(
      <>
        <ExampleVariation
          title="First example"
          summary="First summary"
          tryIt="Try the first example."
          supplemental={supplemental}
        >
          <div>First live example</div>
        </ExampleVariation>
        <ExampleVariation
          title="Second example"
          summary="Second summary"
          tryIt="Try the second example."
          supplemental={supplemental}
        >
          <div>Second live example</div>
        </ExampleVariation>
      </>,
    )

    const ids = [...document.querySelectorAll('[id]')].map((element) => element.id)
    expect(ids.length).toBe(new Set(ids).size)
  })
})
