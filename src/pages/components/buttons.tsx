import { useState } from 'react'
import { LoaderCircle, MousePointerClick } from 'lucide-react'
import { Pressable } from 'react-aria-components'
import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { TryIt } from '@/components/layout/try-it'
import { ExampleVariation } from '@/components/layout/example-variation'
import { interactionSidebarLinks } from '@/config/component-navigation'
import { Button, LinkButton } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

/**
 * Interactive form example used by the Form submission variation.
 *
 * Keeping the stateful example separate makes the route page easier to scan
 * while keeping the example close to the guide that explains it.
 */
function ButtonFormExample() {
  const [formStatus, setFormStatus] = useState('')

  return (
    <div className="space-y-3">
      <form
        className="flex flex-wrap items-center gap-3"
        onSubmit={(event) => {
          event.preventDefault()
          setFormStatus('Changes saved.')
        }}
      >
        <Button type="submit">Save changes</Button>
        <Button type="button" variant="outline">
          Cancel
        </Button>
      </form>
      <p id="button-form-status" className="text-sm font-medium" aria-live="polite">
        {formStatus}
      </p>
      <p className="text-sm leading-6 text-muted-foreground">
        The Save changes button submits this form using <code>type="submit"</code>. Cancel uses{' '}
        <code>type="button"</code> so it does not submit.
      </p>
    </div>
  )
}

type ButtonExampleConfig = {
  id: string
  explanation: string
  doItems: string[]
  dontItems: string[]
  source: string
  html: string
  requirements: string[]
  expected: string
}

function makeButtonSupplemental(config: ButtonExampleConfig) {
  const businessId = `BR-${config.id}`
  const functionalId = `FR-${config.id}`
  const nonFunctionalId = `NFR-${config.id}`
  const accessibilityId = `A11Y-${config.id}`
  const technicalId = `TR-${config.id}`
  const functionalCriterionId = `AC-${config.id}-01`
  const accessibilityCriterionId = `AC-${config.id}-02`

  return {
    tabLayout: 'requirements' as const,
    guidance: {
      explanation: config.explanation,
      considerations: [
        'Use the production Button or LinkButton primitive so focus, disabled, sizing, and variant behavior stay consistent.',
        'Keep the live preview, Try it instruction, and implementation example focused on the same decision.',
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
          name: 'Button / LinkButton',
          type: 'React component',
          description:
            'Provides the production action or navigation semantics used by this example.',
        },
        {
          name: 'variant / size / type',
          type: 'Button props',
          description:
            'Choose the visual hierarchy, density, and native behavior that fit the demonstrated action.',
        },
      ],
      attributes: [
        {
          name: 'data-slot / data-variant / data-size',
          type: 'component hooks',
          description:
            'Expose the production Button structure and selected visual options for styling and inspection.',
        },
        {
          name: 'aria-label / aria-busy / aria-haspopup',
          type: 'state and naming attributes',
          description: 'Use the relevant naming or state attribute when the example requires it.',
        },
      ],
      notes:
        'The HTML shows the complete semantic structure for this example. React Aria-generated IDs and implementation-specific icon paths may vary, but no meaningful controls or relationships are omitted.',
    },
    requirements: {
      userStory:
        'As a product team member, I want this Button pattern to communicate its action, state, and priority so that people can operate it confidently.',
      groups: [
        {
          id: businessId,
          title: 'Business requirements',
          items: [
            `The ${config.id.toLowerCase()} Button example must make the intended action or choice understandable before activation.`,
            'The example must support the surrounding task without making unrelated controls appear equally important.',
          ],
        },
        {
          id: functionalId,
          title: 'Functional requirements',
          items: config.requirements,
        },
        {
          id: nonFunctionalId,
          title: 'Non-functional requirements',
          items: [
            'The example must remain readable when labels wrap at narrow widths or increased text size.',
            'The visual treatment must preserve action hierarchy without relying on color alone.',
          ],
        },
        {
          id: accessibilityId,
          title: 'Accessibility requirements',
          items: [
            'The demonstrated controls must have accessible names and remain keyboard operable.',
            'The demonstrated state or relationship must be exposed without relying on color alone.',
          ],
        },
        {
          id: technicalId,
          title: 'Technical requirements',
          items: [
            'The example must use the production Button, LinkButton, or related interaction primitives shown in its Code panel.',
            'The rendered structure must preserve native action or navigation semantics and the relevant state attributes.',
          ],
        },
      ],
      acceptanceCriteria: [
        {
          id: functionalCriterionId,
          requirementRefs: [`${businessId}-01`, `${functionalId}-01`, `${technicalId}-01`],
          given: 'the Button example is rendered',
          when: 'a person inspects and operates the demonstrated action or actions',
          then: config.expected,
          and: ['the visible result matches the documented purpose of the example'],
        },
        {
          id: accessibilityCriterionId,
          requirementRefs: [`${accessibilityId}-01`, `${nonFunctionalId}-01`],
          given: 'a person uses the Button example with the keyboard or assistive technology',
          when: 'focus moves to the demonstrated controls and the relevant action is inspected',
          then: 'the controls remain named, keyboard operable, and visibly focused',
          and: ['the documented state or relationship is exposed without relying on color alone'],
        },
        {
          id: `AC-${config.id}-03`,
          requirementRefs: [`${functionalId}-02`, `${technicalId}-02`],
          given: 'the demonstrated Button is disabled, loading, a menu trigger, or part of a form',
          when: 'the person attempts the supported and unsupported activation paths',
          then: 'the control exposes the documented state and only performs the documented action',
          and: [
            'a disabled control does not activate',
            'a loading control does not invite duplicate submission',
            'a menu trigger exposes its expanded relationship when applicable',
          ],
        },
        {
          id: `AC-${config.id}-04`,
          requirementRefs: [`${nonFunctionalId}-01`, `${accessibilityId}-02`],
          given: 'the Button label, icon, or surrounding content is long',
          when: 'the person views the example at narrow width or increased text size',
          then: 'the label and focus treatment remain readable without clipping or overlap',
          and: [
            'an icon-only control has an accessible name',
            'visual hierarchy does not depend on color alone',
          ],
        },
      ],
    },
    verification: {
      scenarios: [
        {
          id: `VR-${config.id}-01`,
          criterionRefs: [functionalCriterionId],
          role: 'Functional QA',
          title: 'Inspect and operate the Button example',
          cases: [
            {
              id: `VR-${config.id}-01A`,
              criterionRefs: [functionalCriterionId],
              title: 'Use the demonstrated Button pattern',
              steps: [
                'Inspect the labels, variants, states, or relationships shown in the live example.',
                'Activate the relevant control with a pointer and inspect its demonstrated result.',
              ],
              expected: config.expected,
            },
          ],
        },
        {
          id: `VR-${config.id}-02`,
          criterionRefs: [accessibilityCriterionId],
          role: 'Accessibility QA',
          title: 'Navigate the Button example with the keyboard',
          cases: [
            {
              id: `VR-${config.id}-02A`,
              criterionRefs: [accessibilityCriterionId],
              title: 'Inspect focus and accessible names',
              steps: [
                'Tab to every demonstrated control and inspect the visible focus indicator.',
                'Activate the relevant control with the keyboard and inspect the exposed state or result.',
              ],
              expected:
                'Focus follows the visual order, every control has a useful accessible name, and the documented state or relationship remains exposed.',
            },
          ],
        },
        {
          id: `VR-${config.id}-03`,
          criterionRefs: [`AC-${config.id}-03`],
          role: 'Functional QA',
          title: 'Check disabled, loading, trigger, or form boundaries',
          cases: [
            {
              id: `VR-${config.id}-03A`,
              criterionRefs: [`AC-${config.id}-03`],
              title: 'Attempt the documented negative path',
              steps: [
                'Identify the disabled, loading, menu-trigger, or form behavior shown by this example.',
                'Attempt the action that should be blocked or should produce the documented relationship.',
                'Inspect the visible state, status message, menu state, or form result.',
              ],
              expected:
                'The control only performs the documented action, exposes its state, and does not cause duplicate submission or an undisclosed navigation.',
            },
          ],
        },
        {
          id: `VR-${config.id}-04`,
          criterionRefs: [`AC-${config.id}-04`],
          role: 'Responsive QA',
          title: 'Check labels and focus at boundaries',
          cases: [
            {
              id: `VR-${config.id}-04A`,
              criterionRefs: [`AC-${config.id}-04`],
              title: 'Inspect narrow and enlarged presentation',
              steps: [
                'Set a narrow viewport and increase text size or browser zoom.',
                'Tab to every control and inspect the complete label, icon, and focus indicator.',
                'Check for clipping, overlap, or unexpected horizontal scrolling.',
              ],
              expected:
                'The action remains understandable, operable, and visibly focused; icon-only controls remain named and no content is clipped.',
            },
          ],
        },
      ],
    },
  }
}
/**
 * Button guide page.
 *
 * Teaches action semantics, hierarchy, states, icons, loading, form submission,
 * and menu triggers using the production Button and LinkButton primitives.
 */
function ComponentsButtonsPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/button"
      tabActiveHref="/components/interaction"
      sidebarNav={interactionSidebarLinks}
      sidebarNavLabel="Interaction"
      sidebarAriaLabel="Interaction components"
    >
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby="buttons-heading">
          <h1 id="buttons-heading" className="text-4xl font-semibold tracking-tight">
            Button
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Use Button when someone is asking the page to do something. The label, visual emphasis,
            and state should help people understand what will happen before they activate it.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="buttons-what-heading">
          <h2 id="buttons-what-heading" className="text-2xl font-semibold tracking-tight">
            What is it?
          </h2>
          <p className="leading-7 text-muted-foreground">
            A button is an interactive control that performs an action in the current context:
            saving, opening, applying, submitting, or removing something. Use a real link when the
            user is going to another destination. The Button primitive supplies consistent focus,
            disabled, size, and visual-variant behavior while the product team supplies the label
            and action.
          </p>
          <TryIt>
            Move to Save draft with the keyboard. Confirm that its focus indicator is visible before
            activating the action.
          </TryIt>
          <div className="rounded-lg border p-5 sm:p-6">
            <div className="space-y-3">
              <h3 className="text-base font-medium">Save a draft</h3>
              <p className="text-sm text-muted-foreground">
                A basic action button keeps the next step clear.
              </p>
              <Button type="button">Save draft</Button>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="buttons-use-heading">
          <div className="space-y-5">
            <h2 id="buttons-use-heading" className="text-2xl font-semibold tracking-tight">
              When to use it
            </h2>
            <p className="leading-7 text-muted-foreground">
              Use a button for an immediate action that changes state, submits information, opens a
              menu, or starts a task without changing the destination.
            </p>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Choose a prominent style for the primary action in a clear task.</li>
              <li>Use a quieter style for supporting actions that should remain available.</li>
              <li>Use a destructive style only when the consequence is meaningful and clear.</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 id="buttons-not-heading" className="text-2xl font-semibold tracking-tight">
              When not to use it
            </h2>
            <p className="leading-7 text-muted-foreground">
              Do not use button styling for navigation. A control that takes someone to a new route
              should be an anchor or LinkButton, even when it is styled like a button.
            </p>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Do not use a button when a plain text link is sufficient.</li>
              <li>Do not use a destructive style for routine or reversible actions.</li>
              <li>Do not make a whole card or unrelated region act like one giant button.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-5" aria-labelledby="buttons-design-heading">
          <h2 id="buttons-design-heading" className="text-2xl font-semibold tracking-tight">
            Design considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Give each action one clear purpose and start the label with a specific verb.</li>
            <li>Use the visual hierarchy to show priority, not to make every action prominent.</li>
            <li>Keep related actions together and place the primary action consistently.</li>
            <li>
              Use the same label before and after an action unless the state change genuinely needs
              different wording.
            </li>
            <li>
              Do not use an icon, color, or shape as the only explanation of what will happen.
            </li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="buttons-accessibility-heading">
          <h2 id="buttons-accessibility-heading" className="text-2xl font-semibold tracking-tight">
            Accessibility considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Use a native button for an action and a native anchor for navigation.</li>
            <li>Give every button an accessible name; icon-only buttons need an explicit label.</li>
            <li>
              Keep focus visible, make the control keyboard operable, and do not communicate state
              by color alone.
            </li>
            <li>
              Use <code>type="button"</code> for non-submit controls inside forms and{' '}
              <code>type="submit"</code> only for the form’s submission action.
            </li>
            <li>
              When loading, expose progress in text or an accessible status and prevent duplicate
              activation without removing the action’s meaning.
            </li>
            <li>
              Use a disabled state only when the action is unavailable; do not use it as a
              substitute for an explanation or read-only content.
            </li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="buttons-responsive-heading">
          <h2 id="buttons-responsive-heading" className="text-2xl font-semibold tracking-tight">
            Responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">
            Buttons can sit beside one another when their labels remain readable and the row remains
            easy to scan. On narrow screens, let actions wrap or stack rather than shrinking text or
            creating a horizontal scroll area.
          </p>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Keep the primary action first in reading and focus order.</li>
            <li>
              When actions stack on mobile, preserve their priority and keep the full label visible;
              do not rely on position or color alone.
            </li>
            <li>
              Preserve readable labels and comfortable touch targets at narrow widths and 200% zoom.
            </li>
            <li>
              Stack competing actions when side-by-side placement makes their hierarchy unclear.
            </li>
            <li>
              Keep icon-only controls large enough to operate and pair them with a tooltip or nearby
              visible explanation when the action is not obvious.
            </li>
          </ul>
        </section>

        <section className="space-y-8" aria-labelledby="buttons-examples-heading">
          <div className="space-y-2">
            <h2 id="buttons-examples-heading" className="text-2xl font-semibold tracking-tight">
              Examples and variations
            </h2>
            <p className="leading-7 text-muted-foreground">
              Compare the visual and semantic choices below. Each example changes one meaningful
              decision so teams can choose a style, size, state, or interaction model without
              treating every Button as interchangeable.
            </p>
          </div>

          <div className="space-y-8">
            <ExampleVariation
              title="Styles and hierarchy"
              summary="Use the variant that matches the action’s priority and consequence."
              tryIt="Identify the one primary action, then check that the quieter styles do not compete with it."
              exampleClassName="p-5 sm:p-6"
              supplemental={makeButtonSupplemental({
                id: 'STYLES',
                explanation:
                  'Use visual emphasis to communicate priority and consequence. Choose the least prominent style that still makes the action clear, and reserve destructive for irreversible or high-consequence actions.',
                doItems: [
                  'Use one clear primary style for the main action.',
                  'Use supporting variants to reduce emphasis without hiding available actions.',
                  'Reserve destructive for actions such as deleting or removing data.',
                ],
                dontItems: [
                  'Do not make every button in a group look equally primary.',
                  'Do not use destructive to attract attention to an ordinary action.',
                  'Do not use link styling when the action needs strong prominence or a large target.',
                ],
                source: `<div className="flex flex-wrap items-center gap-3">
  <Button type="button">Default</Button>
  <Button type="button" variant="secondary">Secondary</Button>
  <Button type="button" variant="outline">Outline</Button>
  <Button type="button" variant="ghost">Ghost</Button>
  <Button type="button" variant="destructive">Delete</Button>
  <Button type="button" variant="link">View details</Button>
</div>`,
                html: `<div class="flex flex-wrap items-center gap-3">
  <button data-slot="button" data-variant="default" data-size="default" type="button">Default</button>
  <button data-slot="button" data-variant="secondary" data-size="default" type="button">Secondary</button>
  <button data-slot="button" data-variant="outline" data-size="default" type="button">Outline</button>
  <button data-slot="button" data-variant="ghost" data-size="default" type="button">Ghost</button>
  <button data-slot="button" data-variant="destructive" data-size="default" type="button">Delete</button>
  <button data-slot="button" data-variant="link" data-size="default" type="button">View details</button>
</div>`,
                requirements: [
                  'The example must show distinct Button variants for primary, supporting, low-emphasis, destructive, and link-like actions.',
                  'The visual hierarchy must make the primary action distinguishable from supporting actions.',
                ],
                expected:
                  'each variant communicates a distinct level of emphasis while every control remains a named button',
              })}
            >
              <div className="flex flex-wrap items-center gap-3">
                <Button type="button">Default</Button>
                <Button type="button" variant="secondary">
                  Secondary
                </Button>
                <Button type="button" variant="outline">
                  Outline
                </Button>
                <Button type="button" variant="ghost">
                  Ghost
                </Button>
                <Button type="button" variant="destructive">
                  Delete
                </Button>
                <Button type="button" variant="link">
                  View details
                </Button>
              </div>
            </ExampleVariation>

            <ExampleVariation
              title="Sizes"
              summary="Choose a size that fits the density and importance of the surrounding task."
              tryIt="Resize the viewport and confirm that each label remains readable without changing the action’s meaning."
              exampleClassName="p-5 sm:p-6"
              supplemental={makeButtonSupplemental({
                id: 'SIZES',
                explanation:
                  'Use the default size for most actions, a smaller size for compact supporting controls, and a larger size only when the action needs extra prominence or touch comfort.',
                doItems: [
                  'Use one size consistently within a related action group.',
                  'Use the small size for dense supporting controls, not essential mobile actions.',
                  'Choose a larger target when the action needs extra prominence or touch comfort.',
                ],
                dontItems: [
                  'Do not use size alone to communicate priority; use the variant as well.',
                  'Do not shrink text until labels become ambiguous or hard to tap.',
                  'Do not mix arbitrary sizes without a clear layout reason.',
                ],
                source: `<div className="flex flex-wrap items-center gap-3">
  <Button type="button" size="sm">Small</Button>
  <Button type="button">Default</Button>
  <Button type="button" size="lg">Large</Button>
</div>`,
                html: `<div class="flex flex-wrap items-center gap-3">
  <button data-slot="button" data-variant="default" data-size="sm" type="button">Small</button>
  <button data-slot="button" data-variant="default" data-size="default" type="button">Default</button>
  <button data-slot="button" data-variant="default" data-size="lg" type="button">Large</button>
</div>`,
                requirements: [
                  'The example must provide small, default, and large Button sizes.',
                  'Each size must preserve a readable label and operable target.',
                ],
                expected:
                  'all three sizes remain readable and operable while their density differences are clear',
              })}
            >
              <div className="flex flex-wrap items-center gap-3">
                <Button type="button" size="sm">
                  Small
                </Button>
                <Button type="button">Default</Button>
                <Button type="button" size="lg">
                  Large
                </Button>
              </div>
            </ExampleVariation>

            <ExampleVariation
              title="Icon with text and icon only"
              summary="Use icons to reinforce a visible label or to support a genuinely familiar icon-only action."
              tryIt="Tab to each control and confirm that the icon-only buttons still have useful accessible names."
              exampleClassName="p-5 sm:p-6"
              supplemental={makeButtonSupplemental({
                id: 'ICONS',
                explanation:
                  'A visible label is the clearest name for most actions. An icon-only Button can work for a familiar, repeated action when its accessible name is explicit and its meaning is clear from context.',
                doItems: [
                  'Use an icon with text when the action may be unfamiliar or consequential.',
                  'Give icon-only buttons an aria-label that describes the action, not the icon.',
                  'Keep icon and label treatment consistent across related controls.',
                ],
                dontItems: [
                  'Do not remove a useful label merely to save horizontal space.',
                  'Do not use an unfamiliar icon as the only signifier for an important action.',
                  'Do not create icon-only controls without an accessible name.',
                ],
                source: `<div className="flex flex-wrap items-center gap-3">
  <Button type="button"><MousePointerClick />Open interaction guide</Button>
  <Button type="button" size="icon" aria-label="Open interaction guide"><MousePointerClick /></Button>
  <LinkButton href="/components/card" variant="ghost" size="icon" aria-label="Read the Card guide"><MousePointerClick /></LinkButton>
</div>`,
                html: `<div class="flex flex-wrap items-center gap-3">
  <button data-slot="button" type="button"><svg aria-hidden="true"></svg>Open interaction guide</button>
  <button data-slot="button" type="button" aria-label="Open interaction guide"><svg aria-hidden="true"></svg></button>
  <a data-slot="button" href="/components/card" aria-label="Read the Card guide"><svg aria-hidden="true"></svg></a>
</div>`,
                requirements: [
                  'The example must show a labeled Button, an icon-only Button, and an icon-only LinkButton.',
                  'Each icon-only control must expose an accessible name that describes its action.',
                ],
                expected:
                  'labeled and icon-only controls remain distinguishable and every icon-only control has a useful accessible name',
              })}
            >
              <div className="flex flex-wrap items-center gap-3">
                <Button type="button">
                  <MousePointerClick />
                  Open interaction guide
                </Button>
                <Button type="button" size="icon" aria-label="Open interaction guide">
                  <MousePointerClick />
                </Button>
                <LinkButton
                  href="/components/card"
                  variant="ghost"
                  size="icon"
                  aria-label="Read the Card guide"
                >
                  <MousePointerClick />
                </LinkButton>
              </div>
            </ExampleVariation>

            <ExampleVariation
              title="Loading with text and spinner"
              summary="Show progress without making the user guess whether an action was accepted."
              tryIt="Compare both loading treatments and confirm that progress is communicated without relying on motion alone."
              exampleClassName="p-5 sm:p-6"
              supplemental={makeButtonSupplemental({
                id: 'LOADING',
                explanation:
                  'Text such as “Saving…” keeps the state understandable, while a spinner reinforces that work is in progress. Keep the accessible name meaningful and prevent duplicate activation while work finishes.',
                doItems: [
                  'Use a text label when the action or wait state needs extra clarity.',
                  'Use a spinner as supporting feedback and respect reduced-motion preferences.',
                  'Disable duplicate activation while the request is in progress.',
                ],
                dontItems: [
                  'Do not replace a consequential label with an unexplained spinner.',
                  'Do not leave a control looking active while it ignores repeated activation.',
                  'Do not use loading as a permanent substitute for unavailable or read-only state.',
                ],
                source: `<div className="flex flex-wrap items-center gap-3">
  <Button type="button" isDisabled aria-busy="true">Saving…</Button>
  <Button type="button" isDisabled aria-busy="true" aria-label="Saving"><LoaderCircle className="animate-spin" aria-hidden="true" /></Button>
</div>`,
                html: `<div class="flex flex-wrap items-center gap-3">
  <button data-slot="button" type="button" disabled aria-busy="true">Saving…</button>
  <button data-slot="button" type="button" disabled aria-busy="true" aria-label="Saving"><svg aria-hidden="true" class="animate-spin"></svg></button>
</div>`,
                requirements: [
                  'The example must provide a text loading state and a spinner-supported loading state.',
                  'Loading controls must prevent duplicate activation and retain understandable names.',
                ],
                expected:
                  'both loading treatments communicate progress, remain named, and are unavailable for duplicate activation',
              })}
            >
              <div className="flex flex-wrap items-center gap-3">
                <Button type="button" isDisabled aria-busy="true">
                  Saving…
                </Button>
                <Button type="button" isDisabled aria-busy="true" aria-label="Saving">
                  <LoaderCircle className="animate-spin" aria-hidden="true" />
                </Button>
              </div>
            </ExampleVariation>

            <ExampleVariation
              title="Form submission"
              summary="Use submit semantics for the action that sends the form, and keep other controls from submitting accidentally."
              tryIt="Submit the form with the keyboard and confirm that “Changes saved.” appears without leaving the page."
              exampleClassName="p-5 sm:p-6"
              supplemental={makeButtonSupplemental({
                id: 'FORM',
                explanation:
                  'Inside a form, declare each Button’s role so the browser and assistive technology know what it does. The submit button sends the form; other controls explicitly opt out of submission.',
                doItems: [
                  'Use type=submit for the action that sends the form.',
                  'Use type=button for cancel, reset, help, or other non-submit controls.',
                  'Use an explicit label that describes the result, such as “Save changes”.',
                ],
                dontItems: [
                  'Do not use a generic Submit label when the outcome can be named more clearly.',
                  'Do not let cancel or help controls submit the form accidentally.',
                  'Do not remove the submit action’s name while showing progress.',
                ],
                source: `const [formStatus, setFormStatus] = useState('')

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()
  setFormStatus('Changes saved.')
}

<form onSubmit={handleSubmit}>
  <Button type="submit">Save changes</Button>
  <Button type="button" variant="outline">Cancel</Button>
  <p aria-live="polite">{formStatus}</p>
</form>`,
                html: `<form>
  <button data-slot="button" type="submit">Save changes</button>
  <button data-slot="button" data-variant="outline" type="button">Cancel</button>
  <p aria-live="polite">Changes saved.</p>
</form>`,
                requirements: [
                  'The example must use type=submit for Save changes and type=button for Cancel.',
                  'A successful submission must expose Changes saved. through a polite status.',
                ],
                expected:
                  'Save changes submits the form and exposes the polite status while Cancel does not submit',
              })}
            >
              <ButtonFormExample />
            </ExampleVariation>

            <ExampleVariation
              title="Menu or dropdown trigger"
              summary="A menu trigger is still a button: it opens a related set of choices rather than performing one immediate action."
              tryIt="Open the menu, move through items with the keyboard, press Escape, and confirm focus returns to the trigger."
              exampleClassName="p-5 sm:p-6"
              supplemental={makeButtonSupplemental({
                id: 'MENU',
                explanation:
                  'Use a real menu trigger when several related commands need to share one control. The trigger exposes its expanded state, while the menu primitive owns keyboard navigation, Escape, focus movement, and focus restoration.',
                doItems: [
                  'Use a menu when several related commands need one trigger.',
                  'Keep the trigger label focused on the group of commands it opens.',
                  'Use the production menu primitive for keyboard and focus behavior.',
                ],
                dontItems: [
                  'Do not use a menu to hide one frequently needed primary action.',
                  'Do not make a menu trigger look like a navigation link without its expanded state.',
                  'Do not claim a static visual menu is interactive unless open and dismissal behavior exists.',
                ],
                source: `<DropdownMenuTrigger>
  <Pressable>
    <Button type="button" variant="outline" aria-haspopup="menu">More actions</Button>
  </Pressable>
  <DropdownMenu>
    <DropdownMenuItem>Duplicate</DropdownMenuItem>
    <DropdownMenuItem>Archive</DropdownMenuItem>
    <DropdownMenuItem>Delete</DropdownMenuItem>
  </DropdownMenu>
</DropdownMenuTrigger>`,
                html: `<button data-slot="button" data-variant="outline" type="button" aria-haspopup="menu" aria-expanded="false">More actions</button>
<div role="menu" hidden>
  <div role="menuitem">Duplicate</div>
  <div role="menuitem">Archive</div>
  <div role="menuitem">Delete</div>
</div>`,
                requirements: [
                  'The example must expose a named menu trigger with an expanded state.',
                  'The menu must provide Duplicate, Archive, and Delete choices through the production menu primitive.',
                ],
                expected:
                  'the trigger opens the menu, exposes its expanded state, supports keyboard movement, and restores focus after Escape',
              })}
            >
              <div className="flex flex-wrap items-center gap-3">
                <DropdownMenuTrigger>
                  <Pressable>
                    <Button type="button" variant="outline" aria-haspopup="menu">
                      More actions
                    </Button>
                  </Pressable>
                  <DropdownMenu>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem>Archive</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenu>
                </DropdownMenuTrigger>
              </div>
            </ExampleVariation>
          </div>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsButtonsPage }
