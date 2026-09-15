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
import { SecondaryNav } from '@/components/layout/secondary-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { primaryNav, footerLinks } from './index'
import { componentSectionLinks, userInterfaceSidebarLinks } from './component-navigation'
import { SplitPaneDemo } from './_split-pane-demo'

function ComponentsSplitViewPage() {
  return (
    <LayoutProvider
      secondaryNav={componentSectionLinks}
      secondaryNavLabel="Component areas"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      activeHref="/components/split-view"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Component areas" activeHref="/components/user-interface" />
        <PageBody>
          <Sidebar aria-label="User Interface" />
          <Main size="full">
            <div className="space-y-12 pb-12 pt-6">
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
