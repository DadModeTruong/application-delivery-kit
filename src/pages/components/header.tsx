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

const headerPropExplanations = {
  logo: {
    name: 'logo',
    type: '{ href, label } | ReactNode',
    example: "logo={{ href: '/', label: 'Application Delivery Kit' }}",
    description:
      'The brand or application identity. Use the object form for a linked text logo, or provide custom content when the application needs an image or router link.',
  },
  navigationLabel: {
    name: 'navigationLabel',
    type: 'string',
    example: 'navigationLabel="Global navigation"',
    description:
      'The accessible name for the Header navigation landmark. Choose a label that describes this navigation region, especially when a Sidebar or page navigation landmark also exists.',
  },
  nav: {
    name: 'nav',
    type: 'NavigationItem[]',
    example: 'nav={[{ label, href, current }]}',
    description:
      'The links or one-level dropdowns shown in the Header. The application supplies route data and marks the current destination with current: true; the Header does not inspect the router.',
  },
}

const basicHeaderProps = [
  headerPropExplanations.logo,
  headerPropExplanations.navigationLabel,
  headerPropExplanations.nav,
]

const mobileHeaderProps = basicHeaderProps

const dropdownHeaderProps = [headerPropExplanations.logo, headerPropExplanations.nav]

const iconHeaderProps = [headerPropExplanations.logo, headerPropExplanations.nav]

const logoHeaderProps = [headerPropExplanations.logo, headerPropExplanations.nav]

const activeHeaderProps = [
  headerPropExplanations.logo,
  headerPropExplanations.navigationLabel,
  headerPropExplanations.nav,
]

const renderedHeaderAttributeExplanations = [
  {
    name: 'data-slot',
    type: 'component hook',
    example: 'data-slot="header"',
    description:
      'A stable, non-semantic hook identifying a component part such as header, container, button, or sheet. It is useful for targeted styling and inspection; it does not replace semantic HTML or ARIA.',
  },
  {
    name: 'data-scrolled',
    type: 'state attribute',
    example: 'data-scrolled="true" | "false"',
    description:
      'Reflects whether the page has been scrolled past the Header threshold. CSS can use it to add a background, border, or shadow while the Header remains sticky.',
  },
  {
    name: 'data-size',
    type: 'variant attribute',
    example: 'data-size="contained"',
    description:
      'Records the selected component variant, such as contained or full on the Header and 2xl on its inner container. It helps styles target a deliberate variant instead of relying on DOM position.',
  },
  {
    name: 'data-current',
    type: 'state attribute',
    example: 'data-current="true"',
    description:
      'Marks the link the application identified as current. The related CSS gives it a visual state; aria-current="page" communicates the same state to assistive technology.',
  },
  {
    name: 'aria-current',
    type: 'accessibility attribute',
    example: 'aria-current="page"',
    description:
      'Communicates that a navigation link represents the current page. Keep this even if the visual current state is already obvious.',
  },
  {
    name: 'aria-label / aria-labelledby',
    type: 'accessible-name attributes',
    example: 'aria-label="Global navigation"',
    description:
      'Names navigation landmarks. Desktop navigation commonly uses aria-label; grouped mobile navigation can use aria-labelledby to point to its visible section heading.',
  },
  {
    name: 'aria-expanded / aria-haspopup',
    type: 'menu state attributes',
    example: 'aria-expanded="false" aria-haspopup="menu"',
    description:
      'Describe a dropdown trigger: whether its menu is open and what kind of popup it controls. The component updates aria-expanded as the menu opens and closes.',
  },
  {
    name: 'class',
    type: 'utility class list',
    example: 'sticky ... md:h-16 ... focus-visible:ring-2',
    description:
      'Provides layout, spacing, responsive visibility, typography, hover, and focus styling. Preserve the semantic element and focus classes when adapting the markup; change visual classes only when intentionally changing the design.',
  },
]

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
            decide whether its links are global, primary, or section-level. The preview marks
            Components as current to show how an application supplies that state.
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

          <div className="rounded-md bg-muted/50 p-4 text-sm leading-6 text-muted-foreground">
            <strong className="mr-2 text-foreground">Try it:</strong>
            Tab through the brand and navigation links, activate a destination, then resize to
            check that the same navigation remains usable in the mobile presentation.
          </div>
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
            screens, that navigation moves into the mobile menu. Individual top-level links remain
            individual links, while dropdown parents become labelled groups containing their child
            links.
          </p>
          <p className="leading-7 text-muted-foreground">
            The mobile menu is a replacement for the desktop link row, not a second copy of it. It
            preserves the same navigation hierarchy: leaf items stay direct links, and dropdown
            parents become labelled groups containing only their child links. Check that opening it
            exposes the same destinations and that focus can enter, move through, and leave the menu
            predictably. Preserve a comfortable touch target, prevent the page behind the open menu
            from becoming confusing or accidentally active, and return focus to the trigger when the
            menu closes.
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
            Compare a basic Header, custom brand content, explicit current-page state, grouped
            navigation, and icon-supported navigation. Each variation uses the same production Header
            component while isolating one implementation or behavior decision.
          </p>
          <p className="leading-7 text-muted-foreground">
            Each variation includes a focused Try it instruction followed by Guidance, Code, Criteria,
            and Verification tabs. Use the live preview to experience the behavior, Code to adapt the
            implementation, Criteria to agree what must be true, and Verification to prove it.
          </p>
          <div className="space-y-8 [&_[data-slot=header]]:!border-b-0 [&_*:has(>[data-slot=header])]:!p-0 [&_*:has(>[data-slot=header])]:overflow-hidden">
            <ExampleVariation
              title="Basic"
              summary="A simple system header keeps the application name on the left and ordinary navigation links on the right."
              tryIt="Tab through the brand and navigation links, activate a destination, and resize the page to see when the navigation changes presentation."
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
                  props: basicHeaderProps,
                  attributes: renderedHeaderAttributeExplanations,
                  source: `<Header
  logo={{ href: '/', label: 'Application Delivery Kit' }}
  navigationLabel="Global navigation"
  nav={[
    { label: 'Examples', href: '/examples/layouts' },
    { label: 'Components', href: '/components/user-interface' },
  ]}
/>`,
                  html: `<header data-slot="header" data-scrolled="false" data-size="contained"
  class="sticky top-0 z-40 w-full h-14 md:h-16 bg-background/0 transition-[background-color,border-color,backdrop-filter] duration-150">
  <div data-slot="container" data-size="2xl"
    class="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex h-full items-center justify-between gap-4">
    <a href="/"
      class="rounded-sm font-heading text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      Application Delivery Kit
    </a>
    <nav aria-label="Global navigation" class="flex items-center gap-1">
      <a href="/examples/layouts"
        class="inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        Examples
      </a>
      <a href="/components/user-interface" aria-current="page" data-current="true"
        class="inline-flex ... data-[current=true]:bg-muted data-[current=true]:text-foreground">
        Components
      </a>
    </nav>
  </div>
</header>`,
                },
                requirements: {
                  userStory: 'As an application user, I want a consistent Header with clearly named destinations so that I can identify the application, choose a destination, and continue using the application at different screen sizes.',
                  acceptanceCriteria: [
                    {
                      given: 'the Header is rendered',
                      when: 'a user looks at the application shell',
                      then: 'the application name is visible on the left side of the Header as a link to /',
                      and: [
                        'the accessible name of the link is Application Delivery Kit',
                        'the brand link is one complete interactive target',
                      ],
                    },
                    {
                      given: 'the Header contains the nav items Examples and Components',
                      when: 'the Header is rendered at a desktop width',
                      then: 'the navigation appears as one horizontal navigation landmark on the right side of the Header',
                      and: [
                        'Examples is a link to /examples/layouts',
                        'Components is a link to /components/user-interface',
                        'both links have visible text that identifies their destinations',
                      ],
                    },
                    {
                      given: 'the navigation links are visible',
                      when: 'a user selects Examples or Components',
                      then: 'the application navigates to the href supplied for the selected link',
                      and: [
                        'the selected destination loads',
                        'the link remains a normal navigation link rather than behaving like an action button',
                      ],
                    },
                    {
                      given: 'the Header contains navigation',
                      when: 'a screen reader or accessibility inspector reads the shell',
                      then: 'the navigation is exposed as a landmark named Global navigation',
                      and: [
                        'the brand link is separate from the navigation landmark',
                        'the Examples and Components links are discoverable within that landmark',
                      ],
                    },
                    {
                      given: 'the page is at a desktop width',
                      when: 'the Header is displayed',
                      then: 'the Header remains at the top of the application shell while the brand and links are aligned in one row',
                      and: [
                        'the brand stays on the left',
                        'the links stay on the right',
                        'the links have consistent spacing and readable text',
                      ],
                    },
                    {
                      given: 'the page is scrolled below the top of the document',
                      when: 'the Header remains visible',
                      then: 'the Header stays available as a sticky shell element and exposes its scrolled presentation state',
                      and: [
                        'the scrolled styling does not hide the brand or navigation',
                        'the state change does not change the destination or accessible name of any link',
                      ],
                    },
                    {
                      given: 'the viewport crosses the mobile breakpoint',
                      when: 'the Header changes to its mobile presentation',
                      then: 'the desktop navigation is replaced by the mobile navigation trigger',
                      and: [
                        'the trigger has a clear accessible name',
                        'the same Examples and Components destinations remain available after opening the mobile navigation',
                      ],
                    },
                    {
                      given: 'the mobile navigation is open',
                      when: 'a user selects Examples or Components',
                      then: 'the application navigates to the selected destination',
                      and: [
                        'the selected item remains a link',
                        'the mobile navigation does not change the destination represented by the href',
                      ],
                    },
                    {
                      given: 'a keyboard user moves through the Header',
                      when: 'focus reaches the brand, links, or mobile trigger',
                      then: 'focus follows the visual order and remains visible',
                      and: [
                        'the focus indicator is distinguishable from the surrounding Header',
                        'keyboard users can reach every available interactive target',
                      ],
                    },
                    {
                      given: 'the Header is rendered at the narrowest supported width',
                      when: 'the layout reflows',
                      then: 'the brand, mobile trigger, navigation labels, and interactive targets remain usable without clipping, overlap, or horizontal scrolling',
                      and: [
                        'the application name remains understandable',
                        'the mobile trigger remains reachable',
                      ],
                    },
                  ],
                },
                verification: {
                  scenarios: [
                    {
                      title: 'Brand link',
                      cases: [
                        {
                          title: 'Identify and activate the application brand',
                          steps: [
                            'Render the Basic Header.',
                            'Inspect the brand link in the accessibility tree.',
                            'Inspect its href.',
                            'Activate the brand link.',
                          ],
                          expected: 'The link is named Application Delivery Kit, points to /, and navigates to the application home when activated.',
                        },
                        {
                          title: 'Check the brand target and focus',
                          steps: [
                            'Use Tab until focus reaches the brand link.',
                            'Observe the complete brand target while focused.',
                            'Activate it with Enter.',
                          ],
                          expected: 'The complete brand target has a visible focus indicator, Enter activates the link, and the link does not require a pointer.',
                        },
                      ],
                    },
                    {
                      title: 'Navigation links',
                      cases: [
                        {
                          title: 'Inspect link names and destinations',
                          steps: [
                            'Inspect the Global navigation landmark.',
                            'Inspect Examples and Components.',
                            'Record each visible label and href.',
                          ],
                          expected: 'One navigation landmark is named Global navigation; Examples points to /examples/layouts and Components points to /components/user-interface.',
                        },
                        {
                          title: 'Select each destination',
                          steps: [
                            'Activate Examples.',
                            'Confirm the Examples destination loads.',
                            'Return to the Header.',
                            'Activate Components.',
                            'Confirm the Components destination loads.',
                          ],
                          expected: 'Each link navigates to its own configured destination and neither link behaves like a non-navigation action.',
                        },
                      ],
                    },
                    {
                      title: 'Sticky and responsive presentation',
                      cases: [
                        {
                          title: 'Check the scrolled Header',
                          steps: [
                            'Render the Header at the top of the page.',
                            'Scroll down.',
                            'Inspect the Header while it remains visible.',
                          ],
                          expected: 'The Header remains available at the top of the viewport, its scrolled presentation is visible, and its brand and links remain readable and usable.',
                        },
                        {
                          title: 'Compare desktop and mobile',
                          steps: [
                            'Render at a desktop width and record the visible links.',
                            'Resize below the mobile breakpoint.',
                            'Open the mobile navigation.',
                          ],
                          expected: 'The desktop links are replaced by the mobile trigger, and opening the mobile navigation reveals the same Examples and Components destinations.',
                        },
                        {
                          title: 'Check narrow-width boundaries',
                          steps: [
                            'Resize to the narrowest supported width.',
                            'Inspect the brand, trigger, and mobile links.',
                            'Attempt horizontal scrolling.',
                          ],
                          expected: 'No brand, label, trigger, or link is clipped; the Header does not create unintended horizontal scrolling.',
                        },
                      ],
                    },
                    {
                      title: 'Keyboard and accessibility',
                      cases: [
                        {
                          title: 'Traverse the Header',
                          steps: [
                            'Place focus before the Header.',
                            'Press Tab repeatedly through the Header.',
                            'Record the order of focused elements.',
                          ],
                          expected: 'Focus reaches the brand and each available Header control in a logical visual order, and every focused target has a visible indicator.',
                        },
                        {
                          title: 'Operate the mobile trigger',
                          steps: [
                            'Resize below the mobile breakpoint.',
                            'Focus the mobile trigger.',
                            'Press Enter or Space.',
                            'Use the keyboard to reach a mobile link.',
                          ],
                          expected: 'The trigger opens the mobile navigation, the mobile links are reachable, and no destination requires pointer input.',
                        },
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
              title="With logo"
              summary="A Header can accept custom brand content when a product needs a logo alongside the Application Delivery Kit name, an image, or a router-aware logo instead of the simple text-logo object."
              tryIt="Inspect the logo at narrow and wide widths, then tab to it and confirm the accessible application name is still announced."
              supplemental={{
                guidance: {
                  explanation:
                    'Use the logo slot when the consuming application needs a visual brand mark or a custom link implementation. The ADK mark in this demo is only sample content; replace it with the product logo while preserving a meaningful accessible name and visible focus treatment.',
                  doItems: [
                    'Keep the brand link target and accessible name owned by the consuming application.',
                    'Size the logo so it remains legible without crowding the Header, and preserve clear space around the mark and product name.',
                    'Make the logo responsive with an appropriate maximum size, and prevent distortion or overflow as the Header narrows.',
                    'Preserve a clear focus ring on the custom logo link.',
                    'Give the logo link one clear accessible name and mark decorative logo artwork aria-hidden when the visible product name already names it.',
                  ],
                  dontItems: [
                    'Do not force every logo into a square shape when the brand mark or wordmark needs another proportion.',
                    'Do not let a logo become so large, small, distorted, or tightly cropped that it competes with or disappears from the Header.',
                    'Do not remove the focus treatment when replacing the simple logo object with custom content.',
                    'Do not use an unlabeled image, duplicate the product name for assistive technology, or rely on the artwork alone to name the link.',
                  ],
                },
                code: {
                  language: 'tsx',
                  props: logoHeaderProps,
                  attributes: renderedHeaderAttributeExplanations,
                  source: `<Header
  logo={(
    <a
      href="/"
      aria-label="Application Delivery Kit"
      className="inline-flex items-center gap-2 rounded-sm font-heading text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span aria-hidden="true" className="grid size-10 place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
        ADK
      </span>
      <span>Application Delivery Kit</span>
    </a>
  )}
  nav={[
    { label: 'Examples', href: '/examples/layouts' },
    { label: 'Components', href: '/components/user-interface' },
  ]}
/>`,
                  html: `<header data-slot="header" data-size="contained"
  class="sticky top-0 z-40 w-full h-14 md:h-16 ...">
  <div data-slot="container" data-size="2xl"
    class="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex h-full items-center justify-between gap-4">
    <a href="/" aria-label="Application Delivery Kit"
      class="inline-flex items-center gap-2 rounded-sm font-heading text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <span aria-hidden="true"
        class="grid size-10 place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
        ADK
      </span>
      <span>Application Delivery Kit</span>
    </a>
    <nav aria-label="Global navigation" class="hidden items-center gap-1 md:flex">
      <a href="/examples/layouts" class="inline-flex ...">Examples</a>
      <a href="/components/user-interface" class="inline-flex ...">Components</a>
    </nav>
  </div>
</header>`,
                },
                requirements: {
                  userStory: 'As an application team, I want to replace the default text logo with custom brand content so that the Header can represent the product identity without losing clear naming, responsive behavior, or keyboard access.',
                  acceptanceCriteria: [
                    {
                      given: 'the Header receives the custom logo slot',
                      when: 'the example renders',
                      then: 'the ADK mark and visible Application Delivery Kit text appear together in the brand position',
                      and: [
                        'the brand content is one link to /',
                        'the mark does not push the navigation outside the Header',
                      ],
                    },
                    {
                      given: 'the custom brand link is visible',
                      when: 'a user selects it',
                      then: 'the application navigates to the brand destination /',
                      and: [
                        'the brand remains a navigation link',
                        'the custom artwork does not alter the destination',
                      ],
                    },
                    {
                      given: 'the custom logo contains the ADK mark and visible product text',
                      when: 'assistive technology evaluates the link',
                      then: 'the link has one clear accessible name, Application Delivery Kit',
                      and: [
                        'the ADK mark is decorative and is not announced separately',
                        'the visible product name is not redundantly announced',
                      ],
                    },
                    {
                      given: 'the custom brand link receives focus',
                      when: 'a keyboard user focuses it',
                      then: 'a visible focus indicator surrounds the complete brand link',
                      and: [
                        'the indicator is visible around the mark and text',
                        'the indicator remains distinguishable from the logo colors',
                      ],
                    },
                    {
                      given: 'the viewport is wide',
                      when: 'a user inspects the Header',
                      then: 'the mark and product name are legible, aligned, and separated by intentional spacing',
                      and: [
                        'the logo does not crowd or overlap the navigation',
                        'the mark retains its intended shape',
                      ],
                    },
                    {
                      given: 'the viewport becomes narrow',
                      when: 'the Header responds to the available width',
                      then: 'the brand remains legible without distortion, cropping, or horizontal overflow',
                      and: [
                        'the mark does not become unusably small',
                        'the product name is not clipped or hidden by the Header boundary',
                      ],
                    },
                    {
                      given: 'the custom logo Header contains navigation',
                      when: 'a user or assistive technology inspects the shell',
                      then: 'the Global navigation landmark and its destinations remain available and correctly named',
                      and: [
                        'customizing the logo does not remove or rename the navigation',
                      ],
                    },
                    {
                      given: 'the viewport crosses the mobile breakpoint',
                      when: 'the Header switches presentation',
                      then: 'the custom brand remains available and the navigation moves to the mobile trigger and drawer',
                      and: [
                        'the mobile trigger remains reachable',
                        'the custom brand does not overlap the trigger',
                      ],
                    },
                    {
                      given: 'the custom brand is used at supported widths',
                      when: 'the layout reflows',
                      then: 'the complete brand target remains usable without clipping, overlap, or loss of its accessible name',
                      and: [
                        'the logo does not rely on color alone to communicate identity',
                        'the brand link remains keyboard-operable',
                      ],
                    },
                  ],
                },
                verification: {
                  scenarios: [
                    {
                      title: 'Custom brand structure and activation',
                      cases: [
                        {
                          title: 'Inspect the custom brand link',
                          steps: [
                            'Render the Header with the ADK mark and Application Delivery Kit text.',
                            'Inspect the visible brand target.',
                            'Inspect its href and accessible name.',
                          ],
                          expected: 'The mark and text are inside one link, the link points to /, and its accessible name is Application Delivery Kit.',
                        },
                        {
                          title: 'Activate the custom brand',
                          steps: [
                            'Focus the custom brand link.',
                            'Press Enter.',
                            'Observe the resulting destination.',
                          ],
                          expected: 'The complete brand link has visible focus, Enter activates it, and the application navigates to /.',
                        },
                        {
                          title: 'Check decorative artwork',
                          steps: [
                            'Inspect the ADK mark in the accessibility tree.',
                            'Inspect the visible Application Delivery Kit text.',
                          ],
                          expected: 'The mark is hidden as decorative artwork, and the product name supplies the meaningful accessible name without duplication.',
                        },
                      ],
                    },
                    {
                      title: 'Sizing and responsive behavior',
                      cases: [
                        {
                          title: 'Check wide-screen presentation',
                          steps: [
                            'Render at a wide viewport.',
                            'Compare the mark, product name, navigation, and available clear space.',
                          ],
                          expected: 'The mark and text are legible and aligned, clear space is preserved, and the brand does not crowd the navigation.',
                        },
                        {
                          title: 'Check small-screen presentation',
                          steps: [
                            'Resize below the mobile breakpoint.',
                            'Open the mobile navigation.',
                            'Inspect the custom brand and trigger.',
                          ],
                          expected: 'The brand remains legible and unclipped, the trigger remains reachable, and the custom logo does not overlap the trigger or drawer content.',
                        },
                        {
                          title: 'Check narrowest supported width',
                          steps: [
                            'Resize to the narrowest supported width.',
                            'Inspect the brand boundary and attempt horizontal scrolling.',
                          ],
                          expected: 'The mark and product name remain understandable, the brand target remains usable, and no unintended horizontal overflow is introduced.',
                        },
                      ],
                    },
                    {
                      title: 'Keyboard and accessibility',
                      cases: [
                        {
                          title: 'Focus the complete brand target',
                          steps: [
                            'Place focus before the Header.',
                            'Tab to the custom brand.',
                            'Observe the focus indicator.',
                          ],
                          expected: 'The focus indicator surrounds the complete interactive brand target and remains distinguishable from the logo styling.',
                        },
                        {
                          title: 'Preserve navigation semantics',
                          steps: [
                            'Inspect the Header navigation landmark at desktop width.',
                            'Open the mobile navigation at narrow width.',
                            'Inspect both accessibility trees.',
                          ],
                          expected: 'The navigation remains a labelled landmark, its links retain meaningful names and destinations, and the custom logo does not create a duplicate navigation name.',
                        },
                      ],
                    },
                  ],
                },
              }}
            >
              <Header
                logo={
                  <a
                    href="/"
                    aria-label="Application Delivery Kit"
                    className="inline-flex items-center gap-2 rounded-sm font-heading text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span
                      aria-hidden="true"
                      className="grid size-10 place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground"
                    >
                      ADK
                    </span>
                    <span>Application Delivery Kit</span>
                  </a>
                }
                nav={[
                  { label: 'Examples', href: '/examples/layouts' },
                  { label: 'Components', href: '/components/user-interface' },
                ]}
              />
            </ExampleVariation>

            <ExampleVariation
              title="With active item"
              summary="The consuming application marks the current destination explicitly so the Header can provide both visual and assistive-technology state."
              tryIt="Inspect the Components link, then use the keyboard to focus it and confirm that its current styling and page-current semantics are both present."
              supplemental={{
                guidance: {
                  explanation:
                    'Use current when the application has matched the active route. Route matching belongs outside Header; the component renders the supplied state as a visual treatment and aria-current="page".',
                  doItems: [
                    'Calculate current from the application router or route state and pass it with the matching navigation item.',
                    'Keep aria-current and the visual current state together so the state is not color-only.',
                    'Verify that only the destination representing the current page is marked current.',
                  ],
                  dontItems: [
                    'Do not make Header inspect window.location or depend on a specific router.',
                    'Do not mark every item current or use current as a substitute for hover styling.',
                    'Do not communicate the active destination through color without aria-current or another non-color cue.',
                  ],
                },
                code: {
                  language: 'tsx',
                  props: activeHeaderProps,
                  attributes: renderedHeaderAttributeExplanations,
                  source: `<Header
  logo={{ href: '/', label: 'Application Delivery Kit' }}
  navigationLabel="Global navigation"
  nav={[
    { label: 'Examples', href: '/examples/layouts' },
    { label: 'Components', href: '/components/user-interface', current: true },
  ]}
/>`,
                  html: `<nav aria-label="Global navigation" class="flex items-center gap-1">
  <a href="/examples/layouts" class="inline-flex ... text-muted-foreground">
    Examples
  </a>
  <a href="/components/user-interface"
    aria-current="page" data-current="true"
    class="inline-flex ... data-[current=true]:bg-muted data-[current=true]:text-foreground">
    Components
  </a>
</nav>`,
                },
                requirements: {
                  userStory: 'As an application user, I want the Header to identify the destination I am currently viewing so that I can understand my location, distinguish it from other destinations, and see that state on desktop and mobile.',
                  acceptanceCriteria: [
                    {
                      given: 'the Header is rendered',
                      when: 'a user inspects the shell',
                      then: 'Application Delivery Kit appears as a linked brand to /',
                      and: [
                        'the brand link has the accessible name Application Delivery Kit',
                      ],
                    },
                    {
                      given: 'the navigation contains Examples and Components and Components is supplied with current: true',
                      when: 'the Header renders',
                      then: 'Components receives the current visual treatment and Examples remains inactive',
                      and: [
                        'Components exposes aria-current="page"',
                        'Components exposes data-current="true"',
                        'Examples does not expose aria-current="page" or data-current="true"',
                      ],
                    },
                    {
                      given: 'the current Components link is rendered',
                      when: 'a user compares it with the Examples link',
                      then: 'the current state is communicated by more than color alone',
                      and: [
                        'the current styling is visibly distinguishable',
                        'the link text remains readable',
                      ],
                    },
                    {
                      given: 'an inactive navigation link is available',
                      when: 'a user selects the link and the application changes route',
                      then: 'the selected destination becomes the current page',
                      and: [
                        'the application supplies current: true to the newly current item',
                        'the previously current item loses aria-current="page" and current styling',
                      ],
                    },
                    {
                      given: 'a keyboard user focuses the current link',
                      when: 'focus is applied',
                      then: 'the focus indicator remains visible in addition to the current-state treatment',
                      and: [
                        'focus and current state are visually distinguishable',
                      ],
                    },
                    {
                      given: 'assistive technology reads the Header',
                      when: 'it reaches the navigation landmark and its links',
                      then: 'the landmark is named Global navigation and the current destination is announced as the current page',
                      and: [
                        'the current state is not conveyed only through color or background',
                      ],
                    },
                    {
                      given: 'the viewport becomes narrow',
                      when: 'the mobile navigation opens',
                      then: 'Components remains available and retains its current state',
                      and: [
                        'the current destination remains identifiable in the mobile presentation',
                        'the mobile link remains keyboard-operable',
                      ],
                    },
                    {
                      given: 'the Header is scrolled or displayed at different widths',
                      when: 'the layout changes presentation',
                      then: 'the current state remains associated with the same destination',
                      and: [
                        'sticky/scrolled styling does not remove current semantics',
                        'the brand and current link remain usable without clipping',
                      ],
                    },
                    {
                      given: 'the Header is rendered at the narrowest supported width',
                      when: 'the layout reflows',
                      then: 'the current label, link target, focus state, and mobile trigger remain visible and usable',
                      and: [
                        'the current state is not communicated by color alone',
                        'no horizontal overflow hides the current destination',
                      ],
                    },
                  ],
                },
                verification: {
                  scenarios: [
                    {
                      title: 'Current-state rendering',
                      cases: [
                        {
                          title: 'Inspect the current destination',
                          steps: [
                            'Render the Header with Components marked current: true.',
                            'Inspect its visual styling.',
                            'Inspect aria-current and data-current.',
                          ],
                          expected: 'Components has the current styling, aria-current="page", and data-current="true".',
                        },
                        {
                          title: 'Inspect an inactive destination',
                          steps: [
                            'Inspect the Examples link.',
                            'Compare its attributes and styling with Components.',
                          ],
                          expected: 'Examples remains a normal link without current-page semantics or current-state styling.',
                        },
                        {
                          title: 'Select a different destination',
                          steps: [
                            'Activate Examples.',
                            'Allow the application to update its route state.',
                            'Render the Header for the new route.',
                          ],
                          expected: 'Examples becomes current, Components loses its current semantics and styling, and the selected destination is the page now represented as current.',
                        },
                      ],
                    },
                    {
                      title: 'Accessibility and keyboard behavior',
                      cases: [
                        {
                          title: 'Identify the labelled landmark',
                          steps: [
                            'Inspect the navigation landmark.',
                            'Read its accessible name.',
                            'Inspect the current link inside it.',
                          ],
                          expected: 'The landmark is named Global navigation, and the current destination is exposed as the current page.',
                        },
                        {
                          title: 'Distinguish focus from current state',
                          steps: [
                            'Use Tab to focus Components.',
                            'Observe the current styling and focus indicator together.',
                          ],
                          expected: 'Both current state and focus are visible; the focus indicator is not removed or confused with the current styling.',
                        },
                        {
                          title: 'Operate the current link with the keyboard',
                          steps: [
                            'Focus Components.',
                            'Press Enter.',
                            'Observe the resulting navigation behavior.',
                          ],
                          expected: 'The current item remains a normal link and can be activated with the keyboard.',
                        },
                      ],
                    },
                    {
                      title: 'Responsive current state',
                      cases: [
                        {
                          title: 'Preserve current state on mobile',
                          steps: [
                            'Resize below the mobile breakpoint.',
                            'Open the mobile navigation.',
                            'Inspect Components.',
                          ],
                          expected: 'Components remains available in the mobile navigation with current state and accessible naming preserved.',
                        },
                        {
                          title: 'Check current state at narrow width',
                          steps: [
                            'Resize to the narrowest supported width.',
                            'Inspect the current link and trigger.',
                          ],
                          expected: 'The current link remains readable and reachable, and the state is not communicated by color alone.',
                        },
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
                  { label: 'Components', href: '/components/user-interface', current: true },
                ]}
              />
            </ExampleVariation>

            <ExampleVariation
              title="With dropdown"
              summary="A dropdown groups related destinations under a clear parent label while keeping the Header compact. On mobile, the same dropdown hierarchy becomes a labelled group containing the child links."
              tryIt="Open the Components menu with pointer and keyboard input, move through its items, then dismiss it with Escape. Resize to mobile and confirm Components becomes a labelled group containing the same child links."
              supplemental={{
                guidance: {
                  explanation:
                    'A dropdown is appropriate when a parent category has several closely related destinations and showing every link inline would make the Header difficult to scan. The parent label should communicate the category, and the open menu must be fully keyboard-operable. At the mobile breakpoint, the same parent item becomes a visible group heading and its children remain grouped beneath it; leaf navigation items remain individual links.',
                  doItems: [
                    'Use a meaningful category label, such as Components, that describes the destinations inside.',
                    'Keep the menu short and group only destinations that share a clear relationship.',
                    'Use specific link text inside the menu and preserve visible focus, Escape dismissal, and focus restoration.',
                    'Keep desktop and mobile navigation derived from the same parent-and-children data so the hierarchy remains consistent.',
                  ],
                  dontItems: [
                    'Do not hide a single high-priority destination inside a dropdown.',
                    'Do not use a dropdown as a substitute for unclear information architecture or a long sitemap.',
                    'Do not use ambiguous labels such as More when the available destinations can be named directly.',
                    'Do not flatten dropdown children into unrelated top-level links on mobile or maintain separate mobile-only dropdown data.',
                  ],
                },
                code: {
                  language: 'tsx',
                  props: dropdownHeaderProps,
                  attributes: renderedHeaderAttributeExplanations,
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
                  html: `<header data-slot="header" data-size="contained"
  class="sticky top-0 z-40 w-full h-14 md:h-16 bg-background/0 transition-[background-color,border-color,backdrop-filter] duration-150">
  <div data-slot="container" data-size="2xl"
    class="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex h-full items-center justify-between gap-4">
    <a href="/" class="rounded-sm font-heading text-base font-semibold text-foreground ...">
      Application Delivery Kit
    </a>
    <nav aria-label="Global navigation" class="flex items-center gap-1">
      <a href="/examples/layouts" class="...">Examples</a>
      <button type="button" aria-haspopup="menu" aria-expanded="false"
        class="inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        Components
        <svg aria-hidden="true" class="size-4 shrink-0">...</svg>
      </button>
    </nav>
  </div>
  <div role="menu" hidden class="...">
    <a role="menuitem" href="/components/forms" class="w-full items-center gap-2 ...">Forms</a>
    <a role="menuitem" href="/components/user-interface" class="w-full items-center gap-2 ...">User interface</a>
  </div>
</header>`,
                },
                requirements: {
                  userStory: 'As an application user, I want related destinations grouped under a clear parent label so that I can open, navigate, and dismiss the group without losing the destination hierarchy on desktop or mobile.',
                  acceptanceCriteria: [
                    {
                      given: 'the Header is rendered',
                      when: 'a user inspects the shell',
                      then: 'Application Delivery Kit appears as a link to /',
                      and: [
                        'the brand has the accessible name Application Delivery Kit',
                      ],
                    },
                    {
                      given: 'the top-level Examples item has no children',
                      when: 'the Header renders at desktop or mobile width',
                      then: 'Examples is an individual link to /examples/layouts',
                      and: [
                        'it has visible link text',
                        'it is not rendered as a menu trigger',
                      ],
                    },
                    {
                      given: 'the top-level Components item has children',
                      when: 'the Header renders at desktop width',
                      then: 'Components is a button that opens a menu instead of a destination link',
                      and: [
                        'the button has visible Components text',
                        'the button exposes menu behavior and expanded state',
                        'the button is not presented as an anchor to a parent destination',
                      ],
                    },
                    {
                      given: 'the Components menu is closed',
                      when: 'a user activates its trigger',
                      then: 'the menu opens and the trigger exposes expanded=true',
                      and: [
                        'the child links Forms, User interface, and Interaction become available',
                        'the menu is associated with the Components trigger',
                      ],
                    },
                    {
                      given: 'the Components menu is open',
                      when: 'a user selects a child link',
                      then: 'the application navigates to the selected child destination and the desktop menu closes',
                      and: [
                        'the selected child retains its configured href',
                        'the child can become current after the application supplies updated route state',
                      ],
                    },
                    {
                      given: 'the Components menu is open',
                      when: 'a keyboard user moves through the menu',
                      then: 'each child destination is reachable in the defined order with visible focus',
                      and: [
                        'Forms, User interface, and Interaction have specific visible names',
                        'focus does not skip a child',
                      ],
                    },
                    {
                      given: 'the Components menu is open',
                      when: 'the user presses Escape or dismisses it outside the menu',
                      then: 'the menu closes',
                      and: [
                        'focus returns to or remains appropriately associated with the Components trigger',
                        'the child links are no longer exposed as open-menu content',
                      ],
                    },
                    {
                      given: 'the viewport crosses the mobile breakpoint',
                      when: 'the Header renders the same nav data',
                      then: 'the desktop dropdown becomes a visible Components group containing the same child links',
                      and: [
                        'the child order is preserved',
                        'the leaf Examples item remains an individual link',
                        'the mobile navigation has one clear navigation landmark',
                      ],
                    },
                    {
                      given: 'the mobile navigation is open and the Components group is visible',
                      when: 'a user selects a child link',
                      then: 'the application navigates to that child destination',
                      and: [
                        'the child remains a normal link',
                        'the destination and visible label remain the same as the desktop child',
                      ],
                    },
                    {
                      given: 'the Header is displayed at the narrowest supported width',
                      when: 'the menu or mobile group is used',
                      then: 'the trigger, group label, child links, and dismissal behavior remain usable without clipping or overlap',
                      and: [
                        'no child destination is hidden by the viewport boundary',
                        'horizontal scrolling is not required to reach a child',
                      ],
                    },
                  ],
                },
                verification: {
                  scenarios: [
                    {
                      title: 'Desktop dropdown structure',
                      cases: [
                        {
                          title: 'Inspect the leaf and parent items',
                          steps: [
                            'Render at a desktop width.',
                            'Inspect Examples.',
                            'Inspect Components.',
                          ],
                          expected: 'Examples is an anchor link to /examples/layouts; Components is a button-style menu trigger and is not itself a destination link.',
                        },
                        {
                          title: 'Open the menu with a pointer',
                          steps: [
                            'Activate Components with a pointer.',
                            'Inspect the trigger and menu.',
                          ],
                          expected: 'The menu opens, child links become visible, and the trigger exposes its expanded state.',
                        },
                        {
                          title: 'Open the menu with a keyboard',
                          steps: [
                            'Focus Components with Tab.',
                            'Press Enter or Space.',
                            'Inspect the open menu.',
                          ],
                          expected: 'The menu opens without pointer input, the trigger remains associated with it, and the first available child can be reached by keyboard.',
                        },
                        {
                          title: 'Check child order and names',
                          steps: [
                            'Move through Forms, User interface, and Interaction.',
                            'Record the order and visible names.',
                          ],
                          expected: 'Each child is a link with its configured destination and the order matches the supplied children array.',
                        },
                        {
                          title: 'Select a child destination',
                          steps: [
                            'Open Components.',
                            'Select User interface.',
                            'Observe the destination and menu state.',
                          ],
                          expected: 'The application navigates to /components/user-interface and the desktop menu closes.',
                        },
                      ],
                    },
                    {
                      title: 'Dismissal and focus',
                      cases: [
                        {
                          title: 'Dismiss with Escape',
                          steps: [
                            'Open the Components menu.',
                            'Press Escape.',
                            'Inspect focus.',
                          ],
                          expected: 'The menu closes, child links are no longer exposed as open menu content, and focus returns to or remains associated with Components.',
                        },
                        {
                          title: 'Dismiss outside the menu',
                          steps: [
                            'Open the Components menu.',
                            'Activate or click outside the menu.',
                            'Inspect the trigger state.',
                          ],
                          expected: 'The menu closes and the trigger no longer reports expanded=true.',
                        },
                      ],
                    },
                    {
                      title: 'Mobile hierarchy',
                      cases: [
                        {
                          title: 'Preserve the shared navigation data',
                          steps: [
                            'Resize below the mobile breakpoint.',
                            'Open the mobile navigation.',
                            'Inspect Examples, Components, and the children.',
                          ],
                          expected: 'Examples remains a direct link; Components becomes a visible group heading; Forms, User interface, and Interaction appear beneath it in the same order.',
                        },
                        {
                          title: 'Inspect mobile landmark and group semantics',
                          steps: [
                            'Inspect the mobile navigation accessibility tree.',
                            'Inspect the Components group heading.',
                            'Inspect the child links.',
                          ],
                          expected: 'There is one clearly named mobile navigation landmark, Components is a heading rather than a second nav landmark, and each child remains a link.',
                        },
                        {
                          title: 'Select a mobile child',
                          steps: [
                            'Open the mobile navigation.',
                            'Select User interface.',
                            'Observe the resulting destination.',
                          ],
                          expected: 'The application navigates to /components/user-interface; the child remains a link and has the same visible label and destination as its desktop counterpart.',
                        },
                        {
                          title: 'Check mobile boundaries',
                          steps: [
                            'Resize to the narrowest supported width.',
                            'Scroll the mobile menu if necessary.',
                            'Inspect all child links.',
                          ],
                          expected: 'All child links remain reachable and readable without clipping, overlap, or horizontal scrolling.',
                        },
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
                  props: iconHeaderProps,
                  attributes: renderedHeaderAttributeExplanations,
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
                  html: `<header data-slot="header" data-size="contained"
  class="sticky top-0 z-40 w-full h-14 md:h-16 bg-background/0 transition-[background-color,border-color,backdrop-filter] duration-150">
  <div data-slot="container" data-size="2xl"
    class="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex h-full items-center justify-between gap-4">
    <a href="/" class="rounded-sm font-heading text-base font-semibold text-foreground ...">
      Application Delivery Kit
    </a>
    <nav aria-label="Global navigation" class="flex items-center gap-1">
      <a href="/examples/layouts" class="inline-flex items-center gap-2 ...">
        <svg aria-hidden="true" class="size-4 shrink-0">...</svg>
        <span>Examples</span>
      </a>
      <button type="button" aria-haspopup="menu" aria-expanded="false" class="...">
        <svg aria-hidden="true" class="size-4 shrink-0">...</svg>
        <span>Components</span>
      </button>
    </nav>
  </div>
</header>`,
                },
                requirements: {
                  userStory: 'As an application user, I want familiar icons to reinforce visible navigation labels so that I can recognize destinations quickly without needing to interpret an icon by itself.',
                  acceptanceCriteria: [
                    {
                      given: 'the Header is rendered with icons',
                      when: 'a user inspects the shell',
                      then: 'Application Delivery Kit appears as a linked brand to /',
                      and: [
                        'the brand has the accessible name Application Delivery Kit',
                      ],
                    },
                    {
                      given: 'Examples has LayoutTemplate and Components has Blocks',
                      when: 'the Header renders',
                      then: 'each icon appears beside its corresponding visible navigation label',
                      and: [
                        'the Examples icon appears with Examples',
                        'the Components icon appears with Components',
                        'the icon does not replace the visible label',
                      ],
                    },
                    {
                      given: 'an icon-supported link is available',
                      when: 'a user selects Examples',
                      then: 'the application navigates to /examples/layouts',
                      and: [
                        'the icon does not alter the destination',
                        'the visible Examples label remains the primary cue',
                      ],
                    },
                    {
                      given: 'the Components parent has an icon and children',
                      when: 'the Header renders at desktop width',
                      then: 'the Components item remains a menu trigger with its icon, visible label, and dropdown indicator',
                      and: [
                        'the icon is decorative',
                        'the trigger still exposes menu semantics and expanded state',
                      ],
                    },
                    {
                      given: 'assistive technology evaluates an icon-supported link or trigger',
                      when: 'the accessible name is computed',
                      then: 'the visible label supplies the name and the decorative icon is not announced separately',
                      and: [
                        'the icon does not create a duplicate name',
                        'the label remains understandable without the icon',
                      ],
                    },
                    {
                      given: 'the icon-supported items are displayed',
                      when: 'a user compares them visually',
                      then: 'icons use consistent sizing, alignment, and spacing without reducing label legibility',
                      and: [
                        'icons support rather than compete with the labels',
                        'the icon style is consistent between Examples and Components',
                      ],
                    },
                    {
                      given: 'a keyboard user focuses an icon-supported item',
                      when: 'focus reaches the link or trigger',
                      then: 'the complete interactive target has a visible focus indicator',
                      and: [
                        'the icon does not interrupt the focus order',
                        'focus remains distinguishable from hover and current styling',
                      ],
                    },
                    {
                      given: 'a user selects an icon-supported dropdown child',
                      when: 'the child link is activated',
                      then: 'the application navigates to the child destination and the menu behavior remains the same as the non-icon dropdown',
                      and: [
                        'the icon treatment does not change the child label or destination',
                      ],
                    },
                    {
                      given: 'the viewport crosses the mobile breakpoint',
                      when: 'the Header switches to mobile presentation',
                      then: 'the visible labels and their icons remain understandable in the mobile navigation',
                      and: [
                        'decorative icons remain hidden from assistive technology',
                        'the same destinations and grouping remain available',
                      ],
                    },
                    {
                      given: 'the Header is rendered at the narrowest supported width',
                      when: 'the layout reflows',
                      then: 'icons, labels, trigger, child links, and spacing remain usable without clipping, overlap, or horizontal scrolling',
                      and: [
                        'labels do not wrap in a way that hides their meaning',
                        'icons do not crowd the mobile targets',
                      ],
                    },
                  ],
                },
                verification: {
                  scenarios: [
                    {
                      title: 'Icon and label semantics',
                      cases: [
                        {
                          title: 'Inspect visible icon-label pairs',
                          steps: [
                            'Render the Header with icons.',
                            'Inspect Examples and Components at desktop width.',
                          ],
                          expected: 'LayoutTemplate appears with Examples and Blocks appears with Components; both labels remain visible and readable.',
                        },
                        {
                          title: 'Keep visible labels as accessible names',
                          steps: [
                            'Inspect Examples and the Components trigger in the accessibility tree.',
                            'Inspect the icons separately.',
                          ],
                          expected: 'The visible labels provide the link and trigger names, and the decorative icons are not announced as additional names.',
                        },
                        {
                          title: 'Select an icon-supported link',
                          steps: [
                            'Activate Examples.',
                            'Observe the destination.',
                          ],
                          expected: 'The application navigates to /examples/layouts and the icon does not change the link meaning or destination.',
                        },
                        {
                          title: 'Open and select an icon-supported dropdown child',
                          steps: [
                            'Open Components.',
                            'Select User interface.',
                            'Observe the destination and menu state.',
                          ],
                          expected: 'The menu opens and navigates exactly like the non-icon dropdown; the selected child destination loads and the menu closes.',
                        },
                      ],
                    },
                    {
                      title: 'Visual consistency and focus',
                      cases: [
                        {
                          title: 'Compare icon treatment',
                          steps: [
                            'Compare the Examples and Components icons.',
                            'Inspect their size, alignment, spacing, and relationship to text.',
                          ],
                          expected: 'The icons are consistently sized and aligned, support the labels, and do not make either label difficult to read.',
                        },
                        {
                          title: 'Focus complete interactive targets',
                          steps: [
                            'Use Tab through Examples and Components.',
                            'Observe each focus indicator.',
                          ],
                          expected: 'The focus indicator covers the complete link or trigger, remains visible around the icon and label, and does not rely on the icon color.',
                        },
                      ],
                    },
                    {
                      title: 'Responsive icon behavior',
                      cases: [
                        {
                          title: 'Preserve icons and labels on mobile',
                          steps: [
                            'Resize below the mobile breakpoint.',
                            'Open the mobile navigation.',
                            'Inspect Examples, Components, and their children.',
                          ],
                          expected: 'The labels remain visible and understandable, the icons remain decorative to assistive technology, and the shared navigation destinations remain available.',
                        },
                        {
                          title: 'Check narrow-width layout',
                          steps: [
                            'Resize to the narrowest supported width.',
                            'Inspect each icon-label pair and interactive target.',
                            'Attempt horizontal scrolling.',
                          ],
                          expected: 'Icons do not crowd or clip labels, controls remain usable, and the Header does not introduce unintended horizontal overflow.',
                        },
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
