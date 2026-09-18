import { ExampleVariation } from '@/components/layout/example-variation'
/**
 * ComponentsSecondaryNavPage — SecondaryNav component usage guide.
 *
 * Explains how to keep a short set of peer links together inside a section.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { PageBody } from '@/components/layout/page-body'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { SecondaryNav } from '@/components/layout/secondary-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { Footer } from '@/components/layout/footer'
import { PageShell } from '@/components/layout/page-shell'
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
      { href: '/components/secondary-nav', label: 'SecondaryNav', icon: List },
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
function ComponentsSecondaryNavPage() {
  return (
    <LayoutProvider
      secondaryNav={componentSectionLinks}
      secondaryNavLabel="Component areas"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      activeHref="/components/secondary-nav"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Component areas" activeHref="/components/user-interface" />
        <PageBody>
          <Sidebar aria-label="User Interface" />
          <Main size="full">
            <div className="space-y-12 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
              <section className="space-y-5" aria-labelledby="navigation-secondary-heading">
                <h1
                  id="navigation-secondary-heading"
                  className="text-4xl font-semibold tracking-tight"
                >
                  Secondary navigation
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  Use SecondaryNav for a short row of peer links inside the current section. On
                  smaller screens, LayoutProvider makes the same links available in the Header
                  drawer.
                </p>
              </section>
              <section className="space-y-5" aria-labelledby="navigation-secondary-what-heading">
                <h2
                  id="navigation-secondary-what-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  What is it?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  SecondaryNav gives people nearby context without mixing section links into the
                  application-wide Header. It renders real anchors and marks the active page with{' '}
                  <code>aria-current="page"</code>.
                </p>
                <div className="overflow-hidden rounded-xl border">
                  <SecondaryNav
                    items={[
                      { label: 'Overview', href: '#secondary-nav-overview' },
                      { label: 'Guidance', href: '#secondary-nav-guidance' },
                      { label: 'Resources', href: '#secondary-nav-resources' },
                    ]}
                    aria-label="Secondary navigation example"
                  />
                </div>
              </section>
              <section
                className="grid gap-10 lg:grid-cols-2"
                aria-labelledby="navigation-secondary-use-heading"
              >
                <div className="space-y-5">
                  <h2
                    id="navigation-secondary-use-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    When to use it
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>For a small number of sibling pages.</li>
                    <li>When the links share one clear section identity.</li>
                    <li>When a horizontal row remains easy to scan.</li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="navigation-secondary-not-heading">
                  <h2
                    id="navigation-secondary-not-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    When not to use it
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>For a deep or heavily grouped page map.</li>
                    <li>For broad application destinations.</li>
                    <li>When the row would wrap into an unclear second menu.</li>
                  </ul>
                </div>
              </section>
              <section className="space-y-5" aria-labelledby="navigation-secondary-design-heading">
                <h2
                  id="navigation-secondary-design-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Design considerations
                </h2>

                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Keep labels short and parallel.</li>
                  <li>Keep the active state visually clear.</li>
                  <li>Use the same links in the mobile drawer, not a second data set.</li>
                </ul>
              </section>

              <section
                className="space-y-5"
                aria-labelledby="navigation-secondary-accessibility-heading"
              >
                <h2
                  id="navigation-secondary-accessibility-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Accessibility considerations
                </h2>

                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>
                    Give the landmark a specific <code>aria-label</code>.
                  </li>
                  <li>Use real links so keyboard and browser link actions work.</li>
                  <li>Verify the mobile replacement remains named and reachable.</li>
                </ul>
              </section>
              <section
                className="space-y-5"
                aria-labelledby="navigation-secondary-responsive-heading"
              >
                <h2
                  id="navigation-secondary-responsive-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Responsive behavior
                </h2>
                <p className="leading-7 text-muted-foreground">
                  On wider screens, the short section-link row sits below the Header. On narrow
                  screens, this row disappears rather than wrapping into a cramped strip; the same
                  links move into the Header’s mobile menu. The desktop preview disappearing at a
                  breakpoint is therefore an intentional responsive replacement, not missing content.
                </p>
                <p className="leading-7 text-muted-foreground">
                  Keep one shared link list so the desktop and mobile paths stay in sync. Test the
                  active link, keyboard focus, and the named navigation landmark at both widths.
                </p>
              </section>

              <section
                className="space-y-5"
                aria-labelledby="navigation-secondary-examples-heading"
              >
                <h2
                  id="navigation-secondary-examples-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Examples and variations
                </h2>
                <p className="text-muted-foreground">
                  This example uses the application’s reusable SecondaryNav component for section-level
                  links beneath a page or application Header.
                </p>
                <p className="text-muted-foreground">
                  Try it: Use Tab to reach the links, activate a destination, and resize the page. On
                  narrow screens, the visible SecondaryNav row intentionally disappears because the same
                  links move into the Header’s mobile drawer; confirm the destinations remain available
                  there and the active location is still clear.
                </p>
                <div className="space-y-8 [&_*:has(>[data-slot=secondary-nav])]:!p-0 [&_*:has(>[data-slot=secondary-nav])]:overflow-hidden">
                  <ExampleVariation
                    title="Basic"
                    description="A short row of links helps people move between closely related pages in the same section."
                    explanation="SecondaryNav is for the current section’s immediate destinations—not the application’s broadest navigation. The reusable component receives the link data and active destination, then supplies the shared layout, current-state treatment, and responsive behavior used by the application."
                    doItems={[
                      'Use concise, parallel labels that match the destination page titles.',
                      'Pass the current route as activeHref so location is communicated by more than color.',
                      'Keep the list short and limited to sibling pages people need within the same section.',
                      'Confirm the navigation has a meaningful accessible label when a page contains more than one navigation landmark.',
                    ]}
                    dontItems={[
                      'Do not put the entire application sitemap or deeply nested destinations in this row.',
                      'Do not use it as a substitute for a page heading, breadcrumb, or sidebar navigation.',
                      'Do not rely on hover, position, or color alone to identify the current page.',
                      'Do not make labels vague, inconsistent, or so long that the row becomes difficult to scan or use on small screens.',
                    ]}
                  >
                    <SecondaryNav
                        items={[
                          { label: 'Overview', href: '#secondary-nav-overview' },
                          { label: 'Guidance', href: '#secondary-nav-guidance' },
                          { label: 'Examples', href: '#secondary-nav-examples' },
                        ]}
                            aria-label="Project guide sections"
                      />
                  </ExampleVariation>

                  <ExampleVariation
                    title="With active item"
                    description="Use the active destination to show where the person is within the current section."
                    explanation="The active state should identify the current destination through styling and semantics. Keep the link label aligned with the destination heading, and use the component’s activeHref contract so the current state is not communicated by color alone."
                    doItems={[
                      'Set activeHref to the current page or section destination.',
                      'Preserve the same label and destination relationship across routes.',
                    ]}
                    dontItems={[
                      'Use color alone to communicate the current location.',
                      'Mark multiple destinations active at the same time.',
                    ]}
                  >
                    <SecondaryNav
                      items={[
                        { label: 'Overview', href: '#secondary-nav-overview' },
                        { label: 'Guidance', href: '#secondary-nav-guidance' },
                        { label: 'Resources', href: '#secondary-nav-resources' },
                      ]}
                      activeHref="#secondary-nav-guidance"
                      aria-label="Secondary navigation with active item"
                    />
                  </ExampleVariation>

                  <ExampleVariation
                    title="With longer labels"
                    description="Keep meaningful section names when destinations need more context."
                    explanation="Longer labels should remain understandable as the navigation adapts to the available width. Test wrapping, spacing, focus visibility, and the absence of page-level horizontal scrolling at narrow widths and high zoom."
                    doItems={[
                      'Use specific labels that match the destination’s visible heading.',
                      'Test the full set of destinations at narrow widths and high zoom.',
                    ]}
                    dontItems={[
                      'Shorten labels into ambiguous abbreviations just to preserve one line.',
                      'Allow the navigation to create horizontal scrolling for the whole page.',
                    ]}
                  >
                    <SecondaryNav
                      items={[
                        { label: 'Overview and key decisions', href: '#secondary-nav-overview' },
                        { label: 'Implementation guidance', href: '#secondary-nav-guidance' },
                        { label: 'Related resources and references', href: '#secondary-nav-resources' },
                      ]}
                        aria-label="Secondary navigation with longer labels"
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

export { ComponentsSecondaryNavPage }
