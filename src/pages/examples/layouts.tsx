/** Overview of the complete page-shell examples in the Layouts area. */
import { LayoutGuideShell } from '@/components/layout/layout-guide-shell'

const layoutLinks = [
  ['Header Only', '/examples/layouts/header-only', 'A focused page with primary navigation, one Main region, and a Footer.'],
  ['Secondary', '/examples/layouts/secondary', 'A page with a second row of section-level navigation.'],
  ['Sidebar', '/examples/layouts/sidebar', 'A page with a persistent map of related content beside Main.'],
  ['Full', '/examples/layouts/full', 'A page combining section navigation, a Sidebar, and Main.'],
] as const

function LayoutsExamplesPage() {
  return (
    <LayoutGuideShell activeHref="/examples/layouts">
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby="layouts-heading">
          <h1 id="layouts-heading" className="text-4xl font-semibold tracking-tight">Layouts</h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Page-level compositions that show how the Application Delivery Kit’s layout primitives work together.
          </p>
        </section>
        <section className="space-y-5" aria-labelledby="layouts-what-heading">
          <h2 id="layouts-what-heading" className="text-2xl font-semibold tracking-tight">What belongs here?</h2>
          <p className="leading-7 text-muted-foreground">
            Layouts are complete page-shell patterns, not another component category. Use these guides to choose the right navigation model before composing a page. Each detail page covers the pattern’s purpose, trade-offs, design and accessibility considerations, responsive behavior, and an interactive demo.
          </p>
        </section>
        <section className="space-y-5" aria-labelledby="layouts-guides-heading">
          <h2 id="layouts-guides-heading" className="text-2xl font-semibold tracking-tight">Layout patterns</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {layoutLinks.map(([label, href, description]) => (
              <a key={href} href={href} className="rounded-xl border bg-card p-5 shadow-xs transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <h3 className="font-semibold text-foreground">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </a>
            ))}
          </div>
        </section>
        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="layouts-decisions-heading">
          <div className="space-y-5">
            <h2 id="layouts-decisions-heading" className="text-2xl font-semibold tracking-tight">Choose a layout by need</h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Start with Header Only when one clear page task is enough.</li>
              <li>Add Secondary when people move among a small set of sibling pages.</li>
              <li>Use Sidebar when a section needs a visible map of deeper content.</li>
              <li>Use Full only when both section navigation and a deeper sidebar are necessary.</li>
            </ul>
          </div>
          <div className="space-y-5" aria-labelledby="layouts-principles-heading">
            <h2 id="layouts-principles-heading" className="text-2xl font-semibold tracking-tight">Shared principles</h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Choose the smallest navigation model that supports the information architecture.</li>
              <li>Keep Main first in the reading order when a layout collapses.</li>
              <li>Use the detail page for guidance and the demo page for hands-on inspection.</li>
            </ul>
          </div>
        </section>
      </div>
    </LayoutGuideShell>
  )
}

export { LayoutsExamplesPage }
