/**
 * Route manifest.
 *
 * Exports the route table used by App.tsx's history router, plus the
 * shared nav configs (primaryNav, footerLinks) that every demo
 * page consumes. Centralizing these means one edit updates the
 * whole demo — a page can't drift from the rest by accident.
 *
 * When adding a new demo page:
 *   1. Create the page in this folder.
 *   2. Import it here.
 *   3. Add an entry to `routes` with a path.
 *   4. If the page should appear in Header's primary nav, add it
 *      to `primaryNav` (a top-level entry or inside the Layouts
 *      dropdown).
 */

import type { ComponentType } from 'react'
import { HomePage } from '@/pages/home'
import { LayoutsHeaderOnlyPage } from '@/pages/layouts/header-only'
import { LayoutsSecondaryPage } from '@/pages/layouts/secondary'
import { LayoutsSidebarPage } from '@/pages/layouts/sidebar'
import { LayoutsFullPage } from '@/pages/layouts/full'
import { ComponentsHeaderPage } from '@/pages/components/header'
import { ComponentsTabNavigationPage } from '@/pages/components/tab-navigation'
import { ComponentsSidebarPage } from '@/pages/components/sidebar'
import { ComponentsFooterPage } from '@/pages/components/footer'
import { ComponentsCardsPage } from '@/pages/components/cards'
import { ComponentsSplitViewPage } from '@/pages/components/split-view'
import { ComponentsButtonsPage } from '@/pages/components/buttons'
import { ComponentsUserInterfacePage } from '@/pages/components/user-interface'
import { ComponentsInteractionPage } from '@/pages/components/interaction'
import { ComponentsFormsPage } from '@/pages/components/forms'
import { ComponentsInputPage } from '@/pages/components/input'
import { ComponentsSelectPage } from '@/pages/components/select'
import { ComponentsTextareaPage } from '@/pages/components/textarea'
import { ComponentsCheckboxPage } from '@/pages/components/checkbox'
import { ComponentsCheckboxGroupPage } from '@/pages/components/checkbox-group'
import { ComponentsRadioPage } from '@/pages/components/radio'
import { ComponentsComboboxPage } from '@/pages/components/combobox'
import { ComponentsDatepickerPage } from '@/pages/components/datepicker'

// ---------------------------------------------------------------
// Routes
// ---------------------------------------------------------------

type Route = {
  path: string
  component: ComponentType
}

/**
 * Route table for the history router in App.tsx. First entry is the
 * home / fallback route — unknown paths fall back to it.
 *
 * @example
 * // Consumed by App.tsx's history router:
 * const route = routes.find((r) => r.path === path) ?? routes[0]
 * const Page = route.component
 * return <Page />
 */
export const routes: Route[] = [
  { path: '/', component: HomePage },
  { path: '/layouts/header-only', component: LayoutsHeaderOnlyPage },
  { path: '/layouts/secondary', component: LayoutsSecondaryPage },
  { path: '/layouts/sidebar', component: LayoutsSidebarPage },
  { path: '/layouts/full', component: LayoutsFullPage },
  { path: '/components/header', component: ComponentsHeaderPage },
  { path: '/components/tab-navigation', component: ComponentsTabNavigationPage },
  { path: '/components/sidebar', component: ComponentsSidebarPage },
  { path: '/components/footer', component: ComponentsFooterPage },
  { path: '/components/user-interface', component: ComponentsUserInterfacePage },
  { path: '/components/interaction', component: ComponentsInteractionPage },
  { path: '/components/forms', component: ComponentsFormsPage },
  { path: '/components/input', component: ComponentsInputPage },
  { path: '/components/select', component: ComponentsSelectPage },
  { path: '/components/textarea', component: ComponentsTextareaPage },
  { path: '/components/checkbox', component: ComponentsCheckboxPage },
  { path: '/components/checkbox-group', component: ComponentsCheckboxGroupPage },
  { path: '/components/radio', component: ComponentsRadioPage },
  { path: '/components/combobox', component: ComponentsComboboxPage },
  { path: '/components/datepicker', component: ComponentsDatepickerPage },
  { path: '/components/card', component: ComponentsCardsPage },
  { path: '/components/split-view', component: ComponentsSplitViewPage },
  { path: '/components/button', component: ComponentsButtonsPage },
]

