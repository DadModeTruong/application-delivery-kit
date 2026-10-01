/**
 * Forms component area and component reference pages.
 *
 * Form controls collect information. Each guide keeps the semantic HTML
 * behavior visible while demonstrating the equivalent shadcn-style pattern.
 */
import type { ReactNode } from 'react'

import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { formSidebarLinks } from '@/config/component-navigation'
import { guideContent, sectionDetails, tryItText, type FormKind } from './form-guide-content'
import { GuideList, panelClass } from './form-control-shared'
import { PageContractPanel, type PageContract } from '@/components/layout/page-contract'

type FormGuideProps = {
  title: string
  description: string
  kind: FormKind
  activeHref?: string
  basicExample: ReactNode
  variations: ReactNode
}

/**
 * Shared renderer for the individual form-control reference pages.
 *
 * Each control page owns its examples and passes the reusable prose and section
 * details through the typed content modules.
 */
function formContract(kind: FormKind, title: string): PageContract {
  const key = kind.toUpperCase().replaceAll('-', '_')
  const isChoice = ['select', 'radio-group', 'checkbox', 'checkbox-group', 'combobox'].includes(
    kind,
  )
  const isCalendar = kind === 'datepicker'
  return {
    userStory: `As a person completing a form with the ${title} control, I want the field's purpose, current state, available choices, validation, and keyboard behavior to be clear so that I can provide or correct the value confidently.`,
    requirements: [
      `The ${title} guide shall show a production-backed initial example and explain the control's semantic job.`,
      'The field shall have a visible label, a stable accessible name, and any helper or error message connected to the correct control or group.',
      `The ${title} control shall expose its supported value or choice behavior without requiring a pointer-only interaction.`,
      'The control shall preserve or clearly update its value when a person enters, selects, changes, clears, or corrects information.',
      'Invalid, required, disabled, empty, and no-match states shall be communicated with text or semantics where those states are demonstrated by the example.',
      'The control shall remain readable and usable at narrow widths, increased zoom, long labels, and realistic validation-message lengths.',
    ],
    criteria: [
      {
        id: `FORM-${key}-01`,
        given: `the ${title} page first renders`,
        when: 'the person looks at the basic example',
        then: 'the field has the expected label, initial value or prompt, and visible boundary',
        and: [
          'the control is not unexpectedly focused or opened',
          'helper text appears only when configured',
          'the initial state is understandable without color alone',
        ],
      },
      {
        id: `FORM-${key}-02`,
        given: `the person uses the ${title} control with a pointer or keyboard`,
        when: isCalendar
          ? 'they enter a date, open the calendar if present, navigate dates, and choose a date'
          : isChoice
            ? 'they inspect the available choices and choose, change, or remove a value where the example supports it'
            : 'they enter, edit, select, and clear a value where the example supports it',
        then: 'the visible value and accessible state update to match the person’s action',
        and: [
          'the focus target remains understandable',
          'the selected or entered value is not silently lost',
          'unsupported actions are not presented as available',
        ],
      },
      {
        id: `FORM-${key}-03`,
        given:
          'the person supplies an empty, incomplete, unmatched, invalid, or disallowed value where the example supports that state',
        when: 'they leave the field or attempt the relevant action',
        then: 'the page shows the correct error, no-match, unavailable, or required response',
        and: [
          'the message identifies what needs attention',
          'the field or group is associated with the message',
          'the person can recover without losing unrelated input',
        ],
      },
      {
        id: `A11Y-FORM-${key}-01`,
        given: 'the person uses only a keyboard and then a screen reader',
        when: 'they move to the control, operate it, and inspect its state',
        then: 'the control has a logical focus order, visible focus, correct semantic role, and accessible name',
        and: [
          'expanded, selected, checked, invalid, disabled, and required state is exposed when applicable',
          'no interaction requires a mouse',
        ],
      },
      {
        id: `RESP-FORM-${key}-01`,
        given:
          'the person uses the narrowest supported width, increased zoom, long labels, and long validation text',
        when: 'they inspect and operate the complete example',
        then: 'the control, message, choices, and any popup remain readable and reachable',
        and: [
          'nothing is clipped or overlapped',
          'the popup or calendar stays usable within the viewport',
          'no unintended horizontal scrolling is required',
        ],
      },
      {
        id: `NEG-FORM-${key}-01`,
        given: 'the person attempts an action that the current variation does not support',
        when: 'they inspect the controls and try to use it',
        then: 'the interface does not imply a false capability or silently accept an invalid value',
        and: [
          'disabled content is not presented as available',
          'a no-match or empty state is explicit when relevant',
          'the documented application-owned behavior remains separate from the reusable control',
        ],
      },
    ],
    verification: [
      {
        id: `FORM-${key}-INITIAL`,
        title: 'Initial state and semantics',
        cases: [
          {
            id: `FORM-${key}-INITIAL-01`,
            title: 'Confirm the first render',
            steps: [
              'Open the guide in a fresh browser tab.',
              'Find the basic example.',
              'Read its visible label, prompt/value, helper text, and error text if present.',
              'Inspect whether it is focused, expanded, selected, checked, invalid, required, or disabled before interaction.',
            ],
            expected: `The initial ${title} state matches the documented example exactly; no popup or selection appears unless configured; the accessible name and visible boundary are present.`,
          },
        ],
      },
      {
        id: `FORM-${key}-INTERACTION`,
        title: 'Complete supported interactions',
        cases: [
          {
            id: `FORM-${key}-INTERACTION-01`,
            title: 'Use pointer and keyboard paths',
            steps: [
              'Focus the control with Tab.',
              'Use the documented pointer action if one exists.',
              'Repeat the same meaningful action with the keyboard.',
              'Enter or choose a valid value.',
              'Change the value and then clear or undo it when the variation supports that action.',
            ],
            expected:
              'Each supported interaction produces the documented visible value and semantic state, focus remains understandable, and the value is not silently lost.',
          },
        ],
      },
      {
        id: `FORM-${key}-NEGATIVE`,
        title: 'Check validation and unsupported paths',
        cases: [
          {
            id: `FORM-${key}-NEGATIVE-01`,
            title: 'Exercise the negative case',
            steps: [
              'Use the empty, invalid, unmatched, incomplete, disabled, or unavailable input documented for this variation.',
              'Blur the control or submit the relevant form action.',
              'Read the resulting message or state.',
              'Correct the problem and repeat the valid action.',
            ],
            expected:
              'The correct negative state is visible and associated with the control, the person can identify the correction, and the valid correction succeeds without unrelated data loss.',
          },
        ],
      },
      {
        id: `FORM-${key}-RESPONSIVE`,
        title: 'Check accessibility and responsive boundaries',
        cases: [
          {
            id: `FORM-${key}-RESPONSIVE-01`,
            title: 'Use keyboard, zoom, and narrow width',
            steps: [
              'Use Tab and visible focus to traverse the example.',
              'Increase browser zoom.',
              'Set the narrowest supported viewport.',
              'Repeat the interaction and inspect labels, messages, options, and popup/calendar boundaries.',
            ],
            expected:
              'The control remains operable and readable, state is communicated semantically and visually, and no content is clipped, overlapped, or forced into unintended horizontal scrolling.',
          },
        ],
      },
    ],
  }
}

export function FormGuide({
  title,
  description,
  kind,
  activeHref = `/components/${kind === 'datepicker' ? 'datepicker' : kind}`,
  basicExample,
  variations,
}: FormGuideProps) {
  const content = guideContent[kind]
  const detail = sectionDetails[kind]
  return (
    <ComponentGuideShell
      activeHref={activeHref}
      tabActiveHref="/components/forms"
      sidebarNav={formSidebarLinks}
      sidebarNavLabel="Forms components"
    >
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby={`${kind}-heading`}>
          <h1 id={`${kind}-heading`} className="text-4xl font-semibold tracking-tight">
            {title}
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">{description}</p>
        </section>
        <section className="space-y-5" aria-labelledby={`${kind}-what-heading`}>
          <h2 id={`${kind}-what-heading`} className="text-2xl font-semibold tracking-tight">
            What is it?
          </h2>
          <p className="leading-7 text-muted-foreground">
            {content.what} This first example is intentionally simple: use it to recognize the
            control before thinking about its states or styling.
          </p>
          <div className={panelClass}>
            <div className="max-w-xl">{basicExample}</div>
          </div>
          <p className="text-sm leading-6 text-muted-foreground">Try it: {tryItText[kind]}</p>
        </section>
        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby={`${kind}-use-heading`}>
          <div className="space-y-5">
            <h2 id={`${kind}-use-heading`} className="text-2xl font-semibold tracking-tight">
              When to use it
            </h2>
            <p className="leading-7 text-muted-foreground">{detail.useIntro}</p>
            <GuideList items={[...content.use, ...detail.useMore]} />
          </div>
          <div className="space-y-5">
            <h2 id={`${kind}-not-heading`} className="text-2xl font-semibold tracking-tight">
              When not to use it
            </h2>
            <p className="leading-7 text-muted-foreground">{detail.notUseIntro}</p>
            <GuideList items={[...content.notUse, ...detail.notUseMore]} />
          </div>
        </section>
        <section className="space-y-5" aria-labelledby={`${kind}-design-heading`}>
          <h2 id={`${kind}-design-heading`} className="text-2xl font-semibold tracking-tight">
            Design considerations
          </h2>
          <p className="leading-7 text-muted-foreground">{detail.designIntro}</p>
          <GuideList items={[...content.design, ...detail.designMore]} />
        </section>
        <section className="space-y-5" aria-labelledby={`${kind}-accessibility-heading`}>
          <h2
            id={`${kind}-accessibility-heading`}
            className="text-2xl font-semibold tracking-tight"
          >
            Accessibility considerations
          </h2>
          <p className="leading-7 text-muted-foreground">{detail.accessibilityIntro}</p>
          <GuideList items={[...content.accessibility, ...detail.accessibilityMore]} />
        </section>
        <section className="space-y-5" aria-labelledby={`${kind}-responsive-heading`}>
          <h2 id={`${kind}-responsive-heading`} className="text-2xl font-semibold tracking-tight">
            Responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">{detail.responsiveIntro}</p>
          <p className="leading-7 text-muted-foreground">{content.responsive}</p>
        </section>
        {variations}
        <PageContractPanel contract={formContract(kind, title)} />
      </div>
    </ComponentGuideShell>
  )
}

export type { FormKind }
