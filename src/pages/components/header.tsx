import { ExampleVariation } from '@/components/layout/example-variation'
import { ChevronDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
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
                <h2 id="navigation-header-examples-heading" className="text-2xl font-semibold tracking-tight">
                  Examples
                </h2>
                <p className="text-muted-foreground">
                  Compare the basic application header with a header that groups related destinations in a dropdown. Each example uses the same full-width variation structure as the Forms pages.
                </p>
                <div className="space-y-8">
                  <ExampleVariation title="Basic" description="The application header provides the product identity and primary navigation used throughout the site." explanation="Use the same header structure that appears in the application shell so the guide demonstrates the real pattern. Link text should tell people where the link goes or what area it represents before they activate it." doItems={["Use short, specific nouns or noun phrases that describe the destination, such as Components or Forms.", "Keep navigation labels consistent across the header, sidebar, page titles, and links to the same destination.", "Use the current-page state to identify where someone is without changing the link’s meaning."]} dontItems={["Do not use vague labels such as Click here, Learn more, or Go.", "Do not make labels unnecessarily clever, promotional, or dependent on surrounding visual context.", "Do not put page-specific actions in the global header unless they apply across the product."]}>
                    <div className="flex items-center justify-between gap-6 px-4 py-3">
                      <a href="/" className="font-semibold tracking-tight">Application Delivery Kit</a>
                      <nav aria-label="Primary navigation" className="flex flex-wrap items-center justify-end gap-2">
                        <a href="/layouts" className="inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Layouts</a>
                        <a href="/components" className="inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Components</a>
                      </nav>
                    </div>
                  </ExampleVariation>
                  <ExampleVariation title="Basic, with dropdown" description="A dropdown groups related destinations under a clear parent label while keeping the header compact." explanation="A dropdown is appropriate when a parent category has several closely related destinations and showing every link inline would make the header difficult to scan. The parent label should communicate the category, and the open menu must be fully keyboard-operable in the production implementation." doItems={["Use a meaningful category label, such as Services, that describes the destinations inside.", "Keep the menu short and group only destinations that share a clear relationship.", "Use specific link text inside the menu and preserve visible focus, Escape dismissal, and focus restoration."]} dontItems={["Do not hide a single high-priority destination inside a dropdown.", "Do not use a dropdown as a substitute for unclear information architecture or a long sitemap.", "Do not use ambiguous labels such as More when the available destinations can be named directly."]}>
                    <div className="flex items-center justify-between gap-6 px-4 py-3">
                      <a href="/" className="font-semibold tracking-tight">Application Delivery Kit</a>
                      <nav aria-label="Primary" className="flex flex-wrap items-center justify-end gap-1">
                        <a href="/layouts" className="inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Layouts</a>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <Button variant="ghost" className="inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                              Components
                              <ChevronDownIcon className="size-4 shrink-0" aria-hidden="true" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuItem href="/components/forms">Forms</DropdownMenuItem>
                          <DropdownMenuItem href="/components/user-interface">User interface</DropdownMenuItem>
                          <DropdownMenuItem href="/components/interaction">Interaction</DropdownMenuItem>
                        </DropdownMenu>
                      </nav>
                    </div>
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
