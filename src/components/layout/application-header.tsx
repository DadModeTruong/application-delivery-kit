/**
 * ApplicationHeader — adapts Application Delivery Kit layout context to the
 * reusable Header API. The reusable Header remains unaware of LayoutProvider.
 */

import { Header, type HeaderProps } from './header'
import { useLayout } from './layout-provider'
import type { NavGroup, NavLeaf } from './types'

type ApplicationHeaderProps = Omit<HeaderProps, 'mobileSections'>

function markCurrent(item: NavLeaf, activeHref?: string): NavLeaf {
  return {
    ...item,
    current: activeHref ? item.href === activeHref : item.current,
  }
}

function markSectionCurrent(
  items: (NavLeaf | NavGroup)[],
  activeHref?: string,
): (NavLeaf | NavGroup)[] {
  return items.map((item) =>
    'items' in item
      ? { ...item, items: item.items.map((child) => markCurrent(child, activeHref)) }
      : markCurrent(item, activeHref),
  )
}

export function ApplicationHeader(props: ApplicationHeaderProps) {
  const { tabNavigation, tabNavigationLabel, sidebarNav, sidebarNavLabel, activeHref } = useLayout()
  const mobileSections = [
    tabNavigation && tabNavigation.length > 0
      ? {
          label: tabNavigationLabel ?? 'Section navigation',
          items: tabNavigation.map((item) => markCurrent(item, activeHref)),
        }
      : null,
    sidebarNav && sidebarNav.length > 0
      ? {
          label: sidebarNavLabel ?? 'Page navigation',
          items: markSectionCurrent(sidebarNav, activeHref),
        }
      : null,
  ].filter((section): section is NonNullable<typeof section> => section !== null)

  return <Header {...props} mobileSections={mobileSections} />
}
