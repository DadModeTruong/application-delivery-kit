/**
 * HomePage — the ongoing introduction to Application Delivery Kit.
 *
 * This page is for the project itself. As the kit grows, use it to explain
 * what has been added, why it exists, and where to start.
 */

import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageShell } from '@/components/layout/page-shell'
import { Columns } from '@/components/layout/columns'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { primaryNav, footerLinks } from './index'

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------

/**
 * Project introduction page. Mounted by the demo router at `/`.
 *
 * @example
 * { path: '/', component: HomePage }
 */
function HomePage() {
  return (
    <PageShell>
      <SkipLink />
      <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
      <Main>
        <div className="space-y-16 pb-12">
          <section className="space-y-6 pt-8" aria-labelledby="intro-heading">
            <h1 id="intro-heading" className="text-4xl font-semibold tracking-tight sm:text-5xl">
              A place to start when a page needs to make sense.
            </h1>
            <p className="text-xl leading-8 text-muted-foreground">
              Application Delivery Kit is a practical way to turn product needs into clear,
              accessible, testable applications. This React app is the shareable reference: it makes
              page, navigation, responsive, and accessibility decisions visible.
            </p>
            <p className="max-w-2xl leading-7 text-muted-foreground">
              The app is intentionally focused. Use it to review the visible patterns and their
              tradeoffs; use the GitHub repository to inspect the source, contribution guidance,
              and verification commands behind the examples.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2" aria-labelledby="review-heading">
            <div className="rounded-xl border bg-muted/40 p-6">
              <h2 id="review-heading" className="text-xl font-semibold tracking-tight">
                Reviewing the app
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Follow the guide paths below to compare layout and navigation choices. Each page
                includes a live example, practical guidance, responsive behavior, and accessibility
                considerations.
              </p>
            </div>
            <div className="rounded-xl border p-6">
              <h2 className="text-xl font-semibold tracking-tight">Reviewing the repository</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Read the repository when you want to see how this reference app is organized, built,
                and verified. The broader delivery system is kept separate from this focused app.
              </p>
              <a
                href="https://github.com/RealityTommy/application-delivery-kit"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex font-medium text-foreground underline decoration-muted-foreground/50 underline-offset-4 hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Review the GitHub repository
                <span className="sr-only"> (opens in a new window)</span>
              </a>
            </div>
          </section>

          <section className="space-y-6" aria-labelledby="principles-heading">
            <div className="max-w-2xl space-y-2">
              <h2 id="principles-heading" className="text-2xl font-semibold tracking-tight">
                What this reference keeps visible
              </h2>
              <p className="text-muted-foreground">
                The goal is not to build every possible component. It is to make common page
                decisions easier to see, compare, and reuse.
              </p>
            </div>
            <Columns base={1} md={3} gap="lg">
              <Card>
                <CardHeader>
                  <CardTitle>Clear pages</CardTitle>
                  <CardDescription>People should know where to begin.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Headings, spacing, and grouping should explain the page before decoration has to
                    do the work.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Useful on smaller screens</CardTitle>
                  <CardDescription>The layout should change without falling apart.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Navigation and content need a sensible order when there is less room. Desktop
                    should not be the only version that feels finished.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Accessible by design</CardTitle>
                  <CardDescription>The structure should work for more people.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Landmarks, headings, keyboard access, focus, and useful names belong in the page
                    from the beginning.
                  </p>
                </CardContent>
              </Card>
            </Columns>
          </section>

          <section className="space-y-6" aria-labelledby="guides-heading">
            <div className="max-w-2xl space-y-2">
              <h2 id="guides-heading" className="text-2xl font-semibold tracking-tight">
                Choose a guide path
              </h2>
              <p className="text-muted-foreground">
                Start with the question you are trying to answer. The three paths use the same page
                shell, but they focus on different decisions.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <a
                href="/layouts/header-only"
                className="rounded-xl border p-6 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <h3 className="text-xl font-semibold">Layout guides</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Compare a simple page, a page with related links, a page with a sidebar, and a page
                  with both navigation layers. These guides also show responsive columns and an
                  optional main-and-secondary details area.
                </p>
                <span className="mt-5 inline-flex font-medium underline decoration-muted-foreground/50 underline-offset-4">
                  Start with Header Only
                </span>
              </a>
              <a
                href="/navigation/header"
                className="rounded-xl border p-6 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <h3 className="text-xl font-semibold">Navigation guides</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Look at the Header, SecondaryNav, Sidebar, and Footer separately. These pages make
                  each navigation region's job, mobile behavior, and keyboard expectations easier to
                  review.
                </p>
                <span className="mt-5 inline-flex font-medium underline decoration-muted-foreground/50 underline-offset-4">
                  Start with Header navigation
                </span>
              </a>
              <a
                href="/components/cards"
                className="rounded-xl border p-6 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <h3 className="text-xl font-semibold">Component guides</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Learn how to use Cards for information, links, and actions without confusing
                  visual grouping with semantic behavior.
                </p>
                <span className="mt-5 inline-flex font-medium underline decoration-muted-foreground/50 underline-offset-4">
                  Start with Cards
                </span>
              </a>
            </div>
          </section>

          <section className="space-y-6" aria-labelledby="start-heading">
            <div className="max-w-2xl space-y-2">
              <h2 id="start-heading" className="text-2xl font-semibold tracking-tight">
                A useful order for reviewing the work
              </h2>
              <p className="text-muted-foreground">
                Begin with the smallest useful arrangement, then add complexity only when the page
                has a reason to need it.
              </p>
            </div>
            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-xl border bg-muted/40 p-6">
                <span className="text-sm font-medium text-muted-foreground">01</span>
                <h3 className="mt-2 font-semibold">
                  <a
                    href="/layouts/header-only"
                    className="underline decoration-muted-foreground/50 underline-offset-4 hover:decoration-foreground"
                  >
                    Header-only layout
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  See how much a page can do with Header, Main, and Footer.
                </p>
              </li>
              <li className="rounded-xl border bg-muted/40 p-6">
                <span className="text-sm font-medium text-muted-foreground">02</span>
                <h3 className="mt-2 font-semibold">
                  <a
                    href="/layouts/secondary"
                    className="underline decoration-muted-foreground/50 underline-offset-4 hover:decoration-foreground"
                  >
                    Related links
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Compare what changes when a page needs a second row of links.
                </p>
              </li>
              <li className="rounded-xl border bg-muted/40 p-6">
                <span className="text-sm font-medium text-muted-foreground">03</span>
                <h3 className="mt-2 font-semibold">
                  <a
                    href="/layouts/sidebar"
                    className="underline decoration-muted-foreground/50 underline-offset-4 hover:decoration-foreground"
                  >
                    Sidebar navigation
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  See how grouped navigation affects the space available for content.
                </p>
              </li>
              <li className="rounded-xl border bg-muted/40 p-6">
                <span className="text-sm font-medium text-muted-foreground">04</span>
                <h3 className="mt-2 font-semibold">
                  <a
                    href="/layouts/full"
                    className="underline decoration-muted-foreground/50 underline-offset-4 hover:decoration-foreground"
                  >
                    Full arrangement
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Use this last: it combines both navigation layers and carries the most cost.
                </p>
              </li>
            </ol>
            <aside className="rounded-xl border p-6" aria-labelledby="default-heading">
              <h2 id="default-heading" className="text-lg font-semibold">
                The default recommendation
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Use the least amount of layout that helps people complete the page. More navigation
                is not automatically more helpful.
              </p>
            </aside>
          </section>

          <section className="space-y-6" aria-labelledby="current-heading">
            <div className="max-w-2xl space-y-2">
              <h2 id="current-heading" className="text-2xl font-semibold tracking-tight">
                What is implemented now
              </h2>
              <p className="text-muted-foreground">
                The current reference covers page shells, navigation regions, responsive columns,
                split views, clean URLs, and route-transition focus behavior.
              </p>
            </div>
            <Columns base={1} sm={2} lg={4} gap="lg">
              <a
                href="/navigation/header"
                className="rounded-xl border p-6 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <h3 className="font-semibold">Header</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Primary navigation, dropdowns, mobile menu, and skip link.
                </p>
              </a>
              <a
                href="/navigation/secondary"
                className="rounded-xl border p-6 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <h3 className="font-semibold">SecondaryNav</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A related-page row that moves into the mobile hierarchy.
                </p>
              </a>
              <a
                href="/navigation/sidebar"
                className="rounded-xl border p-6 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <h3 className="font-semibold">Sidebar</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Grouped section navigation beside the main content.
                </p>
              </a>
              <a
                href="/navigation/footer"
                className="rounded-xl border p-6 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <h3 className="font-semibold">Footer</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Supporting links and the closing page landmark.
                </p>
              </a>
              <a
                href="/components/cards"
                className="rounded-xl border p-6 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <h3 className="font-semibold">Cards</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Group related content while keeping links and actions semantic.
                </p>
              </a>
            </Columns>
          </section>
        </div>
      </Main>
      <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
    </PageShell>
  )
}

export { HomePage }
