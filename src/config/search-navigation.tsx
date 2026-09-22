/** Navigation for the standalone Search examples area. */
import type { NavGroup, NavLeaf } from '@/components/layout/types'

export const searchSidebarLinks: (NavLeaf | NavGroup)[] = [
  { href: '/examples/search', label: 'Search' },
  {
    label: 'Search patterns',
    items: [{ href: '/search', label: 'Search' }],
  },
]
