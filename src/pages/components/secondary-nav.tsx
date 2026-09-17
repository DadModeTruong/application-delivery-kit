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
            <div className="space-y-12 pb-12 pt-6">
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
                  What is it for?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  SecondaryNav gives people nearby context without mixing section links into the
                  application-wide Header. It renders real anchors and marks the active page with{' '}
                  <code>aria-current="page"</code>.
                </p>
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
                  links are replaced by the Header's mobile menu.
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
                  Examples
                </h2>
                <p className="text-sm text-muted-foreground">Try it: Use Tab to reach the navigation, activate a link, and resize the page. Confirm that the active area is communicated without relying on color alone and that the links remain usable on narrow screens.</p>
                <div className="space-y-10">
                  <article className="space-y-8 border-b pb-10 last:border-0 last:pb-0"><div><h3 className="text-lg font-semibold">Basic contextual navigation</h3><p className="mt-1 text-sm text-muted-foreground">A labeled navigation region groups destinations inside one product area.</p></div><div className="rounded-lg border bg-muted/20 p-6"><nav aria-label="Project sections" className="flex flex-wrap gap-4 text-sm"><a href="#secondary-overview" aria-current="page" className="font-semibold underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Overview</a><a href="#secondary-activity" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Activity</a><a href="#secondary-settings" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Settings</a></nav></div><div className="space-y-3 text-sm">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2 border-l-2 border-emerald-600 pl-4">
                          <p className="font-semibold">Do</p>
                          <p className="mt-1">people move between related sections while staying in the same area.</p>
                        </div>
                        <div className="space-y-2 border-l-2 border-rose-600 pl-4">
                          <p className="font-semibold">Don’t</p>
                          <p className="mt-1">there is only one destination or the items represent sequential steps.</p>
                        </div>
                      </div>
                      <p><strong>Check:</strong> the navigation has a useful label and the active destination uses semantic state.</p>
                    </div></article>
                  <article className="space-y-8 border-b pb-10 last:border-0 last:pb-0"><div><h3 className="text-lg font-semibold">Long list with overflow</h3><p className="mt-1 text-sm text-muted-foreground">A bounded region can preserve access to all items without forcing the page wider.</p></div><div className="overflow-x-auto rounded-lg border bg-muted/20 p-6"><nav aria-label="Workspace sections" className="flex min-w-max gap-4 text-sm"><a href="#secondary-one" aria-current="page" className="font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Overview</a><a href="#secondary-two" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Members</a><a href="#secondary-three" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Billing</a><a href="#secondary-four" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Integrations</a><a href="#secondary-five" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Audit log</a></nav></div><div className="space-y-3 text-sm">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2 border-l-2 border-emerald-600 pl-4">
                          <p className="font-semibold">Do</p>
                          <p className="mt-1">horizontal scrolling is an understood, discoverable response to a short row of related links.</p>
                        </div>
                        <div className="space-y-2 border-l-2 border-rose-600 pl-4">
                          <p className="font-semibold">Don’t</p>
                          <p className="mt-1">users need to see all choices at once or the list is too long to scan.</p>
                        </div>
                      </div>
                      <p><strong>Check:</strong> keyboard users can reach every item and the overflow treatment does not hide the active state.</p>
                    </div></article>
                  <article className="space-y-8 border-b pb-10 last:border-0 last:pb-0"><div><h3 className="text-lg font-semibold">Narrow-screen alternative</h3><p className="mt-1 text-sm text-muted-foreground">Collapse only when the implementation provides an equivalent menu.</p></div><div className="rounded-lg border bg-muted/20 p-6"><div className="flex items-center justify-between gap-3"><span className="font-semibold">Project sections</span><button type="button" aria-label="Open project sections" className="rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Sections</button></div></div><div className="space-y-3 text-sm">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2 border-l-2 border-emerald-600 pl-4">
                          <p className="font-semibold">Do</p>
                          <p className="mt-1">the full row cannot remain readable at the target width.</p>
                        </div>
                        <div className="space-y-2 border-l-2 border-rose-600 pl-4">
                          <p className="font-semibold">Don’t</p>
                          <p className="mt-1">the menu hides high-frequency navigation without a strong reason.</p>
                        </div>
                      </div>
                      <p><strong>Check:</strong> expanded state, focus movement, Escape dismissal, and focus restoration are implemented—not merely styled.</p>
                    </div></article>
                </div>
                <p className="leading-7 text-muted-foreground">
                  Use a short list of peer links for nearby pages. These are the same real anchors
                  people can use in the Header drawer on a smaller screen. The isolated row is
                  intentionally hidden on narrow screens, so use the page Header above to inspect
                  the mobile replacement and confirm the current page remains announced.
                </p>
                <div className="rounded-xl border">
                  <SecondaryNav
                    aria-label="Example section links"
                    items={componentSectionLinks}
                    activeHref="/components/user-interface"
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

export { ComponentsSecondaryNavPage }
