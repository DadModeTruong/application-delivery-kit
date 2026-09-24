/**
 * Route manifest.
 *
 * Exports the route table used by App.tsx's history router.
 *
 * Shared site navigation is intentionally kept in `src/config/` so route
 * ownership and navigation ownership stay separate. See
 * `src/pages/adding-a-page.md` for the complete page checklist.
 */

import type { ComponentType } from 'react'
import { HomePage } from '@/pages/home'
import { LayoutsExamplesPage } from '@/pages/examples/layouts'
import { LayoutsHeaderOnlyGuidePage } from '@/pages/examples/header-only'
import { LayoutsSecondaryGuidePage } from '@/pages/examples/secondary'
import { LayoutsSidebarGuidePage } from '@/pages/examples/sidebar'
import { LayoutsFullGuidePage } from '@/pages/examples/full'
import { LayoutsHeaderOnlyPage } from '@/pages/layouts/header-only'
import { LayoutsSecondaryPage } from '@/pages/layouts/secondary'
import { LayoutsSidebarPage } from '@/pages/layouts/sidebar'
import { LayoutsFullPage } from '@/pages/layouts/full'
import { SearchExamplesPage } from '@/pages/examples/search'
import { SearchPage } from '@/pages/search'
import { SearchGlobalPage } from '@/pages/search-global'
import { SearchFiltersPage } from '@/pages/search-filters'
import { SearchDirectoryPage } from '@/pages/search-directory'
import { SearchAutocompletePage } from '@/pages/search-autocomplete'
import { SearchCommandPalettePage } from '@/pages/search-command-palette'
import { SearchAdvancedPage } from '@/pages/search-advanced'
import { SearchTablePage } from '@/pages/search-table'
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
 * Route table consumed by the history router in App.tsx.
 *
 * Unknown paths are handled by the explicit NotFoundPage in App.tsx rather
 * than silently rendering the home page.
 */
export const routes: Route[] = [
  { path: '/', component: HomePage },
  { path: '/examples/layouts', component: LayoutsExamplesPage },
  { path: '/examples/layouts/header-only', component: LayoutsHeaderOnlyGuidePage },
  { path: '/examples/layouts/secondary', component: LayoutsSecondaryGuidePage },
  { path: '/examples/layouts/sidebar', component: LayoutsSidebarGuidePage },
  { path: '/examples/layouts/full', component: LayoutsFullGuidePage },
  { path: '/layouts/header-only', component: LayoutsHeaderOnlyPage },
  { path: '/layouts/secondary', component: LayoutsSecondaryPage },
  { path: '/layouts/sidebar', component: LayoutsSidebarPage },
  { path: '/layouts/full', component: LayoutsFullPage },
  { path: '/examples/search', component: SearchExamplesPage },
  { path: '/search', component: SearchPage },
  { path: '/search/global', component: SearchGlobalPage },
  { path: '/search/filters', component: SearchFiltersPage },
  { path: '/search/directory', component: SearchDirectoryPage },
  { path: '/search/autocomplete', component: SearchAutocompletePage },
  { path: '/search/command-palette', component: SearchCommandPalettePage },
  { path: '/search/advanced', component: SearchAdvancedPage },
  { path: '/search/table', component: SearchTablePage },
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
