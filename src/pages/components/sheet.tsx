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

function sheetSupplemental(example: {
  explanation: string
  source: string
  html: string
  expected: string
}) {
  return {
    tabLayout: 'requirements' as const,
    guidance: {
      explanation: example.explanation,
      considerations: [
        'Use the production Sheet primitive so dismissal, focus management, overlay behavior, and responsive placement remain consistent.',
        'Give every sheet a meaningful title. Add a description when the panel needs more context than its title provides.',
      ],
      doItems: [
        'Open the sheet from a clearly named button that describes the content or task inside it.',
        'Keep the panel focused on one short task or related group of content.',
        'Test Escape, overlay dismissal, keyboard focus, and narrow-width layout.',
      ],
      dontItems: [
        'Do not use a Sheet when a visible page section or ordinary navigation link would be clearer.',
        'Do not remove every visible dismissal path without documenting how people close the panel.',
        'Do not place essential content only inside a sheet when it should be visible in the page flow.',
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
          description: 'Owns the relationship between the opening button and the sheet content.',
        },
        {
          name: 'side',
          type: "'top' | 'right' | 'bottom' | 'left'",
          description: 'Controls which edge of the viewport the sheet enters from.',
        },
        {
          name: 'showCloseButton',
          type: 'boolean',
          description:
            'Controls the built-in close button. Keep another documented dismissal path when it is false.',
        },
      ],
      attributes: [
        {
          name: 'role="dialog" / aria-labelledby',
          type: 'semantic relationship',
          description:
            'Names the modal sheet from its SheetTitle so assistive technology can identify it.',
        },
        {
          name: 'data-side / data-slot',
          type: 'styling and inspection hooks',
          description:
            'Expose the selected placement and production component boundaries; preserve semantic attributes separately from these styling hooks.',
        },
      ],
      notes:
        'The rendered HTML is representative of the production structure. React Aria-generated IDs can differ between renders.',
    },
    requirements: {
      userStory:
        'As a product team member, I want a Sheet to present focused content in an accessible overlay so that people can complete a short task without losing page context.',
      groups: [
        {
          id: 'BR-SHEET',
          title: 'Business requirements',
          items: [
            'The sheet must communicate what content or task it contains before activation.',
            'The selected side must support the intended content and responsive context.',
          ],
        },
        {
          id: 'FR-SHEET',
          title: 'Functional requirements',
          items: [
            'The trigger must open the associated sheet and expose its content.',
            'The sheet must close through the documented dismissal behavior and return focus to the trigger.',
            example.expected,
          ],
        },
        {
          id: 'A11Y-SHEET',
          title: 'Accessibility requirements',
          items: [
            'The sheet must have a meaningful accessible name from SheetTitle.',
            'Keyboard users must be able to reach the sheet, dismiss it, and see a visible focus indicator.',
            'The overlay must prevent interaction with the background while the modal sheet is open.',
          ],
        },
        {
          id: 'RESP-SHEET',
          title: 'Responsive requirements',
          items: [
            'The sheet must remain readable and usable at narrow widths without clipping its content or controls.',
            'Content must preserve a logical reading order as the sheet changes size or side.',
          ],
        },
      ],
      acceptanceCriteria: [
        {
          id: 'AC-SHEET-01',
          requirementRefs: ['BR-SHEET', 'FR-SHEET'],
          given: 'the Sheet example is rendered',
          when: 'a person activates the named trigger',
          then: 'the associated sheet opens from the documented side and shows its title and content',
          and: [
            example.expected,
            'the page behind the sheet cannot be operated while the modal is open',
          ],
        },
        {
          id: 'AC-SHEET-02',
          requirementRefs: ['A11Y-SHEET'],
          given: 'the sheet is open',
          when: 'a person navigates with the keyboard or presses Escape',
          then: 'focus remains within the modal interaction, Escape dismisses the sheet, and focus returns to the trigger',
          and: ['the sheet has one clear accessible name and visible focus remains available'],
        },
        {
          id: 'AC-SHEET-03',
          requirementRefs: ['RESP-SHEET'],
          given: 'the viewport is narrow or the content is longer than the available height',
          when: 'the sheet is opened and reviewed',
          then: 'the content remains readable, controls remain reachable, and no meaningful content is clipped',
        },
      ],
    },
    verification: {
      scenarios: [
        {
          id: 'VR-SHEET-01',
          role: 'Functional QA',
          title: 'Open and dismiss the Sheet',
          cases: [
            {
              id: 'VR-SHEET-01A',
              title: 'Use the trigger and dismissal paths',
              steps: [
                'Activate the named trigger with a pointer.',
                'Confirm the sheet opens from the documented side and exposes its title and content.',
                'Press Escape, then activate the trigger again and dismiss the sheet by clicking the overlay when that path is supported.',
              ],
              expected:
                'The sheet opens and closes reliably, the background is unavailable while open, and focus returns to the trigger after dismissal.',
            },
          ],
        },
        {
          id: 'VR-SHEET-02',
          role: 'Accessibility QA',
          title: 'Navigate the Sheet with the keyboard',
          cases: [
            {
              id: 'VR-SHEET-02A',
              title: 'Inspect focus, name, and Escape behavior',
              steps: [
                'Tab to the trigger and inspect its accessible name and visible focus indicator.',
                'Open the sheet, tab through its controls, and inspect the dialog name.',
                'Press Escape and inspect the restored focus.',
              ],
              expected:
                'The trigger and sheet controls are keyboard operable, the sheet has one useful accessible name, focus is visible, and focus returns to the trigger.',
            },
          ],
        },
        {
          id: 'VR-SHEET-03',
          role: 'Responsive QA',
          title: 'Review the Sheet at narrow widths',
          cases: [
            {
              id: 'VR-SHEET-03A',
              title: 'Check sizing and content access',
              steps: [
                'Open the Sheet at the narrowest supported viewport.',
                'Review the title, body copy, controls, spacing, and dismissal path.',
                'Scroll within the sheet if its content exceeds the available height.',
              ],
              expected:
                'The panel fits the viewport, content remains readable, controls do not overlap or clip, and the dismissal path remains available.',
            },
          ],
        },
      ],
    },
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
              explanation:
                'The basic Sheet establishes the default modal relationship: a named trigger opens focused content, and the production primitive supplies a visible close button and dismissal behavior.',
              source: `<SheetTrigger>\n  <Button>Open account details</Button>\n  <Sheet>\n    <SheetHeader>\n      <SheetTitle>Account details</SheetTitle>\n      <SheetDescription>Review account information.</SheetDescription>\n    </SheetHeader>\n  </Sheet>\n</SheetTrigger>`,
              html: `<div role="dialog" aria-modal="true" aria-labelledby="sheet-title">\n  <h2 id="sheet-title">Account details</h2>\n  <div>Review the account information without leaving this page.</div>\n  <button aria-label="Close">…</button>\n</div>`,
              expected:
                'the panel presents account details without navigating away from the current page',
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
              explanation:
                'Side placement is a consumer decision. Keep the content and reading order in mind: a right-side panel often suits details or navigation, while top and bottom panels can suit compact actions or notices.',
              source: `const sides = ['top', 'right', 'bottom', 'left'] as const\n\n{sides.map((side) => (\n  <SheetTrigger key={side}>\n    <Button variant="outline">{side}</Button>\n    <Sheet side={side}>…</Sheet>\n  </SheetTrigger>\n))}`,
              html: `<div role="dialog" data-side="right" aria-modal="true">…</div>`,
              expected: 'each labelled trigger opens a sheet from the matching viewport edge',
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
              explanation:
                'A mobile menu may omit the built-in close button when its dismissal behavior is obvious and tested. This is a deliberate exception, not a reason to remove dismissal affordances from other sheets.',
              source: `<Sheet side="right" showCloseButton={false}>\n  <SheetHeader>\n    <SheetTitle>Site navigation</SheetTitle>\n  </SheetHeader>\n  <nav aria-label="Mobile site navigation">…</nav>\n</Sheet>`,
              html: `<div role="dialog" aria-modal="true" aria-labelledby="menu-title">\n  <h2 id="menu-title">Site navigation</h2>\n  <nav aria-label="Mobile site navigation">…</nav>\n</div>`,
              expected:
                'the mobile menu provides usable navigation and remains dismissible through Escape and the overlay even without a close button',
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
