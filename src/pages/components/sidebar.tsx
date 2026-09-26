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

const sidebarCodeAttributes = [
  {
    name: 'aria-label',
    type: 'accessible-name attribute',
    example: 'aria-label="Documentation navigation"',
    description:
      'Names the Sidebar navigation landmark. Use a distinct name when Header, tabs, or another navigation landmark appears on the same page.',
  },
  {
    name: 'aria-current',
    type: 'accessibility state',
    example: 'aria-current="page"',
    description:
      'Identifies the link representing the current page. It is rendered only when the application marks the item current.',
  },
  {
    name: 'data-active',
    type: 'state styling hook',
    example: 'data-active="true"',
    description:
      'Mirrors the current state for styling. It does not replace aria-current and should not be the only current-location cue.',
  },
  {
    name: 'data-slot',
    type: 'component hook',
    example: 'data-slot="sidebar"',
    description:
      'Identifies the Sidebar root for inspection and targeted styling without changing the semantic structure.',
  },
  {
    name: 'data-variant',
    type: 'variant state',
    example: 'data-variant="labeled" | "icon-only"',
    description:
      'Identifies the selected visual-density variant so styles can target a deliberate presentation.',
  },
  {
    name: 'class',
    type: 'utility class list',
    example: 'hidden md:block w-60 shrink-0 border-r border-border p-3 focus-visible:ring-2',
    description:
      'Provides responsive visibility, rail width, spacing, border treatment, hover/active surfaces, and keyboard focus styling. Preserve these hooks when adapting the output.',
  },
]

const basicSupplemental = {
  guidance: {
    explanation:
      'Use a flat Sidebar when an area has a small set of peer destinations and grouping would add more structure than value. The application supplies the links and current state; Sidebar renders the labelled landmark and link treatment.',
    doItems: [
      'Pass a concise list of real destinations through items and give the landmark a distinct aria-label.',
      'Use activeHref for an exact application-owned route match, or current: true when route state is already normalized in the navigation data.',
      'Keep the labeled variant visible at desktop widths so labels remain scannable.',
    ],
    dontItems: [
      'Do not use a Sidebar for only two or three peer destinations when TabNavigation is clearer.',
      'Do not make the current state depend on color, position, or indentation alone.',
      'Do not make Sidebar infer route state from a router or browser location.',
    ],
  },
  code: {
    language: 'tsx',
    source: `<Sidebar
  aria-label="Section navigation"
  items={[
    { href: '/components/sidebar', label: 'Overview', current: true },
    { href: '/components/tab-navigation', label: 'Tab navigation' },
    { href: '/components/header', label: 'Header' },
  ]}
  activeHref={pathname}
/>`,
    html: `<aside data-slot="sidebar" data-variant="labeled"
  class="hidden md:block w-60 shrink-0 border-r border-border p-3">
  <nav aria-label="Section navigation" class="flex flex-col gap-0.5">
    <a href="/components/sidebar" aria-current="page" data-active="true"
      class="flex items-center rounded-md gap-3 px-3 py-2 text-sm font-medium
        text-muted-foreground transition-colors hover:bg-muted hover:text-foreground
        data-[active=true]:bg-muted data-[active=true]:text-foreground
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      Overview
    </a>
    <a href="/components/tab-navigation"
      class="flex items-center rounded-md gap-3 px-3 py-2 text-sm font-medium
        text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:ring-2">
      Tab navigation
    </a>
  </nav>
</aside>`,
    props: [sidebarProps.items, sidebarProps.activeHref, sidebarProps.ariaLabel],
    attributes: sidebarCodeAttributes,
  },
  requirements: {
    userStory:
      'As a person navigating an application area, I want a clearly labelled list of related destinations so that I can move between pages and understand where I am.',
    acceptanceCriteria: [
      {
        given: 'Sidebar receives the three flat links shown in the example',
        when: 'the component renders at a desktop-width breakpoint',
        then: 'one navigation landmark contains the links in the supplied order',
        and: [
          'the root has data-slot="sidebar" and data-variant="labeled"',
          'the rail uses the labeled width and border treatment',
          'each destination is a real anchor with visible text',
        ],
      },
      {
        given: 'the application marks Overview as current',
        when: 'the Sidebar renders',
        then: 'Overview receives the active visual treatment and aria-current="page"',
        and: [
          'Overview also exposes data-active="true"',
          'Tab navigation and Header do not receive current state from Sidebar',
        ],
      },
      {
        given: 'a person uses only the keyboard',
        when: 'they tab through the Sidebar links',
        then: 'each link receives focus in DOM order',
        and: [
          'the focus-visible ring is visible',
          'Enter activates the focused destination as a normal link',
        ],
      },
      {
        given: 'the viewport is below the Sidebar desktop breakpoint',
        when: 'the component renders',
        then: 'the persistent rail is hidden without changing the supplied navigation data',
        and: ['the application is responsible for composing an accessible mobile replacement'],
      },
      {
        given: 'items is empty or omitted',
        when: 'the component renders',
        then: 'Sidebar renders no rail',
        and: ['the page does not receive an empty navigation landmark'],
      },
    ],
  },
  verification: {
    scenarios: [
      {
        title: 'Flat structure and visual state',
        cases: [
          {
            title: 'Desktop structure',
            steps: [
              'Render Sidebar with the three example links at a desktop-width viewport.',
              'Query the navigation landmark by Section navigation.',
              'Inspect the root data attributes and computed layout classes.',
            ],
            expected:
              'One labelled navigation landmark appears inside a labeled 240px rail with the expected border, padding, and link order.',
          },
          {
            title: 'Current destination',
            steps: [
              'Inspect the Overview link.',
              'Inspect Tab navigation and Header.',
              'Compare the active classes and ARIA state.',
            ],
            expected:
              'Only Overview has data-active="true", active styling, and aria-current="page"; the other links remain ordinary links.',
          },
        ],
      },
      {
        title: 'Keyboard and responsive behavior',
        cases: [
          {
            title: 'Keyboard traversal',
            steps: [
              'Move focus with Tab.',
              'Activate a link with Enter.',
              'Repeat at a narrow viewport.',
            ],
            expected:
              'Every visible link has a focus-visible ring and normal link activation; the persistent rail is hidden below the breakpoint without producing a duplicate empty landmark.',
          },
        ],
      },
    ],
  },
}

const groupedSupplemental = {
  guidance: {
    explanation:
      'Use labelled groups when the information architecture helps people predict where a destination belongs. Sidebar supports one grouping level: each NavGroup renders a heading followed by leaf links.',
    doItems: [
      'Use concise group headings that describe the information architecture rather than visual decoration.',
      'Keep group order and item order aligned with the application’s information architecture.',
      'Use icons only when they add recognition value; keep labels visible in the labeled variant.',
    ],
    dontItems: [
      'Do not nest groups indefinitely or put dropdown parents inside NavGroup items.',
      'Do not rely on indentation, icon shape, or color alone to communicate group membership.',
      'Do not create another navigation landmark for every group; the Sidebar remains one labelled nav.',
    ],
    considerations: [
      'Sidebar owns group presentation and link semantics. The application owns route matching, permissions, and any mobile transformation.',
    ],
  },
  code: {
    language: 'tsx',
    source: `<Sidebar
  aria-label="Documentation navigation"
  items={[
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
  ]}
  activeHref={pathname}
/>`,
    html: `<aside data-slot="sidebar" data-variant="labeled"
  class="hidden md:block w-60 shrink-0 border-r border-border p-3">
  <nav aria-label="Documentation navigation" class="flex flex-col gap-0.5">
    <div class="flex flex-col gap-0.5">
      <div class="px-3 pb-1 text-xs font-medium text-muted-foreground/70">Getting started</div>
      <a href="/components/sidebar" aria-current="page" data-active="true"
        class="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium
          text-muted-foreground transition-colors hover:bg-muted hover:text-foreground
          data-[active=true]:bg-muted data-[active=true]:text-foreground
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <svg aria-hidden="true" class="size-4 shrink-0">…</svg> Overview
      </a>
      <a href="/components/header" class="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium
        text-muted-foreground hover:bg-muted focus-visible:ring-2">
        <svg aria-hidden="true" class="size-4 shrink-0">…</svg> Header
      </a>
    </div>
    <div class="mt-4 flex flex-col gap-0.5">
      <div class="px-3 pb-1 text-xs font-medium text-muted-foreground/70">Workspace</div>
      <a href="/components/user-interface" class="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium">…</a>
    </div>
  </nav>
</aside>`,
    props: [sidebarProps.items, sidebarProps.activeHref, sidebarProps.ariaLabel],
    attributes: sidebarCodeAttributes,
  },
  requirements: {
    userStory:
      'As a person working in a larger application area, I want related destinations grouped by purpose so that I can scan the navigation and choose the right page.',
    acceptanceCriteria: [
      {
        given: 'items contains the Getting started and Workspace groups',
        when: 'the Sidebar renders',
        then: 'one navigation landmark presents each group heading before its links',
        and: [
          'Getting started appears before Workspace',
          'the supplied link order is preserved inside each group',
          'group headings are not separate navigation landmarks',
        ],
      },
      {
        given: 'a link has an icon and visible label',
        when: 'the link renders',
        then: 'the icon is decorative and the visible label remains the accessible link name',
        and: ['the SVG receives aria-hidden="true"', 'the label remains visible in labeled mode'],
      },
      {
        given: 'a group contains the current destination',
        when: 'the Sidebar renders',
        then: 'the current link receives active styling and aria-current="page"',
        and: ['the group heading remains visible', 'non-current links remain unselected'],
      },
      {
        given: 'a group is first or follows another group',
        when: 'the visual layout renders',
        then: 'the first group has no inter-group margin and later groups have separation',
        and: ['spacing and headings communicate grouping without relying on color alone'],
      },
      {
        given: 'the application needs a mobile or temporary presentation',
        when: 'the desktop Sidebar is hidden',
        then: 'the application can reuse the same group data without requiring Sidebar context',
      },
    ],
  },
  verification: {
    scenarios: [
      {
        title: 'Grouped hierarchy',
        cases: [
          {
            title: 'Structure and order',
            steps: [
              'Render groupedSidebarLinks.',
              'Query the single Documentation navigation landmark.',
              'Inspect headings, links, and group wrappers.',
            ],
            expected:
              'The landmark contains Getting started followed by Workspace; each heading precedes its own links and no subgroup creates a nested nav landmark.',
          },
          {
            title: 'Icon and label semantics',
            steps: [
              'Inspect each rendered icon.',
              'Query the accessible name of each link.',
              'Hide or ignore decorative SVG content.',
            ],
            expected: 'Icons are aria-hidden and each link name comes from its visible text label.',
          },
        ],
      },
      {
        title: 'Grouped keyboard behavior',
        cases: [
          {
            title: 'Sequential focus',
            steps: [
              'Tab from the first link through the final link.',
              'Observe focus-visible styling.',
              'Activate the current link with Enter.',
            ],
            expected:
              'Focus follows DOM/group order, every link has a visible focus treatment, and activation remains normal link navigation.',
          },
        ],
      },
    ],
  },
}

const activeSupplemental = {
  guidance: {
    explanation:
      'Use explicit current state to show the person’s location. The application calculates route state; Sidebar renders the state consistently rather than inspecting a router.',
    doItems: [
      'Use activeHref for an exact match when the application has a pathname, or current: true when the navigation model already contains selection state.',
      'Keep the active treatment visible and understandable in labeled and icon-only variants.',
      'Verify that only one destination is selected for a given navigation tree.',
    ],
    dontItems: [
      'Do not mark a parent or sibling current merely because it is near the current page.',
      'Do not use color alone to communicate selection.',
      'Do not let Sidebar and Header calculate conflicting current states independently.',
    ],
  },
  code: {
    language: 'tsx',
    source: `<Sidebar
  aria-label="Workspace navigation"
  items={workspaceItems}
  activeHref={pathname}
/>`,
    html: `<a href="/components/sidebar" aria-current="page" data-active="true"
  class="flex items-center rounded-md gap-3 px-3 py-2 text-sm font-medium
    text-muted-foreground transition-colors hover:bg-muted hover:text-foreground
    data-[active=true]:bg-muted data-[active=true]:text-foreground
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
  Overview
</a>
<a href="/components/header" data-active="false"
  class="flex items-center rounded-md gap-3 px-3 py-2 text-sm font-medium
    text-muted-foreground transition-colors hover:bg-muted hover:text-foreground
    data-[active=true]:bg-muted data-[active=true]:text-foreground
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
  Header
</a>`,
    props: [sidebarProps.items, sidebarProps.activeHref, sidebarProps.ariaLabel],
    attributes: [sidebarCodeAttributes[1], sidebarCodeAttributes[2], sidebarCodeAttributes[5]],
  },
  requirements: {
    userStory:
      'As a person using an application, I want the Sidebar to identify the page I am viewing so that I can maintain context while moving through the area.',
    acceptanceCriteria: [
      {
        given: 'activeHref matches /components/sidebar',
        when: 'the Sidebar renders',
        then: 'the Overview link is the only selected destination',
        and: [
          'Overview has data-active="true" and aria-current="page"',
          'the active row uses the muted surface and foreground text treatment',
          'other links do not have aria-current="page"',
        ],
      },
      {
        given: 'the application changes activeHref to another exact href',
        when: 'the Sidebar rerenders',
        then: 'the active state moves to the matching link',
        and: [
          'the previous link loses its active state',
          'no partial or prefix match selects a different route',
        ],
      },
      {
        given: 'a person navigates with the keyboard',
        when: 'they focus or activate a current or non-current link',
        then: 'focus-visible and selection states remain distinguishable',
        and: ['Enter follows the link href', 'selection is not communicated by color alone'],
      },
    ],
  },
  verification: {
    scenarios: [
      {
        title: 'Selection outcome',
        cases: [
          {
            title: 'Exact current match',
            steps: [
              'Render with activeHref="/components/sidebar".',
              'Inspect Overview, Header, and Tab navigation.',
              'Change activeHref to /components/header and rerender.',
            ],
            expected:
              'The matching exact href alone has active styling, data-active="true", and aria-current="page"; the state moves when activeHref changes.',
          },
          {
            title: 'Keyboard selection',
            steps: [
              'Tab to the current link.',
              'Confirm the focus-visible ring.',
              'Press Enter and observe navigation.',
            ],
            expected:
              'The current link has both a visible focus treatment and current semantics, and Enter performs normal link navigation.',
          },
        ],
      },
    ],
  },
}

const iconOnlySupplemental = {
  guidance: {
    explanation:
      'Use icon-only mode when the available desktop width requires higher density and every destination has a recognizable icon or safe fallback label. This is a visual variant, not a replacement for responsive navigation.',
    doItems: [
      'Provide a useful label for every link; Sidebar applies aria-label when the visible label is hidden.',
      'Keep the compact target at the documented 40px square and preserve focus-visible treatment.',
      'Test tooltip/focus behavior without a pointer and provide a separate mobile composition when the rail is hidden.',
    ],
    dontItems: [
      'Do not remove the programmatic label because the icon appears self-explanatory.',
      'Do not make hover the only way to discover a destination label.',
      'Do not use icon-only mode for a long unfamiliar information architecture without another visible orientation cue.',
    ],
    considerations: [
      'When an item has no icon, the component renders the first letter as a decorative fallback; the link’s aria-label remains the complete item label.',
    ],
  },
  code: {
    language: 'tsx',
    source: `<Sidebar
  aria-label="Compact workspace navigation"
  items={workspaceItems}
  activeHref={pathname}
  variant="icon-only"
/>`,
    html: `<aside data-slot="sidebar" data-variant="icon-only"
  class="hidden md:block w-14 shrink-0 border-r border-border px-2 py-4">
  <nav aria-label="Compact workspace navigation" class="flex flex-col gap-0.5">
    <a href="/components/sidebar" aria-label="Overview"
      aria-current="page" data-active="true"
      class="flex h-10 w-10 items-center justify-center rounded-md
        text-muted-foreground transition-colors hover:bg-muted hover:text-foreground
        data-[active=true]:bg-muted data-[active=true]:text-foreground
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <svg aria-hidden="true" class="size-5 shrink-0">…</svg>
    </a>
    <a href="/components/header" aria-label="Header"
      class="flex h-10 w-10 items-center justify-center rounded-md
        text-muted-foreground transition-colors hover:bg-muted hover:text-foreground
        data-[active=true]:bg-muted data-[active=true]:text-foreground
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <span aria-hidden="true" class="flex size-5 items-center justify-center text-xs font-semibold">H</span>
    </a>
  </nav>
</aside>`,
    props: [
      sidebarProps.items,
      sidebarProps.activeHref,
      sidebarProps.ariaLabel,
      sidebarProps.variant,
    ],
    attributes: [
      sidebarCodeAttributes[0],
      sidebarCodeAttributes[1],
      sidebarCodeAttributes[2],
      sidebarCodeAttributes[4],
      sidebarCodeAttributes[5],
    ],
  },
  requirements: {
    userStory:
      'As a person with limited horizontal space, I want a compact Sidebar that retains accessible labels so that I can navigate without losing destination meaning.',
    acceptanceCriteria: [
      {
        given: 'Sidebar uses variant="icon-only"',
        when: 'the rail renders at a desktop width',
        then: 'the root uses the icon-only width and each visible link is a compact square target',
        and: [
          'the root exposes data-variant="icon-only"',
          'the rail uses w-14 with px-2 py-4',
          'each link uses h-10 w-10 and remains keyboard focusable',
        ],
      },
      {
        given: 'a link label is hidden visually',
        when: 'the link is inspected or focused',
        then: 'the link retains its complete accessible name',
        and: [
          'aria-label equals the item label',
          'the icon is aria-hidden',
          'a tooltip can expose the same label to sighted keyboard or pointer users',
        ],
      },
      {
        given: 'an item has no icon',
        when: 'icon-only mode renders it',
        then: 'a first-letter visual fallback appears without replacing the accessible label',
      },
      {
        given: 'the current item is rendered in icon-only mode',
        when: 'a person inspects or focuses it',
        then: 'current styling, aria-current="page", and focus-visible styling remain available',
      },
      {
        given: 'the viewport is below the persistent-rail breakpoint',
        when: 'the application renders its responsive shell',
        then: 'the application provides the navigation through its chosen mobile composition',
        and: ['Sidebar itself does not infer or synthesize that mobile composition'],
      },
    ],
  },
  verification: {
    scenarios: [
      {
        title: 'Compact visual treatment',
        cases: [
          {
            title: 'Icon and fallback rendering',
            steps: [
              'Render icon-only mode with one icon item and one item without an icon.',
              'Inspect the root variant and link classes.',
              'Inspect SVG/span accessibility attributes.',
            ],
            expected:
              'The rail is 56px wide, links are 40px squares, icons and fallback letters are decorative, and each link retains its full accessible label.',
          },
          {
            title: 'Tooltip and keyboard label',
            steps: [
              'Focus an icon-only link with Tab.',
              'Move across the link with a pointer.',
              'Inspect the tooltip or equivalent visible label.',
            ],
            expected:
              'The destination label is available without requiring hover alone and focus remains visibly indicated.',
          },
        ],
      },
      {
        title: 'State and responsive edge conditions',
        cases: [
          {
            title: 'Current compact item',
            steps: [
              'Render with the first item current.',
              'Inspect aria-current and data-active.',
              'Focus the current item.',
            ],
            expected:
              'The current compact link retains active surface, current semantics, and a visible focus ring simultaneously.',
          },
          {
            title: 'Narrow viewport',
            steps: [
              'Render below the md breakpoint.',
              'Inspect the Sidebar landmark.',
              'Open the application-provided mobile navigation.',
            ],
            expected:
              'The persistent Sidebar is hidden and the application’s mobile composition remains the available path to the same destinations.',
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
