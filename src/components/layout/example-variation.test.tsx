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

const migratedHeaderFixture = {
  ...supplemental,
  tabLayout: 'requirements' as const,
  requirements: {
    userStory:
      'As an application user, I want a labelled Header that remains usable across widths.',
    groups: [
      {
        id: 'BR-BASIC',
        title: 'Business requirements',
        items: ['People can identify the application and reach global destinations.'],
      },
      {
        id: 'FR-BASIC',
        title: 'Functional requirements',
        items: ['The Header presents supplied destinations in application order.'],
      },
      {
        id: 'NFR-BASIC',
        title: 'Non-functional requirements',
        items: ['The Header remains usable in desktop and mobile presentations.'],
      },
      {
        id: 'A11Y-BASIC',
        title: 'Accessibility requirements',
        items: ['The navigation landmark and current destination have clear semantics.'],
      },
      {
        id: 'TR-BASIC',
        title: 'Technical requirements',
        items: ['The consuming application supplies navigation data and current state.'],
      },
    ],
    acceptanceCriteria: [
      {
        id: 'AC-BASIC-01',
        requirementRefs: ['BR-BASIC-01'],
        given: 'the migrated Header receives application navigation data',
        when: 'the example is rendered',
        then: 'the Header exposes the documented brand and destinations',
      },
    ],
  },
  verification: {
    scenarios: [
      {
        id: 'VR-BASIC-01',
        criterionRefs: ['AC-BASIC-01'],
        title: 'Migrated Header traceability',
        description: 'Confirms the migrated Header exposes the complete traceability contract.',
        role: 'Functional QA',
        cases: [
          {
            id: 'VR-BASIC-02',
            criterionRefs: ['AC-BASIC-01'],
            title: 'Inspect the migrated Header',
            description: 'Confirms the migrated Header fixture uses the layered contract.',
            steps: ['Render the Header fixture and inspect its supplemental tabs.'],
            expected: 'The fixture exposes the standard five-tab order and traceability metadata.',
          },
        ],
      },
    ],
  },
}

const migratedTabNavigationFixture = {
  ...supplemental,
  tabLayout: 'requirements' as const,
  requirements: {
    userStory:
      'As a person moving through a product area, I want nearby destinations to be easy to scan and understand.',
    groups: [
      {
        id: 'BR-BASIC',
        title: 'Business requirements',
        items: ['People can identify this row as navigation for the current section.'],
      },
      {
        id: 'FR-BASIC',
        title: 'Functional requirements',
        items: ['TabNavigation renders supplied destinations as real anchors.'],
      },
      {
        id: 'NFR-BASIC',
        title: 'Non-functional requirements',
        items: ['The row remains compact and aligned with the page.'],
      },
      {
        id: 'A11Y-BASIC',
        title: 'Accessibility requirements',
        items: ['The navigation exposes a distinct accessible name.'],
      },
      {
        id: 'TR-BASIC',
        title: 'Technical requirements',
        items: ['The consuming application supplies the navigation data.'],
      },
    ],
    acceptanceCriteria: [
      {
        id: 'AC-BASIC-01',
        requirementRefs: ['BR-BASIC-01'],
        given: 'TabNavigation receives section links',
        when: 'the row renders',
        then: 'the links appear in the supplied order',
      },
    ],
  },
  verification: {
    scenarios: [
      {
        id: 'VR-BASIC-01',
        criterionRefs: ['AC-BASIC-01'],
        title: 'Structure and link behavior',
        description: 'Confirms the migrated TabNavigation fixture uses the layered contract.',
        role: 'Functional QA',
        cases: [
          {
            id: 'VR-BASIC-02',
            criterionRefs: ['AC-BASIC-01'],
            title: 'Landmark and order',
            description: 'Confirms the navigation exposes the supplied destinations in order.',
            steps: ['Render the TabNavigation fixture.', 'Inspect the landmark and links.'],
            expected: 'A named navigation landmark contains the supplied links in order.',
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

  it('renders layered requirements and traceability metadata in the standard order', () => {
    const layeredSupplemental = {
      ...supplemental,
      tabLayout: 'requirements' as const,
      requirements: {
        userStory: 'As a reviewer, I want traceable requirements.',
        groups: [
          {
            id: 'BR-TEST',
            title: 'Business requirements',
            items: ['The outcome is understandable.'],
          },
        ],
        acceptanceCriteria: [
          {
            id: 'AC-TEST-01',
            requirementRefs: ['BR-TEST-01'],
            given: 'the requirement is present',
            when: 'the example is reviewed',
            then: 'the requirement is understandable',
          },
        ],
      },
      verification: {
        scenarios: [
          {
            title: 'Traceability',
            role: 'BA / QA',
            cases: [
              {
                id: 'VR-TEST-01',
                criterionRefs: ['AC-TEST-01'],
                title: 'Review the requirement',
                steps: ['Review the requirement.'],
                expected: 'The requirement is covered.',
              },
            ],
          },
        ],
      },
    }

    render(
      <ExampleVariation
        title="Layered example"
        summary="A layered summary"
        tryIt="Review the example."
        supplemental={layeredSupplemental}
      >
        <div>Layered live example</div>
      </ExampleVariation>,
    )

    expect(screen.getAllByRole('tab').map((tab) => tab.textContent)).toEqual([
      'Guidance',
      'Requirements',
      'Criteria',
      'Verification',
      'Code',
    ])

    fireEvent.click(screen.getByRole('tab', { name: 'Requirements' }))
    expect(screen.getByText('BR-TEST')).toBeTruthy()
    expect(screen.getByText('BR-TEST-01')).toBeTruthy()

    fireEvent.click(screen.getByRole('tab', { name: 'Criteria' }))
    expect(screen.getByText('AC-TEST-01')).toBeTruthy()
    expect(screen.getByText('Satisfies: BR-TEST-01')).toBeTruthy()

    fireEvent.click(screen.getByRole('tab', { name: 'Verification' }))
    expect(screen.getByText('VR-TEST-01')).toBeTruthy()
    expect(screen.getByText('Primary role: BA / QA')).toBeTruthy()
    expect(screen.getByText('Verifies: AC-TEST-01')).toBeTruthy()

    fireEvent.click(screen.getByRole('tab', { name: 'Code' }))
    expect(screen.getByText('<Example />')).toBeTruthy()
  })

  it('supports a migrated Header fixture on the layered renderer path', () => {
    render(
      <ExampleVariation
        title="Migrated Header"
        summary="A Header example migrated to the shared traceability contract."
        tryIt="Review the Header at desktop and mobile widths."
        supplemental={migratedHeaderFixture}
      >
        <header data-slot="header">Application Delivery Kit</header>
      </ExampleVariation>,
    )

    expect(screen.getAllByRole('tab').map((tab) => tab.textContent)).toEqual([
      'Guidance',
      'Requirements',
      'Criteria',
      'Verification',
      'Code',
    ])
    fireEvent.click(screen.getByRole('tab', { name: 'Requirements' }))
    expect(screen.getByText('BR-BASIC-01')).toBeTruthy()
    expect(screen.getByText('FR-BASIC')).toBeTruthy()
    expect(screen.getByText('NFR-BASIC')).toBeTruthy()
    expect(screen.getByText('A11Y-BASIC')).toBeTruthy()
    expect(screen.getByText('TR-BASIC')).toBeTruthy()
    fireEvent.click(screen.getByRole('tab', { name: 'Criteria' }))
    expect(screen.getByText('AC-BASIC-01')).toBeTruthy()
    fireEvent.click(screen.getByRole('tab', { name: 'Verification' }))
    expect(screen.getByText('VR-BASIC-01')).toBeTruthy()
    expect(
      screen.getByText('Confirms the migrated Header exposes the complete traceability contract.'),
    ).toBeTruthy()
    expect(screen.getAllByText('Verifies: AC-BASIC-01')).toHaveLength(2)
    expect(screen.getByText('VR-BASIC-02')).toBeTruthy()
    expect(screen.getByText('Primary role: Functional QA')).toBeTruthy()
  })

  it('supports a migrated TabNavigation fixture on the layered renderer path', () => {
    render(
      <ExampleVariation
        title="TabNavigation"
        summary="A short row of section links."
        tryIt="Tab through the section links and inspect the landmark name."
        supplemental={migratedTabNavigationFixture}
      >
        <nav aria-label="Section navigation" data-slot="tab-navigation">
          <a href="/components/tab-navigation">Overview</a>
        </nav>
      </ExampleVariation>,
    )

    expect(screen.getAllByRole('tab').map((tab) => tab.textContent)).toEqual([
      'Guidance',
      'Requirements',
      'Criteria',
      'Verification',
      'Code',
    ])
    fireEvent.click(screen.getByRole('tab', { name: 'Requirements' }))
    expect(screen.getByText('BR-BASIC-01')).toBeTruthy()
    expect(screen.getByText('A11Y-BASIC')).toBeTruthy()
    fireEvent.click(screen.getByRole('tab', { name: 'Criteria' }))
    expect(screen.getByText('AC-BASIC-01')).toBeTruthy()
    expect(screen.getByText('Satisfies: BR-BASIC-01')).toBeTruthy()
    fireEvent.click(screen.getByRole('tab', { name: 'Verification' }))
    expect(screen.getByText('VR-BASIC-01')).toBeTruthy()
    expect(
      screen.getByText('Confirms the migrated TabNavigation fixture uses the layered contract.'),
    ).toBeTruthy()
    expect(screen.getAllByText('Verifies: AC-BASIC-01')).toHaveLength(2)
    expect(screen.getByText('VR-BASIC-02')).toBeTruthy()
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
