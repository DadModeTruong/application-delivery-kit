import { ExampleVariation } from '@/components/layout/example-variation'
/**
 * ComponentsHeaderPage — Header component usage guide.
 *
 * Explains how the Header handles broad destinations, actions, and
 * responsive navigation without taking ownership of application routing.
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
function ComponentsHeaderPage() {
  return (
    <LayoutProvider
      secondaryNav={componentSectionLinks}
      secondaryNavLabel="Component areas"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      activeHref="/components/header"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Component areas" activeHref="/components/user-interface" />
        <PageBody>
          <Sidebar aria-label="User Interface" />
          <Main size="full">
            <div className="space-y-12 pb-12 pt-6">
              <section className="space-y-5" aria-labelledby="navigation-header-heading">
                <h1
                  id="navigation-header-heading"
                  className="text-4xl font-semibold tracking-tight"
                >
                  Header navigation
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  Use Header for the destinations people need across the whole application. It
                  provides the top-level landmark, logo, primary links, optional dropdowns, actions,
                  and mobile menu trigger.
                </p>
              </section>
              <section className="space-y-5" aria-labelledby="navigation-header-what-heading">
                <h2
                  id="navigation-header-what-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  What is it for?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Header is the broadest navigation layer. Pass ordinary link data through{' '}
                  <code>nav</code>; the application or router still owns what happens at each path.
                </p>
              </section>
              <section
                className="grid gap-10 lg:grid-cols-2"
                aria-labelledby="navigation-header-use-heading"
              >
                <div className="space-y-5">
                  <h2
                    id="navigation-header-use-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    When to use it
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>For destinations that remain useful across the application.</li>
                    <li>For one-level groups of related top-level links.</li>
                    <li>For a logo, primary navigation, and a small set of actions.</li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="navigation-header-not-heading">
                  <h2
                    id="navigation-header-not-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    When not to use it
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>For every link in a deep section map.</li>
                    <li>For a long list that needs grouping and scanning space.</li>
                    <li>For section-only links that would compete with primary destinations.</li>
                  </ul>
                </div>
              </section>
              <section className="space-y-5" aria-labelledby="navigation-header-design-heading">
                <h2
                  id="navigation-header-design-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Design considerations
                </h2>

                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Keep the primary list short enough to scan.</li>
                  <li>Use dropdowns for one level only.</li>
                  <li>Keep actions visually separate from navigation.</li>
                </ul>
              </section>

              <section
                className="space-y-5"
                aria-labelledby="navigation-header-accessibility-heading"
              >
                <h2
                  id="navigation-header-accessibility-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Accessibility considerations
                </h2>

                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>
                    Keep the named <code>Primary</code> landmark.
                  </li>
                  <li>Use the skip link to reach Main.</li>
                  <li>Test keyboard focus, dropdown controls, and the mobile drawer.</li>
                </ul>
              </section>
              <section className="space-y-5" aria-labelledby="navigation-header-responsive-heading">
                <h2
                  id="navigation-header-responsive-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Responsive behavior
                </h2>
                <p className="leading-7 text-muted-foreground">
                  On wider screens, the primary links sit in the Header. On narrow screens, they
                  move into the mobile menu and the menu trigger remains available, so the Header
                  does not crowd the page. The logo and the main task remain easy to find.
                </p>
                <p className="leading-7 text-muted-foreground">
                  The mobile menu is a replacement for the desktop link row, not a second copy of
                  it. Check that opening it exposes the same destinations and that focus can enter,
                  move through, and leave the menu predictably.
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="navigation-header-examples-heading">
                <h2
                  id="navigation-header-examples-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Examples
                </h2>
                <p className="text-sm text-muted-foreground">Try it: Resize the page and move through the links with the keyboard. Confirm that the header remains identifiable, the current page is understandable, and focus stays visible as the layout changes.</p>

                <div className="space-y-8">
                  <ExampleVariation title="Basic" description="Brand identity and primary destinations share one predictable region." explanation="A global header establishes where someone is and how to move through the product. Keep page-specific actions with the page content unless they truly apply everywhere." doItems={["Give the header and primary navigation meaningful accessible names.", "Keep the brand, primary destinations, and focus order consistent across pages."]} dontItems={["Do not put every page-specific action in the global header.", "Do not communicate the current destination through color alone."]}>
                    <header aria-label="Site header" className="flex flex-wrap items-center justify-between gap-4"><a href="#header-basic-brand" className="font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Acme</a><nav aria-label="Primary navigation" className="flex flex-wrap gap-3 text-sm"><a href="#header-basic-home" aria-current="page" className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Home</a><a href="#header-basic-work" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Work</a><a href="#header-basic-about" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">About</a></nav></header>
                  </ExampleVariation>
                  <ExampleVariation title="Header with utility action" description="A global action stays separate from destination links." explanation="Utility actions such as account access or sign out can live in the header when they are available across the product and have a clear global scope." doItems={["Separate navigation links from actions in the markup and focus order.", "Use an action label that describes the consequence, such as Sign out."]} dontItems={["Do not style a state-changing action as if it were a destination link.", "Do not place a local record action in a global utility area."]}>
                    <header aria-label="Account header" className="flex flex-wrap items-center justify-between gap-4"><span className="font-semibold">Acme workspace</span><div className="flex flex-wrap items-center gap-3"><nav aria-label="Workspace navigation" className="flex gap-3 text-sm"><a href="#header-utility-dashboard" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Dashboard</a><a href="#header-utility-reports" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Reports</a></nav><button type="button" className="rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Sign out</button></div></header>
                  </ExampleVariation>
                  <ExampleVariation title="Compact header" description="At narrow widths, preserve access to navigation instead of hiding it." explanation="A compact header is a responsive arrangement, not permission to remove essential destinations. The production menu must manage its open state and focus." doItems={["Give the menu trigger a specific accessible name.", "Keep the brand and essential utility access visible at narrow widths."]} dontItems={["Do not hide navigation without providing an equivalent control.", "Do not treat a static menu button as a complete mobile navigation implementation."]}>
                    <header aria-label="Compact site header" className="flex items-center justify-between gap-3"><button type="button" aria-label="Open primary navigation" className="rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Menu</button><span className="font-semibold">Acme</span><a href="#header-compact-help" className="text-sm underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Help</a></header>
                  </ExampleVariation>
                </div>
                <p className="leading-7 text-muted-foreground">
                  This is the Header pattern in isolation: a logo, a short primary navigation list,
                  and the mobile menu behavior described above. The page shell already uses the same
                  component at the top of this page. Resize the example to see the desktop links
                  become a mobile menu, then open that menu with a mouse and keyboard. Verify the
                  trigger and links have clear names and visible focus.
                </p>
                <div className="overflow-hidden rounded-xl border">
                  <Header
                    logo={{ href: '/', label: 'Application Delivery Kit' }}
                    nav={primaryNav}
                  />
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

export { ComponentsHeaderPage }
