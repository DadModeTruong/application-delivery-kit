import { ExampleVariation } from '@/components/layout/example-variation'
/**
 * ComponentsSidebarPage — Sidebar component usage guide.
 *
 * Explains how grouped section links support deeper navigation beside Main.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { PageBody } from '@/components/layout/page-body'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { TabNavigation } from '@/components/layout/tab-navigation'
import { Sidebar } from '@/components/layout/sidebar'
import { Footer } from '@/components/layout/footer'
import { PageShell } from '@/components/layout/page-shell'
import { primaryNav, footerLinks } from '../page-registry'
import { PanelsTopLeft, PanelBottom, PanelLeft, PanelRight, PanelTop, SquareStack } from 'lucide-react'
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
      { href: '/components/tab-navigation', label: 'Tab navigation', icon: PanelsTopLeft },
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

const basicSidebarLinks: NavLeaf[] = [
  { href: '/components/sidebar', label: 'Overview' },
  { href: '/components/tab-navigation', label: 'Tab navigation' },
  { href: '/components/header', label: 'Header' },
]

function ComponentsSidebarPage() {
  return (
    <LayoutProvider
      tabNavigation={componentSectionLinks}
      tabNavigationLabel="Component areas"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      activeHref="/components/sidebar"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <TabNavigation aria-label="Component areas" activeHref="/components/user-interface" />
        <PageBody>
          <Sidebar aria-label="User Interface" />
          <Main size="full">
            <div className="space-y-12 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
              <section className="space-y-5" aria-labelledby="navigation-sidebar-heading">
                <h1
                  id="navigation-sidebar-heading"
                  className="text-4xl font-semibold tracking-tight"
                >
                  Sidebar navigation
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  Use Sidebar when people need a grouped map of deeper pages beside Main. On smaller
                  screens, LayoutProvider moves that map into the Header drawer.
                </p>
              </section>
              <section className="space-y-5" aria-labelledby="navigation-sidebar-what-heading">
                <h2
                  id="navigation-sidebar-what-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  What is it?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Sidebar gives a section enough space for grouped destinations, optional icons, and a
                  visible current-page state without making the Header carry every link. It is a
                  persistent navigation landmark beside Main on wider screens; on smaller screens,
                  the same navigation data moves into the Header’s temporary drawer.
                </p>
                <div className="overflow-hidden rounded-xl border">
                  <Sidebar
                    aria-label="Sidebar recognition example"
                    items={basicSidebarLinks}
                    activeHref=""
                  />
                </div>
                <p className="leading-7 text-muted-foreground">
                  Sidebar navigation is a persistent, hierarchical map of an area’s destinations. Use it when people need to move among related pages while keeping their place in the main content; use Header for broad product navigation and TabNavigation for a smaller set of nearby destinations.
                </p>
              </section>
              <section
                className="grid gap-10 lg:grid-cols-2"
                aria-labelledby="navigation-sidebar-use-heading"
              >
                <div className="space-y-5">
                  <h2
                    id="navigation-sidebar-use-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    When to use it
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>For a deeper set of related pages that benefits from a persistent map.</li>
                    <li>When meaningful group labels help people predict where a destination belongs.</li>
                    <li>When the page has enough width for a rail without compressing the main task.</li>
                    <li>When the same navigation can become a clearly named, keyboard-operable mobile drawer.</li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="navigation-sidebar-not-heading">
                  <h2
                    id="navigation-sidebar-not-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    When not to use it
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>For only two or three peer links; TabNavigation may be clearer.</li>
                    <li>For broad destinations shared by the whole application; use Header instead.</li>
                    <li>For deeply nested navigation that needs more than one supported grouping level.</li>
                    <li>When the rail would take more space than the content earns or hide the main task.</li>
                  </ul>
                </div>
              </section>
              <section className="space-y-5" aria-labelledby="navigation-sidebar-design-heading">
                <h2
                  id="navigation-sidebar-design-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Design considerations
                </h2>

                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Use group headings that describe the information architecture, not visual decoration.</li>
                  <li>Keep one supported grouping level; use Header dropdowns or another pattern when deeper disclosure is needed.</li>
                  <li>Use icons only when they add recognition value, and keep labels visible in the labeled variant.</li>
                  <li>Keep labels concise, parallel, and consistent with page titles and related navigation.</li>
                  <li>Preserve the main content’s width and reading order; the rail should support the task, not compete with it.</li>
                </ul>
              </section>

              <section
                className="space-y-5"
                aria-labelledby="navigation-sidebar-accessibility-heading"
              >
                <h2
                  id="navigation-sidebar-accessibility-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Accessibility considerations
                </h2>

                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Give the sidebar landmark a specific name, and avoid reusing an indistinguishable label when other navigation landmarks are nearby.</li>
                  <li>Use real links so browser navigation, keyboard activation, and link context work as expected.</li>
                  <li>Mark only the current destination with <code>aria-current="page"</code>; do not use color or indentation as the only state cue.</li>
                  <li>Keep the main content earlier in the DOM reading order when the visual rail is beside it.</li>
                  <li>In icon-only mode, provide a visible or programmatic label for every link and test tooltip/focus behavior without a pointer.</li>
                  <li>When the rail becomes a drawer, test the trigger name and expanded state, focus entry, Escape/outside dismissal, and focus restoration.</li>
                </ul>
              </section>
              <section
                className="space-y-5"
                aria-labelledby="navigation-sidebar-responsive-heading"
              >
                <h2
                  id="navigation-sidebar-responsive-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Responsive behavior
                </h2>
                <p className="leading-7 text-muted-foreground">
                  On wider screens, the Sidebar sits beside Main. On narrow screens, the visible rail
                  disappears so it does not compete with the page content; its same grouped links move
                  into the Header’s mobile menu. Main remains the first reading area.
                </p>
                <p className="leading-7 text-muted-foreground">
                  This is expected, not missing content. Open the mobile menu to reach the groups, and
                  confirm that the drawer has a clear name, the current page is still marked, and focus
                  returns to the menu trigger when it closes. Test at narrow widths and high zoom so
                  labels, touch targets, and the main content remain usable without horizontal scrolling.
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="navigation-sidebar-examples-heading">
                <h2
                  id="navigation-sidebar-examples-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Examples and variations
                </h2>
                <p className="text-muted-foreground">
                  Try it: Use Tab to move through the links, activate a destination, and resize the page.
                  Confirm that the sidebar has a meaningful name, the current location is clear, and
                  the same destinations remain reachable when the persistent rail becomes a mobile
                  drawer.
                </p>

                <div className="space-y-8 [&_*:has(>[data-slot=sidebar])]:!p-0 [&_*:has(>[data-slot=sidebar])]:overflow-hidden">
                  <ExampleVariation
                    title="Basic"
                    description="A short, ungrouped list is the simplest Sidebar pattern."
                    explanation="Use a basic Sidebar when an area has a small set of peer destinations and grouping would add more structure than people need. Keep the labels specific and preserve the current destination state."
                    doItems={[
                      'Use a short list of peer destinations with clear labels.',
                      'Pass the current route explicitly when the consuming page needs an active destination.',
                    ]}
                    dontItems={[
                      'Add group headings when all destinations belong to the same level.',
                      'Use a Sidebar for a short list that would be clearer as Tab navigation.',
                    ]}
                  >
                    <Sidebar
                      aria-label="Basic section navigation"
                      items={basicSidebarLinks}
                      activeHref=""
                    />
                  </ExampleVariation>

                  <ExampleVariation
                    title="Grouped"
                    description="Meaningful groups help people predict where a destination belongs."
                    explanation="A sidebar is useful when navigation should remain available while people work through the main content. Group labels should describe the information architecture, not merely decorate it."
                    doItems={[
                      'Give the sidebar and its navigation a meaningful accessible name.',
                      'Use group labels to communicate information architecture, not just visual separation.',
                    ]}
                    dontItems={[
                      'Do not duplicate every header link without a clear reason.',
                      'Do not rely on indentation, color, or position alone to communicate grouping.',
                    ]}
                  >
                    <Sidebar
                      aria-label="Example section navigation"
                      items={userInterfaceSidebarLinks}
                      activeHref=""
                    />
                  </ExampleVariation>
                  <ExampleVariation title="With active item" description="Use the active state to show where people are within the current area." explanation="The active destination should be identifiable through styling and semantics, not color alone. Keep activeHref synchronized with the current route so people can understand where they are." doItems={[
                      'Set activeHref to the destination that represents the current page.',
                      'Keep the active treatment visible and understandable in every layout.',
                    ]} dontItems={[
                      'Use color alone to communicate the current location.',
                      'Mark multiple destinations active at the same time.',
                    ]}>
                    <Sidebar
                      aria-label="Grouped section navigation"
                      items={userInterfaceSidebarLinks}
                      activeHref="/components/sidebar"
                    />
                  </ExampleVariation>
                  <ExampleVariation
                    title="Icon-only"
                    description="An icon-only rail preserves navigation when the available space is limited."
                    explanation="Use the icon-only variant only when every destination has a recognizable icon and a usable label is still available through focus or tooltip behavior. This is a visual-density option, not a replacement for the mobile drawer; on small screens, the same navigation should remain available through the Header menu." doItems={[
                      'Pair every icon with a label that remains available to screen readers and keyboard users.',
                      'Use icon-only mode only when the destination set is familiar and the rail has enough room.',
                    ]} dontItems={[
                      'Do not make an icon-only rail the only path to an unfamiliar destination.',
                      'Do not rely on hover-only tooltips or leave keyboard focus without a useful label.',
                    ]}>
                    <Sidebar
                      aria-label="Icon-only section navigation"
                      items={userInterfaceSidebarLinks}
                      activeHref=""
                      variant="icon-only"
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

export { ComponentsSidebarPage }
