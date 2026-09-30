import { useState, type ReactNode } from 'react'

import { ExampleVariation } from '@/components/layout/example-variation'
import { TryIt } from '@/components/layout/try-it'
import { Input } from '@/components/ui/input'
import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { formSidebarLinks } from '@/config/component-navigation'

/**
 * Input guide page.
 *
 * Demonstrates the production Input primitive with realistic labels, helper,
 * disabled, invalid, required, and file-upload states. The examples are kept
 * here so each route owns its control-specific behavior and documentation.
 */

const fieldClass = 'max-w-xl space-y-2'
const renderedInputClass =
  'flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40 md:text-sm'

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
        id="input-required-example"
        label="Project name"
        hint="Required. Submit blank to see the browser prevent submission."
      >
        <Input
          id="input-required-example"
          type="text"
          required
          aria-required="true"
          aria-describedby="input-required-example-hint"
          onChange={() => setSubmitted(false)}
        />
      </Field>
      <button
        type="submit"
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Submit
      </button>
      {submitted && (
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Submitted successfully because the required field has a value.
        </p>
      )}
    </form>
  )
}

function BasicExample() {
  return (
    <Field id="input-basic-example" label="Email address">
      <Input id="input-basic-example" type="email" placeholder="name@example.com" />
    </Field>
  )
}

function HelperExample() {
  return (
    <Field
      id="input-helper-example"
      label="Project name"
      hint="Use the name people will recognize in the project list."
    >
      <Input id="input-helper-example" type="text" aria-describedby="input-helper-example-hint" />
    </Field>
  )
}

function DisabledExample() {
  return (
    <Field
      id="input-disabled-example"
      label="Email"
      hint="This value is controlled by your account administrator."
    >
      <Input
        id="input-disabled-example"
        type="email"
        value="tommy@example.com"
        disabled
        aria-describedby="input-disabled-example-hint"
        readOnly
      />
    </Field>
  )
}

function InvalidExample() {
  return (
    <Field id="input-invalid-example" label="Work email">
      <Input
        id="input-invalid-example"
        type="email"
        value="tommy@example"
        readOnly
        aria-invalid="true"
        aria-describedby="input-invalid-example-error"
      />
      <p id="input-invalid-example-error" className="text-sm text-destructive">
        Enter a complete email address, such as name@company.com.
      </p>
    </Field>
  )
}

function FileExample() {
  return (
    <Field
      id="input-file-example"
      label="Supporting document"
      hint="Choose a PDF or DOCX up to 10 MB. This reference example does not upload the file."
    >
      <Input
        id="input-file-example"
        type="file"
        accept=".pdf,.docx,application/pdf"
        aria-describedby="input-file-example-hint"
      />
    </Field>
  )
}

type InputExampleConfig = {
  id: string
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

function supplemental(config: InputExampleConfig) {
  const businessId = `BR-${config.id}`
  const functionalId = `FR-${config.id}`
  const accessibilityId = `A11Y-${config.id}`
  const technicalId = `TR-${config.id}`

  return {
    tabLayout: 'requirements' as const,
    guidance: {
      explanation: config.explanation,
      considerations: [
        'Use the production Input primitive so native input semantics, focus treatment, disabled behavior, and file-control styling remain consistent.',
        'Keep the visible label, supporting text, current state, and validation message aligned with the demonstrated Input props.',
      ],
      doItems: config.doItems,
      dontItems: config.dontItems,
    },
    code: {
      language: 'tsx',
      source: config.source.startsWith('import')
        ? config.source.replace(
            "import { useState, type FormEvent } from 'react'\n\n",
            "import { useState, type FormEvent } from 'react'\nimport { Input } from '@/components/ui/input'\n\n",
          )
        : `import { Input } from '@/components/ui/input'\n\n${config.source}`,
      html: config.html.replace(
        '<input data-slot="input"',
        `<input data-slot="input" class="${renderedInputClass}"`,
      ),
      props: [
        {
          name: 'Input',
          type: 'React component',
          description: 'The production single-line or file input primitive used by the example.',
        },
        {
          name: 'type / required / disabled / aria-*',
          type: 'native input props',
          description:
            'Choose the value type and preserve the demonstrated state and relationships.',
        },
      ],
      attributes: [
        {
          name: 'data-slot="input"',
          type: 'styling hook',
          description:
            'Identifies the production Input primitive; preserve it when adapting the generated markup.',
        },
        {
          name: 'for / id / aria-describedby / aria-invalid',
          type: 'semantic and accessibility attributes',
          description:
            'Connect the visible label, supporting or error text, and invalid state to the input.',
        },
      ],
      notes:
        'The HTML shows the complete relevant structure for this example, including the label, input, state attributes, and supporting or error text.',
    },
    requirements: {
      userStory: `As a form user, I want the ${config.id.toLowerCase()} Input to explain its value, state, and correction path so that I can complete the task confidently.`,
      groups: [
        {
          id: businessId,
          title: 'Business requirements',
          items: [
            config.purpose,
            'The visible label must identify the value the consuming application needs.',
          ],
        },
        {
          id: functionalId,
          title: 'Functional requirements',
          items: config.requirementItems,
        },
        {
          id: accessibilityId,
          title: 'Accessibility requirements',
          items: [
            'The input must have one visible label associated with its id and remain operable with a keyboard.',
            'Supporting, error, and state information must be available in text and connected to the input when applicable.',
          ],
        },
        {
          id: technicalId,
          title: 'Technical requirements',
          items: [
            'The example must use the production Input primitive shown in its Code panel rather than a page-local replacement.',
            'The rendered structure must preserve native input semantics and the documented attributes.',
          ],
        },
      ],
      acceptanceCriteria: config.criteria.map((criterion) => ({
        ...criterion,
        requirementRefs: criterion.requirementRefs.map((ref) =>
          ref === 'business'
            ? `${businessId}-01`
            : ref === 'functional'
              ? `${functionalId}-01`
              : `${accessibilityId}-01`,
        ),
      })),
    },
    verification: {
      scenarios: config.verification.map((scenario) => ({
        ...scenario,
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

const examples: InputExampleConfig[] = [
  {
    id: 'BASIC',
    purpose:
      'The basic Input must collect one short email value with a visible label and no essential instruction hidden in the placeholder.',
    explanation:
      'Use the basic pattern when a short value is self-explanatory from its label and surrounding task context.',
    doItems: [
      'Use a realistic format example when it helps people start.',
      'Choose the native type that matches the expected value.',
    ],
    dontItems: [
      'Do not use placeholder text as the only label or instruction.',
      'Do not use a single-line Input for a narrative response.',
    ],
    source: `<div className="space-y-2">
  <label htmlFor="email">Email address</label>
  <Input id="email" type="email" placeholder="name@example.com" />
</div>`,
    html: `<div class="space-y-2">
  <label for="email">Email address</label>
  <input data-slot="input" id="email" type="email" placeholder="name@example.com">
</div>`,
    requirementItems: [
      'The input must accept one email value and expose an email-appropriate editing mode.',
      'The placeholder must remain supplementary to the visible label.',
    ],
    criteria: [
      {
        id: 'AC-BASIC-01',
        requirementRefs: ['business', 'functional'],
        given: 'the Basic Input is rendered',
        when: 'a person focuses or edits the field',
        then: 'the field is identified as Email address and accepts one email value',
        and: ['name@example.com is presented only as an example format'],
      },
      {
        id: 'AC-BASIC-02',
        requirementRefs: ['accessibility'],
        given: 'a person navigates to the Basic Input with a keyboard',
        when: 'focus enters the field',
        then: 'the label remains associated and visible focus is shown',
        and: ['the field can be edited without using a pointer'],
      },
    ],
    verification: [
      {
        id: 'VR-BASIC-01',
        role: 'Functional QA',
        title: 'Enter an email value',
        criterionRefs: ['AC-BASIC-01'],
        steps: [
          'Focus Email address.',
          'Enter name@company.com and inspect the field type and visible label.',
        ],
        expected:
          'The value remains in one line, the label remains visible, and the field accepts the email value.',
      },
      {
        id: 'VR-BASIC-02',
        role: 'Accessibility QA',
        title: 'Navigate the basic field',
        criterionRefs: ['AC-BASIC-02'],
        steps: [
          'Use Tab to focus the field.',
          'Inspect the visible focus indicator and activate the label with a pointer.',
        ],
        expected:
          'The field receives visible focus, and selecting the label moves focus to the same input.',
      },
    ],
  },
  {
    id: 'HELPER',
    purpose:
      'The helper-text Input must provide persistent guidance that remains useful before and after a value is entered.',
    explanation:
      'Use helper text for format, privacy, length, or process context that applies whether or not the field has a value.',
    doItems: [
      'Keep the helper message short and actionable.',
      'Connect helper text with aria-describedby.',
    ],
    dontItems: [
      'Do not repeat the label in helper text.',
      'Do not use helper text for a problem that belongs in an error message.',
    ],
    source: `<div className="space-y-2">
  <label htmlFor="project-name">Project name</label>
  <Input id="project-name" aria-describedby="project-name-hint" />
  <p id="project-name-hint">Use the name people will recognize in the project list.</p>
</div>`,
    html: `<div class="space-y-2">
  <label for="project-name">Project name</label>
  <input data-slot="input" id="project-name" aria-describedby="project-name-hint">
  <p id="project-name-hint">Use the name people will recognize in the project list.</p>
</div>`,
    requirementItems: [
      'The helper text must explain what belongs in the field without replacing the label.',
      'The input must reference the helper text with aria-describedby.',
    ],
    criteria: [
      {
        id: 'AC-HELPER-01',
        requirementRefs: ['business', 'functional'],
        given: 'the helper-text Input is rendered',
        when: 'a person reads or edits Project name',
        then: 'the persistent helper text explains the expected value',
        and: ['the input references the helper text with aria-describedby'],
      },
      {
        id: 'AC-HELPER-02',
        requirementRefs: ['accessibility'],
        given: 'a person uses a screen reader or keyboard',
        when: 'focus enters Project name',
        then: 'the label and helper relationship are available without relying on visual proximity',
        and: ['the field remains editable'],
      },
    ],
    verification: [
      {
        id: 'VR-HELPER-01',
        role: 'Functional QA',
        title: 'Review helper text',
        criterionRefs: ['AC-HELPER-01'],
        steps: [
          'Focus Project name.',
          'Read the label and helper message, then enter a project name.',
        ],
        expected:
          'The helper message remains visible before and after entry and explains the expected value.',
      },
      {
        id: 'VR-HELPER-02',
        role: 'Accessibility QA',
        title: 'Inspect the description relationship',
        criterionRefs: ['AC-HELPER-02'],
        steps: [
          'Inspect the input id and the helper paragraph id.',
          'Inspect aria-describedby on the input.',
        ],
        expected:
          'aria-describedby references the helper paragraph and the label references the same input id.',
      },
    ],
  },
  {
    id: 'DISABLED',
    purpose:
      'The disabled Input must communicate that its current value cannot be changed in this context.',
    explanation:
      'Disable an Input only when the person cannot make a meaningful change, and explain why the value is unavailable.',
    doItems: [
      'Preserve the value and label so the state remains understandable.',
      'Explain what controls availability when that action is known.',
    ],
    dontItems: [
      'Do not disable a field merely to prevent mistakes.',
      'Do not hide important information only in a disabled control.',
    ],
    source: `<div className="space-y-2">
  <label htmlFor="account-email">Email</label>
  <Input id="account-email" value="tommy@example.com" disabled readOnly />
  <p id="account-email-hint">This value is controlled by your account administrator.</p>
</div>`,
    html: `<div class="space-y-2">
  <label for="account-email">Email</label>
  <input data-slot="input" id="account-email" type="email" value="tommy@example.com" disabled readonly aria-describedby="account-email-hint">
  <p id="account-email-hint">This value is controlled by your account administrator.</p>
</div>`,
    requirementItems: [
      'The input must retain the account email value while preventing edits.',
      'The disabled treatment must be distinguishable without making the label or value unreadable.',
    ],
    criteria: [
      {
        id: 'AC-DISABLED-01',
        requirementRefs: ['business', 'functional'],
        given: 'the disabled Input is rendered',
        when: 'a person attempts to focus or edit Email',
        then: 'the browser prevents editing and preserves tommy@example.com',
        and: ['the label and explanation remain visible'],
      },
      {
        id: 'AC-DISABLED-02',
        requirementRefs: ['accessibility'],
        given: 'a person inspects the disabled field',
        when: 'the field is unavailable',
        then: 'the disabled state is exposed semantically and is not communicated by color alone',
        and: ['the supporting explanation remains readable'],
      },
    ],
    verification: [
      {
        id: 'VR-DISABLED-01',
        role: 'Functional QA',
        title: 'Inspect the unavailable value',
        criterionRefs: ['AC-DISABLED-01'],
        steps: ['Inspect Email and its current value.', 'Attempt to focus and edit the field.'],
        expected: 'The value remains visible and cannot be changed.',
      },
      {
        id: 'VR-DISABLED-02',
        role: 'Accessibility QA',
        title: 'Inspect disabled semantics',
        criterionRefs: ['AC-DISABLED-02'],
        steps: [
          'Inspect the input disabled attribute.',
          'Check that the label and explanation remain readable.',
        ],
        expected:
          'The input is semantically disabled, while the visible text still explains the value and state.',
      },
    ],
  },
  {
    id: 'INVALID',
    purpose:
      'The invalid Input must preserve the entered value and explain exactly how to correct it.',
    explanation:
      'Use an invalid state when a known problem needs correction. Keep the person’s value and place a specific correction message beside it.',
    doItems: [
      'Describe the problem and the correction.',
      'Connect the error with aria-describedby and aria-invalid.',
    ],
    dontItems: [
      'Do not rely on a red border alone.',
      'Do not replace the person’s value with a blank field.',
    ],
    source: `<div className="space-y-2">
  <label htmlFor="work-email">Work email</label>
  <Input id="work-email" value="tommy@example" readOnly aria-invalid="true" aria-describedby="work-email-error" />
  <p id="work-email-error">Enter a complete email address, such as name@company.com.</p>
</div>`,
    html: `<div class="space-y-2">
  <label for="work-email">Work email</label>
  <input data-slot="input" id="work-email" type="email" value="tommy@example" readonly aria-invalid="true" aria-describedby="work-email-error">
  <p id="work-email-error">Enter a complete email address, such as name@company.com.</p>
</div>`,
    requirementItems: [
      'The invalid field must preserve tommy@example so the person can identify and correct the problem.',
      'The error must state that a complete email address is required and provide a valid example.',
    ],
    criteria: [
      {
        id: 'AC-INVALID-01',
        requirementRefs: ['business', 'functional'],
        given: 'the invalid Input is rendered',
        when: 'a person reviews Work email',
        then: 'tommy@example remains visible and the error explains how to correct it',
        and: ['the input exposes aria-invalid="true"'],
      },
      {
        id: 'AC-INVALID-02',
        requirementRefs: ['accessibility'],
        given: 'a person focuses the invalid field',
        when: 'the field and error are inspected',
        then: 'the error is programmatically associated through aria-describedby',
        and: ['the invalid state is available without relying on the red border'],
      },
    ],
    verification: [
      {
        id: 'VR-INVALID-01',
        role: 'Functional QA',
        title: 'Correct the invalid value',
        criterionRefs: ['AC-INVALID-01'],
        steps: ['Inspect the current value and error.', 'Replace the value with name@company.com.'],
        expected:
          'The original value is available for editing, and the error gives a specific correction path.',
      },
      {
        id: 'VR-INVALID-02',
        role: 'Accessibility QA',
        title: 'Inspect invalid relationships',
        criterionRefs: ['AC-INVALID-02'],
        steps: [
          'Inspect aria-invalid on the input.',
          'Confirm aria-describedby references the visible error paragraph.',
        ],
        expected: 'The invalid state and error message are programmatically available.',
      },
    ],
  },
  {
    id: 'REQUIRED',
    purpose:
      'The required Input must prevent submission without a project name and provide a success status after a valid submission.',
    explanation:
      'Mark an Input required when the value is genuinely necessary to complete the task, and demonstrate both the browser constraint and successful result.',
    doItems: [
      'Use a clear required indicator and an actionable validation message.',
      'Announce the successful result in a status region.',
    ],
    dontItems: [
      'Do not hide required status until submission.',
      'Do not make a field required merely because the system could store it.',
    ],
    source: `import { useState, type FormEvent } from 'react'\n\nfunction RequiredExample() {\n  const [submitted, setSubmitted] = useState(false)\n\n  function handleSubmit(event: FormEvent<HTMLFormElement>) {\n    event.preventDefault()\n    setSubmitted(true)\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <label htmlFor="project-name">Project name</label>\n      <Input id="project-name" required aria-required="true" />\n      <button type="submit">Submit</button>\n      {submitted && (\n        <p role="status" aria-live="polite">\n          Submitted successfully because the required field has a value.\n        </p>\n      )}\n    </form>\n  )\n}`,
    html: `<form>
  <label for="project-name">Project name</label>
  <input data-slot="input" id="project-name" required aria-required="true">
  <button type="submit">Submit</button>
  <p role="status" aria-live="polite">Submitted successfully because the required field has a value.</p>
</form>`,
    requirementItems: [
      'The browser must prevent submission while Project name is empty.',
      'A valid submission must expose the success confirmation through a polite status region.',
    ],
    criteria: [
      {
        id: 'AC-REQUIRED-01',
        requirementRefs: ['business', 'functional'],
        given: 'Project name is empty',
        when: 'a person activates Submit',
        then: 'the browser prevents form submission because the input is required',
        and: ['the person can enter a value and try again'],
      },
      {
        id: 'AC-REQUIRED-02',
        requirementRefs: ['accessibility'],
        given: 'Project name contains a value',
        when: 'a person submits the form',
        then: 'the success confirmation appears in a role=status region with aria-live="polite"',
        and: ['the confirmation is not conveyed by color alone'],
      },
    ],
    verification: [
      {
        id: 'VR-REQUIRED-01',
        role: 'Functional QA',
        title: 'Submit the required form',
        criterionRefs: ['AC-REQUIRED-01', 'AC-REQUIRED-02'],
        steps: [
          'Activate Submit while Project name is empty.',
          'Enter a project name and activate Submit again.',
        ],
        expected:
          'The empty submission is blocked; the valid submission shows Submitted successfully because the required field has a value.',
      },
      {
        id: 'VR-REQUIRED-02',
        role: 'Accessibility QA',
        title: 'Inspect required and status semantics',
        criterionRefs: ['AC-REQUIRED-02'],
        steps: [
          'Inspect required and aria-required on the input.',
          'Inspect the success message role and aria-live attributes.',
        ],
        expected: 'The required state and polite status announcement are programmatically exposed.',
      },
    ],
  },
  {
    id: 'FILE',
    purpose:
      'The file Input must let a person choose a PDF or DOCX and clearly state the size and upload limitation before selection.',
    explanation:
      'Use a native file Input when someone needs to provide a local document. The browser and operating system own file selection; the application owns validation and upload status.',
    doItems: [
      'State accepted formats, maximum size, and whether multiple files are allowed.',
      'Keep the native file control keyboard and assistive-technology accessible.',
    ],
    dontItems: [
      'Do not require drag and drop or hide the native focus target.',
      'Do not report upload success before an upload completes.',
    ],
    source: `<div className="space-y-2">
  <label htmlFor="supporting-document">Supporting document</label>
  <Input id="supporting-document" type="file" accept=".pdf,.docx,application/pdf" aria-describedby="document-hint" />
  <p id="document-hint">Choose a PDF or DOCX up to 10 MB.</p>
</div>`,
    html: `<div class="space-y-2">
  <label for="supporting-document">Supporting document</label>
  <input data-slot="input" id="supporting-document" type="file" accept=".pdf,.docx,application/pdf" aria-describedby="document-hint">
  <p id="document-hint">Choose a PDF or DOCX up to 10 MB. This reference example does not upload the file.</p>
</div>`,
    requirementItems: [
      'The native picker must accept PDF and DOCX selections through the accept attribute.',
      'The guidance must state the 10 MB limit and explain that this reference example does not upload the selected file.',
    ],
    criteria: [
      {
        id: 'AC-FILE-01',
        requirementRefs: ['business', 'functional'],
        given: 'the file Input is rendered',
        when: 'a person opens the Supporting document picker',
        then: 'the control is identified as a file input and advertises PDF and DOCX formats',
        and: ['the visible guidance states the 10 MB limit'],
      },
      {
        id: 'AC-FILE-02',
        requirementRefs: ['accessibility'],
        given: 'a person navigates to the file Input with a keyboard',
        when: 'focus enters the native control',
        then: 'the native file control remains focusable and visibly focused',
        and: ['the label and guidance remain associated with it'],
      },
    ],
    verification: [
      {
        id: 'VR-FILE-01',
        role: 'Functional QA',
        title: 'Inspect file constraints',
        criterionRefs: ['AC-FILE-01'],
        steps: ['Inspect the label and guidance.', 'Inspect the input type and accept attribute.'],
        expected:
          'The control is a file input, advertises PDF and DOCX formats, and states the 10 MB reference limit.',
      },
      {
        id: 'VR-FILE-02',
        role: 'Accessibility QA',
        title: 'Navigate the native file control',
        criterionRefs: ['AC-FILE-02'],
        steps: [
          'Use Tab to focus Supporting document.',
          'Inspect the visible focus indicator and label relationship.',
        ],
        expected:
          'The native control receives visible focus and remains associated with its visible label and guidance.',
      },
    ],
  },
]

function renderExample(config: InputExampleConfig, children: ReactNode) {
  return (
    <ExampleVariation
      key={config.id}
      title={
        config.id === 'HELPER'
          ? 'With helper text'
          : config.id[0] + config.id.slice(1).toLowerCase()
      }
      summary={config.purpose}
      tryIt={`Interact with the ${config.id.toLowerCase()} Input and confirm its label, state, supporting text, and documented outcome.`}
      exampleClassName="p-5 sm:p-6"
      supplemental={supplemental(config)}
    >
      {children}
    </ExampleVariation>
  )
}

function ComponentsInputPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/input"
      tabActiveHref="/components/forms"
      sidebarNav={formSidebarLinks}
      sidebarNavLabel="Forms components"
    >
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby="input-heading">
          <h1 id="input-heading" className="text-4xl font-semibold tracking-tight">
            Input
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Use Input for a short, single-line value such as a name, email address, or search term.
            The label, type, supporting content, and state should explain what belongs in the field
            before someone starts typing.
          </p>
        </section>
        <section className="space-y-5" aria-labelledby="input-what-heading">
          <h2 id="input-what-heading" className="text-2xl font-semibold tracking-tight">
            What is it?
          </h2>
          <p className="leading-7 text-muted-foreground">
            Input is a native text-entry control wrapped in the production styling primitive. Use it
            for one short value; use Text area for a longer response and Select or Combobox when a
            person needs to choose from known options.
          </p>
          <TryIt>
            Focus Email address, enter a valid email, and confirm the visible focus treatment and
            email input behavior.
          </TryIt>
          <div className="rounded-lg border p-5 sm:p-6">
            <BasicExample />
          </div>
        </section>
        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="input-use-heading">
          <div className="space-y-5">
            <h2 id="input-use-heading" className="text-2xl font-semibold tracking-tight">
              When to use it
            </h2>
            <p className="leading-7 text-muted-foreground">
              Input works best when the answer is short enough to understand as one line and
              structured enough to validate.
            </p>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Use it for one short value such as a name, email, search term, or account ID.</li>
              <li>
                Choose a native type, autocomplete, and inputmode that help people enter the value.
              </li>
              <li>Use helper or error text when the person needs context or a correction path.</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 id="input-not-heading" className="text-2xl font-semibold tracking-tight">
              When not to use it
            </h2>
            <p className="leading-7 text-muted-foreground">
              The familiar text field is not the right pattern when the person needs to choose,
              write at length, or take an action.
            </p>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Use Text area for multiple lines or narrative responses.</li>
              <li>Use Select, Radio group, or Combobox for known choices.</li>
              <li>
                Use a button or link for an action or destination rather than styling an input as
                one.
              </li>
            </ul>
          </div>
        </section>
        <section className="space-y-5" aria-labelledby="input-design-heading">
          <h2 id="input-design-heading" className="text-2xl font-semibold tracking-tight">
            Design considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Keep the visible label, helper text, and errors close to the input and in reading
              order.
            </li>
            <li>
              Use a width that reflects the expected answer instead of making every field equally
              wide.
            </li>
            <li>Keep the person’s value when validation finds a problem.</li>
            <li>
              Use placeholder text only as a brief example, never as the only label or instruction.
            </li>
          </ul>
        </section>
        <section className="space-y-5" aria-labelledby="input-accessibility-heading">
          <h2 id="input-accessibility-heading" className="text-2xl font-semibold tracking-tight">
            Accessibility considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Associate one visible label with each input through matching for and id values.</li>
            <li>
              Connect helper and error text with aria-describedby; expose invalid state with
              aria-invalid when applicable.
            </li>
            <li>Use the correct type, autocomplete, and inputmode when they make entry easier.</li>
            <li>
              Keep focus visible, preserve values during validation, and do not communicate state by
              color alone.
            </li>
            <li>
              Use required and aria-required when the value is necessary, and expose success or
              error messages in text.
            </li>
          </ul>
        </section>
        <section className="space-y-5" aria-labelledby="input-responsive-heading">
          <h2 id="input-responsive-heading" className="text-2xl font-semibold tracking-tight">
            Responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">
            Let the field fill available width while keeping labels, errors, file names, and
            adjacent actions readable. Stack related actions when the row becomes crowded, and test
            the field at narrow widths and 200% zoom without horizontal scrolling.
          </p>
        </section>
        <section className="space-y-8" aria-labelledby="input-examples-heading">
          <div className="space-y-2">
            <h2 id="input-examples-heading" className="text-2xl font-semibold tracking-tight">
              Examples and variations
            </h2>
            <p className="leading-7 text-muted-foreground">
              Each example demonstrates one meaningful Input decision: the minimum field, persistent
              guidance, unavailable value, correction state, required submission, or native file
              selection.
            </p>
          </div>
          <div className="space-y-10">
            {renderExample(examples[0], <BasicExample />)}
            {renderExample(examples[1], <HelperExample />)}
            {renderExample(examples[2], <DisabledExample />)}
            {renderExample(examples[3], <InvalidExample />)}
            {renderExample(examples[4], <RequiredExample />)}
            {renderExample(examples[5], <FileExample />)}
          </div>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsInputPage }
