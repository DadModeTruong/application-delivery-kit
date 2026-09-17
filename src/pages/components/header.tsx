import { ExampleVariation } from '@/components/layout/example-variation'
import { Blocks, LayoutTemplate } from 'lucide-react'
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
                  What is it?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Header is the broadest navigation layer. Pass ordinary link data through{' '}
                  <code>nav</code>; the application or router still owns what happens at each path.
                </p>
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-xl border">
                    <Header
                      logo={{ href: '/', label: 'Application Delivery Kit' }}
                      nav={[
                        { label: 'Layouts', href: '/layouts' },
                        { label: 'Components', href: '/components' },
                      ]}
                    />
                  </div>
                </div>
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
                <h2 id="navigation-header-examples-heading" className="text-2xl font-semibold tracking-tight">
                  Examples and variations
                </h2>
                <p className="text-muted-foreground">
                  Compare the basic application header with a header that groups related destinations in a dropdown. Each example uses the same full-width variation structure as the Forms pages.
                </p>
                <div className="space-y-8">

                  <ExampleVariation
                  title="Basic"
                  description="A simple system header keeps the application name on the left and ordinary navigation links on the right."
                  explanation="Use the basic Header when the primary destinations can remain visible as individual links. The reusable component provides the shared layout, responsive behavior, focus treatment, and navigation semantics."
                  doItems={[
                    "Keep the application name or product identity on the left and primary destinations together on the right.",
                    "Use ordinary links when each destination should be immediately visible and directly reachable.",
                    "Let the reusable Header component provide consistent spacing, focus treatment, and responsive behavior.",
                  ]}
                  dontItems={[
                    "Do not hide primary destinations in a dropdown when they can remain visible in the header.",
                    "Do not recreate Header spacing or interaction styles in each page-level example.",
                    "Do not use the global Header for actions that apply only to the current page.",
                  ]}
                >
                  <Header
                    logo={{ href: '/', label: 'Application Delivery Kit' }}
                    nav={[
                      { label: 'Layouts', href: '/layouts' },
                      { label: 'Components', href: '/components' },
                    ]}
                  />
                </ExampleVariation>

                  <ExampleVariation title="With dropdown" description="A dropdown groups related destinations under a clear parent label while keeping the header compact." explanation="A dropdown is appropriate when a parent category has several closely related destinations and showing every link inline would make the header difficult to scan. The parent label should communicate the category, and the open menu must be fully keyboard-operable in the production implementation." doItems={["Use a meaningful category label, such as Services, that describes the destinations inside.", "Keep the menu short and group only destinations that share a clear relationship.", "Use specific link text inside the menu and preserve visible focus, Escape dismissal, and focus restoration."]} dontItems={["Do not hide a single high-priority destination inside a dropdown.", "Do not use a dropdown as a substitute for unclear information architecture or a long sitemap.", "Do not use ambiguous labels such as More when the available destinations can be named directly."]}>
                    <Header
                      logo={{ href: '/', label: 'Application Delivery Kit' }}
                      nav={[
                        { label: 'Layouts', href: '/layouts' },
                        {
                          label: 'Components',
                          children: [
                            { label: 'Forms', href: '/components/forms' },
                            { label: 'User interface', href: '/components/user-interface' },
                            { label: 'Interaction', href: '/components/interaction' },
                          ],
                        },
                      ]}
                    />
                  </ExampleVariation>

                  <ExampleVariation
                    title="With icons"
                    description="Icons can reinforce familiar navigation labels while the text remains the primary cue."
                    explanation="Use icons when they help people recognize a familiar destination or distinguish related navigation choices. Keep the visible label because icons alone are ambiguous, and use the same icon consistently wherever the destination appears."
                    doItems={[
                      "Pair each icon with a concise visible label and keep the icon secondary to the text.",
                      "Use familiar, consistent icons such as layout or component symbols when they add recognition value.",
                      "Keep icons decorative to assistive technology when the adjacent label already names the destination.",
                    ]}
                    dontItems={[
                      "Do not replace the navigation label with an icon alone.",
                      "Do not mix unrelated icon styles or use icons that require users to guess their meaning.",
                      "Do not add icons only for decoration when they make the navigation row harder to scan.",
                    ]}
                  >
                    <Header
                      logo={{ href: '/', label: 'Application Delivery Kit' }}
                      nav={[
                        { label: 'Layouts', href: '/layouts', icon: LayoutTemplate },
                        {
                          label: 'Components',
                          icon: Blocks,
                          children: [
                            { label: 'Forms', href: '/components/forms' },
                            { label: 'User interface', href: '/components/user-interface' },
                            { label: 'Interaction', href: '/components/interaction' },
                          ],
                        },
                      ]}
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

export { ComponentsHeaderPage }
