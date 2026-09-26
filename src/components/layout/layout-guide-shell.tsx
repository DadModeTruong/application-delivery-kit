/** Shared page shell for the Layouts examples area. */
import type { ReactNode } from 'react'
import { Footer } from '@/components/layout/footer'
import { SkipLink } from '@/components/layout/header'
import { ApplicationHeader } from '@/components/layout/application-header'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { Main } from '@/components/layout/main'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { Sidebar } from '@/components/layout/sidebar'
import { TabNavigation } from '@/components/layout/tab-navigation'
import type { NavGroup, NavItem, NavLeaf } from '@/components/layout/types'
import { footerLinks, primaryNav } from '@/config/site-navigation'
import { layoutAreaLinks, layoutSidebarLinks } from '@/config/layout-navigation'

type LayoutGuideShellProps = {
  children: ReactNode
  activeHref: string
  sidebarNav?: (NavLeaf | NavGroup)[]
  primaryNav?: NavItem[]
  footerLinks?: NavLeaf[]
}

export function LayoutGuideShell({
  children,
  activeHref,
  sidebarNav = layoutSidebarLinks,
  primaryNav: shellPrimaryNav = primaryNav,
  footerLinks: shellFooterLinks = footerLinks,
}: LayoutGuideShellProps) {
  return (
    <LayoutProvider
      tabNavigation={layoutAreaLinks}
      tabNavigationLabel="Examples"
      sidebarNav={sidebarNav}
      sidebarNavLabel="Layouts"
      activeHref={activeHref}
    >
      <PageShell>
        <SkipLink />
        <ApplicationHeader
          logo={{ href: '/', label: 'Application Delivery Kit' }}
          nav={shellPrimaryNav}
        />
        <TabNavigation aria-label="Examples" activeHref="/examples/layouts" />
        <PageBody>
          <Sidebar aria-label="Layouts" />
          <Main size="full">{children}</Main>
        </PageBody>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={shellFooterLinks} />
      </PageShell>
    </LayoutProvider>
  )
}
