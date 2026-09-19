/**
 * Shared navigation configuration for the component guide area.
 *
 * Keeping these route trees in one place prevents sibling guide pages from
 * drifting apart while leaving each page responsible for its content.
 */

import {
  AlignLeft,
  CalendarDays,
  CheckSquare,
  ChevronsUpDown,
  Ellipsis,
  ListChecks,
  ListFilter,
  MousePointerClick,
  PanelBottom,
  PanelLeft,
  PanelRight,
  PanelTop,
  Radio,
  SquareStack,
  TextCursorInput,
} from 'lucide-react'
import type { NavGroup, NavLeaf } from '@/components/layout/types'

export const componentAreaLinks: NavLeaf[] = [
  { href: '/components/user-interface', label: 'User Interface' },
  { href: '/components/interaction', label: 'Interaction' },
  { href: '/components/forms', label: 'Forms' },
]

export const userInterfaceSidebarLinks: (NavLeaf | NavGroup)[] = [
  { href: '/components/user-interface', label: 'User Interface' },
  {
    label: 'Navigation',
    items: [
      { href: '/components/header', label: 'Header', icon: PanelTop },
      { href: '/components/tab-navigation', label: 'Tab', icon: Ellipsis },
      { href: '/components/sidebar', label: 'Sidebar', icon: PanelLeft },
      { href: '/components/footer', label: 'Footer', icon: PanelBottom },
    ],
  },
  {
    label: 'Layout',
    items: [{ href: '/components/split-view', label: 'Split View', icon: PanelRight }],
  },
  {
    label: 'Display',
    items: [{ href: '/components/card', label: 'Card', icon: SquareStack }],
  },
]

export const interactionSidebarLinks: (NavLeaf | NavGroup)[] = [
  { href: '/components/interaction', label: 'Interaction' },
  {
    label: 'Actions',
    items: [{ href: '/components/button', label: 'Button', icon: MousePointerClick }],
  },
]

export const formSidebarLinks: (NavLeaf | NavGroup)[] = [
  { href: '/components/forms', label: 'Forms' },
  {
    label: 'Form controls',
    items: [
      { href: '/components/input', label: 'Input', icon: TextCursorInput },
      { href: '/components/select', label: 'Select', icon: ListFilter },
      { href: '/components/textarea', label: 'Text area', icon: AlignLeft },
      { href: '/components/checkbox', label: 'Checkbox', icon: CheckSquare },
      { href: '/components/checkbox-group', label: 'Checkbox group', icon: ListChecks },
      { href: '/components/radio', label: 'Radio button', icon: Radio },
      { href: '/components/combobox', label: 'Combobox', icon: ChevronsUpDown },
      { href: '/components/datepicker', label: 'Datepicker', icon: CalendarDays },
    ],
  },
]
