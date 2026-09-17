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
                <div className="space-y-10">
                  <article className="space-y-8 border-b pb-10 last:border-0 last:pb-0">
                    <div><h3 className="text-lg font-semibold">Basic global header</h3><p className="mt-1 text-sm text-muted-foreground">Brand identity and primary destinations share one predictable region.</p></div>
                    <div className="rounded-lg border bg-muted/20 p-6"><header aria-label="Site header" className="flex flex-wrap items-center justify-between gap-4"><a href="#header-example-brand" className="font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Acme</a><nav aria-label="Primary navigation" className="flex flex-wrap gap-3 text-sm"><a href="#header-example-home" aria-current="page" className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Home</a><a href="#header-example-work" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Work</a><a href="#header-example-about" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">About</a></nav></header></div>
                    <div className="space-y-3 text-sm">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2 border-l-2 border-emerald-600 pl-4">
                          <p className="font-semibold">Do</p>
                          <p className="mt-1">people need consistent access to identity and top-level destinations.</p>
                        </div>
                        <div className="space-y-2 border-l-2 border-rose-600 pl-4">
                          <p className="font-semibold">Don’t</p>
                          <p className="mt-1">the region is being used to hold every page-specific control.</p>
                        </div>
                      </div>
                      <p><strong>Check:</strong> the header and primary navigation have meaningful landmarks and the current destination is not communicated by color alone.</p>
                    </div>
                  </article>
                  <article className="space-y-8 border-b pb-10 last:border-0 last:pb-0"><div><h3 className="text-lg font-semibold">Header with utility action</h3><p className="mt-1 text-sm text-muted-foreground">A global action stays separate from destination links.</p></div><div className="rounded-lg border bg-muted/20 p-6"><header aria-label="Account header" className="flex flex-wrap items-center justify-between gap-4"><span className="font-semibold">Acme workspace</span><div className="flex flex-wrap items-center gap-3"><nav aria-label="Workspace navigation" className="flex gap-3 text-sm"><a href="#header-example-dashboard" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Dashboard</a><a href="#header-example-reports" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Reports</a></nav><button type="button" className="rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Sign out</button></div></header></div><div className="space-y-3 text-sm">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2 border-l-2 border-emerald-600 pl-4">
                          <p className="font-semibold">Do</p>
                          <p className="mt-1">an action is available across the product and has a clear global consequence.</p>
                        </div>
                        <div className="space-y-2 border-l-2 border-rose-600 pl-4">
                          <p className="font-semibold">Don’t</p>
                          <p className="mt-1">the action only applies to the current page or record.</p>
                        </div>
                      </div>
                      <p><strong>Check:</strong> links and buttons retain their native semantics and focus order.</p>
                    </div></article>
                  <article className="space-y-8 border-b pb-10 last:border-0 last:pb-0"><div><h3 className="text-lg font-semibold">Compact header</h3><p className="mt-1 text-sm text-muted-foreground">At narrow widths, preserve access to navigation instead of hiding it.</p></div><div className="rounded-lg border bg-muted/20 p-6"><header aria-label="Compact site header" className="flex items-center justify-between gap-3"><button type="button" aria-label="Open primary navigation" className="rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Menu</button><span className="font-semibold">Acme</span><a href="#header-example-help" className="text-sm underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Help</a></header></div><div className="space-y-3 text-sm">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2 border-l-2 border-emerald-600 pl-4">
                          <p className="font-semibold">Do</p>
                          <p className="mt-1">the full navigation cannot fit without damaging readability or touch targets.</p>
                        </div>
                        <div className="space-y-2 border-l-2 border-rose-600 pl-4">
                          <p className="font-semibold">Don’t</p>
                          <p className="mt-1">a menu button would hide a destination people need to compare frequently.</p>
                        </div>
                      </div>
                      <p><strong>Check:</strong> the trigger has an accessible name, a visible focus state, and a real open/close behavior in the production implementation.</p>
                    </div></article>
                  <article className="space-y-8 border-b pb-10 last:border-0 last:pb-0"><div><h3 className="text-lg font-semibold">Page-specific action</h3><p className="mt-1 text-sm text-muted-foreground">A local action belongs with the page heading, not in the global header.</p></div><div className="rounded-lg border bg-muted/20 p-6"><div className="flex flex-wrap items-center justify-between gap-4"><h3 className="font-semibold">Project settings</h3><button type="button" className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Save changes</button></div></div><div className="space-y-3 text-sm">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2 border-l-2 border-emerald-600 pl-4">
                          <p className="font-semibold">Do</p>
                          <p className="mt-1">the action changes the current page or record.</p>
                        </div>
                        <div className="space-y-2 border-l-2 border-rose-600 pl-4">
                          <p className="font-semibold">Don’t</p>
                          <p className="mt-1">the action is needed from every page.</p>
                        </div>
                      </div>
                      <p><strong>Check:</strong> its placement and accessible name explain its scope before activation.</p>
                    </div></article>
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
