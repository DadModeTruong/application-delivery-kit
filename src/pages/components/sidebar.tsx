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

const basicSidebarLinks: NavLeaf[] = [
  { href: '/components/sidebar', label: 'Overview' },
  { href: '/components/secondary-nav', label: 'Secondary navigation' },
  { href: '/components/header', label: 'Header' },
]

function ComponentsSidebarPage() {
  return (
    <LayoutProvider
      secondaryNav={componentSectionLinks}
      secondaryNavLabel="Component areas"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      activeHref="/components/sidebar"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Component areas" activeHref="/components/user-interface" />
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
                  Sidebar gives a section enough space for groups, icons, and an active page state
                  without making the Header carry every link.
                </p>
                <div className="overflow-hidden rounded-xl border">
                  <Sidebar
                    aria-label="Sidebar recognition example"
                    items={basicSidebarLinks}
                    activeHref="/components/sidebar"
                  />
                </div>
                <p className="leading-7 text-muted-foreground">
                  Sidebar navigation is a persistent, hierarchical map of an area’s destinations. Use it when people need to move among related pages while keeping their place in the main content; use Header for broad product navigation and SecondaryNav for a smaller set of nearby destinations.
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
                    <li>For a deeper set of related pages.</li>
                    <li>When grouped labels improve scanning.</li>
                    <li>When the page has enough width for a persistent rail.</li>
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
                    <li>For only two or three peer links.</li>
                    <li>For broad destinations shared by the whole application.</li>
                    <li>When the rail would take more space than the content earns.</li>
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
                  <li>Keep groups meaningful and short.</li>
                  <li>Use icons only when they help recognition.</li>
                  <li>Keep Main first in the DOM reading order.</li>
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
                  <li>Give the rail a specific landmark name.</li>
                  <li>Mark the current page on its link.</li>
                  <li>Test the mobile drawer and keyboard focus order.</li>
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
                  On wider screens, the Sidebar sits beside Main. On narrow screens, the visible
                  rail disappears so it does not compete with the page content; its same grouped
                  links move into the Header's mobile menu. Main remains the first reading area.
                </p>
                <p className="leading-7 text-muted-foreground">
                  This is expected, not missing content. Open the mobile menu to reach the groups,
                  and confirm that the drawer has a clear name, the current page is still marked,
                  and focus returns to the menu trigger when it closes.
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="navigation-sidebar-examples-heading">
                <h2
                  id="navigation-sidebar-examples-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Examples and variations
                </h2>
                <p className="text-sm text-muted-foreground">Try it: Use Tab and activate a guide link, then resize the page. Confirm that the navigation has a meaningful label, the current location is clear, and the content remains reachable when the sidebar collapses or stacks.</p>

                <div className="space-y-8 [&_*:has(>[data-slot=sidebar])]:!p-0 [&_*:has(>[data-slot=sidebar])]:overflow-hidden">
                  <ExampleVariation
                    title="Basic"
                    description="A short, ungrouped list is the simplest Sidebar pattern."
                    explanation="Use a basic Sidebar when an area has a small set of peer destinations and grouping would add more structure than people need. Keep the labels specific and preserve the current destination state."
                    doItems={[
                      'Use a short list of peer destinations with clear labels.',
                      'Keep the active destination visible and semantically identified.',
                    ]}
                    dontItems={[
                      'Add group headings when all destinations belong to the same level.',
                      'Use a Sidebar for a short list that would be clearer as Secondary navigation.',
                    ]}
                  >
                    <Sidebar
                      aria-label="Basic section navigation"
                      items={basicSidebarLinks}
                      activeHref="/components/sidebar"
                    />
                  </ExampleVariation>

                  <ExampleVariation title="Grouped" description="Meaningful groups help people predict where a destination belongs." explanation="A sidebar is useful when navigation should remain available while people work through the main content. Group labels should describe the information architecture, not merely decorate it." doItems={["Give the sidebar and its navigation a meaningful accessible name.", "Show the current page with semantic state and a visible treatment."]} dontItems={["Do not duplicate every header link without a clear reason.", "Do not rely on indentation, color, or position alone to communicate grouping."]}>
                    <Sidebar
                      aria-label="Example section navigation"
                      items={userInterfaceSidebarLinks}
                      activeHref="/components/sidebar"
                    />
                  </ExampleVariation>
                  <ExampleVariation title="With active item" description="Use the active state to show where people are within the current area." explanation="The active destination should be identifiable through styling and semantics, not color alone. Keep activeHref synchronized with the current route so people can understand where they are." doItems={["Use text and structure to communicate parent and child relationships.", "Keep the active child and its parent context visible."]} dontItems={["Do not create deep nesting that hides destinations.", "Do not use indentation as the only indication of hierarchy."]}>
                    <Sidebar
                      aria-label="Grouped section navigation"
                      items={userInterfaceSidebarLinks}
                      activeHref="/components/forms"
                    />
                  </ExampleVariation>
                  <ExampleVariation title="Compact or temporary sidebar" description="On small screens, a drawer or stacked region can replace persistent space." explanation="Responsive navigation should preserve the same destinations while adapting the amount of persistent space. A temporary drawer needs focus management, a close action, and dismissal behavior." doItems={["Keep the main content first in the reading order when the navigation is temporary.", "Make the trigger, close control, and expanded state understandable."]} dontItems={["Do not remove navigation because it does not fit beside the content.", "Do not trap focus or leave focus behind an open drawer."]}>
                    <Sidebar
                      aria-label="Compact section navigation"
                      items={userInterfaceSidebarLinks}
                      activeHref="/components/sidebar"
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
