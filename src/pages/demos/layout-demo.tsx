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
  return <Main size={variant === 'header-only' || variant === 'secondary' ? undefined : 'full'}>
    <div className="space-y-8">
      <section className="space-y-3" aria-labelledby={`${variant}-demo-heading`}>
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Interactive demo</p>
        <h1 id={`${variant}-demo-heading`} className="text-4xl font-semibold tracking-tight">{labels[variant]}</h1>
        <p className="text-xl leading-8 text-muted-foreground">Resize this page, move through the navigation, and inspect how the shell gives Main its space.</p>
      </section>
      <section className="space-y-4" aria-labelledby={`${variant}-demo-content-heading`}>
        <h2 id={`${variant}-demo-content-heading`} className="text-2xl font-semibold tracking-tight">Demo content</h2>
        <p className="leading-7 text-muted-foreground">This preview intentionally keeps the content simple. Read the <a className="underline underline-offset-4" href={`/examples/layouts/${variant}`}>detail guide</a> for decisions, accessibility guidance, and responsive behavior.</p>
        <Columns base={1} sm={2} lg={3}>{Array.from({ length: 6 }, (_, i) => <DemoCard key={i} title={`Content ${i + 1}`} />)}</Columns>
      </section>
    </div>
  </Main>
}

export { LayoutDemo }
