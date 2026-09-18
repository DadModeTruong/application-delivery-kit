import { ExampleVariation } from '@/components/layout/example-variation'
/**
 * ComponentsFooterPage — Footer component usage guide.
 *
 * Explains how Footer provides quiet supporting navigation at the end of a page.
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
import { Ellipsis, PanelBottom, PanelLeft, PanelRight, PanelTop, SquareStack } from 'lucide-react'
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
      { href: '/components/tab-navigation', label: 'Tab', icon: Ellipsis },
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
      tabNavigation={componentSectionLinks}
      tabNavigationLabel="Component areas"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      activeHref="/components/footer"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <TabNavigation aria-label="Component areas" activeHref="/components/user-interface" />
        <PageBody>
          <Sidebar aria-label="User Interface" />
          <Main size="full">
            <div className="space-y-12 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
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
                <p className="leading-7 text-muted-foreground">Use the Footer as an end-of-page region for legal, support, trust, and organizational destinations without competing with primary navigation.</p>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>Focus on secondary destinations such as Privacy, Terms, Accessibility, Help, Contact, or Status.</li>
                  <li>Use a simple footer for focused applications and grouped content only when the information architecture needs it.</li>
                  <li>Keep labels and order predictable across pages.</li>
                </ul>
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
                  <p className="leading-7 text-muted-foreground">Use a footer when a destination is useful at the end of a page but does not need persistent prominence in the Header, Sidebar, or Tab navigation.</p>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>Use one row for a short set of links and groups for a larger public-site footer.</li>
                  <li>Prioritize support, legal, accessibility, privacy, security, and organizational information.</li>
                  <li>Do not duplicate every primary application destination.</li>
                </ul>
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
                  <p className="leading-7 text-muted-foreground">Do not use the footer as a second site map or as a substitute for navigation needed during the main task.</p>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>Keep frequently used product areas in the Header, Sidebar, or Tab navigation.</li>
                  <li>Do not hide required actions, task progress, or important alerts at the bottom of the page.</li>
                  <li>If it becomes very tall, reduce or regroup links before adding interaction.</li>
                </ul>
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

                <p className="leading-7 text-muted-foreground">Use visual separation without making the footer feel like a second content area. A border, background change, and top spacing can establish the boundary while keeping content compact.</p>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>Use <code>contained</code> when aligning with page content and <code>full</code> when the background spans the viewport.</li>
                  <li>Keep copyright text secondary to actionable links.</li>
                  <li>Use clear group headings when the footer needs scanning support.</li>
                  <li>Limit each group so the footer does not become an unstructured site map.</li>
                </ul>
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

                <p className="leading-7 text-muted-foreground">Treat the footer as a named page landmark and make its links behave like normal document navigation.</p>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>Use a <code>&lt;footer&gt;</code> region and labeled <code>&lt;nav&gt;</code> for footer navigation.</li>
                  <li>Use real anchors with useful names, not generic clickable text or icons.</li>
                  <li>Verify keyboard order, visible focus, target spacing, and text and focus contrast.</li>
                  <li>Name icon-only social or external links and hide decorative icons from assistive technology.</li>
                </ul>
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
                <p className="leading-7 text-muted-foreground">Footer links should wrap naturally as the viewport narrows rather than forcing horizontal scrolling or unreadable text.</p>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>Preserve logical order when rows wrap.</li>
                  <li>Test long labels, translations, browser zoom, and narrow windows.</li>
                  <li>Keep enough gap between links for scanning and activation.</li>
                  <li>If a complex footer needs mobile disclosure later, use an accessible disclosure pattern rather than hiding links with CSS.</li>
                </ul>
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
                <h2 id="navigation-footer-examples-heading" className="text-2xl font-semibold tracking-tight">
                  Examples and variations
                </h2>
                <p className="text-sm text-muted-foreground">
                  Compare a minimal Footer with the current application Footer. Both examples use the
                  reusable Footer component; the difference is the link data passed to it.
                </p>
                <div className="space-y-8">
                  <ExampleVariation
                    title="Basic"
                    description="Use a compact Footer when the page needs copyright information and one supporting destination."
                    explanation="This keeps the Footer quiet and easy to scan: copyright is paired with one regular text link and no icon treatment."
                    doItems={[
                      'Keep the link label specific and useful.',
                      'Use this pattern when the page has only one important supporting destination.',
                    ]}
                    dontItems={[
                      'Do not add icons when a regular text link communicates the destination clearly.',
                      'Do not use the Footer as a replacement for primary navigation.',
                    ]}
                  >
                    <div className="overflow-hidden rounded-xl border">
                      <Footer
                        copyright={<>© 2026 Tommy Truong</>}
                        links={[{ href: '#footer-basic-link', label: 'Privacy' }]}
                      />
                    </div>
                  </ExampleVariation>
                  <ExampleVariation
                    title="With icon"
                    description="Use an icon-bearing external link when the destination has a recognizable service identity, like the current application Footer."
                    explanation="The reusable Footer receives the shared footerLinks configuration, including the GitHub icon, external destination, and accessible label used by the application shell."
                    doItems={[
                      'Use a familiar icon to reinforce an external service link.',
                      'Keep the visible label and accessible name understandable without the icon.',
                      'Use the same link configuration as the application shell when demonstrating the production pattern.',
                    ]}
                    dontItems={[
                      'Do not make an icon-only link the only way to understand the destination.',
                      'Do not add social or external links without a clear purpose.',
                    ]}
                  >
                    <div className="overflow-hidden rounded-xl border">
                      <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
                    </div>
                  </ExampleVariation>
                </div>
              </section>
            </div>
          </Main>
        </PageBody>
      </PageShell>
    </LayoutProvider>
  )
}

export { ComponentsFooterPage }
