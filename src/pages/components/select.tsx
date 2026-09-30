import { useState, type ReactNode } from 'react'

import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { ExampleVariation } from '@/components/layout/example-variation'
import { TryIt } from '@/components/layout/try-it'
import { Select } from '@/components/ui/select'
import { formSidebarLinks } from '@/config/component-navigation'

/**
 * Select guide page.
 *
 * Demonstrates the production Select primitive with prompt, helper, disabled,
 * invalid, required, and grouped-option states. Use Combobox when filtering
 * or free-form search is the primary interaction.
 */

const fieldClass = 'max-w-xl space-y-2'
const renderedSelectClass =
  'flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40 md:text-sm'

function Field({
  id,
  label,
  hint,
  children,
}: {
  id: string
  label: string
  hint?: string
  children: ReactNode
}) {
  return (
    <div className={fieldClass}>
      <label className="text-sm font-medium" htmlFor={id}>
        {label}
      </label>
      {children}
      {hint && (
        <p id={`${id}-hint`} className="text-sm leading-6 text-muted-foreground">
          {hint}
        </p>
      )}
    </div>
  )
}

function BasicExample() {
  return (
    <Field id="select-basic-example" label="Contact preference">
      <Select id="select-basic-example" defaultValue="">
        <option value="" disabled>
          Choose a contact preference
        </option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
        <option value="sms">Text message</option>
      </Select>
    </Field>
  )
}

function HelperExample() {
  return (
    <Field
      id="select-helper-example"
      label="Notification frequency"
      hint="Choose how often the project summary is sent to your team."
    >
      <Select
        id="select-helper-example"
        defaultValue="weekly"
        aria-describedby="select-helper-example-hint"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </Select>
    </Field>
  )
}

function DisabledExample() {
  return (
    <Field
      id="select-disabled-example"
      label="Account region"
      hint="This value is controlled by your account administrator."
    >
      <Select
        id="select-disabled-example"
        value="us-east"
        disabled
        aria-describedby="select-disabled-example-hint"
        onChange={() => undefined}
      >
        <option value="us-east">US East</option>
        <option value="eu-west">EU West</option>
      </Select>
    </Field>
  )
}

function InvalidExample() {
  return (
    <Field id="select-invalid-example" label="Review status">
      <Select
        id="select-invalid-example"
        className="border-destructive focus-visible:ring-destructive"
        defaultValue="archived"
        aria-invalid="true"
        aria-describedby="select-invalid-example-error"
      >
        <option value="draft">Draft</option>
        <option value="review">Ready for review</option>
        <option value="archived">Archived</option>
      </Select>
      <p id="select-invalid-example-error" className="text-sm text-destructive">
        Archived projects cannot be submitted for review. Choose Draft or Ready for review.
      </p>
    </Field>
  )
}

function RequiredExample() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <Field
        id="select-required-example"
        label="Deployment region"
        hint="Required. Submit without a choice to see the browser prevent submission."
      >
        <Select
          id="select-required-example"
          defaultValue=""
          required
          aria-required="true"
          aria-describedby="select-required-example-hint"
          onChange={() => setSubmitted(false)}
        >
          <option value="" disabled>
            Choose a deployment region
          </option>
          <option value="us-east">US East</option>
          <option value="eu-west">EU West</option>
          <option value="ap-southeast">Asia Pacific Southeast</option>
        </Select>
      </Field>
      <button
        type="submit"
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Submit
      </button>
      {submitted && (
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Submitted successfully because a deployment region was selected.
        </p>
      )}
    </form>
  )
}

function GroupsExample() {
  return (
    <Field id="select-groups-example" label="Project owner">
      <Select id="select-groups-example" defaultValue="">
        <option value="" disabled>
          Choose a project owner
        </option>
        <optgroup label="Design">
          <option value="maya">Maya Chen</option>
          <option value="jordan">Jordan Lee</option>
        </optgroup>
        <optgroup label="Engineering">
          <option value="sam">Sam Rivera</option>
          <option value="riley">Riley Patel</option>
        </optgroup>
      </Select>
    </Field>
  )
}

type SelectExampleConfig = {
  id: string
  title: string
  purpose: string
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

function supplemental(config: SelectExampleConfig) {
  const businessId = `BR-${config.id}`
  const functionalId = `FR-${config.id}`
  const accessibilityId = `A11Y-${config.id}`
  const technicalId = `TR-${config.id}`

  return {
    tabLayout: 'requirements' as const,
    guidance: {
      explanation: config.explanation,
      considerations: [
        'Use the production Select primitive so native option semantics, keyboard behavior, focus treatment, and browser validation remain available.',
        'Keep the visible label, supporting text, current value, and validation message aligned with the demonstrated Select props.',
      ],
      doItems: config.doItems,
      dontItems: config.dontItems,
    },
    code: {
      language: 'tsx',
      source: config.source.startsWith('import')
        ? config.source
        : `import { Select } from '@/components/ui/select'\n\n${config.source}`,
      html: config.html.replace(
        '<select data-slot="select"',
        `<select data-slot="select" class="${renderedSelectClass}"`,
      ),
      props: [
        {
          name: 'id',
          type: 'string',
          value: config.id.toLowerCase(),
          description: 'Connects the label and descriptions to the Select.',
        },
        {
          name: 'value/defaultValue',
          type: 'string',
          value: 'weekly',
          description: 'Controls the selected option; application state owns controlled values.',
        },
        {
          name: 'required',
          type: 'boolean',
          value: 'true when needed',
          description: 'Uses native constraint validation when the decision is required.',
        },
        {
          name: 'aria-describedby',
          type: 'string',
          value: `${config.id.toLowerCase()}-hint`,
          description: 'Associates persistent help or an error with the Select.',
        },
      ],
      attributes: [
        {
          name: 'data-slot="select"',
          type: 'styling hook',
          description:
            'Identifies the production Select primitive; preserve it when adapting the generated markup.',
        },
        {
          name: 'for / id / aria-describedby / aria-invalid',
          type: 'semantic and accessibility attributes',
          description:
            'Connect the visible label, supporting or error text, and invalid state to the Select.',
        },
        {
          name: 'class',
          type: 'styling hook',
          description:
            'Provides the production size, focus, disabled, invalid, and responsive treatment.',
        },
      ],
      notes:
        'The HTML shows the complete relevant structure for this example, including the label, Select, options, state attributes, and supporting or error text.',
    },
    requirements: {
      userStory: `As a person completing a form, I want the ${config.title.toLowerCase()} Select to make its available choices and current state clear so that I can choose an appropriate option without guessing.`,
      groups: [
        { id: businessId, title: 'Business requirements', items: [config.requirementItems[0]] },
        { id: functionalId, title: 'Functional requirements', items: [config.requirementItems[1]] },
        {
          id: accessibilityId,
          title: 'Accessibility requirements',
          items: [config.requirementItems[2]],
        },
        {
          id: technicalId,
          title: 'Responsive and visual requirements',
          items: [config.requirementItems[3]],
        },
      ],
      acceptanceCriteria: config.criteria.map((criterion) => ({ ...criterion })),
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

const examples: SelectExampleConfig[] = [
  {
    id: 'BASIC',
    title: 'Basic',
    purpose: 'A Select with a clear prompt and a short list of known choices.',
    explanation:
      'Use a basic Select when people choose one value from a short, stable list and there is no safe default.',
    doItems: [
      'Use a prompt that describes the decision.',
      'Order options predictably.',
      'Keep the label visible when the prompt disappears.',
    ],
    dontItems: [
      'Do not use “Select one” without context.',
      'Do not use a Select for several simultaneous choices.',
      'Do not hide the question in placeholder text.',
    ],
    source: `<Select id="contact-preference" defaultValue="">\n  <option value="" disabled>Choose a contact preference</option>\n  <option value="email">Email</option>\n  <option value="phone">Phone</option>\n  <option value="sms">Text message</option>\n</Select>`,
    html: `<label for="contact-preference">Contact preference</label>\n<select data-slot="select" id="contact-preference">\n  <option value="" disabled>Choose a contact preference</option>\n  <option value="email">Email</option>\n  <option value="phone">Phone</option>\n  <option value="sms">Text message</option>\n</select>`,
    requirementItems: [
      'The prompt must identify the decision before a value is selected.',
      'The Select must expose exactly one selected option from the known list.',
      'The label must remain associated and the native control must be keyboard operable.',
      'The control must remain readable and usable at narrow widths.',
    ],
    criteria: [
      {
        id: 'AC-BASIC-01',
        requirementRefs: ['BR-BASIC'],
        given: 'the Select is empty',
        when: 'the form is shown',
        then: 'the Contact preference label and prompt are visible',
        and: ['the prompt is not treated as a valid choice'],
      },
      {
        id: 'AC-BASIC-02',
        requirementRefs: ['FR-BASIC'],
        given: 'the list has Email, Phone, and Text message',
        when: 'a person chooses one option',
        then: 'the chosen option becomes the selected value',
        and: ['only one option is selected'],
      },
      {
        id: 'AC-BASIC-03',
        requirementRefs: ['A11Y-BASIC'],
        given: 'a person uses a keyboard',
        when: 'focus reaches the Select',
        then: 'the native Select has a visible focus indicator',
        and: ['the associated label is available to assistive technology'],
      },
      {
        id: 'AC-BASIC-04',
        requirementRefs: ['TR-BASIC'],
        given: 'the viewport becomes narrow',
        when: 'the Select is rendered',
        then: 'the label and options remain readable without horizontal scrolling',
        and: [],
      },
    ],
    verification: [
      {
        id: 'VR-BASIC-01',
        role: 'Functional QA',
        title: 'Choose one known option',
        criterionRefs: ['AC-BASIC-01', 'AC-BASIC-02'],
        steps: ['Open the Select.', 'Choose Phone.', 'Inspect the closed control.'],
        expected: 'Phone is displayed as the selected value and the prompt is no longer selected.',
      },
      {
        id: 'VR-BASIC-02',
        role: 'Accessibility QA',
        title: 'Use the native Select with a keyboard',
        criterionRefs: ['AC-BASIC-03'],
        steps: [
          'Press Tab until Contact preference is focused.',
          'Use Arrow Down to move through options.',
          'Press Enter or Tab to keep the choice.',
        ],
        expected:
          'Focus is visible, the label relationship is intact, and one option remains selected.',
      },
      {
        id: 'VR-BASIC-03',
        role: 'Responsive QA',
        title: 'Check narrow layout',
        criterionRefs: ['AC-BASIC-04'],
        steps: ['Resize to a narrow viewport.', 'Open the Select and inspect the option names.'],
        expected:
          'The control fits the available width and the option names remain understandable.',
      },
    ],
  },
  {
    id: 'HELPER',
    title: 'With helper text',
    purpose: 'A Select with persistent guidance that explains why the choice matters.',
    explanation:
      'Use helper text when the decision needs context that remains useful before and after selection, such as timing or consequences.',
    doItems: [
      'Explain how to choose, not what the label already says.',
      'Keep the guidance short and persistent.',
      'Associate it with aria-describedby.',
    ],
    dontItems: [
      'Do not repeat every option in the helper text.',
      'Do not use helper text for an error.',
      'Do not put essential instructions only in a disappearing prompt.',
    ],
    source: `<Select id="notification-frequency" defaultValue="weekly" aria-describedby="notification-frequency-hint">\n  <option value="daily">Daily</option>\n  <option value="weekly">Weekly</option>\n  <option value="monthly">Monthly</option>\n</Select>`,
    html: `<label for="notification-frequency">Notification frequency</label>\n<select data-slot="select" id="notification-frequency" aria-describedby="notification-frequency-hint">\n  <option value="daily">Daily</option>\n  <option value="weekly">Weekly</option>\n  <option value="monthly">Monthly</option>\n</select>\n<p id="notification-frequency-hint">Choose how often the project summary is sent to your team.</p>`,
    requirementItems: [
      'The helper text must explain how the choice affects the workflow.',
      'The default value must be visible and changeable.',
      'The Select and helper text must have a programmatic relationship.',
      'The helper text must wrap without obscuring the control.',
    ],
    criteria: [
      {
        id: 'AC-HELPER-01',
        requirementRefs: ['BR-HELPER'],
        given: 'the Select has a weekly default',
        when: 'the form is shown',
        then: 'Weekly is visibly selected',
        and: ['the helper text explains the notification consequence'],
      },
      {
        id: 'AC-HELPER-02',
        requirementRefs: ['FR-HELPER'],
        given: 'the person opens the Select',
        when: 'they choose Daily or Monthly',
        then: 'the selected frequency updates',
        and: ['the helper text remains available'],
      },
      {
        id: 'AC-HELPER-03',
        requirementRefs: ['A11Y-HELPER'],
        given: 'assistive technology reads the control',
        when: 'focus enters the Select',
        then: 'the label and helper text are associated',
        and: ['the helper text is not the only accessible name'],
      },
      {
        id: 'AC-HELPER-04',
        requirementRefs: ['TR-HELPER'],
        given: 'the helper text is longer than one line',
        when: 'the viewport narrows',
        then: 'the text wraps in reading order',
        and: ['the Select remains fully usable'],
      },
    ],
    verification: [
      {
        id: 'VR-HELPER-01',
        role: 'Functional QA',
        title: 'Change a described choice',
        criterionRefs: ['AC-HELPER-01', 'AC-HELPER-02'],
        steps: ['Confirm Weekly is selected.', 'Choose Daily.', 'Read the helper text again.'],
        expected: 'Daily is selected and the persistent guidance remains visible.',
      },
      {
        id: 'VR-HELPER-02',
        role: 'Accessibility QA',
        title: 'Inspect description relationship',
        criterionRefs: ['AC-HELPER-03'],
        steps: [
          'Inspect the Select id.',
          'Inspect aria-describedby.',
          'Inspect the referenced paragraph.',
        ],
        expected: 'The Select references the visible notification-frequency-hint paragraph.',
      },
      {
        id: 'VR-HELPER-03',
        role: 'Responsive QA',
        title: 'Wrap helper guidance',
        criterionRefs: ['AC-HELPER-04'],
        steps: ['Resize to a narrow viewport.', 'Inspect the helper text and Select.'],
        expected: 'The helper text wraps and no content or focus indicator is clipped.',
      },
    ],
  },
  {
    id: 'DISABLED',
    title: 'Disabled',
    purpose: 'A Select that cannot be changed in the current context.',
    explanation:
      'Disable a Select only when the person cannot make a meaningful change now and the surrounding guidance explains why.',
    doItems: [
      'Explain what controls availability.',
      'Preserve the value when it helps explain the workflow.',
      'Use disabled semantics so it is skipped by normal keyboard interaction.',
    ],
    dontItems: [
      'Do not disable a choice merely to prevent mistakes.',
      'Do not disable while loading without communicating progress.',
      'Do not use disabled when people need to copy or review the value.',
    ],
    source: `<Select id="account-region" value="us-east" disabled onChange={() => undefined}>\n  <option value="us-east">US East</option>\n  <option value="eu-west">EU West</option>\n</Select>`,
    html: `<label for="account-region">Account region</label>\n<select data-slot="select" id="account-region" disabled>\n  <option value="us-east">US East</option>\n  <option value="eu-west">EU West</option>\n</select>\n<p id="account-region-hint">This value is controlled by your account administrator.</p>`,
    requirementItems: [
      'The unavailable state must be explained near the Select.',
      'The current account region must remain visible.',
      'The native disabled state must prevent accidental changes.',
      'The disabled styling must remain distinguishable without relying on color alone.',
    ],
    criteria: [
      {
        id: 'AC-DISABLED-01',
        requirementRefs: ['BR-DISABLED'],
        given: 'the account administrator owns the region',
        when: 'the form is shown',
        then: 'the Select is visibly unavailable',
        and: ['the guidance explains the ownership'],
      },
      {
        id: 'AC-DISABLED-02',
        requirementRefs: ['FR-DISABLED'],
        given: 'the Select is disabled',
        when: 'a person attempts to change it',
        then: 'the value remains US East',
        and: ['the control does not change'],
      },
      {
        id: 'AC-DISABLED-03',
        requirementRefs: ['A11Y-DISABLED'],
        given: 'a person navigates the form with a keyboard',
        when: 'focus moves through controls',
        then: 'the disabled Select is not an actionable stop',
        and: ['its label and explanation remain understandable in context'],
      },
      {
        id: 'AC-DISABLED-04',
        requirementRefs: ['TR-DISABLED'],
        given: 'the Select is displayed on a narrow viewport',
        when: 'the value and guidance wrap',
        then: 'the disabled state remains visually clear',
        and: [],
      },
    ],
    verification: [
      {
        id: 'VR-DISABLED-01',
        role: 'Functional QA',
        title: 'Attempt to change unavailable value',
        criterionRefs: ['AC-DISABLED-01', 'AC-DISABLED-02'],
        steps: ['Inspect the current value.', 'Attempt to open or change the Select.'],
        expected:
          'The control is unavailable, remains US East, and explains administrator ownership.',
      },
      {
        id: 'VR-DISABLED-02',
        role: 'Accessibility QA',
        title: 'Inspect disabled semantics',
        criterionRefs: ['AC-DISABLED-03'],
        steps: ['Inspect the select element.', 'Tab through the surrounding form controls.'],
        expected:
          'The native disabled attribute is present and the Select is not an actionable keyboard stop.',
      },
      {
        id: 'VR-DISABLED-03',
        role: 'Responsive QA',
        title: 'Read disabled state at narrow width',
        criterionRefs: ['AC-DISABLED-04'],
        steps: ['Resize to a narrow viewport.', 'Inspect the control, value, and explanation.'],
        expected:
          'The value and explanation remain readable and the disabled treatment remains clear.',
      },
    ],
  },
  {
    id: 'INVALID',
    title: 'Invalid',
    purpose: 'A Select whose current value conflicts with a rule and needs correction.',
    explanation:
      'Show invalid state when the current choice is missing, unavailable, or conflicts with a rule the person can act on.',
    doItems: [
      'Explain the problem and correction.',
      'Keep the current value visible.',
      'Connect error text with aria-describedby and expose aria-invalid.',
    ],
    dontItems: [
      'Do not show an error before a fair chance to choose.',
      'Do not rely on a red border alone.',
      'Do not write only “Invalid selection.”',
    ],
    source: `<Select id="review-status" defaultValue="archived" aria-invalid="true" aria-describedby="review-status-error">\n  <option value="draft">Draft</option>\n  <option value="review">Ready for review</option>\n  <option value="archived">Archived</option>\n</Select>\n<p id="review-status-error">Archived projects cannot be submitted for review.</p>`,
    html: `<label for="review-status">Review status</label>\n<select data-slot="select" id="review-status" aria-invalid="true" aria-describedby="review-status-error">\n  <option value="draft">Draft</option>\n  <option value="review">Ready for review</option>\n  <option value="archived">Archived</option>\n</select>\n<p id="review-status-error">Archived projects cannot be submitted for review. Choose Draft or Ready for review.</p>`,
    requirementItems: [
      'The error must explain why Archived cannot be submitted.',
      'The current invalid value and valid alternatives must remain available.',
      'The invalid state and error must be programmatically associated.',
      'The error must remain readable when the layout narrows.',
    ],
    criteria: [
      {
        id: 'AC-INVALID-01',
        requirementRefs: ['BR-INVALID'],
        given: 'Archived is selected',
        when: 'the form is shown',
        then: 'the error explains the submission conflict',
        and: ['the correction options are named'],
      },
      {
        id: 'AC-INVALID-02',
        requirementRefs: ['FR-INVALID'],
        given: 'the person chooses Ready for review',
        when: 'the value changes',
        then: 'the Select displays Ready for review',
        and: ['the consumer can clear the invalid state after validation'],
      },
      {
        id: 'AC-INVALID-03',
        requirementRefs: ['A11Y-INVALID'],
        given: 'the Select is invalid',
        when: 'assistive technology inspects it',
        then: 'aria-invalid is true and aria-describedby references the error',
        and: ['the label remains associated'],
      },
      {
        id: 'AC-INVALID-04',
        requirementRefs: ['TR-INVALID'],
        given: 'the error contains a correction sentence',
        when: 'the viewport narrows',
        then: 'the error wraps without clipping',
        and: [],
      },
    ],
    verification: [
      {
        id: 'VR-INVALID-01',
        role: 'Functional QA',
        title: 'Correct an invalid choice',
        criterionRefs: ['AC-INVALID-01', 'AC-INVALID-02'],
        steps: [
          'Confirm Archived is selected.',
          'Choose Ready for review.',
          'Inspect the selected value.',
        ],
        expected: 'Ready for review is selected and the correction path is clear.',
      },
      {
        id: 'VR-INVALID-02',
        role: 'Accessibility QA',
        title: 'Inspect invalid relationship',
        criterionRefs: ['AC-INVALID-03'],
        steps: [
          'Inspect aria-invalid.',
          'Inspect aria-describedby.',
          'Resolve the referenced error element.',
        ],
        expected: 'The Select exposes invalid state and references the visible correction message.',
      },
      {
        id: 'VR-INVALID-03',
        role: 'Responsive QA',
        title: 'Wrap the correction message',
        criterionRefs: ['AC-INVALID-04'],
        steps: ['Resize to a narrow viewport.', 'Inspect the error and Select.'],
        expected: 'The correction message wraps in reading order without clipping.',
      },
    ],
  },
  {
    id: 'REQUIRED',
    title: 'Required',
    purpose: 'A Select that must have a meaningful choice before submission.',
    explanation:
      'Use required only when leaving the decision unanswered would prevent the task from completing or create a meaningful problem.',
    doItems: [
      'Use a prompt that is not a valid option.',
      'Explain the requirement before submission.',
      'Keep required state available to assistive technology.',
    ],
    dontItems: [
      'Do not choose an important value on someone’s behalf.',
      'Do not use an error that only says “Required.”',
      'Do not require a Select when a safe default genuinely exists.',
    ],
    source: `import { useState } from 'react'\nimport { Select } from '@/components/ui/select'\n\nfunction RequiredSelect() {\n  const [submitted, setSubmitted] = useState(false)\n  return (\n    <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>\n      <Select id="deployment-region" required aria-required="true" aria-describedby="deployment-region-hint" defaultValue="">\n        <option value="" disabled>Choose a deployment region</option>\n        <option value="us-east">US East</option>\n        <option value="eu-west">EU West</option>\n      </Select>\n      <p id="deployment-region-hint">Required. Choose a region before submitting.</p>\n      <button type="submit">Submit</button>\n      {submitted && <p role="status" aria-live="polite">Submitted successfully.</p>}\n    </form>\n  )\n}`,
    html: `<label for="deployment-region">Deployment region</label>\n<select data-slot="select" id="deployment-region" required aria-required="true" aria-describedby="deployment-region-hint">\n  <option value="" disabled>Choose a deployment region</option>\n  <option value="us-east">US East</option>\n  <option value="eu-west">EU West</option>\n</select>\n<p id="deployment-region-hint">Required. Choose a region before submitting.</p>\n<button type="submit">Submit</button>\n<p role="status" aria-live="polite">Submitted successfully.</p>`,
    requirementItems: [
      'The form must not submit with the prompt still selected.',
      'A valid region must be selectable and retained for submission.',
      'The required state and submit outcome must be communicated in text and semantics.',
      'The form and status must remain usable at narrow widths.',
    ],
    criteria: [
      {
        id: 'AC-REQUIRED-01',
        requirementRefs: ['BR-REQUIRED'],
        given: 'no region has been selected',
        when: 'the person submits',
        then: 'native constraint validation prevents submission',
        and: ['the prompt is not accepted as a region'],
      },
      {
        id: 'AC-REQUIRED-02',
        requirementRefs: ['FR-REQUIRED'],
        given: 'the person chooses EU West',
        when: 'the form is submitted',
        then: 'the application-owned submit handler can confirm success',
        and: ['the selected region remains visible'],
      },
      {
        id: 'AC-REQUIRED-03',
        requirementRefs: ['A11Y-REQUIRED'],
        given: 'the Select is required',
        when: 'the control is announced',
        then: 'required and aria-required communicate the requirement',
        and: ['the success status uses role=status and aria-live=polite'],
      },
      {
        id: 'AC-REQUIRED-04',
        requirementRefs: ['TR-REQUIRED'],
        given: 'the form is viewed at a narrow width',
        when: 'the button and status wrap',
        then: 'the form remains readable and operable',
        and: [],
      },
    ],
    verification: [
      {
        id: 'VR-REQUIRED-01',
        role: 'Functional QA',
        title: 'Prevent blank submission',
        criterionRefs: ['AC-REQUIRED-01'],
        steps: [
          'Leave the prompt selected.',
          'Activate Submit.',
          'Inspect the browser validation response.',
        ],
        expected: 'The browser prevents submission because the required Select has no valid value.',
      },
      {
        id: 'VR-REQUIRED-02',
        role: 'Functional QA',
        title: 'Submit a selected region',
        criterionRefs: ['AC-REQUIRED-02'],
        steps: ['Choose EU West.', 'Activate Submit.', 'Inspect the status.'],
        expected:
          'The handler runs and the polite success status appears while EU West remains selected.',
      },
      {
        id: 'VR-REQUIRED-03',
        role: 'Accessibility QA',
        title: 'Inspect required status announcement',
        criterionRefs: ['AC-REQUIRED-03'],
        steps: [
          'Inspect required and aria-required.',
          'Inspect the success message after submission.',
        ],
        expected: 'The requirement is exposed and the result is in a polite status region.',
      },
      {
        id: 'VR-REQUIRED-04',
        role: 'Responsive QA',
        title: 'Use the form at narrow width',
        criterionRefs: ['AC-REQUIRED-04'],
        steps: [
          'Resize to a narrow viewport.',
          'Submit after selecting a region.',
          'Inspect the status.',
        ],
        expected: 'The form remains readable and the status is not clipped or hidden.',
      },
    ],
  },
  {
    id: 'GROUPS',
    title: 'Groups',
    purpose: 'A Select that organizes related options with native optgroup semantics.',
    explanation:
      'Group options when category labels help people scan and understand their choices, such as project owners organized by team.',
    doItems: [
      'Use meaningful group labels.',
      'Keep group order predictable.',
      'Use native optgroup semantics.',
    ],
    dontItems: [
      'Do not create one-option groups without a useful category.',
      'Do not mix unrelated choices under Other.',
      'Do not use grouping to hide unclear option names.',
    ],
    source: `<Select id="project-owner" defaultValue="">\n  <option value="" disabled>Choose a project owner</option>\n  <optgroup label="Design">\n    <option value="maya">Maya Chen</option>\n    <option value="jordan">Jordan Lee</option>\n  </optgroup>\n  <optgroup label="Engineering">\n    <option value="sam">Sam Rivera</option>\n    <option value="riley">Riley Patel</option>\n  </optgroup>\n</Select>`,
    html: `<label for="project-owner">Project owner</label>\n<select data-slot="select" id="project-owner">\n  <option value="" disabled>Choose a project owner</option>\n  <optgroup label="Design">\n    <option value="maya">Maya Chen</option>\n    <option value="jordan">Jordan Lee</option>\n  </optgroup>\n  <optgroup label="Engineering">\n    <option value="sam">Sam Rivera</option>\n    <option value="riley">Riley Patel</option>\n  </optgroup>\n</select>`,
    requirementItems: [
      'The group labels must help people understand the available owners.',
      'One owner must be selectable from the grouped list.',
      'Native option-group semantics must remain available to assistive technology.',
      'Group labels and options must remain readable when the viewport narrows.',
    ],
    criteria: [
      {
        id: 'AC-GROUPS-01',
        requirementRefs: ['BR-GROUPS'],
        given: 'owners belong to Design or Engineering',
        when: 'the list is opened',
        then: 'the options are organized under those group labels',
        and: ['the labels do not replace the individual owner names'],
      },
      {
        id: 'AC-GROUPS-02',
        requirementRefs: ['FR-GROUPS'],
        given: 'the person chooses Maya Chen',
        when: 'the Select closes',
        then: 'Maya Chen is the selected value',
        and: ['only one owner is selected'],
      },
      {
        id: 'AC-GROUPS-03',
        requirementRefs: ['A11Y-GROUPS'],
        given: 'assistive technology explores the options',
        when: 'the grouped list is announced',
        then: 'native optgroup relationships remain available',
        and: ['the visible label names the overall decision'],
      },
      {
        id: 'AC-GROUPS-04',
        requirementRefs: ['TR-GROUPS'],
        given: 'the viewport narrows',
        when: 'long group and option names are displayed',
        then: 'the Select remains readable',
        and: [],
      },
    ],
    verification: [
      {
        id: 'VR-GROUPS-01',
        role: 'Functional QA',
        title: 'Choose from a labeled group',
        criterionRefs: ['AC-GROUPS-01', 'AC-GROUPS-02'],
        steps: ['Open Project owner.', 'Find Maya Chen under Design.', 'Select Maya Chen.'],
        expected:
          'The group label helps locate the option and Maya Chen becomes the selected owner.',
      },
      {
        id: 'VR-GROUPS-02',
        role: 'Accessibility QA',
        title: 'Inspect native option groups',
        criterionRefs: ['AC-GROUPS-03'],
        steps: [
          'Inspect the select element.',
          'Inspect both optgroup labels and their options.',
          'Inspect the visible label.',
        ],
        expected:
          'The Select uses native optgroup semantics and remains associated with Project owner.',
      },
      {
        id: 'VR-GROUPS-03',
        role: 'Responsive QA',
        title: 'Read grouped options at narrow width',
        criterionRefs: ['AC-GROUPS-04'],
        steps: [
          'Resize to a narrow viewport.',
          'Open the Select and inspect group and option names.',
        ],
        expected:
          'The names remain understandable and the control does not create horizontal page overflow.',
      },
    ],
  },
]

function renderExample(config: SelectExampleConfig, children: ReactNode) {
  return (
    <ExampleVariation
      key={config.id}
      title={config.title}
      summary={config.purpose}
      tryIt={`Use the ${config.title.toLowerCase()} Select and confirm its selected value, state, relationships, and documented outcome.`}
      exampleClassName="p-5 sm:p-6"
      supplemental={supplemental(config)}
    >
      {children}
    </ExampleVariation>
  )
}

function ComponentsSelectPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/select"
      tabActiveHref="/components/forms"
      sidebarNav={formSidebarLinks}
      sidebarNavLabel="Forms components"
    >
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby="select-heading">
          <h1 id="select-heading" className="text-4xl font-semibold tracking-tight">
            Select
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Use Select when people choose one option from a known, relatively stable list. Keep the
            visible label, prompt, current value, and available options understandable as one native
            control.
          </p>
        </section>
        <section className="space-y-5" aria-labelledby="select-what-heading">
          <h2 id="select-what-heading" className="text-2xl font-semibold tracking-tight">
            What is it?
          </h2>
          <p className="leading-7 text-muted-foreground">
            Select is a native single-choice control for a known list. Use it when scanning the
            options is practical; use Radio group when the choices should remain visible, and use
            Combobox when people need filtering or search.
          </p>
          <TryIt>
            Open Contact preference, choose an option with the keyboard, and confirm the selected
            value remains visible after the menu closes.
          </TryIt>
          <div className="rounded-lg border p-5 sm:p-6">
            <BasicExample />
          </div>
        </section>
        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="select-use-heading">
          <div className="space-y-5">
            <h2 id="select-use-heading" className="text-2xl font-semibold tracking-tight">
              When to use it
            </h2>
            <p className="leading-7 text-muted-foreground">
              Select works best when one known value must be chosen and seeing every option at once
              is not necessary.
            </p>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Use it for a short or moderately sized list with a predictable order.</li>
              <li>Use a prompt when there is no safe default.</li>
              <li>Use native option groups when categories help people scan.</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 id="select-not-heading" className="text-2xl font-semibold tracking-tight">
              When not to use it
            </h2>
            <p className="leading-7 text-muted-foreground">
              Select becomes a poor choice when the decision needs comparison, filtering, or
              multiple values.
            </p>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Use Combobox for a long list that needs search or filtering.</li>
              <li>Use Checkbox group when several choices may be selected.</li>
              <li>Use Radio group when a few choices should remain visible together.</li>
            </ul>
          </div>
        </section>
        <section className="space-y-5" aria-labelledby="select-design-heading">
          <h2 id="select-design-heading" className="text-2xl font-semibold tracking-tight">
            Design considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Order options predictably and use meaningful, concise names.</li>
            <li>Make placeholder text distinct from a real selected value.</li>
            <li>Keep helper and error text close to the control and in reading order.</li>
            <li>
              Give the popup enough room for the longest option without obscuring the decision.
            </li>
          </ul>
        </section>
        <section className="space-y-5" aria-labelledby="select-accessibility-heading">
          <h2 id="select-accessibility-heading" className="text-2xl font-semibold tracking-tight">
            Accessibility considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Use a visible label associated with the native Select through matching for and id
              values.
            </li>
            <li>Preserve native keyboard behavior and a visible focus indicator.</li>
            <li>
              Connect helper or error text with aria-describedby and expose aria-invalid when
              applicable.
            </li>
            <li>
              Use required and aria-required when the decision is necessary; do not rely on color
              alone.
            </li>
            <li>
              Prefer native option and optgroup semantics over a custom listbox when Select is
              sufficient.
            </li>
          </ul>
        </section>
        <section className="space-y-5" aria-labelledby="select-responsive-heading">
          <h2 id="select-responsive-heading" className="text-2xl font-semibold tracking-tight">
            Responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">
            Let the control fill its available width while keeping labels and option names readable.
            Check popup placement near viewport edges, long option wrapping, narrow screens, touch
            targets, and 200% zoom without horizontal page scrolling.
          </p>
        </section>
        <section className="space-y-8" aria-labelledby="select-examples-heading">
          <div className="space-y-2">
            <h2 id="select-examples-heading" className="text-2xl font-semibold tracking-tight">
              Examples and variations
            </h2>
            <p className="leading-7 text-muted-foreground">
              Each example demonstrates one meaningful Select decision: a prompt, persistent helper
              text, unavailable value, correction state, required submission, or grouped options.
            </p>
          </div>
          <div className="space-y-10">
            {renderExample(examples[0], <BasicExample />)}
            {renderExample(examples[1], <HelperExample />)}
            {renderExample(examples[2], <DisabledExample />)}
            {renderExample(examples[3], <InvalidExample />)}
            {renderExample(examples[4], <RequiredExample />)}
            {renderExample(examples[5], <GroupsExample />)}
          </div>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsSelectPage }
