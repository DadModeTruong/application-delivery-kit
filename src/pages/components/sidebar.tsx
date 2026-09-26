/**
 * Sidebar navigation guide.
 *
 * Teaches grouped destinations, explicit current state, variant behavior,
 * accessibility, and application-owned responsive composition.
 */

import { BookOpen, LayoutDashboard, Settings } from 'lucide-react'
import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { ExampleVariation } from '@/components/layout/example-variation'
import { Sidebar } from '@/components/layout/sidebar'
import type { NavGroup, NavLeaf } from '@/components/layout/types'
import { userInterfaceSidebarLinks } from '@/config/component-navigation'

const basicSidebarLinks: NavLeaf[] = [
  { href: '/components/sidebar', label: 'Overview', current: true },
  { href: '/components/tab-navigation', label: 'Tab navigation' },
  { href: '/components/header', label: 'Header' },
]

const groupedSidebarLinks: (NavLeaf | NavGroup)[] = [
  {
    label: 'Getting started',
    items: [
      { href: '/components/sidebar', label: 'Overview', current: true, icon: BookOpen },
      { href: '/components/header', label: 'Header', icon: LayoutDashboard },
    ],
  },
  {
    label: 'Workspace',
    items: [{ href: '/components/user-interface', label: 'Settings', icon: Settings }],
  },
]

const sidebarProps = {
  items: {
    name: 'items',
    type: '(NavLeaf | NavGroup)[]',
    example: 'items={sidebarItems}',
    description:
      'The application-owned navigation tree. Pass direct links or labelled NavGroup entries; Sidebar does not fetch routes or infer permissions.',
  },
  activeHref: {
    name: 'activeHref',
    type: 'string',
    example: 'activeHref={pathname}',
    description:
      'An optional exact URL match used to render the active destination. Use current: true on an item when the application already represents route state in its navigation data.',
  },
  ariaLabel: {
    name: 'aria-label',
    type: 'string',
    example: 'aria-label="Documentation navigation"',
    description:
      'The accessible name of the Sidebar navigation landmark. Use a distinct label when Header or tab navigation landmarks are also present.',
  },
  variant: {
    name: 'variant',
    type: '"labeled" | "icon-only"',
    example: 'variant="icon-only"',
    description:
      'Controls visual density. Icon-only mode still preserves each link label programmatically and through focusable tooltip behavior.',
  },
}

const sidebarAttributes = [
  {
    name: 'aria-current',
    type: 'accessibility attribute',
    example: 'aria-current="page"',
    description:
      'Identifies the link representing the current page. Only the current destination should receive this state.',
  },
  {
    name: 'data-active',
    type: 'state attribute',
    example: 'data-active="true"',
    description:
      'Provides a styling hook that mirrors the application-supplied current state without replacing aria-current.',
  },
  {
    name: 'data-variant',
    type: 'variant attribute',
    example: 'data-variant="labeled"',
    description:
      'Identifies the selected Sidebar presentation for intentional styling and inspection.',
  },
  {
    name: 'class',
    type: 'utility class list',
    example: 'hidden md:block w-60 border-r focus-visible:ring-2',
    description:
      'Provides layout, responsive visibility, spacing, hover, active, and focus-visible styling hooks.',
  },
]

const groupedSource = `<Sidebar
  aria-label="Documentation navigation"
  items={sidebarItems}
  activeHref={pathname}
/>`

const groupedHtml = `<aside data-slot="sidebar" data-variant="labeled">
  <nav aria-label="Documentation navigation">
    <div>
      <div>Getting started</div>
      <a href="/components/sidebar" aria-current="page" data-active="true">
        Overview
      </a>
    </div>
  </nav>
</aside>`

const basicSupplemental = {
  guidance: {
    explanation:
      'Use a flat Sidebar when an area has a small set of peer destinations and grouping would add more structure than value.',
    doItems: [
      'Pass the navigation list explicitly.',
      'Mark the current destination through route state or current: true.',
    ],
    dontItems: [
      'Use a Sidebar for only two or three peer destinations when tabs are clearer.',
      'Make the active state depend on color alone.',
    ],
  },
  code: {
    source: `<Sidebar\n  aria-label="Section navigation"\n  items={sectionLinks}\n  activeHref={pathname}\n/>`,
    html: '<aside data-slot="sidebar"><nav aria-label="Section navigation">…</nav></aside>',
    props: [sidebarProps.items, sidebarProps.activeHref, sidebarProps.ariaLabel],
    attributes: sidebarAttributes,
  },
  requirements: {
    userStory:
      'As a person navigating an application area, I want a clearly labelled list of related destinations so that I can move between pages and understand where I am.',
    acceptanceCriteria: [
      {
        given: 'a Sidebar has a flat list of destinations',
        when: 'the page renders',
        then: 'each destination is a keyboard-operable link',
        and: ['the navigation landmark has the supplied accessible name'],
      },
      {
        given: 'the application identifies the current route',
        when: 'the Sidebar renders',
        then: 'only that destination is marked current',
        and: ['the link exposes aria-current="page"'],
      },
    ],
  },
  verification: {
    scenarios: [
      {
        title: 'Flat navigation and current state',
        cases: [
          {
            title: 'Keyboard and semantics',
            steps: [
              'Render Sidebar with sectionLinks and pathname.',
              'Tab through the links.',
              'Inspect the current link with accessibility tools.',
            ],
            expected:
              'All links receive focus in order and the current destination has aria-current="page".',
          },
        ],
      },
    ],
  },
}

const groupedSupplemental = {
  guidance: {
    explanation:
      'Use labelled groups when the information architecture itself helps people predict where a destination belongs. Sidebar supports one grouping level.',
    doItems: [
      'Use concise group headings that describe the content.',
      'Keep the same navigation tree available to the application’s responsive composition.',
    ],
    dontItems: [
      'Nest groups indefinitely.',
      'Use headings only as visual decoration or rely on indentation alone.',
    ],
    considerations: [
      'Sidebar owns presentation and link semantics; the application owns route matching, permissions, and responsive composition.',
    ],
  },
  code: {
    source: groupedSource,
    html: groupedHtml,
    props: [sidebarProps.items, sidebarProps.activeHref, sidebarProps.ariaLabel],
    attributes: sidebarAttributes,
  },
  requirements: {
    userStory:
      'As a person working in a larger application area, I want related destinations grouped by purpose so that I can scan the navigation and choose the right page.',
    acceptanceCriteria: [
      {
        given: 'the navigation contains labelled groups',
        when: 'the Sidebar renders',
        then: 'each group heading precedes its links',
        and: ['links remain real anchors', 'the hierarchy is understandable without color'],
      },
      {
        given: 'Header or tabs also provide navigation',
        when: 'landmarks are announced',
        then: 'the Sidebar has a distinct accessible name',
      },
    ],
  },
  verification: {
    scenarios: [
      {
        title: 'Grouped navigation',
        cases: [
          {
            title: 'Hierarchy and landmark naming',
            steps: [
              'Render groupedSidebarLinks.',
              'Query navigation landmarks by name.',
              'Review group headings and link order.',
            ],
            expected:
              'One navigation landmark named Documentation navigation contains the labelled groups and their links.',
          },
        ],
      },
    ],
  },
}

const activeSupplemental = {
  guidance: {
    explanation:
      'Use explicit current state to show the person’s location. The application should calculate route state; Sidebar should render it consistently.',
    doItems: [
      'Use activeHref for exact route matching or current: true for an already-normalized navigation model.',
      'Keep the active treatment visible in labeled and icon-only variants.',
    ],
    dontItems: [
      'Mark multiple destinations current.',
      'Have Sidebar inspect browser or router state internally.',
    ],
  },
  code: {
    source: `<Sidebar\n  aria-label="Workspace navigation"\n  items={workspaceItems}\n  activeHref={pathname}\n/>`,
    html: '<a href="/components/sidebar" aria-current="page" data-active="true" class="…">Overview</a>',
    props: [sidebarProps.items, sidebarProps.activeHref, sidebarProps.ariaLabel],
    attributes: [sidebarAttributes[0], sidebarAttributes[1]],
  },
  requirements: {
    userStory:
      'As a person using an application, I want the Sidebar to identify the page I am viewing so that I can maintain context while moving through the area.',
    acceptanceCriteria: [
      {
        given: 'the application supplies current route state',
        when: 'the matching Sidebar item renders',
        then: 'the item has active styling and aria-current="page"',
        and: ['non-current items do not expose aria-current'],
      },
    ],
  },
  verification: {
    scenarios: [
      {
        title: 'Current destination',
        cases: [
          {
            title: 'Active-state rendering',
            steps: [
              'Render Sidebar with activeHref set to /components/sidebar.',
              'Inspect the matching link.',
              'Inspect a non-current link.',
            ],
            expected:
              'The matching link has data-active="true" and aria-current="page"; the other link has neither current state.',
          },
        ],
      },
    ],
  },
}

const iconOnlySupplemental = {
  guidance: {
    explanation:
      'Use icon-only mode only when the available width requires higher density and the destination set is familiar. It is not a substitute for a mobile navigation strategy.',
    doItems: [
      'Provide recognizable icons and preserve labels for assistive technology and focus.',
      'Test keyboard focus and tooltip behavior without a pointer.',
    ],
    dontItems: [
      'Do not make unlabeled icons the only navigation cue.',
      'Do not treat icon-only mode as permission to remove the mobile experience.',
    ],
  },
  code: {
    source: `<Sidebar\n  aria-label="Workspace navigation"\n  items={workspaceItems}\n  variant="icon-only"\n/>`,
    html: '<a aria-label="Overview" data-active="true" class="h-10 w-10 justify-center">…</a>',
    props: [sidebarProps.items, sidebarProps.ariaLabel, sidebarProps.variant],
    attributes: [sidebarAttributes[2], sidebarAttributes[3]],
  },
  requirements: {
    userStory:
      'As a person with limited horizontal space, I want a compact Sidebar that retains accessible labels so that I can navigate without losing destination meaning.',
    acceptanceCriteria: [
      {
        given: 'Sidebar uses icon-only mode',
        when: 'a destination receives keyboard focus',
        then: 'its accessible name identifies the destination',
        and: ['the tooltip or equivalent label is available without requiring hover'],
      },
    ],
  },
  verification: {
    scenarios: [
      {
        title: 'Compact navigation',
        cases: [
          {
            title: 'Accessible icon-only links',
            steps: [
              'Render Sidebar with variant="icon-only".',
              'Focus each link with the keyboard.',
              'Inspect the accessible name.',
            ],
            expected:
              'Every link has a useful accessible name and visible focus treatment; no destination depends on pointer hover alone.',
          },
        ],
      },
    ],
  },
}

function ComponentsSidebarPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/sidebar"
      tabActiveHref="/components/user-interface"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      sidebarAriaLabel="User Interface"
    >
      <div className="space-y-12">
        <section className="space-y-5" aria-labelledby="sidebar-heading">
          <h1 id="sidebar-heading" className="text-4xl font-semibold tracking-tight">
            Sidebar navigation
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Use Sidebar for grouped or section-level destinations beside Main. The application
            supplies navigation data and route state; Sidebar owns presentation, semantics, and
            variant behavior.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="sidebar-contract-heading">
          <h2 id="sidebar-contract-heading" className="text-2xl font-semibold tracking-tight">
            Component contract
          </h2>
          <p className="leading-7 text-muted-foreground">
            Sidebar is a reusable application-shell composition. It does not read LayoutProvider,
            inspect a router, infer permissions, or decide whether it is the application’s primary
            navigation.
          </p>
          <div className="overflow-hidden rounded-xl border">
            <Sidebar
              aria-label="Sidebar recognition example"
              items={basicSidebarLinks}
              activeHref="/components/sidebar"
            />
          </div>
          <p className="text-sm leading-6 text-muted-foreground">
            <strong className="mr-2 text-foreground">Try it:</strong> tab through the links, inspect
            the current state, and resize the page to review the application-owned responsive
            composition.
          </p>
        </section>

        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="sidebar-use-heading">
          <div className="space-y-5">
            <h2 id="sidebar-use-heading" className="text-2xl font-semibold tracking-tight">
              When to use it
            </h2>
            <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
              <li>For grouped settings, workspace areas, administration, or documentation.</li>
              <li>When a persistent map helps people move among related pages.</li>
              <li>When the rail can become an equally understandable responsive composition.</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight">When not to use it</h2>
            <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
              <li>For a short set of peer destinations; use TabNavigation when it is clearer.</li>
              <li>For product-wide destinations; use Header.</li>
              <li>
                For deeply nested information architecture that needs a different disclosure
                pattern.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-5" aria-labelledby="sidebar-accessibility-heading">
          <h2 id="sidebar-accessibility-heading" className="text-2xl font-semibold tracking-tight">
            Accessibility and responsive behavior
          </h2>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
            <li>Give the navigation landmark a distinct accessible name.</li>
            <li>Use real links and mark only the current destination with aria-current="page".</li>
            <li>Keep labels available in icon-only mode and preserve focus-visible states.</li>
            <li>
              When the rail is hidden at narrow widths, the application must compose the same
              navigation data into an accessible mobile replacement.
            </li>
            <li>
              Test landmarks, keyboard order, browser zoom, long labels, and focus behavior at
              narrow widths.
            </li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="sidebar-examples-heading">
          <h2 id="sidebar-examples-heading" className="text-2xl font-semibold tracking-tight">
            Examples and variations
          </h2>
          <div className="space-y-8">
            <ExampleVariation
              title="Basic"
              summary="A short, ungrouped list of section destinations."
              tryIt="Tab through the links and inspect the current destination."
              supplemental={basicSupplemental}
            >
              <Sidebar
                aria-label="Basic section navigation"
                items={basicSidebarLinks}
                activeHref="/components/sidebar"
              />
            </ExampleVariation>
            <ExampleVariation
              title="Grouped"
              summary="Meaningful groups communicate information architecture."
              tryIt="Review the group headings and link order, then test keyboard navigation."
              supplemental={groupedSupplemental}
            >
              <Sidebar
                aria-label="Documentation navigation"
                items={groupedSidebarLinks}
                activeHref="/components/sidebar"
              />
            </ExampleVariation>
            <ExampleVariation
              title="With active item"
              summary="Explicit route state identifies where the person is."
              tryIt="Change the active route input and confirm only one item is current."
              supplemental={activeSupplemental}
            >
              <Sidebar
                aria-label="Workspace navigation"
                items={userInterfaceSidebarLinks}
                activeHref="/components/sidebar"
              />
            </ExampleVariation>
            <ExampleVariation
              title="Icon-only"
              summary="A compact rail preserves navigation when width is limited."
              tryIt="Focus each icon with the keyboard and verify its accessible name."
              supplemental={iconOnlySupplemental}
            >
              <Sidebar
                aria-label="Compact workspace navigation"
                items={groupedSidebarLinks}
                activeHref="/components/sidebar"
                variant="icon-only"
              />
            </ExampleVariation>
          </div>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsSidebarPage }
