/** Shared content renderer for a single Layouts example detail page. */
import { ExternalLink } from 'lucide-react'
import { LayoutGuideShell } from '@/components/layout/layout-guide-shell'

type LayoutGuide = {
  name: string
  summary: string
  what: string
  use: string[]
  avoid: string[]
  design: string[]
  accessibility: string[]
  responsive: string
  demoHref: string
}

const guides: Record<string, LayoutGuide> = {
  'header-only': {
    name: 'Header Only', summary: 'A focused page with primary navigation, one Main region, and a Footer.',
    what: 'Header Only is the smallest complete page shell. Header owns application-wide destinations, Main owns one clear task, and Footer provides supporting information without adding another navigation layer.',
    use: ['Landing pages and focused workflows.', 'Simple dashboards or article pages.', 'Pages where primary navigation is enough context.'],
    avoid: ['Sections with many related pages that need a visible map.', 'Adding extra navigation only to fill empty space.', 'Hiding important task navigation in the global Header.'],
    design: ['Give Main one clear heading and next step.', 'Keep the Header, Main, and Footer aligned to the same content width.', 'Let content determine page height instead of forcing a fixed viewport.'],
    accessibility: ['Keep one clear h1 in Main.', 'Include a skip link to the Main landmark.', 'Use a named primary navigation landmark and visible focus styles.', 'Check that the narrow layout does not require horizontal scrolling.'],
    responsive: 'Header navigation moves into the mobile menu at narrow widths. Main remains the primary reading region and content groups stack until each has enough room to sit side by side.',
    demoHref: '/layouts/header-only',
  },
  secondary: {
    name: 'Secondary', summary: 'A page with a second row of section-level navigation above Main.',
    what: 'Secondary adds a short, flat set of sibling links below Header. It gives a small section its own context while leaving Main focused on the selected page.',
    use: ['Small documentation sections or product areas.', 'A handful of sibling pages people visit frequently.', 'Sections where links have the same level of importance.'],
    avoid: ['Long lists or several levels of grouping.', 'A section with only one destination.', 'Replacing a deeper information architecture that needs a Sidebar.'],
    design: ['Keep the link set short and mutually related.', 'Separate the section navigation from the page heading.', 'Make the current page obvious without relying on color alone.'],
    accessibility: ['Give the secondary navigation its own accessible name.', 'Use real links and aria-current="page" for the current location.', 'Preserve logical link order and visible focus in the mobile menu.'],
    responsive: 'The section links move into the mobile menu on narrow screens. Main becomes one vertical flow, while the desktop row remains above Main only when there is enough width.',
    demoHref: '/layouts/secondary',
  },
  sidebar: {
    name: 'Sidebar', summary: 'A page with a persistent map of related content beside Main.',
    what: 'Sidebar places grouped section navigation beside the content. It keeps the information architecture visible while Main provides the space for reading or completing work.',
    use: ['Documentation, settings, account areas, and other multi-page sections.', 'Groups with enough content that people need orientation.', 'Navigation that benefits from visible grouping.'],
    avoid: ['Simple pages where a Sidebar adds weight without helping.', 'Unrelated or temporary links.', 'A small set of sibling links better served by Secondary.'],
    design: ['Group links around people’s mental model.', 'Use short labels and leave Main enough room to breathe.', 'Keep the current page and group boundaries easy to distinguish.'],
    accessibility: ['Give Sidebar a distinct accessible name.', 'Use meaningful group labels and aria-current="page".', 'Keep Main first in reading order and verify the mobile-menu hierarchy.'],
    responsive: 'Sidebar moves into the mobile menu at narrow widths. Main stays first in the reading order; on wider screens the Sidebar shares the capped PageBody width with Main.',
    demoHref: '/layouts/sidebar',
  },
  full: {
    name: 'Full', summary: 'A page combining section navigation, a Sidebar, and Main.',
    what: 'Full combines the two contextual navigation layers. Secondary gives the wider section map; Sidebar gives the deeper map; Main stays focused on the selected task or document.',
    use: ['Large documentation areas and complex products.', 'Experiences that genuinely need both sibling and nested navigation.', 'Information architectures where each layer has a distinct job.'],
    avoid: ['When one navigation layer is enough.', 'Using extra navigation to make a page feel complete.', 'Layouts where the combined chrome leaves Main too narrow.'],
    design: ['Give each navigation layer a different job and label.', 'Keep labels and current-page treatment consistent across layers.', 'Test with realistic content because this layout becomes busy quickly.'],
    accessibility: ['Give Header, Secondary, and Sidebar distinct names.', 'Keep one clear h1 in Main and preserve Main-first reading order.', 'Verify skip-link behavior, keyboard focus, and mobile hierarchy.'],
    responsive: 'Both contextual navigation regions move into the mobile menu on narrow screens. On wide screens they occupy their separate positions while Main uses the remaining width.',
    demoHref: '/layouts/full',
  },
}

function LayoutDetailPage({ slug }: { slug: keyof typeof guides }) {
  const guide = guides[slug]
  return (
    <LayoutGuideShell activeHref={`/examples/layouts/${slug}`}>
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby={`${slug}-heading`}>
          <h1 id={`${slug}-heading`} className="text-4xl font-semibold tracking-tight">{guide.name}</h1>
          <p className="text-xl leading-8 text-muted-foreground">{guide.summary}</p>
        </section>
        <section className="space-y-5" aria-labelledby={`${slug}-what-heading`}>
          <h2 id={`${slug}-what-heading`} className="text-2xl font-semibold tracking-tight">What is this layout?</h2>
          <p className="leading-7 text-muted-foreground">{guide.what}</p>
        </section>
        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby={`${slug}-use-heading`}>
          <div className="space-y-5"><h2 id={`${slug}-use-heading`} className="text-2xl font-semibold tracking-tight">When to use it</h2><ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">{guide.use.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="space-y-5"><h2 id={`${slug}-avoid-heading`} className="text-2xl font-semibold tracking-tight">When not to use it</h2><ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">{guide.avoid.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>
        <GuidanceSection id={`${slug}-design-heading`} title="Design considerations" items={guide.design} />
        <GuidanceSection id={`${slug}-accessibility-heading`} title="Accessibility considerations" items={guide.accessibility} />
        <section className="space-y-5" aria-labelledby={`${slug}-responsive-heading`}><h2 id={`${slug}-responsive-heading`} className="text-2xl font-semibold tracking-tight">Responsive behavior</h2><p className="leading-7 text-muted-foreground">{guide.responsive}</p></section>
        <section className="space-y-5" aria-labelledby={`${slug}-example-heading`}>
          <h2 id={`${slug}-example-heading`} className="text-2xl font-semibold tracking-tight">Example</h2>
          <p className="leading-7 text-muted-foreground">Open the interactive demo in a separate tab to inspect the live layout, resize it, and try its navigation.</p>
          <a href={guide.demoHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border px-4 py-2 font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Open {guide.name} demo <ExternalLink className="size-4" aria-hidden="true" /><span className="sr-only"> (opens in new window)</span></a>
        </section>
      </div>
    </LayoutGuideShell>
  )
}

function GuidanceSection({ id, title, items }: { id: string; title: string; items: string[] }) {
  return <section className="space-y-5" aria-labelledby={id}><h2 id={id} className="text-2xl font-semibold tracking-tight">{title}</h2><ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">{items.map((item) => <li key={item}>{item}</li>)}</ul></section>
}

export { LayoutDetailPage }
