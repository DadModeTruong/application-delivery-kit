/**
 * Shared navigation for the component-area reference pages.
 *
 * Keeps the area-level navigation and grouped User Interface sidebar
 * consistent across the area introduction and every guide in that area.
 */

import { List, PanelBottom, PanelLeft, PanelTop, SquareStack } from 'lucide-react'
import type { NavGroup, NavLeaf } from '@/components/layout/types'

const componentSectionLinks: NavLeaf[] = [
  { href: '/components/user-interface', label: 'User Interface' },
  { href: '/components/interaction', label: 'Interaction' },
]

const userInterfaceSidebarLinks: NavGroup[] = [
  {
    label: 'Navigation',
    items: [
      { href: '/components/navigation/header', label: 'Header', icon: PanelTop },
      { href: '/components/navigation/secondary', label: 'SecondaryNav', icon: List },
      { href: '/components/navigation/sidebar', label: 'Sidebar', icon: PanelLeft },
      { href: '/components/navigation/footer', label: 'Footer', icon: PanelBottom },
    ],
  },
  {
    label: 'Display',
    items: [{ href: '/components/card', label: 'Card', icon: SquareStack }],
  },
]

export { componentSectionLinks, userInterfaceSidebarLinks }
