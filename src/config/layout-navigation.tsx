/** Navigation for the standalone layout examples area. */
import { PanelLeft, PanelTop, Rows3, ScreenShare } from 'lucide-react'
import type { NavGroup, NavLeaf } from '@/components/layout/types'

export const layoutAreaLinks: NavLeaf[] = [{ href: '/examples/layouts', label: 'Layouts' }]

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

export const layoutMobileNavigation = {
  label: 'Example navigation — Layouts',
  groups: [
    {
      label: 'Decision guides',
      items: [
        { href: '/examples/layouts', label: 'Layouts overview' },
        { href: '/examples/layouts/header-only', label: 'Header Only decision guide' },
        { href: '/examples/layouts/secondary', label: 'Secondary decision guide' },
        { href: '/examples/layouts/sidebar', label: 'Sidebar decision guide' },
        { href: '/examples/layouts/full', label: 'Full decision guide' },
      ],
    },
    {
      label: 'Interactive examples',
      items: [
        { href: '/layouts/header-only', label: 'Header Only interactive example' },
        { href: '/layouts/secondary', label: 'Secondary interactive example' },
        { href: '/layouts/sidebar', label: 'Sidebar interactive example' },
        { href: '/layouts/full', label: 'Full interactive example' },
      ],
    },
  ],
}
