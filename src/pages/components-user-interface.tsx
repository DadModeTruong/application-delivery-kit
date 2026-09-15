/**
 * ComponentsUserInterfacePage — introduction to the User Interface area.
 *
 * Explains the visual building blocks that help organize and present
 * information before directing people to the component guides.
 */

import { SquareStack } from 'lucide-react'
import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { SecondaryNav } from '@/components/layout/secondary-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { LinkButton } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { NavLeaf } from '@/components/layout/types'
import { primaryNav, footerLinks } from './index'

const componentAreaLinks: NavLeaf[] = [
  { href: '/components/user-interface', label: 'User Interface' },
  { href: '/components/interaction', label: 'Interaction' },
]

const userInterfaceComponents: NavLeaf[] = [
  { href: '/components/card', label: 'Card', icon: SquareStack },
]

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
      secondaryNav={componentAreaLinks}
      secondaryNavLabel="Component areas"
      sidebarNav={userInterfaceComponents}
      sidebarNavLabel="User Interface components"
      activeHref="/components/user-interface"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Component areas" />
        <PageBody>
          <Sidebar aria-label="User Interface components" />
          <Main size="full">
            <div className="space-y-14 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
              <section className="space-y-5" aria-labelledby="user-interface-heading">
                <h1 id="user-interface-heading" className="text-4xl font-semibold tracking-tight">
                  User Interface
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  User interface components help people understand and move through information. They
                  create useful boundaries, establish hierarchy, and make a page easier to scan.
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="user-interface-what-heading">
                <h2 id="user-interface-what-heading" className="text-2xl font-semibold tracking-tight">
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

              <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="user-interface-decisions-heading">
                <div className="space-y-5">
                  <h2 id="user-interface-decisions-heading" className="text-2xl font-semibold tracking-tight">
                    Good interface structure
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>Gives each group of content one clear job.</li>
                    <li>Uses headings and spacing to make relationships visible.</li>
                    <li>Still makes sense when the visual styling is removed.</li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="user-interface-not-heading">
                  <h2 id="user-interface-not-heading" className="text-2xl font-semibold tracking-tight">
                    What it should not do
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>Turn every paragraph into a separate bordered surface.</li>
                    <li>Use a visual container to hide unclear content or navigation.</li>
                    <li>Suggest that a display component is interactive when it is not.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-5" aria-labelledby="user-interface-components-heading">
                <h2 id="user-interface-components-heading" className="text-2xl font-semibold tracking-tight">
                  Components in this area
                </h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Card</CardTitle>
                    <CardDescription>
                      A visual grouping primitive for related information, links, or actions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LinkButton href="/components/card" variant="outline">
                      Read the Card guide
                    </LinkButton>
                  </CardContent>
                </Card>
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
