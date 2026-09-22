/**
 * Search page decision guide.
 *
 * This page explains when a search experience is appropriate and what teams
 * should decide before copying the focused `/search` composition.
 */
import { SearchGuideShell } from '@/components/layout/search-guide-shell'

const searchSections = [
  {
    title: 'When search is appropriate',
    items: [
      'The collection is too large to scan effectively.',
      'People may use different words for the same item or topic.',
      'Users often arrive with a specific item or subject in mind.',
      'The collection will grow and needs a way to remain findable.',
      'Results can be ranked, narrowed, or meaningfully grouped.',
    ],
  },
  {
    title: 'When search may not be the answer',
    items: [
      'The collection is small and easy to scan.',
      'People need to compare everything rather than locate one item.',
      'A clear hierarchy or category list would be easier to understand.',
      'Search would hide unclear labels, grouping, or information architecture.',
    ],
  },
]

function SearchExamplesPage() {
  return (
    <SearchGuideShell activeHref="/examples/search">
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby="search-heading">
          <h1 id="search-heading" className="text-4xl font-semibold tracking-tight">
            Search
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Page-level experiences that help people find a known or partially known item across a
            meaningful collection.
          </p>
          <p className="leading-7 text-muted-foreground">
            Search is more than an input. The page also establishes what can be searched, how
            results are ordered and explained, how people recover from no results, and how query
            state works across routes and devices. Choose search because people need to find, not
            simply because a collection is large.
          </p>
          <p className="leading-7 text-muted-foreground">
            The focused{' '}
            <a className="font-medium text-primary underline underline-offset-4" href="/search">
              search page demo
            </a>{' '}
            shows a deliberately small production-backed composition. Use this guide for the
            decisions and recommendations; use the demo to inspect the interaction.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="search-definition-heading">
          <h2 id="search-definition-heading" className="text-2xl font-semibold tracking-tight">
            What is a search page?
          </h2>
          <p className="leading-7 text-muted-foreground">
            A search page gives people a dedicated place to enter a query, submit it, understand the
            resulting collection, and recover when the query does not produce a useful match. It is
            different from a small autocomplete, a combobox used to choose one known option, or a
            filter that narrows an already visible list.
          </p>
        </section>

        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="search-fit-heading">
          <div className="space-y-5">
            <h2 id="search-fit-heading" className="text-2xl font-semibold tracking-tight">
              Is search needed?
            </h2>
            <div className="space-y-8">
              {searchSections.map((section) => (
                <section
                  key={section.title}
                  className="space-y-3"
                  aria-labelledby={section.title.toLowerCase().replaceAll(' ', '-')}
                >
                  <h3
                    id={section.title.toLowerCase().replaceAll(' ', '-')}
                    className="font-semibold"
                  >
                    {section.title}
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
          <section className="space-y-5" aria-labelledby="search-signals-heading">
            <h2 id="search-signals-heading" className="text-2xl font-semibold tracking-tight">
              Decision signals
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>People use different terms for the same content or record.</li>
              <li>Support or research evidence shows that browsing is not enough.</li>
              <li>The content set is growing faster than a simple category list can support.</li>
              <li>The team can describe what is searchable and what a useful result looks like.</li>
              <li>
                There is an owner for relevance, indexing quality, synonyms, and future change.
              </li>
            </ul>
          </section>
        </section>

        <section className="space-y-5" aria-labelledby="search-functionality-heading">
          <h2 id="search-functionality-heading" className="text-2xl font-semibold tracking-tight">
            Functionality to decide before implementation
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Search scope', 'Which content, records, fields, and permissions are included?'],
              [
                'Query behavior',
                'Are partial matches, spelling variations, synonyms, or natural-language queries supported?',
              ],
              [
                'Submission',
                'Does search happen on submit, while typing, or both—and what feedback is provided?',
              ],
              [
                'Result ordering',
                'Is relevance clear, or do users need a meaningful sort control?',
              ],
              [
                'Refinement',
                'Do filters add real value, and can people see and remove active filters?',
              ],
              [
                'Shareable state',
                'Can the query, filters, and page be represented in a URL and revisited later?',
              ],
            ].map(([title, description]) => (
              <div key={title} className="rounded-xl border p-5">
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <section className="space-y-5" aria-labelledby="search-states-heading">
            <h2 id="search-states-heading" className="text-2xl font-semibold tracking-tight">
              States to account for
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Initial state before a query is submitted.</li>
              <li>Loading feedback while results are being retrieved.</li>
              <li>Results found, with enough context to distinguish similar items.</li>
              <li>No results, with useful recovery suggestions.</li>
              <li>Invalid, unsupported, or failed searches with understandable next steps.</li>
              <li>Results with active filters, sorting, pagination, or incremental loading.</li>
            </ul>
          </section>
          <section className="space-y-5" aria-labelledby="search-results-heading">
            <h2 id="search-results-heading" className="text-2xl font-semibold tracking-tight">
              Results and content guidance
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Make the result title the primary link.</li>
              <li>Provide enough context to distinguish similar results.</li>
              <li>Explain or make discoverable why results are ordered as they are.</li>
              <li>Keep active filters and sort state visible and removable.</li>
              <li>Highlight matches carefully so the result remains readable.</li>
            </ul>
          </section>
        </section>

        <section className="space-y-5" aria-labelledby="search-avoid-heading">
          <h2 id="search-avoid-heading" className="text-2xl font-semibold tracking-tight">
            Things to avoid
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Adding search without evidence that people need to find rather than browse.</li>
            <li>Using search to hide unclear labels, categories, or information architecture.</li>
            <li>Returning results with no explanation of what matched or why they are ordered.</li>
            <li>Clearing the query unexpectedly or making filters difficult to remove.</li>
            <li>Showing a no-results message with no suggestion for what to do next.</li>
            <li>Using placeholder text as the only label or instruction.</li>
            <li>
              Requesting results on every keystroke without a useful reason or suitable feedback.
            </li>
            <li>
              Creating multiple search experiences that behave differently without a clear reason.
            </li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="search-accessibility-heading">
          <h2 id="search-accessibility-heading" className="text-2xl font-semibold tracking-tight">
            Accessibility and responsive behavior
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Give the search field a visible label or an equivalent accessible name and provide a
              clear submit action.
            </li>
            <li>
              Announce loading and result updates appropriately without moving focus unexpectedly
              while someone types.
            </li>
            <li>
              Keep results, filters, sorting, and pagination fully usable with the keyboard and
              expose their state in text or semantics.
            </li>
            <li>
              On narrow screens, preserve a sensible reading order and keep filters discoverable,
              operable, and removable.
            </li>
            <li>
              Make result links useful out of context and do not rely on color alone for matches,
              active filters, or status.
            </li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="search-questions-heading">
          <h2 id="search-questions-heading" className="text-2xl font-semibold tracking-tight">
            Questions to ask the team
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Product', 'What user task justifies search, and what does success look like?'],
              [
                'Design and content',
                'What should people understand before searching, and how should results be distinguished?',
              ],
              [
                'Engineering',
                'What is searchable, how is query state represented, and what happens when search fails?',
              ],
              [
                'Accessibility',
                'How are loading, result updates, filters, and focus communicated?',
              ],
              [
                'Research or support',
                'What words do people actually use, and where do they currently fail?',
              ],
              [
                'Operations and governance',
                'Who owns relevance, indexing quality, synonyms, and future changes?',
              ],
            ].map(([role, question]) => (
              <div key={role} className="rounded-xl border p-5">
                <h3 className="font-semibold text-foreground">{role}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{question}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5" aria-labelledby="search-checklist-heading">
          <h2 id="search-checklist-heading" className="text-2xl font-semibold tracking-tight">
            Before approving a search page
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Can the team explain why search is needed and why browsing or filtering alone is not
              enough?
            </li>
            <li>
              Are the searchable content, relevance expectations, permissions, and ownership clear?
            </li>
            <li>
              Have realistic queries, long labels, no results, failure, and narrow screens been
              tested?
            </li>
            <li>
              Can keyboard and screen-reader users submit a query, understand updates, and reach
              results?
            </li>
            <li>Can people share, revisit, clear, and recover from the current search state?</li>
          </ul>
        </section>
      </div>
    </SearchGuideShell>
  )
}

export { SearchExamplesPage }
