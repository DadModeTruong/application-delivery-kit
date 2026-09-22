/** Shared shell for the standalone Search examples area. */
import type { ReactNode } from 'react'
import { Footer } from '@/components/layout/footer'
import { Header, SkipLink } from '@/components/layout/header'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { Main } from '@/components/layout/main'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { Sidebar } from '@/components/layout/sidebar'
import { TabNavigation } from '@/components/layout/tab-navigation'
import type { NavItem, NavLeaf } from '@/components/layout/types'
import { footerLinks, primaryNav } from '@/config/site-navigation'
import { searchAreaLinks, searchSidebarLinks } from '@/config/search-navigation'

type SearchGuideShellProps = {
  children: ReactNode
  activeHref: string
  primaryNav?: NavItem[]
  footerLinks?: NavLeaf[]
}

export function SearchGuideShell({
  children,
  activeHref,
  primaryNav: shellPrimaryNav = primaryNav,
  footerLinks: shellFooterLinks = footerLinks,
}: SearchGuideShellProps) {
  return (
    <LayoutProvider
      tabNavigation={searchAreaLinks}
      tabNavigationLabel="Examples"
      sidebarNav={searchSidebarLinks}
      sidebarNavLabel="Search"
      activeHref={activeHref}
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={shellPrimaryNav} />
        <TabNavigation aria-label="Examples" activeHref="/examples/search" />
        <PageBody>
          <Sidebar aria-label="Search" />
          <Main size="full">{children}</Main>
        </PageBody>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={shellFooterLinks} />
      </PageShell>
    </LayoutProvider>
  )
}
