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
    groups: [
      {
        id: 'BR-BASIC',
        title: 'Business requirements',
        items: [
          'People can identify this navigation as the collection of destinations for the current application area.',
          'People can understand which page they are currently viewing.',
          'People can reach the other supplied destinations without leaving the application shell.',
        ],
      },
      {
        id: 'FR-BASIC',
        title: 'Functional requirements',
        items: [
          'The Sidebar presents the supplied destinations in the order provided by the application.',
          'Selecting a destination follows that destination’s configured link.',
          'When no destinations are supplied, the page does not show an empty navigation area.',
        ],
      },
      {
        id: 'NFR-BASIC',
        title: 'Non-functional requirements',
        items: [
          'The desktop rail remains visually distinct from the main content.',
          'The navigation remains usable when the persistent rail is hidden at smaller widths.',
          'The Sidebar does not create a second or conflicting mobile navigation model.',
        ],
      },
      {
        id: 'A11Y-BASIC',
        title: 'Accessibility requirements',
        items: [
          'The Sidebar has one clear, distinguishable navigation name.',
          'Keyboard users can reach and activate every visible destination in order.',
          'The current destination is not communicated through color alone.',
        ],
      },
      {
        id: 'TR-BASIC',
        title: 'Technical requirements',
        items: [
          'Navigation data and current-page decisions are supplied by the consuming application.',
          'The reusable Sidebar does not require router context to render.',
          'The rail uses the labeled variant’s documented width, spacing, and responsive visibility behavior.',
        ],
      },
    ],
    acceptanceCriteria: [
      {
        id: 'AC-BASIC-01',
        requirementRefs: ['FR-BASIC-01'],
        given: 'the Sidebar receives three flat destinations',
        when: 'the rail renders at a supported desktop width',
        then: 'one labelled navigation landmark contains the destinations in the supplied order',
        and: [
          'each destination is a visible link',
          'the rail has its intended width, spacing, and boundary',
        ],
      },
      {
        id: 'AC-BASIC-02',
        requirementRefs: ['NFR-BASIC-01'],
        given: 'Overview is the current destination',
        when: 'the Sidebar renders',
        then: 'Overview is clearly identified as the page being viewed',
        and: [
          'it has active visual treatment',
          'it is marked as the current page for assistive technology',
          'the other links are not marked current',
        ],
      },
      {
        id: 'AC-BASIC-03',
        requirementRefs: ['A11Y-BASIC-01'],
        given: 'a person points to an inactive link',
        when: 'the hover state appears',
        then: 'the link gains a clear visual surface without changing size or order',
        and: ['the hover treatment is not the only way to understand the destination'],
      },
      {
        id: 'AC-BASIC-04',
        requirementRefs: ['FR-BASIC-02'],
        given: 'a person uses the keyboard',
        when: 'focus moves through the links',
        then: 'every link can be focused and activated in order',
        and: ['the focus indicator is visible', 'Enter follows the selected link'],
      },
      {
        id: 'AC-BASIC-05',
        requirementRefs: ['NFR-BASIC-02'],
        given: 'the viewport becomes narrow',
        when: 'the persistent rail is no longer appropriate',
        then: 'the rail is hidden and the application can provide the same destinations through its chosen mobile presentation',
        and: ['Sidebar does not invent a second navigation model'],
      },
      {
        id: 'AC-BASIC-06',
        requirementRefs: ['A11Y-BASIC-02'],
        given: 'items is empty or omitted',
        when: 'the component renders',
        then: 'no empty Sidebar rail or empty navigation landmark appears',
      },
      {
        id: 'AC-BASIC-07',
        requirementRefs: ['FR-BASIC-03'],
        given: 'the Sidebar appears beside Header or tabs',
        when: 'landmarks are announced',
        then: 'people can distinguish the Sidebar navigation from the other navigation layers',
        and: [
          'the Sidebar uses its configured name',
          'it does not absorb the Header or tab landmarks',
        ],
      },
      {
        id: 'AC-BASIC-08',
        requirementRefs: ['A11Y-BASIC-03'],
        given: 'a person views the rail at desktop width',
        when: 'the page is laid out',
        then: 'the rail does not overlap or reorder the main content unexpectedly',
        and: ['the right border separates the rail from Main', 'the links remain inside the rail'],
      },
      {
        id: 'AC-BASIC-09',
        requirementRefs: ['NFR-BASIC-03'],
        given: 'the application supplies a destination href',
        when: 'the person activates its link',
        then: 'the browser follows that destination as normal navigation',
        and: ['Sidebar does not turn the link into an unrelated action'],
      },
    ],
  },
  tabLayout: 'requirements' as const,
  verification: {
    scenarios: [
      {
        title: 'Structure and desktop presentation',
        role: 'Product owner / BA',
        cases: [
          {
            id: 'VR-BASIC-01',
            criterionRefs: ['AC-BASIC-01'],
            title: 'Landmark and order',
            steps: [
              'Render the flat Sidebar at desktop width.',
              'Find the Section navigation landmark.',
              'Inspect the rail, links, order, width, padding, and border.',
            ],
            expected:
              'One labelled Sidebar rail contains the links in order inside the intended desktop presentation.',
          },
          {
            id: 'VR-BASIC-02',
            criterionRefs: ['AC-BASIC-02'],
            title: 'Idle and hover treatment',
            steps: [
              'Inspect an inactive link class list.',
              'Hover it.',
              'Compare its dimensions before and during hover.',
            ],
            expected:
              'The link keeps its dimensions while its surface and text treatment change as intended; no layout shift occurs.',
          },
          {
            id: 'VR-BASIC-03',
            criterionRefs: ['AC-BASIC-03'],
            title: 'Destination outcome',
            steps: ['Focus Tab navigation.', 'Press Enter.', 'Inspect the destination.'],
            expected: 'The focused link follows its supplied href as normal navigation.',
          },
        ],
      },
      {
        title: 'Current state and accessibility',
        role: 'Accessibility QA',
        cases: [
          {
            id: 'VR-BASIC-04',
            criterionRefs: ['AC-BASIC-04'],
            title: 'Current destination',
            steps: [
              'Inspect Overview.',
              'Inspect its current styling and attributes.',
              'Inspect the other links.',
            ],
            expected:
              'Only Overview is visually current and exposes aria-current="page" and data-active="true"; other links remain unselected.',
          },
          {
            id: 'VR-BASIC-05',
            criterionRefs: ['AC-BASIC-05'],
            title: 'Landmark separation',
            steps: [
              'Render Sidebar beside Header and tabs.',
              'List landmarks with accessibility tools.',
            ],
            expected:
              'Sidebar is named Section navigation and does not replace or absorb the other landmarks.',
          },
        ],
      },
      {
        title: 'Keyboard and responsive boundaries',
        role: 'Functional QA / Responsive QA',
        cases: [
          {
            id: 'VR-BASIC-06',
            criterionRefs: ['AC-BASIC-06'],
            title: 'Keyboard traversal',
            steps: [
              'Tab through every visible link.',
              'Observe focus-visible styling.',
              'Activate a link with Enter.',
            ],
            expected:
              'Every link is reachable in order, focus is visible, and activation follows the link.',
          },
          {
            id: 'VR-BASIC-07',
            criterionRefs: ['AC-BASIC-07'],
            title: 'Empty state',
            steps: [
              'Render with items={[]}.',
              'Query the page for Sidebar and navigation landmarks.',
            ],
            expected: 'No empty rail or empty Sidebar navigation landmark is rendered.',
          },
          {
            id: 'VR-BASIC-08',
            criterionRefs: ['AC-BASIC-08', 'AC-BASIC-09'],
            title: 'Narrow viewport',
            steps: [
              'Resize below the desktop breakpoint.',
              'Inspect the persistent rail.',
              'Inspect the application’s chosen mobile composition.',
            ],
            expected:
              'The persistent Sidebar hides without a duplicate empty landmark and the application still provides its destinations.',
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
    groups: [
      {
        id: 'BR-GROUPED',
        title: 'Business requirements',
        items: [
          'People can scan related destinations by the purpose of each group.',
          'People can understand which group contains the page they are viewing.',
          'People can use the same information hierarchy when the application presents navigation in another responsive format.',
        ],
      },
      {
        id: 'FR-GROUPED',
        title: 'Functional requirements',
        items: [
          'The Sidebar presents group headings before their links.',
          'The order of groups and links matches the supplied navigation model.',
          'Selecting a grouped destination follows its configured link without requiring a disclosure interaction.',
        ],
      },
      {
        id: 'NFR-GROUPED',
        title: 'Non-functional requirements',
        items: [
          'Group separation is understandable without relying on color alone.',
          'Long group or destination labels remain understandable in the labeled presentation.',
          'The grouped hierarchy can be reused by the application’s mobile composition.',
        ],
      },
      {
        id: 'A11Y-GROUPED',
        title: 'Accessibility requirements',
        items: [
          'Groups remain inside one named navigation landmark.',
          'Decorative icons do not create duplicate or confusing link names.',
          'Keyboard focus follows the visible group and link order.',
        ],
      },
      {
        id: 'TR-GROUPED',
        title: 'Technical requirements',
        items: [
          'The reusable Sidebar supports one grouping level for this pattern.',
          'Group headings are presentation structure, not additional navigation landmarks or false controls.',
          'The application owns permissions, route matching, and responsive composition.',
        ],
      },
    ],
    acceptanceCriteria: [
      {
        id: 'AC-GROUPED-01',
        requirementRefs: ['FR-GROUPED-01'],
        given: 'items contains Getting started and Workspace groups',
        when: 'the Sidebar renders',
        then: 'each group heading appears before its links in the supplied order',
        and: [
          'there is one navigation landmark for the Sidebar',
          'groups do not become separate navigation landmarks',
        ],
      },
      {
        id: 'AC-GROUPED-02',
        requirementRefs: ['A11Y-GROUPED-01'],
        given: 'a group contains multiple links',
        when: 'the person scans it',
        then: 'the visible order and shared spacing communicate that the links belong together',
        and: ['headings are concise', 'the hierarchy does not rely on color alone'],
      },
      {
        id: 'AC-GROUPED-03',
        requirementRefs: ['FR-GROUPED-02'],
        given: 'a link has an icon and visible label',
        when: 'the link renders',
        then: 'the icon supports recognition while the visible label remains the destination name',
        and: [
          'decorative icons are not announced separately',
          'the label remains visible in the labeled variant',
        ],
      },
      {
        id: 'AC-GROUPED-04',
        requirementRefs: ['NFR-GROUPED-01'],
        given: 'Overview is current inside Getting started',
        when: 'the Sidebar renders',
        then: 'the current link is identified without hiding its group context',
        and: ['the heading remains visible', 'non-current links remain ordinary links'],
      },
      {
        id: 'AC-GROUPED-05',
        requirementRefs: ['FR-GROUPED-03'],
        given: 'the second group follows the first',
        when: 'the visual layout renders',
        then: 'the groups are separated consistently',
        and: [
          'the first group does not receive inter-group spacing',
          'later groups receive the intended spacing and, in compact mode, divider',
        ],
      },
      {
        id: 'AC-GROUPED-06',
        requirementRefs: ['A11Y-GROUPED-02', 'A11Y-GROUPED-03'],
        given: 'a person uses the keyboard',
        when: 'focus moves through groups',
        then: 'links are reached in DOM and visual order',
        and: ['headings are not false controls', 'Enter activates the focused link'],
      },
      {
        id: 'AC-GROUPED-07',
        requirementRefs: ['NFR-GROUPED-02', 'NFR-GROUPED-03'],
        given: 'a group label or link label is long',
        when: 'the labeled rail is viewed',
        then: 'the information remains understandable and the application can make an intentional wrapping decision',
        and: ['the label is not silently replaced by an icon'],
      },
      {
        id: 'AC-GROUPED-08',
        requirementRefs: ['TR-GROUPED-01', 'TR-GROUPED-02', 'TR-GROUPED-03'],
        given: 'the desktop rail is hidden for a responsive presentation',
        when: 'the application rebuilds navigation',
        then: 'the same group data can be reused without Sidebar context',
        and: ['the application owns the mobile transformation'],
      },
    ],
  },
  tabLayout: 'requirements' as const,
  verification: {
    scenarios: [
      {
        title: 'Grouped hierarchy',
        role: 'Product owner / BA',
        cases: [
          {
            id: 'VR-GROUPED-01',
            criterionRefs: ['AC-GROUPED-01'],
            title: 'Group structure',
            steps: [
              'Render the grouped Sidebar.',
              'Inspect the Documentation navigation landmark.',
              'Check heading order, link order, and group wrappers.',
            ],
            expected:
              'One navigation landmark contains Getting started followed by Workspace; each heading precedes its links and no group creates a nested nav.',
          },
          {
            id: 'VR-GROUPED-02',
            criterionRefs: ['AC-GROUPED-02'],
            title: 'Group spacing',
            steps: [
              'Inspect the first and second group wrappers.',
              'Compare their margin, border, and heading classes.',
            ],
            expected:
              'The first group has no inter-group spacing and the later group is separated consistently without changing link order.',
          },
          {
            id: 'VR-GROUPED-03',
            criterionRefs: ['AC-GROUPED-03'],
            title: 'Long-label resilience',
            steps: [
              'Use a long group or link label in the example data.',
              'View the labeled rail at desktop width.',
            ],
            expected:
              'The label remains understandable and the application has an intentional wrapping or sizing outcome.',
          },
        ],
      },
      {
        title: 'Icons and current state',
        role: 'Accessibility QA',
        cases: [
          {
            id: 'VR-GROUPED-04',
            criterionRefs: ['AC-GROUPED-04'],
            title: 'Decorative icons',
            steps: ['Inspect every rendered SVG.', 'Inspect each link accessible name.'],
            expected:
              'Icons are decorative and each accessible link name remains its visible text label.',
          },
          {
            id: 'VR-GROUPED-05',
            criterionRefs: ['AC-GROUPED-05'],
            title: 'Grouped current destination',
            steps: [
              'Inspect Overview and Settings.',
              'Compare current attributes and group context.',
            ],
            expected:
              'Overview alone is current while Getting started remains visible as its context.',
          },
          {
            id: 'VR-GROUPED-06',
            criterionRefs: ['AC-GROUPED-06'],
            title: 'Normal link activation',
            steps: ['Focus a grouped link.', 'Press Enter.'],
            expected: 'The link follows its href; group headings are not false controls.',
          },
        ],
      },
      {
        title: 'Keyboard and responsive behavior',
        role: 'Functional QA / Responsive QA',
        cases: [
          {
            id: 'VR-GROUPED-07',
            criterionRefs: ['AC-GROUPED-07'],
            title: 'Sequential focus',
            steps: ['Tab from the first link through the final link.', 'Observe focus rings.'],
            expected:
              'Focus follows the grouped DOM order and each link has visible focus treatment.',
          },
          {
            id: 'VR-GROUPED-08',
            criterionRefs: ['AC-GROUPED-08'],
            title: 'Responsive data ownership',
            steps: [
              'Hide the desktop rail at a narrow width.',
              'Compose the application’s mobile navigation from the same group data.',
            ],
            expected:
              'The application can reuse the group data without Sidebar context and preserves group meaning.',
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
    groups: [
      {
        id: 'BR-ACTIVE',
        title: 'Business requirements',
        items: [
          'People can tell which destination represents the page they are viewing.',
          'People can move to another destination and understand that the selected location has changed.',
          'People are not given a false current location when no supplied destination matches.',
        ],
      },
      {
        id: 'FR-ACTIVE',
        title: 'Functional requirements',
        items: [
          'The Sidebar selects the destination whose href exactly matches the application-provided active href.',
          'Changing the active href moves the selected state to the new matching destination.',
          'A partial or prefix match does not select a destination.',
        ],
      },
      {
        id: 'NFR-ACTIVE',
        title: 'Non-functional requirements',
        items: [
          'Current and focus states remain distinguishable when they appear together.',
          'The current location remains understandable in the application’s responsive presentation.',
          'A missing match leaves all destinations usable rather than disabling navigation.',
        ],
      },
      {
        id: 'A11Y-ACTIVE',
        title: 'Accessibility requirements',
        items: [
          'The current destination is identified programmatically as well as visually.',
          'Non-current destinations are not announced as current.',
          'Keyboard users can focus and activate both current and non-current destinations.',
        ],
      },
      {
        id: 'TR-ACTIVE',
        title: 'Technical requirements',
        items: [
          'The consuming application supplies activeHref or explicit current state.',
          'Sidebar does not inspect router context or calculate application-specific route meaning.',
          'The active state is represented by the component’s documented current-state hooks.',
        ],
      },
    ],
    acceptanceCriteria: [
      {
        id: 'AC-ACTIVE-01',
        requirementRefs: ['FR-ACTIVE-01', 'TR-ACTIVE-01'],
        given: 'activeHref exactly matches one destination',
        when: 'the Sidebar renders',
        then: 'only that destination is selected',
        and: [
          'it has active styling',
          'it exposes data-active="true" and aria-current="page"',
          'other links remain unselected',
        ],
      },
      {
        id: 'AC-ACTIVE-02',
        requirementRefs: ['FR-ACTIVE-02', 'TR-ACTIVE-02'],
        given: 'the application changes activeHref to another exact destination',
        when: 'the Sidebar rerenders',
        then: 'the selected state moves to the new destination',
        and: [
          'the previous link loses current state',
          'a partial or prefix match does not select a link',
        ],
      },
      {
        id: 'AC-ACTIVE-03',
        requirementRefs: ['FR-ACTIVE-03', 'TR-ACTIVE-03'],
        given: 'activeHref matches no destination',
        when: 'the Sidebar renders',
        then: 'no destination is presented as current',
        and: [
          'all links remain usable',
          'the absence of a selection is not represented as a false current page',
        ],
      },
      {
        id: 'AC-ACTIVE-04',
        requirementRefs: ['A11Y-ACTIVE-01'],
        given: 'the current link receives keyboard focus',
        when: 'the focus state appears',
        then: 'current and focus treatments remain visible together',
        and: ['the target does not move', 'the person can still identify and activate it'],
      },
      {
        id: 'AC-ACTIVE-05',
        requirementRefs: ['NFR-ACTIVE-01'],
        given: 'a person selects a non-current link',
        when: 'the browser follows the link',
        then: 'the application can update the supplied current state after navigation',
        and: ['Sidebar does not calculate a conflicting state'],
      },
      {
        id: 'AC-ACTIVE-06',
        requirementRefs: ['NFR-ACTIVE-02'],
        given: 'the current route is represented at narrow width',
        when: 'the responsive presentation appears',
        then: 'the current destination remains identifiable in the application’s mobile composition',
        and: ['the desktop-only visual treatment is not the only current cue'],
      },
      {
        id: 'AC-ACTIVE-07',
        requirementRefs: ['A11Y-ACTIVE-02', 'A11Y-ACTIVE-03'],
        given: 'the Sidebar is viewed with Header and tabs',
        when: 'landmarks are announced',
        then: 'the selected Sidebar destination remains associated with the Sidebar landmark',
        and: ['selection does not change the names of other landmarks'],
      },
    ],
  },
  tabLayout: 'requirements' as const,
  verification: {
    scenarios: [
      {
        title: 'Selection outcomes',
        role: 'Product owner / BA',
        cases: [
          {
            id: 'VR-ACTIVE-01',
            criterionRefs: ['AC-ACTIVE-01'],
            title: 'Exact match',
            steps: ['Render with activeHref="/components/sidebar".', 'Inspect every link.'],
            expected:
              'Only the exact matching link has active styling, data-active="true", and aria-current="page".',
          },
          {
            id: 'VR-ACTIVE-02',
            criterionRefs: ['AC-ACTIVE-02'],
            title: 'State transition',
            steps: ['Change activeHref to /components/header.', 'Rerender and inspect both links.'],
            expected: 'The active state moves to Header and is removed from the previous link.',
          },
          {
            id: 'VR-ACTIVE-03',
            criterionRefs: ['AC-ACTIVE-03'],
            title: 'No-match boundary',
            steps: ['Render with an href that matches no item.', 'Query for aria-current="page".'],
            expected: 'All links remain usable and no link is presented as current.',
          },
        ],
      },
      {
        title: 'Focus and navigation',
        role: 'Functional QA',
        cases: [
          {
            id: 'VR-ACTIVE-04',
            criterionRefs: ['AC-ACTIVE-04'],
            title: 'Current plus focus',
            steps: ['Focus the current link with Tab.', 'Compare focus and current treatment.'],
            expected:
              'Both states remain visible without moving the link or removing its accessible name.',
          },
          {
            id: 'VR-ACTIVE-05',
            criterionRefs: ['AC-ACTIVE-05'],
            title: 'Activation outcome',
            steps: [
              'Focus a non-current link.',
              'Press Enter.',
              'Observe navigation and resulting application state.',
            ],
            expected:
              'The link follows its href and the application can supply the new current state after navigation.',
          },
        ],
      },
      {
        title: 'Responsive and landmarks',
        role: 'Accessibility QA / Responsive QA',
        cases: [
          {
            id: 'VR-ACTIVE-06',
            criterionRefs: ['AC-ACTIVE-06'],
            title: 'Narrow current state',
            steps: [
              'Resize below the persistent-rail breakpoint.',
              'Open the application mobile composition.',
              'Inspect the current destination.',
            ],
            expected: 'The current location remains understandable in the responsive presentation.',
          },
          {
            id: 'VR-ACTIVE-07',
            criterionRefs: ['AC-ACTIVE-07'],
            title: 'Landmark association',
            steps: [
              'Render alongside Header and tabs.',
              'Inspect landmark names and current link.',
            ],
            expected:
              'The current link remains within the Sidebar landmark and other landmark names remain unchanged.',
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
    groups: [
      {
        id: 'BR-ICON',
        title: 'Business requirements',
        items: [
          'People can use a compact navigation when horizontal space is limited.',
          'People can still understand what each icon-only destination means.',
          'People can reach the same destinations when the compact rail is replaced on smaller screens.',
        ],
      },
      {
        id: 'FR-ICON',
        title: 'Functional requirements',
        items: [
          'The icon-only variant presents each destination as a compact square target.',
          'Each destination retains its complete label even when the visible text is hidden.',
          'An item without an icon receives a safe visual fallback without losing its label.',
        ],
      },
      {
        id: 'NFR-ICON',
        title: 'Non-functional requirements',
        items: [
          'Compact targets remain consistent in size and spacing.',
          'Current and focus states remain visible in the compact presentation.',
          'The compact rail does not introduce unintended horizontal scrolling at the narrowest supported width.',
        ],
      },
      {
        id: 'A11Y-ICON',
        title: 'Accessibility requirements',
        items: [
          'Every icon-only link has a complete programmatic accessible name.',
          'Decorative icons and fallback letters are not announced as separate content.',
          'Keyboard users can discover, focus, and activate each compact destination without relying on a pointer.',
        ],
      },
      {
        id: 'TR-ICON',
        title: 'Technical requirements',
        items: [
          'The icon-only variant uses the documented compact width and target dimensions.',
          'The application supplies icons and labels; Sidebar owns the compact visual presentation.',
          'Responsive replacement of the hidden rail remains an application-shell responsibility.',
        ],
      },
    ],
    acceptanceCriteria: [
      {
        id: 'AC-ICON-01',
        requirementRefs: ['FR-ICON-01'],
        given: 'Sidebar uses the icon-only variant',
        when: 'the rail renders at desktop width',
        then: 'the rail becomes a compact navigation surface',
        and: [
          'the rail uses the compact width and padding',
          'each link remains a keyboard-focusable square target',
        ],
      },
      {
        id: 'AC-ICON-02',
        requirementRefs: ['A11Y-ICON-01'],
        given: 'a link label is hidden visually',
        when: 'the person inspects or focuses it',
        then: 'the complete destination name remains available',
        and: [
          'the link has a programmatic name',
          'a visible tooltip or equivalent can reveal the label without pointer-only dependence',
        ],
      },
      {
        id: 'AC-ICON-03',
        requirementRefs: ['A11Y-ICON-02'],
        given: 'an item has an icon',
        when: 'the compact link renders',
        then: 'the icon appears as a decorative visual cue',
        and: [
          'the icon does not receive separate focus',
          'the link label remains the accessible name',
        ],
      },
      {
        id: 'AC-ICON-04',
        requirementRefs: ['A11Y-ICON-03'],
        given: 'an item has no icon',
        when: 'the compact link renders',
        then: 'a safe first-letter visual fallback appears',
        and: ['the fallback is decorative', 'the complete item label remains programmatic'],
      },
      {
        id: 'AC-ICON-05',
        requirementRefs: ['NFR-ICON-01'],
        given: 'the current item receives focus',
        when: 'the compact link is active',
        then: 'current styling and focus styling remain visible together',
        and: ['aria-current remains available', 'the target remains the documented size'],
      },
      {
        id: 'AC-ICON-06',
        requirementRefs: ['A11Y-ICON-02'],
        given: 'a person uses the keyboard without a pointer',
        when: 'an icon-only link receives focus',
        then: 'the destination can still be identified and activated',
        and: ['focus is visible', 'the link itself remains the keyboard target'],
      },
      {
        id: 'AC-ICON-07',
        requirementRefs: ['NFR-ICON-02', 'FR-ICON-02'],
        given: 'the viewport becomes narrow',
        when: 'the persistent rail is hidden',
        then: 'the application provides its chosen responsive navigation',
        and: ['Sidebar does not synthesize a separate mobile model'],
      },
      {
        id: 'AC-ICON-08',
        requirementRefs: ['NFR-ICON-03', 'FR-ICON-03'],
        given: 'the compact rail contains multiple groups',
        when: 'the visual layout renders',
        then: 'group boundaries remain understandable through spacing or dividers',
        and: ['group headings may be hidden but grouping is not silently reordered'],
      },
      {
        id: 'AC-ICON-09',
        requirementRefs: ['NFR-ICON-03'],
        given: 'the compact rail is viewed at the narrowest supported width',
        when: 'the layout reflows',
        then: 'the rail does not create unintended horizontal scrolling',
        and: ['the application provides another usable path when the rail is hidden'],
      },
    ],
  },
  tabLayout: 'requirements' as const,
  verification: {
    scenarios: [
      {
        title: 'Compact structure and visual treatment',
        role: 'Product owner / Design QA',
        cases: [
          {
            id: 'VR-ICON-01',
            criterionRefs: ['AC-ICON-01'],
            title: 'Variant and target size',
            steps: [
              'Render icon-only mode at desktop width.',
              'Inspect root data-variant, width, padding, and link dimensions.',
            ],
            expected:
              'The rail uses the icon-only presentation and each link is a documented 40px square target.',
          },
          {
            id: 'VR-ICON-02',
            criterionRefs: ['AC-ICON-02'],
            title: 'Icon and fallback',
            steps: [
              'Render one item with an icon and one without.',
              'Inspect the SVG and fallback letter.',
            ],
            expected:
              'The icon or first-letter fallback is decorative and each link retains its complete accessible label.',
          },
          {
            id: 'VR-ICON-03',
            criterionRefs: ['AC-ICON-03'],
            title: 'Group boundaries',
            steps: [
              'Render compact mode with multiple groups.',
              'Inspect group separators and order.',
            ],
            expected:
              'Groups remain in order and their separation is understandable without restoring hidden headings as landmarks.',
          },
        ],
      },
      {
        title: 'Labels, focus, and selection',
        role: 'Accessibility QA',
        cases: [
          {
            id: 'VR-ICON-04',
            criterionRefs: ['AC-ICON-04'],
            title: 'Programmatic label',
            steps: [
              'Focus an icon-only link with Tab.',
              'Inspect its accessible name and tooltip behavior.',
            ],
            expected:
              'The link remains the keyboard target, has a complete accessible name, and its label can be discovered without pointer-only interaction.',
          },
          {
            id: 'VR-ICON-05',
            criterionRefs: ['AC-ICON-05'],
            title: 'Current plus focus',
            steps: [
              'Render the current compact link.',
              'Focus it.',
              'Inspect aria-current, data-active, active classes, and focus ring.',
            ],
            expected:
              'Current and focus states are simultaneously visible and do not change target size.',
          },
          {
            id: 'VR-ICON-06',
            criterionRefs: ['AC-ICON-06'],
            title: 'Activation',
            steps: ['Press Enter on the focused compact link.', 'Observe the destination.'],
            expected: 'The compact link activates as normal navigation.',
          },
        ],
      },
      {
        title: 'Responsive and narrow boundaries',
        role: 'Responsive QA',
        cases: [
          {
            id: 'VR-ICON-07',
            criterionRefs: ['AC-ICON-07'],
            title: 'Narrow transformation',
            steps: [
              'Resize below the persistent-rail breakpoint.',
              'Inspect the persistent rail and application mobile path.',
            ],
            expected:
              'The Sidebar hides and the application provides another usable path to the same destinations.',
          },
          {
            id: 'VR-ICON-08',
            criterionRefs: ['AC-ICON-08', 'AC-ICON-09'],
            title: 'Narrowest supported width',
            steps: [
              'Test the narrowest supported viewport.',
              'Inspect overflow, labels, and controls.',
            ],
            expected:
              'No unintended horizontal scrolling is introduced and every destination remains available through the application shell.',
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
