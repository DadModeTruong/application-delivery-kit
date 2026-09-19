/**
 * Card guide page.
 *
 * Use this page to learn when a bounded content group helps people scan and
 * understand a page. Copy the production Card composition, not the surrounding
 * documentation shell, when adapting an example to an application.
 */

import { ExampleVariation } from '@/components/layout/example-variation'
import { Footer } from '@/components/layout/footer'
import { Header, SkipLink } from '@/components/layout/header'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { Main } from '@/components/layout/main'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { Sidebar } from '@/components/layout/sidebar'
import { TabNavigation } from '@/components/layout/tab-navigation'
import { Card, CardAction, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Ellipsis, PanelBottom, PanelLeft, PanelRight, PanelTop, SquareStack } from 'lucide-react'
import type { NavGroup, NavLeaf } from '@/components/layout/types'
import { primaryNav, footerLinks } from '../page-registry'

// ---------------------------------------------------------------
// Component-area navigation
// ---------------------------------------------------------------

// Kept local by design so each guide is self-contained. Keep these links and groups
// aligned across the sibling component guides.
const componentSectionLinks: NavLeaf[] = [
  { href: '/components/user-interface', label: 'User Interface' },
  { href: '/components/interaction', label: 'Interaction' },
  { href: '/components/forms', label: 'Forms' },
]

const userInterfaceSidebarLinks: (NavLeaf | NavGroup)[] = [
  { href: '/components/user-interface', label: 'User Interface' },
  {
    label: 'Navigation',
    items: [
      { href: '/components/header', label: 'Header', icon: PanelTop },
      { href: '/components/tab-navigation', label: 'Tab', icon: Ellipsis },
      { href: '/components/sidebar', label: 'Sidebar', icon: PanelLeft },
      { href: '/components/footer', label: 'Footer', icon: PanelBottom },
    ],
  },
  {
    label: 'Layout',
    items: [{ href: '/components/split-view', label: 'Split View', icon: PanelRight }],
  },
  {
    label: 'Display',
    items: [{ href: '/components/card', label: 'Card', icon: SquareStack }],
  },
]

function ComponentsCardsPage() {
  return (
    <LayoutProvider
      tabNavigation={componentSectionLinks}
      tabNavigationLabel="Component areas"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      activeHref="/components/card"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <TabNavigation aria-label="Component areas" activeHref="/components/user-interface" />
        <PageBody>
          <Sidebar aria-label="User Interface" />
          <Main size="full">
            <div className="space-y-12">
              <section className="space-y-5" aria-labelledby="cards-heading">
                <h1 id="cards-heading" className="text-4xl font-semibold tracking-tight">
                  Card
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  Use Card when related content needs a clear boundary. The surface helps people
                  scan a group, but it does not decide whether that group is information, a
                  destination, or an action.
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="cards-what-heading">
                <h2 id="cards-what-heading" className="text-2xl font-semibold tracking-tight">
                  What is it?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Card is a visual grouping primitive with shared surface, spacing, and structural
                  parts for a header, content, action, and footer. The default Card renders as a
                  div, so the content and the semantic element around it determine what the group
                  means.
                </p>
                <div className="overflow-hidden rounded-xl border">
                  <Card>
                    <CardHeader>
                      <h3 className="text-base leading-snug font-medium">Application status</h3>
                      <CardDescription>Your application is being reviewed.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        The card groups the status and its supporting message; it is not an action
                        by itself.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  Try it: identify the heading, then tab through the page. The static card should
                  not receive focus unless it contains a real link or button.
                </p>
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
                      Use a real button inside the Card when the action changes state or performs
                      work.
                    </li>
                  </ul>
                </div>
                <div className="space-y-5">
                  <h2 id="cards-not-heading" className="text-2xl font-semibold tracking-tight">
                    When not to use it
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    Do not use Card as a default wrapper for every paragraph or as a substitute for
                    hierarchy, spacing, or a page layout. Too many boundaries make a page noisy and
                    make related content harder to compare.
                  </p>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>
                      Do not use it when whitespace or a heading already provides enough grouping.
                    </li>
                    <li>
                      Do not make a Card look clickable unless it has a real destination or action.
                    </li>
                    <li>
                      Do not put multiple unrelated destinations or competing actions behind one
                      surface.
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
                    Use the Card parts consistently: header for identity, content for detail, and
                    footer for supporting actions.
                  </li>
                  <li>
                    Keep the visual hierarchy inside the Card stronger than the boundary around it.
                  </li>
                  <li>
                    Choose one interaction model per surface: static grouping, one destination, or
                    explicit actions.
                  </li>
                  <li>
                    Keep copy concise so the Card remains scannable beside neighboring content.
                  </li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="cards-accessibility-heading">
                <h2
                  id="cards-accessibility-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Accessibility considerations
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>
                    Give the Card a meaningful heading when it represents a distinct group; the
                    local CardTitle primitive is visual, so use a real heading element in the
                    content.
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
                    Keep the accessible name specific enough to explain the destination or action;
                    visible text should normally provide that name.
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
                  Start with one column so each Card remains readable at narrow widths and zoom
                  levels. Add columns only when every Card still has enough room for its heading,
                  description, and action.
                </p>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>
                    Let text wrap instead of truncating names, destinations, or action labels.
                  </li>
                  <li>
                    Preserve the same reading order and destination/action parity across
                    breakpoints.
                  </li>
                  <li>
                    Use the page-wide Columns pattern for a full page and container-responsive mode
                    inside a constrained region such as a split pane.
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
                    Compare the semantic choices below. Each preview uses the production Card parts;
                    the surrounding anchor or button changes only when the card&apos;s job changes.
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Try it: tab through the previews and activate each control. Confirm that static
                    information is not focusable, the linked card has one clear destination, and the
                    action card exposes one clearly named button.
                  </p>
                </div>
                <div className="space-y-8 [&_*:has(>[data-slot=card])]:!rounded-none [&_*:has(>[data-slot=card])]:!border-0 [&_*:has(>[data-slot=card])]:!p-0 [&_*:has(>a>[data-slot=card])]:!rounded-none [&_*:has(>a>[data-slot=card])]:!border-0 [&_*:has(>a>[data-slot=card])]:!p-0">
                  <ExampleVariation
                    title="Static information"
                    description="Group related content without making the Card itself interactive."
                    explanation="The Card provides visual grouping while the heading and content provide the meaning. Try it: confirm that the group reads clearly without implying that the surface itself is clickable."
                    doItems={[
                      'Give the group a useful heading and a clear reading path.',
                      'Use the Card boundary to support scanning, not to replace the content hierarchy.',
                    ]}
                    dontItems={[
                      'Do not make a static Card look or behave like a disabled control.',
                      'Do not add a boundary when whitespace already groups the content clearly.',
                    ]}
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
                    description="Use one real link when the whole item represents one destination."
                    explanation="The anchor owns the interaction and the Card provides the visual surface. Try it: tab to the link, confirm its focus indicator, activate it, and verify that it reaches the documented Header guide."
                    doItems={[
                      'Use a destination-focused link name and a real route.',
                      'Keep supporting text available to explain what the destination contains.',
                      'Provide visible hover and keyboard focus treatment for the link.',
                    ]}
                    dontItems={[
                      'Do not use a placeholder fragment or a link with no matching destination.',
                      'Do not nest another link or button inside the linked Card.',
                      'Do not make the whole wrapper an ambiguous click target when only one action is needed.',
                    ]}
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
                    description="Use a button when the card action changes state or performs work in place."
                    explanation="The Card remains a container and the button owns the action. Try it: tab to “Mark all read,” activate it, and confirm that the action is announced and does not pretend to navigate to another page."
                    doItems={[
                      'Use a concise button name that describes the state change or result.',
                      'Keep the action in the same reading and focus order as the card heading.',
                      'Use CardAction for a related header control when that placement improves scanning.',
                    ]}
                    dontItems={[
                      'Do not nest a button inside a link or make the Card and button perform competing actions.',
                      'Do not use an icon-only action without an accessible name.',
                      'Do not rely on hover or color alone to communicate that the action is available.',
                    ]}
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
          </Main>
        </PageBody>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

export { ComponentsCardsPage }
