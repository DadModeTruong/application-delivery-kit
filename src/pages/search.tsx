/**
 * Focused interactive search page demo.
 *
 * This intentionally small composition demonstrates a labeled search form,
 * observable result updates, recoverable no-results messaging, and result links
 * without duplicating the decision guidance in `/examples/search`.
 */
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { SearchGuideShell } from '@/components/layout/search-guide-shell'

const results = [
  {
    title: 'Plan an accessible form review',
    description:
      'A practical checklist for labels, validation, keyboard flow, and error messaging.',
  },
  {
    title: 'Choose a page layout',
    description: 'Compare page-shell patterns and decide which navigation structure fits the work.',
  },
  {
    title: 'Prepare a usability review',
    description:
      'Organize realistic tasks, observations, and follow-up questions for a product review.',
  },
]

function SearchPage() {
  const [query, setQuery] = useState('')
  const [submittedQuery, setSubmittedQuery] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmittedQuery(query.trim())
  }

  const visibleResults = submittedQuery
    ? results.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(submittedQuery.toLowerCase()),
      )
    : results

  return (
    <SearchGuideShell activeHref="/search">
      <div className="mx-auto max-w-3xl space-y-10">
        <section className="space-y-4" aria-labelledby="search-demo-heading">
          <p className="text-sm font-medium text-muted-foreground">Interactive example</p>
          <h1 id="search-demo-heading" className="text-4xl font-semibold tracking-tight">
            Search the delivery kit
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Search a small collection of practical guidance. Submit a query, review the result
            context, and try a term that produces no results to see the recovery message.
          </p>
        </section>

        <form className="space-y-3" role="search" onSubmit={handleSubmit}>
          <label className="font-medium" htmlFor="site-search">
            Search guidance
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              className="min-h-9 min-w-0 flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              id="site-search"
              name="q"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try: accessible form"
            />
            <Button type="submit">Search</Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Use a word or phrase from a result title or description.
          </p>
        </form>

        <section aria-labelledby="results-heading" aria-live="polite" className="space-y-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b pb-3">
            <h2 id="results-heading" className="text-2xl font-semibold tracking-tight">
              {submittedQuery ? `Results for “${submittedQuery}”` : 'Suggested guidance'}
            </h2>
            <p className="text-sm text-muted-foreground">
              {visibleResults.length} {visibleResults.length === 1 ? 'result' : 'results'}
            </p>
          </div>

          {visibleResults.length > 0 ? (
            <ul className="divide-y rounded-xl border">
              {visibleResults.map(({ title, description }) => (
                <li key={title} className="p-5">
                  <a
                    className="font-semibold text-primary underline underline-offset-4"
                    href="/examples/search"
                  >
                    {title}
                  </a>
                  <p className="mt-2 leading-7 text-muted-foreground">{description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-xl border border-dashed p-6">
              <h3 className="font-semibold">No results found</h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                Try a broader phrase, check the spelling, or clear the search and browse the
                suggested guidance.
              </p>
              <Button
                className="mt-4"
                variant="outline"
                type="button"
                onPress={() => {
                  setQuery('')
                  setSubmittedQuery('')
                }}
              >
                Clear search
              </Button>
            </div>
          )}
        </section>

        <section className="space-y-5" aria-labelledby="search-conventions-heading">
          <div>
            <h2 id="search-conventions-heading" className="text-2xl font-semibold tracking-tight">
              Other search conventions
            </h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              Compare this complete collection-search experience with other practical search jobs.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [
                '/search/global',
                'Global search',
                'Find destinations and content across the product.',
              ],
              [
                '/search/filters',
                'Search with filters',
                'Narrow a meaningful collection with refinements.',
              ],
              [
                '/search/directory',
                'Directory search',
                'Find people or entities with identifying context.',
              ],
              [
                '/search/autocomplete',
                'Autocomplete lookup',
                'Choose a known option while typing.',
              ],
              ['/search/command-palette', 'Command palette', 'Navigate or run actions quickly.'],
              ['/search/advanced', 'Advanced search', 'Build a precise multi-field query.'],
              [
                '/search/table',
                'Table search',
                'Search structured records without losing context.',
              ],
            ].map(([href, title, description]) => (
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

        <p className="border-t pt-6 text-sm leading-6 text-muted-foreground">
          Looking for the recommendations behind this composition?{' '}
          <a
            className="font-medium text-primary underline underline-offset-4"
            href="/examples/search"
          >
            Read the Search guide
          </a>
          .
        </p>
      </div>
    </SearchGuideShell>
  )
}

export { SearchPage }
