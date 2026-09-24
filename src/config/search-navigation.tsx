/** Navigation for the standalone Search examples area. */
import type { NavGroup, NavLeaf } from '@/components/layout/types'

export const searchSidebarLinks: (NavLeaf | NavGroup)[] = [
  { href: '/examples/search', label: 'Search' },
  {
    label: 'Search conventions',
    items: [
      { href: '/search', label: 'Collection search' },
      { href: '/search/global', label: 'Global search' },
      { href: '/search/filters', label: 'Search with filters' },
      { href: '/search/directory', label: 'Directory search' },
      { href: '/search/autocomplete', label: 'Autocomplete lookup' },
      { href: '/search/command-palette', label: 'Command palette' },
      { href: '/search/advanced', label: 'Advanced search' },
      { href: '/search/table', label: 'Table search' },
    ],
  },
]
