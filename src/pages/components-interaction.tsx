/**
 * ComponentsInteractionPage — introduction to the Interaction area.
 *
 * Explains how interaction components communicate actions and state,
 * then directs people to the component guides.
 */

import { MousePointerClick } from 'lucide-react'
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

const interactionComponents: NavLeaf[] = [
  { href: '/components/button', label: 'Button', icon: MousePointerClick },
]

/**
 * Interaction area introduction. Mounted by the demo router at
 * `/components/interaction`.
 *
 * @example
 * { path: '/components/interaction', component: ComponentsInteractionPage }
 */
function ComponentsInteractionPage() {
  return (
    <LayoutProvider
      secondaryNav={componentAreaLinks}
      secondaryNavLabel="Component areas"
      sidebarNav={interactionComponents}
      sidebarNavLabel="Interaction components"
      activeHref="/components/interaction"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Component areas" />
        <PageBody>
          <Sidebar aria-label="Interaction components" />
          <Main size="full">
            <div className="space-y-14 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
              <section className="space-y-5" aria-labelledby="interaction-heading">
                <h1 id="interaction-heading" className="text-4xl font-semibold tracking-tight">
                  Interaction
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  Interaction components help people do something: save a change, open a view, move
                  somewhere else, or understand what is available right now.
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="interaction-what-heading">
                <h2 id="interaction-what-heading" className="text-2xl font-semibold tracking-tight">
                  What belongs here?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  This area covers controls that respond to input and communicate an action or state.
                  The most important choice is the semantic one: use a button for an action and a link
                  for navigation.
                </p>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>Give every control a clear name that describes the result.</li>
                  <li>Use visual emphasis to show which actions matter most.</li>
                  <li>Keep focus, keyboard, disabled, and other states understandable.</li>
                </ul>
              </section>

              <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="interaction-decisions-heading">
                <div className="space-y-5">
                  <h2 id="interaction-decisions-heading" className="text-2xl font-semibold tracking-tight">
                    Good interaction design
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>Uses a verb that tells people what will happen.</li>
                    <li>Shows when an action is unavailable or needs attention.</li>
                    <li>Works with a keyboard and exposes its state to assistive technology.</li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="interaction-not-heading">
                  <h2 id="interaction-not-heading" className="text-2xl font-semibold tracking-tight">
                    What it should not do
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>Use a button when the real job is navigating to another page.</li>
                    <li>Make a destructive action look identical to a safe alternative.</li>
                    <li>Hide the action's meaning behind an unlabeled icon.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-5" aria-labelledby="interaction-components-heading">
                <h2 id="interaction-components-heading" className="text-2xl font-semibold tracking-tight">
                  Components in this area
                </h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Button</CardTitle>
                    <CardDescription>
                      A control for clear actions, with variants and states that support the task.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LinkButton href="/components/button" variant="outline">
                      Read the Button guide
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

export { ComponentsInteractionPage }
