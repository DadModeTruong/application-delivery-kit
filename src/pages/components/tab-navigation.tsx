/**
 * Tab Navigation guide.
 *
 * Teaches short, URL-based peer navigation and distinguishes it from an
 * in-page tab-panel widget.
 */

import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { ExampleVariation } from '@/components/layout/example-variation'
import { TabNavigation } from '@/components/layout/tab-navigation'
import { userInterfaceSidebarLinks } from '@/config/component-navigation'

const tabNavigationProps = [
  {
    name: 'aria-label',
    type: 'string',
    example: 'aria-label="Documentation sections"',
    description:
      'Names this navigation landmark so it can be distinguished from Header and Sidebar navigation.',
  },
  {
    name: 'items',
    type: 'NavLeaf[]',
    example: 'items={sectionLinks}',
    description:
      'Application-owned links rendered as real anchors. Each item supplies a label and href.',
  },
  {
    name: 'activeHref',
    type: 'string',
    example: 'activeHref={pathname}',
    description:
      'Exact URL match used to expose aria-current="page" and active styling. The component does not infer route state.',
  },
  {
    name: 'size',
    type: '"contained" | "full"',
    example: 'size="contained"',
    description:
      'Controls the outer Container alignment while the tab tray continues to hug its content.',
  },
]

const tabNavigationAttributes = [
  {
    name: 'aria-label',
    type: 'accessible-name attribute',
    example: 'aria-label="Documentation sections"',
    description:
      'Names the navigation landmark and distinguishes it from other navigation regions on the page.',
  },
  {
    name: 'aria-current',
    type: 'accessibility state',
    example: 'aria-current="page"',
    description:
      'Identifies the link matching activeHref. It is rendered only for the current destination.',
  },
  {
    name: 'data-active',
    type: 'state styling hook',
    example: 'data-active="true"',
    description: 'Mirrors current-page state for styling; it does not replace aria-current.',
  },
  {
    name: 'data-slot',
    type: 'component hook',
    example: 'data-slot="tab-navigation"',
    description: 'Identifies the navigation root for inspection and targeted styling.',
  },
  {
    name: 'data-size',
    type: 'layout state',
    example: 'data-size="contained"',
    description: 'Identifies the selected outer Container alignment behavior.',
  },
]

function ComponentsTabNavigationPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/tab-navigation"
      tabActiveHref="/components/user-interface"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      sidebarAriaLabel="User Interface"
    >
      <div className="space-y-12">
        <section className="space-y-5" aria-labelledby="navigation-tab-heading">
          <h1 id="navigation-tab-heading" className="text-4xl font-semibold tracking-tight">
            Tab navigation
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Use TabNavigation for a short row of peer links inside the current section. On smaller
            screens, LayoutProvider makes the same links available in the Header drawer.
          </p>
        </section>
        <section className="space-y-5" aria-labelledby="navigation-tab-what-heading">
          <h2 id="navigation-tab-what-heading" className="text-2xl font-semibold tracking-tight">
            What is it?
          </h2>
          <p className="leading-7 text-muted-foreground">
            TabNavigation gives people nearby context without mixing section links into the
            application-wide Header. It renders real anchors and marks the active page with{' '}
            <code>aria-current="page"</code>.
          </p>
          <p className="leading-7 text-muted-foreground">
            Tab navigation is a reusable section-level pattern, not a second primary navigation
            system. It gives a page family one predictable place for nearby destinations while
            leaving broad product movement to the Header and deeper information architecture to the
            Sidebar.
          </p>
          <div className="overflow-hidden rounded-xl border">
            <TabNavigation
              items={[
                { label: 'Overview', href: '#tab-navigation-overview' },
                { label: 'Guidance', href: '#tab-navigation-guidance' },
                { label: 'Resources', href: '#tab-navigation-resources' },
              ]}
              aria-label="Tab navigation example"
            />
          </div>

          <p className="text-sm leading-6 text-muted-foreground">
            Try it: tab to each tab, activate one, and confirm the selected tab and page content
            stay understandable without relying on color alone.
          </p>
        </section>
        <section
          className="grid gap-10 lg:grid-cols-2"
          aria-labelledby="navigation-tab-use-heading"
        >
          <div className="space-y-5">
            <h2 id="navigation-tab-use-heading" className="text-2xl font-semibold tracking-tight">
              When to use it
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>For a small number of sibling pages.</li>
              <li>When the links share one clear section identity.</li>
              <li>When a horizontal row remains easy to scan.</li>
            </ul>
          </div>
          <div className="space-y-5" aria-labelledby="navigation-tab-not-heading">
            <h2 id="navigation-tab-not-heading" className="text-2xl font-semibold tracking-tight">
              When not to use it
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>For a deep or heavily grouped page map.</li>
              <li>For broad application destinations.</li>
              <li>When the row would wrap into an unclear second menu.</li>
            </ul>
          </div>
        </section>
        <section className="space-y-5" aria-labelledby="navigation-tab-design-heading">
          <h2 id="navigation-tab-design-heading" className="text-2xl font-semibold tracking-tight">
            Design considerations
          </h2>

          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
            <li>Keep labels short, parallel, and ordered in the same way as the page content.</li>
            <li>Keep the active state visually clear and tied to the destination URL.</li>
            <li>Use the same links in the mobile drawer, not a second data set.</li>
            <li>Keep the number of destinations small enough to scan without wrapping.</li>
            <li>
              Use stable spacing and a clear boundary so the row reads as navigation, not a second
              page title.
            </li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="navigation-tab-accessibility-heading">
          <h2
            id="navigation-tab-accessibility-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Accessibility considerations
          </h2>

          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
            <li>
              Give the landmark a specific <code>aria-label</code>.
            </li>
            <li>Use real links so keyboard and browser link actions work.</li>
            <li>
              Expose the current destination with <code>aria-current="page"</code> as well as a
              visible style.
            </li>
            <li>
              Keep focus indicators visible against the navigation background and preserve a logical
              tab order.
            </li>
            <li>Verify the mobile replacement remains named and reachable.</li>
            <li>
              Do not use color alone to communicate the active destination; text, underline, weight,
              or another cue should reinforce it.
            </li>
          </ul>
        </section>
        <section className="space-y-5" aria-labelledby="navigation-tab-responsive-heading">
          <h2
            id="navigation-tab-responsive-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">
            On wider screens, the short section-link row sits below the Header. On narrow screens,
            this row disappears rather than wrapping into a cramped strip; the same links move into
            the Header’s mobile menu. The desktop preview disappearing at a breakpoint is therefore
            an intentional responsive replacement, not missing content.
          </p>
          <p className="leading-7 text-muted-foreground">
            Keep one shared link list so the desktop and mobile paths stay in sync. Test the active
            link, keyboard focus, and the named navigation landmark at both widths.
          </p>
          <p className="leading-7 text-muted-foreground">
            Also test zoom and long translated labels. The component may disappear at a breakpoint,
            but the destinations must not disappear from the user experience; they should remain
            available through the Header’s mobile drawer with the same names, order, and
            current-location cue.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="navigation-tab-examples-heading">
          <h2
            id="navigation-tab-examples-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Examples and variations
          </h2>
          <p className="text-muted-foreground">
            Compare the variations as decisions: start with ordinary section links, add explicit
            current-page state when the route matters, then test whether longer labels remain usable
            at constrained widths. Every example uses the production TabNavigation component and the
            same five-tab documentation contract.
          </p>
          <div className="space-y-8">
            <ExampleVariation
              title="Basic"
              summary="A short row of sibling links gives a section a clear, local navigation layer."
              tryIt="Tab through the three links, activate one, and resize the page to observe the desktop-to-mobile boundary."
              supplemental={{
                guidance: {
                  explanation:
                    'Use TabNavigation when a small, flat set of sibling pages needs its own context below the Header.',
                  doItems: [
                    'Keep the list short and use labels that match the destination headings.',
                    'Pass real hrefs and a distinct aria-label for the navigation landmark.',
                    'Let the application own the shared data used by desktop and mobile navigation.',
                  ],
                  dontItems: [
                    'Do not use this row for the application-wide sitemap or deep grouped navigation.',
                    'Do not turn these anchors into a tab-panel widget or custom router action.',
                    'Do not rely on color, position, or hover alone to communicate current location.',
                  ],
                },
                code: {
                  language: 'tsx',
                  props: tabNavigationProps,
                  attributes: tabNavigationAttributes,
                  source: `<TabNavigation
  aria-label="Project guide sections"
  items={[
    { label: 'Overview', href: '/components/tab-navigation' },
    { label: 'Guidance', href: '/components/header' },
    { label: 'Resources', href: '/components/sidebar' },
  ]}
/>`,
                  html: `<nav aria-label="Project guide sections" data-slot="tab-navigation" data-size="contained" class="hidden md:block w-full py-3 mb-2">
  <div data-slot="container" data-size="2xl" class="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
    <div class="inline-flex w-fit items-center gap-1 rounded-lg bg-muted p-[3px]">
      <a href="/components/tab-navigation" data-active="false" class="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Overview</a>
      <a href="/components/header" data-active="false" class="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Guidance</a>
      <a href="/components/sidebar" data-active="false" class="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Resources</a>
    </div>
  </div>
</nav>`,
                },
                requirements: {
                  userStory:
                    'As a person moving through a product area, I want a short set of nearby links so that I can understand and move within the current section.',
                  groups: [
                    {
                      id: 'BR-BASIC',
                      title: 'Business requirements',
                      items: [
                        'People can identify this row as navigation for the current section.',
                        'People can move among nearby sibling destinations without confusing the row with primary navigation.',
                      ],
                    },
                    {
                      id: 'FR-BASIC',
                      title: 'Functional requirements',
                      items: [
                        'TabNavigation renders the supplied destinations as real anchors in supplied order.',
                        'Activating a destination follows its configured href with normal browser link behavior.',
                      ],
                    },
                    {
                      id: 'NFR-BASIC',
                      title: 'Non-functional requirements',
                      items: [
                        'The row remains compact and aligned with the surrounding page at supported desktop widths.',
                        'The component has an intentional narrow-screen behavior rather than creating a competing navigation model.',
                      ],
                    },
                    {
                      id: 'A11Y-BASIC',
                      title: 'Accessibility requirements',
                      items: [
                        'The navigation exposes a distinct accessible name and preserves semantic links.',
                        'Current state and keyboard focus remain understandable without relying on color alone.',
                      ],
                    },
                    {
                      id: 'TR-BASIC',
                      title: 'Technical requirements',
                      items: [
                        'The consuming application supplies NavLeaf data and optional activeHref.',
                        'The component can use LayoutProvider data without duplicating the application mobile navigation configuration.',
                      ],
                    },
                  ],
                  acceptanceCriteria: [
                    {
                      id: 'AC-BASIC-01',
                      requirementRefs: ['BR-BASIC-01'],
                      given: 'The row is rendered with three supplied sibling destinations',
                      when: 'the navigation appears',
                      then: 'one named navigation landmark contains three real links in the supplied order',
                      and: [
                        'each link has visible text',
                        'the row is visually distinct from the page heading',
                      ],
                    },
                    {
                      id: 'AC-BASIC-02',
                      requirementRefs: ['BR-BASIC-02'],
                      given: 'a person reviews the section navigation',
                      when: 'the links are presented',
                      then: 'the destinations are clearly related to the current section rather than the application-wide Header',
                      and: ['the labels are concise and parallel'],
                    },
                    {
                      id: 'AC-BASIC-03',
                      requirementRefs: ['FR-BASIC-01'],
                      given: 'a person activates a destination',
                      when: 'the link is selected',
                      then: 'the browser follows that destination as normal anchor navigation',
                      and: [
                        'the configured href is preserved',
                        'the link remains compatible with browser link actions',
                      ],
                    },
                    {
                      id: 'AC-BASIC-04',
                      requirementRefs: ['FR-BASIC-02'],
                      given: 'the row is rendered at a supported desktop width',
                      when: 'the layout is measured',
                      then: 'the navigation aligns with the page content and remains easy to scan',
                      and: ['the tray stays compact', 'the links remain in one intentional row'],
                    },
                    {
                      id: 'AC-BASIC-05',
                      requirementRefs: ['NFR-BASIC-01'],
                      given: 'the viewport becomes narrow',
                      when: 'the responsive breakpoint is reached',
                      then: 'the desktop row is hidden without inventing a second navigation model',
                      and: [
                        'the same destinations remain available through the application mobile presentation',
                      ],
                    },
                    {
                      id: 'AC-BASIC-06',
                      requirementRefs: ['NFR-BASIC-02'],
                      given: 'the page contains other navigation landmarks',
                      when: 'assistive technology lists landmarks',
                      then: 'the TabNavigation landmark has its configured distinct accessible name',
                      and: ['the name does not rely on visual position'],
                    },
                    {
                      id: 'AC-BASIC-07',
                      requirementRefs: ['A11Y-BASIC-01'],
                      given: 'keyboard focus moves through the row',
                      when: 'a person tabs across the links',
                      then: 'each link receives visible focus in the supplied order',
                      and: ['Enter activates the focused destination'],
                    },
                    {
                      id: 'AC-BASIC-08',
                      requirementRefs: ['A11Y-BASIC-02'],
                      given: 'no activeHref matches the supplied links',
                      when: 'the component renders',
                      then: 'no destination is marked as the current page',
                      and: ['the links remain ordinary navigable anchors'],
                    },
                    {
                      id: 'AC-BASIC-09',
                      requirementRefs: ['TR-BASIC-01'],
                      given: 'the consuming application supplies the navigation data',
                      when: 'TabNavigation renders',
                      then: 'the component uses the supplied NavLeaf labels and hrefs without fetching or inferring routes',
                      and: ['the component remains usable without router context'],
                    },
                    {
                      id: 'AC-BASIC-10',
                      requirementRefs: ['TR-BASIC-02'],
                      given: 'the consuming application supplies no links',
                      when: 'TabNavigation renders',
                      then: 'the component produces no empty navigation landmark',
                      and: ['the page does not reserve an unexplained blank row'],
                    },
                  ],
                },
                tabLayout: 'requirements',
                verification: {
                  scenarios: [
                    {
                      title: 'Structure and link behavior',
                      role: 'Product owner / BA',
                      cases: [
                        {
                          id: 'VR-BASIC-01',
                          criterionRefs: ['AC-BASIC-01'],
                          title: 'Landmark and order',
                          description:
                            'Checks that one named navigation landmark contains three real links in the supplied order.',
                          steps: [
                            'Render the basic TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'One named navigation landmark contains three real links in the supplied order.',
                        },
                        {
                          id: 'VR-BASIC-02',
                          criterionRefs: ['AC-BASIC-02'],
                          title: 'Section purpose',
                          description:
                            'Checks that the destinations are clearly related to the current section rather than the application-wide Header.',
                          steps: [
                            'Render the basic TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The destinations are clearly related to the current section rather than the application-wide header.',
                        },
                      ],
                    },
                    {
                      title: 'Destination and current state',
                      role: 'Functional QA',
                      cases: [
                        {
                          id: 'VR-BASIC-03',
                          criterionRefs: ['AC-BASIC-03'],
                          title: 'Destination outcome',
                          description:
                            'Checks that the browser follows that destination as normal anchor navigation.',
                          steps: [
                            'Render the basic TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The browser follows that destination as normal anchor navigation.',
                        },
                        {
                          id: 'VR-BASIC-04',
                          criterionRefs: ['AC-BASIC-04'],
                          title: 'Desktop presentation',
                          description:
                            'Checks that the navigation aligns with the page content and remains easy to scan.',
                          steps: [
                            'Render the basic TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The navigation aligns with the page content and remains easy to scan.',
                        },
                      ],
                    },
                    {
                      title: 'Responsive presentation',
                      role: 'Responsive QA',
                      cases: [
                        {
                          id: 'VR-BASIC-05',
                          criterionRefs: ['AC-BASIC-05'],
                          title: 'Responsive boundary',
                          description:
                            'Checks that the desktop row is hidden without inventing a second navigation model.',
                          steps: [
                            'Render the basic TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The desktop row is hidden without inventing a second navigation model.',
                        },
                        {
                          id: 'VR-BASIC-06',
                          criterionRefs: ['AC-BASIC-06'],
                          title: 'Named landmark',
                          description:
                            'Checks that the TabNavigation landmark has its configured distinct accessible name.',
                          steps: [
                            'Render the basic TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The tabnavigation landmark has its configured distinct accessible name.',
                        },
                      ],
                    },
                    {
                      title: 'Accessibility and keyboard use',
                      role: 'Accessibility QA',
                      cases: [
                        {
                          id: 'VR-BASIC-07',
                          criterionRefs: ['AC-BASIC-07'],
                          title: 'Keyboard traversal',
                          description:
                            'Checks that each link receives visible focus in the supplied order.',
                          steps: [
                            'Render the basic TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected: 'Each link receives visible focus in the supplied order.',
                        },
                        {
                          id: 'VR-BASIC-08',
                          criterionRefs: ['AC-BASIC-08'],
                          title: 'Current-state boundary',
                          description: 'Checks that no destination is marked as the current page.',
                          steps: [
                            'Render the basic TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected: 'No destination is marked as the current page.',
                        },
                      ],
                    },
                    {
                      title: 'Application integration',
                      role: 'Technical QA',
                      cases: [
                        {
                          id: 'VR-BASIC-09',
                          criterionRefs: ['AC-BASIC-09'],
                          title: 'Application data contract',
                          description:
                            'Checks that the component uses the supplied NavLeaf labels and hrefs without fetching or inferring routes.',
                          steps: [
                            'Render the basic TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The component uses the supplied navleaf labels and hrefs without fetching or inferring routes.',
                        },
                        {
                          id: 'VR-BASIC-10',
                          criterionRefs: ['AC-BASIC-10'],
                          title: 'Empty-state boundary',
                          description:
                            'Checks that the component produces no empty navigation landmark.',
                          steps: [
                            'Render the basic TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected: 'The component produces no empty navigation landmark.',
                        },
                      ],
                    },
                  ],
                },
              }}
            >
              <TabNavigation
                items={[
                  { label: 'Overview', href: '/components/tab-navigation' },
                  { label: 'Guidance', href: '/components/header' },
                  { label: 'Resources', href: '/components/sidebar' },
                ]}
                aria-label="Basic tab navigation"
              />
            </ExampleVariation>

            <ExampleVariation
              title="With active item"
              summary="An exact activeHref communicates which sibling destination represents the current page."
              tryIt="Tab to each link and confirm only Guidance exposes the current-page state before activating another destination."
              supplemental={{
                guidance: {
                  explanation:
                    'Add activeHref when the application needs the section navigation to communicate current location.',
                  doItems: [
                    'Use the exact destination URL as activeHref.',
                    'Keep one and only one current destination when the route matches a supplied link.',
                    'Verify aria-current, visible styling, and focus together.',
                  ],
                  dontItems: [
                    'Do not mark multiple links current.',
                    'Do not infer the current route inside the reusable component.',
                    'Do not remove focus visibility from the active styling.',
                  ],
                },
                code: {
                  language: 'tsx',
                  props: tabNavigationProps,
                  attributes: tabNavigationAttributes,
                  source: `<TabNavigation
  aria-label="Project guide sections"
  activeHref="/components/header"
  items={[
    { label: 'Overview', href: '/components/tab-navigation' },
    { label: 'Guidance', href: '/components/header' },
    { label: 'Resources', href: '/components/sidebar' },
  ]}
/>`,
                  html: `<nav aria-label="Project guide sections" data-slot="tab-navigation" data-size="contained" class="hidden md:block w-full py-3 mb-2">
  <div data-slot="container" data-size="2xl" class="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
    <div class="inline-flex w-fit items-center gap-1 rounded-lg bg-muted p-[3px]">
      <a href="/components/tab-navigation" data-active="false" class="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Overview</a>
      <a href="/components/header" aria-current="page" data-active="true" class="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:bg-background data-[active=true]:text-foreground data-[active=true]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Guidance</a>
      <a href="/components/sidebar" data-active="false" class="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Resources</a>
    </div>
  </div>
</nav>`,
                },
                requirements: {
                  userStory:
                    'As a person navigating a section, I want the current destination to be explicit so that I can understand where I am without relying on color or position.',
                  groups: [
                    {
                      id: 'BR-CURRENT',
                      title: 'Business requirements',
                      items: [
                        'People can identify this row as navigation for the current section.',
                        'People can move among nearby sibling destinations without confusing the row with primary navigation.',
                      ],
                    },
                    {
                      id: 'FR-CURRENT',
                      title: 'Functional requirements',
                      items: [
                        'TabNavigation renders the supplied destinations as real anchors in supplied order.',
                        'Activating a destination follows its configured href with normal browser link behavior.',
                      ],
                    },
                    {
                      id: 'NFR-CURRENT',
                      title: 'Non-functional requirements',
                      items: [
                        'The row remains compact and aligned with the surrounding page at supported desktop widths.',
                        'The component has an intentional narrow-screen behavior rather than creating a competing navigation model.',
                      ],
                    },
                    {
                      id: 'A11Y-CURRENT',
                      title: 'Accessibility requirements',
                      items: [
                        'The navigation exposes a distinct accessible name and preserves semantic links.',
                        'Current state and keyboard focus remain understandable without relying on color alone.',
                      ],
                    },
                    {
                      id: 'TR-CURRENT',
                      title: 'Technical requirements',
                      items: [
                        'The consuming application supplies NavLeaf data and optional activeHref.',
                        'The component can use LayoutProvider data without duplicating the application mobile navigation configuration.',
                      ],
                    },
                  ],
                  acceptanceCriteria: [
                    {
                      id: 'AC-CURRENT-01',
                      requirementRefs: ['BR-CURRENT-01'],
                      given:
                        'the row is rendered with three supplied sibling destinations and an activeHref',
                      when: 'the navigation appears',
                      then: 'one named navigation landmark contains the links in the supplied order',
                      and: ['the activeHref matches one supplied href'],
                    },
                    {
                      id: 'AC-CURRENT-02',
                      requirementRefs: ['BR-CURRENT-02'],
                      given: 'a person reviews the section navigation',
                      when: 'the links are presented',
                      then: 'the active destination is distinguishable from the inactive destinations without changing the link labels',
                      and: ['the active state is not communicated by color alone'],
                    },
                    {
                      id: 'AC-CURRENT-03',
                      requirementRefs: ['FR-CURRENT-01'],
                      given: 'a person activates an inactive destination',
                      when: 'the link is selected',
                      then: 'the browser follows that destination as normal anchor navigation',
                      and: ['the current-location decision remains application-owned'],
                    },
                    {
                      id: 'AC-CURRENT-04',
                      requirementRefs: ['FR-CURRENT-02'],
                      given: 'the activeHref matches exactly one link',
                      when: 'the component renders',
                      then: 'only the matching link exposes aria-current="page" and the active data state',
                      and: ['the other links do not expose current-page state'],
                    },
                    {
                      id: 'AC-CURRENT-05',
                      requirementRefs: ['NFR-CURRENT-01'],
                      given: 'the activeHref does not match any link',
                      when: 'the component renders',
                      then: 'no link is incorrectly presented as current',
                      and: ['the row remains usable as ordinary navigation'],
                    },
                    {
                      id: 'AC-CURRENT-06',
                      requirementRefs: ['NFR-CURRENT-02'],
                      given: 'the viewport becomes narrow',
                      when: 'the responsive breakpoint is reached',
                      then: 'the desktop row is hidden while the application can expose the same active destination through its mobile presentation',
                      and: ['TabNavigation does not render a competing mobile menu'],
                    },
                    {
                      id: 'AC-CURRENT-07',
                      requirementRefs: ['A11Y-CURRENT-01'],
                      given: 'keyboard focus moves through the row',
                      when: 'a person tabs across the links',
                      then: 'focus remains visible on both active and inactive links',
                      and: ['the active styling does not remove the focus indicator'],
                    },
                    {
                      id: 'AC-CURRENT-08',
                      requirementRefs: ['A11Y-CURRENT-02'],
                      given: 'the page contains Header, Sidebar, and TabNavigation landmarks',
                      when: 'assistive technology lists landmarks',
                      then: 'the TabNavigation landmark is independently named and discoverable',
                      and: ['the active link remains understandable out of context'],
                    },
                    {
                      id: 'AC-CURRENT-09',
                      requirementRefs: ['TR-CURRENT-01'],
                      given: 'the consuming application supplies activeHref',
                      when: 'TabNavigation renders',
                      then: 'the component applies exact-match current state without reading router context directly',
                      and: ['explicit activeHref takes precedence over shared context'],
                    },
                    {
                      id: 'AC-CURRENT-10',
                      requirementRefs: ['TR-CURRENT-02'],
                      given: 'the consuming application supplies no links',
                      when: 'TabNavigation renders',
                      then: 'the component produces no empty navigation landmark',
                      and: ['there is no misleading current state'],
                    },
                  ],
                },
                tabLayout: 'requirements',
                verification: {
                  scenarios: [
                    {
                      title: 'Structure and link behavior',
                      role: 'Product owner / BA',
                      cases: [
                        {
                          id: 'VR-CURRENT-01',
                          criterionRefs: ['AC-CURRENT-01'],
                          title: 'Landmark and order',
                          description:
                            'Checks that one named navigation landmark contains the links in the supplied order.',
                          steps: [
                            'Render the current TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'One named navigation landmark contains the links in the supplied order.',
                        },
                        {
                          id: 'VR-CURRENT-02',
                          criterionRefs: ['AC-CURRENT-02'],
                          title: 'Section purpose',
                          description:
                            'Checks that the active destination is distinguishable from the inactive destinations without changing the link labels.',
                          steps: [
                            'Render the current TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The active destination is distinguishable from the inactive destinations without changing the link labels.',
                        },
                      ],
                    },
                    {
                      title: 'Destination and current state',
                      role: 'Functional QA',
                      cases: [
                        {
                          id: 'VR-CURRENT-03',
                          criterionRefs: ['AC-CURRENT-03'],
                          title: 'Destination outcome',
                          description:
                            'Checks that the browser follows that destination as normal anchor navigation.',
                          steps: [
                            'Render the current TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The browser follows that destination as normal anchor navigation.',
                        },
                        {
                          id: 'VR-CURRENT-04',
                          criterionRefs: ['AC-CURRENT-04'],
                          title: 'Desktop presentation',
                          description:
                            'Checks that only the matching link exposes aria-current="page" and the active data state.',
                          steps: [
                            'Render the current TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'Only the matching link exposes aria-current="page" and the active data state.',
                        },
                      ],
                    },
                    {
                      title: 'Responsive presentation',
                      role: 'Responsive QA',
                      cases: [
                        {
                          id: 'VR-CURRENT-05',
                          criterionRefs: ['AC-CURRENT-05'],
                          title: 'Responsive boundary',
                          description: 'Checks that no link is incorrectly presented as current.',
                          steps: [
                            'Render the current TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected: 'No link is incorrectly presented as current.',
                        },
                        {
                          id: 'VR-CURRENT-06',
                          criterionRefs: ['AC-CURRENT-06'],
                          title: 'Named landmark',
                          description:
                            'Checks that the desktop row is hidden while the application can expose the same active destination through its mobile presentation.',
                          steps: [
                            'Render the current TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The desktop row is hidden while the application can expose the same active destination through its mobile presentation.',
                        },
                      ],
                    },
                    {
                      title: 'Accessibility and keyboard use',
                      role: 'Accessibility QA',
                      cases: [
                        {
                          id: 'VR-CURRENT-07',
                          criterionRefs: ['AC-CURRENT-07'],
                          title: 'Keyboard traversal',
                          description:
                            'Checks that focus remains visible on both active and inactive links.',
                          steps: [
                            'Render the current TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected: 'Focus remains visible on both active and inactive links.',
                        },
                        {
                          id: 'VR-CURRENT-08',
                          criterionRefs: ['AC-CURRENT-08'],
                          title: 'Current-state boundary',
                          description:
                            'Checks that the TabNavigation landmark is independently named and discoverable.',
                          steps: [
                            'Render the current TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The tabnavigation landmark is independently named and discoverable.',
                        },
                      ],
                    },
                    {
                      title: 'Application integration',
                      role: 'Technical QA',
                      cases: [
                        {
                          id: 'VR-CURRENT-09',
                          criterionRefs: ['AC-CURRENT-09'],
                          title: 'Application data contract',
                          description:
                            'Checks that the component applies exact-match current state without reading router context directly.',
                          steps: [
                            'Render the current TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The component applies exact-match current state without reading router context directly.',
                        },
                        {
                          id: 'VR-CURRENT-10',
                          criterionRefs: ['AC-CURRENT-10'],
                          title: 'Empty-state boundary',
                          description:
                            'Checks that the component produces no empty navigation landmark.',
                          steps: [
                            'Render the current TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected: 'The component produces no empty navigation landmark.',
                        },
                      ],
                    },
                  ],
                },
              }}
            >
              <TabNavigation
                items={[
                  { label: 'Overview', href: '/components/tab-navigation' },
                  { label: 'Guidance', href: '/components/header' },
                  { label: 'Resources', href: '/components/sidebar' },
                ]}
                activeHref="/components/header"
                aria-label="With active item tab navigation"
              />
            </ExampleVariation>

            <ExampleVariation
              title="With longer labels"
              summary="Meaningful labels can provide more context, but they require deliberate width and responsive review."
              tryIt="Tab through the longer labels, inspect focus at high zoom, and resize the page to review the constrained-width behavior."
              supplemental={{
                guidance: {
                  explanation:
                    'Use longer labels when the destination names need more context and the section remains small enough to scan.',
                  doItems: [
                    'Test the full labels at narrow widths, high zoom, and with translated content.',
                    'Keep the accessible landmark name short even when link labels are long.',
                    'Move the same link data into the application mobile presentation when the desktop row is hidden.',
                  ],
                  dontItems: [
                    'Do not abbreviate labels into ambiguous fragments just to preserve one line.',
                    'Do not claim every translated label will fit without testing.',
                    'Do not create page-level horizontal scrolling as an accidental side effect.',
                  ],
                },
                code: {
                  language: 'tsx',
                  props: tabNavigationProps,
                  attributes: tabNavigationAttributes,
                  source: `<TabNavigation
  aria-label="Detailed guide sections"
  items={[
    { label: 'Overview and key decisions', href: '/components/tab-navigation' },
    { label: 'Implementation guidance', href: '/components/header' },
    { label: 'Related resources and references', href: '/components/sidebar' },
  ]}
/>`,
                  html: `<nav aria-label="Detailed guide sections" data-slot="tab-navigation" data-size="contained" class="hidden md:block w-full py-3 mb-2">
  <div data-slot="container" data-size="2xl" class="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-screen-2xl">
    <div class="inline-flex w-fit items-center gap-1 rounded-lg bg-muted p-[3px]">
      <a href="/components/tab-navigation" data-active="false" class="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Overview and key decisions</a>
      <a href="/components/header" data-active="false" class="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Implementation guidance</a>
      <a href="/components/sidebar" data-active="false" class="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Related resources and references</a>
    </div>
  </div>
</nav>`,
                },
                requirements: {
                  userStory:
                    'As a person scanning a section, I want labels with enough context to distinguish nearby destinations while the layout remains usable at constrained widths.',
                  groups: [
                    {
                      id: 'BR-LONG',
                      title: 'Business requirements',
                      items: [
                        'People can identify this row as navigation for the current section.',
                        'People can move among nearby sibling destinations without confusing the row with primary navigation.',
                      ],
                    },
                    {
                      id: 'FR-LONG',
                      title: 'Functional requirements',
                      items: [
                        'TabNavigation renders the supplied destinations as real anchors in supplied order.',
                        'Activating a destination follows its configured href with normal browser link behavior.',
                      ],
                    },
                    {
                      id: 'NFR-LONG',
                      title: 'Non-functional requirements',
                      items: [
                        'The row remains compact and aligned with the surrounding page at supported desktop widths.',
                        'The component has an intentional narrow-screen behavior rather than creating a competing navigation model.',
                      ],
                    },
                    {
                      id: 'A11Y-LONG',
                      title: 'Accessibility requirements',
                      items: [
                        'The navigation exposes a distinct accessible name and preserves semantic links.',
                        'Current state and keyboard focus remain understandable without relying on color alone.',
                      ],
                    },
                    {
                      id: 'TR-LONG',
                      title: 'Technical requirements',
                      items: [
                        'The consuming application supplies NavLeaf data and optional activeHref.',
                        'The component can use LayoutProvider data without duplicating the application mobile navigation configuration.',
                      ],
                    },
                  ],
                  acceptanceCriteria: [
                    {
                      id: 'AC-LONG-01',
                      requirementRefs: ['BR-LONG-01'],
                      given: 'the row is rendered with meaningful longer labels',
                      when: 'the navigation appears',
                      then: 'the destinations remain understandable and are presented as real links',
                      and: ['the visible labels match the destination concepts'],
                    },
                    {
                      id: 'AC-LONG-02',
                      requirementRefs: ['BR-LONG-02'],
                      given: 'a person scans the destinations',
                      when: 'the labels are read',
                      then: 'each label provides enough context to distinguish the destination from its siblings',
                      and: ['the guide does not teach ambiguous abbreviations'],
                    },
                    {
                      id: 'AC-LONG-03',
                      requirementRefs: ['FR-LONG-01'],
                      given: 'a person activates a longer-label destination',
                      when: 'the link is selected',
                      then: 'the browser follows the configured href as normal link navigation',
                      and: ['the longer label does not change the destination behavior'],
                    },
                    {
                      id: 'AC-LONG-04',
                      requirementRefs: ['FR-LONG-02'],
                      given: 'the row is rendered at a wide desktop width',
                      when: 'the layout is measured',
                      then: 'the compact tray aligns with the page content and preserves readable spacing',
                      and: ['the links remain visually grouped as one navigation landmark'],
                    },
                    {
                      id: 'AC-LONG-05',
                      requirementRefs: ['NFR-LONG-01'],
                      given: 'the viewport or zoom level reduces available width',
                      when: 'the navigation no longer has comfortable horizontal space',
                      then: 'the example makes the constrained-width trade-off visible for review rather than silently claiming every label will fit',
                      and: ['the guidance directs teams to test real translated labels'],
                    },
                    {
                      id: 'AC-LONG-06',
                      requirementRefs: ['NFR-LONG-02'],
                      given: 'the viewport becomes narrow',
                      when: 'the responsive breakpoint is reached',
                      then: 'the desktop row is hidden and the same destinations can move into the application mobile presentation',
                      and: ['the destinations do not disappear from the user experience'],
                    },
                    {
                      id: 'AC-LONG-07',
                      requirementRefs: ['A11Y-LONG-01'],
                      given: 'keyboard focus moves through longer labels',
                      when: 'a person tabs across the links',
                      then: 'each link receives visible focus without relying on hover or color',
                      and: ['focus remains understandable when labels occupy more space'],
                    },
                    {
                      id: 'AC-LONG-08',
                      requirementRefs: ['A11Y-LONG-02'],
                      given: 'the page contains other navigation landmarks',
                      when: 'assistive technology lists landmarks',
                      then: 'the longer-label navigation has a distinct accessible name',
                      and: ['the landmark name remains concise'],
                    },
                    {
                      id: 'AC-LONG-09',
                      requirementRefs: ['TR-LONG-01'],
                      given: 'the consuming application supplies longer NavLeaf labels',
                      when: 'TabNavigation renders',
                      then: 'the component preserves the supplied labels and hrefs without truncating their text',
                      and: ['the component remains data-driven'],
                    },
                    {
                      id: 'AC-LONG-10',
                      requirementRefs: ['TR-LONG-02'],
                      given: 'the consuming application supplies no links',
                      when: 'TabNavigation renders',
                      then: 'the component produces no empty navigation landmark',
                      and: ['the page avoids reserving empty responsive space'],
                    },
                  ],
                },
                tabLayout: 'requirements',
                verification: {
                  scenarios: [
                    {
                      title: 'Structure and link behavior',
                      role: 'Product owner / BA',
                      cases: [
                        {
                          id: 'VR-LONG-01',
                          criterionRefs: ['AC-LONG-01'],
                          title: 'Landmark and order',
                          description:
                            'Checks that the destinations remain understandable and are presented as real links.',
                          steps: [
                            'Render the long TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The destinations remain understandable and are presented as real links.',
                        },
                        {
                          id: 'VR-LONG-02',
                          criterionRefs: ['AC-LONG-02'],
                          title: 'Section purpose',
                          description:
                            'Checks that each label provides enough context to distinguish the destination from its siblings.',
                          steps: [
                            'Render the long TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'Each label provides enough context to distinguish the destination from its siblings.',
                        },
                      ],
                    },
                    {
                      title: 'Destination and current state',
                      role: 'Functional QA',
                      cases: [
                        {
                          id: 'VR-LONG-03',
                          criterionRefs: ['AC-LONG-03'],
                          title: 'Destination outcome',
                          description:
                            'Checks that the browser follows the configured href as normal link navigation.',
                          steps: [
                            'Render the long TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The browser follows the configured href as normal link navigation.',
                        },
                        {
                          id: 'VR-LONG-04',
                          criterionRefs: ['AC-LONG-04'],
                          title: 'Desktop presentation',
                          description:
                            'Checks that the compact tray aligns with the page content and preserves readable spacing.',
                          steps: [
                            'Render the long TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The compact tray aligns with the page content and preserves readable spacing.',
                        },
                      ],
                    },
                    {
                      title: 'Responsive presentation',
                      role: 'Responsive QA',
                      cases: [
                        {
                          id: 'VR-LONG-05',
                          criterionRefs: ['AC-LONG-05'],
                          title: 'Responsive boundary',
                          description:
                            'Checks that the example makes the constrained-width trade-off visible for review rather than silently claiming every label will fit.',
                          steps: [
                            'Render the long TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The example makes the constrained-width trade-off visible for review rather than silently claiming every label will fit.',
                        },
                        {
                          id: 'VR-LONG-06',
                          criterionRefs: ['AC-LONG-06'],
                          title: 'Named landmark',
                          description:
                            'Checks that the desktop row is hidden and the same destinations can move into the application mobile presentation.',
                          steps: [
                            'Render the long TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The desktop row is hidden and the same destinations can move into the application mobile presentation.',
                        },
                      ],
                    },
                    {
                      title: 'Accessibility and keyboard use',
                      role: 'Accessibility QA',
                      cases: [
                        {
                          id: 'VR-LONG-07',
                          criterionRefs: ['AC-LONG-07'],
                          title: 'Keyboard traversal',
                          description:
                            'Checks that each link receives visible focus without relying on hover or color.',
                          steps: [
                            'Render the long TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'Each link receives visible focus without relying on hover or color.',
                        },
                        {
                          id: 'VR-LONG-08',
                          criterionRefs: ['AC-LONG-08'],
                          title: 'Current-state boundary',
                          description:
                            'Checks that the longer-label navigation has a distinct accessible name.',
                          steps: [
                            'Render the long TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected: 'The longer-label navigation has a distinct accessible name.',
                        },
                      ],
                    },
                    {
                      title: 'Application integration',
                      role: 'Technical QA',
                      cases: [
                        {
                          id: 'VR-LONG-09',
                          criterionRefs: ['AC-LONG-09'],
                          title: 'Application data contract',
                          description:
                            'Checks that the component preserves the supplied labels and hrefs without truncating their text.',
                          steps: [
                            'Render the long TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected:
                            'The component preserves the supplied labels and hrefs without truncating their text.',
                        },
                        {
                          id: 'VR-LONG-10',
                          criterionRefs: ['AC-LONG-10'],
                          title: 'Empty-state boundary',
                          description:
                            'Checks that the component produces no empty navigation landmark.',
                          steps: [
                            'Render the long TabNavigation example.',
                            'Inspect the relevant links, attributes, layout, and responsive state.',
                            'Use keyboard or browser interaction when the criterion requires it.',
                          ],
                          expected: 'The component produces no empty navigation landmark.',
                        },
                      ],
                    },
                  ],
                },
              }}
            >
              <TabNavigation
                items={[
                  { label: 'Overview and key decisions', href: '/components/tab-navigation' },
                  { label: 'Implementation guidance', href: '/components/header' },
                  { label: 'Related resources and references', href: '/components/sidebar' },
                ]}
                aria-label="With longer labels tab navigation"
              />
            </ExampleVariation>
          </div>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsTabNavigationPage }
