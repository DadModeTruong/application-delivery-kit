import { useState, type ReactNode } from 'react'

import { Combobox, type ComboboxOption } from '@/components/ui/combobox'
import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { ExampleVariation } from '@/components/layout/example-variation'
import { TryIt } from '@/components/layout/try-it'
import { formSidebarLinks } from '@/config/component-navigation'

/**
 * Combobox guide page. Demonstrates searchable single and multiple selection,
 * keyboard navigation, helper/error states, clearing, and required behavior.
 */

const options: ComboboxOption[] = [
  { label: 'Canada', value: 'ca', group: 'North America' },
  { label: 'France', value: 'fr', group: 'Europe' },
  { label: 'Germany', value: 'de', group: 'Europe' },
  { label: 'Japan', value: 'jp', group: 'Asia' },
  { label: 'Mexico', value: 'mx', group: 'North America' },
  { label: 'United States', value: 'us', group: 'North America' },
]

function BasicExample() {
  const [value, setValue] = useState('')
  return (
    <Combobox
      id="combobox-basic"
      label="Country"
      options={options}
      value={value}
      onValueChange={(next) => setValue(next as string)}
      placeholder="Search countries"
    />
  )
}

function HelperExample() {
  const [value, setValue] = useState('')
  return (
    <Combobox
      id="combobox-helper"
      label="Country"
      options={options}
      value={value}
      onValueChange={(next) => setValue(next as string)}
      hint="Choose an existing country from the suggestions. Start typing to filter."
      placeholder="Search countries"
    />
  )
}

function DisabledExample() {
  return (
    <Combobox
      id="combobox-disabled"
      label="Country"
      options={options}
      value=""
      onValueChange={() => undefined}
      disabled
      hint="Available after you select an organization."
      placeholder="Search countries"
    />
  )
}

function InvalidExample() {
  const [value, setValue] = useState('')
  return (
    <Combobox
      id="combobox-invalid"
      label="Country"
      options={options}
      value={value}
      onValueChange={(next) => setValue(next as string)}
      error="Choose a country from the available options."
      placeholder="Search countries"
    />
  )
}

function RequiredExample() {
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const error = submitted && !value ? 'Choose a country before continuing.' : undefined
  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <Combobox
        id="combobox-required"
        label="Country"
        options={options}
        value={value}
        onValueChange={(next) => {
          setValue(next as string)
          setSubmitted(false)
        }}
        error={error}
        placeholder="Search countries"
      />
      <button
        type="submit"
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Continue
      </button>
      {submitted && !error && (
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Country saved: {options.find((option) => option.value === value)?.label}.
        </p>
      )}
    </form>
  )
}

function MultipleExample() {
  const [value, setValue] = useState<string[]>([])
  return (
    <Combobox
      id="combobox-multiple"
      label="Countries"
      options={options}
      value={value}
      onValueChange={(next) => setValue(next as string[])}
      multiple
      clearable
      hint="Select every country that applies; selected values remain available as removable tags."
      placeholder="Search countries"
    />
  )
}

function ClearableExample() {
  const [value, setValue] = useState('us')
  return (
    <Combobox
      id="combobox-clearable"
      label="Country"
      options={options}
      value={value}
      onValueChange={(next) => setValue(next as string)}
      clearable
      hint="Choose a country or clear the current selection to start again."
      placeholder="Search countries"
    />
  )
}

type Config = {
  id: string
  title: string
  purpose: string
  tryIt: string
  explanation: string
  doItems: string[]
  dontItems: string[]
  source: string
  html: string
  requirementItems: string[]
  criteria: {
    id: string
    requirementRefs: string[]
    given: string
    when: string
    then: string
    and: string[]
  }[]
  verification: {
    id: string
    role: string
    title: string
    criterionRefs: string[]
    steps: string[]
    expected: string
  }[]
}

function supplemental(config: Config) {
  const business = `BR-${config.id}`
  const functional = `FR-${config.id}`
  const accessibility = `A11Y-${config.id}`
  const technical = `TR-${config.id}`
  const isDisabled = config.id === 'DISABLED'
  const commonCriteria = isDisabled
    ? [
        {
          id: `AC-${config.id}-OPTIONS-01`,
          requirementRefs: [`${functional}-01`],
          given: 'the disabled Combobox first renders',
          when: 'a person attempts to focus or open it',
          then: 'the configured options are not exposed as an interactive popup',
          and: ['the disabled explanation remains visible'],
        },
      ]
    : [
        {
          id: `AC-${config.id}-OPTIONS-01`,
          requirementRefs: [`${functional}-01`],
          given: `the ${config.title} Combobox is focused with an empty query`,
          when: 'the popup opens',
          then: 'every configured option is available exactly once in the listbox',
          and: ['the option labels remain readable and selectable'],
        },
        {
          id: `AC-${config.id}-FILTER-01`,
          requirementRefs: [`${functional}-01`],
          given: 'the complete option list is available',
          when: 'a person types “ger”, then clears the query, then types “zz”',
          then: 'Germany is the only match for “ger”, the complete option list returns after clearing, and the empty state is shown for “zz”',
          and: ['the input remains labelled throughout filtering'],
        },
        {
          id: `AC-${config.id}-KEYBOARD-01`,
          requirementRefs: [`${functional}-01`, `${accessibility}-01`],
          given: 'the popup is open',
          when: 'a person presses Arrow Down, Arrow Up, Enter, and Escape',
          then: 'the active option moves, Enter selects the active option, and Escape closes the popup without an unintended selection',
          and: ['the active option is exposed through aria-activedescendant when applicable'],
        },
        {
          id: `AC-${config.id}-DISMISS-01`,
          requirementRefs: [`${functional}-01`, `${accessibility}-01`],
          given: 'the popup is open',
          when: 'a person activates a point outside the Combobox',
          then: 'the popup closes and the current value remains unchanged',
          and: [],
        },
      ]
  const commonScenarios = isDisabled
    ? [
        {
          id: `VR-${config.id}-OPTIONS-01`,
          role: 'Functional QA',
          title: 'Confirm disabled availability',
          criterionRefs: [`AC-${config.id}-OPTIONS-01`],
          cases: [
            {
              id: `VR-${config.id}-OPTIONS-01-A`,
              title: 'Attempt to open the disabled field',
              criterionRefs: [`AC-${config.id}-OPTIONS-01`],
              steps: [
                'Attempt to focus the field.',
                'Attempt to open the list.',
                'Read the availability explanation.',
              ],
              expected:
                'The field cannot be opened or changed, and the explanation remains visible.',
            },
          ],
        },
      ]
    : [
        {
          id: `VR-${config.id}-OPTIONS-01`,
          role: 'Functional QA',
          title: 'Confirm the complete option set',
          criterionRefs: [`AC-${config.id}-OPTIONS-01`],
          cases: [
            {
              id: `VR-${config.id}-OPTIONS-01-A`,
              title: 'Inspect every available option',
              criterionRefs: [`AC-${config.id}-OPTIONS-01`],
              steps: [
                'Focus the Combobox with an empty query.',
                'Open the list.',
                'Compare the rendered labels with United States, Canada, Japan, Germany, and Brazil.',
              ],
              expected:
                'All five configured options appear exactly once, remain selectable, and are not clipped or hidden.',
            },
          ],
        },
        {
          id: `VR-${config.id}-FILTER-01`,
          role: 'Functional QA',
          title: 'Filter, restore, and empty the option list',
          criterionRefs: [`AC-${config.id}-FILTER-01`],
          cases: [
            {
              id: `VR-${config.id}-FILTER-01-A`,
              title: 'Exercise positive, restored, and empty results',
              criterionRefs: [`AC-${config.id}-FILTER-01`],
              steps: [
                'Type “ger”.',
                'Confirm Germany is offered.',
                'Select all text and delete it.',
                'Confirm the complete option list returns.',
                'Type “zz”.',
              ],
              expected:
                'Germany is the only “ger” match, clearing restores all options, and “zz” shows No matches found.',
            },
          ],
        },
        {
          id: `VR-${config.id}-KEYBOARD-01`,
          role: 'Keyboard and accessibility QA',
          title: 'Navigate and select with the keyboard',
          criterionRefs: [`AC-${config.id}-KEYBOARD-01`],
          cases: [
            {
              id: `VR-${config.id}-KEYBOARD-01-A`,
              title: 'Move, select, and dismiss',
              criterionRefs: [`AC-${config.id}-KEYBOARD-01`],
              steps: [
                'Focus the input.',
                'Press Arrow Down and inspect the active option.',
                'Press Arrow Up and inspect the active option.',
                'Press Enter.',
                'Reopen the popup and press Escape.',
              ],
              expected:
                'Arrow keys move the active option, Enter selects the active option, and Escape closes the popup without changing the selected value.',
            },
          ],
        },
        {
          id: `VR-${config.id}-DISMISS-01`,
          role: 'Functional QA',
          title: 'Dismiss an open popup outside the field',
          criterionRefs: [`AC-${config.id}-DISMISS-01`],
          cases: [
            {
              id: `VR-${config.id}-DISMISS-01-A`,
              title: 'Click outside the Combobox',
              criterionRefs: [`AC-${config.id}-DISMISS-01`],
              steps: [
                'Open the popup.',
                'Click outside the Combobox.',
                'Inspect the popup and selected value.',
              ],
              expected: 'The popup closes and the selected value remains unchanged.',
            },
          ],
        },
      ]
  return {
    tabLayout: 'requirements' as const,
    guidance: {
      explanation: config.explanation,
      considerations: [
        'Use the production Combobox so filtering, listbox semantics, keyboard movement, selection, and clear behavior remain consistent.',
        'The consuming application owns selected values and persistence; the primitive owns input and popup interaction.',
      ],
      doItems: config.doItems,
      dontItems: config.dontItems,
    },
    code: {
      language: 'tsx',
      source: config.source,
      html: config.html,
      props: [
        {
          name: 'options / value / onValueChange',
          type: 'Combobox props',
          description: 'Provide choices and keep selected state in the consuming application.',
        },
        {
          name: 'multiple / clearable / disabled',
          type: 'boolean props',
          description:
            'Choose the selection model and available actions demonstrated by the example.',
        },
      ],
      attributes: [
        {
          name: 'role="combobox" / aria-controls / aria-activedescendant',
          type: 'accessibility attributes',
          description: 'Connect the editable input to the listbox and expose the active option.',
        },
        {
          name: 'data-slot="combobox"',
          type: 'inspection hook',
          description:
            'Preserve the primitive styling and inspection hook when adapting the markup.',
        },
      ],
      notes:
        'The HTML shows the relevant label, input, listbox relationship, state, and feedback for this variation.',
    },
    requirements: {
      userStory: `As a form user, I want the ${config.title.toLowerCase()} Combobox to make searchable choices understandable and operable so that I can select the intended value confidently.`,
      groups: [
        {
          id: business,
          title: 'Business requirements',
          items: [config.purpose, 'The visible label must identify the value being chosen.'],
        },
        { id: functional, title: 'Functional requirements', items: config.requirementItems },
        {
          id: accessibility,
          title: 'Accessibility requirements',
          items: [
            'The input, listbox, options, labels, and feedback must expose their relationships and states in text and semantics.',
            'Keyboard users must be able to open, filter, move, select, dismiss, and clear when those actions are available.',
          ],
        },
        {
          id: technical,
          title: 'Technical requirements',
          items: [
            'The example must use the production Combobox primitive shown in its Code panel.',
            'Selected state must remain owned by the consuming example or application.',
          ],
        },
      ],
      acceptanceCriteria: [
        ...config.criteria.map((criterion) => ({
          ...criterion,
          requirementRefs: criterion.requirementRefs.map((ref) =>
            ref === 'business'
              ? `${business}-01`
              : ref === 'functional'
                ? `${functional}-01`
                : `${accessibility}-01`,
          ),
        })),
        {
          id: `AC-${config.id}-INITIAL-01`,
          requirementRefs: [`${business}-01`, `${accessibility}-01`],
          given: `the ${config.title} Combobox first renders`,
          when: 'no interaction has occurred',
          then: 'the visible label and input border are present, the popup is closed, and any configured initial helper, error, disabled, or selected state is visible',
          and: ['the control does not rely on color alone to communicate its initial state'],
        },
        ...commonCriteria,
      ],
    },
    verification: {
      scenarios: [
        ...config.verification.map((scenario) => ({
          id: scenario.id,
          role: scenario.role,
          title: scenario.title,
          criterionRefs: scenario.criterionRefs,
          cases: [
            {
              id: `${scenario.id}-A`,
              title: scenario.title,
              criterionRefs: scenario.criterionRefs,
              steps: scenario.steps,
              expected: scenario.expected,
            },
          ],
        })),
        {
          id: `VR-${config.id}-INITIAL-01`,
          role: 'Visual and accessibility QA',
          title: `Inspect the initial ${config.title.toLowerCase()} state`,
          criterionRefs: [`AC-${config.id}-INITIAL-01`],
          cases: [
            {
              id: `VR-${config.id}-INITIAL-01-A`,
              title: 'Inspect border, label, and popup state',
              criterionRefs: [`AC-${config.id}-INITIAL-01`],
              steps: [
                'Render the example without interacting with it.',
                'Inspect the visible label, input border, configured helper/error/selected state, and popup visibility.',
              ],
              expected:
                'The labelled input has its visible boundary, the popup is closed, and the configured initial state is understandable without relying on color alone.',
            },
          ],
        },
        ...commonScenarios,
      ],
    },
  }
}

const examples: Config[] = [
  {
    id: 'BASIC',
    title: 'Basic',
    purpose: 'A single-selection searchable field must let people filter and choose one country.',
    tryIt:
      'Focus Country, type “ger”, choose Germany, and confirm the selected value is announced.',
    explanation:
      'Use a basic Combobox when the list is known but typing helps people find one value.',
    doItems: [
      'Use a visible label and meaningful option names.',
      'Filter suggestions as the person types.',
      'Keep the text input and listbox relationship exposed.',
    ],
    dontItems: [
      'Do not use placeholder text as the only label.',
      'Do not use a Combobox when a short static list is easier to compare.',
    ],
    source: `const [value, setValue] = useState('')\n<Combobox label="Country" options={options} value={value} onValueChange={setValue} />`,
    html: `<label for="combobox-basic-input">Country</label>\n<input data-slot="combobox" id="combobox-basic-input" role="combobox" aria-expanded="true" aria-controls="combobox-basic-listbox">\n<ul id="combobox-basic-listbox" role="listbox"><li role="option">Germany</li></ul>`,
    requirementItems: [
      'Typing “ger” must filter the list to Germany.',
      'Choosing Germany must set the selected value and expose a selected status.',
    ],
    criteria: [
      {
        id: 'AC-BASIC-01',
        requirementRefs: ['business', 'functional'],
        given: 'the Basic Combobox is rendered',
        when: 'a person types “ger” and chooses Germany',
        then: 'the input value becomes Germany and the selected status names Germany',
        and: ['the listbox remains associated with the input through its ARIA relationship'],
      },
    ],
    verification: [
      {
        id: 'VR-BASIC-01',
        role: 'Functional QA',
        title: 'Filter and choose one country',
        criterionRefs: ['AC-BASIC-01'],
        steps: ['Focus Country.', 'Type “ger”.', 'Choose Germany.'],
        expected:
          'Only the matching option is offered, Germany is selected, and the status text confirms the choice.',
      },
    ],
  },
  {
    id: 'HELPER',
    title: 'With helper text',
    purpose:
      'Persistent helper text must explain what the suggestions represent and remain available while searching.',
    tryIt:
      'Read the helper text, type “ca”, and verify it remains associated while Canada is offered.',
    explanation:
      'Use helper text for search rules, data source, or selection consequences that remain useful during interaction.',
    doItems: [
      'State whether an existing option must be selected.',
      'Associate helper text with the input.',
      'Keep essential guidance visible while the list opens.',
    ],
    dontItems: [
      'Do not repeat the label in helper text.',
      'Do not hide an essential rule only in optional help.',
    ],
    source: `<Combobox label="Country" options={options} value={value} onValueChange={setValue} hint="Choose an existing country from the suggestions." />`,
    html: `<label for="combobox-helper-input">Country</label>\n<input id="combobox-helper-input" role="combobox" aria-describedby="combobox-helper-hint">\n<p id="combobox-helper-hint">Choose an existing country from the suggestions.</p>`,
    requirementItems: [
      'The helper text must remain visible when the list is open.',
      'The input must reference the helper text with aria-describedby.',
    ],
    criteria: [
      {
        id: 'AC-HELPER-01',
        requirementRefs: ['business', 'functional'],
        given: 'the helper Combobox is rendered',
        when: 'a person reads the helper text and types “ca”',
        then: 'the guidance remains visible and Canada is offered',
        and: ['the input description relationship remains available'],
      },
    ],
    verification: [
      {
        id: 'VR-HELPER-01',
        role: 'Accessibility QA',
        title: 'Inspect helper relationship',
        criterionRefs: ['AC-HELPER-01'],
        steps: ['Focus the input.', 'Inspect aria-describedby.', 'Type “ca”.'],
        expected: 'The helper paragraph remains associated while Canada is offered.',
      },
    ],
  },
  {
    id: 'DISABLED',
    title: 'Disabled',
    purpose:
      'The unavailable Combobox must explain why search and selection cannot happen in the current context.',
    tryIt:
      'Attempt to focus or type in the disabled field and confirm the availability explanation remains readable.',
    explanation: 'Disable the control only when another condition prevents changing the value.',
    doItems: [
      'Explain what makes the field available.',
      'Keep the label and explanation readable.',
    ],
    dontItems: [
      'Do not disable a field merely to prevent mistakes.',
      'Do not hide the only explanation inside the disabled control.',
    ],
    source: `<Combobox label="Country" options={options} value="" onValueChange={() => undefined} disabled hint="Available after you select an organization." />`,
    html: `<label for="combobox-disabled-input">Country</label>\n<input id="combobox-disabled-input" role="combobox" disabled aria-describedby="combobox-disabled-hint">\n<p id="combobox-disabled-hint">Available after you select an organization.</p>`,
    requirementItems: [
      'The input must prevent typing and popup interaction while disabled.',
      'The availability explanation must remain visible.',
    ],
    criteria: [
      {
        id: 'AC-DISABLED-01',
        requirementRefs: ['business', 'functional'],
        given: 'the disabled Combobox is rendered',
        when: 'a person attempts to focus or type',
        then: 'the input cannot be changed and the explanation remains visible',
        and: [],
      },
    ],
    verification: [
      {
        id: 'VR-DISABLED-01',
        role: 'Functional QA',
        title: 'Inspect unavailable control',
        criterionRefs: ['AC-DISABLED-01'],
        steps: ['Attempt to focus the field.', 'Attempt to type.', 'Read the helper text.'],
        expected: 'The field remains unavailable and the explanation identifies the prerequisite.',
      },
    ],
  },
  {
    id: 'INVALID',
    title: 'Invalid',
    purpose:
      'An invalid Combobox must state the correction required while keeping the field available.',
    tryIt:
      'Open the invalid field, choose a country, and confirm the error identifies the correction path.',
    explanation:
      'Use invalid state for an actionable rule such as a value no longer being available.',
    doItems: [
      'Name the problem and correction.',
      'Keep the field editable.',
      'Associate the error with the input.',
    ],
    dontItems: ['Do not rely on a red border alone.', 'Do not say only “Invalid selection.”'],
    source: `<Combobox label="Country" options={options} value={value} onValueChange={setValue} error="Choose a country from the available options." />`,
    html: `<label for="combobox-invalid-input">Country</label>\n<input id="combobox-invalid-input" role="combobox" aria-invalid="true" aria-describedby="combobox-invalid-error">\n<p id="combobox-invalid-error" role="alert">Choose a country from the available options.</p>`,
    requirementItems: [
      'The error must explain how to correct the selection.',
      'The field must remain searchable and selectable.',
    ],
    criteria: [
      {
        id: 'AC-INVALID-01',
        requirementRefs: ['business', 'functional'],
        given: 'the invalid Combobox is rendered',
        when: 'a person reviews the field and chooses Canada',
        then: 'the correction message and available choice are understandable',
        and: ['aria-invalid and aria-describedby expose the invalid relationship'],
      },
    ],
    verification: [
      {
        id: 'VR-INVALID-01',
        role: 'Functional QA',
        title: 'Correct an invalid choice',
        criterionRefs: ['AC-INVALID-01'],
        steps: [
          'Read the error.',
          'Open the list.',
          'Choose Canada.',
          'Inspect the input relationship.',
        ],
        expected:
          'The field remains operable, Canada can be selected, and the error relationship is exposed.',
      },
    ],
  },
  {
    id: 'REQUIRED',
    title: 'Required',
    purpose:
      'A required Combobox must block submission without a country and announce successful recovery.',
    tryIt:
      'Activate Continue without a country, then choose Canada and submit again to verify the error and success status.',
    explanation: 'Use required state when the task cannot continue without one valid selection.',
    doItems: [
      'Name the missing action in the error.',
      'Preserve the entered value and announce success.',
    ],
    dontItems: [
      'Do not use an error that only says “Required.”',
      'Do not preselect a consequential value without a clear reason.',
    ],
    source: `const [value, setValue] = useState('')\n<Combobox label="Country" value={value} onValueChange={setValue} />`,
    html: `<form><label for="combobox-required-input">Country</label>\n<input id="combobox-required-input" role="combobox" aria-describedby="combobox-required-error">\n<button type="submit">Continue</button>\n<p id="combobox-required-error" role="alert">Choose a country before continuing.</p>\n</form>`,
    requirementItems: [
      'An empty submission must expose a corrective error.',
      'A valid submission must expose a polite success status.',
    ],
    criteria: [
      {
        id: 'AC-REQUIRED-01',
        requirementRefs: ['business', 'functional'],
        given: 'no country is selected',
        when: 'a person activates Continue',
        then: 'submission is blocked and the error asks for a country',
        and: ['after Canada is selected, another submission reports the saved country'],
      },
    ],
    verification: [
      {
        id: 'VR-REQUIRED-01',
        role: 'Functional QA',
        title: 'Submit a required country',
        criterionRefs: ['AC-REQUIRED-01'],
        steps: [
          'Activate Continue with no selection.',
          'Choose Canada.',
          'Activate Continue again.',
        ],
        expected:
          'The first submission shows the correction error; the second shows Country saved: Canada.',
      },
    ],
  },
  {
    id: 'MULTIPLE',
    title: 'Multiple selection',
    purpose:
      'Multiple mode must preserve independent selections and provide removable selected values.',
    tryIt: 'Select Canada and Japan, then remove Canada and confirm Japan remains selected.',
    explanation: 'Use multiple mode when several values may be selected independently.',
    doItems: ['Show selected values as removable items.', 'Keep selection state independent.'],
    dontItems: [
      'Do not use multiple mode when exactly one value is required.',
      'Do not hide how to remove a selected value.',
    ],
    source: `<Combobox label="Countries" options={options} value={values} onValueChange={setValues} multiple clearable hint="Select every country that applies." />`,
    html: `<div aria-label="Selected countries"><span>Canada <button aria-label="Remove Canada">×</button></span></div>\n<input role="combobox" aria-controls="combobox-multiple-listbox">`,
    requirementItems: [
      'Selecting Canada and Japan must retain both values.',
      'Removing Canada must leave Japan selected.',
    ],
    criteria: [
      {
        id: 'AC-MULTIPLE-01',
        requirementRefs: ['business', 'functional'],
        given: 'multiple mode is rendered',
        when: 'a person selects Canada and Japan and removes Canada',
        then: 'Japan remains selected and Canada is removed',
        and: [],
      },
    ],
    verification: [
      {
        id: 'VR-MULTIPLE-01',
        role: 'Functional QA',
        title: 'Manage multiple selections',
        criterionRefs: ['AC-MULTIPLE-01'],
        steps: ['Select Canada.', 'Select Japan.', 'Activate Remove Canada.'],
        expected: 'Both selections are initially shown; after removal only Japan remains.',
      },
    ],
  },
  {
    id: 'CLEARABLE',
    title: 'Clearable',
    purpose:
      'A clearable single selection must provide an explicit way to remove the current value.',
    tryIt:
      'Activate Clear after the initial United States selection and confirm the input and status return to empty.',
    explanation: 'Use clearable mode when starting over is a meaningful and frequent action.',
    doItems: ['Label the clear action specifically.', 'Clear both the selected value and status.'],
    dontItems: [
      'Do not make clearing the only way to change a value.',
      'Do not use an unlabeled icon-only clear action.',
    ],
    source: `<Combobox label="Country" options={options} value="us" onValueChange={setValue} clearable hint="Choose a country or clear the current selection." />`,
    html: `<input role="combobox" value="United States">\n<button type="button">Clear</button>`,
    requirementItems: [
      'The clear action must be available when a value is selected.',
      'Activating Clear must remove the selected value.',
    ],
    criteria: [
      {
        id: 'AC-CLEARABLE-01',
        requirementRefs: ['business', 'functional'],
        given: 'United States is selected',
        when: 'a person activates Clear',
        then: 'the input and selected status become empty',
        and: [],
      },
    ],
    verification: [
      {
        id: 'VR-CLEARABLE-01',
        role: 'Functional QA',
        title: 'Clear a selected country',
        criterionRefs: ['AC-CLEARABLE-01'],
        steps: ['Inspect the initial United States value.', 'Activate Clear.'],
        expected: 'The value and selection status are cleared.',
      },
    ],
  },
]

function renderExample(config: Config, child: ReactNode) {
  return (
    <ExampleVariation
      title={config.title}
      summary={config.purpose}
      tryIt={config.tryIt}
      exampleClassName="p-5 sm:p-6"
      supplemental={supplemental(config)}
    >
      {child}
    </ExampleVariation>
  )
}

function ComponentsComboboxPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/combobox"
      tabActiveHref="/components/forms"
      sidebarNav={formSidebarLinks}
      sidebarNavLabel="Forms components"
    >
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby="combobox-heading">
          <h1 id="combobox-heading" className="text-4xl font-semibold tracking-tight">
            Combobox
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Use Combobox when people need to search, filter, and choose one or more values from a
            known collection.
          </p>
        </section>
        <section className="space-y-5" aria-labelledby="combobox-what-heading">
          <h2 id="combobox-what-heading" className="text-2xl font-semibold tracking-tight">
            What is it?
          </h2>
          <p className="leading-7 text-muted-foreground">
            Combobox combines an editable text input with a filtered listbox. It supports keyboard
            selection, helper and error relationships, single or multiple values, and explicit
            clearing.
          </p>
          <TryIt>
            Type part of a country name, move through the suggestions with Arrow keys, press Enter
            to choose, and confirm the selected status.
          </TryIt>
          <div className="rounded-lg border p-5 sm:p-6">
            <BasicExample />
          </div>
        </section>
        <section className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight">When to use it</h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Use it when typing helps people find a known option.</li>
              <li>Use it for long collections where a static list is difficult to scan.</li>
              <li>Use multiple mode only when several values may be selected.</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight">When not to use it</h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>
                Use Radio or Select when the list is short and comparison is more important than
                filtering.
              </li>
              <li>Use a free-text input when arbitrary values are valid.</li>
              <li>Do not hide essential correction guidance in the popup.</li>
            </ul>
          </div>
        </section>
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">
            Accessibility and responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">
            Keep the input label visible, connect helper and error text, expose the listbox and
            active option relationships, and preserve Arrow key, Enter, Escape, and clear actions.
            Let the popup and selected-value tags wrap within narrow widths without clipping labels
            or focus rings.
          </p>
        </section>
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Examples and variations</h2>
            <p className="leading-7 text-muted-foreground">
              Each example demonstrates a distinct selection, guidance, availability, validation, or
              state-management decision.
            </p>
          </div>
          <div className="space-y-10">
            {renderExample(examples[0], <BasicExample />)}
            {renderExample(examples[1], <HelperExample />)}
            {renderExample(examples[2], <DisabledExample />)}
            {renderExample(examples[3], <InvalidExample />)}
            {renderExample(examples[4], <RequiredExample />)}
            {renderExample(examples[5], <MultipleExample />)}
            {renderExample(examples[6], <ClearableExample />)}
          </div>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsComboboxPage }
