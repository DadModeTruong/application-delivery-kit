/**
 * NavigationHeaderPage — Header component usage guide.
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
import { primaryNav, footerLinks } from './index'
import { componentSectionLinks, userInterfaceSidebarLinks } from './component-navigation'
function NavigationHeaderPage() {
  return (
    <LayoutProvider
      secondaryNav={componentSectionLinks}
      secondaryNavLabel="Component areas"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      activeHref="/components/navigation/header"
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

export { NavigationHeaderPage }
