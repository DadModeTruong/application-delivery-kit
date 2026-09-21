/** Focused interactive previews for the four Layouts example pages. */
import { Home, Palette, Puzzle, Rocket } from 'lucide-react'
import { primaryNav, footerLinks } from '@/config/site-navigation'
import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { TabNavigation } from '@/components/layout/tab-navigation'
import { Sidebar } from '@/components/layout/sidebar'
import { Columns } from '@/components/layout/columns'
import type { NavGroup, NavLeaf } from '@/components/layout/types'
import { DemoCard } from '@/pages/demos/demo-card'

type LayoutDemoProps = { variant: 'header-only' | 'secondary' | 'sidebar' | 'full' }

type DemoGuidance = {
  name: string
  purpose: string
  inspect: string[]
  risk: string
}

const guidance: Record<LayoutDemoProps['variant'], DemoGuidance> = {
  'header-only': {
    name: 'Header Only',
    purpose: 'Inspect the smallest complete shell and confirm that Main can provide enough orientation without contextual navigation.',
    inspect: ['Does the page still make sense from a deep link?', 'Would adding more destinations make the Header carry too much product structure?', 'Does the narrow menu preserve the same global navigation without adding a second system?'],
    risk: 'The common failure mode is quietly accumulating page-specific links until a new navigation pattern is needed.',
  },
  secondary: {
    name: 'Secondary',
    purpose: 'Inspect a short set of peer destinations and verify that the row remains understandable, usable, and distinguishable from primary navigation.',
    inspect: ['Are these links truly peers?', 'What happens when labels grow, links disappear, or the row no longer fits?', 'Does the mobile version preserve the section relationship and current page?'],
    risk: 'The common failure mode is using a flat row for a hierarchy that needs groups or a Sidebar.',
  },
  sidebar: {
    name: 'Sidebar',
    purpose: 'Inspect a grouped section map beside Main and test whether the navigation helps orientation without stealing too much content width.',
    inspect: ['Can people predict what belongs in each group?', 'Does Main retain enough width for its real content?', 'Does the mobile transformation preserve hierarchy without duplicate landmarks?'],
    risk: 'The common failure mode is turning the Sidebar into an ungoverned list of every possible destination.',
  },
  full: {
    name: 'Full',
    purpose: 'Inspect the combined shell and verify that the section row and Sidebar have genuinely different jobs.',
    inspect: ['Can the team explain why both contextual navigation layers are required?', 'Does Main remain the visual and task priority?', 'Does the mobile menu remain understandable when both navigation trees move into it?'],
    risk: 'The common failure mode is paying the highest maintenance cost for navigation that duplicates itself or is not needed.',
  },
}

const labels = { 'header-only': 'Header Only', secondary: 'Secondary', sidebar: 'Sidebar', full: 'Full' } as const

function LayoutDemo({ variant }: LayoutDemoProps) {
  const hasTabs = variant === 'secondary' || variant === 'full'
  const hasSidebar = variant === 'sidebar' || variant === 'full'
  const tabNavigation: NavLeaf[] = [
    { href: `/layouts/${variant}`, label: 'Overview' },
    { href: `/layouts/${variant}/install`, label: 'Install' },
    { href: `/layouts/${variant}/theming`, label: 'Theming' },
  ]
  const sidebarNav: (NavLeaf | NavGroup)[] = [
    { href: `/layouts/${variant}`, label: 'Overview', icon: Home },
    { label: 'Guidance', items: [{ href: `/layouts/${variant}/install`, label: 'Install', icon: Rocket }, { href: `/layouts/${variant}/theming`, label: 'Theming', icon: Palette }] },
    { label: 'More', items: [{ href: `/layouts/${variant}/parts`, label: 'Parts', icon: Puzzle }] },
  ]
  return (
    <LayoutProvider tabNavigation={hasTabs ? tabNavigation : undefined} tabNavigationLabel="Demo sections" sidebarNav={hasSidebar ? sidebarNav : undefined} sidebarNavLabel="Demo pages" activeHref={`/layouts/${variant}`}>
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        {hasTabs && <TabNavigation aria-label="Demo sections" />}
        {hasSidebar ? <PageBody><Sidebar aria-label="Demo pages" /><DemoMain variant={variant} /></PageBody> : <DemoMain variant={variant} />}
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

function DemoMain({ variant }: LayoutDemoProps) {
  const demo = guidance[variant]
  return <Main size={variant === 'header-only' || variant === 'secondary' ? undefined : 'full'}>
    <div className="space-y-10">
      <section className="space-y-3" aria-labelledby={`${variant}-demo-heading`}>
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Interactive demo</p>
        <h1 id={`${variant}-demo-heading`} className="text-4xl font-semibold tracking-tight">{labels[variant]}</h1>
        <p className="text-xl leading-8 text-muted-foreground">{demo.purpose}</p>
      </section>
      <section className="space-y-5" aria-labelledby={`${variant}-inspect-heading`}>
        <h2 id={`${variant}-inspect-heading`} className="text-2xl font-semibold tracking-tight">What to inspect</h2>
        <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">{demo.inspect.map((item) => <li key={item}>{item}</li>)}</ul>
        <p className="leading-7 text-muted-foreground"><strong className="text-foreground">Watch for:</strong> {demo.risk}</p>
        <p className="leading-7 text-muted-foreground">For the full decision guidance, open the <a className="underline underline-offset-4" href={`/examples/layouts/${variant}`}>detail guide</a>.</p>
      </section>
      <section className="space-y-4" aria-labelledby={`${variant}-demo-content-heading`}>
        <h2 id={`${variant}-demo-content-heading`} className="text-2xl font-semibold tracking-tight">Demo content</h2>
        <p className="leading-7 text-muted-foreground">This content is intentionally simple. Replace it with representative production content when evaluating width, hierarchy, navigation density, reading order, and responsive behavior.</p>
        <Columns base={1} sm={2} lg={3}>{Array.from({ length: 6 }, (_, i) => <DemoCard key={i} title={`Content ${i + 1}`} />)}</Columns>
      </section>
    </div>
  </Main>
}

export { LayoutDemo }
