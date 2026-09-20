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
            This example uses the application’s reusable TabNavigation component for section-level
            links beneath a page or application Header.
          </p>
          <p className="text-muted-foreground">
            Compare the variations as decisions: start with a neutral row, add an active destination
            only when current location matters, and then test whether longer labels still preserve
            scanning, focus visibility, and usable space. These are navigation links, so selecting
            one should take the person to a destination and preserve normal browser history and link
            behavior.
          </p>
          <p className="text-sm text-muted-foreground">
            Try it: move through the navigation links with the keyboard, activate a destination,
            resize until labels wrap or move to the mobile replacement, and confirm only the
            intended current destination is active with visible focus.
          </p>
          <div className="space-y-8 [&_*:has(>[data-slot=tab-navigation])]:!p-0 [&_*:has(>[data-slot=tab-navigation])]:overflow-hidden">
            <ExampleVariation
              title="Basic"
              description="A short row of links helps people move between closely related pages in the same section."
              explanation="TabNavigation is for the current section’s immediate destinations—not the application’s broadest navigation. The reusable component receives the link data and active destination, then supplies the shared layout, current-state treatment, and responsive behavior used by the application."
              doItems={[
                'Use concise, parallel labels that match the destination page titles.',
                'Pass the current route as activeHref so location is communicated by more than color.',
                'Keep the list short and limited to sibling pages people need within the same section.',
                'Confirm the navigation has a meaningful accessible label when a page contains more than one navigation landmark.',
              ]}
              dontItems={[
                'Do not put the entire application sitemap or deeply nested destinations in this row.',
                'Do not use it as a substitute for a page heading, breadcrumb, or sidebar navigation.',
                'Do not rely on hover, position, or color alone to identify the current page.',
                'Do not make labels vague, inconsistent, or so long that the row becomes difficult to scan or use on small screens.',
              ]}
            >
              <TabNavigation
                items={[
                  { label: 'Overview', href: '#tab-navigation-overview' },
                  { label: 'Guidance', href: '#tab-navigation-guidance' },
                  { label: 'Examples', href: '#tab-navigation-examples' },
                ]}
                aria-label="Project guide sections"
              />
            </ExampleVariation>

            <ExampleVariation
              title="With active item"
              description="Use the active destination to show where the person is within the current section."
              explanation="The active state should identify the current destination through styling and semantics. Keep the link label aligned with the destination heading, and use the component’s activeHref contract so the current state is not communicated by color alone."
              doItems={[
                'Set activeHref to the current page or section destination.',
                'Preserve the same label and destination relationship across routes.',
              ]}
              dontItems={[
                'Use color alone to communicate the current location.',
                'Mark multiple destinations active at the same time.',
              ]}
            >
              <TabNavigation
                items={[
                  { label: 'Overview', href: '#tab-navigation-overview' },
                  { label: 'Guidance', href: '#tab-navigation-guidance' },
                  { label: 'Resources', href: '#tab-navigation-resources' },
                ]}
                activeHref="#tab-navigation-guidance"
                aria-label="Tab navigation with active item"
              />
            </ExampleVariation>

            <ExampleVariation
              title="With longer labels"
              description="Keep meaningful section names when destinations need more context."
              explanation="Longer labels should remain understandable as the navigation adapts to the available width. Test wrapping, spacing, focus visibility, and the absence of page-level horizontal scrolling at narrow widths and high zoom."
              doItems={[
                'Use specific labels that match the destination’s visible heading.',
                'Test the full set of destinations at narrow widths and high zoom.',
              ]}
              dontItems={[
                'Shorten labels into ambiguous abbreviations just to preserve one line.',
                'Allow the navigation to create horizontal scrolling for the whole page.',
              ]}
            >
              <TabNavigation
                items={[
                  { label: 'Overview and key decisions', href: '#tab-navigation-overview' },
                  { label: 'Implementation guidance', href: '#tab-navigation-guidance' },
                  { label: 'Related resources and references', href: '#tab-navigation-resources' },
                ]}
                aria-label="Tab navigation with longer labels"
              />
            </ExampleVariation>
          </div>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsTabNavigationPage }
