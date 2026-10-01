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
import { PageContractPanel, type PageContract } from '@/components/layout/page-contract'

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

function layoutContract(variant: LayoutExampleProps['variant']): PageContract {
  const label = labels[variant]
  const hasTabs = variant === 'secondary' || variant === 'full'
  const hasSidebar = variant === 'sidebar' || variant === 'full'
  const shell =
    hasTabs && hasSidebar
      ? 'Header, section navigation, Sidebar, Main, and Footer'
      : hasTabs
        ? 'Header, section navigation, Main, and Footer'
        : hasSidebar
          ? 'Header, Sidebar, Main, and Footer'
          : 'Header, Main, and Footer'
  return {
    userStory: `As a product team evaluating the ${label} page-shell pattern, I want to verify its structure, navigation, responsive behavior, accessibility, and content capacity so that I can approve or reject it for a real product context.`,
    requirements: [
      `The ${label} route shall render one complete page shell containing ${shell}.`,
      'The shell shall preserve the supplied navigation labels, destinations, grouping, and current-page state without inventing routes or silently dropping items.',
      'Every interactive destination shall be a real link with a visible accessible name, a visible focus indicator, and a destination that the consuming application can own and verify.',
      'The main content shall remain readable and distinguishable from navigation at supported wide, narrow, and zoomed layouts.',
      `The ${label} pattern shall not expose a navigation layer when that layer is not part of this variation, and it shall not duplicate the same destination across layers without a documented reason.`,
      'The page shall preserve logical reading order, landmark relationships, keyboard reachability, and sufficient touch-target space when the layout changes at narrow widths.',
    ],
    criteria: [
      {
        id: `REQ-${variant.toUpperCase()}-01`,
        given: `a person opens the ${label} example at its initial supported width`,
        when: 'the page finishes rendering',
        then: `the ${shell} appear in the documented order`,
        and: [
          'the page has one clear main heading and one main content region',
          'the example content is visible without requiring a hidden interaction',
        ],
      },
      {
        id: `REQ-${variant.toUpperCase()}-02`,
        given: 'the person reviews the navigation',
        when: 'they read each visible link and activate a destination',
        then: 'the visible label and destination match the documented navigation data',
        and: [
          'the consuming application can receive the destination',
          'the previously current item does not remain marked current when route state changes',
        ],
      },
      {
        id: `A11Y-${variant.toUpperCase()}-01`,
        given: 'the person uses only a keyboard',
        when: 'they press Tab from the start of the page and activate links with Enter',
        then: 'focus moves through every interactive control in a logical order',
        and: [
          'focus is visibly outlined',
          'no link or control is skipped',
          'activation does not require a pointer',
        ],
      },
      {
        id: `RESP-${variant.toUpperCase()}-01`,
        given:
          'the person resizes the viewport to the narrowest supported width and then increases browser zoom',
        when: 'they inspect the shell and example content',
        then: 'the page remains readable and usable without unintended horizontal scrolling',
        and: [
          'navigation remains reachable in its mobile composition',
          'labels do not overlap or clip',
          'the main content remains identifiable',
        ],
      },
      {
        id: `CONTENT-${variant.toUpperCase()}-01`,
        given:
          'the person replaces the placeholder cards with longer realistic headings and body text',
        when: 'the page is rendered at wide and narrow widths',
        then: 'the content remains inside its intended region',
        and: [
          'cards do not overlap navigation',
          'text is not clipped',
          'the layout does not rely on the placeholder length',
        ],
      },
      {
        id: `NEG-${variant.toUpperCase()}-01`,
        given: 'the person looks for a navigation layer that is not part of the ${label} variation',
        when: 'they inspect the page and its landmarks',
        then: 'that layer is absent rather than empty or duplicated',
        and: [
          'the remaining navigation still has a clear purpose',
          'the page does not present contradictory current states',
        ],
      },
    ],
    verification: [
      {
        id: `VIS-${variant}`,
        title: 'Initial structure and content',
        cases: [
          {
            id: `VIS-${variant}-01`,
            title: 'Confirm the first render',
            steps: [
              'Open the route in a fresh browser tab.',
              'Wait for the page heading and example cards to appear.',
              'Read the visible shell from top to bottom.',
              'Check the browser viewport at the default width.',
            ],
            expected: `The page shows ${shell} in the documented order, one clear main heading, readable example content, and no clipped or overlapping content.`,
          },
        ],
      },
      {
        id: `NAV-${variant}`,
        title: 'Navigation and keyboard use',
        cases: [
          {
            id: `NAV-${variant}-01`,
            title: 'Activate every destination',
            steps: [
              'Use Tab to focus each visible link.',
              'At each link, read its accessible name and inspect its visible focus indicator.',
              'Press Enter on the link.',
              'Confirm the browser reaches the configured destination or same-page target.',
              'Use the browser Back command and continue with the next link.',
            ],
            expected:
              'Every destination is reachable, the focused link is visibly identified, the destination matches its label, and no link requires pointer input.',
          },
          {
            id: `NAV-${variant}-02`,
            title: 'Check unsupported navigation layers',
            steps: [
              'Inspect the header, section navigation, Sidebar, and main landmarks that are present.',
              'Compare them with the documented variation.',
              'Look for duplicate or empty navigation regions.',
            ],
            expected: `Only the navigation layers belonging to ${label} are present; no unsupported or duplicate layer is exposed.`,
          },
        ],
      },
      {
        id: `RESP-${variant}`,
        title: 'Responsive, zoom, and long-content behavior',
        cases: [
          {
            id: `RESP-${variant}-01`,
            title: 'Check narrow width and zoom',
            steps: [
              'Set the viewport to the narrowest supported width.',
              'Tab through every link and scroll through the full page.',
              'Increase browser zoom and repeat the scan.',
              'Replace one card heading and body with long text, then repeat.',
            ],
            expected:
              'All content and controls remain reachable, readable, and visibly associated with the correct region without clipping, overlap, or unintended horizontal scrolling.',
          },
        ],
      },
    ],
  }
}

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
      activeHref={`/layouts/${variant}`}
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        {hasTabs && <TabNavigation aria-label="Example sections" />}
        {hasSidebar ? (
          <PageBody>
            <Sidebar
              aria-label="Example pages"
              items={sidebarNav}
              activeHref={`/layouts/${variant}`}
            />
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
        <PageContractPanel contract={layoutContract(variant)} />
      </div>
    </Main>
  )
}

export { LayoutExample }
