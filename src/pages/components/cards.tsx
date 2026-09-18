import { ExampleVariation } from '@/components/layout/example-variation'
/**
 * ComponentsCardsPage — Card component usage guide.
 *
 * Explains Card as a visual grouping primitive and shows how to choose
 * the correct semantic element when a card contains information, a link,
 * or an action.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { TabNavigation } from '@/components/layout/tab-navigation'
import { Sidebar } from '@/components/layout/sidebar'
import { Tabs, PanelBottom, PanelLeft, PanelRight, PanelTop, SquareStack } from 'lucide-react'
import type { NavGroup, NavLeaf } from '@/components/layout/types'

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
  { href: "/components/user-interface", label: "User Interface" },
  {
    label: 'Navigation',
    items: [
      { href: '/components/header', label: 'Header', icon: PanelTop },
      { href: '/components/tab-navigation', label: 'Tab', icon: Tabs },
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
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { primaryNav, footerLinks } from '../page-registry'

// ---------------------------------------------------------------
// Component-area navigation
// ---------------------------------------------------------------

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------

/**
 * Card component reference page. Mounted by the demo router at
 * `/components/card`.
 *
 * @example
 * { path: '/components/card', component: ComponentsCardsPage }
 */
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
            <div className="space-y-14 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
              <section className="space-y-5" aria-labelledby="cards-heading">
                <h1 id="cards-heading" className="text-4xl font-semibold tracking-tight">
                  Card should group related content, not decorate every section.
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  Use Card when a set of related information needs a clear boundary. The visual
                  container helps people scan the page, but it does not decide whether the content
                  is a link, an action, or a section of prose.
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="cards-what-heading">
                <h2 id="cards-what-heading" className="text-2xl font-semibold tracking-tight">
                  What is it?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Card is a visual grouping primitive. It provides a surface, spacing, a border, and
                  an optional header, content area, action area, and footer. The default Card
                  renders as a <code>div</code>, so its meaning comes from the content inside it and
                  the semantic element you choose around or within it.
                </p>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>
                    <code>CardHeader</code> introduces the group with a title and optional
                    description.
                  </li>
                  <li>
                    <code>CardContent</code> holds the main information or example content.
                  </li>
                  <li>
                    <code>CardAction</code> reserves a place for a related control in the header.
                  </li>
                  <li>
                    <code>CardFooter</code> holds supporting actions or secondary information.
                  </li>
                  <li>
                    Decide whether the group is information, a destination, or an action before
                    choosing its surrounding element.
                  </li>
                </ul>
              </section>

              <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="cards-use-heading">
                <div className="space-y-5">
                  <h2 id="cards-use-heading" className="text-2xl font-semibold tracking-tight">
                    When to use it
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>When related information benefits from a visible, bounded group.</li>
                    <li>When people need to scan several comparable items.</li>
                    <li>
                      When a content group has its own heading and optional supporting action.
                    </li>
                    <li>When the boundary helps explain what belongs together.</li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="cards-not-heading">
                  <h2 id="cards-not-heading" className="text-2xl font-semibold tracking-tight">
                    When not to use it
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>For every paragraph or section on a page.</li>
                    <li>When whitespace and a heading already provide enough structure.</li>
                    <li>When the card would contain another card without a clear reason.</li>
                    <li>When a navigation region or form layout is being mistaken for content.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-5" aria-labelledby="cards-design-heading">
                <h2 id="cards-design-heading" className="text-2xl font-semibold tracking-tight">
                  Design considerations
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>Give each card one clear job and one clear reading path.</li>
                  <li>Use a heading when the content is a distinct group.</li>
                  <li>Keep card titles and supporting text short enough to scan.</li>
                  <li>
                    Choose the number of columns from the content, not from the maximum space
                    available.
                  </li>
                  <li>
                    Do not make every card look equally important if the content is not equal.
                  </li>
                  <li>
                    Write the card's one-sentence job before choosing borders, shadows, columns, or
                    decorative treatment.
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
                  <li>Use a real heading and keep the page heading hierarchy intact.</li>
                  <li>Use a real anchor for navigation and a real button for an action.</li>
                  <li>
                    Do not make a non-interactive <code>div</code> behave like a link.
                  </li>
                  <li>
                    Do not put nested links or buttons inside a card that is already one link.
                  </li>
                  <li>Keep visible focus styles on every interactive card or control.</li>
                  <li>
                    Test the card by keyboard and with a screen reader: people should hear the
                    heading, understand the link or button name, and find each control once.
                  </li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="cards-responsive-heading">
                <h2 id="cards-responsive-heading" className="text-2xl font-semibold tracking-tight">
                  Responsive behavior
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Start with one column so the content remains readable at narrow widths. Add
                  columns only when each card still has enough room for its title, description, and
                  actions. Use the page-wide <code>Columns</code> pattern for a full page and the
                  container-responsive mode when cards live inside a split pane or another
                  constrained region.
                </p>
                <p className="leading-7 text-muted-foreground">
                  Cards should stack in DOM and reading order. A visual grid must not make people
                  jump between unrelated items when the layout collapses on a smaller screen. Check
                  the narrow version with the actual longest title, description, and action
                  label—not only with short demo text.
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="cards-examples-heading">
                <div className="space-y-2">
                  <h2 id="cards-examples-heading" className="text-2xl font-semibold tracking-tight">
                    Examples
                  </h2>
                <p className="text-sm text-muted-foreground">Try it: Compare the cards at different widths and use any links or actions inside them with the keyboard. Confirm that grouping, hierarchy, and focus remain clear without making the entire card an ambiguous action.</p>

                <div className="space-y-8">
                  <ExampleVariation title="Static information card" description="A card can group related content without becoming an interaction." explanation="Use a card when a bounded group helps people scan related information. The card itself should not receive focus unless it contains an interactive element." doItems={["Give the content a useful heading and clear hierarchy.", "Let the content remain readable without relying on the card boundary alone."]} dontItems={["Do not make a static card look like an unavailable button.", "Do not add a card boundary when it provides no grouping or scanning value."]}>
                    <section aria-labelledby="card-static-example"><h4 id="card-static-example" className="font-semibold">Application status</h4><p className="mt-1 text-sm text-muted-foreground">Your application is being reviewed.</p></section>
                  </ExampleVariation>
                  <ExampleVariation title="Linked card" description="Make the actual link the interactive element." explanation="A linked card works when one destination describes the whole item. Put focus on the link and make its accessible name describe where it goes." doItems={["Use one clear link with a destination-focused name.", "Keep supporting text available to explain the destination."]} dontItems={["Do not make the entire wrapper an ambiguous click target.", "Do not create several competing links to the same destination inside one card."]}>
                    <article><h4 className="font-semibold"><a href="#card-linked-example" className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">View application details</a></h4><p className="mt-1 text-sm text-muted-foreground">Review status, documents, and next steps.</p></article>
                  </ExampleVariation>
                  <ExampleVariation title="Card with internal action" description="Use a button when the action changes state instead of navigating." explanation="A card may contain an action that applies to its content, but the card and its action should not compete to perform different unclear things." doItems={["Use a button for a state change such as marking notifications read.", "Keep the action in the same reading and focus order as its heading."]} dontItems={["Do not nest a button inside a link.", "Do not make the card and its button perform different unclear actions."]}>
                    <section aria-labelledby="card-action-example"><div className="flex flex-wrap items-start justify-between gap-3"><div><h4 id="card-action-example" className="font-semibold">Notifications</h4><p className="mt-1 text-sm text-muted-foreground">You have 3 unread notifications.</p></div><button type="button" className="rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Mark all read</button></div></section>
                  </ExampleVariation>
                  <ExampleVariation title="Responsive card grid" description="The grid changes density without changing the information hierarchy." explanation="A card grid is useful for repeated items with a shared comparison structure. At one column, the order and hierarchy should still make sense." doItems={["Use consistent headings and content order across cards.", "Test the one-column layout with long titles and actions."]} dontItems={["Do not make cards so narrow that their content becomes harder to scan.", "Do not use a grid for information that requires line-by-line comparison."]}>
                    <div className="grid gap-3 sm:grid-cols-2"><section aria-labelledby="card-grid-one"><h4 id="card-grid-one" className="font-semibold">Plan A</h4><p className="mt-1 text-sm text-muted-foreground">For small teams</p></section><section aria-labelledby="card-grid-two"><h4 id="card-grid-two" className="font-semibold">Plan B</h4><p className="mt-1 text-sm text-muted-foreground">For growing teams</p></section></div>
                  </ExampleVariation>
                </div>
                  <p className="leading-7 text-muted-foreground">
                    The surface can look similar in each example. The semantic element changes with
                    the job the card performs. The examples use one column at narrow widths and add
                    columns only at a wider breakpoint; resize the page to confirm every card
                    remains readable without horizontal scrolling.
                  </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Information card</CardTitle>
                      <CardDescription>A bounded group of static information.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Use Card for related content when the group does not navigate or perform an
                        action by itself.
                      </p>
                    </CardContent>
                  </Card>

                  <a
                    href="/components/card#link-card"
                    className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    id="link-card"
                  >
                    <Card className="h-full transition-colors hover:bg-muted">
                      <CardHeader>
                        <CardTitle>Link card</CardTitle>
                        <CardDescription>The whole surface is one destination.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Use a real anchor around the card. Do not add another link inside it.
                        </p>
                      </CardContent>
                    </Card>
                  </a>

                  <Card>
                    <CardHeader>
                      <CardTitle>Action card</CardTitle>
                      <CardDescription>The card contains a specific action.</CardDescription>
                      <CardAction>
                        <span className="sr-only">Action example</span>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Keep the card as a container and make the action a real button with a clear
                        accessible name.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button type="button" variant="outline" size="sm">
                        Example action
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </section>

              <section className="space-y-5" aria-labelledby="cards-guidance-heading">
                <h2 id="cards-guidance-heading" className="text-2xl font-semibold tracking-tight">
                  A consistent implementation rule
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Use Card for grouping and presentation. Use an anchor when the whole unit is a
                  destination. Use a button when the unit performs an action. Use ordinary sections,
                  headings, lists, and whitespace when the content belongs to the page's reading
                  flow. The visual treatment can be shared, but the behavior must remain honest.
                </p>
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
