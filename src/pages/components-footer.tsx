/**
 * ComponentsFooterPage — Footer component usage guide.
 *
 * Explains how Footer provides quiet supporting navigation at the end of a page.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { PageBody } from '@/components/layout/page-body'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { SecondaryNav } from '@/components/layout/secondary-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { Footer } from '@/components/layout/footer'
import { PageShell } from '@/components/layout/page-shell'
import { primaryNav, footerLinks } from './index'
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
]

const userInterfaceSidebarLinks: NavGroup[] = [
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
function ComponentsFooterPage() {
  return (
    <LayoutProvider
      secondaryNav={componentSectionLinks}
      secondaryNavLabel="Component areas"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      activeHref="/components/footer"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Component areas" activeHref="/components/user-interface" />
        <PageBody>
          <Sidebar aria-label="User Interface" />
          <Main size="full">
            <div className="space-y-12 pb-12 pt-6">
              <section className="space-y-5" aria-labelledby="navigation-footer-heading">
                <h1
                  id="navigation-footer-heading"
                  className="text-4xl font-semibold tracking-tight"
                >
                  Footer navigation
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  Use Footer for supporting information and links that should remain available
                  without competing with the page's main task.
                </p>
              </section>
              <section className="space-y-5" aria-labelledby="navigation-footer-what-heading">
                <h2
                  id="navigation-footer-what-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  What is it for?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Footer creates the page's ending landmark. Its optional link list is useful for
                  secondary destinations such as privacy, terms, contact, or project information.
                </p>
              </section>
              <section
                className="grid gap-10 lg:grid-cols-2"
                aria-labelledby="navigation-footer-use-heading"
              >
                <div className="space-y-5">
                  <h2
                    id="navigation-footer-use-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    When to use it
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>For supporting links shared across pages.</li>
                    <li>For copyright or ownership information.</li>
                    <li>When a destination does not need primary or section-level emphasis.</li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="navigation-footer-not-heading">
                  <h2
                    id="navigation-footer-not-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    When not to use it
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>For the main path people need to complete a task.</li>
                    <li>For a large grouped navigation system.</li>
                    <li>As a substitute for a clearly named section menu.</li>
                  </ul>
                </div>
              </section>
              <section className="space-y-5" aria-labelledby="navigation-footer-design-heading">
                <h2
                  id="navigation-footer-design-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Design considerations
                </h2>

                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Keep supporting links quiet and easy to scan.</li>
                  <li>Allow the row to wrap naturally on narrow screens.</li>
                  <li>Keep the Footer aligned with Header and Main.</li>
                </ul>
              </section>

              <section
                className="space-y-5"
                aria-labelledby="navigation-footer-accessibility-heading"
              >
                <h2
                  id="navigation-footer-accessibility-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Accessibility considerations
                </h2>

                <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Keep the semantic footer landmark.</li>
                  <li>Use the named Footer navigation landmark when links exist.</li>
                  <li>Check focus visibility and the stacked mobile layout.</li>
                </ul>
              </section>
              <section className="space-y-5" aria-labelledby="navigation-footer-responsive-heading">
                <h2
                  id="navigation-footer-responsive-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Responsive behavior
                </h2>
                <p className="leading-7 text-muted-foreground">
                  On wider screens, the Footer content can sit in one row. On narrow screens, the
                  copyright and link navigation wrap or stack naturally. Nothing is hidden, and the
                  links remain reachable without horizontal scrolling.
                </p>
                <p className="leading-7 text-muted-foreground">
                  Check the narrow version with the longest realistic link label. Make sure each
                  link keeps a visible focus indicator, the Footer landmark remains discoverable,
                  and the link navigation has its own name when it is present.
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="navigation-footer-examples-heading">
                <h2
                  id="navigation-footer-examples-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Examples
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Keep supporting links available without competing with the page's main task. The
                  Footer below uses the shared GitHub link configuration used by the page shell.
                  Resize it to confirm the links wrap instead of overflowing, then tab through every
                  link to check the focus order and accessible names.
                </p>
                <div className="overflow-hidden rounded-xl border">
                  <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
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

export { ComponentsFooterPage }
