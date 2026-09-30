/**
 * Sheet guide page.
 *
 * Teaches the production Sheet overlay through a basic panel, side placement,
 * and an intentionally close-button-free composition suitable for a mobile menu.
 */

import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { ExampleVariation } from '@/components/layout/example-variation'
import { TryIt } from '@/components/layout/try-it'
import {
  Sheet,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { interactionSidebarLinks } from '@/config/component-navigation'

type SheetGuideKind = 'basic' | 'sides' | 'no-close'

type SheetSupplementalInput = {
  kind: SheetGuideKind
  explanation: string
  source: string
  html: string
}

function sheetSupplemental(example: SheetSupplementalInput) {
  const basic = example.kind === 'basic'
  const sides = example.kind === 'sides'

  const functional = basic
    ? [
        'Activating Open account details opens one right-side modal sheet with the heading Account details and the description Review the account information without leaving this page.',
        'The open sheet shows Your account is connected and ready to use. and a visible Close button.',
        'Activating Close closes the sheet and returns focus to Open account details without navigating away.',
      ]
    : sides
      ? [
          'Activating top opens a sheet attached to the top edge with data-side="top", heading top sheet, and description This panel enters from the top edge.',
          'Activating right opens a sheet attached to the right edge with data-side="right", heading right sheet, and description This panel enters from the right edge.',
          'Activating bottom opens a sheet attached to the bottom edge with data-side="bottom", heading bottom sheet, and description This panel enters from the bottom edge.',
          'Activating left opens a sheet attached to the left edge with data-side="left", heading left sheet, and description This panel enters from the left edge.',
          'Each open side sheet shows Choose the side that matches the task, content shape, and responsive behavior. and can be dismissed before another side is tested.',
        ]
      : [
          'Activating Open mobile menu opens one right-side modal sheet with data-side="right", heading Site navigation, and description Move between the main sections of this site.',
          'The open sheet does not render the built-in Sheet close button because showCloseButton is false.',
          'The open sheet exposes a navigation landmark named Mobile site navigation with links to /components/interaction, /components/user-interface, and /components/forms labelled Interaction, User Interface, and Forms.',
          'Activating a menu link navigates to its exact configured destination and closes the modal sheet.',
          'The open sheet shows Use Escape or the overlay to close this menu.',
        ]

  const criteria = basic
    ? [
        {
          id: 'AC-SHEET-BASIC-01',
          requirementRefs: ['FR-SHEET-BASIC'],
          given: 'Open account details is visible',
          when: 'a person activates it',
          then: 'a modal opens from the right edge with data-side="right" and shows Account details, its description, and its body text',
          and: [
            'role="dialog" and aria-modal="true" are present',
            'the page behind the sheet cannot be activated',
          ],
        },
        {
          id: 'AC-SHEET-BASIC-02',
          requirementRefs: ['A11Y-SHEET-BASIC'],
          given: 'the Account details sheet is open',
          when: 'a person presses Tab repeatedly',
          then: 'focus remains in the sheet and reaches the visible Close button with a visible focus indicator',
          and: ['the dialog is named by Account details'],
        },
        {
          id: 'AC-SHEET-BASIC-03',
          requirementRefs: ['FR-SHEET-BASIC', 'A11Y-SHEET-BASIC'],
          given: 'the Account details sheet is open',
          when: 'a person presses Escape or activates Close',
          then: 'the sheet closes and focus returns to Open account details',
          and: ['the browser remains on the same page'],
        },
        {
          id: 'AC-SHEET-BASIC-04',
          requirementRefs: ['RESP-SHEET-BASIC'],
          given: 'the viewport is at the narrowest supported width',
          when: 'a person opens Account details',
          then: 'the heading, description, body text, and Close remain readable and reachable without horizontal clipping',
        },
      ]
    : sides
      ? [
          {
            id: 'AC-SHEET-SIDES-01',
            requirementRefs: ['FR-SHEET-SIDES'],
            given: 'top, right, bottom, and left are visible',
            when: 'a person activates each button one at a time',
            then: 'top opens at the top edge, right at the right edge, bottom at the bottom edge, and left at the left edge',
            and: [
              'each open sheet exposes the matching data-side value',
              'each heading is the button label followed by sheet',
              'each description names the matching edge',
            ],
          },
          {
            id: 'AC-SHEET-SIDES-02',
            requirementRefs: ['FR-SHEET-SIDES', 'A11Y-SHEET-SIDES'],
            given: 'any side sheet is open',
            when: 'a person reads the panel and presses Escape',
            then: 'the panel shows the exact body text, closes, and returns focus to the button that opened it',
          },
          {
            id: 'AC-SHEET-SIDES-03',
            requirementRefs: ['A11Y-SHEET-SIDES'],
            given: 'any side sheet is open',
            when: 'a person uses keyboard navigation or assistive technology',
            then: 'the panel has role="dialog", aria-modal="true", one accessible name from its heading, and visible focus',
          },
          {
            id: 'AC-SHEET-SIDES-04',
            requirementRefs: ['RESP-SHEET-SIDES'],
            given: 'the viewport is narrow',
            when: 'each side sheet is opened',
            then: 'the panel stays inside the viewport and its heading, description, and body text are not clipped',
          },
        ]
      : [
          {
            id: 'AC-SHEET-NOCLOSE-01',
            requirementRefs: ['FR-SHEET-NOCLOSE'],
            given: 'Open mobile menu is visible',
            when: 'a person activates it',
            then: 'a right-side modal opens with data-side="right", shows Site navigation and its description, and does not render a built-in close button',
            and: ['the navigation landmark is named Mobile site navigation'],
          },
          {
            id: 'AC-SHEET-NOCLOSE-02',
            requirementRefs: ['FR-SHEET-NOCLOSE'],
            given: 'the mobile menu is open',
            when: 'a person activates Interaction, User Interface, or Forms',
            then: 'the consuming application navigates to /components/interaction, /components/user-interface, or /components/forms respectively and the sheet closes',
          },
          {
            id: 'AC-SHEET-NOCLOSE-03',
            requirementRefs: ['A11Y-SHEET-NOCLOSE'],
            given: 'the mobile menu is open',
            when: 'a person tabs through the links and presses Escape',
            then: 'all links receive visible focus, Escape closes the sheet, and focus returns to Open mobile menu',
            and: ['Use Escape or the overlay to close this menu. is visible'],
          },
          {
            id: 'AC-SHEET-NOCLOSE-04',
            requirementRefs: ['RESP-SHEET-NOCLOSE'],
            given: 'the viewport is narrow',
            when: 'the mobile menu is opened',
            then: 'all three links remain readable and reachable without horizontal clipping or overlap',
          },
        ]

  const verification = basic
    ? [
        {
          id: 'VR-SHEET-BASIC-01',
          role: 'Functional QA',
          title: 'Verify the right-side Account details panel',
          cases: [
            {
              id: 'VR-SHEET-BASIC-01A',
              title: 'Open and inspect the panel',
              steps: [
                'Open /components/sheet.',
                'Activate Open account details.',
                'Confirm data-side="right", role="dialog", Account details, the description, the body text, and Close.',
                'Press Escape and confirm the sheet closes.',
              ],
              expected:
                'The right-side modal contains the exact documented content and Escape closes it.',
            },
          ],
        },
        {
          id: 'VR-SHEET-BASIC-02',
          role: 'Accessibility QA',
          title: 'Verify basic focus restoration',
          cases: [
            {
              id: 'VR-SHEET-BASIC-02A',
              title: 'Test keyboard operation',
              steps: [
                'Tab to Open account details and inspect visible focus.',
                'Open the sheet and Tab to Close.',
                'Press Escape and inspect the active element.',
                'Open again, activate Close, and inspect the active element.',
              ],
              expected:
                'The dialog is named Account details, focus is visible, both dismissal paths work, and focus returns to Open account details.',
            },
          ],
        },
        {
          id: 'VR-SHEET-BASIC-03',
          role: 'Responsive QA',
          title: 'Verify the narrowest basic layout',
          cases: [
            {
              id: 'VR-SHEET-BASIC-03A',
              title: 'Check content access',
              steps: [
                'Set the narrowest supported viewport.',
                'Open Account details.',
                'Review the heading, description, body text, and Close.',
              ],
              expected:
                'All content is readable and Close is reachable without horizontal clipping.',
            },
          ],
        },
      ]
    : sides
      ? [
          {
            id: 'VR-SHEET-SIDES-01',
            role: 'Functional QA',
            title: 'Verify every side placement',
            cases: (['top', 'right', 'bottom', 'left'] as const).map((side) => ({
              id: `VR-SHEET-SIDES-01-${side}`,
              title: `Verify ${side} placement`,
              steps: [
                `Activate ${side}.`,
                `Confirm the panel is attached to the ${side} edge and has data-side="${side}".`,
                `Confirm the heading is ${side} sheet and the description is This panel enters from the ${side} edge.`,
                'Press Escape.',
              ],
              expected: `The ${side} sheet opens at the ${side} edge, shows the exact heading and description, and Escape closes it.`,
            })),
          },
          {
            id: 'VR-SHEET-SIDES-02',
            role: 'Accessibility QA',
            title: 'Verify side-sheet focus restoration',
            cases: [
              {
                id: 'VR-SHEET-SIDES-02A',
                title: 'Test every side with the keyboard',
                steps: [
                  'Activate each of top, right, bottom, and left.',
                  'Tab inside each open panel.',
                  'Press Escape and inspect the active element after each test.',
                ],
                expected:
                  'Each named dialog has visible focus and returns focus to its own opening button.',
              },
            ],
          },
        ]
      : [
          {
            id: 'VR-SHEET-NOCLOSE-01',
            role: 'Functional QA',
            title: 'Verify mobile-menu destinations',
            cases: [
              {
                id: 'VR-SHEET-NOCLOSE-01A',
                title: 'Test all three links',
                steps: [
                  'Activate Open mobile menu.',
                  'Confirm no built-in Close button is rendered.',
                  'Activate Interaction and confirm /components/interaction.',
                  'Return and repeat with User Interface, confirming /components/user-interface.',
                  'Return and repeat with Forms, confirming /components/forms.',
                ],
                expected: 'Each link navigates to its exact destination and closes the menu.',
              },
            ],
          },
          {
            id: 'VR-SHEET-NOCLOSE-02',
            role: 'Accessibility QA',
            title: 'Verify dismissal without a close button',
            cases: [
              {
                id: 'VR-SHEET-NOCLOSE-02A',
                title: 'Test Escape and overlay dismissal',
                steps: [
                  'Tab to Open mobile menu and inspect visible focus.',
                  'Open the menu and Tab to all three links.',
                  'Press Escape and inspect the active element.',
                  'Open again and activate the overlay outside the panel.',
                ],
                expected:
                  'All links receive visible focus, both dismissal paths close the menu, the dialog is named Site navigation, and focus returns to Open mobile menu.',
              },
            ],
          },
          {
            id: 'VR-SHEET-NOCLOSE-03',
            role: 'Responsive QA',
            title: 'Verify the narrow mobile menu',
            cases: [
              {
                id: 'VR-SHEET-NOCLOSE-03A',
                title: 'Check link access',
                steps: [
                  'Set the narrowest supported viewport.',
                  'Open the mobile menu.',
                  'Review all links and the dismissal instruction.',
                ],
                expected:
                  'All content remains readable, vertically ordered, and reachable without horizontal scrolling or overlap.',
              },
            ],
          },
        ]

  const requirements = basic
    ? {
        userStory:
          'As a product team member, I want Account details in a focused modal panel so that people can review it without leaving the current page.',
        groups: [
          {
            id: 'BR-SHEET-BASIC',
            title: 'Business requirements',
            items: [
              'The panel lets a person review account information without changing the current page.',
            ],
          },
          { id: 'FR-SHEET-BASIC', title: 'Functional requirements', items: functional },
          {
            id: 'A11Y-SHEET-BASIC',
            title: 'Accessibility requirements',
            items: [
              'The modal is named Account details.',
              'Keyboard users can reach Close, dismiss with Escape, and regain focus on Open account details.',
            ],
          },
          {
            id: 'RESP-SHEET-BASIC',
            title: 'Responsive requirements',
            items: [
              'At the narrowest supported viewport, all Account details content and Close remain readable and reachable without horizontal clipping.',
            ],
          },
        ],
      }
    : sides
      ? {
          userStory:
            'As a product team member, I want to choose a Sheet edge deliberately so that the panel supports the content shape and reading order.',
          groups: [
            {
              id: 'BR-SHEET-SIDES',
              title: 'Business requirements',
              items: ['The guide makes the result of each side choice observable.'],
            },
            { id: 'FR-SHEET-SIDES', title: 'Functional requirements', items: functional },
            {
              id: 'A11Y-SHEET-SIDES',
              title: 'Accessibility requirements',
              items: [
                'Each side sheet is a named modal, is keyboard operable, and restores focus to its own trigger after Escape.',
              ],
            },
            {
              id: 'RESP-SHEET-SIDES',
              title: 'Responsive requirements',
              items: [
                'Each side sheet stays inside the viewport and preserves readable content at the narrowest supported width.',
              ],
            },
          ],
        }
      : {
          userStory:
            'As a product team member, I want the mobile menu to omit the built-in close button while retaining clear dismissal and navigation behavior.',
          groups: [
            {
              id: 'BR-SHEET-NOCLOSE',
              title: 'Business requirements',
              items: [
                'The menu provides the three named component destinations without requiring a visible close control.',
              ],
            },
            { id: 'FR-SHEET-NOCLOSE', title: 'Functional requirements', items: functional },
            {
              id: 'A11Y-SHEET-NOCLOSE',
              title: 'Accessibility requirements',
              items: [
                'The menu is named Site navigation, exposes a named navigation landmark, keeps links keyboard operable, and restores focus to Open mobile menu after dismissal.',
              ],
            },
            {
              id: 'RESP-SHEET-NOCLOSE',
              title: 'Responsive requirements',
              items: [
                'At the narrowest supported width, all links and the dismissal instruction remain readable and reachable without clipping or overlap.',
              ],
            },
          ],
        }

  return {
    tabLayout: 'requirements' as const,
    guidance: {
      explanation: example.explanation,
      considerations: [
        'Use the production Sheet primitive so dismissal, focus management, overlay behavior, and responsive placement remain consistent.',
        'Give every sheet a meaningful title and use a description when more context is needed.',
      ],
      doItems: [
        'Open the sheet from a clearly named button.',
        'Keep the panel focused on one short task or related group of content.',
        'Test every named side, exact destination, dismissal path, keyboard state, and narrow-width behavior demonstrated here.',
      ],
      dontItems: [
        'Do not use a Sheet when visible content or a normal link is clearer.',
        'Do not remove dismissal paths without testing the exact remaining paths.',
        'Do not leave exact sides, destinations, or expected outcomes for the tester to infer.',
      ],
    },
    code: {
      language: 'tsx',
      source: example.source,
      html: example.html,
      props: [
        {
          name: 'SheetTrigger',
          type: 'React Aria dialog trigger',
          description: 'Connects each opening button to its sheet.',
        },
        {
          name: 'side',
          type: "'top' | 'right' | 'bottom' | 'left'",
          description: 'Sets the exact viewport edge.',
        },
        {
          name: 'showCloseButton',
          type: 'boolean',
          description:
            'Controls the built-in close button; false is used by the mobile-menu variation.',
        },
      ],
      attributes: [
        {
          name: 'role="dialog" / aria-modal="true" / aria-labelledby',
          type: 'semantic relationship',
          description: 'Identifies the open modal and connects it to SheetTitle.',
        },
        {
          name: 'data-side / data-slot',
          type: 'styling and inspection hooks',
          description:
            'Expose exact placement and production boundaries; data-side is the placement hook.',
        },
      ],
      notes:
        'This is the complete open-state structure for the live variation, including triggers, overlay, dialog, heading, description, body content, links, and close behavior. React Aria IDs are shown as descriptive placeholders.',
    },
    requirements,
    acceptanceCriteria: criteria,
    verification: { scenarios: verification },
  }
}

function BasicSheetExample() {
  return (
    <SheetTrigger>
      <Button>Open account details</Button>
      <Sheet>
        <SheetHeader>
          <SheetTitle>Account details</SheetTitle>
          <SheetDescription>
            Review the account information without leaving this page.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 px-4 pb-4 text-sm leading-6 text-muted-foreground">
          Your account is connected and ready to use.
        </div>
      </Sheet>
    </SheetTrigger>
  )
}

function SheetSideExample() {
  const sides = ['top', 'right', 'bottom', 'left'] as const

  return (
    <div className="flex flex-wrap gap-3">
      {sides.map((side) => (
        <SheetTrigger key={side}>
          <Button variant="outline" className="capitalize">
            {side}
          </Button>
          <Sheet side={side}>
            <SheetHeader>
              <SheetTitle>{side} sheet</SheetTitle>
              <SheetDescription>This panel enters from the {side} edge.</SheetDescription>
            </SheetHeader>
            <div className="flex-1 px-4 pb-4 text-sm leading-6 text-muted-foreground">
              Choose the side that matches the task, content shape, and responsive behavior.
            </div>
          </Sheet>
        </SheetTrigger>
      ))}
    </div>
  )
}

function SheetWithoutCloseButtonExample() {
  return (
    <SheetTrigger>
      <Button variant="outline">Open mobile menu</Button>
      <Sheet side="right" showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>Site navigation</SheetTitle>
          <SheetDescription>Move between the main sections of this site.</SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile site navigation" className="flex flex-1 flex-col gap-1 px-4">
          <a
            href="/components/interaction"
            className="rounded-md px-3 py-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Interaction
          </a>
          <a
            href="/components/user-interface"
            className="rounded-md px-3 py-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            User Interface
          </a>
          <a
            href="/components/forms"
            className="rounded-md px-3 py-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Forms
          </a>
        </nav>
        <SheetFooter>
          <p className="text-sm text-muted-foreground">
            Use Escape or the overlay to close this menu.
          </p>
        </SheetFooter>
      </Sheet>
    </SheetTrigger>
  )
}

function ComponentsSheetPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/sheet"
      tabActiveHref="/components/interaction"
      sidebarNav={interactionSidebarLinks}
      sidebarNavLabel="Interaction components"
    >
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby="sheet-heading">
          <h1 id="sheet-heading" className="text-4xl font-semibold tracking-tight">
            Sheet
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Use Sheet to present focused content or a short task in a modal panel that enters from
            an edge of the viewport.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="sheet-what-heading">
          <h2 id="sheet-what-heading" className="text-2xl font-semibold tracking-tight">
            What is it?
          </h2>
          <p className="leading-7 text-muted-foreground">
            A Sheet is a modal overlay for content that should temporarily take focus without
            sending someone to another page. It can support a mobile menu, filters, account details,
            or a compact task. The production primitive manages the overlay, focus, Escape, and
            dismissal behavior while the consuming application supplies the content and trigger.
          </p>
          <TryIt>
            Open the Sheet, move through its controls with the keyboard, press Escape, and confirm
            focus returns to the trigger.
          </TryIt>
          <BasicSheetExample />
        </section>

        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="sheet-use-heading">
          <div className="space-y-5">
            <h2 id="sheet-use-heading" className="text-2xl font-semibold tracking-tight">
              When to use it
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>
                Keep a short task or related group of content available without changing the page.
              </li>
              <li>
                Provide mobile navigation or filters when the viewport cannot show them
                persistently.
              </li>
              <li>
                Use edge placement that matches the content and its expected reading direction.
              </li>
            </ul>
          </div>
          <div className="space-y-5" aria-labelledby="sheet-not-heading">
            <h2 id="sheet-not-heading" className="text-2xl font-semibold tracking-tight">
              When not to use it
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Do not hide essential page content or a long workflow inside a modal panel.</li>
              <li>
                Do not use a Sheet when a normal link should take someone to another destination.
              </li>
              <li>
                Do not use an unlabelled panel or remove dismissal paths without a clear reason.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-5" aria-labelledby="sheet-design-heading">
          <h2 id="sheet-design-heading" className="text-2xl font-semibold tracking-tight">
            Design considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Use a concise title that names the task or content in the panel.</li>
            <li>Keep the panel focused and make its relationship to the opening trigger clear.</li>
            <li>
              Choose a side based on content shape, reading order, and responsive behavior rather
              than preference alone.
            </li>
            <li>
              Keep the built-in close button unless the surrounding interaction provides an equally
              clear dismissal path.
            </li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="sheet-accessibility-heading">
          <h2 id="sheet-accessibility-heading" className="text-2xl font-semibold tracking-tight">
            Accessibility considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Provide one meaningful SheetTitle and use SheetDescription when additional context is
              needed.
            </li>
            <li>
              Verify focus moves into the modal, remains usable there, and returns to the trigger
              after dismissal.
            </li>
            <li>Confirm Escape and overlay dismissal work when the task allows them.</li>
            <li>Use real buttons for actions and real links for navigation inside the panel.</li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="sheet-responsive-heading">
          <h2 id="sheet-responsive-heading" className="text-2xl font-semibold tracking-tight">
            Responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">
            A side sheet uses most of the available width on small screens and a constrained width
            on larger screens. Top and bottom sheets size to their content. Test long labels, text
            zoom, scrolling, and the narrowest supported viewport so the panel does not clip
            meaningful content or controls.
          </p>
        </section>

        <section className="space-y-8" aria-labelledby="sheet-examples-heading">
          <div className="space-y-2">
            <h2 id="sheet-examples-heading" className="text-2xl font-semibold tracking-tight">
              Examples and variations
            </h2>
            <p className="leading-7 text-muted-foreground">
              These examples show the basic Sheet, edge placement, and a mobile-menu composition
              without the built-in close button.
            </p>
          </div>

          <ExampleVariation
            title="Basic"
            summary="Open a focused account-details panel from the right side using the default close button."
            tryIt="Open Account details, inspect the title and description, press Escape, and confirm focus returns to Open account details."
            exampleClassName="overflow-visible rounded-none border-0 bg-transparent p-0"
            supplemental={sheetSupplemental({
              kind: 'basic',
              explanation:
                'The basic Sheet establishes the default modal relationship: a named trigger opens focused content, and the production primitive supplies a visible close button and dismissal behavior.',
              source: `<SheetTrigger>\n  <Button>Open account details</Button>\n  <Sheet>\n    <SheetHeader>\n      <SheetTitle>Account details</SheetTitle>\n      <SheetDescription>Review account information.</SheetDescription>\n    </SheetHeader>\n  </Sheet>\n</SheetTrigger>`,
              html: `<button type="button">Open account details</button>
<div data-slot="sheet-overlay" data-state="open">
  <div data-slot="sheet-content" data-side="right" role="dialog" aria-modal="true" aria-labelledby="sheet-title" data-state="open">
    <div data-slot="sheet" tabindex="-1">
      <div data-slot="sheet-header">
        <h2 data-slot="sheet-title" id="sheet-title">Account details</h2>
        <div data-slot="sheet-description">Review the account information without leaving this page.</div>
      </div>
      <div>Your account is connected and ready to use.</div>
      <button data-slot="sheet-close" type="button" aria-label="Close">
        <svg aria-hidden="true"></svg>
        <span class="sr-only">Close</span>
      </button>
    </div>
  </div>
</div>`,
            })}
          >
            <BasicSheetExample />
          </ExampleVariation>

          <ExampleVariation
            title="Side placement"
            summary="Compare top, right, bottom, and left placement when the panel shape or task calls for a different edge."
            tryIt="Open each side variation and confirm the panel enters from the labelled edge, remains usable, and can be dismissed with Escape."
            exampleClassName="overflow-visible rounded-none border-0 bg-transparent p-0"
            supplemental={sheetSupplemental({
              kind: 'sides',
              explanation:
                'Side placement is a consumer decision. Keep the content and reading order in mind: a right-side panel often suits details or navigation, while top and bottom panels can suit compact actions or notices.',
              source: `const sides = ['top', 'right', 'bottom', 'left'] as const

{sides.map((side) => (
  <SheetTrigger key={side}>
    <Button variant="outline">{side}</Button>
    <Sheet side={side}>
      <SheetHeader>
        <SheetTitle>{side} sheet</SheetTitle>
        <SheetDescription>This panel enters from the {side} edge.</SheetDescription>
      </SheetHeader>
      <div>Choose the side that matches the task, content shape, and responsive behavior.</div>
    </Sheet>
  </SheetTrigger>
))}`,
              html: `<div class="flex flex-wrap gap-3">
  <button type="button">top</button>
  <button type="button">right</button>
  <button type="button">bottom</button>
  <button type="button">left</button>
</div>
<div data-slot="sheet-overlay" data-state="open">
  <div data-slot="sheet-content" data-side="right" role="dialog" aria-modal="true" aria-labelledby="right-sheet-title" data-state="open">
    <div data-slot="sheet" tabindex="-1">
      <div data-slot="sheet-header">
        <h2 data-slot="sheet-title" id="right-sheet-title">right sheet</h2>
        <div data-slot="sheet-description">This panel enters from the right edge.</div>
      </div>
      <div>Choose the side that matches the task, content shape, and responsive behavior.</div>
      <button data-slot="sheet-close" type="button" aria-label="Close">
        <svg aria-hidden="true"></svg>
        <span class="sr-only">Close</span>
      </button>
    </div>
  </div>
</div>
<div data-slot="sheet-overlay" data-state="open">
  <div data-slot="sheet-content" data-side="top" role="dialog" aria-modal="true" aria-labelledby="top-sheet-title" data-state="open">
    <div data-slot="sheet" tabindex="-1">
      <div data-slot="sheet-header">
        <h2 data-slot="sheet-title" id="top-sheet-title">top sheet</h2>
        <div data-slot="sheet-description">This panel enters from the top edge.</div>
      </div>
      <div>Choose the side that matches the task, content shape, and responsive behavior.</div>
      <button data-slot="sheet-close" type="button" aria-label="Close"><svg aria-hidden="true"></svg><span class="sr-only">Close</span></button>
    </div>
  </div>
</div>
<div data-slot="sheet-overlay" data-state="open">
  <div data-slot="sheet-content" data-side="bottom" role="dialog" aria-modal="true" aria-labelledby="bottom-sheet-title" data-state="open">
    <div data-slot="sheet" tabindex="-1">
      <div data-slot="sheet-header">
        <h2 data-slot="sheet-title" id="bottom-sheet-title">bottom sheet</h2>
        <div data-slot="sheet-description">This panel enters from the bottom edge.</div>
      </div>
      <div>Choose the side that matches the task, content shape, and responsive behavior.</div>
      <button data-slot="sheet-close" type="button" aria-label="Close"><svg aria-hidden="true"></svg><span class="sr-only">Close</span></button>
    </div>
  </div>
</div>
<div data-slot="sheet-overlay" data-state="open">
  <div data-slot="sheet-content" data-side="left" role="dialog" aria-modal="true" aria-labelledby="left-sheet-title" data-state="open">
    <div data-slot="sheet" tabindex="-1">
      <div data-slot="sheet-header">
        <h2 data-slot="sheet-title" id="left-sheet-title">left sheet</h2>
        <div data-slot="sheet-description">This panel enters from the left edge.</div>
      </div>
      <div>Choose the side that matches the task, content shape, and responsive behavior.</div>
      <button data-slot="sheet-close" type="button" aria-label="Close"><svg aria-hidden="true"></svg><span class="sr-only">Close</span></button>
    </div>
  </div>
</div>`,
            })}
          >
            <SheetSideExample />
          </ExampleVariation>

          <ExampleVariation
            title="No close button"
            summary="Hide the built-in close button for a mobile menu only when Escape and overlay dismissal remain clear and usable."
            tryIt="Open the mobile menu, tab through its links, then press Escape or activate the overlay. Confirm the menu closes and focus returns to Open mobile menu."
            exampleClassName="overflow-visible rounded-none border-0 bg-transparent p-0"
            supplemental={sheetSupplemental({
              kind: 'no-close',
              explanation:
                'A mobile menu may omit the built-in close button when its dismissal behavior is obvious and tested. This is a deliberate exception, not a reason to remove dismissal affordances from other sheets.',
              source: `<Sheet side="right" showCloseButton={false}>
  <SheetHeader>
    <SheetTitle>Site navigation</SheetTitle>
    <SheetDescription>Move between the main sections of this site.</SheetDescription>
  </SheetHeader>
  <nav aria-label="Mobile site navigation">
    <a href="/components/interaction">Interaction</a>
    <a href="/components/user-interface">User Interface</a>
    <a href="/components/forms">Forms</a>
  </nav>
  <SheetFooter>
    <p>Use Escape or the overlay to close this menu.</p>
  </SheetFooter>
</Sheet>`,
              html: `<button type="button">Open mobile menu</button>
<div data-slot="sheet-overlay" data-state="open">
  <div data-slot="sheet-content" data-side="right" role="dialog" aria-modal="true" aria-labelledby="menu-title" data-state="open">
    <div data-slot="sheet" tabindex="-1">
      <div data-slot="sheet-header">
        <h2 data-slot="sheet-title" id="menu-title">Site navigation</h2>
        <div data-slot="sheet-description">Move between the main sections of this site.</div>
      </div>
      <nav aria-label="Mobile site navigation">
        <a href="/components/interaction">Interaction</a>
        <a href="/components/user-interface">User Interface</a>
        <a href="/components/forms">Forms</a>
      </nav>
      <div data-slot="sheet-footer">
        <p>Use Escape or the overlay to close this menu.</p>
      </div>
    </div>
  </div>
</div>`,
            })}
          >
            <SheetWithoutCloseButtonExample />
          </ExampleVariation>
        </section>

        <section className="space-y-5" aria-labelledby="sheet-questions-heading">
          <h2 id="sheet-questions-heading" className="text-2xl font-semibold tracking-tight">
            Questions to ask
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>What short task or related content belongs in the sheet?</li>
            <li>Why is an overlay better than visible page content or a link?</li>
            <li>Which side best supports the content, reading order, and responsive layout?</li>
            <li>How will people open, dismiss, and recover focus from the sheet?</li>
            <li>
              Does the sheet remain readable and usable at narrow widths and increased text size?
            </li>
          </ul>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsSheetPage }
