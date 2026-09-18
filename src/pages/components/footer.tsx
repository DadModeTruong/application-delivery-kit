/**
 * Footer guide page.
 *
 * Use this page to copy the production Footer shell and learn how supporting
 * links, visible labels, icons, and responsive layout work together.
 */

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
  { href: '/components/user-interface', label: 'User Interface' },
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
                  Use Footer for supporting information and destinations at the end of a page,
                  without competing with the page&apos;s main task or primary navigation.
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="navigation-footer-what-heading">
                <h2
                  id="navigation-footer-what-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  What is it?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Footer is the page-ending region for secondary destinations such as privacy,
                  accessibility, help, contact, status, and ownership information. Place it after
                  the page&apos;s main content, not inside the main content area.
                </p>
                <p className="leading-7 text-muted-foreground">
                  The basic pattern is a quiet row with caller-owned copyright content and a small
                  set of specific links. When links are present, Footer adds a named navigation
                  landmark and keeps the links as normal keyboard-reachable anchors.
                </p>
                <div className="overflow-hidden rounded-xl border">
                  <Footer
                    bordered={false}
                    copyright={<>© 2026 Tommy Truong</>}
                    links={[
                      { href: '/privacy', label: 'Privacy' },
                      { href: '/accessibility', label: 'Accessibility' },
                    ]}
                  />
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  Try it: tab through the links and resize the preview. The links should remain
                  ordinary anchors with visible focus, and the row should wrap rather than scroll
                  horizontally.
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
                  <p className="leading-7 text-muted-foreground">
                    Use Footer when a destination is useful at the end of a page but does not need
                    persistent prominence during the main task.
                  </p>
                  <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                    <li>
                      For a short set of legal, support, accessibility, or organizational links.
                    </li>
                    <li>For copyright or ownership information shared across pages.</li>
                    <li>
                      For destinations that should be easy to find without becoming primary
                      navigation.
                    </li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="navigation-footer-not-heading">
                  <h2
                    id="navigation-footer-not-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    When not to use it
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    Do not use Footer as a second site map or as a substitute for navigation needed
                    while someone is completing the main task.
                  </p>
                  <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                    <li>
                      Keep frequently used product areas in Header, Sidebar, or Tab navigation.
                    </li>
                    <li>
                      Do not hide required actions, progress, or important alerts only at the bottom
                      of the page.
                    </li>
                    <li>
                      Do not turn a small footer into dense grouped navigation without a clear
                      information-architecture need.
                    </li>
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
                <p className="leading-7 text-muted-foreground">
                  Keep Footer visually secondary while making its destinations easy to scan. The
                  component supports contained or full-width layout, optional borders, caller-owned
                  copyright React content, and links with optional icons and external-link
                  treatment.
                </p>
                <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>
                    Use <code>contained</code> when the footer aligns with page content and{' '}
                    <code>full</code> when its layout spans the available width.
                  </li>
                  <li>
                    Use a border or background change to establish the page-ending boundary without
                    making a second content area.
                  </li>
                  <li>
                    Keep link labels specific and ordered consistently; do not add a familiar icon
                    when text already communicates the destination.
                  </li>
                  <li>
                    Use shared application link data for the production shell so examples do not
                    drift from the real Footer.
                  </li>
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
                <p className="leading-7 text-muted-foreground">
                  Place Footer after the page&apos;s main content so the native{' '}
                  <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-sm">footer</code>{' '}
                  element represents the page&apos;s content-info landmark. When links are provided,
                  the component supplies a named{' '}
                  <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-sm">Footer</code>{' '}
                  navigation landmark.
                </p>
                <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>
                    Use real anchors with meaningful names; do not use generic clickable text or
                    icon-only links.
                  </li>
                  <li>
                    Keep visible focus indicators, logical keyboard order, and enough spacing for
                    touch activation.
                  </li>
                  <li>
                    Treat leading icons as decorative when the visible label is the accessible name.
                  </li>
                  <li>
                    If an external link opens a new tab, make that behavior clear to assistive
                    technology and users.
                  </li>
                  <li>
                    Test link purpose, text and focus contrast, forced-colors behavior, and landmark
                    order in the complete page.
                  </li>
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
                  Footer uses wrapping flex layouts: the copyright content and link navigation wrap
                  as space becomes limited. It is not a fixed or sticky control, and links should
                  remain available without horizontal scrolling.
                </p>
                <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>Test contained and full-width layouts at narrow widths and browser zoom.</li>
                  <li>
                    Use the longest realistic copyright and link labels when checking wrap points.
                  </li>
                  <li>
                    Preserve source order so copyright content and links remain understandable when
                    they wrap.
                  </li>
                  <li>
                    If a complex footer needs mobile disclosure, use an accessible disclosure
                    pattern rather than hiding links with CSS.
                  </li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="navigation-footer-examples-heading">
                <h2
                  id="navigation-footer-examples-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Examples and variations
                </h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  Compare the basic text-link pattern with the production shell configuration and a
                  full-width layout. Each preview uses the reusable Footer component; only its
                  supported data and layout options change.
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Try it: tab through every link, activate the external link, and resize until the
                  content wraps. Confirm that focus stays visible, link purpose remains clear, and
                  no destination becomes unreachable.
                </p>
                <div className="space-y-8 [&_*:has(>footer)]:!p-0 [&_*:has(>footer)]:overflow-hidden">
                  <ExampleVariation
                    title="Basic"
                    description="Use a compact text-link Footer when a few supporting destinations are enough."
                    explanation="The caller provides copyright content and ordinary same-site link destinations. Replace these illustrative paths with destinations that exist in the consuming application."
                    doItems={[
                      'Keep link labels specific and useful.',
                      'Use a small set of destinations that support the page without duplicating primary navigation.',
                    ]}
                    dontItems={[
                      'Do not use placeholder anchors that have no destination.',
                      'Do not make Footer the only way to reach an important task action.',
                    ]}
                  >
                    <Footer
                      copyright={<>© 2026 Tommy Truong</>}
                      links={[
                        { href: '/privacy', label: 'Privacy' },
                        { href: '/accessibility', label: 'Accessibility' },
                      ]}
                    />
                  </ExampleVariation>
                  <ExampleVariation
                    title="Production shell"
                    description="Use icon-and-text links when the production shell needs recognizable destinations and supporting visual cues."
                    explanation="This variation uses the same footerLinks data as the application shell, including links that pair a visible label with a supporting icon. The icon is decorative when the text already names the destination; external-link behavior remains part of the link contract."
                    doItems={[
                      'Centralize shared Footer link data so shell and guides do not drift.',
                      'Keep the visible label understandable without relying on the icon.',
                      'Use external-link behavior only when opening a new tab is an intentional product choice.',
                    ]}
                    dontItems={[
                      'Do not copy repository-specific links into another product without changing their destination and purpose.',
                      'Do not make an icon-only link the only name for an external destination.',
                    ]}
                  >
                    <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
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

export { ComponentsFooterPage }
