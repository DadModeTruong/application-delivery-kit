import { useState, type ReactNode } from 'react'

import { Radio } from '@/components/ui/radio'
import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { ExampleVariation } from '@/components/layout/example-variation'
import { TryIt } from '@/components/layout/try-it'
import { formSidebarLinks } from '@/config/component-navigation'

/**
 * Radio button guide page.
 *
 * Demonstrates mutually exclusive choices with fieldset/legend semantics,
 * helper text, disabled state, invalid feedback, and required selection.
 */

const radioClass =
  'size-4 shrink-0 rounded-full border border-input accent-primary outline-none transition-[color,box-shadow] focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40'
const options = ['Email', 'Text message', 'No notifications']

function optionId(prefix: string, option: string) {
  return `${prefix}-${option.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
}

type RadioFieldProps = {
  id: string
  legend: string
  hint?: string
  error?: string
  invalid?: boolean
  children: ReactNode
}

function RadioField({ id, legend, hint, error, invalid = false, children }: RadioFieldProps) {
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
          <Radio
            id={optionId(prefix, option)}
            name={prefix}
            value={option}
            disabled={disabled}
            className="mt-1"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  )
}

function BasicExample() {
  return (
    <RadioField id="radio-basic-example" legend="How should we contact you?">
      <OptionList prefix="radio-basic-example" />
    </RadioField>
  )
}

function HelperExample() {
  return (
    <RadioField
      id="radio-helper-example"
      legend="How should we contact you?"
      hint="Choose the method you check most often. You can change this preference later."
    >
      <OptionList prefix="radio-helper-example" />
    </RadioField>
  )
}

function DisabledExample() {
  return (
    <RadioField
      id="radio-disabled-example"
      legend="How should we contact you?"
      hint="Available after you add a verified contact method."
    >
      <OptionList prefix="radio-disabled-example" disabled />
    </RadioField>
  )
}

function InvalidExample() {
  return (
    <RadioField
      id="radio-invalid-example"
      legend="How should we contact you?"
      error="Choose one contact method."
      invalid
    >
      <OptionList prefix="radio-invalid-example" />
    </RadioField>
  )
}

function RequiredExample() {
  const [selected, setSelected] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const error = submitted && !selected ? 'Choose one contact method before continuing.' : undefined
  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <RadioField
        id="radio-required-example"
        legend="How should we contact you?"
        hint="Required. Submit without a choice to see the error. Select one option and submit again."
        error={error}
        invalid={Boolean(error)}
      >
        <div className="space-y-3">
          {options.map((option) => {
            const id = optionId('radio-required-example', option)
            return (
              <label key={option} className="flex items-start gap-3 text-sm" htmlFor={id}>
                <Radio
                  id={id}
                  name="radio-required-example"
                  value={option}
                  required
                  checked={selected === option}
                  onChange={(event) => {
                    setSubmitted(false)
                    setSelected(event.target.value)
                  }}
                  className="mt-1"
                />
                <span>{option}</span>
              </label>
            )
          })}
        </div>
      </RadioField>
      <button
        type="submit"
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Continue
      </button>
      {submitted && !error && (
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Contact preference saved: {selected}.
        </p>
      )}
    </form>
  )
}

type RadioConfig = {
  id: string
  title: string
  summary: string
  tryIt: string
  explanation: string
  dos: string[]
  donts: string[]
  source: string
  html: string
  functional: string[]
  criteria: Array<{
    id: string
    refs: string[]
    given: string
    when: string
    then: string
    and: string[]
  }>
  verification: Array<{
    id: string
    role: string
    title: string
    refs: string[]
    steps: string[]
    expected: string
  }>
}

function supplemental(config: RadioConfig) {
  const business = `BR-${config.id}`
  const functional = `FR-${config.id}`
  const accessibility = `A11Y-${config.id}`
  const technical = `TR-${config.id}`
  return {
    tabLayout: 'requirements' as const,
    guidance: {
      explanation: config.explanation,
      considerations: [
        'Use a native radio input with one shared name per decision so the browser enforces mutual exclusion.',
        'Keep the fieldset legend, visible labels, state, and feedback aligned with the demonstrated Radio props.',
      ],
      doItems: config.dos,
      dontItems: config.donts,
    },
    code: {
      language: 'tsx',
      source: config.source,
      html: config.html.replace(
        '<input data-slot="radio"',
        `<input data-slot="radio" class="${radioClass}"`,
      ),
      props: [
        {
          name: 'Radio',
          type: 'React component',
          description:
            'The production native radio primitive for one option in a mutually exclusive group.',
        },
        {
          name: 'name / value / checked / required',
          type: 'native input props',
          description:
            'Define group membership, option value, selection state, and required behavior.',
        },
      ],
      attributes: [
        {
          name: 'data-slot="radio"',
          type: 'styling hook',
          description: 'Identifies the production Radio primitive in rendered output.',
        },
        {
          name: 'fieldset / legend / for / id / aria-describedby',
          type: 'semantic and accessibility attributes',
          description:
            'Preserve the group question, label relationships, and helper/error relationships.',
        },
      ],
      notes:
        'The HTML includes the fieldset, legend, every radio option, labels, group name, state attributes, and feedback shown by the example.',
    },
    requirements: {
      userStory: `As a form user, I want mutually exclusive contact choices under one clear question so that I can select exactly one option confidently.`,
      groups: [
        {
          id: business,
          title: 'Business requirements',
          items: [
            config.summary,
            'The legend must state the shared decision and every option must be distinct.',
          ],
        },
        { id: functional, title: 'Functional requirements', items: config.functional },
        {
          id: accessibility,
          title: 'Accessibility requirements',
          items: [
            'The group must use fieldset and legend semantics and preserve keyboard movement between options.',
            'Every option must have a visible label and feedback must be available in text.',
          ],
        },
        {
          id: technical,
          title: 'Technical requirements',
          items: [
            'The example must use the production Radio primitive.',
            'All radio inputs for one decision must share one name and preserve native semantics.',
          ],
        },
      ],
      acceptanceCriteria: config.criteria.map((criterion) => ({
        ...criterion,
        requirementRefs: criterion.refs.map((ref) =>
          ref === 'business'
            ? `${business}-01`
            : ref === 'functional'
              ? `${functional}-01`
              : `${accessibility}-01`,
        ),
      })),
    },
    verification: {
      scenarios: config.verification.map((scenario) => ({
        id: scenario.id,
        role: scenario.role,
        title: scenario.title,
        criterionRefs: scenario.refs,
        cases: [
          {
            id: `${scenario.id}-A`,
            title: scenario.title,
            criterionRefs: scenario.refs,
            steps: scenario.steps,
            expected: scenario.expected,
          },
        ],
      })),
    },
  }
}

const configs: RadioConfig[] = [
  {
    id: 'BASIC',
    title: 'Basic',
    summary:
      'The basic Radio group must present mutually exclusive contact choices under one shared question.',
    tryIt:
      'Use Arrow keys or click a contact method and confirm selecting one option clears the previously selected option.',
    explanation:
      'Use a basic Radio group when exactly one option must be selected from a small set.',
    dos: [
      'Write a concise legend that states the shared question.',
      'Make every option complete and distinct so choices can be compared.',
    ],
    donts: [
      'Do not use Radio when several choices may be selected; use Checkbox group.',
      'Do not use vague options without a clear legend.',
    ],
    source: `import { Radio } from '@/components/ui/radio'\n\n<fieldset>\n  <legend>How should we contact you?</legend>\n  <Radio name="contact" value="email" />\n  <label htmlFor="email">Email</label>\n</fieldset>`,
    html: `<fieldset>\n  <legend>How should we contact you?</legend>\n  <input data-slot="radio" id="email" name="contact" type="radio" value="Email">\n  <label for="email">Email</label>\n  <input data-slot="radio" id="text" name="contact" type="radio" value="Text message">\n  <label for="text">Text message</label>\n</fieldset>`,
    functional: [
      'Selecting one option must clear the other options in the same named group.',
      'The group must always expose the selected option to the form.',
    ],
    criteria: [
      {
        id: 'AC-BASIC-01',
        refs: ['business', 'functional'],
        given: 'the Radio group is rendered',
        when: 'a person selects Email and then selects Text message',
        then: 'exactly one option remains selected',
        and: ['selecting a new option clears the previous option'],
      },
      {
        id: 'AC-BASIC-02',
        refs: ['accessibility'],
        given: 'a person navigates the group with a keyboard',
        when: 'Arrow keys move through the options',
        then: 'focus and selection move within the named group',
        and: ['the legend and visible labels remain available'],
      },
    ],
    verification: [
      {
        id: 'VR-BASIC-01',
        role: 'Functional QA',
        title: 'Choose one contact method',
        refs: ['AC-BASIC-01'],
        steps: ['Select Email.', 'Select Text message.', 'Inspect both checked states.'],
        expected: 'Text message is selected and Email is cleared.',
      },
      {
        id: 'VR-BASIC-02',
        role: 'Accessibility QA',
        title: 'Navigate radio semantics',
        refs: ['AC-BASIC-02'],
        steps: [
          'Focus a radio with Tab.',
          'Use Arrow keys and inspect focus, selection, and visible focus.',
        ],
        expected:
          'The group has one keyboard entry point and Arrow keys move selection within the named group.',
      },
    ],
  },
  {
    id: 'HELPER',
    title: 'With helper text',
    summary:
      'The helper-text Radio group must provide persistent context for comparing mutually exclusive options.',
    tryIt:
      'Read the helper message, select a contact method, and confirm the guidance remains available while the selection changes.',
    explanation:
      'Use helper text when timing, eligibility, privacy, or consequences help people compare the options.',
    dos: [
      'Associate the description with the fieldset using aria-describedby.',
      'Keep the decision context visible before and after selection.',
    ],
    donts: [
      'Do not repeat the legend in helper text.',
      'Do not hide essential eligibility rules in optional help.',
    ],
    source: `import { Radio } from '@/components/ui/radio'\n\n<fieldset aria-describedby="contact-hint">\n  <legend>How should we contact you?</legend>\n  <p id="contact-hint">Choose the method you check most often.</p>\n  {/* Render radios with one shared name. */}\n</fieldset>`,
    html: `<fieldset aria-describedby="contact-hint">\n  <legend>How should we contact you?</legend>\n  <p id="contact-hint">Choose the method you check most often. You can change this preference later.</p>\n  <input data-slot="radio" id="helper-email" name="helper-contact" type="radio"><label for="helper-email">Email</label>\n  <input data-slot="radio" id="helper-text" name="helper-contact" type="radio"><label for="helper-text">Text message</label>\n</fieldset>`,
    functional: [
      'The helper message must explain the decision context.',
      'The group must remain mutually exclusive while the helper remains visible.',
    ],
    criteria: [
      {
        id: 'AC-HELPER-01',
        refs: ['business', 'functional'],
        given: 'the helper-text Radio group is rendered',
        when: 'a person reads the helper text, selects Email, and then selects Text message',
        then: 'the helper message remains visible and the choice remains mutually exclusive',
        and: ['the selected option can be changed'],
      },
      {
        id: 'AC-HELPER-02',
        refs: ['accessibility'],
        given: 'a person focuses an option',
        when: 'the accessible description is computed',
        then: 'the fieldset references the helper text',
        and: ['the legend and labels remain available'],
      },
    ],
    verification: [
      {
        id: 'VR-HELPER-01',
        role: 'Functional QA',
        title: 'Review helper guidance',
        refs: ['AC-HELPER-01'],
        steps: ['Read the helper message.', 'Select Email and then Text message.'],
        expected: 'The guidance remains visible and only the latest option is selected.',
      },
      {
        id: 'VR-HELPER-02',
        role: 'Accessibility QA',
        title: 'Inspect helper relationship',
        refs: ['AC-HELPER-02'],
        steps: ['Inspect fieldset aria-describedby.', 'Confirm the helper paragraph id exists.'],
        expected: 'The group description is programmatically associated with the fieldset.',
      },
    ],
  },
  {
    id: 'DISABLED',
    title: 'Disabled',
    summary:
      'The disabled Radio group must communicate that the mutually exclusive decision is unavailable.',
    tryIt:
      'Attempt to focus or select the disabled contact methods and confirm the availability explanation remains readable.',
    explanation:
      'Disable a Radio group only when the decision cannot be changed in the current context.',
    dos: [
      'Explain what controls availability.',
      'Keep the legend and option labels understandable.',
    ],
    donts: [
      'Do not disable a group merely to prevent mistakes.',
      'Do not hide important information only in disabled controls.',
    ],
    source: `import { Radio } from '@/components/ui/radio'\n\n<fieldset aria-describedby="contact-hint">\n  <legend>How should we contact you?</legend>\n  <p id="contact-hint">Available after you add a verified contact method.</p>\n  <Radio name="contact" value="email" disabled />\n</fieldset>`,
    html: `<fieldset aria-describedby="contact-hint">\n  <legend>How should we contact you?</legend>\n  <p id="contact-hint">Available after you add a verified contact method.</p>\n  <input data-slot="radio" id="disabled-email" name="disabled-contact" type="radio" disabled><label for="disabled-email">Email</label>\n  <input data-slot="radio" id="disabled-text" name="disabled-contact" type="radio" disabled><label for="disabled-text">Text message</label>\n</fieldset>`,
    functional: [
      'Every option must prevent selection while the group is unavailable.',
      'The availability explanation must remain visible.',
    ],
    criteria: [
      {
        id: 'AC-DISABLED-01',
        refs: ['business', 'functional'],
        given: 'the disabled Radio group is rendered',
        when: 'a person attempts to select Email, Text message, or No notifications',
        then: 'the option cannot be selected and the explanation remains visible',
        and: ['all options remain unavailable'],
      },
      {
        id: 'AC-DISABLED-02',
        refs: ['accessibility'],
        given: 'a person inspects the unavailable group',
        when: 'the radios are disabled',
        then: 'the unavailable state is exposed semantically',
        and: ['the legend and explanation remain readable'],
      },
    ],
    verification: [
      {
        id: 'VR-DISABLED-01',
        role: 'Functional QA',
        title: 'Inspect unavailable choices',
        refs: ['AC-DISABLED-01'],
        steps: ['Attempt to focus and select each option.', 'Read the availability explanation.'],
        expected: 'No option can be selected and the explanation remains visible.',
      },
      {
        id: 'VR-DISABLED-02',
        role: 'Accessibility QA',
        title: 'Inspect disabled semantics',
        refs: ['AC-DISABLED-02'],
        steps: ['Inspect disabled on every radio.', 'Confirm labels and legend remain readable.'],
        expected:
          'Every option is semantically disabled while the group context remains available.',
      },
    ],
  },
  {
    id: 'INVALID',
    title: 'Invalid',
    summary:
      'The invalid Radio group must explain the actionable rule that the current selection violates.',
    tryIt:
      'Read the error, select one contact method, and confirm the group remains available to correct.',
    explanation:
      'Use an invalid state when the group violates an actionable rule such as requiring one choice.',
    dos: [
      'State what must be selected or changed and why.',
      'Associate the error with the fieldset and expose invalid state semantically.',
    ],
    donts: [
      'Do not rely on red borders or color alone.',
      'Do not write “Invalid selection” without a correction path.',
    ],
    source: `import { Radio } from '@/components/ui/radio'\n\n<fieldset aria-invalid="true" aria-describedby="contact-error">\n  <legend>How should we contact you?</legend>\n  <Radio name="contact" value="email" />\n  <p id="contact-error" role="alert">Select one contact method to continue.</p>\n</fieldset>`,
    html: `<fieldset aria-invalid="true" aria-describedby="contact-error">\n  <legend>How should we contact you?</legend>\n  <input data-slot="radio" id="invalid-email" name="invalid-contact" type="radio"><label for="invalid-email">Email</label>\n  <p id="contact-error" role="alert">Select one contact method to continue.</p>\n</fieldset>`,
    functional: [
      'The group must remain available for correction.',
      'The error must state that one contact method must be selected.',
    ],
    criteria: [
      {
        id: 'AC-INVALID-01',
        refs: ['business', 'functional'],
        given: 'the invalid Radio group is rendered',
        when: 'a person reviews Email, Text message, and No notifications',
        then: 'the correction message and selectable options are visible',
        and: ['the group exposes aria-invalid="true"'],
      },
      {
        id: 'AC-INVALID-02',
        refs: ['accessibility'],
        given: 'a person focuses an invalid option',
        when: 'the group description is computed',
        then: 'the error is associated with the fieldset',
        and: ['the problem is understandable without color'],
      },
    ],
    verification: [
      {
        id: 'VR-INVALID-01',
        role: 'Functional QA',
        title: 'Correct the radio selection',
        refs: ['AC-INVALID-01'],
        steps: ['Read the error.', 'Select Email.'],
        expected: 'The group remains selectable and the error explains the correction.',
      },
      {
        id: 'VR-INVALID-02',
        role: 'Accessibility QA',
        title: 'Inspect invalid relationship',
        refs: ['AC-INVALID-02'],
        steps: [
          'Inspect fieldset aria-invalid and aria-describedby.',
          'Confirm the alert text exists.',
        ],
        expected: 'The invalid state and error are programmatically available.',
      },
    ],
  },
  {
    id: 'REQUIRED',
    title: 'Required',
    summary:
      'The required Radio group must block submission until exactly one option is actively selected.',
    tryIt:
      'Submit without a choice, then select one contact method and submit again to confirm the success status appears.',
    explanation:
      'Use a required Radio group when the task needs exactly one choice and there is no safe meaningful default.',
    dos: [
      'State that one option is required.',
      'Make the error and success outcomes observable and understandable.',
    ],
    donts: [
      'Do not preselect a required decision without a clear reason.',
      'Do not use an error that only says “Required.”',
    ],
    source: `import { useState } from 'react'\nimport { Radio } from '@/components/ui/radio'\n\nfunction RequiredRadioGroup() {\n  const [selected, setSelected] = useState('')\n  const [submitted, setSubmitted] = useState(false)\n  function handleChange(value: string) { setSelected(value); setSubmitted(false) }\n  return <fieldset><legend>How should we contact you?</legend>{/* Render one named Radio per option. */}</fieldset>\n}`,
    html: `<form>\n  <fieldset aria-describedby="required-hint">\n    <legend>How should we contact you?</legend>\n    <p id="required-hint">Required. Select one option before continuing.</p>\n    <input data-slot="radio" id="required-email" name="required-contact" type="radio" required><label for="required-email">Email</label>\n    <button type="submit">Continue</button>\n  </fieldset>\n  <p role="status" aria-live="polite">Contact preference saved: Email.</p>\n</form>`,
    functional: [
      'Submitting with no selected option must expose the correction error.',
      'Submitting with one selected option must expose a polite success status.',
    ],
    criteria: [
      {
        id: 'AC-REQUIRED-01',
        refs: ['business', 'functional'],
        given: 'Email, Text message, and No notifications are all unselected',
        when: 'a person activates Continue',
        then: 'submission is blocked and the group error asks for one choice',
        and: ['the person can select one option and try again'],
      },
      {
        id: 'AC-REQUIRED-02',
        refs: ['accessibility'],
        given: 'Email, Text message, and No notifications are all unselected',
        when: 'the person submits the form',
        then: 'a polite status confirms the saved contact preference',
        and: ['the legend and status remain understandable'],
      },
    ],
    verification: [
      {
        id: 'VR-REQUIRED-01',
        role: 'Functional QA',
        title: 'Submit one contact method',
        refs: ['AC-REQUIRED-01', 'AC-REQUIRED-02'],
        steps: ['Activate Continue without a choice.', 'Select Email and activate Continue again.'],
        expected:
          'The empty submission shows an error; the valid submission shows the saved preference status.',
      },
      {
        id: 'VR-REQUIRED-02',
        role: 'Accessibility QA',
        title: 'Inspect required feedback',
        refs: ['AC-REQUIRED-02'],
        steps: [
          'Inspect the group legend and required inputs.',
          'Inspect the error and status roles.',
        ],
        expected:
          'The group context, correction message, and polite success announcement are programmatically available.',
      },
    ],
  },
]

function renderExample(config: RadioConfig, children: ReactNode) {
  return (
    <ExampleVariation
      title={config.title}
      summary={config.summary}
      tryIt={config.tryIt}
      exampleClassName="p-5 sm:p-6"
      supplemental={supplemental(config)}
    >
      {children}
    </ExampleVariation>
  )
}

function ComponentsRadioPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/radio"
      tabActiveHref="/components/forms"
      sidebarNav={formSidebarLinks}
      sidebarNavLabel="Forms components"
    >
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby="radio-heading">
          <h1 id="radio-heading" className="text-4xl font-semibold tracking-tight">
            Radio button
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Use Radio buttons as a group when people must choose exactly one option from a small set
            of mutually exclusive choices.
          </p>
        </section>
        <section className="space-y-5" aria-labelledby="radio-what-heading">
          <h2 id="radio-what-heading" className="text-2xl font-semibold tracking-tight">
            What is it?
          </h2>
          <p className="leading-7 text-muted-foreground">
            A Radio group presents mutually exclusive options under one shared question. Use
            Checkbox group when several options may be selected, and use a single Checkbox for an
            independent choice.
          </p>
          <TryIt>
            Use Arrow keys or click a contact method and confirm selecting one option clears the
            previous selection.
          </TryIt>
          <div className="rounded-lg border p-5 sm:p-6">
            <BasicExample />
          </div>
        </section>
        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="radio-use-heading">
          <div className="space-y-5">
            <h2 id="radio-use-heading" className="text-2xl font-semibold tracking-tight">
              When to use it
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Use it when exactly one option may be selected from a small set.</li>
              <li>
                Use a clear legend for the shared question and complete labels for each option.
              </li>
              <li>Use helper text when comparison context or consequences need explanation.</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 id="radio-not-heading" className="text-2xl font-semibold tracking-tight">
              When not to use it
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Use Checkbox group when several choices may be selected.</li>
              <li>Use a single Checkbox for one independent preference or confirmation.</li>
              <li>Use a Select when the option set is large or space is constrained.</li>
            </ul>
          </div>
        </section>
        <section className="space-y-5" aria-labelledby="radio-design-heading">
          <h2 id="radio-design-heading" className="text-2xl font-semibold tracking-tight">
            Design considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Write a legend that states the decision and options that can be compared directly.
            </li>
            <li>
              Keep options mutually exclusive and do not make a selected option impossible to clear
              without choosing another.
            </li>
            <li>Preserve a clear order and enough spacing for scanning and touch activation.</li>
            <li>
              Do not preselect a consequential required choice without a clear product reason.
            </li>
          </ul>
        </section>
        <section className="space-y-5" aria-labelledby="radio-accessibility-heading">
          <h2 id="radio-accessibility-heading" className="text-2xl font-semibold tracking-tight">
            Accessibility considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Use fieldset and legend for the shared question and a visible label for every Radio.
            </li>
            <li>
              Preserve native Tab entry and Arrow-key movement within the named group with visible
              focus.
            </li>
            <li>
              Associate helper or error text with aria-describedby and expose invalid state in text.
            </li>
            <li>
              Keep selected, disabled, required, and success states understandable without color
              alone.
            </li>
          </ul>
        </section>
        <section className="space-y-5" aria-labelledby="radio-responsive-heading">
          <h2 id="radio-responsive-heading" className="text-2xl font-semibold tracking-tight">
            Responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">
            Keep the legend, options, and supporting text in reading order. Let long labels wrap
            without clipping, preserve comfortable vertical spacing at narrow widths, and keep the
            group usable at zoom and reflow.
          </p>
        </section>
        <section className="space-y-8" aria-labelledby="radio-examples-heading">
          <div className="space-y-2">
            <h2 id="radio-examples-heading" className="text-2xl font-semibold tracking-tight">
              Examples and variations
            </h2>
            <p className="leading-7 text-muted-foreground">
              Each variation demonstrates a distinct Radio decision: mutually exclusive choices,
              helper context, unavailable options, actionable error, or required selection.
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

export { ComponentsRadioPage }
