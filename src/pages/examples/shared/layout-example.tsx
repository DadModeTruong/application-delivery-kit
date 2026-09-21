/** Focused interactive previews for the four Layouts example pages. */
import { Home, Palette, Puzzle, Rocket } from 'lucide-react'
import { primaryNav, footerLinks } from '@/config/site-navigation'
import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { TabNavigation } from '@/components/layout/tab-navigation'
import { Sidebar } from '@/components/layout/sidebar'
import { Columns } from '@/components/layout/columns'
import type { NavGroup, NavLeaf } from '@/components/layout/types'
import { ExampleCard } from '@/pages/examples/shared/example-card'

type LayoutExampleProps = { variant: 'header-only' | 'secondary' | 'sidebar' | 'full' }

type ExampleGuidance = {
  name: string
  purpose: string
  inspect: string[]
  risk: string
}

const guidance: Record<LayoutExampleProps['variant'], ExampleGuidance> = {
  'header-only': {
    name: 'Header Only',
    purpose:
      'Inspect the smallest complete shell and confirm that Main can provide enough orientation without contextual navigation.',
    inspect: [
      'Can you tell what this page is for as soon as it opens?',
      'If the product had five more pages like this, would the top navigation still be easy to understand?',
      'On a small screen, can you still find the main site links without needing a second navigation bar?',
    ],
    risk: 'The common failure mode is quietly accumulating page-specific links until a new navigation pattern is needed.',
  },
  secondary: {
    name: 'Secondary',
    purpose:
      'Inspect a short set of peer destinations and verify that the row remains understandable, usable, and distinguishable from primary navigation.',
    inspect: [
      'Do all of these links belong to the same small group of pages?',
      'If the link names became longer or one link disappeared, would this row still be easy to use?',
      'On a small screen, can people still tell that these links belong together and see which page is selected?',
    ],
    risk: 'The common failure mode is using a flat row for a hierarchy that needs groups or a Sidebar.',
  },
  sidebar: {
    name: 'Sidebar',
    purpose:
      'Inspect a grouped section map beside Main and test whether the navigation helps orientation without stealing too much content width.',
    inspect: [
      'Can you tell why the links are grouped the way they are?',
      'Does the main content still have enough room to read and complete the task?',
      'On a small screen, does the menu keep the groups and links in an order that still makes sense?',
    ],
    risk: 'The common failure mode is turning the Sidebar into an ungoverned list of every possible destination.',
  },
  full: {
    name: 'Full',
    purpose:
      'Inspect the combined shell and verify that the section row and Sidebar have genuinely different jobs.',
    inspect: [
      'Can you explain in plain words what the top row is for and what the sidebar is for?',
      'Does the main content still feel like the most important part of the page?',
      'On a small screen, can people use both sets of links without feeling lost or seeing the same links repeated?',
    ],
    risk: 'The common failure mode is paying the highest maintenance cost for navigation that duplicates itself or is not needed.',
  },
}

const labels = {
  'header-only': 'Header Only',
  secondary: 'Secondary',
  sidebar: 'Sidebar',
  full: 'Full',
} as const

function LayoutExample({ variant }: LayoutExampleProps) {
  const hasTabs = variant === 'secondary' || variant === 'full'
  const hasSidebar = variant === 'sidebar' || variant === 'full'
  const tabNavigation: NavLeaf[] = [
    { href: `/layouts/${variant}`, label: 'Overview' },
    { href: `/layouts/${variant}#example-content-heading`, label: 'Example content' },
    { href: `/examples/layouts/${variant}`, label: 'Decision guide' },
  ]
  const sidebarNav: (NavLeaf | NavGroup)[] = [
    { href: `/layouts/${variant}`, label: 'Overview', icon: Home },
    {
      label: 'Explore this example',
      items: [
        {
          href: `/layouts/${variant}#${variant}-inspect-heading`,
          label: 'What to look for',
          icon: Rocket,
        },
        {
          href: `/layouts/${variant}#example-content-heading`,
          label: 'Example content',
          icon: Palette,
        },
      ],
    },
    {
      label: 'Continue',
      items: [{ href: `/examples/layouts/${variant}`, label: 'Decision guide', icon: Puzzle }],
    },
  ]
  return (
    <LayoutProvider
      tabNavigation={hasTabs ? tabNavigation : undefined}
      tabNavigationLabel="Example sections"
      sidebarNav={hasSidebar ? sidebarNav : undefined}
      sidebarNavLabel="Example pages"
      activeHref={`/layouts/${variant}`}
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        {hasTabs && <TabNavigation aria-label="Example sections" />}
        {hasSidebar ? (
          <PageBody>
            <Sidebar aria-label="Example pages" />
            <ExampleMain variant={variant} />
          </PageBody>
        ) : (
          <ExampleMain variant={variant} />
        )}
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

function ExampleMain({ variant }: LayoutExampleProps) {
  const example = guidance[variant]
  return (
    <Main size={variant === 'header-only' || variant === 'secondary' ? undefined : 'full'}>
      <div className="space-y-10">
        <section className="space-y-3" aria-labelledby={`${variant}-example-heading`}>
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Interactive example
          </p>
          <h1 id={`${variant}-example-heading`} className="text-4xl font-semibold tracking-tight">
            {labels[variant]}
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">{example.purpose}</p>
        </section>
        <section className="space-y-5" aria-labelledby={`${variant}-inspect-heading`}>
          <h2 id={`${variant}-inspect-heading`} className="text-2xl font-semibold tracking-tight">
            What to look for
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            {example.inspect.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="leading-7 text-muted-foreground">
            <strong className="text-foreground">Watch for:</strong> {example.risk}
          </p>
          <p className="leading-7 text-muted-foreground">
            For the full decision guidance, open the{' '}
            <a className="underline underline-offset-4" href={`/examples/layouts/${variant}`}>
              detail guide
            </a>
            .
          </p>
        </section>
        <section className="space-y-4" aria-labelledby={`${variant}-example-content-heading`}>
          <h2
            id={`${variant}-example-content-heading`}
            className="text-2xl font-semibold tracking-tight"
          >
            Example content
          </h2>
          <p className="leading-7 text-muted-foreground">
            This content is intentionally simple. Replace it with representative production content
            when evaluating width, hierarchy, navigation density, reading order, and responsive
            behavior.
          </p>
          <Columns base={1} sm={2} lg={3}>
            {Array.from({ length: 6 }, (_, i) => (
              <ExampleCard key={i} title={`Content ${i + 1}`} />
            ))}
          </Columns>
        </section>
      </div>
    </Main>
  )
}

export { LayoutExample }
