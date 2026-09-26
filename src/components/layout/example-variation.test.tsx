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
    html: '<header class="sticky top-0" data-slot="header">Example</header>',
    props: [
      {
        name: 'navigationLabel',
        type: 'string',
        description: 'Names the navigation landmark.',
        example: 'navigationLabel="Global navigation"',
      },
    ],
    attributes: [
      {
        name: 'data-slot',
        type: 'component hook',
        description: 'Identifies a component part for styling and inspection.',
        example: 'data-slot="header"',
      },
    ],
  },
  requirements: {
    userStory: 'As a user, I want a clear example.',
    acceptanceCriteria: [
      {
        given: 'the example is rendered',
        when: 'the user reads the page',
        then: 'the example is understandable',
      },
    ],
  },
  verification: {
    scenarios: [
      {
        title: 'Basic rendering',
        cases: [
          {
            title: 'Render the example',
            steps: ['Render the example.'],
            expected: 'The example is present.',
          },
        ],
      },
    ],
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
    expect(screen.getByRole('tab', { name: 'Criteria' })).toBeTruthy()
    expect(screen.getByRole('tab', { name: 'Verification' })).toBeTruthy()
    expect(screen.getByText('Use this example to demonstrate the shared pattern.')).toBeTruthy()

    fireEvent.click(screen.getByRole('tab', { name: 'Code' }))

    expect(screen.getByText('<Example />')).toBeTruthy()
    expect(
      screen.getByText('<header class="sticky top-0" data-slot="header">Example</header>'),
    ).toBeTruthy()
    expect(screen.getByText('Props used in this example')).toBeTruthy()
    expect(screen.getByText('navigationLabel')).toBeTruthy()
    expect(screen.getByText('Attributes and styling hooks')).toBeTruthy()
    expect(screen.getByText('data-slot')).toBeTruthy()

    fireEvent.click(screen.getByRole('tab', { name: 'Criteria' }))

    expect(screen.getByText('As a user, I want a clear example.')).toBeTruthy()
    expect(screen.getByText('Given')).toBeTruthy()
    expect(screen.getByText('When')).toBeTruthy()
    expect(screen.getByText('Then')).toBeTruthy()
    expect(document.querySelectorAll('ol[type="a"]')).toHaveLength(1)
    expect(document.querySelectorAll('ol[type="a"] > li')).toHaveLength(2)
    expect(document.querySelectorAll('ol[type="a"] .rounded-md.border')).toHaveLength(0)

    fireEvent.click(screen.getByRole('tab', { name: 'Verification' }))

    expect(screen.getByText('Expected result')).toBeTruthy()
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
