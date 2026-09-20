/**
 * Shared shell for component-area guide pages.
 *
 * Pages provide navigation state and guide content; this component owns the
 * application shell so spacing, landmarks, and responsive composition stay
 * consistent across the component reference area.
 */

import type { ReactNode } from 'react'
import { Footer } from '@/components/layout/footer'
import { Header, SkipLink } from '@/components/layout/header'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { Main } from '@/components/layout/main'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { Sidebar } from '@/components/layout/sidebar'
import { TabNavigation } from '@/components/layout/tab-navigation'
import type { NavGroup, NavItem, NavLeaf } from '@/components/layout/types'
import { componentAreaLinks } from '@/config/component-navigation'
import { footerLinks, primaryNav } from '@/config/site-navigation'

type ComponentGuideShellProps = {
  children: ReactNode
  primaryNav?: NavItem[]
  footerLinks?: NavLeaf[]
  activeHref: string
  tabActiveHref: string
  sidebarNav: (NavLeaf | NavGroup)[]
  sidebarNavLabel: string
  sidebarAriaLabel?: string
}

export function ComponentGuideShell({
  children,
  primaryNav: shellPrimaryNav = primaryNav,
  footerLinks: shellFooterLinks = footerLinks,
  activeHref,
  tabActiveHref,
  sidebarNav,
  sidebarNavLabel,
  sidebarAriaLabel = sidebarNavLabel,
}: ComponentGuideShellProps) {
  return (
    <LayoutProvider
      tabNavigation={componentAreaLinks}
      tabNavigationLabel="Component areas"
      sidebarNav={sidebarNav}
      sidebarNavLabel={sidebarNavLabel}
      activeHref={activeHref}
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={shellPrimaryNav} />
        <TabNavigation aria-label="Component areas" activeHref={tabActiveHref} />
        <PageBody>
          <Sidebar aria-label={sidebarAriaLabel} />
          <Main size="full">{children}</Main>
        </PageBody>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={shellFooterLinks} />
      </PageShell>
    </LayoutProvider>
  )
}
