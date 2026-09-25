/**
 * Header navigation guide.
 *
 * Teaches product-wide destinations, actions, responsive navigation, and focus
 * behavior using the production Header composition.
 */

import { Blocks, LayoutTemplate } from 'lucide-react'
import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { ExampleVariation } from '@/components/layout/example-variation'
import { Header } from '@/components/layout/header'
import { userInterfaceSidebarLinks } from '@/config/component-navigation'

function ComponentsHeaderPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/header"
      tabActiveHref="/components/user-interface"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      sidebarAriaLabel="User Interface"
    >
      <div className="space-y-12">
        <section className="space-y-5" aria-labelledby="navigation-header-heading">
          <h1 id="navigation-header-heading" className="text-4xl font-semibold tracking-tight">
            Header navigation
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Use Header for global or top-level destinations that belong in the application shell. It
            provides the top-level landmark, logo, optional navigation, actions, and mobile menu
            trigger. The Header navigation does not have to be the application's primary navigation;
            a Sidebar can own that role instead.
          </p>
        </section>
        <section className="space-y-5" aria-labelledby="navigation-header-what-heading">
          <h2 id="navigation-header-what-heading" className="text-2xl font-semibold tracking-tight">
            What is it?
          </h2>
          <p className="leading-7 text-muted-foreground">
            Header is the application shell's top navigation layer. Pass ordinary link data through{' '}
            <code>nav</code>, set <code>navigationLabel</code> to describe that landmark, and let
            the application provide current-link state. The Header does not inspect the router or
            decide whether its links are global, primary, or section-level.
          </p>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border">
              <Header
                logo={{ href: '/', label: 'Application Delivery Kit' }}
                navigationLabel="Global navigation"
                nav={[
                  { label: 'Examples', href: '/examples/layouts' },
                  { label: 'Components', href: '/components/user-interface', current: true },
                ]}
              />
            </div>
          </div>

          <p className="text-sm leading-6 text-muted-foreground">
            Try it: tab through the header links and confirm focus follows the visual order, then
            resize to check that the navigation remains usable.
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
              <li>
                For global or top-level destinations that remain useful across the application.
              </li>
              <li>
                When the Header should provide global navigation while a Sidebar owns primary
                navigation.
              </li>
              <li>For one-level groups of related top-level links.</li>
              <li>
                For a logo, optional Header navigation, and a small set of application-level
                actions.
              </li>
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
              <li>
                For a long or deeply nested information architecture; use a sidebar or section
                navigation instead.
              </li>
              <li>For page-specific tools that only make sense inside one workflow.</li>
              <li>
                When adding another menu would hide important destinations or make the header
                difficult to scan.
              </li>
              <li>
                As a replacement for a page heading, breadcrumb, or contextual navigation that tells
                people where they are.
              </li>
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
            <li>
              Keep Header navigation limited to the destinations most people need across the
              product.
            </li>
            <li>
              Use short, specific labels that describe the destination; keep wording consistent with
              page titles and side navigation.
            </li>
            <li>
              Use one level of grouping at most, and keep critical destinations visible without
              opening a menu.
            </li>
            <li>
              Separate navigation links from actions such as account, search, or sign out through
              spacing and grouping.
            </li>
            <li>
              Keep the logo recognizable and give it a useful home destination, with a visible focus
              state.
            </li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="navigation-header-accessibility-heading">
          <h2
            id="navigation-header-accessibility-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Accessibility considerations
          </h2>

          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
            <li>
              Use a semantic <code>header</code> and a clearly labelled <code>nav</code> landmark so
              assistive technology users can identify the Header navigation layer. The label may be
              Global navigation or Primary navigation depending on the application shell.
            </li>
            <li>
              Keep the skip link as the first keyboard stop that moves focus to the page’s{' '}
              <code>main</code> content.
            </li>
            <li>
              Give every link and menu trigger a clear accessible name; do not rely on an icon,
              color, or position alone.
            </li>
            <li>
              Expose expanded/collapsed state on menu triggers and ensure the popup has a meaningful
              relationship to its trigger.
            </li>
            <li>
              Verify keyboard order, visible focus, Escape dismissal, focus restoration, and
              screen-reader announcements for desktop and mobile menus.
            </li>
            <li>
              Do not use <code>aria-current</code> as decoration: apply it only to the link
              representing the current location.
            </li>
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
            On wider screens, the Header navigation sits beside the logo and actions. On narrow
            screens, that navigation moves into the mobile menu. The consuming shell may also
            provide labelled mobile sections for Sidebar, section, or page navigation.
          </p>
          <p className="leading-7 text-muted-foreground">
            The mobile menu is a replacement for the desktop link row, not a second copy of it.
            Additional labelled sections preserve navigation hierarchy when a Sidebar or section
            navigation also needs a mobile home. Check that opening it exposes the same destinations
            and that focus can enter, move through, and leave the menu predictably. Preserve a
            comfortable touch target, prevent the page behind the open menu from becoming confusing
            or accidentally active, and return focus to the trigger when the menu closes.
          </p>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Test at narrow widths and with zoom: the logo, trigger, and essential action must
              remain usable without horizontal scrolling.
            </li>
            <li>
              Confirm the desktop and mobile versions expose the same destinations in a logical
              reading order.
            </li>
            <li>
              Do not make people depend on hover, precise pointer movement, or a hidden off-screen
              menu.
            </li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="navigation-header-examples-heading">
          <h2
            id="navigation-header-examples-heading"
            className="text-2xl font-semibold tracking-tight"
          >
            Examples and variations
          </h2>
          <p className="text-muted-foreground">
            Compare a compact system header, grouped navigation, and icon-supported navigation. Each
            example uses the same production Header component and full-width variation structure as
            the Forms pages.
          </p>
          <p className="text-sm text-muted-foreground">
            Each example includes a focused Try it instruction plus Guidance, Code, Story &amp;
            criteria, and Verification tabs for the roles involved in designing, building, and
            reviewing the component.
          </p>
          <div className="space-y-8 [&_[data-slot=header]]:!border-b-0 [&_*:has(>[data-slot=header])]:!p-0 [&_*:has(>[data-slot=header])]:overflow-hidden">
            <ExampleVariation
              title="Basic"
              summary="A simple system header keeps the application name on the left and ordinary navigation links on the right."
              tryIt="Tab through the Header links, identify the current destination, and resize the page to see when the navigation changes presentation."
              supplemental={{
                guidance: {
                  explanation:
                    'Use the basic Header when global or section destinations can remain visible as individual links. The reusable component provides the shared layout, responsive behavior, focus treatment, and navigation semantics.',
                  doItems: [
                    'Keep the application name or product identity on the left and the Header navigation together on the right.',
                    'Use ordinary links when each destination should be immediately visible and directly reachable.',
                    'Let the reusable Header component provide consistent spacing, focus treatment, and responsive behavior.',
                  ],
                  dontItems: [
                    'Do not hide an important Header destination in a dropdown when it can remain visible in the header.',
                    'Do not recreate Header spacing or interaction styles in each page-level example.',
                    'Do not use the global Header for actions that apply only to the current page.',
                  ],
                },
                code: {
                  language: 'tsx',
                  source: `<Header
  logo={{ href: '/', label: 'Application Delivery Kit' }}
  navigationLabel="Global navigation"
  nav={[
    { label: 'Examples', href: '/examples/layouts' },
    { label: 'Components', href: '/components/user-interface' },
  ]}
/>`,
                },
                requirements: {
                  userStory:
                    'As an application user, I want to find global or section destinations in a consistent Header so that I can move through the application without searching page content.',
                  acceptanceCriteria: [
                    {
                      title: 'Landmark',
                      text: 'Given the Header is rendered, then its navigation has an accurate accessible label.',
                    },
                    {
                      title: 'Current state',
                      text: 'Given one link represents the current location, then it exposes aria-current="page" and a visible current-state treatment.',
                    },
                    {
                      title: 'Responsive behavior',
                      text: 'Given the viewport becomes narrow, then the same destinations remain available through the mobile navigation.',
                    },
                  ],
                },
                verification: {
                  sections: [
                    {
                      title: 'Functional',
                      items: [
                        'Render the Header with direct navigation links.',
                        'Confirm the supplied logo and every navigation destination are present.',
                      ],
                    },
                    {
                      title: 'Keyboard',
                      items: [
                        'Tab through the logo and links in visual order.',
                        'Confirm focus remains visible and the current link is understandable without relying on color alone.',
                      ],
                    },
                    {
                      title: 'Responsive and accessibility',
                      items: [
                        'Check the mobile trigger below the configured breakpoint.',
                        'Confirm the navigation landmark has the supplied accessible label and no duplicate IDs are introduced.',
                      ],
                    },
                  ],
                },
              }}
            >
              <Header
                logo={{ href: '/', label: 'Application Delivery Kit' }}
                nav={[
                  { label: 'Examples', href: '/examples/layouts' },
                  { label: 'Components', href: '/components/user-interface' },
                ]}
              />
            </ExampleVariation>

            <ExampleVariation
              title="Global header with mobile sections"
              summary="A Header can provide global navigation while a Sidebar or section navigation remains the primary navigation for the application area."
              tryIt="Use the keyboard to open the mobile navigation, then inspect the labelled Global navigation, Primary navigation, and On this page sections."
              supplemental={{
                guidance: {
                  explanation:
                    'Use navigationLabel to name the Header landmark accurately, then pass additional labelled mobileSections when navigation that lives in a Sidebar or another desktop region needs a mobile home. The Header does not need to know where those sections came from.',
                  doItems: [
                    'Label the Header navigation according to its role, such as Global navigation.',
                    'Keep application-area primary navigation in the Sidebar when that is the clearest desktop structure.',
                    'Provide generic labelled mobile sections so the mobile menu preserves the navigation hierarchy.',
                  ],
                  dontItems: [
                    'Do not label every navigation landmark Primary navigation when the regions have different roles.',
                    'Do not make the reusable Header read Sidebar or LayoutProvider context directly.',
                    'Do not flatten global, primary, and page navigation into one unlabeled mobile list.',
                  ],
                },
                code: {
                  language: 'tsx',
                  source: `<Header
  logo={{ href: '/', label: 'Application Delivery Kit' }}
  navigationLabel="Global navigation"
  nav={[
    { label: 'Examples', href: '/examples/layouts' },
    { label: 'Help', href: '/help' },
  ]}
  mobileSections={[
    {
      label: 'Primary navigation',
      items: [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Projects', href: '/projects' },
      ],
    },
    {
      label: 'On this page',
      items: [{ label: 'Overview', href: '#overview' }],
    },
  ]}
/>`,
                },
                requirements: {
                  userStory:
                    'As a user of an application with Sidebar navigation, I want the mobile menu to preserve the difference between global, primary, and page navigation so that I can understand where each link takes me.',
                  acceptanceCriteria: [
                    {
                      title: 'Roles',
                      text: 'Given multiple navigation regions exist, then each region has a label that describes its role.',
                    },
                    {
                      title: 'Mobile sections',
                      text: 'Given the viewport is below the mobile breakpoint, then global, primary, and page navigation remain available as labelled sections.',
                    },
                    {
                      title: 'Context boundary',
                      text: 'Given the Header is reused elsewhere, then it accepts generic sections without reading Sidebar or LayoutProvider context.',
                    },
                  ],
                },
                verification: {
                  sections: [
                    {
                      title: 'Functional',
                      items: [
                        'Open the mobile navigation and confirm all three labelled sections are present.',
                        'Confirm each section contains only the links supplied for that section.',
                      ],
                    },
                    {
                      title: 'Keyboard',
                      items: [
                        'Open the menu with the keyboard.',
                        'Use Escape to close it and confirm focus returns to the menu trigger.',
                      ],
                    },
                    {
                      title: 'Accessibility',
                      items: [
                        'Inspect the navigation landmarks and confirm their names distinguish Global navigation, Primary navigation, and On this page.',
                        'Check that section relationships use unique IDs.',
                      ],
                    },
                  ],
                },
              }}
            >
              <Header
                logo={{ href: '/', label: 'Application Delivery Kit' }}
                navigationLabel="Global navigation"
                nav={[
                  { label: 'Examples', href: '/examples/layouts' },
                  { label: 'Help', href: '/help' },
                ]}
                mobileSections={[
                  {
                    label: 'Primary navigation',
                    items: [
                      { label: 'Dashboard', href: '/dashboard' },
                      { label: 'Projects', href: '/projects' },
                    ],
                  },
                  {
                    label: 'On this page',
                    items: [{ label: 'Overview', href: '#overview' }],
                  },
                ]}
              />
            </ExampleVariation>

            <ExampleVariation
              title="With dropdown"
              summary="A dropdown groups related destinations under a clear parent label while keeping the Header compact."
              tryIt="Open the Components menu with pointer and keyboard input, move through its items, then dismiss it with Escape."
              supplemental={{
                guidance: {
                  explanation:
                    'A dropdown is appropriate when a parent category has several closely related destinations and showing every link inline would make the Header difficult to scan. The parent label should communicate the category, and the open menu must be fully keyboard-operable.',
                  doItems: [
                    'Use a meaningful category label, such as Components, that describes the destinations inside.',
                    'Keep the menu short and group only destinations that share a clear relationship.',
                    'Use specific link text inside the menu and preserve visible focus, Escape dismissal, and focus restoration.',
                  ],
                  dontItems: [
                    'Do not hide a single high-priority destination inside a dropdown.',
                    'Do not use a dropdown as a substitute for unclear information architecture or a long sitemap.',
                    'Do not use ambiguous labels such as More when the available destinations can be named directly.',
                  ],
                },
                code: {
                  language: 'tsx',
                  source: `<Header
  logo={{ href: '/', label: 'Application Delivery Kit' }}
  nav={[
    { label: 'Examples', href: '/examples/layouts' },
    {
      label: 'Components',
      children: [
        { label: 'Forms', href: '/components/forms' },
        { label: 'User interface', href: '/components/user-interface' },
        { label: 'Interaction', href: '/components/interaction' },
      ],
    },
  ]}
/>`,
                },
                requirements: {
                  userStory:
                    'As an application user, I want related destinations grouped under a meaningful menu label so that I can find a category of pages without scanning an overcrowded Header.',
                  acceptanceCriteria: [
                    {
                      title: 'Trigger',
                      text: 'Given the grouped navigation is rendered, then the parent is an accessible menu trigger with an accurate name and expanded state.',
                    },
                    {
                      title: 'Menu items',
                      text: 'Given the menu is open, then each child destination is keyboard-operable and has specific visible link text.',
                    },
                    {
                      title: 'Dismissal',
                      text: 'Given the menu is open, when the user presses Escape or dismisses it, then the menu closes and focus returns appropriately.',
                    },
                  ],
                },
                verification: {
                  sections: [
                    {
                      title: 'Functional',
                      items: [
                        'Open the Components menu and confirm all child links are present.',
                        'Activate a child link and confirm it navigates to the expected destination.',
                      ],
                    },
                    {
                      title: 'Keyboard',
                      items: [
                        'Reach and open the menu trigger with the keyboard.',
                        'Move through menu items, press Escape, and confirm focus restoration.',
                      ],
                    },
                    {
                      title: 'Accessibility',
                      items: [
                        'Confirm the trigger exposes expanded/collapsed state.',
                        'Confirm the menu and its items have meaningful accessible names.',
                      ],
                    },
                  ],
                },
              }}
            >
              <Header
                logo={{ href: '/', label: 'Application Delivery Kit' }}
                nav={[
                  { label: 'Examples', href: '/examples/layouts' },
                  {
                    label: 'Components',
                    children: [
                      { label: 'Forms', href: '/components/forms' },
                      { label: 'User interface', href: '/components/user-interface' },
                      { label: 'Interaction', href: '/components/interaction' },
                    ],
                  },
                ]}
              />
            </ExampleVariation>

            <ExampleVariation
              title="With icons"
              summary="Icons can reinforce familiar navigation labels while visible text remains the primary cue."
              tryIt="Move through the icon-supported links and dropdown trigger with the keyboard, confirming that the visible labels still provide the names."
              supplemental={{
                guidance: {
                  explanation:
                    'Use icons when they help people recognize a familiar destination or distinguish related navigation choices. Keep the visible label because icons alone are ambiguous, and use the same icon consistently wherever the destination appears.',
                  doItems: [
                    'Pair each icon with a concise visible label and keep the icon secondary to the text.',
                    'Use familiar, consistent icons such as layout or component symbols when they add recognition value.',
                    'Keep icons decorative to assistive technology when the adjacent label already names the destination.',
                  ],
                  dontItems: [
                    'Do not replace the navigation label with an icon alone.',
                    'Do not mix unrelated icon styles or use icons that require users to guess their meaning.',
                    'Do not add icons only for decoration when they make the navigation row harder to scan.',
                  ],
                },
                code: {
                  language: 'tsx',
                  source: `<Header
  logo={{ href: '/', label: 'Application Delivery Kit' }}
  nav={[
    { label: 'Examples', href: '/examples/layouts', icon: LayoutTemplate },
    {
      label: 'Components',
      icon: Blocks,
      children: [
        { label: 'Forms', href: '/components/forms' },
        { label: 'User interface', href: '/components/user-interface' },
        { label: 'Interaction', href: '/components/interaction' },
      ],
    },
  ]}
/>`,
                },
                requirements: {
                  userStory:
                    'As a user, I want familiar icons to reinforce navigation labels so that I can recognize destinations quickly without having to interpret icons by themselves.',
                  acceptanceCriteria: [
                    {
                      title: 'Names',
                      text: 'Given an icon appears beside a navigation label, then the visible label remains the accessible name.',
                    },
                    {
                      title: 'Decoration',
                      text: 'Given the text already names the destination, then the icon is hidden from assistive technology.',
                    },
                    {
                      title: 'Consistency',
                      text: 'Given the same destination appears in multiple contexts, then its icon treatment is consistent. ',
                    },
                  ],
                },
                verification: {
                  sections: [
                    {
                      title: 'Functional',
                      items: [
                        'Confirm icon-supported links and grouped navigation behave the same as their text-only equivalents.',
                        'Confirm icons do not change the destination or link target.',
                      ],
                    },
                    {
                      title: 'Keyboard',
                      items: [
                        'Navigate through every icon-supported item with the keyboard.',
                        'Confirm focus remains visible around the complete interactive target.',
                      ],
                    },
                    {
                      title: 'Accessibility',
                      items: [
                        'Inspect the accessibility tree and confirm decorative icons are hidden.',
                        'Confirm each link and trigger has a clear accessible name from its visible text.',
                      ],
                    },
                  ],
                },
              }}
            >
              <Header
                logo={{ href: '/', label: 'Application Delivery Kit' }}
                nav={[
                  { label: 'Examples', href: '/examples/layouts', icon: LayoutTemplate },
                  {
                    label: 'Components',
                    icon: Blocks,
                    children: [
                      { label: 'Forms', href: '/components/forms' },
                      { label: 'User interface', href: '/components/user-interface' },
                      { label: 'Interaction', href: '/components/interaction' },
                    ],
                  },
                ]}
              />
            </ExampleVariation>
          </div>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsHeaderPage }
