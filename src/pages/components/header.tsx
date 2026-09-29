/**
 * Header navigation guide.
 *
 * Teaches product-wide destinations, actions, responsive navigation, and focus
 * behavior using the production Header composition.
 */

import { Blocks, LayoutTemplate } from 'lucide-react'
import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { ExampleVariation } from '@/components/layout/example-variation'
import { TryIt } from '@/components/layout/try-it'
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
          <TryIt>
            Tab through the brand and navigation links, activate a destination, then resize to check
            that the same navigation remains usable in the mobile presentation.
          </TryIt>

          <div className="-mt-2 space-y-4">
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
            navigation, and icon-supported navigation. Each variation uses the same production
            Header component while isolating one implementation or behavior decision.
          </p>
          <p className="leading-7 text-muted-foreground">
            Each variation includes a focused Try it instruction followed by Guidance, Requirements,
            Criteria, Verification, and Code tabs. Use the live preview to experience the behavior,
            Code to adapt the implementation, Criteria to agree what must be true, and Verification
            to prove it.
          </p>
          <div className="space-y-8 [&_[data-slot=header]]:!border-b-0">
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
    { label: 'Components', href: '/components/user-interface', current: true },
  ]}
/>`,
                  html: `<header data-slot="header" data-scrolled="false" data-size="contained" class="sticky top-0 z-40 w-full h-14 md:h-16 bg-background/0 transition-[background-color,border-color,backdrop-filter] duration-150">
  <div data-slot="container" data-size="2xl" class="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex h-full items-center justify-between gap-4">
    <a href="/" class="rounded-sm font-heading text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Application Delivery Kit</a>
    <nav aria-label="Global navigation" class="flex items-center gap-1">
      <a href="/examples/layouts" class="inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Examples</a>
      <a href="/components/user-interface" aria-current="page" data-current="true" class="inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground bg-muted">Components</a>
    </nav>
  </div>
</header>`,
                },
                requirements: {
                  userStory:
                    'As an application user, I want a consistent and understandable Header so that I can identify the application, reach important destinations, and continue using it across screen sizes.',
                  groups: [
                    {
                      id: 'BR-BASIC',
                      title: 'Business requirements',
                      items: [
                        'The Header must ensure that the application name and both destinations are easy to find and understand.',
                        'The Header must ensure that the person is taken to the application home page.',
                      ],
                    },
                    {
                      id: 'FR-BASIC',
                      title: 'Functional requirements',
                      items: [
                        'The Header must ensure that the navigation is announced as Global navigation.',
                        'The Header must ensure that the links appear in a horizontal row beside the brand.',
                      ],
                    },
                    {
                      id: 'NFR-BASIC',
                      title: 'Non-functional requirements',
                      items: [
                        'The Header must ensure that the link remains the same size and gains a clear hover or focus treatment.',
                        'The Header must ensure that the application follows the selected destination.',
                      ],
                    },
                    {
                      id: 'A11Y-BASIC',
                      title: 'Accessibility requirements',
                      items: [
                        'The Header must ensure that the Header stays at the top while its visual surface can change to remain readable.',
                        'The Header must ensure that the navigation remains available through the mobile presentation.',
                      ],
                    },
                    {
                      id: 'TR-BASIC',
                      title: 'Technical requirements',
                      items: [
                        'The Header must ensure that the order is understandable and every focused element has a visible focus treatment.',
                        'The Header must ensure that the brand, trigger, and any visible controls remain usable.',
                      ],
                    },
                  ],
                  acceptanceCriteria: [
                    {
                      id: 'AC-BASIC-01',
                      requirementRefs: ['BR-BASIC-01'],
                      given:
                        'the Header is rendered with the application name and two top-level links',
                      when: 'a person views the application shell',
                      then: 'the application name and both destinations are easy to find and understand',
                      and: [
                        'the name appears before the navigation links',
                        'each destination has visible text',
                        'the two destinations remain separate links',
                      ],
                    },
                    {
                      id: 'AC-BASIC-02',
                      requirementRefs: ['BR-BASIC-02'],
                      given: 'the application name is selected',
                      when: 'the person activates it',
                      then: 'the person is taken to the application home page',
                      and: [
                        'the destination is /',
                        'the brand behaves as a link rather than a button',
                      ],
                    },
                    {
                      id: 'AC-BASIC-03',
                      requirementRefs: ['FR-BASIC-01'],
                      given: 'the Header navigation is present',
                      when: 'assistive technology lists page landmarks',
                      then: 'the navigation is announced as Global navigation',
                      and: [
                        'the navigation has one clear accessible name',
                        'the brand link is not incorrectly presented as part of the navigation landmark',
                      ],
                    },
                    {
                      id: 'AC-BASIC-04',
                      requirementRefs: ['FR-BASIC-02'],
                      given: 'the page is wide enough for the desktop Header',
                      when: 'the person views the shell',
                      then: 'the links appear in a horizontal row beside the brand',
                      and: [
                        'the Header remains at the top of the page',
                        'the links retain their labels and order',
                        'the rail does not replace or hide the main page content',
                      ],
                    },
                    {
                      id: 'AC-BASIC-05',
                      requirementRefs: ['NFR-BASIC-01'],
                      given: 'a person points to or focuses a navigation link',
                      when: 'the interaction state changes',
                      then: 'the link remains the same size and gains a clear hover or focus treatment',
                      and: [
                        'focus is visible without relying on color alone',
                        'the link does not move other Header content',
                      ],
                    },
                    {
                      id: 'AC-BASIC-06',
                      requirementRefs: ['NFR-BASIC-02'],
                      given: 'a person selects Examples or Components',
                      when: 'the link is activated',
                      then: 'the application follows the selected destination',
                      and: [
                        'the selected href is used',
                        'the destination behaves as normal navigation',
                      ],
                    },
                    {
                      id: 'AC-BASIC-07',
                      requirementRefs: ['A11Y-BASIC-01'],
                      given: 'the page is scrolled',
                      when: 'the Header remains visible',
                      then: 'the Header stays at the top while its visual surface can change to remain readable',
                      and: [
                        'the Header does not cover the page content unexpectedly',
                        'the brand and navigation remain available',
                      ],
                    },
                    {
                      id: 'AC-BASIC-08',
                      requirementRefs: ['A11Y-BASIC-02'],
                      given: 'the viewport becomes narrow',
                      when: 'the Header changes presentation',
                      then: 'the navigation remains available through the mobile presentation',
                      and: [
                        'the person can identify and operate the mobile menu trigger',
                        'the same destinations remain available',
                        'the desktop links do not create a second conflicting presentation',
                      ],
                    },
                    {
                      id: 'AC-BASIC-09',
                      requirementRefs: ['TR-BASIC-01'],
                      given: 'a keyboard user moves through the Header',
                      when: 'focus reaches each interactive element',
                      then: 'the order is understandable and every focused element has a visible focus treatment',
                      and: [
                        'the brand is reachable',
                        'each navigation link is reachable',
                        'the mobile trigger is reachable when shown',
                      ],
                    },
                    {
                      id: 'AC-BASIC-10',
                      requirementRefs: ['TR-BASIC-02'],
                      given: 'the Header is viewed at the narrowest supported width',
                      when: 'the content reflows',
                      then: 'the brand, trigger, and any visible controls remain usable',
                      and: [
                        'text is not clipped',
                        'interactive targets remain usable',
                        'the Header does not cause unintended horizontal scrolling',
                      ],
                    },
                  ],
                },
                tabLayout: 'requirements' as const,
                verification: {
                  scenarios: [
                    {
                      id: 'VR-BASIC-01',
                      criterionRefs: ['AC-BASIC-01'],
                      role: 'Functional QA',
                      description: 'Confirms structure and desktop navigation.',
                      title: 'Structure and desktop navigation',
                      cases: [
                        {
                          id: 'VR-BASIC-02',
                          criterionRefs: ['AC-BASIC-02'],
                          role: 'Functional QA',
                          description: 'Confirms brand and links.',
                          title: 'Brand and links',
                          steps: [
                            'Render the Header at a desktop-width viewport.',
                            'Inspect the brand, navigation landmark, and two links.',
                            'Compare the visible order with the example.',
                          ],
                          expected:
                            'The brand appears before one Global navigation landmark; Examples and Components are visible links in the supplied order.',
                        },
                        {
                          id: 'VR-BASIC-03',
                          criterionRefs: ['AC-BASIC-03'],
                          role: 'Functional QA',
                          description: 'Confirms normal destination outcomes.',
                          title: 'Normal destination outcomes',
                          steps: [
                            'Activate Examples.',
                            'Return and activate Components.',
                            'Inspect the resulting destination each time.',
                          ],
                          expected:
                            'Each activation follows its supplied href as normal navigation and does not behave like an unrelated action button.',
                        },
                      ],
                    },
                    {
                      id: 'VR-BASIC-04',
                      criterionRefs: ['AC-BASIC-04'],
                      role: 'Responsive QA',
                      description: 'Confirms scroll and responsive behavior.',
                      title: 'Scroll and responsive behavior',
                      cases: [
                        {
                          id: 'VR-BASIC-05',
                          criterionRefs: ['AC-BASIC-05'],
                          role: 'Visual QA',
                          description: 'Confirms scrolled shell.',
                          title: 'Scrolled shell',
                          steps: [
                            'Scroll the page past the Header threshold.',
                            'Inspect the Header position and surface.',
                            'Confirm the brand and navigation remain available.',
                          ],
                          expected:
                            'The Header remains available at the top, gains only its intended readability treatment, and does not obscure the page content.',
                        },
                        {
                          id: 'VR-BASIC-06',
                          criterionRefs: ['AC-BASIC-06'],
                          role: 'Responsive QA',
                          description: 'Confirms mobile transformation.',
                          title: 'Mobile transformation',
                          steps: [
                            'Resize below the mobile breakpoint.',
                            'Open the mobile navigation.',
                            'Compare its destinations with the desktop list.',
                          ],
                          expected:
                            'The desktop presentation changes to the mobile presentation without losing either destination or creating a duplicate conflicting landmark.',
                        },
                      ],
                    },
                    {
                      id: 'VR-BASIC-07',
                      criterionRefs: ['AC-BASIC-07'],
                      role: 'Accessibility QA',
                      description: 'Confirms keyboard and accessibility.',
                      title: 'Keyboard and accessibility',
                      cases: [
                        {
                          id: 'VR-BASIC-08',
                          criterionRefs: ['AC-BASIC-08'],
                          role: 'Accessibility QA',
                          description: 'Confirms keyboard order.',
                          title: 'Keyboard order',
                          steps: [
                            'Use Tab from the start of the Header.',
                            'Record the order of the brand, links, and mobile trigger when shown.',
                            'Inspect each focus indicator.',
                          ],
                          expected:
                            'Every interactive target is reachable in an understandable order and has a visible focus treatment.',
                        },
                        {
                          id: 'VR-BASIC-09',
                          criterionRefs: ['AC-BASIC-09'],
                          role: 'Responsive QA',
                          description: 'Confirms narrow boundary.',
                          title: 'Narrow boundary',
                          steps: [
                            'Test the narrowest supported width.',
                            'Inspect text, targets, and horizontal overflow.',
                          ],
                          expected:
                            'The Header remains usable, labels are not clipped, and no unintended horizontal scrolling is introduced.',
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
                  html: `<header data-slot="header" data-size="contained" class="sticky top-0 z-40 w-full h-14 md:h-16 bg-background/0 transition-[background-color,border-color,backdrop-filter] duration-150">
  <div data-slot="container" data-size="2xl" class="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex h-full items-center justify-between gap-4">
    <a href="/" aria-label="Application Delivery Kit" class="inline-flex items-center gap-2 rounded-sm font-heading text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Application Delivery Kit</a>
    <nav aria-label="Global navigation" class="hidden items-center gap-1 md:flex">
      <a href="/examples/layouts" class="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium">Examples</a>
      <a href="/components/user-interface" class="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium">Components</a>
    </nav>
  </div>
</header>`,
                },
                requirements: {
                  userStory:
                    'As an application user, I want a custom product brand to remain recognizable and operable so that branding can change without weakening navigation or accessibility.',
                  groups: [
                    {
                      id: 'BR-BRAND',
                      title: 'Business requirements',
                      items: [
                        'The Header must ensure that the supplied brand content appears as one recognizable brand area.',
                        'The Header must ensure that the person reaches the link destination.',
                      ],
                    },
                    {
                      id: 'FR-BRAND',
                      title: 'Functional requirements',
                      items: [
                        'The Header must ensure that decorative artwork does not create a duplicate or confusing name.',
                        'The Header must ensure that the complete brand target has a visible focus treatment.',
                      ],
                    },
                    {
                      id: 'NFR-BRAND',
                      title: 'Non-functional requirements',
                      items: [
                        'The Header must ensure that the logo remains aligned with the Header navigation.',
                        'The Header must ensure that the custom brand remains understandable while navigation changes presentation.',
                      ],
                    },
                    {
                      id: 'A11Y-BRAND',
                      title: 'Accessibility requirements',
                      items: [
                        'The Header must ensure that the brand and navigation remain distinct and understandable.',
                      ],
                    },
                    {
                      id: 'TR-BRAND',
                      title: 'Technical requirements',
                      items: [
                        'The Header must ensure that the complete brand target remains usable.',
                      ],
                    },
                  ],
                  acceptanceCriteria: [
                    {
                      id: 'AC-BRAND-01',
                      requirementRefs: ['BR-BRAND-01'],
                      given: 'the Header receives a custom logo slot',
                      when: 'the shell renders',
                      then: 'the supplied brand content appears as one recognizable brand area',
                      and: [
                        'the custom content is not replaced by the default text logo',
                        'the brand area remains before navigation',
                      ],
                    },
                    {
                      id: 'AC-BRAND-02',
                      requirementRefs: ['BR-BRAND-02'],
                      given: 'the custom brand includes a link',
                      when: 'the person activates the brand',
                      then: 'the person reaches the link destination',
                      and: [
                        'the complete brand area behaves as one link',
                        'the link has a meaningful accessible name',
                      ],
                    },
                    {
                      id: 'AC-BRAND-03',
                      requirementRefs: ['FR-BRAND-01'],
                      given: 'the custom logo contains artwork',
                      when: 'assistive technology reads the brand',
                      then: 'decorative artwork does not create a duplicate or confusing name',
                      and: [
                        'the artwork is hidden from the accessibility tree when it is decorative',
                        'visible product text or an accessible label identifies the link',
                      ],
                    },
                    {
                      id: 'AC-BRAND-04',
                      requirementRefs: ['FR-BRAND-02'],
                      given: 'the custom brand receives keyboard focus',
                      when: 'the person navigates with the keyboard',
                      then: 'the complete brand target has a visible focus treatment',
                      and: [
                        'focus is not limited to an unexplained inner graphic',
                        'the target remains usable without a pointer',
                      ],
                    },
                    {
                      id: 'AC-BRAND-05',
                      requirementRefs: ['NFR-BRAND-01'],
                      given: 'the viewport is wide',
                      when: 'the custom brand is shown',
                      then: 'the logo remains aligned with the Header navigation',
                      and: [
                        'the brand does not overlap the navigation',
                        'the brand preserves its intended size',
                      ],
                    },
                    {
                      id: 'AC-BRAND-06',
                      requirementRefs: ['NFR-BRAND-02'],
                      given: 'the viewport becomes narrow',
                      when: 'the Header changes presentation',
                      then: 'the custom brand remains understandable while navigation changes presentation',
                      and: ['the brand is not clipped', 'the mobile trigger remains available'],
                    },
                    {
                      id: 'AC-BRAND-07',
                      requirementRefs: ['A11Y-BRAND-01'],
                      given: 'the custom brand Header contains navigation',
                      when: 'landmarks are announced',
                      then: 'the brand and navigation remain distinct and understandable',
                      and: [
                        'the navigation keeps its configured name',
                        'the custom brand does not accidentally become the navigation landmark',
                      ],
                    },
                    {
                      id: 'AC-BRAND-08',
                      requirementRefs: ['TR-BRAND-02'],
                      given: 'the brand is displayed at the narrowest supported width',
                      when: 'the layout reflows',
                      then: 'the complete brand target remains usable',
                      and: [
                        'the accessible name remains available',
                        'the artwork does not force horizontal scrolling',
                      ],
                    },
                  ],
                },
                tabLayout: 'requirements' as const,
                verification: {
                  scenarios: [
                    {
                      id: 'VR-BRAND-01',
                      criterionRefs: ['AC-BRAND-01'],
                      role: 'Functional QA',
                      description: 'Confirms custom brand structure.',
                      title: 'Custom brand structure',
                      cases: [
                        {
                          id: 'VR-BRAND-02',
                          criterionRefs: ['AC-BRAND-02'],
                          role: 'Functional QA',
                          description: 'Confirms brand target.',
                          title: 'Brand target',
                          steps: [
                            'Render the custom logo example.',
                            'Inspect the complete brand area and its link name.',
                            'Activate the brand.',
                          ],
                          expected:
                            'The supplied custom brand appears as one recognizable, accessible link and reaches its configured destination.',
                        },
                        {
                          id: 'VR-BRAND-03',
                          criterionRefs: ['AC-BRAND-03'],
                          role: 'Functional QA',
                          description: 'Confirms decorative artwork.',
                          title: 'Decorative artwork',
                          steps: [
                            'Inspect the logo artwork with accessibility tools.',
                            'Read the brand link name.',
                          ],
                          expected:
                            'Decorative artwork is not announced separately and the complete brand still has a meaningful accessible name.',
                        },
                      ],
                    },
                    {
                      id: 'VR-BRAND-04',
                      criterionRefs: ['AC-BRAND-04'],
                      role: 'Responsive QA',
                      description: 'Confirms responsive custom brand.',
                      title: 'Responsive custom brand',
                      cases: [
                        {
                          id: 'VR-BRAND-05',
                          criterionRefs: ['AC-BRAND-05'],
                          role: 'Functional QA',
                          description: 'Confirms wide layout.',
                          title: 'Wide layout',
                          steps: ['Inspect the brand and navigation at a wide viewport.'],
                          expected: 'The brand aligns with navigation without overlap.',
                        },
                        {
                          id: 'VR-BRAND-06',
                          criterionRefs: ['AC-BRAND-06'],
                          role: 'Responsive QA',
                          description: 'Confirms narrow layout.',
                          title: 'Narrow layout',
                          steps: [
                            'Resize through the mobile breakpoint.',
                            'Inspect the brand, trigger, and label at the narrowest width.',
                          ],
                          expected:
                            'The brand remains recognizable and usable while the navigation changes presentation without clipping or horizontal scrolling.',
                        },
                      ],
                    },
                    {
                      id: 'VR-BRAND-07',
                      criterionRefs: ['AC-BRAND-07'],
                      role: 'Accessibility QA',
                      description: 'Confirms keyboard brand behavior.',
                      title: 'Keyboard brand behavior',
                      cases: [
                        {
                          id: 'VR-BRAND-08',
                          criterionRefs: ['AC-BRAND-08'],
                          role: 'Accessibility QA',
                          description: 'Confirms complete target focus.',
                          title: 'Complete target focus',
                          steps: [
                            'Tab to the custom brand.',
                            'Inspect the focus indicator.',
                            'Activate it with Enter.',
                          ],
                          expected:
                            'The complete brand target receives visible focus and keyboard activation follows the configured destination.',
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
  <a href="/examples/layouts" class="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground">Examples</a>
  <a href="/components/user-interface" aria-current="page" data-current="true" class="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground bg-muted">Components</a>
</nav>`,
                },
                requirements: {
                  userStory:
                    'As an application user, I want the Header to identify where I am without hiding other destinations so that I can navigate confidently.',
                  groups: [
                    {
                      id: 'BR-CURRENT',
                      title: 'Business requirements',
                      items: [
                        'The Header must ensure that Components is visibly identified as the current destination.',
                        'The Header must ensure that the link is announced as representing the current page.',
                      ],
                    },
                    {
                      id: 'FR-CURRENT',
                      title: 'Functional requirements',
                      items: [
                        'The Header must ensure that the inactive link does not look selected.',
                        'The Header must ensure that focus and current-location treatment are both understandable.',
                      ],
                    },
                    {
                      id: 'NFR-CURRENT',
                      title: 'Non-functional requirements',
                      items: [
                        'The Header must ensure that the application can update the current state to Examples.',
                        'The Header must ensure that the navigation has its configured accessible name.',
                      ],
                    },
                    {
                      id: 'A11Y-CURRENT',
                      title: 'Accessibility requirements',
                      items: [
                        'The Header must ensure that the current destination remains identifiable in the responsive presentation.',
                        'The Header must ensure that the current state remains distinguishable from scroll and responsive styling.',
                      ],
                    },
                    {
                      id: 'TR-CURRENT',
                      title: 'Technical requirements',
                      items: [
                        'The Header must ensure that current and focus information remain available without clipping.',
                      ],
                    },
                  ],
                  acceptanceCriteria: [
                    {
                      id: 'AC-CURRENT-01',
                      requirementRefs: ['BR-CURRENT-01'],
                      given:
                        'the navigation contains Examples and Components and Components is current',
                      when: 'the Header renders',
                      then: 'Components is visibly identified as the current destination',
                      and: [
                        'only Components is current',
                        'Examples remains an ordinary destination',
                        'the visual treatment does not rely on color alone',
                      ],
                    },
                    {
                      id: 'AC-CURRENT-02',
                      requirementRefs: ['BR-CURRENT-02'],
                      given: 'the current Components link is rendered',
                      when: 'assistive technology reads it',
                      then: 'the link is announced as representing the current page',
                      and: [
                        'it exposes aria-current="page"',
                        'its accessible name remains Components',
                      ],
                    },
                    {
                      id: 'AC-CURRENT-03',
                      requirementRefs: ['FR-CURRENT-01'],
                      given: 'an inactive navigation link is available',
                      when: 'the person views it',
                      then: 'the inactive link does not look selected',
                      and: [
                        'it does not expose aria-current="page"',
                        'it remains available as a normal link',
                      ],
                    },
                    {
                      id: 'AC-CURRENT-04',
                      requirementRefs: ['FR-CURRENT-02'],
                      given: 'a person focuses the current link',
                      when: 'the focus state appears',
                      then: 'focus and current-location treatment are both understandable',
                      and: [
                        'the focus indicator remains visible',
                        'the active treatment does not remove the focus indicator',
                      ],
                    },
                    {
                      id: 'AC-CURRENT-05',
                      requirementRefs: ['NFR-CURRENT-01'],
                      given: 'a person selects Examples',
                      when: 'the destination changes',
                      then: 'the application can update the current state to Examples',
                      and: [
                        'the selected link remains a normal navigation link',
                        'the previous current state is no longer shown after the application updates it',
                      ],
                    },
                    {
                      id: 'AC-CURRENT-06',
                      requirementRefs: ['NFR-CURRENT-02'],
                      given: 'assistive technology reads the Header',
                      when: 'the landmarks are announced',
                      then: 'the navigation has its configured accessible name',
                      and: [
                        'the Header and navigation are not confused with one another',
                        'current state is conveyed programmatically',
                      ],
                    },
                    {
                      id: 'AC-CURRENT-07',
                      requirementRefs: ['A11Y-CURRENT-01'],
                      given: 'the viewport becomes narrow',
                      when: 'the mobile presentation appears',
                      then: 'the current destination remains identifiable in the responsive presentation',
                      and: [
                        'the same current route is represented',
                        'the current state is not conveyed by desktop styling alone',
                      ],
                    },
                    {
                      id: 'AC-CURRENT-08',
                      requirementRefs: ['A11Y-CURRENT-02'],
                      given: 'the Header is scrolled or shown at different widths',
                      when: 'the visual shell changes',
                      then: 'the current state remains distinguishable from scroll and responsive styling',
                      and: [
                        'scroll treatment does not replace current treatment',
                        'the current link remains usable',
                      ],
                    },
                    {
                      id: 'AC-CURRENT-09',
                      requirementRefs: ['TR-CURRENT-01'],
                      given: 'the Header is viewed at the narrowest supported width',
                      when: 'the layout reflows',
                      then: 'current and focus information remain available without clipping',
                      and: [
                        'the current link remains reachable',
                        'the mobile control remains usable',
                      ],
                    },
                  ],
                },
                tabLayout: 'requirements' as const,
                verification: {
                  scenarios: [
                    {
                      id: 'VR-CURRENT-01',
                      criterionRefs: ['AC-CURRENT-01'],
                      role: 'Functional QA',
                      description: 'Confirms current-location behavior.',
                      title: 'Current-location behavior',
                      cases: [
                        {
                          id: 'VR-CURRENT-02',
                          criterionRefs: ['AC-CURRENT-02'],
                          role: 'Functional QA',
                          description: 'Confirms current link.',
                          title: 'Current link',
                          steps: [
                            'Render the example with Components current.',
                            'Inspect Components and Examples.',
                            'Use an accessibility inspector on Components.',
                          ],
                          expected:
                            'Only Components has the active visual treatment, data-current state, and aria-current="page"; Examples remains an ordinary link.',
                        },
                        {
                          id: 'VR-CURRENT-03',
                          criterionRefs: ['AC-CURRENT-03'],
                          role: 'Functional QA',
                          description: 'Confirms state update.',
                          title: 'State update',
                          steps: [
                            'Change the application-provided current item to Examples.',
                            'Rerender the Header.',
                            'Inspect both links.',
                          ],
                          expected:
                            'Current state moves to Examples and is removed from Components.',
                        },
                      ],
                    },
                    {
                      id: 'VR-CURRENT-04',
                      criterionRefs: ['AC-CURRENT-04'],
                      role: 'Accessibility QA',
                      description: 'Confirms focus versus selection.',
                      title: 'Focus versus selection',
                      cases: [
                        {
                          id: 'VR-CURRENT-05',
                          criterionRefs: ['AC-CURRENT-05'],
                          role: 'Accessibility QA',
                          description: 'Confirms current focused link.',
                          title: 'Current focused link',
                          steps: ['Tab to Components.', 'Compare focus and current styling.'],
                          expected:
                            'The focus indicator and current treatment are both visible and distinguishable.',
                        },
                        {
                          id: 'VR-CURRENT-06',
                          criterionRefs: ['AC-CURRENT-06'],
                          role: 'Accessibility QA',
                          description: 'Confirms keyboard navigation.',
                          title: 'Keyboard navigation',
                          steps: [
                            'Activate the focused link with Enter.',
                            'Observe the navigation outcome.',
                          ],
                          expected:
                            'Activation follows the link destination and does not depend on pointer interaction.',
                        },
                      ],
                    },
                    {
                      id: 'VR-CURRENT-07',
                      criterionRefs: ['AC-CURRENT-07'],
                      role: 'Responsive QA',
                      description: 'Confirms responsive current state.',
                      title: 'Responsive current state',
                      cases: [
                        {
                          id: 'VR-CURRENT-08',
                          criterionRefs: ['AC-CURRENT-08'],
                          role: 'Responsive QA',
                          description: 'Confirms mobile current state.',
                          title: 'Mobile current state',
                          steps: [
                            'Resize below the mobile breakpoint.',
                            'Open the mobile navigation.',
                            'Inspect Components.',
                          ],
                          expected:
                            'The current destination remains identifiable in the mobile presentation and remains usable at the narrowest tested width.',
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
                  html: `<header data-slot="header" data-size="contained" class="sticky top-0 z-40 w-full h-14 md:h-16 bg-background/0 transition-[background-color,border-color,backdrop-filter] duration-150">
  <div data-slot="container" data-size="2xl" class="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex h-full items-center justify-between gap-4">
    <a href="/" class="rounded-sm font-heading text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Application Delivery Kit</a>
    <nav aria-label="Global navigation" class="flex items-center gap-1">
      <a href="/examples/layouts" class="inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground">Examples</a>
      <button type="button" aria-haspopup="menu" aria-expanded="false" class="inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground">Components<svg aria-hidden="true" class="size-4 shrink-0"></svg></button>
    </nav>
  </div>
  <div role="menu" hidden class="absolute rounded-md border bg-card p-2 shadow-md">
    <a role="menuitem" href="/components/forms" class="block w-full rounded-md px-3 py-2">Forms</a>
    <a role="menuitem" href="/components/user-interface" class="block w-full rounded-md px-3 py-2">User interface</a>
  </div>
</header>`,
                },
                requirements: {
                  userStory:
                    'As an application user, I want grouped Header destinations to open predictably on desktop and remain understandable on mobile so that I can reach child pages without losing my place.',
                  groups: [
                    {
                      id: 'BR-GROUPED',
                      title: 'Business requirements',
                      items: [
                        'The Header must ensure that Examples is a direct link and Components is a menu trigger.',
                        'The Header must ensure that the menu contents are not presented as an open menu.',
                      ],
                    },
                    {
                      id: 'FR-GROUPED',
                      title: 'Functional requirements',
                      items: [
                        'The Header must ensure that the child destinations are presented in the documented order.',
                        'The Header must ensure that keyboard users receive the same child destinations as pointer users.',
                      ],
                    },
                    {
                      id: 'NFR-GROUPED',
                      title: 'Non-functional requirements',
                      items: [
                        'The Header must ensure that the application follows that child destination.',
                        'The Header must ensure that the menu closes and the trigger is usable again.',
                      ],
                    },
                    {
                      id: 'A11Y-GROUPED',
                      title: 'Accessibility requirements',
                      items: [
                        'The Header must ensure that the menu closes without selecting a child.',
                        'The Header must ensure that the same hierarchy is available in the mobile navigation.',
                      ],
                    },
                    {
                      id: 'TR-GROUPED',
                      title: 'Technical requirements',
                      items: [
                        'The Header must ensure that the label remains understandable and usable.',
                        'The Header must ensure that the order follows the visible menu hierarchy and every focused control is identifiable.',
                      ],
                    },
                  ],
                  acceptanceCriteria: [
                    {
                      id: 'AC-GROUPED-01',
                      requirementRefs: ['BR-GROUPED-01'],
                      given:
                        'the Header contains Examples without children and Components with child links',
                      when: 'the desktop Header renders',
                      then: 'Examples is a direct link and Components is a menu trigger',
                      and: [
                        'the leaf remains directly selectable',
                        'the parent is not treated as a destination link in the desktop menu',
                        'the child links appear only through the parent menu',
                      ],
                    },
                    {
                      id: 'AC-GROUPED-02',
                      requirementRefs: ['BR-GROUPED-02'],
                      given: 'the Components menu is closed',
                      when: 'the person views the Header',
                      then: 'the menu contents are not presented as an open menu',
                      and: [
                        'the trigger communicates that it is closed',
                        'the Header remains compact',
                      ],
                    },
                    {
                      id: 'AC-GROUPED-03',
                      requirementRefs: ['FR-GROUPED-01'],
                      given: 'the person opens Components with a pointer',
                      when: 'the menu opens',
                      then: 'the child destinations are presented in the documented order',
                      and: [
                        'the trigger communicates that it is expanded',
                        'the menu is associated with the trigger',
                        'each child has visible text',
                      ],
                    },
                    {
                      id: 'AC-GROUPED-04',
                      requirementRefs: ['FR-GROUPED-02'],
                      given: 'the person opens Components with the keyboard',
                      when: 'the menu opens',
                      then: 'keyboard users receive the same child destinations as pointer users',
                      and: [
                        'the trigger can be reached and operated with the keyboard',
                        'focus moves or remains in a predictable place',
                      ],
                    },
                    {
                      id: 'AC-GROUPED-05',
                      requirementRefs: ['NFR-GROUPED-01'],
                      given: 'the menu is open',
                      when: 'the person selects a child',
                      then: 'the application follows that child destination',
                      and: [
                        'the child is a normal link',
                        'the menu closes or is no longer presented after navigation',
                      ],
                    },
                    {
                      id: 'AC-GROUPED-06',
                      requirementRefs: ['NFR-GROUPED-02'],
                      given: 'the menu is open',
                      when: 'the person presses Escape',
                      then: 'the menu closes and the trigger is usable again',
                      and: [
                        'focus returns to or remains meaningfully associated with the trigger',
                        'the child links are no longer presented as an open menu',
                      ],
                    },
                    {
                      id: 'AC-GROUPED-07',
                      requirementRefs: ['A11Y-GROUPED-01'],
                      given: 'the menu is open',
                      when: 'the person clicks outside it',
                      then: 'the menu closes without selecting a child',
                      and: [
                        'the Header remains usable',
                        'the trigger communicates the closed state',
                      ],
                    },
                    {
                      id: 'AC-GROUPED-08',
                      requirementRefs: ['A11Y-GROUPED-02'],
                      given: 'the viewport becomes narrow',
                      when: 'the Header changes presentation',
                      then: 'the same hierarchy is available in the mobile navigation',
                      and: [
                        'Examples remains a direct link',
                        'Components becomes a labelled group containing its children',
                        'the mobile menu is one clearly named navigation landmark',
                      ],
                    },
                    {
                      id: 'AC-GROUPED-09',
                      requirementRefs: ['TR-GROUPED-01'],
                      given: 'a child has a long label or the viewport is narrow',
                      when: 'the menu or mobile group is shown',
                      then: 'the label remains understandable and usable',
                      and: [
                        'text is not silently clipped',
                        'the layout does not create unintended horizontal scrolling',
                      ],
                    },
                    {
                      id: 'AC-GROUPED-10',
                      requirementRefs: ['TR-GROUPED-02'],
                      given: 'a keyboard user moves through the menu',
                      when: 'focus changes',
                      then: 'the order follows the visible menu hierarchy and every focused control is identifiable',
                      and: [
                        'Escape remains available',
                        'the focus indicator is visible',
                        'a menu item is not skipped',
                      ],
                    },
                  ],
                },
                tabLayout: 'requirements' as const,
                verification: {
                  scenarios: [
                    {
                      id: 'VR-GROUPED-01',
                      criterionRefs: ['AC-GROUPED-01'],
                      role: 'Functional QA',
                      description: 'Confirms desktop menu interaction.',
                      title: 'Desktop menu interaction',
                      cases: [
                        {
                          id: 'VR-GROUPED-02',
                          criterionRefs: ['AC-GROUPED-02'],
                          role: 'Functional QA',
                          description: 'Confirms leaf and parent.',
                          title: 'Leaf and parent',
                          steps: [
                            'Render the Header at desktop width.',
                            'Inspect Examples and Components.',
                            'Confirm the menu is initially closed.',
                          ],
                          expected:
                            'Examples is a direct link; Components is a closed menu trigger; child links are not presented until the menu opens.',
                        },
                        {
                          id: 'VR-GROUPED-03',
                          criterionRefs: ['AC-GROUPED-03'],
                          role: 'Functional QA',
                          description: 'Confirms pointer open and select.',
                          title: 'Pointer open and select',
                          steps: [
                            'Open Components with a pointer.',
                            'Inspect trigger state, menu relationship, and child order.',
                            'Select a child.',
                          ],
                          expected:
                            'The trigger communicates expanded state, the children appear in order, and selecting one follows its href.',
                        },
                        {
                          id: 'VR-GROUPED-04',
                          criterionRefs: ['AC-GROUPED-04'],
                          role: 'Accessibility QA',
                          description: 'Confirms keyboard open and navigate.',
                          title: 'Keyboard open and navigate',
                          steps: [
                            'Focus Components with the keyboard.',
                            'Open it with the keyboard.',
                            'Move through the child links and activate one.',
                          ],
                          expected:
                            'Keyboard users can open, traverse, and activate the same child destinations as pointer users.',
                        },
                      ],
                    },
                    {
                      id: 'VR-GROUPED-05',
                      criterionRefs: ['AC-GROUPED-05'],
                      role: 'Accessibility QA',
                      description: 'Confirms dismissal and focus.',
                      title: 'Dismissal and focus',
                      cases: [
                        {
                          id: 'VR-GROUPED-06',
                          criterionRefs: ['AC-GROUPED-06'],
                          role: 'Functional QA',
                          description: 'Confirms escape.',
                          title: 'Escape',
                          steps: [
                            'Open the menu.',
                            'Press Escape.',
                            'Inspect the trigger and menu.',
                          ],
                          expected:
                            'The menu closes and focus remains associated with a usable trigger.',
                        },
                        {
                          id: 'VR-GROUPED-07',
                          criterionRefs: ['AC-GROUPED-07'],
                          role: 'Functional QA',
                          description: 'Confirms outside click.',
                          title: 'Outside click',
                          steps: [
                            'Open the menu.',
                            'Click outside it.',
                            'Inspect the trigger state.',
                          ],
                          expected:
                            'The menu closes without activating a child and the trigger reports the closed state.',
                        },
                      ],
                    },
                    {
                      id: 'VR-GROUPED-08',
                      criterionRefs: ['AC-GROUPED-08'],
                      role: 'Responsive QA',
                      description: 'Confirms mobile hierarchy.',
                      title: 'Mobile hierarchy',
                      cases: [
                        {
                          id: 'VR-GROUPED-09',
                          criterionRefs: ['AC-GROUPED-09'],
                          role: 'Functional QA',
                          description: 'Confirms shared hierarchy.',
                          title: 'Shared hierarchy',
                          steps: [
                            'Resize below the mobile breakpoint.',
                            'Open mobile navigation.',
                            'Inspect Examples, Components, and child links.',
                          ],
                          expected:
                            'Examples remains a direct link; Components becomes one labelled group containing its children; no extra nested navigation landmark is created.',
                        },
                        {
                          id: 'VR-GROUPED-10',
                          criterionRefs: ['AC-GROUPED-10'],
                          role: 'Responsive QA',
                          description: 'Confirms mobile selection and boundary.',
                          title: 'Mobile selection and boundary',
                          steps: [
                            'Select a mobile child.',
                            'Repeat at the narrowest supported width.',
                          ],
                          expected:
                            'The child destination is reachable and labels remain usable without clipping or horizontal scrolling.',
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
                  html: `<header data-slot="header" data-size="contained" class="sticky top-0 z-40 w-full h-14 md:h-16 bg-background/0 transition-[background-color,border-color,backdrop-filter] duration-150">
  <div data-slot="container" data-size="2xl" class="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex h-full items-center justify-between gap-4">
    <a href="/" class="rounded-sm font-heading text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Application Delivery Kit</a>
    <nav aria-label="Global navigation" class="flex items-center gap-1">
      <a href="/examples/layouts" class="inline-flex items-center gap-2 rounded-md px-3 py-2"><svg aria-hidden="true" class="size-4 shrink-0"></svg><span>Examples</span></a>
      <button type="button" aria-haspopup="menu" aria-expanded="false" class="inline-flex items-center gap-2 rounded-md px-3 py-2"><svg aria-hidden="true" class="size-4 shrink-0"></svg><span>Components</span></button>
    </nav>
  </div>
</header>`,
                },
                requirements: {
                  userStory:
                    'As an application user, I want icons to reinforce Header destinations without making navigation ambiguous so that the shell remains recognizable and accessible.',
                  groups: [
                    {
                      id: 'BR-ICON',
                      title: 'Business requirements',
                      items: [
                        'The Header must ensure that each icon supports recognition without replacing the label.',
                        'The Header must ensure that the icon is not announced as a second name.',
                      ],
                    },
                    {
                      id: 'FR-ICON',
                      title: 'Functional requirements',
                      items: [
                        'The Header must ensure that icons align consistently with their associated labels.',
                        'The Header must ensure that the application follows its href.',
                      ],
                    },
                    {
                      id: 'NFR-ICON',
                      title: 'Non-functional requirements',
                      items: [
                        'The Header must ensure that the child destination is reached.',
                        'The Header must ensure that the focus treatment surrounds the usable target.',
                      ],
                    },
                    {
                      id: 'A11Y-ICON',
                      title: 'Accessibility requirements',
                      items: [
                        'The Header must ensure that icons and labels remain understandable in the responsive hierarchy.',
                      ],
                    },
                    {
                      id: 'TR-ICON',
                      title: 'Technical requirements',
                      items: [
                        'The Header must ensure that icons do not force clipping or horizontal scrolling.',
                      ],
                    },
                  ],
                  acceptanceCriteria: [
                    {
                      id: 'AC-ICON-01',
                      requirementRefs: ['BR-ICON-01'],
                      given: 'the Header provides icons with visible labels',
                      when: 'the links or trigger render',
                      then: 'each icon supports recognition without replacing the label',
                      and: [
                        'the visible text remains the destination name',
                        'icons do not become the only way to understand the control',
                      ],
                    },
                    {
                      id: 'AC-ICON-02',
                      requirementRefs: ['BR-ICON-02'],
                      given: 'an icon is decorative',
                      when: 'assistive technology reads the control',
                      then: 'the icon is not announced as a second name',
                      and: [
                        'the icon is hidden from the accessibility tree',
                        'the visible label remains the accessible name',
                      ],
                    },
                    {
                      id: 'AC-ICON-03',
                      requirementRefs: ['FR-ICON-01'],
                      given: 'Examples has an icon and Components has an icon with children',
                      when: 'the desktop Header renders',
                      then: 'icons align consistently with their associated labels',
                      and: [
                        'the icon does not change the link target',
                        'the parent remains a menu trigger',
                      ],
                    },
                    {
                      id: 'AC-ICON-04',
                      requirementRefs: ['FR-ICON-02'],
                      given: 'a person selects an icon-supported direct link',
                      when: 'the link is activated',
                      then: 'the application follows its href',
                      and: [
                        'the complete icon-and-label area is one interactive target',
                        'the action remains normal navigation',
                      ],
                    },
                    {
                      id: 'AC-ICON-05',
                      requirementRefs: ['NFR-ICON-01'],
                      given: 'a person opens and selects an icon-supported dropdown child',
                      when: 'the menu interaction completes',
                      then: 'the child destination is reached',
                      and: [
                        'the trigger and child retain understandable names',
                        'the child remains selectable by keyboard and pointer',
                      ],
                    },
                    {
                      id: 'AC-ICON-06',
                      requirementRefs: ['NFR-ICON-02'],
                      given: 'a keyboard user focuses an icon-supported control',
                      when: 'the control receives focus',
                      then: 'the focus treatment surrounds the usable target',
                      and: [
                        'the icon does not capture focus separately',
                        'the label and focus treatment remain visible',
                      ],
                    },
                    {
                      id: 'AC-ICON-07',
                      requirementRefs: ['A11Y-ICON-01'],
                      given: 'the viewport becomes narrow',
                      when: 'the mobile presentation appears',
                      then: 'icons and labels remain understandable in the responsive hierarchy',
                      and: [
                        'decorative icons remain decorative',
                        'direct links remain direct links',
                        'parent groups remain labelled',
                      ],
                    },
                    {
                      id: 'AC-ICON-08',
                      requirementRefs: ['TR-ICON-02'],
                      given: 'the Header is viewed at the narrowest supported width',
                      when: 'the content reflows',
                      then: 'icons do not force clipping or horizontal scrolling',
                      and: ['labels remain available', 'the mobile trigger remains usable'],
                    },
                  ],
                },
                tabLayout: 'requirements' as const,
                verification: {
                  scenarios: [
                    {
                      id: 'VR-ICON-01',
                      criterionRefs: ['AC-ICON-01'],
                      role: 'Accessibility QA',
                      description: 'Confirms icon and label semantics.',
                      title: 'Icon and label semantics',
                      cases: [
                        {
                          id: 'VR-ICON-02',
                          criterionRefs: ['AC-ICON-02'],
                          role: 'Functional QA',
                          description: 'Confirms visible pairing.',
                          title: 'Visible pairing',
                          steps: ['Render the icon example.', 'Inspect each icon-label pair.'],
                          expected:
                            'Each icon aligns with its label and the visible label remains the destination name.',
                        },
                        {
                          id: 'VR-ICON-03',
                          criterionRefs: ['AC-ICON-03'],
                          role: 'Accessibility QA',
                          description: 'Confirms accessibility name.',
                          title: 'Accessibility name',
                          steps: ['Inspect the icon and link with accessibility tools.'],
                          expected:
                            'Decorative icons are not announced separately; the link or trigger retains a useful accessible name.',
                        },
                      ],
                    },
                    {
                      id: 'VR-ICON-04',
                      criterionRefs: ['AC-ICON-04'],
                      role: 'Functional QA',
                      description: 'Confirms interaction outcomes.',
                      title: 'Interaction outcomes',
                      cases: [
                        {
                          id: 'VR-ICON-05',
                          criterionRefs: ['AC-ICON-05'],
                          role: 'Functional QA',
                          description: 'Confirms direct link.',
                          title: 'Direct link',
                          steps: [
                            'Focus an icon-supported direct link.',
                            'Activate it with Enter.',
                          ],
                          expected:
                            'The complete icon-and-label target receives focus and follows its href.',
                        },
                        {
                          id: 'VR-ICON-06',
                          criterionRefs: ['AC-ICON-06'],
                          role: 'Functional QA',
                          description: 'Confirms dropdown child.',
                          title: 'Dropdown child',
                          steps: ['Open the icon-supported parent.', 'Focus and activate a child.'],
                          expected:
                            'The parent and child remain understandable and the child destination is reached.',
                        },
                      ],
                    },
                    {
                      id: 'VR-ICON-07',
                      criterionRefs: ['AC-ICON-07'],
                      role: 'Responsive QA',
                      description: 'Confirms responsive icon behavior.',
                      title: 'Responsive icon behavior',
                      cases: [
                        {
                          id: 'VR-ICON-08',
                          criterionRefs: ['AC-ICON-08'],
                          role: 'Responsive QA',
                          description: 'Confirms mobile presentation.',
                          title: 'Mobile presentation',
                          steps: [
                            'Resize below the mobile breakpoint.',
                            'Open the mobile navigation.',
                            'Inspect direct links and parent groups.',
                          ],
                          expected:
                            'Icons remain decorative, labels remain available, direct links stay direct, and grouped navigation retains its hierarchy.',
                        },
                        {
                          id: 'VR-ICON-09',
                          criterionRefs: ['AC-ICON-01'],
                          role: 'Responsive QA',
                          description: 'Confirms narrow boundary.',
                          title: 'Narrow boundary',
                          steps: [
                            'Test the narrowest supported width.',
                            'Inspect label clipping and horizontal overflow.',
                          ],
                          expected:
                            'The Header remains usable and icons do not force labels or controls out of view.',
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
