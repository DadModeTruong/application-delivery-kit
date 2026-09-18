/**
 * ComponentsSplitViewPage — Split View component usage guide.
 *
 * Explains how SplitPane gives a main area and a secondary area a clear,
 * responsive relationship without taking ownership of either area's content.
 */

import { ExampleVariation } from '@/components/layout/example-variation'
import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { SecondaryPane, SplitPane } from '@/components/layout/split-pane'
import { TabNavigation } from '@/components/layout/tab-navigation'
import { Sidebar } from '@/components/layout/sidebar'
import { primaryNav, footerLinks } from '../page-registry'
import { Ellipsis, PanelBottom, PanelLeft, PanelRight, PanelTop, SquareStack } from 'lucide-react'
import type { NavGroup, NavLeaf } from '@/components/layout/types'
import { SplitPaneDemo } from '../demos/split-pane-demo'

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
                  Split View is a relationship between two areas: Main holds the primary task, while
                  Secondary holds details, a preview, or another supporting view. SplitPane controls
                  their space and stacking; it does not decide what either area means.
                </p>
                <div className="overflow-hidden rounded-xl border">
                  <SplitPane secondarySize="third">
                    <section className="space-y-2 p-6" aria-labelledby="split-basic-main-heading">
                      <h3 id="split-basic-main-heading" className="text-lg font-semibold">
                        Main task
                      </h3>
                      <p className="leading-7 text-muted-foreground">
                        Review a list, complete a form, or work through the primary page task here.
                      </p>
                    </section>
                    <SecondaryPane
                      className="space-y-2 border-t p-6 lg:border-l lg:border-t-0"
                      aria-labelledby="split-basic-secondary-heading"
                    >
                      <h3 id="split-basic-secondary-heading" className="text-lg font-semibold">
                        Supporting details
                      </h3>
                      <p className="leading-7 text-muted-foreground">
                        Show context that helps people understand or complete the main task.
                      </p>
                    </SecondaryPane>
                  </SplitPane>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  Try it: resize the preview. Main should remain first when the areas stack, and
                  both areas should remain readable without horizontal scrolling.
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
                  <p className="leading-7 text-muted-foreground">
                    Use Split View when supporting information helps someone complete or understand
                    a primary task without leaving it.
                  </p>
                  <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                    <li>For a results list beside a selected record or preview.</li>
                    <li>When the supporting area can be hidden without losing the main task.</li>
                    <li>When the relationship between the two areas is clearer side by side.</li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="split-view-not-heading">
                  <h2 id="split-view-not-heading" className="text-2xl font-semibold tracking-tight">
                    When not to use it
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    Choose a normal section, dialog, or separate page when the relationship does not
                    need two persistent areas.
                  </p>
                  <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                    <li>When the secondary content is required before the main task can start.</li>
                    <li>When both areas need the same visual priority at every screen size.</li>
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
                <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Give Main the primary job and make that job clear in its heading.</li>
                  <li>
                    Use a one-third secondary area when Main needs more room; use equal halves when
                    both areas need similar space.
                  </li>
                  <li>Start with supporting details hidden when they are helpful but optional.</li>
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
                <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Keep Main first in the DOM so it remains first when the areas stack.</li>
                  <li>
                    Give a secondary area a useful heading and landmark label when its purpose is
                    not already clear.
                  </li>
                  <li>
                    Use a real button for showing or hiding details, with an expanded state and a
                    control relationship exposed to assistive technology.
                  </li>
                  <li>When details close, return focus to the button that opened them.</li>
                  <li>
                    Ensure hidden details are removed from the accessibility tree and every control
                    has a clear name.
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
                  breakpoint, the third variation gives Main two-thirds and Secondary one-third of
                  the available content width. The half variation gives both areas equal space. If
                  Secondary is hidden, Main expands to one full-width column.
                </p>
                <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>
                    Test the narrow layout with long headings, descriptions, and action labels.
                  </li>
                  <li>
                    Confirm that both areas remain usable at browser zoom and without scrolling
                    horizontally.
                  </li>
                  <li>
                    Check that the primary-to-secondary reading order still makes sense when
                    stacked.
                  </li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="split-view-examples-heading">
                <h2
                  id="split-view-examples-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Examples and variations
                </h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  These previews use the reusable Split View demo. Compare the supported proportions
                  and the open/closed secondary-area behavior rather than treating the content cards
                  as a required pattern.
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Try it: activate View details, close the details area from either control, then
                  resize through narrow and wide widths. Confirm that focus returns to the opening
                  control, Main remains first, and neither pane becomes unusably narrow.
                </p>
                <div className="space-y-8">
                  <ExampleVariation
                    title="Main two-thirds, Secondary one-third"
                    description="Give Main more room when Secondary provides context, a preview, or supporting details."
                    explanation="This proportion keeps the primary task visually dominant while preserving a useful supporting area. The demo also shows the secondary area opening and closing in place."
                    doItems={[
                      'Use this proportion when the primary task needs more room than its supporting content.',
                      'Keep the secondary content directly related to the current main task.',
                      'Check that the main content remains usable when the secondary area is open.',
                    ]}
                    dontItems={[
                      'Do not use the smaller pane for a second task with equal priority.',
                      'Do not fill the secondary area with unrelated navigation or competing actions.',
                      'Do not assume the desktop proportion will remain side by side at narrow widths.',
                    ]}
                  >
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
                  </ExampleVariation>
                  <ExampleVariation
                    title="Main half, Secondary half"
                    description="Give both areas equal room when people need to compare or move between related views."
                    explanation="An equal split is useful when neither area should be treated as a narrow detail column. The content and headings should still make the primary relationship clear."
                    doItems={[
                      'Use equal space for related views with comparable importance.',
                      'Keep the relationship between the two areas explicit through headings and content.',
                      'Test both panes with realistic content before choosing equal proportions.',
                    ]}
                    dontItems={[
                      'Do not use equal columns when one area is clearly only supporting context.',
                      'Do not allow dense content or long labels to make either pane difficult to use.',
                      'Do not treat equal width as equal priority when the task order still matters.',
                    ]}
                  >
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

export { ComponentsSplitViewPage }
