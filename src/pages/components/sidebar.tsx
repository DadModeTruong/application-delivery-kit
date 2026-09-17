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
                  What is it for?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Sidebar gives a section enough space for groups, icons, and an active page state
                  without making the Header carry every link.
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
                  Examples
                </h2>
                <p className="text-sm text-muted-foreground">Try it: Use Tab and activate a guide link, then resize the page. Confirm that the navigation has a meaningful label, the current location is clear, and the content remains reachable when the sidebar collapses or stacks.</p>
                <div className="space-y-6">
                  <article className="space-y-4 rounded-lg border bg-card p-6"><div><h3 className="text-lg font-semibold">Grouped navigation</h3><p className="mt-1 text-sm text-muted-foreground">Meaningful groups help people predict where a destination belongs.</p></div><div className="rounded-md border bg-muted/20 p-4"><aside aria-label="Account navigation" className="space-y-4 text-sm"><div><p className="mb-2 font-semibold">Account</p><nav aria-label="Account links" className="space-y-2"><a href="#sidebar-profile" className="block underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Profile</a><a href="#sidebar-security" aria-current="page" className="block font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Security</a></nav></div><div><p className="mb-2 font-semibold">Workspace</p><a href="#sidebar-members" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Members</a></div></aside></div><div className="space-y-1 text-sm"><p><strong>Use when:</strong> a product has enough related destinations to benefit from persistent orientation.</p><p><strong>Avoid when:</strong> a short list would be clearer as inline or secondary navigation.</p><p><strong>Check:</strong> the sidebar has a meaningful label, clear groups, and a semantic current-page marker.</p></div></article>
                  <article className="space-y-4 rounded-lg border bg-card p-6"><div><h3 className="text-lg font-semibold">Nested navigation</h3><p className="mt-1 text-sm text-muted-foreground">Use nesting to show hierarchy, not to create an unrelated second menu.</p></div><div className="rounded-md border bg-muted/20 p-4"><aside aria-label="Documentation navigation" className="text-sm"><nav aria-label="Documentation links" className="space-y-2"><a href="#sidebar-docs" className="block font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Guides</a><div className="ml-4 space-y-2 border-l pl-3"><a href="#sidebar-foundations" aria-current="page" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Foundations</a><a href="#sidebar-patterns" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Patterns</a></div></nav></aside></div><div className="space-y-1 text-sm"><p><strong>Use when:</strong> child pages are genuinely subordinate to a parent destination.</p><p><strong>Avoid when:</strong> nesting creates more than a few levels or hides destinations behind ambiguous labels.</p><p><strong>Check:</strong> hierarchy is conveyed in text and structure, not indentation or color alone.</p></div></article>
                  <article className="space-y-4 rounded-lg border bg-card p-6"><div><h3 className="text-lg font-semibold">Compact or temporary sidebar</h3><p className="mt-1 text-sm text-muted-foreground">On small screens, a drawer or stacked region can replace persistent space.</p></div><div className="rounded-md border bg-muted/20 p-4"><div className="flex items-center justify-between gap-3"><span className="font-semibold">Settings</span><button type="button" aria-label="Open settings navigation" className="rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Menu</button></div></div><div className="space-y-1 text-sm"><p><strong>Use when:</strong> persistent navigation would crowd the main content or reduce touch-target size.</p><p><strong>Avoid when:</strong> users need constant comparison between navigation and content.</p><p><strong>Check:</strong> the production drawer manages focus, has a close name, and restores focus on dismissal.</p></div></article>
                </div>
                <p className="leading-7 text-muted-foreground">
                  Group links when people need a deeper map of the current section. The grouped
                  example below uses the same Navigation, Layout, and Display groups as this area.
                  It is visible at medium widths and above; on a narrow screen, the rail
                  intentionally disappears and these same links are available from the Header's
                  mobile menu.
                </p>
                <p className="leading-7 text-muted-foreground">
                  Resize the example and test both paths: use a keyboard to reach the menu trigger,
                  open the drawer, move through the grouped links, and close it without losing your
                  place.
                </p>
                <div className="rounded-xl border">
                  <Sidebar
                    aria-label="Example section navigation"
                    items={userInterfaceSidebarLinks}
                    activeHref="/components/sidebar"
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

export { ComponentsSidebarPage }
