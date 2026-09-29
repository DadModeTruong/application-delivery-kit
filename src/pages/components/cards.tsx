/**
 * Card guide page.
 *
 * Use this page to learn when a bounded content group helps people scan and
 * understand a page. Copy the production Card composition, not the surrounding
 * documentation shell, when adapting an example to an application.
 */

import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { ExampleVariation } from '@/components/layout/example-variation'
import { TryIt } from '@/components/layout/try-it'
import { userInterfaceSidebarLinks } from '@/config/component-navigation'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardHeader } from '@/components/ui/card'

/**
 * Card guide page.
 *
 * Teaches when a bounded content group helps people scan a page and how to
 * choose between static information, one destination, and explicit actions.
 */
function ComponentsCardsPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/card"
      tabActiveHref="/components/user-interface"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      sidebarAriaLabel="User Interface"
    >
      <div className="space-y-12">
        <section className="space-y-5" aria-labelledby="cards-heading">
          <h1 id="cards-heading" className="text-4xl font-semibold tracking-tight">
            Card
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Use Card when related content needs a clear boundary. The surface helps people scan a
            group, but it does not decide whether that group is information, a destination, or an
            action.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="cards-what-heading">
          <h2 id="cards-what-heading" className="text-2xl font-semibold tracking-tight">
            What is it?
          </h2>
          <p className="leading-7 text-muted-foreground">
            Card is a visual grouping primitive with shared surface, spacing, and structural parts
            for a header, content, action, and footer. The default Card renders as a div, so the
            content and the semantic element around it determine what the group means.
          </p>
          <TryIt>
            Identify the heading, then tab through the page. The static Card should not receive
            focus unless it contains a real link or button.
          </TryIt>
          <div className="-mt-2">
            <Card>
              <CardHeader>
                <h3 className="text-base leading-snug font-medium">Application status</h3>
                <CardDescription>Your application is being reviewed.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Card groups the status and its supporting message; it is not an action by
                  itself.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="cards-use-heading">
          <div className="space-y-5">
            <h2 id="cards-use-heading" className="text-2xl font-semibold tracking-tight">
              When to use it
            </h2>
            <p className="leading-7 text-muted-foreground">
              Use Card when a bounded group helps people understand or compare related content
              without turning every group into a control. It works well for a summary, status,
              result, or preview that benefits from a shared visual boundary.
            </p>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Choose it when the content is related enough to scan as one unit.</li>
              <li>Use a linked Card when the complete unit leads to one destination.</li>
              <li>
                Use a real button inside the Card when the action changes state or performs work.
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 id="cards-not-heading" className="text-2xl font-semibold tracking-tight">
              When not to use it
            </h2>
            <p className="leading-7 text-muted-foreground">
              Do not use Card as a default wrapper for every paragraph or as a substitute for
              hierarchy, spacing, or a page layout. Too many boundaries make a page noisy and make
              related content harder to compare.
            </p>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Do not use it when whitespace or a heading already provides enough grouping.</li>
              <li>Do not make a Card look clickable unless it has a real destination or action.</li>
              <li>
                Do not put multiple unrelated destinations or competing actions behind one surface.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-5" aria-labelledby="cards-design-heading">
          <h2 id="cards-design-heading" className="text-2xl font-semibold tracking-tight">
            Design considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Give the Card one clear subject and a heading that names it.</li>
            <li>
              Use the Card parts consistently: header for identity, content for detail, and footer
              for supporting actions.
            </li>
            <li>Keep the visual hierarchy inside the Card stronger than the boundary around it.</li>
            <li>
              Choose one interaction model per surface: static grouping, one destination, or
              explicit actions.
            </li>
            <li>Keep copy concise so the Card remains scannable beside neighboring content.</li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="cards-accessibility-heading">
          <h2 id="cards-accessibility-heading" className="text-2xl font-semibold tracking-tight">
            Accessibility considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Give the Card a meaningful heading when it represents a distinct group; the local
              CardTitle primitive is visual, so use a real heading element in the content.
            </li>
            <li>
              Use a native link for navigation and a native button for an action. Do not nest
              interactive controls or make hover the only sign that a Card is interactive.
            </li>
            <li>
              Ensure the link or button has a visible focus indicator and remains usable with
              keyboard navigation.
            </li>
            <li>
              Keep the accessible name specific enough to explain the destination or action; visible
              text should normally provide that name.
            </li>
            <li>
              Check contrast, text resizing, forced-colors behavior, and reading order without
              relying on the Card border or color alone.
            </li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="cards-responsive-heading">
          <h2 id="cards-responsive-heading" className="text-2xl font-semibold tracking-tight">
            Responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">
            Start with one column so each Card remains readable at narrow widths and zoom levels.
            Add columns only when every Card still has enough room for its heading, description, and
            action.
          </p>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Let text wrap instead of truncating names, destinations, or action labels.</li>
            <li>
              Preserve the same reading order and destination/action parity across breakpoints.
            </li>
            <li>
              Use the page-wide Columns pattern for a full page and container-responsive mode inside
              a constrained region such as a split pane.
            </li>
            <li>
              Verify narrow widths and 200% zoom without horizontal scrolling or cramped touch
              targets.
            </li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="cards-examples-heading">
          <div className="space-y-2">
            <h2 id="cards-examples-heading" className="text-2xl font-semibold tracking-tight">
              Examples and variations
            </h2>
            <p className="text-sm leading-6 text-muted-foreground">
              Compare the semantic choices below. Each preview uses the production Card parts; the
              surrounding anchor or button changes only when the card&apos;s job changes.
            </p>
          </div>
          <div className="space-y-8">
            <ExampleVariation
              title="Static information"
              summary="Group related content without making the Card itself interactive."
              tryIt="Identify the heading, then tab through the page. Confirm that the static Card is understandable without receiving focus or implying that its surface is clickable."
              exampleClassName="p-0"
              supplemental={{
                tabLayout: 'requirements',
                guidance: {
                  explanation:
                    'Use a static Card when a related status, summary, result, or preview benefits from a shared visual boundary but does not represent a destination or action. The Card supplies visual grouping; the heading and content supply the meaning.',
                  considerations: [
                    'The Card itself is a div and is not interactive. Use a real heading element inside CardHeader when the group needs a heading.',
                    'Whitespace and heading hierarchy may be enough when a boundary would add visual noise.',
                    'Keep the message concise so the group remains scannable beside neighboring content.',
                  ],
                  doItems: [
                    'Give the group a useful heading and a clear reading path.',
                    'Use the Card boundary to support scanning rather than replace content hierarchy.',
                    'Let surrounding page structure determine the Card’s semantic role.',
                  ],
                  dontItems: [
                    'Do not make a static Card look or behave like a disabled control.',
                    'Do not add a boundary when whitespace already groups the content clearly.',
                    'Do not rely on the border or background alone to communicate the status.',
                  ],
                },
                code: {
                  language: 'tsx',
                  source: `<Card>
  <CardHeader>
    <h3 className="text-base leading-snug font-medium">Application status</h3>
    <CardDescription>Your application is being reviewed.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">
      No action is required right now. We will contact you when the review is complete.
    </p>
  </CardContent>
</Card>`,
                  html: `<div data-slot="card" data-size="default" class="...">
  <div data-slot="card-header">
    <h3>Application status</h3>
    <div data-slot="card-description">Your application is being reviewed.</div>
  </div>
  <div data-slot="card-content">
    <p>No action is required right now...</p>
  </div>
</div>`,
                  props: [
                    {
                      name: 'CardHeader',
                      type: 'ReactNode',
                      description:
                        'Groups the heading and supporting description at the top of the Card.',
                    },
                    {
                      name: 'CardDescription',
                      type: 'ReactNode',
                      description: 'Provides supporting status context beneath the heading.',
                    },
                    {
                      name: 'CardContent',
                      type: 'ReactNode',
                      description:
                        'Contains the primary static message for the grouped information.',
                    },
                  ],
                  attributes: [
                    {
                      name: 'data-slot',
                      type: 'component hook',
                      example: 'data-slot="card"',
                      description:
                        'Identifies Card parts for styling and inspection; preserve semantics when adapting the structure.',
                    },
                    {
                      name: 'h3',
                      type: 'heading element',
                      description: 'Provides the semantic name for this distinct content group.',
                    },
                  ],
                  notes:
                    'The Card does not become interactive because it contains no link or button. Keep the surrounding heading level aligned with the consuming page.',
                },
                requirements: {
                  userStory:
                    'As a person reviewing application status, I want related status content grouped with a clear heading so that I can understand it without mistaking the group for an action.',
                  groups: [
                    {
                      id: 'BR-STATIC',
                      title: 'Business requirements',
                      items: [
                        'The Card must group the application status and its supporting message as one understandable unit.',
                        'The Card must not imply that reviewing the status requires an action.',
                      ],
                    },
                    {
                      id: 'FR-STATIC',
                      title: 'Functional requirements',
                      items: [
                        'The Card must render the status heading and supporting description in a clear reading order.',
                        'The Card must remain informational and must not navigate or change state when its surface is inspected.',
                      ],
                    },
                    {
                      id: 'NFR-STATIC',
                      title: 'Non-functional requirements',
                      items: [
                        'The Card must remain readable when its message wraps at narrow widths or increased text size.',
                        'The Card boundary must support scanning without overwhelming the surrounding page hierarchy.',
                      ],
                    },
                    {
                      id: 'A11Y-STATIC',
                      title: 'Accessibility requirements',
                      items: [
                        'The Card must expose a meaningful heading for the distinct status group.',
                        'The static Card must not enter the keyboard focus order because it contains no interactive control.',
                      ],
                    },
                    {
                      id: 'TR-STATIC',
                      title: 'Technical requirements',
                      items: [
                        'The example must use the production Card, CardHeader, CardDescription, and CardContent components.',
                        'The consuming page must choose the appropriate heading level for the surrounding document structure.',
                      ],
                    },
                  ],
                  acceptanceCriteria: [
                    {
                      id: 'AC-STATIC-01',
                      requirementRefs: ['BR-STATIC-01', 'FR-STATIC-01'],
                      given: 'the static Card is rendered',
                      when: 'a person reads the content in order',
                      then: 'the application status heading precedes its supporting message',
                      and: ['the Card boundary communicates one related information group'],
                    },
                    {
                      id: 'AC-STATIC-02',
                      requirementRefs: ['A11Y-STATIC-01', 'A11Y-STATIC-02'],
                      given: 'the static Card contains no link or button',
                      when: 'a person tabs through the page',
                      then: 'focus moves past the Card without stopping on its surface',
                      and: ['the status group remains understandable from its heading and text'],
                    },
                    {
                      id: 'AC-STATIC-03',
                      requirementRefs: ['NFR-STATIC-01', 'TR-STATIC-01'],
                      given: 'the viewport is narrow or text is enlarged',
                      when: 'the Card content reflows',
                      then: 'the heading and message remain readable without horizontal scrolling',
                    },
                  ],
                },
                verification: {
                  scenarios: [
                    {
                      id: 'VR-STATIC-01',
                      criterionRefs: ['AC-STATIC-01'],
                      role: 'Functional QA',
                      title: 'Read the static information Card',
                      cases: [
                        {
                          id: 'VR-STATIC-01A',
                          criterionRefs: ['AC-STATIC-01'],
                          title: 'Inspect content order',
                          steps: [
                            'Render the static Card and read its heading, description, and message.',
                          ],
                          expected:
                            'Application status is the clear heading, followed by the review message, with no implied action on the surface.',
                        },
                      ],
                    },
                    {
                      id: 'VR-STATIC-02',
                      criterionRefs: ['AC-STATIC-02'],
                      role: 'Accessibility QA',
                      title: 'Check static Card focus behavior',
                      cases: [
                        {
                          id: 'VR-STATIC-02A',
                          criterionRefs: ['AC-STATIC-02'],
                          title: 'Tab past the Card',
                          steps: ['Place focus before the Card and press Tab through the page.'],
                          expected:
                            'The static Card surface is not focusable and the status remains understandable from its semantic heading and text.',
                        },
                      ],
                    },
                    {
                      id: 'VR-STATIC-03',
                      criterionRefs: ['AC-STATIC-03'],
                      role: 'Responsive QA',
                      title: 'Check narrow text reflow',
                      cases: [
                        {
                          id: 'VR-STATIC-03A',
                          criterionRefs: ['AC-STATIC-03'],
                          title: 'Resize and enlarge text',
                          steps: [
                            'Use a narrow viewport or 200% text zoom and inspect the Card content.',
                          ],
                          expected:
                            'The heading and supporting message wrap within the Card without horizontal scrolling.',
                        },
                      ],
                    },
                  ],
                },
              }}
            >
              <Card>
                <CardHeader>
                  <h3 className="text-base leading-snug font-medium">Application status</h3>
                  <CardDescription>Your application is being reviewed.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No action is required right now. We will contact you when the review is
                    complete.
                  </p>
                </CardContent>
              </Card>
            </ExampleVariation>

            <ExampleVariation
              title="Linked Card"
              summary="Use one real link when the whole item represents one destination."
              tryIt="Tab to the linked Card, confirm its visible focus indicator, activate it, and verify that the consuming application reaches the Header guide without nested interactive controls."
              exampleClassName="p-0"
              supplemental={{
                tabLayout: 'requirements',
                guidance: {
                  explanation:
                    'Use a linked Card when the complete item represents one destination. The anchor owns navigation and focus; the Card supplies the visual grouping. Keep the destination clear and do not nest another link or button inside it.',
                  considerations: [
                    'The example uses a real route to the Header guide rather than a placeholder fragment.',
                    'The link wraps one Card surface and preserves a single accessible name from its visible content.',
                    'The focus ring belongs to the anchor so keyboard users can see the destination target.',
                  ],
                  doItems: [
                    'Use a destination-focused link name and a real route.',
                    'Keep supporting text available to explain what the destination contains.',
                    'Provide visible hover and keyboard focus treatment for the anchor.',
                  ],
                  dontItems: [
                    'Do not use a placeholder fragment or a link with no matching destination.',
                    'Do not nest another link or button inside the linked Card.',
                    'Do not make the wrapper an ambiguous click target when only one action is needed.',
                  ],
                },
                code: {
                  language: 'tsx',
                  source: `<a
  href="/components/header"
  className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
>
  <Card className="transition-colors hover:bg-muted">
    <CardHeader>
      <h3 className="text-base leading-snug font-medium">Header navigation</h3>
      <CardDescription>Review the application header pattern.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">
        Open the Header guide to see the production navigation composition.
      </p>
    </CardContent>
  </Card>
</a>`,
                  html: `<a href="/components/header" class="block ... focus-visible:ring-2">
  <div data-slot="card" class="... hover:bg-muted">
    <div data-slot="card-header"><h3>Header navigation</h3>...</div>
    <div data-slot="card-content">...</div>
  </div>
</a>`,
                  props: [
                    {
                      name: 'href',
                      type: 'string',
                      example: 'href="/components/header"',
                      description:
                        'Provides the real destination owned by the consuming application.',
                    },
                    {
                      name: 'focus-visible:*',
                      type: 'utility classes',
                      description:
                        'Keeps keyboard focus visible on the anchor that owns navigation.',
                    },
                    {
                      name: 'Card className',
                      type: 'string',
                      example: 'className="transition-colors hover:bg-muted"',
                      description:
                        'Adds pointer feedback without changing the Card’s semantic role.',
                    },
                  ],
                  attributes: [
                    {
                      name: 'href',
                      type: 'navigation attribute',
                      example: 'href="/components/header"',
                      description:
                        'Must resolve to the intended destination and remain on the link element.',
                    },
                    {
                      name: 'focus-visible:ring-*',
                      type: 'focus styling hook',
                      description: 'Makes the keyboard target visible without relying on hover.',
                    },
                    {
                      name: 'data-slot="card"',
                      type: 'component hook',
                      description:
                        'Identifies the visual Card surface; it does not make the Card itself interactive.',
                    },
                  ],
                  notes:
                    'Keep navigation on the anchor and visual grouping in Card. If a Card needs multiple destinations or actions, use a different composition instead of nesting controls.',
                },
                requirements: {
                  userStory:
                    'As a person scanning available guides, I want one Card to act as one clear destination so that I can understand and activate it without guessing which part is interactive.',
                  groups: [
                    {
                      id: 'BR-LINKED',
                      title: 'Business requirements',
                      items: [
                        'The linked Card must communicate one destination related to Header navigation.',
                        'The linked Card must take the person to the documented Header guide when activated.',
                      ],
                    },
                    {
                      id: 'FR-LINKED',
                      title: 'Functional requirements',
                      items: [
                        'The linked Card must expose the destination as a real anchor with a valid href.',
                        'The linked Card must keep its supporting content inside the one destination target.',
                      ],
                    },
                    {
                      id: 'NFR-LINKED',
                      title: 'Non-functional requirements',
                      items: [
                        'The linked Card must provide visible hover and keyboard focus feedback.',
                        'The linked Card must preserve readable text and wrapping at narrow widths.',
                      ],
                    },
                    {
                      id: 'A11Y-LINKED',
                      title: 'Accessibility requirements',
                      items: [
                        'The linked Card must be reachable as one keyboard link with a clear accessible name.',
                        'The linked Card must not contain a nested link or button.',
                      ],
                    },
                    {
                      id: 'TR-LINKED',
                      title: 'Technical requirements',
                      items: [
                        'The example must compose a native anchor around the production Card parts.',
                        'The consuming application must own the route and preserve the focus styles on the anchor.',
                      ],
                    },
                  ],
                  acceptanceCriteria: [
                    {
                      id: 'AC-LINKED-01',
                      requirementRefs: ['FR-LINKED-01', 'BR-LINKED-02'],
                      given: 'the linked Card is rendered',
                      when: 'the person activates its anchor',
                      then: 'the consuming application navigates to the Header guide destination',
                      and: [
                        'the complete Card remains one destination rather than multiple nested controls',
                      ],
                    },
                    {
                      id: 'AC-LINKED-02',
                      requirementRefs: ['A11Y-LINKED-01', 'NFR-LINKED-01'],
                      given: 'the person navigates with the keyboard',
                      when: 'focus reaches the linked Card',
                      then: 'one visible focus indicator identifies the destination target',
                      and: ['the accessible name is understandable from the visible Card content'],
                    },
                    {
                      id: 'AC-LINKED-03',
                      requirementRefs: ['A11Y-LINKED-02', 'TR-LINKED-01'],
                      given: 'the linked Card contains its supporting content',
                      when: 'the rendered structure is inspected',
                      then: 'no link or button is nested inside the anchor',
                    },
                    {
                      id: 'AC-LINKED-04',
                      requirementRefs: ['NFR-LINKED-02'],
                      given: 'the viewport is narrow or text is enlarged',
                      when: 'the linked Card reflows',
                      then: 'the destination name and supporting copy remain readable without horizontal scrolling',
                    },
                  ],
                },
                verification: {
                  scenarios: [
                    {
                      id: 'VR-LINKED-01',
                      criterionRefs: ['AC-LINKED-01'],
                      role: 'Functional QA',
                      title: 'Navigate with the linked Card',
                      cases: [
                        {
                          id: 'VR-LINKED-01A',
                          criterionRefs: ['AC-LINKED-01'],
                          title: 'Activate the destination',
                          steps: [
                            'Activate the Header navigation Card with a pointer and with the keyboard.',
                          ],
                          expected:
                            'The consuming application navigates to /components/header and the Card acts as one destination.',
                        },
                      ],
                    },
                    {
                      id: 'VR-LINKED-02',
                      criterionRefs: ['AC-LINKED-02', 'AC-LINKED-03'],
                      role: 'Accessibility QA',
                      title: 'Inspect link semantics and focus',
                      cases: [
                        {
                          id: 'VR-LINKED-02A',
                          criterionRefs: ['AC-LINKED-02', 'AC-LINKED-03'],
                          title: 'Focus and inspect the anchor',
                          steps: [
                            'Tab to the Card, inspect its focus indicator, and inspect descendants for nested controls.',
                          ],
                          expected:
                            'The anchor has visible focus, an understandable name, and no nested link or button.',
                        },
                      ],
                    },
                    {
                      id: 'VR-LINKED-03',
                      criterionRefs: ['AC-LINKED-04'],
                      role: 'Responsive QA',
                      title: 'Check linked content reflow',
                      cases: [
                        {
                          id: 'VR-LINKED-03A',
                          criterionRefs: ['AC-LINKED-04'],
                          title: 'Resize and enlarge text',
                          steps: [
                            'Use a narrow viewport or 200% text zoom and inspect the destination and supporting copy.',
                          ],
                          expected:
                            'The Card content wraps within the linked surface without horizontal scrolling or clipped labels.',
                        },
                      ],
                    },
                  ],
                },
              }}
            >
              <a
                href="/components/header"
                className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Card className="transition-colors hover:bg-muted">
                  <CardHeader>
                    <h3 className="text-base leading-snug font-medium">Header navigation</h3>
                    <CardDescription>Review the application header pattern.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Open the Header guide to see the production navigation composition.
                    </p>
                  </CardContent>
                </Card>
              </a>
            </ExampleVariation>

            <ExampleVariation
              title="Card with an action"
              summary="Use a button when the Card action changes state or performs work in place."
              tryIt="Tab to Mark all read, activate it, and confirm that the action is announced without navigating away or making the whole Card interactive."
              exampleClassName="p-0"
              supplemental={{
                tabLayout: 'requirements',
                guidance: {
                  explanation:
                    'Use a button inside the Card when the action changes state or performs work in place. The Card remains a container while the native button owns the interaction and its accessible name.',
                  considerations: [
                    'CardAction places the button beside the header content without changing the Card’s semantic role.',
                    'The example demonstrates a named action; a real application should connect it to state and announce any resulting update.',
                    'Do not make both the Card surface and its button competing interactive targets.',
                  ],
                  doItems: [
                    'Use a concise button name that describes the state change or result.',
                    'Keep the action in the same reading and focus order as the Card heading.',
                    'Use CardAction when the header placement improves scanning.',
                  ],
                  dontItems: [
                    'Do not nest a button inside a link or make the Card and button perform competing actions.',
                    'Do not use an icon-only action without an accessible name.',
                    'Do not rely on hover or color alone to communicate that the action is available.',
                  ],
                },
                code: {
                  language: 'tsx',
                  source: `<Card>
  <CardHeader>
    <h3 className="text-base leading-snug font-medium">Notifications</h3>
    <CardDescription>You have 3 unread notifications.</CardDescription>
    <CardAction>
      <Button type="button" variant="outline" size="sm">
        Mark all read
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">
      Marking them read updates the notification state without navigating away.
    </p>
  </CardContent>
</Card>`,
                  html: `<div data-slot="card" data-size="default" class="...">
  <div data-slot="card-header">
    <h3>Notifications</h3>
    <div data-slot="card-description">You have 3 unread notifications.</div>
    <div data-slot="card-action"><button type="button">Mark all read</button></div>
  </div>
  <div data-slot="card-content">...</div>
</div>`,
                  props: [
                    {
                      name: 'CardAction',
                      type: 'ReactNode',
                      description: 'Places a related action beside the Card header content.',
                    },
                    {
                      name: 'Button',
                      type: 'button props',
                      example: 'variant="outline" size="sm"',
                      description: 'Owns the state-changing action and exposes its visible name.',
                    },
                    {
                      name: 'type',
                      type: '"button"',
                      example: 'type="button"',
                      description:
                        'Prevents accidental form submission when the Card is placed inside a form.',
                    },
                  ],
                  attributes: [
                    {
                      name: 'data-slot="card-action"',
                      type: 'layout hook',
                      description:
                        'Identifies the action placement within CardHeader; the button remains the interactive element.',
                    },
                    {
                      name: 'type="button"',
                      type: 'button behavior',
                      description:
                        'Keeps this control an explicit action rather than an implicit submit control.',
                    },
                    {
                      name: 'data-variant / data-size',
                      type: 'Button state hooks',
                      example: 'data-variant="outline" data-size="sm"',
                      description:
                        'Reflects the Button presentation while its visible label supplies the accessible name.',
                    },
                  ],
                  notes:
                    'The example shows the composition boundary. The consuming application owns the state update and should provide an appropriate status announcement when the action changes content.',
                },
                requirements: {
                  userStory:
                    'As a person managing notifications, I want a clearly named action inside the notification Card so that I can change its state without accidentally navigating or activating the whole surface.',
                  groups: [
                    {
                      id: 'BR-ACTION',
                      title: 'Business requirements',
                      items: [
                        'The action Card must communicate the unread notification state and the available state change.',
                        'The action Card must let the person mark notifications read without leaving the current page.',
                      ],
                    },
                    {
                      id: 'FR-ACTION',
                      title: 'Functional requirements',
                      items: [
                        'The action Card must render one clearly named Mark all read button.',
                        'The action Card must keep the button action separate from the Card surface and content.',
                      ],
                    },
                    {
                      id: 'NFR-ACTION',
                      title: 'Non-functional requirements',
                      items: [
                        'The action Card must remain readable when the notification description or button label wraps.',
                        'The action Card must preserve a visible focus treatment for the button.',
                      ],
                    },
                    {
                      id: 'A11Y-ACTION',
                      title: 'Accessibility requirements',
                      items: [
                        'The action must be exposed as a native button with a specific accessible name.',
                        'The Card must not create a competing interactive surface around the button.',
                      ],
                    },
                    {
                      id: 'TR-ACTION',
                      title: 'Technical requirements',
                      items: [
                        'The example must use CardAction and the production Button component.',
                        'The consuming application must own the notification state change and any resulting status announcement.',
                      ],
                    },
                  ],
                  acceptanceCriteria: [
                    {
                      id: 'AC-ACTION-01',
                      requirementRefs: ['BR-ACTION-01', 'FR-ACTION-01'],
                      given: 'the action Card is rendered',
                      when: 'the person reads its heading and description',
                      then: 'the notification state and Mark all read action are understandable',
                      and: ['the action appears in the Card header without obscuring the content'],
                    },
                    {
                      id: 'AC-ACTION-02',
                      requirementRefs: ['FR-ACTION-02', 'A11Y-ACTION-01'],
                      given: 'the person tabs through the action Card',
                      when: 'focus reaches the control',
                      then: 'the Mark all read button is the interactive target',
                      and: [
                        'the button has a visible focus indicator and a specific accessible name',
                      ],
                    },
                    {
                      id: 'AC-ACTION-03',
                      requirementRefs: ['BR-ACTION-02', 'TR-ACTION-02'],
                      given: 'the person activates Mark all read',
                      when: 'the consuming application handles the action',
                      then: 'the notification state updates without navigation',
                      and: [
                        'the consuming application communicates the resulting update appropriately',
                      ],
                    },
                    {
                      id: 'AC-ACTION-04',
                      requirementRefs: ['NFR-ACTION-01', 'A11Y-ACTION-02'],
                      given: 'the Card is viewed at a narrow width or increased text size',
                      when: 'the content and action reflow',
                      then: 'the heading, description, and button remain usable',
                      and: ['the Card surface does not become a competing interactive control'],
                    },
                  ],
                },
                verification: {
                  scenarios: [
                    {
                      id: 'VR-ACTION-01',
                      criterionRefs: ['AC-ACTION-01', 'AC-ACTION-02'],
                      role: 'Functional QA',
                      title: 'Inspect the action Card',
                      cases: [
                        {
                          id: 'VR-ACTION-01A',
                          criterionRefs: ['AC-ACTION-01'],
                          title: 'Read the action and state',
                          steps: [
                            'Render the notification Card and inspect its heading, description, and action.',
                          ],
                          expected:
                            'The unread state and Mark all read action are clear, with the action placed beside the header content.',
                        },
                        {
                          id: 'VR-ACTION-01B',
                          criterionRefs: ['AC-ACTION-02'],
                          title: 'Focus the button',
                          steps: ['Tab to the action and inspect its name and focus indicator.'],
                          expected:
                            'The native button receives focus, has a visible focus indicator, and is named Mark all read.',
                        },
                      ],
                    },
                    {
                      id: 'VR-ACTION-02',
                      criterionRefs: ['AC-ACTION-03'],
                      role: 'Product/Functional QA',
                      title: 'Activate the state-changing action',
                      cases: [
                        {
                          id: 'VR-ACTION-02A',
                          criterionRefs: ['AC-ACTION-03'],
                          title: 'Activate Mark all read',
                          steps: [
                            'Activate Mark all read with the keyboard or pointer and observe the application response.',
                          ],
                          expected:
                            'The consuming application updates notification state without navigating away and provides an appropriate update announcement.',
                        },
                      ],
                    },
                    {
                      id: 'VR-ACTION-03',
                      criterionRefs: ['AC-ACTION-04'],
                      role: 'Responsive QA',
                      title: 'Check action Card reflow',
                      cases: [
                        {
                          id: 'VR-ACTION-03A',
                          criterionRefs: ['AC-ACTION-04'],
                          title: 'Resize and enlarge text',
                          steps: [
                            'Use a narrow viewport or 200% text zoom and inspect the Card header and action.',
                          ],
                          expected:
                            'The heading, description, and button remain usable without horizontal scrolling, and only the button is interactive.',
                        },
                      ],
                    },
                  ],
                },
              }}
            >
              <Card>
                <CardHeader>
                  <h3 className="text-base leading-snug font-medium">Notifications</h3>
                  <CardDescription>You have 3 unread notifications.</CardDescription>
                  <CardAction>
                    <Button type="button" variant="outline" size="sm">
                      Mark all read
                    </Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Marking them read updates the notification state without navigating away.
                  </p>
                </CardContent>
              </Card>
            </ExampleVariation>
          </div>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsCardsPage }
