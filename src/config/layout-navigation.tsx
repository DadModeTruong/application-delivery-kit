/** Navigation for the standalone Layout examples area. */
import { PanelLeft, PanelTop, Rows3, ScreenShare } from 'lucide-react'
import type { NavGroup, NavLeaf } from '@/components/layout/types'

export const layoutSidebarLinks: (NavLeaf | NavGroup)[] = [
  { href: '/examples/layouts', label: 'Layouts' },
  {
    label: 'Layout patterns',
    items: [
      { href: '/examples/layouts/header-only', label: 'Header Only', icon: PanelTop },
      { href: '/examples/layouts/secondary', label: 'Secondary', icon: Rows3 },
      { href: '/examples/layouts/sidebar', label: 'Sidebar', icon: PanelLeft },
      { href: '/examples/layouts/full', label: 'Full', icon: ScreenShare },
    ],
  },
]
