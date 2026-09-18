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
            <div className="space-y-12 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
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
                    Use Card when a bounded group helps people understand or compare related
                    content.
                  </p>
                  <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                    <li>When related information benefits from a visible boundary.</li>
                    <li>When people need to scan several comparable items.</li>
                    <li>When a group has its own heading and optional supporting action.</li>
                    <li>When the boundary explains what belongs together.</li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="cards-not-heading">
                  <h2 id="cards-not-heading" className="text-2xl font-semibold tracking-tight">
                    When not to use it
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    Use ordinary sections, headings, lists, and whitespace when the page flow
                    already provides enough structure.
                  </p>
                  <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                    <li>Do not put a card around every paragraph or page section.</li>
                    <li>Do not add a second card inside a card without a clear grouping reason.</li>
                    <li>
                      Do not use Card as a substitute for navigation, a form layout, or a dialog.
                    </li>
                    <li>Do not make the surface interactive just because it looks like a tile.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-5" aria-labelledby="cards-design-heading">
                <h2 id="cards-design-heading" className="text-2xl font-semibold tracking-tight">
                  Design considerations
                </h2>
                <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Give each card one clear job and one clear reading path.</li>
                  <li>Use a heading when the content is a distinct group.</li>
                  <li>Keep titles and supporting text short enough to scan.</li>
                  <li>Choose the number of columns from the content, not the available space.</li>
                  <li>Use visual priority intentionally; not every card needs equal emphasis.</li>
                  <li>
                    Decide whether the group is information, a destination, or an action before
                    choosing its surrounding element.
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
                <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Use a real heading and keep the page heading hierarchy intact.</li>
                  <li>Use a real anchor for navigation and a real button for an action.</li>
                  <li>
                    Keep a static Card out of the tab order; its boundary does not need focus.
                  </li>
                  <li>Do not nest links or buttons inside a Card that is already one link.</li>
                  <li>Keep visible focus styles on every link and button inside a Card.</li>
                  <li>
                    Make the link or button name describe its destination or action without relying
                    on the card boundary, icon, or color.
                  </li>
                  <li>
                    Test each example by keyboard and with a screen reader so the heading,
                    supporting text, and controls are announced once and in a useful order.
                  </li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="cards-responsive-heading">
                <h2 id="cards-responsive-heading" className="text-2xl font-semibold tracking-tight">
                  Responsive behavior
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Start with one column so each card remains readable at narrow widths. Add columns
                  only when every card still has enough room for its heading, description, and
                  action. Use the page-wide Columns pattern for a full page and container-responsive
                  mode when cards live inside a constrained region such as a split pane.
                </p>
                <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Keep the DOM and reading order meaningful when a visual grid collapses.</li>
                  <li>Test the longest realistic title, description, and action label.</li>
                  <li>Check 200% zoom and narrow widths for clipping or horizontal scrolling.</li>
                  <li>Do not reduce touch targets or hide card actions to preserve a grid.</li>
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
                <div className="space-y-8">
                  <ExampleVariation
                    title="Static information"
                    description="Group related content without making the Card itself interactive."
                    explanation="The Card provides visual grouping, while the heading and content provide the meaning. No focusable element is added when the group is informational only."
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
                    explanation="The anchor owns the interaction and the Card provides the visual surface. The link name identifies the destination, so the card does not need a second nested link."
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
                    explanation="The Card remains a container and the button owns the action. Placing the button in CardAction keeps it associated with the heading while preserving a separate focus target."
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
