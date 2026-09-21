/** Overview and decision framework for the complete page-shell examples. */
import { LayoutGuideShell } from '@/components/layout/layout-guide-shell'

const layoutLinks = [
  [
    'Header Only',
    '/examples/layouts/header-only',
    'A focused page with primary navigation, one Main region, and a Footer.',
  ],
  [
    'Secondary',
    '/examples/layouts/secondary',
    'A page with a second row of section-level navigation.',
  ],
  [
    'Sidebar',
    '/examples/layouts/sidebar',
    'A page with a persistent map of related content beside Main.',
  ],
  ['Full', '/examples/layouts/full', 'A page combining section navigation, a Sidebar, and Main.'],
] as const

function LayoutsExamplesPage() {
  return (
    <LayoutGuideShell activeHref="/examples/layouts">
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby="layouts-heading">
          <h1 id="layouts-heading" className="text-4xl font-semibold tracking-tight">
            Layouts
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Page-level compositions that shape how people understand a product, move through its
            information architecture, and complete work.
          </p>
          <p className="leading-7 text-muted-foreground">
            A layout is not just a visual arrangement. It establishes navigation ownership, reading
            order, route structure, responsive behavior, accessibility obligations, analytics
            boundaries, and the cost of future change. Choose the smallest pattern that supports the
            real information architecture, then test it with realistic growth before committing.
          </p>
        </section>
        <section className="space-y-5" aria-labelledby="layouts-what-heading">
          <h2 id="layouts-what-heading" className="text-2xl font-semibold tracking-tight">
            What belongs here?
          </h2>
          <p className="leading-7 text-muted-foreground">
            These are complete page-shell patterns, not another component category. Use the detail
            guides to make an intentional decision; use the separate demo pages to inspect the
            production composition. Do not select a more complex shell simply because it looks more
            complete in a static mockup.
          </p>
        </section>
        <section className="space-y-5" aria-labelledby="layouts-guides-heading">
          <h2 id="layouts-guides-heading" className="text-2xl font-semibold tracking-tight">
            Layout patterns
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {layoutLinks.map(([label, href, description]) => (
              <a
                key={href}
                href={href}
                className="rounded-xl border bg-card p-5 shadow-xs transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <h3 className="font-semibold text-foreground">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </a>
            ))}
          </div>
        </section>
        <section className="space-y-5" aria-labelledby="layouts-decision-heading">
          <h2 id="layouts-decision-heading" className="text-2xl font-semibold tracking-tight">
            A practical decision path
          </h2>
          <ol className="list-decimal space-y-4 pl-5 leading-7 text-muted-foreground">
            <li>
              <strong className="text-foreground">Start with the information architecture.</strong>{' '}
              List the destinations, their relationships, expected growth, permissions, and likely
              changes. Do not start with the shell that looks best in a screenshot.
            </li>
            <li>
              <strong className="text-foreground">Choose the lowest-complexity pattern.</strong> Use
              Header Only for one clear task, Secondary for a short peer set, Sidebar for grouped
              section navigation, and Full only when both contextual layers are genuinely necessary.
            </li>
            <li>
              <strong className="text-foreground">Test the future, not only today.</strong> Add
              realistic labels, long content, localization, hidden permissions, deeper routes, and
              mobile behavior to the prototype.
            </li>
            <li>
              <strong className="text-foreground">Name the cost before approval.</strong> Identify
              who owns the navigation model, active state, responsive transformation, analytics,
              accessibility review, and future migration.
            </li>
            <li>
              <strong className="text-foreground">Record the decision.</strong> Document why this
              pattern was chosen, what would trigger a change, and which exceptions are not allowed.
            </li>
          </ol>
        </section>
        <section className="grid gap-10 lg:grid-cols-2">
          <section className="space-y-5" aria-labelledby="layouts-cost-heading">
            <h2 id="layouts-cost-heading" className="text-2xl font-semibold tracking-tight">
              Why layout changes are expensive
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>
                Routes, links, breadcrumbs, active states, and analytics may all depend on the
                navigation model.
              </li>
              <li>
                Responsive behavior is often a second information architecture, not just a smaller
                desktop layout.
              </li>
              <li>
                Accessibility review must cover landmarks, reading order, focus movement, names, and
                current-page state.
              </li>
              <li>
                Content, permissions, localization, support documentation, and training can all
                encode the old structure.
              </li>
            </ul>
          </section>
          <section className="space-y-5" aria-labelledby="layouts-risk-heading">
            <h2 id="layouts-risk-heading" className="text-2xl font-semibold tracking-tight">
              Signals that the choice needs more thought
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>
                The team is adding navigation because people cannot find content, but the underlying
                grouping is unclear.
              </li>
              <li>A flat row is already wrapping, truncating, or accumulating “More” behavior.</li>
              <li>
                A sidebar is becoming a list of team names, technical systems, or every possible
                destination.
              </li>
              <li>A second navigation layer has no clearly different job from the first.</li>
              <li>
                The proposed Full layout cannot explain why both contextual regions are necessary.
              </li>
            </ul>
          </section>
        </section>
        <section className="space-y-5" aria-labelledby="layouts-roles-heading">
          <h2 id="layouts-roles-heading" className="text-2xl font-semibold tracking-tight">
            Team review: who needs to be involved?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                'Product',
                'Clarifies the user jobs, section boundaries, expected growth, and success measures.',
              ],
              [
                'Design and content',
                'Defines hierarchy, labels, grouping, reading order, responsive behavior, and content capacity.',
              ],
              [
                'Engineering',
                'Estimates shell, route, state, data, permissions, analytics, and migration complexity.',
              ],
              [
                'Accessibility',
                'Reviews landmarks, keyboard flow, current location, focus, reflow, zoom, and assistive-technology comprehension.',
              ],
              [
                'Research or support',
                'Brings evidence about findability, terminology, common paths, and real-world confusion.',
              ],
              [
                'Operations and governance',
                'Sets ownership, review triggers, release risk, documentation, and the process for navigation changes.',
              ],
            ].map(([role, description]) => (
              <div key={role} className="rounded-xl border p-5">
                <h3 className="font-semibold text-foreground">{role}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="space-y-5" aria-labelledby="layouts-checklist-heading">
          <h2 id="layouts-checklist-heading" className="text-2xl font-semibold tracking-tight">
            Before approving a layout
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Can the team state why this pattern is needed and why a simpler pattern is not enough?
            </li>
            <li>
              Have we tested realistic content, growth, permissions, localization, deep links, and
              narrow screens?
            </li>
            <li>Does every navigation region have one clear job and a clear owner?</li>
            <li>Can keyboard and screen-reader users understand where they are and how to move?</li>
            <li>
              Have we recorded the migration cost and the signal that would cause us to revisit the
              decision?
            </li>
          </ul>
        </section>
      </div>
    </LayoutGuideShell>
  )
}

export { LayoutsExamplesPage }
