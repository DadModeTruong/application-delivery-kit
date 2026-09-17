/**
 * ComponentsUserInterfacePage — introduction to the User Interface area.
 *
 * Explains the visual building blocks that help organize and present
 * information before directing people to the component guides.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { SecondaryNav } from '@/components/layout/secondary-nav'
import { Sidebar } from '@/components/layout/sidebar'
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
  { href: '/components/user-interface', label: 'User Interface' },
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
import { primaryNav, footerLinks } from '../page-registry'

/**
 * User Interface area introduction. Mounted by the demo router at
 * `/components/user-interface`.
 *
 * @example
 * { path: '/components/user-interface', component: ComponentsUserInterfacePage }
 */
function ComponentsUserInterfacePage() {
  return (
    <LayoutProvider
      secondaryNav={componentSectionLinks}
      secondaryNavLabel="Component areas"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      activeHref="/components/user-interface"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Component areas" />
        <PageBody>
          <Sidebar aria-label="User Interface" />
          <Main size="full">
            <div className="space-y-14 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
              <section className="space-y-5" aria-labelledby="user-interface-heading">
                <h1 id="user-interface-heading" className="text-4xl font-semibold tracking-tight">
                  User Interface
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  User interface components help people understand and move through information.
                  They create useful boundaries, establish hierarchy, and make a page easier to
                  scan.
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="user-interface-what-heading">
                <h2
                  id="user-interface-what-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  What belongs here?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  This area covers display and structure primitives. These components shape how
                  information is presented, but they do not decide what happens after someone
                  activates a control.
                </p>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>Use them to group related information into a clear visual unit.</li>
                  <li>Choose them when hierarchy and scanability matter more than decoration.</li>
                  <li>Keep their semantic meaning truthful to the content inside them.</li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="user-interface-guides-heading">
                <div className="space-y-2">
                  <h2 id="user-interface-guides-heading" className="text-2xl font-semibold tracking-tight">
                    Component guides
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    Start with the guide that matches the structure your content needs. Each guide
                    explains the component’s purpose, boundaries, accessibility considerations, and
                    responsive behavior.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    ['Header', '/components/header', 'Global identity and primary navigation.'],
                    ['Secondary navigation', '/components/secondary-nav', 'Navigation within a section or area.'],
                    ['Sidebar', '/components/sidebar', 'Persistent or contextual navigation.'],
                    ['Footer', '/components/footer', 'Supporting links and page-level closure.'],
                    ['Split View', '/components/split-view', 'Related content shown side by side.'],
                    ['Card', '/components/card', 'A bounded group of related content.'],
                  ].map(([label, href, description]) => (
                    <a
                      key={href}
                      href={href}
                      className="rounded-xl border bg-card p-5 shadow-xs transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <h3 className="font-semibold text-foreground">{label}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                    </a>
                  ))}
                </div>
              </section>

              <section
                className="grid gap-10 lg:grid-cols-2"
                aria-labelledby="user-interface-decisions-heading"
              >
                <div className="space-y-5">
                  <h2
                    id="user-interface-decisions-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    Good interface structure
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>Gives each group of content one clear job.</li>
                    <li>Uses headings and spacing to make relationships visible.</li>
                    <li>Still makes sense when the visual styling is removed.</li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="user-interface-not-heading">
                  <h2
                    id="user-interface-not-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    When not to add a visual container
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>
                      When a normal heading, paragraph, or list already makes the relationship
                      clear.
                    </li>
                    <li>
                      When a border or shadow would only add decoration without helping people scan.
                    </li>
                    <li>
                      When the visual treatment could make a non-interactive group look clickable.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="space-y-5" aria-labelledby="user-interface-guidance-heading">
                <h2
                  id="user-interface-guidance-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Good design and usage
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>
                    Start with the content relationship, then choose the visual container that makes
                    it clearer.
                  </li>
                  <li>
                    Give a group one clear purpose instead of combining unrelated information
                    because it fits on the page.
                  </li>
                  <li>
                    Use consistent spacing, headings, and alignment so people can compare groups
                    without relearning the page.
                  </li>
                  <li>
                    Let the content determine the amount of visual emphasis; not every group needs
                    the same treatment.
                  </li>
                  <li>Check the narrow layout before adding columns or extra decoration.</li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="user-interface-questions-heading">
                <h2
                  id="user-interface-questions-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Questions to ask
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>What information belongs together, and why?</li>
                  <li>
                    Can someone understand the group without relying on its border, color, or
                    shadow?
                  </li>
                  <li>Does the visual structure match the reading order on a small screen?</li>
                  <li>Would a plain section, heading, or list communicate this more clearly?</li>
                </ul>
              </section>
            </div>
          </Main>
        </PageBody>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

export { ComponentsUserInterfacePage }
