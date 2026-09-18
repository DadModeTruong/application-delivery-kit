import { ExampleVariation } from '@/components/layout/example-variation'
/**
 * ComponentsSplitViewPage — Split View component usage guide.
 *
 * Explains how SplitPane gives a main area and a secondary area a clear,
 * responsive relationship without taking ownership of either area's content.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { TabNavigation } from '@/components/layout/tab-navigation'
import { Sidebar } from '@/components/layout/sidebar'
import { primaryNav, footerLinks } from '../page-registry'
import { List, PanelBottom, PanelLeft, PanelRight, PanelTop, SquareStack } from 'lucide-react'
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
      { href: '/components/tab-navigation', label: 'Tab', icon: List },
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
import { SplitPaneDemo } from '../demos/split-pane-demo'

function ComponentsSplitViewPage() {
  return (
    <LayoutProvider
      tabNavigation={componentSectionLinks}
      tabNavigationLabel="Component areas"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      activeHref="/components/split-view"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <TabNavigation aria-label="Component areas" activeHref="/components/user-interface" />
        <PageBody>
          <Sidebar aria-label="User Interface" />
          <Main size="full">
            <div className="space-y-12 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
              <section className="space-y-5" aria-labelledby="split-view-heading">
                <h1 id="split-view-heading" className="text-4xl font-semibold tracking-tight">
                  Split View
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  Use Split View when a main task benefits from supporting information beside it.
                  The main area stays first, the secondary area can be hidden when it is not needed,
                  and both areas stack naturally on smaller screens.
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="split-view-what-heading">
                <h2 id="split-view-what-heading" className="text-2xl font-semibold tracking-tight">
                  What is it?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Split View is the page relationship provided by <code>SplitPane</code>. It places
                  two areas in one layout: Main holds the primary task, while{' '}
                  <code>SecondaryPane</code>
                  holds details, a preview, or another supporting view. The component controls space
                  and stacking; it does not decide what either area means.
                </p>
              </section>

              <section
                className="grid gap-10 lg:grid-cols-2"
                aria-labelledby="split-view-use-heading"
              >
                <div className="space-y-5">
                  <h2 id="split-view-use-heading" className="text-2xl font-semibold tracking-tight">
                    When to use it
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>When people need to keep a primary task visible while checking details.</li>
                    <li>For a results list beside a selected record or preview.</li>
                    <li>When the supporting area can be hidden without losing the main task.</li>
                    <li>When the relationship between the two areas is clearer side by side.</li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="split-view-not-heading">
                  <h2 id="split-view-not-heading" className="text-2xl font-semibold tracking-tight">
                    When not to use it
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>
                      When the secondary content is required before people can start the main task.
                    </li>
                    <li>When both areas need the same visual priority at every screen size.</li>
                    <li>
                      When a normal section, dialog, or separate page would be easier to follow.
                    </li>
                    <li>When the secondary area would leave the main content too narrow to use.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-5" aria-labelledby="split-view-design-heading">
                <h2
                  id="split-view-design-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Design considerations
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>Give Main the primary job and make that job clear in its heading.</li>
                  <li>
                    Use <code>third</code> when the secondary area supports Main; use{' '}
                    <code>half</code> when both areas need similar room.
                  </li>
                  <li>
                    Start with the secondary area hidden when details are helpful but not always
                    needed.
                  </li>
                  <li>
                    Choose columns inside each area from the content that must remain readable, not
                    from the space available.
                  </li>
                  <li>
                    Do not use a split only because the page has room for two columns. The
                    relationship should help people work.
                  </li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="split-view-accessibility-heading">
                <h2
                  id="split-view-accessibility-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Accessibility considerations
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>Keep Main first in the DOM so it remains first when the areas stack.</li>
                  <li>
                    Give the secondary area a useful heading and landmark label when it needs one.
                  </li>
                  <li>
                    Use a real button for showing or hiding details, with <code>aria-expanded</code>{' '}
                    and <code>aria-controls</code>.
                  </li>
                  <li>When details close, return focus to the button that opened them.</li>
                  <li>
                    Check that hidden details are removed from the accessibility tree and that every
                    control has a clear name.
                  </li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="split-view-responsive-heading">
                <h2
                  id="split-view-responsive-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Responsive behavior
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Split View stacks Main before Secondary on narrow screens. At the large
                  breakpoint,
                  <code>third</code> gives Main two-thirds and Secondary one-third of the available
                  content width. <code>half</code> gives both areas equal space. If Secondary is
                  hidden, Main expands to one full-width column.
                </p>
                <p className="leading-7 text-muted-foreground">
                  Check the narrow version with the longest real heading, description, and action
                  label. The two areas should still read in the right order without horizontal
                  scrolling.
                </p>
              </section>

              <section className="space-y-8" aria-labelledby="split-view-examples-heading">
                <div className="space-y-3">
                  <h2
                    id="split-view-examples-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    Examples
                  </h2>
                <p className="text-sm text-muted-foreground">Try it: Resize the page through narrow and wide widths. Confirm that the content stacks in a sensible order when side-by-side space is unavailable and that neither pane becomes unusably narrow.</p>

                <div className="space-y-8">
                  <ExampleVariation title="Primary and contextual panes" description="The larger pane carries the main task while the secondary pane provides context." explanation="A split view is strongest when the secondary pane directly helps someone complete or understand the primary task. The DOM order should reflect that relationship." doItems={["Make the primary pane identifiable and place it first in reading order.", "Give each pane a useful heading or landmark."]} dontItems={["Do not place unrelated tasks side by side.", "Do not let either pane become too narrow to complete its task."]}>
                    <div className="grid gap-3 md:grid-cols-[2fr_1fr]"><section aria-labelledby="split-primary-example"><h4 id="split-primary-example" className="font-semibold">Application form</h4><p className="mt-1 text-sm text-muted-foreground">Main task content</p></section><aside aria-labelledby="split-context-example" className="border-t pt-3 md:border-l md:border-t-0 md:pl-3"><h4 id="split-context-example" className="font-semibold">Guidance</h4><p className="mt-1 text-sm text-muted-foreground">Helpful context</p></aside></div>
                  </ExampleVariation>
                  <ExampleVariation title="Equal split" description="Two equally important views can share space when each remains usable." explanation="An equal split supports comparison or movement between related views. Selection and focus should remain clear when the active item changes." doItems={["Use equal space when both views have comparable priority.", "Preserve a clear relationship between selection and details."]} dontItems={["Do not use equal columns when one pane is clearly secondary.", "Do not force dense content into a pane that cannot support it."]}>
                    <div className="grid gap-3 md:grid-cols-2"><section aria-labelledby="split-left-example"><h4 id="split-left-example" className="font-semibold">List</h4><p className="mt-1 text-sm text-muted-foreground">Choose an item</p></section><section aria-labelledby="split-right-example" className="border-t pt-3 md:border-l md:border-t-0 md:pl-3"><h4 id="split-right-example" className="font-semibold">Details</h4><p className="mt-1 text-sm text-muted-foreground">Review the item</p></section></div>
                  </ExampleVariation>
                  <ExampleVariation title="Stacked narrow layout" description="The relationship is preserved when side-by-side space is unavailable." explanation="At a narrow width, stacking should preserve the primary-to-secondary reading order and make both panes comfortable to use." doItems={["Show the main task before supporting context.", "Test the layout with long content and zoomed text."]} dontItems={["Do not preserve a desktop split that creates horizontal scrolling.", "Do not change the task order without explaining the new relationship."]}>
                    <div className="space-y-3"><section aria-labelledby="split-stack-main"><h4 id="split-stack-main" className="font-semibold">Main content</h4><p className="mt-1 text-sm text-muted-foreground">Presented first</p></section><aside aria-labelledby="split-stack-secondary" className="border-t pt-3"><h4 id="split-stack-secondary" className="font-semibold">Secondary content</h4><p className="mt-1 text-sm text-muted-foreground">Presented after the main task</p></aside></div>
                  </ExampleVariation>
                  <ExampleVariation title="Empty secondary pane" description="An unavailable context pane should explain what action will populate it." explanation="When the secondary pane depends on a selection, an empty state keeps the relationship visible and tells people what to do next." doItems={["Explain why the pane is empty and how to populate it.", "Keep the primary selection task usable without the secondary pane."]} dontItems={["Do not leave an unexplained blank region.", "Do not use placeholder content that looks like real details."]}>
                    <div className="grid gap-3 md:grid-cols-[2fr_1fr]"><section aria-labelledby="split-empty-main"><h4 id="split-empty-main" className="font-semibold">Choose a message</h4><p className="mt-1 text-sm text-muted-foreground">Select a message to review its details.</p></section><aside aria-labelledby="split-empty-secondary" className="border-t pt-3 md:border-l md:border-t-0 md:pl-3"><h4 id="split-empty-secondary" className="font-semibold">No message selected</h4><p className="mt-1 text-sm text-muted-foreground">Details will appear here.</p></aside></div>
                  </ExampleVariation>
                </div>
                  <p className="leading-7 text-muted-foreground">
                    These examples use the same content count while comparing the two supported
                    proportions. At narrow widths, Main stacks before Secondary; when Secondary is
                    hidden, it is removed from the accessible page and Main uses the available
                    width. View details is a representative disclosure pattern, not a rule that
                    every Split View must include a hide/show control.
                  </p>
                </div>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Main 2/3, Secondary 1/3</h3>
                    <p className="text-muted-foreground">
                      Use <code>secondarySize="third"</code> when Main needs more room.
                    </p>
                    <SplitPaneDemo
                      secondarySize="third"
                      mainColumns={{
                        visible: { base: 1, sm: 2, md: 2, lg: 3 },
                        hidden: { base: 1, sm: 2, md: 3, lg: 4 },
                      }}
                      mainCardCount={8}
                      secondaryColumns={{
                        third: { base: 1, sm: 1, md: 1, lg: 2 },
                        half: { base: 1, sm: 1, md: 2, lg: 2 },
                      }}
                      secondaryCardCount={4}
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Main 1/2, Secondary 1/2</h3>
                    <p className="text-muted-foreground">
                      Use <code>secondarySize="half"</code> when both areas need similar room.
                    </p>
                    <SplitPaneDemo
                      secondarySize="half"
                      mainColumns={{
                        visible: { base: 1, sm: 2, md: 2, lg: 3 },
                        hidden: { base: 1, sm: 2, md: 3, lg: 4 },
                      }}
                      mainCardCount={8}
                      secondaryColumns={{
                        third: { base: 1, sm: 1, md: 1, lg: 2 },
                        half: { base: 1, sm: 1, md: 2, lg: 2 },
                      }}
                      secondaryCardCount={4}
                    />
                  </div>
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

export { ComponentsSplitViewPage }
