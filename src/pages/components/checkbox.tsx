import { useState, type ReactNode } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { ExampleVariation } from '@/components/layout/example-variation'
import { TryIt } from '@/components/layout/try-it'
import { formSidebarLinks } from '@/config/component-navigation'

/**
 * Checkbox guide page.
 *
 * Demonstrates the production Checkbox primitive with independent choice,
 * helper text, disabled, invalid, and required states. Each variation owns
 * copyable usage and behavior-specific delivery documentation.
 */

const fieldClass = 'max-w-xl space-y-2'
const renderedCheckboxClass =
  'size-4 shrink-0 rounded border border-input accent-primary outline-none transition-[color,box-shadow] focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40'

function CheckboxField({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string
  label: string
  hint?: string
  error?: string
  children: ReactNode
}) {
  return (
    <div className={fieldClass}>
      <div className="flex items-start gap-3">
        {children}
        <label className="text-sm font-medium leading-5" htmlFor={id}>
          {label}
        </label>
      </div>
      {hint && !error && (
        <p id={`${id}-hint`} className="pl-7 text-sm leading-6 text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="pl-7 text-sm leading-6 text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

function BasicExample() {
  return (
    <CheckboxField id="checkbox-basic-example" label="Send me product updates">
      <Checkbox id="checkbox-basic-example" />
    </CheckboxField>
  )
}

function HelperExample() {
  return (
    <CheckboxField
      id="checkbox-helper-example"
      label="Share usage data"
      hint="Helps us improve the product. Your content is not shared with other customers."
    >
      <Checkbox id="checkbox-helper-example" aria-describedby="checkbox-helper-example-hint" />
    </CheckboxField>
  )
}

function DisabledExample() {
  return (
    <CheckboxField
      id="checkbox-disabled-example"
      label="Enable advanced analytics"
      hint="Available on the Business plan."
    >
      <Checkbox
        id="checkbox-disabled-example"
        disabled
        aria-describedby="checkbox-disabled-example-hint"
      />
    </CheckboxField>
  )
}

function InvalidExample() {
  return (
    <CheckboxField
      id="checkbox-invalid-example"
      label="Confirm this workspace is ready to archive"
      error="Confirm the workspace is ready before archiving it."
    >
      <Checkbox
        id="checkbox-invalid-example"
        aria-invalid="true"
        aria-describedby="checkbox-invalid-example-error"
      />
    </CheckboxField>
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
      <CheckboxField
        id="checkbox-required-example"
        label="I agree to the project terms"
        hint="Required. Submit unchecked to see the browser prevent submission, then check the box and submit again."
      >
        <Checkbox
          id="checkbox-required-example"
          required
          aria-required="true"
          aria-describedby="checkbox-required-example-hint"
          onChange={() => setSubmitted(false)}
        />
      </CheckboxField>
      <button
        type="submit"
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Submit
      </button>
      {submitted && (
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Submitted successfully because the terms were accepted.
        </p>
      )}
    </form>
  )
}

type CheckboxExampleConfig = {
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

function supplemental(config: CheckboxExampleConfig) {
  const businessId = `BR-${config.id}`
  const functionalId = `FR-${config.id}`
  const accessibilityId = `A11Y-${config.id}`
  const technicalId = `TR-${config.id}`

  return {
    tabLayout: 'requirements' as const,
    guidance: {
      explanation: config.explanation,
      considerations: [
        'Use the production Checkbox primitive so native checked state, keyboard behavior, focus treatment, and form validation remain available.',
        'Keep the visible label, supporting or error text, current state, and consequence aligned with the demonstrated Checkbox props.',
      ],
      doItems: config.doItems,
      dontItems: config.dontItems,
    },
    code: {
      language: 'tsx',
      source: config.source,
      html: config.html.replace(
        '<input data-slot="checkbox"',
        `<input data-slot="checkbox" class="${renderedCheckboxClass}"`,
      ),
      props: [
        {
          name: 'Checkbox',
          type: 'React component',
          description: 'The production native boolean-choice primitive used by the example.',
        },
        {
          name: 'checked / required / disabled / aria-*',
          type: 'native input props',
          description: 'Choose the choice state and preserve the demonstrated relationships.',
        },
      ],
      attributes: [
        {
          name: 'data-slot="checkbox"',
          type: 'styling hook',
          description:
            'Identifies the production Checkbox primitive; preserve it when adapting the generated markup.',
        },
        {
          name: 'for / id / aria-describedby / aria-invalid',
          type: 'semantic and accessibility attributes',
          description:
            'Connect the visible label, supporting or error text, and invalid state to the checkbox.',
        },
      ],
      notes:
        'The HTML shows the complete relevant structure for this example, including the label, checkbox, state attributes, and supporting, error, or status text.',
    },
    requirements: {
      userStory: `As a form user, I want the ${config.title.toLowerCase()} Checkbox to explain its choice, state, and correction path so that I can make the decision confidently.`,
      groups: [
        {
          id: businessId,
          title: 'Business requirements',
          items: [
            config.purpose,
            'The visible label must identify the independent choice and its meaningful outcome.',
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
            'The checkbox must have one visible label associated with its id and remain operable with a keyboard.',
            'Supporting, error, and state information must be available in text and connected to the control when applicable.',
          ],
        },
        {
          id: technicalId,
          title: 'Technical requirements',
          items: [
            'The example must use the production Checkbox primitive shown in its Code panel rather than a page-local replacement.',
            'The rendered structure must preserve native checkbox semantics and the documented attributes.',
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

const examples: CheckboxExampleConfig[] = [
  {
    id: 'BASIC',
    title: 'Basic',
    purpose:
      'The basic Checkbox must expose one independent choice with a visible label that explains what checking changes.',
    tryIt:
      'Focus Send me product updates, press Space to toggle it, and confirm the checked state changes while the label remains visible.',
    explanation:
      'Use the basic pattern when the person can choose this preference independently of other controls.',
    doItems: [
      'Write the meaningful outcome in the label.',
      'Make the label easy to activate and understand before and after checking.',
    ],
    dontItems: [
      'Do not use placeholder text; a Checkbox does not have a placeholder.',
      'Do not use a vague label such as “Yes” or “Enable” without naming what changes.',
    ],
    source: `import { Checkbox } from '@/components/ui/checkbox'\n\n<label className="flex items-center gap-3" htmlFor="product-updates">\n  <Checkbox id="product-updates" />\n  <span>Send me product updates</span>\n</label>`,
    html: `<label class="flex items-center gap-3" for="product-updates">\n  <input data-slot="checkbox" id="product-updates" type="checkbox">\n  <span>Send me product updates</span>\n</label>`,
    requirementItems: [
      'The checkbox must expose one independently changeable boolean choice.',
      'The label must remain visible and state the meaningful outcome of checking it.',
    ],
    criteria: [
      {
        id: 'AC-BASIC-01',
        requirementRefs: ['business', 'functional'],
        given: 'the Basic Checkbox is rendered',
        when: 'a person selects or clears Send me product updates',
        then: 'the checkbox state changes independently and the visible label remains available',
        and: ['the label explains the outcome rather than only naming a state'],
      },
      {
        id: 'AC-BASIC-02',
        requirementRefs: ['accessibility'],
        given: 'a person navigates to the Basic Checkbox with a keyboard',
        when: 'focus enters the control',
        then: 'the label remains associated and visible focus is shown',
        and: ['Space can toggle the choice without a pointer'],
      },
    ],
    verification: [
      {
        id: 'VR-BASIC-01',
        role: 'Functional QA',
        title: 'Toggle the independent choice',
        criterionRefs: ['AC-BASIC-01'],
        steps: [
          'Select Send me product updates.',
          'Clear it again and inspect the native checked state.',
        ],
        expected:
          'The checkbox becomes checked and unchecked independently while the label remains visible.',
      },
      {
        id: 'VR-BASIC-02',
        role: 'Accessibility QA',
        title: 'Use the checkbox with a keyboard',
        criterionRefs: ['AC-BASIC-02'],
        steps: [
          'Use Tab to focus the checkbox.',
          'Press Space and inspect focus and checked state.',
        ],
        expected: 'The checkbox receives visible focus and Space toggles its checked state.',
      },
    ],
  },
  {
    id: 'HELPER',
    title: 'With helper text',
    purpose:
      'The helper-text Checkbox must provide persistent information about the choice’s consequence or scope.',
    tryIt:
      'Focus Share usage data, read the helper message, and toggle the checkbox to confirm the description remains available.',
    explanation:
      'Use helper text when the choice needs context that remains useful before and after it is checked.',
    doItems: [
      'Explain what happens when the choice is checked or cleared.',
      'Connect the description with aria-describedby.',
    ],
    dontItems: [
      'Do not repeat the label in helper text.',
      'Do not hide consent terms or essential consequences only in optional help.',
    ],
    source: `import { Checkbox } from '@/components/ui/checkbox'\n\n<div className="space-y-2">\n  <div className="flex items-center gap-3">\n    <Checkbox id="share-data" aria-describedby="share-data-hint" />\n    <label htmlFor="share-data">Share usage data</label>\n  </div>\n  <p id="share-data-hint">Helps us improve the product. Your content is not shared with other customers.</p>\n</div>`,
    html: `<div class="space-y-2">\n  <div class="flex items-center gap-3">\n    <input data-slot="checkbox" id="share-data" type="checkbox" aria-describedby="share-data-hint">\n    <label for="share-data">Share usage data</label>\n  </div>\n  <p id="share-data-hint">Helps us improve the product. Your content is not shared with other customers.</p>\n</div>`,
    requirementItems: [
      'The helper text must explain the choice’s consequence without replacing its label.',
      'The checkbox must reference the helper text with aria-describedby.',
    ],
    criteria: [
      {
        id: 'AC-HELPER-01',
        requirementRefs: ['business', 'functional'],
        given: 'the helper-text Checkbox is rendered',
        when: 'a person reads or toggles Share usage data',
        then: 'the persistent helper text explains the choice’s scope',
        and: ['the checkbox remains independently toggleable'],
      },
      {
        id: 'AC-HELPER-02',
        requirementRefs: ['accessibility'],
        given: 'a person focuses Share usage data',
        when: 'the accessible description is computed',
        then: 'the label and helper relationship are available without relying on visual proximity',
        and: ['aria-describedby references the helper paragraph'],
      },
    ],
    verification: [
      {
        id: 'VR-HELPER-01',
        role: 'Functional QA',
        title: 'Review helper text and state',
        criterionRefs: ['AC-HELPER-01'],
        steps: ['Focus Share usage data.', 'Read the helper message and toggle the checkbox.'],
        expected:
          'The helper message remains visible before and after toggling and explains the choice’s scope.',
      },
      {
        id: 'VR-HELPER-02',
        role: 'Accessibility QA',
        title: 'Inspect the description relationship',
        criterionRefs: ['AC-HELPER-02'],
        steps: [
          'Inspect the checkbox id and helper paragraph id.',
          'Inspect aria-describedby on the checkbox.',
        ],
        expected:
          'aria-describedby references the helper paragraph and the visible label references the checkbox id.',
      },
    ],
  },
  {
    id: 'DISABLED',
    title: 'Disabled',
    purpose:
      'The disabled Checkbox must communicate that its independent choice is unavailable in the current context.',
    tryIt:
      'Inspect Enable advanced analytics, attempt to focus or toggle it, and confirm the disabled state and plan explanation remain visible.',
    explanation:
      'Disable a Checkbox only when the person cannot meaningfully change the choice and explain what controls availability.',
    doItems: [
      'Preserve the label and explain why the choice is unavailable.',
      'Use readable supporting text for the condition that controls availability.',
    ],
    dontItems: [
      'Do not disable a checkbox merely to prevent mistakes.',
      'Do not hide important information only in a disabled control.',
    ],
    source: `import { Checkbox } from '@/components/ui/checkbox'\n\n<div className="space-y-2">\n  <div className="flex items-center gap-3">\n    <Checkbox id="advanced-analytics" disabled aria-describedby="advanced-analytics-hint" />\n    <label htmlFor="advanced-analytics">Enable advanced analytics</label>\n  </div>\n  <p id="advanced-analytics-hint">Available on the Business plan.</p>\n</div>`,
    html: `<div class="space-y-2">\n  <div class="flex items-center gap-3">\n    <input data-slot="checkbox" id="advanced-analytics" type="checkbox" disabled aria-describedby="advanced-analytics-hint">\n    <label for="advanced-analytics">Enable advanced analytics</label>\n  </div>\n  <p id="advanced-analytics-hint">Available on the Business plan.</p>\n</div>`,
    requirementItems: [
      'The checkbox must remain unchecked and prevent changes while unavailable.',
      'The label and plan explanation must remain readable without relying on opacity alone.',
    ],
    criteria: [
      {
        id: 'AC-DISABLED-01',
        requirementRefs: ['business', 'functional'],
        given: 'the disabled Checkbox is rendered',
        when: 'a person attempts to focus or toggle Enable advanced analytics',
        then: 'the browser prevents the change and the choice remains unavailable',
        and: ['the label and plan explanation remain visible'],
      },
      {
        id: 'AC-DISABLED-02',
        requirementRefs: ['accessibility'],
        given: 'a person inspects the unavailable choice',
        when: 'the checkbox is disabled',
        then: 'the unavailable state is exposed semantically and is not communicated by color alone',
        and: ['the supporting explanation remains readable'],
      },
    ],
    verification: [
      {
        id: 'VR-DISABLED-01',
        role: 'Functional QA',
        title: 'Inspect the unavailable choice',
        criterionRefs: ['AC-DISABLED-01'],
        steps: ['Inspect Enable advanced analytics.', 'Attempt to focus and toggle the checkbox.'],
        expected: 'The checkbox cannot be toggled and the plan explanation remains visible.',
      },
      {
        id: 'VR-DISABLED-02',
        role: 'Accessibility QA',
        title: 'Inspect disabled semantics',
        criterionRefs: ['AC-DISABLED-02'],
        steps: [
          'Inspect the checkbox disabled attribute.',
          'Check that the label and explanation remain readable.',
        ],
        expected:
          'The checkbox is semantically disabled while the visible text explains the unavailable state.',
      },
    ],
  },
  {
    id: 'INVALID',
    title: 'Invalid',
    purpose:
      'The invalid Checkbox must explain what choice is required and how to correct the current state.',
    tryIt:
      'Inspect the unchecked archive confirmation, read the error, then check it and confirm the choice remains available to correct.',
    explanation:
      'Use an invalid state when the checkbox state conflicts with a rule the person can act on, such as a required confirmation.',
    doItems: [
      'Explain what must be checked or changed and why.',
      'Connect the error with aria-describedby and aria-invalid.',
    ],
    dontItems: [
      'Do not rely on a red outline or icon without text.',
      'Do not use “Invalid checkbox” without a correction path.',
    ],
    source: `import { Checkbox } from '@/components/ui/checkbox'\n\n<div className="space-y-2">\n  <div className="flex items-center gap-3">\n    <Checkbox id="archive-ready" aria-invalid="true" aria-describedby="archive-ready-error" />\n    <label htmlFor="archive-ready">Confirm this workspace is ready to archive</label>\n  </div>\n  <p id="archive-ready-error">Confirm the workspace is ready before archiving it.</p>\n</div>`,
    html: `<div class="space-y-2">\n  <div class="flex items-center gap-3">\n    <input data-slot="checkbox" id="archive-ready" type="checkbox" aria-invalid="true" aria-describedby="archive-ready-error">\n    <label for="archive-ready">Confirm this workspace is ready to archive</label>\n  </div>\n  <p id="archive-ready-error">Confirm the workspace is ready before archiving it.</p>\n</div>`,
    requirementItems: [
      'The invalid checkbox must remain available for the person to correct the choice.',
      'The error must state what must be checked before archiving.',
    ],
    criteria: [
      {
        id: 'AC-INVALID-01',
        requirementRefs: ['business', 'functional'],
        given: 'the invalid Checkbox is rendered',
        when: 'a person reviews the archive confirmation',
        then: 'the current unchecked state and correction message are visible',
        and: ['the checkbox exposes aria-invalid="true"'],
      },
      {
        id: 'AC-INVALID-02',
        requirementRefs: ['accessibility'],
        given: 'a person focuses the invalid checkbox',
        when: 'the field and error are inspected',
        then: 'the error is programmatically associated through aria-describedby',
        and: ['the invalid state is available without relying on color'],
      },
    ],
    verification: [
      {
        id: 'VR-INVALID-01',
        role: 'Functional QA',
        title: 'Correct the invalid choice',
        criterionRefs: ['AC-INVALID-01'],
        steps: [
          'Inspect the unchecked checkbox and error.',
          'Check the workspace-ready confirmation.',
        ],
        expected:
          'The checkbox remains available to correct and the error explains the required action.',
      },
      {
        id: 'VR-INVALID-02',
        role: 'Accessibility QA',
        title: 'Inspect invalid relationships',
        criterionRefs: ['AC-INVALID-02'],
        steps: [
          'Inspect aria-invalid on the checkbox.',
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
      'The required Checkbox must prevent submission until the person actively accepts the project terms and announce the valid result.',
    tryIt:
      'Submit the form unchecked, then check I agree to the project terms and submit again to confirm the success status appears.',
    explanation:
      'Use a required Checkbox when the person must actively acknowledge a term or confirm a condition before continuing.',
    doItems: [
      'Write the label as a clear statement of what checking means.',
      'Announce the successful result in a polite status region.',
    ],
    dontItems: [
      'Do not pre-check a required acknowledgment.',
      'Do not use an error that only says “Required.”',
    ],
    source: `import { useState, type FormEvent } from 'react'\nimport { Checkbox } from '@/components/ui/checkbox'\n\nfunction RequiredExample() {\n  const [submitted, setSubmitted] = useState(false)\n  function handleSubmit(event: FormEvent<HTMLFormElement>) {\n    event.preventDefault()\n    setSubmitted(true)\n  }\n  return (\n    <form onSubmit={handleSubmit}>\n      <div>\n        <Checkbox id="terms" required aria-required="true" aria-describedby="terms-hint" />\n        <label htmlFor="terms">I agree to the project terms</label>\n        <p id="terms-hint">Required. Submit unchecked to see the browser prevent submission, then check the box and submit again.</p>\n      </div>\n      <button type="submit">Submit</button>\n      {submitted && <p role="status" aria-live="polite">Submitted successfully because the terms were accepted.</p>}\n    </form>\n  )\n}`,
    html: `<form>\n  <div>\n    <input data-slot="checkbox" id="terms" type="checkbox" required aria-required="true" aria-describedby="terms-hint">\n    <label for="terms">I agree to the project terms</label>\n    <p id="terms-hint">Required. Submit unchecked to see the browser prevent submission, then check the box and submit again.</p>\n  </div>\n  <button type="submit">Submit</button>\n  <p role="status" aria-live="polite">Submitted successfully because the terms were accepted.</p>\n</form>`,
    requirementItems: [
      'The browser must prevent submission while the terms checkbox is unchecked.',
      'A valid submission must expose the success confirmation through a polite status region.',
    ],
    criteria: [
      {
        id: 'AC-REQUIRED-01',
        requirementRefs: ['business', 'functional'],
        given: 'I agree to the project terms is unchecked',
        when: 'a person activates Submit',
        then: 'the browser prevents form submission because the checkbox is required',
        and: ['the person can check the box and try again'],
      },
      {
        id: 'AC-REQUIRED-02',
        requirementRefs: ['accessibility'],
        given: 'the terms checkbox is checked',
        when: 'a person submits the form',
        then: 'the success confirmation appears in a role=status region with aria-live="polite"',
        and: ['the confirmation is not conveyed by color alone'],
      },
    ],
    verification: [
      {
        id: 'VR-REQUIRED-01',
        role: 'Functional QA',
        title: 'Submit the required acknowledgment',
        criterionRefs: ['AC-REQUIRED-01', 'AC-REQUIRED-02'],
        steps: [
          'Activate Submit while the checkbox is unchecked.',
          'Check I agree to the project terms and activate Submit again.',
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
          'Inspect required and aria-required on the checkbox.',
          'Inspect the success message role and aria-live attributes.',
        ],
        expected: 'The required state and polite status announcement are programmatically exposed.',
      },
    ],
  },
]

function renderExample(config: CheckboxExampleConfig, children: ReactNode) {
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

function ComponentsCheckboxPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/checkbox"
      tabActiveHref="/components/forms"
      sidebarNav={formSidebarLinks}
      sidebarNavLabel="Forms components"
    >
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby="checkbox-heading">
          <h1 id="checkbox-heading" className="text-4xl font-semibold tracking-tight">
            Checkbox
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Use Checkbox for one independent choice that can be selected or cleared without changing
            the state of other choices. Make the label explain the meaningful outcome of checking
            it.
          </p>
        </section>
        <section className="space-y-5" aria-labelledby="checkbox-what-heading">
          <h2 id="checkbox-what-heading" className="text-2xl font-semibold tracking-tight">
            What is it?
          </h2>
          <p className="leading-7 text-muted-foreground">
            Checkbox is a native boolean control for an independent preference, confirmation, or
            opt-in. Use Checkbox group for related independent choices, Radio group for mutually
            exclusive choices, and Switch when the product needs an immediate on/off setting.
          </p>
          <TryIt>
            Focus Send me product updates, press Space to toggle it, and confirm the label remains
            visible while the checked state changes.
          </TryIt>
          <div className="rounded-lg border p-5 sm:p-6">
            <BasicExample />
          </div>
        </section>
        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="checkbox-use-heading">
          <div className="space-y-5">
            <h2 id="checkbox-use-heading" className="text-2xl font-semibold tracking-tight">
              When to use it
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Use it for an independent preference, opt-in, confirmation, or filter.</li>
              <li>Use a clear label that states the result of selecting the choice.</li>
              <li>Use helper text when the consequence or scope needs persistent context.</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 id="checkbox-not-heading" className="text-2xl font-semibold tracking-tight">
              When not to use it
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Use Radio group when only one option in a set may be selected.</li>
              <li>Use Checkbox group when several related independent choices belong together.</li>
              <li>
                Use Switch when changing the setting should take effect immediately rather than at
                form submission.
              </li>
            </ul>
          </div>
        </section>
        <section className="space-y-5" aria-labelledby="checkbox-design-heading">
          <h2 id="checkbox-design-heading" className="text-2xl font-semibold tracking-tight">
            Design considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Write labels as meaningful choices or commitments, not vague responses such as “Yes.”
            </li>
            <li>Make the label easy to activate and keep it visible after selection.</li>
            <li>Keep helper and error text close to the control and in reading order.</li>
            <li>
              Do not pre-check a preference or acknowledgment unless the product decision and policy
              support that default.
            </li>
          </ul>
        </section>
        <section className="space-y-5" aria-labelledby="checkbox-accessibility-heading">
          <h2 id="checkbox-accessibility-heading" className="text-2xl font-semibold tracking-tight">
            Accessibility considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Use a native checkbox with one visible label associated through matching for and id
              values.
            </li>
            <li>
              Preserve keyboard operation with Tab and Space and provide a visible focus indicator.
            </li>
            <li>
              Connect helper or error text with aria-describedby and expose aria-invalid when
              applicable.
            </li>
            <li>
              Use required and aria-required for a necessary acknowledgment; do not rely on color
              alone.
            </li>
            <li>
              Keep the checked state and its consequence understandable without relying only on a
              color or icon.
            </li>
          </ul>
        </section>
        <section className="space-y-5" aria-labelledby="checkbox-responsive-heading">
          <h2 id="checkbox-responsive-heading" className="text-2xl font-semibold tracking-tight">
            Responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">
            Keep the checkbox and label together as one readable target. Allow long labels and
            helper text to wrap without clipping, preserve comfortable spacing at narrow widths, and
            test keyboard focus and touch activation at zoom and reflow.
          </p>
        </section>
        <section className="space-y-8" aria-labelledby="checkbox-examples-heading">
          <div className="space-y-2">
            <h2 id="checkbox-examples-heading" className="text-2xl font-semibold tracking-tight">
              Examples and variations
            </h2>
            <p className="leading-7 text-muted-foreground">
              Each example demonstrates one meaningful Checkbox decision: an independent choice,
              persistent helper text, unavailable state, correction state, or required
              acknowledgment.
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

export { ComponentsCheckboxPage }
