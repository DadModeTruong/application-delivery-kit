/** Practical Search convention examples. */
import { SearchGuideShell } from '@/components/layout/search-guide-shell'
import { Button } from '@/components/ui/button'

type Convention =
  'global' | 'filters' | 'directory' | 'autocomplete' | 'command-palette' | 'advanced' | 'table'

const details: Record<
  Convention,
  {
    title: string
    description: string
    demonstrate: string
    use: string
    notes: string[]
    avoid: string
  }
> = {
  global: {
    title: 'Global search',
    description: 'Find destinations and content across the whole product shell.',
    demonstrate:
      'A global search entry point in the application header with a clear path to broader results.',
    use: 'Use when people need to find something without first knowing which section owns it.',
    notes: [
      'Keep the scope clear: this searches the whole product.',
      'Provide a dedicated results page for deeper scanning and filtering.',
      'Support a keyboard shortcut only when it is discoverable and consistently available.',
    ],
    avoid: 'Avoid making global search compete with a page-specific search field.',
  },
  filters: {
    title: 'Search with filters',
    description: 'Combine a text query with refinements that narrow a meaningful collection.',
    demonstrate:
      'A query, visible active filters, removable filter chips, and result context that survives responsive layout changes.',
    use: 'Use when a large collection has useful dimensions such as status, type, date, or owner.',
    notes: [
      'Show active filters near the result summary.',
      'Make every refinement removable and provide Clear all.',
      'Preserve query and filters in the URL when the result set is shareable.',
    ],
    avoid: 'Avoid adding filters that do not change the user decision or result set.',
  },
  directory: {
    title: 'Directory search',
    description: 'Find a person, team, organization, or other entity with identifying context.',
    demonstrate:
      'A people directory result that uses names as links and supporting metadata to distinguish similar entries.',
    use: 'Use when users know some identifying information but may need to compare several matching entities.',
    notes: [
      'Support the terms people actually use: name, role, email, team, or location.',
      'Expose enough metadata to distinguish duplicates.',
      'Respect permissions and explain when results are intentionally limited.',
    ],
    avoid: 'Avoid exposing sensitive attributes or relying on avatars alone to identify a person.',
  },
  autocomplete: {
    title: 'Autocomplete lookup',
    description: 'Help someone choose a known option while they type.',
    demonstrate:
      'A labeled input with a visible suggestion list, active option, and a clear distinction between selecting and submitting a search.',
    use: 'Use for choosing one known entity or destination, not for browsing a large result page.',
    notes: [
      'Support Arrow keys, Enter, Escape, and an announced active option.',
      'Keep the input value and selected value understandable.',
      'Provide a full search path when suggestions cannot satisfy the task.',
    ],
    avoid: 'Avoid using autocomplete when people need to compare or browse many results.',
  },
  'command-palette': {
    title: 'Command palette',
    description: 'Use a keyboard-first overlay to jump to destinations or run actions.',
    demonstrate:
      'A dialog with grouped navigation and action results, a shortcut hint, and an explicit close path.',
    use: 'Use for frequent users who need fast navigation or actions across the product.',
    notes: [
      'Make the trigger discoverable and provide a visible alternative.',
      'Keep navigation and actions distinguishable by grouping and labels.',
      'Return focus to the trigger when the dialog closes.',
    ],
    avoid:
      'Avoid hiding essential navigation or making the palette the only way to reach an action.',
  },
  advanced: {
    title: 'Advanced search',
    description: 'Build a structured query when simple text search is not precise enough.',
    demonstrate:
      'A multi-field search form with explicit labels, date range fields, and a summary of the applied query.',
    use: 'Use for records, logs, or professional workflows where precision matters more than speed.',
    notes: [
      'Use progressive disclosure so the basic path remains understandable.',
      'Validate relationships between fields, such as date ranges.',
      'Let people save, review, and clear complex queries when the task repeats.',
    ],
    avoid:
      'Avoid exposing database terminology or boolean logic without translating it into user language.',
  },
  table: {
    title: 'Table search',
    description: 'Search and refine rows in a data table without losing table context.',
    demonstrate:
      'A table toolbar that makes the query scope clear, keeps column headings available, and reports the visible row count.',
    use: 'Use when people need to scan, compare, or act on structured records in columns.',
    notes: [
      'Keep the table caption or heading available to assistive technology.',
      'Clarify whether search covers loaded rows or the complete server-side dataset.',
      'Choose a table/data-grid foundation based on sorting, editing, virtualization, and accessibility needs.',
    ],
    avoid:
      'Avoid building a bespoke data grid when the product needs complex keyboard, selection, editing, or virtualization behavior.',
  },
}

const inputClass =
  'min-h-9 min-w-0 flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50'

function SearchConventionPage({ variant }: { variant: Convention }) {
  const item = details[variant]
  return (
    <SearchGuideShell activeHref={`/search/${variant}`}>
      <div className="mx-auto max-w-4xl space-y-10">
        <section className="space-y-4" aria-labelledby={`${variant}-heading`}>
          <p className="text-sm font-medium text-muted-foreground">Practical Search example</p>
          <h1 id={`${variant}-heading`} className="text-4xl font-semibold tracking-tight">
            {item.title}
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">{item.description}</p>
        </section>
        <section
          className="space-y-4 rounded-xl border bg-card p-6"
          aria-labelledby={`${variant}-demo-heading`}
        >
          <h2 id={`${variant}-demo-heading`} className="text-2xl font-semibold tracking-tight">
            Example
          </h2>
          {variant === 'global' && (
            <div className="rounded-lg border p-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <strong>Application Delivery Kit</strong>
                <form
                  className="flex min-w-[16rem] flex-1 gap-2 sm:max-w-md"
                  role="search"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label className="sr-only" htmlFor="global-search">
                    Search the application
                  </label>
                  <input
                    className={inputClass}
                    id="global-search"
                    type="search"
                    placeholder="Search the application"
                  />
                  <Button type="submit">Search</Button>
                </form>
              </div>
            </div>
          )}
          {variant === 'filters' && (
            <div className="space-y-5">
              <form
                className="flex flex-col gap-3 sm:flex-row"
                role="search"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="sr-only" htmlFor="filtered-search">
                  Search documents
                </label>
                <input
                  className={inputClass}
                  id="filtered-search"
                  type="search"
                  value="accessibility"
                  readOnly
                />
                <Button type="submit">Search</Button>
              </form>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium">Filters:</span>
                <span className="rounded-full border px-3 py-1 text-sm">
                  Type: Guide{' '}
                  <button type="button" aria-label="Remove Type: Guide">
                    ×
                  </button>
                </span>
                <span className="rounded-full border px-3 py-1 text-sm">
                  Status: Published{' '}
                  <button type="button" aria-label="Remove Status: Published">
                    ×
                  </button>
                </span>
                <Button variant="ghost" size="sm" type="button">
                  Clear all
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">12 results matching “accessibility”</p>
            </div>
          )}
          {variant === 'directory' && (
            <div className="space-y-4">
              <form className="flex gap-3" role="search" onSubmit={(e) => e.preventDefault()}>
                <label className="sr-only" htmlFor="directory-search">
                  Search people
                </label>
                <input
                  className={inputClass}
                  id="directory-search"
                  type="search"
                  value="Taylor"
                  readOnly
                />
                <Button type="submit">Search</Button>
              </form>
              <ul className="divide-y rounded-lg border">
                <li className="p-4">
                  <a
                    className="font-semibold text-primary underline underline-offset-4"
                    href="/search/directory"
                  >
                    Taylor Morgan
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Product Designer · Accessibility team · Lansing
                  </p>
                </li>
                <li className="p-4">
                  <a
                    className="font-semibold text-primary underline underline-offset-4"
                    href="/search/directory"
                  >
                    Taylor Nguyen
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Engineer · Platform team · Detroit
                  </p>
                </li>
              </ul>
            </div>
          )}
          {variant === 'autocomplete' && (
            <div className="max-w-xl space-y-2">
              <label className="font-medium" htmlFor="autocomplete-search">
                Project
              </label>
              <input
                className={inputClass}
                id="autocomplete-search"
                role="combobox"
                aria-expanded="true"
                aria-controls="project-options"
                aria-activedescendant="project-1"
                value="Treasury"
                readOnly
              />
              <ul id="project-options" role="listbox" className="rounded-lg border p-1">
                <li
                  id="project-1"
                  role="option"
                  aria-selected="true"
                  className="rounded-md bg-muted px-3 py-2"
                >
                  Michigan Treasury accessibility review
                </li>
                <li role="option" aria-selected="false" className="rounded-md px-3 py-2">
                  Treasury design system
                </li>
              </ul>
            </div>
          )}
          {variant === 'command-palette' && (
            <div
              className="mx-auto max-w-lg rounded-xl border bg-background p-3 shadow-lg"
              role="dialog"
              aria-modal="true"
              aria-labelledby="palette-title"
            >
              <div className="flex items-center gap-2 border-b pb-3">
                <label className="sr-only" htmlFor="palette-search">
                  Search commands
                </label>
                <input
                  className={inputClass}
                  id="palette-search"
                  type="search"
                  value=""
                  placeholder="Search pages or actions"
                  readOnly
                />
                <kbd className="rounded border px-2 py-1 text-xs">Esc</kbd>
              </div>
              <div className="space-y-2 p-2">
                <h3
                  id="palette-title"
                  className="px-2 text-xs font-semibold uppercase text-muted-foreground"
                >
                  Navigation
                </h3>
                <a className="block rounded-md bg-muted px-3 py-2 text-sm" href="/examples/search">
                  Search examples
                </a>
                <a className="block rounded-md px-3 py-2 text-sm" href="/examples/layouts">
                  Layout examples
                </a>
                <h3 className="px-2 pt-3 text-xs font-semibold uppercase text-muted-foreground">
                  Actions
                </h3>
                <button
                  className="block w-full rounded-md px-3 py-2 text-left text-sm"
                  type="button"
                >
                  Open feedback form
                </button>
              </div>
            </div>
          )}
          {variant === 'advanced' && (
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2 sm:col-span-2">
                <label className="font-medium" htmlFor="advanced-term">
                  Search terms
                </label>
                <input
                  className={inputClass}
                  id="advanced-term"
                  type="search"
                  placeholder="e.g. keyboard accessibility"
                />
              </div>
              <div className="space-y-2">
                <label className="font-medium" htmlFor="advanced-type">
                  Content type
                </label>
                <select className={inputClass} id="advanced-type">
                  <option>Any type</option>
                  <option>Guide</option>
                  <option>Note</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-medium" htmlFor="advanced-status">
                  Status
                </label>
                <select className={inputClass} id="advanced-status">
                  <option>Any status</option>
                  <option>Published</option>
                  <option>Draft</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-medium" htmlFor="advanced-from">
                  Updated after
                </label>
                <input className={inputClass} id="advanced-from" type="date" />
              </div>
              <div className="space-y-2">
                <label className="font-medium" htmlFor="advanced-to">
                  Updated before
                </label>
                <input className={inputClass} id="advanced-to" type="date" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit">Run advanced search</Button>
              </div>
            </form>
          )}
          {variant === 'table' && (
            <div className="space-y-4">
              <form
                className="flex flex-col gap-3 sm:flex-row"
                role="search"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="sr-only" htmlFor="table-search">
                  Search records
                </label>
                <input
                  className={inputClass}
                  id="table-search"
                  type="search"
                  placeholder="Search records"
                />
                <Button type="submit">Search</Button>
              </form>
              <p className="text-sm text-muted-foreground">Showing 3 of 24 records</p>
              <div className="overflow-x-auto rounded-lg border">
                <table className="w-full min-w-[36rem] text-left text-sm">
                  <caption className="sr-only">Accessibility review records</caption>
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        Record
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        Owner
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        Status
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        Updated
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <th scope="row" className="px-4 py-3 font-medium">
                        Benefits portal
                      </th>
                      <td className="px-4 py-3">A. Rivera</td>
                      <td className="px-4 py-3">In review</td>
                      <td className="px-4 py-3">Today</td>
                    </tr>
                    <tr>
                      <th scope="row" className="px-4 py-3 font-medium">
                        Tax filing flow
                      </th>
                      <td className="px-4 py-3">J. Chen</td>
                      <td className="px-4 py-3">Published</td>
                      <td className="px-4 py-3">Yesterday</td>
                    </tr>
                    <tr>
                      <th scope="row" className="px-4 py-3 font-medium">
                        Case search
                      </th>
                      <td className="px-4 py-3">M. Patel</td>
                      <td className="px-4 py-3">Draft</td>
                      <td className="px-4 py-3">Mar 12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>
        <section className="space-y-5" aria-labelledby={`${variant}-teaching-heading`}>
          <h2 id={`${variant}-teaching-heading`} className="text-2xl font-semibold tracking-tight">
            What this demonstrates
          </h2>
          <p className="leading-7 text-muted-foreground">{item.demonstrate}</p>
          <h3 className="font-semibold">When to use it</h3>
          <p className="leading-7 text-muted-foreground">{item.use}</p>
          <h3 className="font-semibold">Implementation notes</h3>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
            {item.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <h3 className="font-semibold">Avoid</h3>
          <p className="leading-7 text-muted-foreground">{item.avoid}</p>
        </section>
        <p className="border-t pt-6 text-sm leading-6 text-muted-foreground">
          <a
            className="font-medium text-primary underline underline-offset-4"
            href="/examples/search"
          >
            Back to Search conventions
          </a>{' '}
          or{' '}
          <a className="font-medium text-primary underline underline-offset-4" href="/search">
            open the complete collection-search example
          </a>
          .
        </p>
      </div>
    </SearchGuideShell>
  )
}
export { SearchConventionPage }
