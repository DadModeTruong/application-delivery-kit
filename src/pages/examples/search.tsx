/** Search convention landing page. */
import { SearchGuideShell } from '@/components/layout/search-guide-shell'

const conventions = [
  [
    '/search',
    'Collection search',
    'Search a meaningful collection with query submission, results, and no-results recovery.',
  ],
  [
    '/search/global',
    'Global search',
    'Find destinations and content across the whole product shell.',
  ],
  [
    '/search/filters',
    'Search with filters',
    'Combine text search with visible, removable refinements.',
  ],
  ['/search/directory', 'Directory search', 'Find people or entities with identifying context.'],
  ['/search/autocomplete', 'Autocomplete lookup', 'Choose a known option while typing.'],
  [
    '/search/command-palette',
    'Command palette',
    'Navigate or run actions with a keyboard-first overlay.',
  ],
  ['/search/advanced', 'Advanced search', 'Build a precise query across multiple fields.'],
  ['/search/table', 'Table search', 'Search structured records while keeping table context.'],
] as const

function SearchExamplesPage() {
  return (
    <SearchGuideShell activeHref="/examples/search">
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby="search-heading">
          <h1 id="search-heading" className="text-4xl font-semibold tracking-tight">
            Search
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Practical search conventions for helping people find, choose, navigate, and refine
            information.
          </p>
          <p className="leading-7 text-muted-foreground">
            Search is not one component. The right convention depends on whether someone is finding
            an unknown item, choosing a known value, narrowing a collection, navigating quickly, or
            constructing a precise query. These examples show complete compositions rather than
            isolated visual states.
          </p>
        </section>
        <section className="space-y-5" aria-labelledby="conventions-heading">
          <div>
            <h2 id="conventions-heading" className="text-2xl font-semibold tracking-tight">
              Search conventions
            </h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              Choose the example that matches the user’s job. Each page includes the practical
              composition and teaching guidance.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {conventions.map(([href, title, description]) => (
              <a
                key={href}
                href={href}
                className="rounded-xl border bg-card p-5 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </a>
            ))}
          </div>
        </section>
        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="choose-search-heading">
          <div className="space-y-5">
            <h2 id="choose-search-heading" className="text-2xl font-semibold tracking-tight">
              Choose by user intent
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>
                <strong className="text-foreground">Find:</strong> use collection, global,
                directory, or filtered search.
              </li>
              <li>
                <strong className="text-foreground">Choose:</strong> use autocomplete when the goal
                is one known value.
              </li>
              <li>
                <strong className="text-foreground">Navigate or act:</strong> use a command palette
                for fast, repeatable actions.
              </li>
              <li>
                <strong className="text-foreground">Specify:</strong> use advanced search when
                precision requires multiple fields.
              </li>
              <li>
                <strong className="text-foreground">Compare or manage:</strong> use table search
                when row and column context matters.
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight">
              Questions before implementation
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>
                Is the user finding, choosing, navigating, filtering, or constructing a query?
              </li>
              <li>What collection or scope is being searched?</li>
              <li>Does the result need comparison, selection, or immediate action?</li>
              <li>
                Which states, permissions, URL behavior, and accessibility announcements are
                required?
              </li>
              <li>Who owns relevance, synonyms, indexing, and future changes?</li>
            </ul>
          </div>
        </section>
        <section className="space-y-5" aria-labelledby="table-guidance-heading">
          <h2 id="table-guidance-heading" className="text-2xl font-semibold tracking-tight">
            Table search is a separate foundation decision
          </h2>
          <p className="leading-7 text-muted-foreground">
            The table example demonstrates the search convention, not a final data-grid choice. A
            semantic table with React Aria/shadcn primitives can be the right fit for basic
            read-only data. AG Grid becomes attractive when the product needs advanced sorting,
            selection, editing, virtualization, pinned columns, or complex keyboard behavior. Decide
            that foundation against real requirements before standardizing it in the kit.
          </p>
        </section>
        <section className="space-y-5" aria-labelledby="avoid-heading">
          <h2 id="avoid-heading" className="text-2xl font-semibold tracking-tight">
            Avoid
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Using search to compensate for unclear labels, grouping, or information architecture.
            </li>
            <li>
              Calling a combobox, filter, command palette, and full search page the same pattern.
            </li>
            <li>Adding filters or advanced fields without evidence that they improve the task.</li>
            <li>
              Building a bespoke data grid before deciding whether the product needs a grid at all.
            </li>
          </ul>
        </section>
      </div>
    </SearchGuideShell>
  )
}
export { SearchExamplesPage }
