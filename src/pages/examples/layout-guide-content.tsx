/** Shared content renderer for a single Layouts example detail page. */
import { ExternalLink } from 'lucide-react'
import { LayoutGuideShell } from '@/components/layout/layout-guide-shell'

type LayoutGuide = {
  name: string
  summary: string
  what: string
  use: string[]
  avoid: string[]
  decisionSignals: string[]
  tradeoffs: string[]
  design: string[]
  teamQuestions: string[]
  changeCost: string
  futureProofing: string[]
  accessibility: string[]
  responsive: string
  demoHref: string
}

const guides: Record<string, LayoutGuide> = {
  'header-only': {
    name: 'Header Only',
    summary: 'A focused page with primary navigation, one Main region, and a Footer.',
    what: 'Header Only is the smallest complete page shell. Header owns application-wide destinations, Main owns one clear task, and Footer provides supporting information without adding another navigation layer.',
    use: [
      'Landing pages, focused workflows, and one-purpose task pages.',
      'Simple dashboards or articles where the page itself provides enough orientation.',
      'Early product areas where the information architecture is still intentionally small.',
    ],
    avoid: [
      'Sections with many related pages that need a visible map.',
      'Adding extra navigation only to fill empty space.',
      'Hiding important task navigation in the global Header.',
    ],
    decisionSignals: [
      'People can describe the page’s primary job in one sentence.',
      'Most users arrive from a known global destination or a direct link.',
      'The page does not need persistent context about sibling or child pages.',
    ],
    tradeoffs: [
      'Provides the most room for Main and the least navigation overhead.',
      'Places more responsibility on page headings, breadcrumbs, content structure, or task flow to provide context.',
      'Can become difficult to extend if teams keep adding page-specific navigation into the Header.',
    ],
    design: [
      'Give Main one clear heading, purpose, and next step.',
      'Keep the Header, Main, and Footer aligned to the same content width.',
      'Let content determine page height instead of forcing a fixed viewport.',
      'Treat a new navigation layer as an information-architecture decision, not a spacing fix.',
    ],
    teamQuestions: [
      'Product: What is the one job this page must support?',
      'Design/content: How will a person understand where they are without a sidebar or section row?',
      'Engineering: Can the page remain coherent if the section grows by five more destinations?',
      'Accessibility: Is the reading order still clear when the global navigation collapses?',
    ],
    changeCost:
      'Header Only is usually the least expensive starting point, but it has a hidden failure mode: teams often add ad hoc links, tabs, breadcrumbs, or sticky controls until the page has an accidental navigation system. Retrofitting a consistent Sidebar or Secondary pattern later can require route changes, content reorganization, analytics updates, and new responsive behavior.',
    futureProofing: [
      'Record the intended information-architecture boundary before shipping.',
      'Keep page-level navigation out of the global Header unless it is truly global.',
      'If growth is likely, reserve a clear route namespace and test the page with representative future content.',
    ],
    accessibility: [
      'Keep one clear h1 in Main.',
      'Include a skip link to the Main landmark.',
      'Use a named primary navigation landmark and visible focus styles.',
      'Check that the narrow layout does not require horizontal scrolling.',
      'Do not make the lack of a sidebar carry meaning that only visual users can perceive.',
    ],
    responsive:
      'Header navigation moves into the mobile menu at narrow widths. Main remains the primary reading region and content groups stack until each has enough room to sit side by side. The layout should not need a second mobile-only navigation system.',
    demoHref: '/layouts/header-only',
  },
  secondary: {
    name: 'Secondary',
    summary: 'A page with a second row of section-level navigation above Main.',
    what: 'Secondary adds a short, flat set of sibling links below Header. It gives a small section its own context while leaving Main focused on the selected page.',
    use: [
      'Small documentation sections or product areas.',
      'A handful of sibling pages people visit frequently.',
      'Sections where links have the same level of importance and can be understood as one set.',
    ],
    avoid: [
      'Long lists, several levels of grouping, or destinations with very different importance.',
      'A section with only one destination.',
      'Replacing a deeper information architecture that needs a Sidebar.',
    ],
    decisionSignals: [
      'The section has a stable, short list of peer destinations.',
      'People benefit from switching between peers without leaving the section context.',
      'A flat row remains understandable without groups or explanatory labels.',
    ],
    tradeoffs: [
      'Makes sibling destinations visible and easy to scan.',
      'Consumes horizontal and vertical space and can compete with the page heading.',
      'Does not scale well when labels, locales, permissions, or destination count grow.',
    ],
    design: [
      'Keep the link set short and mutually related.',
      'Separate the section navigation from the page heading.',
      'Make the current page obvious without relying on color alone.',
      'Decide whether the row scrolls, wraps, or collapses before content and labels become too long.',
    ],
    teamQuestions: [
      'Product: Are these destinations truly peers, or do they have a hierarchy?',
      'Design/content: Can each label remain short, specific, and understandable out of context?',
      'Engineering: What happens when permissions or feature flags remove one or more links?',
      'Accessibility: How will current location and keyboard movement be communicated?',
    ],
    changeCost:
      'Secondary is inexpensive while the section remains small and stable. It becomes costly when teams use it as a temporary solution for a growing hierarchy: converting a flat row into grouped navigation later can affect URLs, active-state rules, mobile navigation, localization, and every page’s shared shell.',
    futureProofing: [
      'Set a maximum number or width budget for the row.',
      'Define how the pattern behaves when links wrap, overflow, or disappear.',
      'If the information architecture already has levels, choose Sidebar instead of hoping a flat row will scale.',
    ],
    accessibility: [
      'Give the secondary navigation its own accessible name.',
      'Use real links and aria-current="page" for the current location.',
      'Preserve logical link order and visible focus in the mobile menu.',
      'Do not make selected state depend on color or position alone.',
      'Ensure the section row does not replace the page’s h1 or landmark structure.',
    ],
    responsive:
      'The section links move into the mobile menu on narrow screens. Main becomes one vertical flow, while the desktop row remains above Main only when there is enough width. Decide whether the mobile menu needs a distinct section heading so the links remain understandable.',
    demoHref: '/layouts/secondary',
  },
  sidebar: {
    name: 'Sidebar',
    summary: 'A page with a persistent map of related content beside Main.',
    what: 'Sidebar places grouped section navigation beside the content. It keeps the information architecture visible while Main provides the space for reading or completing work.',
    use: [
      'Documentation, settings, account areas, and other multi-page sections.',
      'Groups with enough content that people need orientation.',
      'Navigation that benefits from visible grouping and a persistent sense of place.',
    ],
    avoid: [
      'Simple pages where a Sidebar adds weight without helping.',
      'Unrelated or temporary links.',
      'A small set of sibling links better served by Secondary.',
      'Layouts where Main becomes too narrow for the content’s actual reading or task needs.',
    ],
    decisionSignals: [
      'People need to understand the section structure while working in Main.',
      'Destinations have meaningful groups or levels.',
      'The section is likely to grow beyond a short list of peers.',
    ],
    tradeoffs: [
      'Makes hierarchy and current location visible on wide screens.',
      'Uses horizontal space and requires careful mobile transformation.',
      'Creates ongoing responsibilities for grouping, active state, permissions, and long-label handling.',
    ],
    design: [
      'Group links around people’s mental model, not team ownership.',
      'Use short labels and leave Main enough room to breathe.',
      'Keep the current page and group boundaries easy to distinguish.',
      'Decide which links are persistent section navigation and which belong inside the page content.',
    ],
    teamQuestions: [
      'Product: What section boundary does this navigation represent?',
      'Design/content: Can someone predict what belongs inside each group?',
      'Engineering: Who owns the navigation tree, active state, permissions, and route changes?',
      'Accessibility: How will the sidebar become usable when it moves into the mobile menu?',
      'Operations: How will a large navigation tree be tested when roles and permissions differ?',
    ],
    changeCost:
      'Sidebar introduces more structure than Header Only or Secondary, so the initial design and implementation cost is higher. That investment can reduce future churn when the section grows, but only if the information architecture is sound. A poorly grouped sidebar is expensive to repair because its labels, routes, active-state logic, analytics, permissions, content links, and responsive behavior become coupled.',
    futureProofing: [
      'Define group ownership and a process for adding or retiring destinations.',
      'Test with long labels, translated labels, hidden permissions, and deep links.',
      'Keep the sidebar data-driven so route and active-state changes do not require page-by-page markup edits.',
      'Establish a threshold for when a group needs another pattern instead of indefinite growth.',
    ],
    accessibility: [
      'Give Sidebar a distinct accessible name.',
      'Use meaningful group labels and aria-current="page".',
      'Keep Main first in reading order and verify the mobile-menu hierarchy.',
      'Ensure grouped links remain understandable when visual indentation is removed.',
      'Verify keyboard navigation, focus visibility, and the relationship between the sidebar and current page.',
    ],
    responsive:
      'Sidebar moves into the mobile menu at narrow widths. Main stays first in the reading order; on wider screens the Sidebar shares the capped PageBody width with Main. Verify that opening the mobile navigation does not create duplicate or conflicting navigation landmarks.',
    demoHref: '/layouts/sidebar',
  },
  full: {
    name: 'Full',
    summary: 'A page combining section navigation, a Sidebar, and Main.',
    what: 'Full combines the two contextual navigation layers. Secondary gives the wider section map; Sidebar gives the deeper map; Main stays focused on the selected task or document.',
    use: [
      'Large documentation areas and complex products.',
      'Experiences that genuinely need both sibling and nested navigation.',
      'Information architectures where each layer has a distinct job and users benefit from both views.',
    ],
    avoid: [
      'When one navigation layer is enough.',
      'Using extra navigation to make a page feel complete.',
      'Layouts where the combined chrome leaves Main too narrow.',
      'Teams that do not yet have the capacity to govern two navigation systems.',
    ],
    decisionSignals: [
      'Users need both peer-level movement and deeper within-section orientation.',
      'The hierarchy is stable enough to explain in two different navigation layers.',
      'The product can support the content, analytics, accessibility, and engineering cost of the combined shell.',
    ],
    tradeoffs: [
      'Provides the strongest orientation for complex information architectures.',
      'Has the greatest visual, cognitive, responsive, and maintenance cost.',
      'Can make every page feel like an administration interface even when the task is simple.',
    ],
    design: [
      'Give each navigation layer a different job and label.',
      'Keep labels and current-page treatment consistent across layers.',
      'Test with realistic content because this layout becomes busy quickly.',
      'Protect Main’s width and hierarchy; navigation should support the task rather than compete with it.',
    ],
    teamQuestions: [
      'Product: What user problem requires both navigation layers?',
      'Design/content: Can a person explain the difference between the two navigation regions?',
      'Engineering: Are both layers driven from a reliable source of truth?',
      'Accessibility: Are landmarks, focus movement, current state, and mobile grouping unambiguous?',
      'Operations: Who owns changes across both trees, and how will regression coverage be maintained?',
    ],
    changeCost:
      'Full has the highest upfront and ongoing cost. It is justified when the information architecture genuinely needs two contextual layers, but it is a poor default. Removing one layer later can require route and content changes; adding the second layer later can require shell refactoring, responsive redesign, analytics migration, accessibility re-review, and broad regression testing. Treat this as an architectural commitment, not a visual preset.',
    futureProofing: [
      'Document the distinct responsibility of each navigation layer before implementation.',
      'Create a governance owner and review trigger for navigation changes.',
      'Model the route tree, permissions, labels, active states, and mobile behavior together.',
      'Prototype with realistic depth, long labels, localization, and the widest expected content before committing.',
      'Define the signal that would justify removing a layer rather than continuing to add exceptions.',
    ],
    accessibility: [
      'Give Header, Secondary, and Sidebar distinct names.',
      'Keep one clear h1 in Main and preserve Main-first reading order.',
      'Verify skip-link behavior, keyboard focus, current-page state, and mobile hierarchy.',
      'Ensure users are not forced to traverse duplicate destinations unnecessarily.',
      'Check that the combined landmarks remain useful to screen-reader users, not merely technically valid.',
    ],
    responsive:
      'Both contextual navigation regions move into the mobile menu on narrow screens. On wide screens they occupy their separate positions while Main uses the remaining width. Test the mobile menu as a complete information architecture, not just as a collapsed desktop layout.',
    demoHref: '/layouts/full',
  },
}

function LayoutDetailPage({ slug }: { slug: keyof typeof guides }) {
  const guide = guides[slug]
  return (
    <LayoutGuideShell activeHref={`/examples/layouts/${slug}`}>
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby={`${slug}-heading`}>
          <h1 id={`${slug}-heading`} className="text-4xl font-semibold tracking-tight">
            {guide.name}
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">{guide.summary}</p>
        </section>
        <section className="space-y-5" aria-labelledby={`${slug}-what-heading`}>
          <h2 id={`${slug}-what-heading`} className="text-2xl font-semibold tracking-tight">
            What is this layout?
          </h2>
          <p className="leading-7 text-muted-foreground">{guide.what}</p>
          <div className="space-y-4 pt-2">
            <h3 className="text-xl font-semibold tracking-tight">Example</h3>
            <p className="leading-7 text-muted-foreground">
              Open the interactive demo in a separate tab to inspect the live layout, resize it, and
              try its navigation.
            </p>
            <a
              href={guide.demoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-4 py-2 font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Open {guide.name} demo <ExternalLink className="size-4" aria-hidden="true" />
              <span className="sr-only"> (opens in new window)</span>
            </a>
          </div>
        </section>
        <section className="grid gap-10 lg:grid-cols-2">
          <GuidanceSection id={`${slug}-use-heading`} title="When to use it" items={guide.use} />
          <GuidanceSection
            id={`${slug}-avoid-heading`}
            title="When not to use it"
            items={guide.avoid}
          />
        </section>
        <GuidanceSection
          id={`${slug}-signals-heading`}
          title="Decision signals"
          items={guide.decisionSignals}
        />
        <GuidanceSection
          id={`${slug}-tradeoffs-heading`}
          title="Trade-offs"
          items={guide.tradeoffs}
        />
        <GuidanceSection
          id={`${slug}-design-heading`}
          title="Design and architecture considerations"
          items={guide.design}
        />
        <GuidanceSection
          id={`${slug}-team-heading`}
          title="Questions for the team"
          items={guide.teamQuestions}
        />
        <section className="space-y-5" aria-labelledby={`${slug}-cost-heading`}>
          <h2 id={`${slug}-cost-heading`} className="text-2xl font-semibold tracking-tight">
            Change cost and future-proofing
          </h2>
          <p className="leading-7 text-muted-foreground">{guide.changeCost}</p>
          <h3 className="text-xl font-semibold tracking-tight">Before committing</h3>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            {guide.futureProofing.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <GuidanceSection
          id={`${slug}-accessibility-heading`}
          title="Accessibility considerations"
          items={guide.accessibility}
        />
        <section className="space-y-5" aria-labelledby={`${slug}-responsive-heading`}>
          <h2 id={`${slug}-responsive-heading`} className="text-2xl font-semibold tracking-tight">
            Responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">{guide.responsive}</p>
        </section>
      </div>
    </LayoutGuideShell>
  )
}

function GuidanceSection({ id, title, items }: { id: string; title: string; items: string[] }) {
  return (
    <section className="space-y-5" aria-labelledby={id}>
      <h2 id={id} className="text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export { LayoutDetailPage }
