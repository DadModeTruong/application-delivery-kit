import { useState, type ReactNode } from 'react'

import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { ExampleVariation } from '@/components/layout/example-variation'
import { TryIt } from '@/components/layout/try-it'
import { Textarea } from '@/components/ui/textarea'
import { formSidebarLinks } from '@/config/component-navigation'

/**
 * Text area guide page.
 *
 * Demonstrates the production Textarea primitive with realistic labels,
 * helper text, disabled, invalid, and required states. Each example owns its
 * copyable usage and delivery documentation so developers can adapt it safely.
 */

const fieldClass = 'max-w-xl space-y-2'
const renderedTextareaClass =
  'flex min-h-24 w-full min-w-0 resize-y rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40 md:text-sm'

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
    <Field id="textarea-basic-example" label="Message">
      <Textarea id="textarea-basic-example" placeholder="Write a message" />
    </Field>
  )
}

function HelperExample() {
  return (
    <Field
      id="textarea-helper-example"
      label="Release notes"
      hint="Mention the user-visible change, who is affected, and any action they need to take."
    >
      <Textarea id="textarea-helper-example" aria-describedby="textarea-helper-example-hint" />
    </Field>
  )
}

function DisabledExample() {
  return (
    <Field
      id="textarea-disabled-example"
      label="Internal notes"
      hint="This field is controlled by the review workflow and is currently unavailable."
    >
      <Textarea
        id="textarea-disabled-example"
        value="Notes are managed by the review team."
        disabled
        readOnly
        aria-describedby="textarea-disabled-example-hint"
      />
    </Field>
  )
}

function InvalidExample() {
  return (
    <Field id="textarea-invalid-example" label="Accessibility feedback">
      <Textarea
        id="textarea-invalid-example"
        defaultValue="The button is hard to use."
        aria-invalid="true"
        aria-describedby="textarea-invalid-example-error"
      />
      <p id="textarea-invalid-example-error" className="text-sm text-destructive">
        Add where the problem occurs and what happens when you try to use the button.
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
        id="textarea-required-example"
        label="Project summary"
        hint="Required. Submit blank to see the browser prevent submission, then add a summary and submit again."
      >
        <Textarea
          id="textarea-required-example"
          required
          aria-required="true"
          aria-describedby="textarea-required-example-hint"
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
          Submitted successfully because the project summary has a value.
        </p>
      )}
    </form>
  )
}

type TextareaExampleConfig = {
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

function supplemental(config: TextareaExampleConfig) {
  const businessId = `BR-${config.id}`
  const functionalId = `FR-${config.id}`
  const accessibilityId = `A11Y-${config.id}`
  const technicalId = `TR-${config.id}`

  return {
    tabLayout: 'requirements' as const,
    guidance: {
      explanation: config.explanation,
      considerations: [
        'Use the production Textarea primitive so native multiline editing, keyboard behavior, focus treatment, and disabled behavior remain available.',
        'Keep the visible label, supporting text, current state, and validation message aligned with the demonstrated Textarea props.',
      ],
      doItems: config.doItems,
      dontItems: config.dontItems,
    },
    code: {
      language: 'tsx',
      source: config.source,
      html: config.html.replace(
        '<textarea data-slot="textarea"',
        `<textarea data-slot="textarea" class="${renderedTextareaClass}"`,
      ),
      props: [
        {
          name: 'Textarea',
          type: 'React component',
          description: 'The production native multiline text primitive used by the example.',
        },
        {
          name: 'required / disabled / readOnly / aria-*',
          type: 'native textarea props',
          description:
            'Choose the editing and validation state while preserving its relationships.',
        },
      ],
      attributes: [
        {
          name: 'data-slot="textarea"',
          type: 'styling hook',
          description:
            'Identifies the production Textarea primitive; preserve it when adapting the generated markup.',
        },
        {
          name: 'for / id / aria-describedby / aria-invalid',
          type: 'semantic and accessibility attributes',
          description:
            'Connect the visible label, supporting or error text, and invalid state to the textarea.',
        },
      ],
      notes:
        'The HTML shows the complete relevant structure for this example, including the label, textarea, state attributes, and supporting or error text.',
    },
    requirements: {
      userStory: `As a form user, I want the ${config.title.toLowerCase()} Text area to explain its value, state, and correction path so that I can complete the task confidently.`,
      groups: [
        {
          id: businessId,
          title: 'Business requirements',
          items: [
            config.purpose,
            'The visible label must identify the response the consuming application needs.',
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
            'The text area must have one visible label associated with its id and remain operable with a keyboard.',
            'Supporting, error, and state information must be available in text and connected to the control when applicable.',
          ],
        },
        {
          id: technicalId,
          title: 'Technical requirements',
          items: [
            'The example must use the production Textarea primitive shown in its Code panel rather than a page-local replacement.',
            'The rendered structure must preserve native multiline semantics and the documented attributes.',
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

const examples: TextareaExampleConfig[] = [
  {
    id: 'BASIC',
    title: 'Basic',
    purpose:
      'The basic Text area must collect a longer free-form response with a visible label and a useful starting prompt.',
    explanation:
      'Use the basic pattern when people need to write more than one line and the response is clear from the label and task context.',
    doItems: [
      'Use a realistic short prompt when it helps people begin.',
      'Let the control grow vertically when longer writing is expected.',
    ],
    dontItems: [
      'Do not use placeholder text as the only label or instruction.',
      'Do not put policy, privacy, or complete writing instructions inside the field.',
    ],
    source: `import { Textarea } from '@/components/ui/textarea'\n\n<div className="space-y-2">\n  <label htmlFor="message">Message</label>\n  <Textarea id="message" placeholder="Write a message" />\n</div>`,
    html: `<div class="space-y-2">\n  <label for="message">Message</label>\n  <textarea data-slot="textarea" id="message" placeholder="Write a message"></textarea>\n</div>`,
    requirementItems: [
      'The control must accept multiline text and preserve the person’s entered value.',
      'The placeholder must remain supplementary to the visible label.',
    ],
    criteria: [
      {
        id: 'AC-BASIC-01',
        requirementRefs: ['business', 'functional'],
        given: 'the Basic Text area is rendered',
        when: 'a person focuses or edits Message',
        then: 'the control accepts a multiline response and keeps the visible label available',
        and: ['Write a message is presented only as an example prompt'],
      },
      {
        id: 'AC-BASIC-02',
        requirementRefs: ['accessibility'],
        given: 'a person navigates to Message with a keyboard',
        when: 'focus enters the control',
        then: 'the label remains associated and visible focus is shown',
        and: ['the response can be entered without a pointer'],
      },
    ],
    verification: [
      {
        id: 'VR-BASIC-01',
        role: 'Functional QA',
        title: 'Enter a multiline response',
        criterionRefs: ['AC-BASIC-01'],
        steps: [
          'Focus Message.',
          'Enter two lines of text and inspect the visible label and prompt.',
        ],
        expected:
          'Both lines remain in the control, the label remains visible, and the prompt is no longer shown after entry.',
      },
      {
        id: 'VR-BASIC-02',
        role: 'Accessibility QA',
        title: 'Navigate the basic text area',
        criterionRefs: ['AC-BASIC-02'],
        steps: [
          'Use Tab to focus Message.',
          'Inspect the visible focus indicator and activate the label.',
        ],
        expected:
          'The control receives visible focus, and selecting the label moves focus to the same text area.',
      },
    ],
  },
  {
    id: 'HELPER',
    title: 'With helper text',
    purpose:
      'The helper-text Text area must provide persistent guidance that remains useful before and after writing begins.',
    explanation:
      'Use helper text for expected detail, length, audience, privacy, or process guidance that remains relevant while people write.',
    doItems: [
      'Keep the helper message concise and actionable.',
      'Connect helper text with aria-describedby.',
    ],
    dontItems: [
      'Do not repeat the label in helper text.',
      'Do not use helper text for a correction message that belongs in an error state.',
    ],
    source: `import { Textarea } from '@/components/ui/textarea'\n\n<div className="space-y-2">\n  <label htmlFor="release-notes">Release notes</label>\n  <Textarea id="release-notes" aria-describedby="release-notes-hint" />\n  <p id="release-notes-hint">Mention the user-visible change, who is affected, and any action they need to take.</p>\n</div>`,
    html: `<div class="space-y-2">\n  <label for="release-notes">Release notes</label>\n  <textarea data-slot="textarea" id="release-notes" aria-describedby="release-notes-hint"></textarea>\n  <p id="release-notes-hint">Mention the user-visible change, who is affected, and any action they need to take.</p>\n</div>`,
    requirementItems: [
      'The helper text must explain what useful content looks like without replacing the label.',
      'The textarea must reference the helper text with aria-describedby.',
    ],
    criteria: [
      {
        id: 'AC-HELPER-01',
        requirementRefs: ['business', 'functional'],
        given: 'the helper-text Text area is rendered',
        when: 'a person reads or edits Release notes',
        then: 'the persistent helper text explains the expected response',
        and: ['the textarea remains editable'],
      },
      {
        id: 'AC-HELPER-02',
        requirementRefs: ['accessibility'],
        given: 'a person focuses Release notes',
        when: 'the accessible description is computed',
        then: 'the label and helper relationship are available without relying on visual proximity',
        and: ['aria-describedby references the helper paragraph'],
      },
    ],
    verification: [
      {
        id: 'VR-HELPER-01',
        role: 'Functional QA',
        title: 'Review helper text',
        criterionRefs: ['AC-HELPER-01'],
        steps: ['Focus Release notes.', 'Read the helper message, then enter a release note.'],
        expected:
          'The helper message remains visible before and after entry and explains the expected response.',
      },
      {
        id: 'VR-HELPER-02',
        role: 'Accessibility QA',
        title: 'Inspect the description relationship',
        criterionRefs: ['AC-HELPER-02'],
        steps: [
          'Inspect the textarea id and helper paragraph id.',
          'Inspect aria-describedby on the textarea.',
        ],
        expected:
          'aria-describedby references the helper paragraph and the label references the same textarea id.',
      },
    ],
  },
  {
    id: 'DISABLED',
    title: 'Disabled',
    purpose:
      'The disabled Text area must communicate that its current response cannot be changed in this context.',
    explanation:
      'Disable a Text area only when people cannot make a meaningful change, and explain why the response is unavailable.',
    doItems: [
      'Preserve the value and label so the unavailable state remains understandable.',
      'Explain what controls availability when that action is known.',
    ],
    dontItems: [
      'Do not disable a field merely to prevent mistakes.',
      'Do not hide important information only in a disabled control.',
    ],
    source: `import { Textarea } from '@/components/ui/textarea'\n\n<div className="space-y-2">\n  <label htmlFor="internal-notes">Internal notes</label>\n  <Textarea id="internal-notes" value="Notes are managed by the review team." disabled readOnly aria-describedby="internal-notes-hint" />\n  <p id="internal-notes-hint">This field is controlled by the review workflow.</p>\n</div>`,
    html: `<div class="space-y-2">\n  <label for="internal-notes">Internal notes</label>\n  <textarea data-slot="textarea" id="internal-notes" disabled readonly aria-describedby="internal-notes-hint">Notes are managed by the review team.</textarea>\n  <p id="internal-notes-hint">This field is controlled by the review workflow.</p>\n</div>`,
    requirementItems: [
      'The textarea must retain the current response while preventing edits.',
      'The disabled treatment must be distinguishable without making the label or value unreadable.',
    ],
    criteria: [
      {
        id: 'AC-DISABLED-01',
        requirementRefs: ['business', 'functional'],
        given: 'the disabled Text area is rendered',
        when: 'a person attempts to focus or edit Internal notes',
        then: 'the browser prevents editing and preserves the current response',
        and: ['the label and explanation remain visible'],
      },
      {
        id: 'AC-DISABLED-02',
        requirementRefs: ['accessibility'],
        given: 'a person inspects the unavailable field',
        when: 'the field is disabled',
        then: 'the unavailable state is exposed semantically and is not communicated by color alone',
        and: ['the supporting explanation remains readable'],
      },
    ],
    verification: [
      {
        id: 'VR-DISABLED-01',
        role: 'Functional QA',
        title: 'Inspect the unavailable response',
        criterionRefs: ['AC-DISABLED-01'],
        steps: [
          'Inspect Internal notes and its current value.',
          'Attempt to focus and edit the field.',
        ],
        expected: 'The value remains visible and cannot be changed.',
      },
      {
        id: 'VR-DISABLED-02',
        role: 'Accessibility QA',
        title: 'Inspect disabled semantics',
        criterionRefs: ['AC-DISABLED-02'],
        steps: [
          'Inspect the textarea disabled attribute.',
          'Check that the label and explanation remain readable.',
        ],
        expected:
          'The textarea is semantically disabled while visible text still explains the value and state.',
      },
    ],
  },
  {
    id: 'INVALID',
    title: 'Invalid',
    purpose:
      'The invalid Text area must preserve the response and explain exactly how to correct it.',
    explanation:
      'Use an invalid state when a known problem needs correction. Keep the person’s response and place a specific correction message beside it.',
    doItems: [
      'Describe the problem and the correction.',
      'Connect the error with aria-describedby and aria-invalid.',
    ],
    dontItems: [
      'Do not rely on a red border alone.',
      'Do not replace the person’s response with a blank control.',
    ],
    source: `import { Textarea } from '@/components/ui/textarea'\n\n<div className="space-y-2">\n  <label htmlFor="feedback">Accessibility feedback</label>\n  <Textarea id="feedback" defaultValue="The button is hard to use." aria-invalid="true" aria-describedby="feedback-error" />\n  <p id="feedback-error">Add where the problem occurs and what happens when you try to use the button.</p>\n</div>`,
    html: `<div class="space-y-2">\n  <label for="feedback">Accessibility feedback</label>\n  <textarea data-slot="textarea" id="feedback" aria-invalid="true" aria-describedby="feedback-error">The button is hard to use.</textarea>\n  <p id="feedback-error">Add where the problem occurs and what happens when you try to use the button.</p>\n</div>`,
    requirementItems: [
      'The invalid field must preserve the response so the person can identify and correct the problem.',
      'The error must explain what detail is missing and how to provide it.',
    ],
    criteria: [
      {
        id: 'AC-INVALID-01',
        requirementRefs: ['business', 'functional'],
        given: 'the invalid Text area is rendered',
        when: 'a person reviews Accessibility feedback',
        then: 'the original response remains visible and the error explains how to correct it',
        and: ['the textarea exposes aria-invalid="true"'],
      },
      {
        id: 'AC-INVALID-02',
        requirementRefs: ['accessibility'],
        given: 'a person focuses the invalid field',
        when: 'the field and error are inspected',
        then: 'the error is programmatically associated through aria-describedby',
        and: ['the invalid state is available without relying on the border color'],
      },
    ],
    verification: [
      {
        id: 'VR-INVALID-01',
        role: 'Functional QA',
        title: 'Correct the invalid response',
        criterionRefs: ['AC-INVALID-01'],
        steps: [
          'Inspect the current response and error.',
          'Replace the response with a location and observed behavior.',
        ],
        expected:
          'The original response is available for editing, and the error gives a specific correction path.',
      },
      {
        id: 'VR-INVALID-02',
        role: 'Accessibility QA',
        title: 'Inspect invalid relationships',
        criterionRefs: ['AC-INVALID-02'],
        steps: [
          'Inspect aria-invalid on the textarea.',
          'Confirm aria-describedby references the visible error paragraph.',
        ],
        expected: 'The invalid state and error message are programmatically available.',
      },
    ],
  },
  {
    id: 'REQUIRED',
    title: 'Required',
    purpose:
      'The required Text area must prevent submission without a project summary and provide a status after a valid submission.',
    explanation:
      'Mark a Text area required when the response is genuinely necessary to complete the task, and demonstrate both the browser constraint and successful result.',
    doItems: [
      'Explain the requirement near the field and help people begin writing.',
      'Announce the successful result in a polite status region.',
    ],
    dontItems: [
      'Do not require an essay when a short answer meets the task need.',
      'Do not use an error that only says “Required.”',
    ],
    source: `import { useState, type FormEvent } from 'react'\nimport { Textarea } from '@/components/ui/textarea'\n\nfunction RequiredExample() {\n  const [submitted, setSubmitted] = useState(false)\n  function handleSubmit(event: FormEvent<HTMLFormElement>) {\n    event.preventDefault()\n    setSubmitted(true)\n  }\n  return (\n    <form onSubmit={handleSubmit}>\n      <label htmlFor="project-summary">Project summary</label>\n      <Textarea id="project-summary" required aria-required="true" />\n      <button type="submit">Submit</button>\n      {submitted && <p role="status" aria-live="polite">Submitted successfully because the project summary has a value.</p>}\n    </form>\n  )\n}`,
    html: `<form>\n  <label for="project-summary">Project summary</label>\n  <textarea data-slot="textarea" id="project-summary" required aria-required="true"></textarea>\n  <button type="submit">Submit</button>\n  <p role="status" aria-live="polite">Submitted successfully because the project summary has a value.</p>\n</form>`,
    requirementItems: [
      'The browser must prevent submission while Project summary is empty.',
      'A valid submission must expose the success confirmation through a polite status region.',
    ],
    criteria: [
      {
        id: 'AC-REQUIRED-01',
        requirementRefs: ['business', 'functional'],
        given: 'Project summary is empty',
        when: 'a person activates Submit',
        then: 'the browser prevents form submission because the textarea is required',
        and: ['the person can enter a response and try again'],
      },
      {
        id: 'AC-REQUIRED-02',
        requirementRefs: ['accessibility'],
        given: 'Project summary contains a value',
        when: 'a person submits the form',
        then: 'the success confirmation appears in a role=status region with aria-live="polite"',
        and: ['the confirmation is not conveyed by color alone'],
      },
    ],
    verification: [
      {
        id: 'VR-REQUIRED-01',
        role: 'Functional QA',
        title: 'Submit the required response',
        criterionRefs: ['AC-REQUIRED-01', 'AC-REQUIRED-02'],
        steps: [
          'Activate Submit while Project summary is empty.',
          'Enter a summary and activate Submit again.',
        ],
        expected:
          'The empty submission is blocked; the valid submission shows the success confirmation.',
      },
      {
        id: 'VR-REQUIRED-02',
        role: 'Accessibility QA',
        title: 'Inspect required and status semantics',
        criterionRefs: ['AC-REQUIRED-02'],
        steps: [
          'Inspect required and aria-required on the textarea.',
          'Inspect the success message role and aria-live attributes.',
        ],
        expected: 'The required state and polite status announcement are programmatically exposed.',
      },
    ],
  },
]

function renderExample(config: TextareaExampleConfig, children: ReactNode) {
  return (
    <ExampleVariation
      title={config.title}
      summary={config.purpose}
      tryIt={`Use the ${config.title.toLowerCase()} Text area, enter or inspect a response, and confirm its state, relationships, and documented outcome.`}
      exampleClassName="p-5 sm:p-6"
      supplemental={supplemental(config)}
    >
      {children}
    </ExampleVariation>
  )
}

function ComponentsTextareaPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/textarea"
      tabActiveHref="/components/forms"
      sidebarNav={formSidebarLinks}
      sidebarNavLabel="Forms components"
    >
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby="textarea-heading">
          <h1 id="textarea-heading" className="text-4xl font-semibold tracking-tight">
            Text area
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Use Text area for a longer, free-form response that may need multiple lines. Keep the
            visible label, writing guidance, current value, and validation state understandable as
            one native control.
          </p>
        </section>
        <section className="space-y-5" aria-labelledby="textarea-what-heading">
          <h2 id="textarea-what-heading" className="text-2xl font-semibold tracking-tight">
            What is it?
          </h2>
          <p className="leading-7 text-muted-foreground">
            Text area is a native multiline text control for narrative or longer responses. Use
            Input for one short value, and use a richer editor only when formatting or structured
            authoring is genuinely required.
          </p>
          <TryIt>
            Focus Message, enter two lines, and confirm the response remains readable with visible
            focus and the label still associated.
          </TryIt>
          <div className="rounded-lg border p-5 sm:p-6">
            <BasicExample />
          </div>
        </section>
        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="textarea-use-heading">
          <div className="space-y-5">
            <h2 id="textarea-use-heading" className="text-2xl font-semibold tracking-tight">
              When to use it
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Use it for narrative responses, explanations, notes, or feedback.</li>
              <li>Use a concise prompt or helper message when people need help starting.</li>
              <li>Let people resize or provide enough initial height for the expected response.</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 id="textarea-not-heading" className="text-2xl font-semibold tracking-tight">
              When not to use it
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Use Input when the answer should be one short value.</li>
              <li>
                Use Select, Radio group, or Checkbox group when the choices are known and
                structured.
              </li>
              <li>Use a rich-text editor only when formatting is a real product requirement.</li>
            </ul>
          </div>
        </section>
        <section className="space-y-5" aria-labelledby="textarea-design-heading">
          <h2 id="textarea-design-heading" className="text-2xl font-semibold tracking-tight">
            Design considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Use a visible label and keep placeholder text supplementary.</li>
            <li>
              Tell people what useful content looks like, including length or audience when
              relevant.
            </li>
            <li>Keep helper and error text close to the control and in reading order.</li>
            <li>
              Choose an initial height that fits the expected response and preserve intentional
              resize behavior.
            </li>
          </ul>
        </section>
        <section className="space-y-5" aria-labelledby="textarea-accessibility-heading">
          <h2 id="textarea-accessibility-heading" className="text-2xl font-semibold tracking-tight">
            Accessibility considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Associate one visible label with the native textarea through matching for and id
              values.
            </li>
            <li>Preserve native keyboard editing and a visible focus indicator.</li>
            <li>
              Connect helper or error text with aria-describedby and expose aria-invalid when
              applicable.
            </li>
            <li>
              Use required and aria-required when the response is necessary; do not rely on color
              alone.
            </li>
            <li>Keep instructions, limits, and correction messages available as text.</li>
          </ul>
        </section>
        <section className="space-y-5" aria-labelledby="textarea-responsive-heading">
          <h2 id="textarea-responsive-heading" className="text-2xl font-semibold tracking-tight">
            Responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">
            Let the control fill its available width, keep text readable, and avoid forcing
            horizontal scrolling. Test narrow screens, long responses, browser zoom, touch targets,
            and the resize affordance if resizing is enabled.
          </p>
        </section>
        <section className="space-y-8" aria-labelledby="textarea-examples-heading">
          <div className="space-y-2">
            <h2 id="textarea-examples-heading" className="text-2xl font-semibold tracking-tight">
              Examples and variations
            </h2>
            <p className="leading-7 text-muted-foreground">
              Each example demonstrates one meaningful Text area decision: a starting prompt,
              persistent helper text, unavailable value, correction state, or required submission.
            </p>
          </div>
          <div className="space-y-10">
            {renderExample(examples[0], <BasicExample />)}
            {renderExample(examples[1], <HelperExample />)}
            {renderExample(examples[2], <DisabledExample />)}
            {renderExample(examples[3], <InvalidExample />)}
            {renderExample(examples[4], <RequiredExample />)}
          </div>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsTextareaPage }
