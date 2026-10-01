import { useState, type ReactNode } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { ExampleVariation } from '@/components/layout/example-variation'
import { TryIt } from '@/components/layout/try-it'
import { formSidebarLinks } from '@/config/component-navigation'

/**
 * Checkbox Group guide page.
 *
 * Demonstrates related independent choices with fieldset/legend semantics,
 * helper text, disabled state, invalid feedback, and required selection.
 */

const checkboxClass =
  'size-4 shrink-0 rounded border border-input accent-primary outline-none transition-[color,box-shadow] focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40'
const options = ['Product news', 'Accessibility improvements', 'Events and webinars']

function optionId(prefix: string, option: string) {
  return `${prefix}-${option.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
}

type GroupFieldProps = {
  id: string
  legend: string
  hint?: string
  error?: string
  invalid?: boolean
  children: ReactNode
}

function GroupField({ id, legend, hint, error, invalid = false, children }: GroupFieldProps) {
  const descriptionId = error ? `${id}-error` : hint ? `${id}-hint` : undefined
  return (
    <fieldset
      className="max-w-xl space-y-3"
      aria-describedby={descriptionId}
      aria-invalid={invalid || undefined}
    >
      <legend className="text-sm font-medium">{legend}</legend>
      {hint && !error && (
        <p id={`${id}-hint`} className="text-sm leading-6 text-muted-foreground">
          {hint}
        </p>
      )}
      <div className="space-y-3">{children}</div>
      {error && (
        <p id={`${id}-error`} className="text-sm leading-6 text-destructive" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  )
}

function OptionList({ prefix, disabled = false }: { prefix: string; disabled?: boolean }) {
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <label
          key={option}
          className="flex items-start gap-3 text-sm"
          htmlFor={optionId(prefix, option)}
        >
          <Checkbox id={optionId(prefix, option)} disabled={disabled} className="mt-1" />
          <span>{option}</span>
        </label>
      ))}
    </div>
  )
}

function BasicExample() {
  return (
    <GroupField id="group-basic-example" legend="Which updates would you like to receive?">
      <OptionList prefix="group-basic-example" />
    </GroupField>
  )
}

function HelperExample() {
  return (
    <GroupField
      id="group-helper-example"
      legend="Which updates would you like to receive?"
      hint="Select all that apply. We will use these choices to tailor your notifications."
    >
      <OptionList prefix="group-helper-example" />
    </GroupField>
  )
}

function DisabledExample() {
  return (
    <GroupField
      id="group-disabled-example"
      legend="Which updates would you like to receive?"
      hint="Available after you choose a notification plan."
    >
      <OptionList prefix="group-disabled-example" disabled />
    </GroupField>
  )
}

function InvalidExample() {
  return (
    <GroupField
      id="group-invalid-example"
      legend="Which updates would you like to receive?"
      error="Choose at least one update type."
      invalid
    >
      <OptionList prefix="group-invalid-example" />
    </GroupField>
  )
}

function RequiredExample() {
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const error =
    submitted && selected.length === 0
      ? 'Choose at least one update type before continuing.'
      : undefined

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <fieldset
        className="max-w-xl space-y-3"
        aria-describedby={error ? 'group-required-error' : 'group-required-hint'}
      >
        <legend className="text-sm font-medium">Which updates would you like to receive?</legend>
        <p id="group-required-hint" className="text-sm leading-6 text-muted-foreground">
          Required. Submit with no choices selected to see the error. Select one or more choices and
          submit again.
        </p>
        <div className="space-y-3">
          {options.map((option) => {
            const id = `group-required-${option}`
            return (
              <label key={option} className="flex items-start gap-3 text-sm" htmlFor={id}>
                <Checkbox
                  id={id}
                  className="mt-1"
                  checked={selected.includes(option)}
                  onChange={(event) => {
                    setSubmitted(false)
                    setSelected((current) =>
                      event.target.checked
                        ? [...current, option]
                        : current.filter((item) => item !== option),
                    )
                  }}
                />
                <span>{option}</span>
              </label>
            )
          })}
        </div>
        {error && (
          <p id="group-required-error" className="text-sm leading-6 text-destructive" role="alert">
            {error}
          </p>
        )}
      </fieldset>
      <button
        type="submit"
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Continue
      </button>
      {submitted && !error && (
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Preferences saved with {selected.length} update type{selected.length === 1 ? '' : 's'}{' '}
          selected.
        </p>
      )}
    </form>
  )
}

type GroupConfig = {
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
  criteria: Array<{
    id: string
    requirementRefs: string[]
    given: string
    when: string
    then: string
    and: string[]
  }>
  verification: Array<{
    id: string
    role: string
    title: string
    criterionRefs: string[]
    steps: string[]
    expected: string
  }>
}

function supplemental(config: GroupConfig) {
  const business = `BR-${config.id}`
  const requirementItems = `FR-${config.id}`
  const accessibility = `A11Y-${config.id}`
  const technical = `TR-${config.id}`
  return {
    tabLayout: 'requirements' as const,
    guidance: {
      explanation: config.explanation,
      considerations: [
        'Use a native fieldset and legend so the shared question is announced with every related option.',
        'Use the production Checkbox primitive for each option; the consuming form owns selection state and validation rules.',
      ],
      doItems: config.doItems,
      dontItems: config.dontItems,
    },
    code: {
      language: 'tsx',
      source: config.source,
      html: config.html.replace(
        '<input data-slot="checkbox"',
        `<input data-slot="checkbox" class="${checkboxClass}"`,
      ),
      props: [
        {
          name: 'fieldset / legend',
          type: 'native HTML elements',
          description: 'Group related independent choices under one shared question.',
        },
        {
          name: 'Checkbox',
          type: 'React component',
          description: 'Render one independently selectable option for each group item.',
        },
        {
          name: 'aria-describedby / aria-invalid',
          type: 'ARIA attributes',
          description:
            'Connect group guidance or errors and expose actionable invalid state when applicable.',
        },
      ],
      attributes: [
        {
          name: 'for / id',
          type: 'semantic attributes',
          description: 'Associate each visible option label with one Checkbox.',
        },
        {
          name: 'data-slot="checkbox"',
          type: 'styling hook',
          description: 'Identifies the production Checkbox primitive in rendered output.',
        },
        {
          name: 'aria-describedby / role="alert" / role="status"',
          type: 'accessibility attributes',
          description: 'Expose helper, error, and success information in the relevant state.',
        },
      ],
      notes:
        'The HTML includes the fieldset, legend, every option, labels, relationships, state attributes, and feedback shown by the example.',
    },
    requirements: {
      userStory: `As a form user, I want related Checkbox choices grouped under one clear question so that I can select any applicable options and understand the group state.`,
      groups: [
        {
          id: business,
          title: 'Business requirements',
          items: [
            config.purpose,
            'The legend must state the shared question and each option must describe one independent choice.',
          ],
        },
        { id: requirementItems, title: 'Functional requirements', items: config.requirementItems },
        {
          id: accessibility,
          title: 'Accessibility requirements',
          items: [
            'The group must use fieldset and legend semantics and preserve keyboard access to every option.',
            'Helper, error, and status text must be available in text and associated with the group when applicable.',
          ],
        },
        {
          id: technical,
          title: 'Technical requirements',
          items: [
            'The example must use the production Checkbox primitive for each option.',
            'The rendered structure must preserve native checkbox semantics and complete relationships.',
          ],
        },
      ],
      acceptanceCriteria: config.criteria.map((criterion) => ({
        ...criterion,
        requirementRefs: criterion.requirementRefs.map((ref) =>
          ref === 'business'
            ? `${business}-01`
            : ref === 'requirementItems'
              ? `${requirementItems}-01`
              : `${accessibility}-01`,
        ),
      })),
    },
    verification: {
      scenarios: config.verification.map((scenario) => ({
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
    },
  }
}

const configs: GroupConfig[] = [
  {
    id: 'BASIC',
    title: 'Basic',
    purpose: 'The basic group must present related independent options under one shared question.',
    tryIt:
      'Use Tab and Space to select two different update types, then confirm each option changes independently under the same legend.',
    explanation: 'Use a basic group when people may select zero, one, or several related options.',
    doItems: [
      'Use a concise legend that describes the shared decision.',
      'Write every option so it makes sense without relying on its position.',
    ],
    dontItems: [
      'Do not use a group when exactly one choice is allowed; use Radio group.',
      'Do not use vague option labels that hide the actual outcome.',
    ],
    source: `import { Checkbox } from '@/components/ui/checkbox'\n\n<fieldset>\n  <legend>Which updates would you like to receive?</legend>\n  {['Product news', 'Accessibility improvements', 'Events and webinars'].map((option) => (\n    <label key={option} htmlFor={option}>\n      <Checkbox id={option} />\n      {option}\n    </label>\n  ))}\n</fieldset>`,
    html: `<fieldset>\n  <legend>Which updates would you like to receive?</legend>\n  <label for="Product news"><input data-slot="checkbox" id="Product news" type="checkbox">Product news</label>\n  <label for="Accessibility improvements"><input data-slot="checkbox" id="Accessibility improvements" type="checkbox">Accessibility improvements</label>\n  <label for="Events and webinars"><input data-slot="checkbox" id="Events and webinars" type="checkbox">Events and webinars</label>\n</fieldset>`,
    requirementItems: [
      'Each option must be independently checkable and clearable.',
      'Selecting one option must not clear another selected option.',
    ],
    criteria: [
      {
        id: 'AC-BASIC-01',
        requirementRefs: ['business', 'requirementItems'],
        given: 'the Checkbox Group is rendered',
        when: 'a person selects Product news and Accessibility improvements, then clears Product news',
        then: 'each option changes independently under the shared legend',
        and: ['selecting one option does not clear another'],
      },
      {
        id: 'AC-BASIC-02',
        requirementRefs: ['accessibility'],
        given: 'a person navigates the group with a keyboard',
        when: 'focus moves through the options',
        then: 'each Checkbox has a visible label and can be toggled with Space',
        and: ['the fieldset and legend identify the shared question'],
      },
    ],
    verification: [
      {
        id: 'VR-BASIC-01',
        role: 'Functional QA',
        title: 'Select multiple independent options',
        criterionRefs: ['AC-BASIC-01'],
        steps: [
          'Select Product news.',
          'Select Accessibility improvements.',
          'Clear Product news.',
        ],
        expected: 'Both options can be selected, and clearing one leaves the other selected.',
      },
      {
        id: 'VR-BASIC-02',
        role: 'Accessibility QA',
        title: 'Navigate group semantics',
        criterionRefs: ['AC-BASIC-02'],
        steps: [
          'Use Tab to reach each Checkbox.',
          'Press Space on an option and inspect its label and checked state.',
        ],
        expected:
          'Every option has a visible focus state, an associated label, and native keyboard toggling.',
      },
    ],
  },
  {
    id: 'HELPER',
    title: 'With helper text',
    purpose: 'The helper-text group must explain the selection rule or consequence persistently.',
    tryIt:
      'Read the helper message, select two update types, and confirm the instructions remain available while choices change.',
    explanation:
      'Use group helper text when people need context such as selection limits, notification scope, or how choices are used.',
    doItems: [
      'Associate the group description with the fieldset using aria-describedby.',
      'State selection rules before the person makes a choice.',
    ],
    dontItems: [
      'Do not repeat the legend in helper text.',
      'Do not hide an essential selection rule in optional help.',
    ],
    source: `import { Checkbox } from '@/components/ui/checkbox'\n\n<fieldset aria-describedby="updates-hint">\n  <legend>Which updates would you like to receive?</legend>\n  <p id="updates-hint">Select all that apply.</p>\n  {/* Render one labelled Checkbox for each option. */}\n</fieldset>`,
    html: `<fieldset aria-describedby="updates-hint">\n  <legend>Which updates would you like to receive?</legend>\n  <p id="updates-hint">Select all that apply. We will use these choices to tailor your notifications.</p>\n  <input data-slot="checkbox" id="helper-product" type="checkbox"><label for="helper-product">Product news</label>\n  <input data-slot="checkbox" id="helper-accessibility" type="checkbox"><label for="helper-accessibility">Accessibility improvements</label>\n</fieldset>`,
    requirementItems: [
      'The helper text must explain the selection rule or consequence.',
      'The group must remain independently selectable while the helper text stays visible.',
    ],
    criteria: [
      {
        id: 'AC-HELPER-01',
        requirementRefs: ['business', 'requirementItems'],
        given: 'the helper-text group is rendered',
        when: 'a person reads the helper text, selects Product news and Accessibility improvements, and changes those choices',
        then: 'the helper text explains the rule and remains visible',
        and: ['multiple options remain independently selectable'],
      },
      {
        id: 'AC-HELPER-02',
        requirementRefs: ['accessibility'],
        given: 'a person focuses an option in the group',
        when: 'the accessible description is computed',
        then: 'the fieldset references the helper text',
        and: ['the legend and option labels remain available'],
      },
    ],
    verification: [
      {
        id: 'VR-HELPER-01',
        role: 'Functional QA',
        title: 'Review helper guidance',
        criterionRefs: ['AC-HELPER-01'],
        steps: ['Read the helper message.', 'Select two update types.'],
        expected: 'The selection rule remains visible and both choices can be selected.',
      },
      {
        id: 'VR-HELPER-02',
        role: 'Accessibility QA',
        title: 'Inspect helper relationship',
        criterionRefs: ['AC-HELPER-02'],
        steps: [
          'Inspect fieldset aria-describedby.',
          'Confirm the referenced paragraph id exists.',
        ],
        expected: 'The group description is programmatically associated with the fieldset.',
      },
    ],
  },
  {
    id: 'DISABLED',
    title: 'Disabled',
    purpose:
      'The disabled group must communicate that none of its related choices are currently available.',
    tryIt:
      'Attempt to focus or toggle the disabled choices and confirm the legend and availability explanation remain readable.',
    explanation:
      'Disable the whole group only when the current context prevents changing any option.',
    doItems: [
      'Explain what controls availability.',
      'Keep the legend and option labels readable in the disabled state.',
    ],
    dontItems: [
      'Do not disable a group merely to prevent mistakes.',
      'Do not hide important information only in disabled controls.',
    ],
    source: `import { Checkbox } from '@/components/ui/checkbox'\n\n<fieldset aria-describedby="plan-hint">\n  <legend>Which updates would you like to receive?</legend>\n  <p id="plan-hint">Available after you choose a notification plan.</p>\n  <Checkbox disabled aria-label="Product news" />\n  {/* Disable every option when the group is unavailable. */}\n</fieldset>`,
    html: `<fieldset aria-describedby="plan-hint">\n  <legend>Which updates would you like to receive?</legend>\n  <p id="plan-hint">Available after you choose a notification plan.</p>\n  <input data-slot="checkbox" id="disabled-product" type="checkbox" disabled><label for="disabled-product">Product news</label>\n  <input data-slot="checkbox" id="disabled-accessibility" type="checkbox" disabled><label for="disabled-accessibility">Accessibility improvements</label>\n</fieldset>`,
    requirementItems: [
      'Every option must prevent changes while the group is unavailable.',
      'The availability explanation must remain visible.',
    ],
    criteria: [
      {
        id: 'AC-DISABLED-01',
        requirementRefs: ['business', 'requirementItems'],
        given: 'the disabled group is rendered',
        when: 'a person attempts to toggle Product news or Accessibility improvements',
        then: 'the option cannot change and the availability explanation remains visible',
        and: ['all options remain unavailable'],
      },
      {
        id: 'AC-DISABLED-02',
        requirementRefs: ['accessibility'],
        given: 'a person inspects the group',
        when: 'the options are disabled',
        then: 'the unavailable state is exposed semantically',
        and: ['the legend and explanation remain readable'],
      },
    ],
    verification: [
      {
        id: 'VR-DISABLED-01',
        role: 'Functional QA',
        title: 'Inspect unavailable options',
        criterionRefs: ['AC-DISABLED-01'],
        steps: ['Attempt to focus and toggle each option.', 'Read the plan explanation.'],
        expected: 'No option can be toggled and the explanation remains visible.',
      },
      {
        id: 'VR-DISABLED-02',
        role: 'Accessibility QA',
        title: 'Inspect disabled semantics',
        criterionRefs: ['AC-DISABLED-02'],
        steps: ['Inspect disabled on every input.', 'Confirm labels and legend remain readable.'],
        expected: 'Every option is semantically disabled without removing the group’s context.',
      },
    ],
  },
  {
    id: 'INVALID',
    title: 'Invalid',
    purpose:
      'The invalid group must explain the actionable rule that the current selection violates.',
    tryIt:
      'Read the group error, select at least one update type, and confirm the options remain available to correct the group.',
    explanation:
      'Use an invalid group when the selection violates an actionable rule such as requiring at least one option.',
    doItems: [
      'State the rule and correction in the error.',
      'Associate the error with the fieldset and expose invalid state on the group.',
    ],
    dontItems: [
      'Do not rely on color or an icon alone.',
      'Do not write “Invalid selection” without the corrective action.',
    ],
    source: `import { Checkbox } from '@/components/ui/checkbox'\n\n<fieldset aria-describedby="updates-error">\n  <legend>Which updates would you like to receive?</legend>\n  <Checkbox aria-invalid="true" aria-label="Product news" />\n  <p id="updates-error" role="alert">Choose at least one update type.</p>\n</fieldset>`,
    html: `<fieldset aria-describedby="updates-error">\n  <legend>Which updates would you like to receive?</legend>\n  <input data-slot="checkbox" id="invalid-product" type="checkbox" aria-invalid="true"><label for="invalid-product">Product news</label>\n  <p id="updates-error" role="alert">Choose at least one update type.</p>\n</fieldset>`,
    requirementItems: [
      'The group must remain available for correction.',
      'The error must explain that at least one update type must be selected.',
    ],
    criteria: [
      {
        id: 'AC-INVALID-01',
        requirementRefs: ['business', 'requirementItems'],
        given: 'the invalid group is rendered',
        when: 'a person reviews Product news, Accessibility improvements, and Events and webinars',
        then: 'the unchecked options and correction message are visible',
        and: ['the options remain available for selection'],
      },
      {
        id: 'AC-INVALID-02',
        requirementRefs: ['accessibility'],
        given: 'a person focuses an invalid option',
        when: 'the group description is computed',
        then: 'the error is associated with the fieldset and invalid state is exposed',
        and: ['the problem is understandable without color'],
      },
    ],
    verification: [
      {
        id: 'VR-INVALID-01',
        role: 'Functional QA',
        title: 'Correct the group selection',
        criterionRefs: ['AC-INVALID-01'],
        steps: ['Read the error.', 'Select Product news.'],
        expected: 'The group remains selectable and the error states the required correction.',
      },
      {
        id: 'VR-INVALID-02',
        role: 'Accessibility QA',
        title: 'Inspect error relationship',
        criterionRefs: ['AC-INVALID-02'],
        steps: ['Inspect fieldset aria-describedby.', 'Inspect the invalid state and alert text.'],
        expected:
          'The error is programmatically available and the correction is described in text.',
      },
    ],
  },
  {
    id: 'REQUIRED',
    title: 'Required',
    purpose:
      'The required group must block submission until at least one independent option is actively selected.',
    tryIt:
      'Submit with no options selected, then select one or more update types and submit again to confirm the error and success status change.',
    explanation:
      'Use a required group when the task needs one or more selections but still permits multiple independent choices.',
    doItems: [
      'State whether at least one or a maximum number of options is required.',
      'Make the error and success outcomes observable.',
    ],
    dontItems: [
      'Do not preselect a required acknowledgment without a clear reason.',
      'Do not use an error that only says “Required.”',
    ],
    source: `import { useState } from 'react'\nimport { Checkbox } from '@/components/ui/checkbox'\n\nfunction RequiredGroup() {\n  const [selected, setSelected] = useState<string[]>([])\n  const [submitted, setSubmitted] = useState(false)\n  // Update selected on each Checkbox and announce the valid result.\n  return <fieldset aria-describedby="required-hint">{/* labelled options and submit button */}</fieldset>\n}`,
    html: `<form>\n  <fieldset aria-describedby="group-required-hint">\n    <legend>Which updates would you like to receive?</legend>\n    <p id="group-required-hint">Required. Submit with no choices selected to see the error.</p>\n    <input data-slot="checkbox" id="required-product" type="checkbox"><label for="required-product">Product news</label>\n    <button type="submit">Continue</button>\n  </fieldset>\n  <p role="status" aria-live="polite">Preferences saved with 1 update type selected.</p>\n</form>`,
    requirementItems: [
      'Submitting with zero selected options must expose the corrective error.',
      'Submitting with one or more options must expose a polite success status.',
    ],
    criteria: [
      {
        id: 'AC-REQUIRED-01',
        requirementRefs: ['business', 'requirementItems'],
        given: 'no update type is selected',
        when: 'a person activates Continue',
        then: 'submission is blocked and the group error asks for at least one choice',
        and: ['the person can select one or more options and try again'],
      },
      {
        id: 'AC-REQUIRED-02',
        requirementRefs: ['accessibility'],
        given: 'one or more update types are selected',
        when: 'the person submits the group',
        then: 'a polite status reports the saved selection count',
        and: ['the group legend and status remain understandable'],
      },
    ],
    verification: [
      {
        id: 'VR-REQUIRED-01',
        role: 'Functional QA',
        title: 'Submit group choices',
        criterionRefs: ['AC-REQUIRED-01', 'AC-REQUIRED-02'],
        steps: [
          'Activate Continue with no choices selected.',
          'Select Product news and activate Continue again.',
        ],
        expected:
          'The empty submission shows an error; the valid submission shows the saved-selection status.',
      },
      {
        id: 'VR-REQUIRED-02',
        role: 'Accessibility QA',
        title: 'Inspect group feedback',
        criterionRefs: ['AC-REQUIRED-02'],
        steps: [
          'Inspect fieldset and legend.',
          'Inspect the error and success status roles and relationships.',
        ],
        expected:
          'The group context, error, and polite success announcement are programmatically available.',
      },
    ],
  },
]

function renderExample(config: GroupConfig, children: ReactNode) {
  return (
    <ExampleVariation
      title={config.title}
      summary={config.purpose}
      tryIt={config.tryIt}
      exampleClassName="p-5 sm:p-6"
      supplemental={supplemental(config)}
    >
      {children}
    </ExampleVariation>
  )
}

function ComponentsCheckboxGroupPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/checkbox-group"
      tabActiveHref="/components/forms"
      sidebarNav={formSidebarLinks}
      sidebarNavLabel="Forms components"
    >
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby="group-heading">
          <h1 id="group-heading" className="text-4xl font-semibold tracking-tight">
            Checkbox group
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Use Checkbox group when people may choose zero, one, or several related independent
            options under one shared question.
          </p>
        </section>
        <section className="space-y-5" aria-labelledby="group-what-heading">
          <h2 id="group-what-heading" className="text-2xl font-semibold tracking-tight">
            What is it?
          </h2>
          <p className="leading-7 text-muted-foreground">
            A Checkbox group uses a fieldset and legend to give related independent choices one
            shared context. Each Checkbox remains independently selectable; use Radio group when
            exactly one option may be selected.
          </p>
          <TryIt>
            Use Tab and Space to select two topics and confirm each choice changes independently
            under the shared legend.
          </TryIt>
          <div className="rounded-lg border p-5 sm:p-6">
            <BasicExample />
          </div>
        </section>
        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="group-use-heading">
          <div className="space-y-5">
            <h2 id="group-use-heading" className="text-2xl font-semibold tracking-tight">
              When to use it
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>
                Use it for several related choices where zero, one, or multiple options may be
                selected.
              </li>
              <li>
                Use a clear legend for the shared question and individual labels for each option.
              </li>
              <li>Use helper text for selection rules, limits, or consequences.</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 id="group-not-heading" className="text-2xl font-semibold tracking-tight">
              When not to use it
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Use Radio group when exactly one choice is permitted.</li>
              <li>Use a single Checkbox when the choice is independent of other options.</li>
              <li>Use Switch when changing the setting should take effect immediately.</li>
            </ul>
          </div>
        </section>
        <section className="space-y-5" aria-labelledby="group-design-heading">
          <h2 id="group-design-heading" className="text-2xl font-semibold tracking-tight">
            Design considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Write one legend that names the shared decision and options that make sense
              independently.
            </li>
            <li>
              State selection limits before people choose and keep helper or error text close to the
              group.
            </li>
            <li>Preserve the order that best supports scanning and decision-making.</li>
            <li>Do not preselect required acknowledgments without a clear product reason.</li>
          </ul>
        </section>
        <section className="space-y-5" aria-labelledby="group-accessibility-heading">
          <h2 id="group-accessibility-heading" className="text-2xl font-semibold tracking-tight">
            Accessibility considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Use fieldset and legend for the shared question and a visible label for every
              Checkbox.
            </li>
            <li>Preserve Tab and Space operation for every option with visible focus.</li>
            <li>
              Associate group helper and error text with aria-describedby and expose actionable
              invalid state in text.
            </li>
            <li>
              Keep selected, disabled, required, and success states understandable without color
              alone.
            </li>
          </ul>
        </section>
        <section className="space-y-5" aria-labelledby="group-responsive-heading">
          <h2 id="group-responsive-heading" className="text-2xl font-semibold tracking-tight">
            Responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">
            Keep the legend, options, and supporting text in reading order. Let long labels wrap
            without clipping, preserve comfortable vertical spacing at narrow widths, and keep every
            option reachable at zoom and reflow.
          </p>
        </section>
        <section className="space-y-8" aria-labelledby="group-examples-heading">
          <div className="space-y-2">
            <h2 id="group-examples-heading" className="text-2xl font-semibold tracking-tight">
              Examples and variations
            </h2>
            <p className="leading-7 text-muted-foreground">
              Each variation demonstrates a distinct group decision: independent options, helper
              guidance, unavailable options, actionable error, or required selection.
            </p>
          </div>
          <div className="space-y-10">
            {renderExample(configs[0], <BasicExample />)}
            {renderExample(configs[1], <HelperExample />)}
            {renderExample(configs[2], <DisabledExample />)}
            {renderExample(configs[3], <InvalidExample />)}
            {renderExample(configs[4], <RequiredExample />)}
          </div>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsCheckboxGroupPage }
