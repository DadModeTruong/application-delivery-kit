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
  title: string
}

/**
 * Route table consumed by the history router in App.tsx.
 *
 * Unknown paths are handled by the explicit NotFoundPage in App.tsx rather
 * than silently rendering the home page.
 */
export const routes: Route[] = [
  { path: '/', component: HomePage, title: 'Application Delivery Kit' },
  { path: '/examples/layouts', component: LayoutsExamplesPage, title: 'Application Delivery Kit | Examples | Layouts' },
  { path: '/examples/layouts/header-only', component: LayoutsHeaderOnlyGuidePage, title: 'Application Delivery Kit | Examples | Layouts | Header Only' },
  { path: '/examples/layouts/secondary', component: LayoutsSecondaryGuidePage, title: 'Application Delivery Kit | Examples | Layouts | Secondary' },
  { path: '/examples/layouts/sidebar', component: LayoutsSidebarGuidePage, title: 'Application Delivery Kit | Examples | Layouts | Sidebar' },
  { path: '/examples/layouts/full', component: LayoutsFullGuidePage, title: 'Application Delivery Kit | Examples | Layouts | Full' },
  { path: '/layouts/header-only', component: LayoutsHeaderOnlyPage, title: 'Application Delivery Kit | Layouts | Header Only' },
  { path: '/layouts/secondary', component: LayoutsSecondaryPage, title: 'Application Delivery Kit | Layouts | Secondary' },
  { path: '/layouts/sidebar', component: LayoutsSidebarPage, title: 'Application Delivery Kit | Layouts | Sidebar' },
  { path: '/layouts/full', component: LayoutsFullPage, title: 'Application Delivery Kit | Layouts | Full' },
  { path: '/components/header', component: ComponentsHeaderPage, title: 'Application Delivery Kit | Components | User Interface | Header' },
  { path: '/components/tab-navigation', component: ComponentsTabNavigationPage, title: 'Application Delivery Kit | Components | User Interface | Tab Navigation' },
  { path: '/components/sidebar', component: ComponentsSidebarPage, title: 'Application Delivery Kit | Components | User Interface | Sidebar' },
  { path: '/components/footer', component: ComponentsFooterPage, title: 'Application Delivery Kit | Components | User Interface | Footer' },
  { path: '/components/user-interface', component: ComponentsUserInterfacePage, title: 'Application Delivery Kit | Components | User Interface' },
  { path: '/components/interaction', component: ComponentsInteractionPage, title: 'Application Delivery Kit | Components | Interaction' },
  { path: '/components/forms', component: ComponentsFormsPage, title: 'Application Delivery Kit | Components | Forms' },
  { path: '/components/input', component: ComponentsInputPage, title: 'Application Delivery Kit | Components | Forms | Input' },
  { path: '/components/select', component: ComponentsSelectPage, title: 'Application Delivery Kit | Components | Forms | Select' },
  { path: '/components/textarea', component: ComponentsTextareaPage, title: 'Application Delivery Kit | Components | Forms | Text Area' },
  { path: '/components/checkbox', component: ComponentsCheckboxPage, title: 'Application Delivery Kit | Components | Forms | Checkbox' },
  { path: '/components/checkbox-group', component: ComponentsCheckboxGroupPage, title: 'Application Delivery Kit | Components | Forms | Checkbox Group' },
  { path: '/components/radio', component: ComponentsRadioPage, title: 'Application Delivery Kit | Components | Forms | Radio Button' },
  { path: '/components/combobox', component: ComponentsComboboxPage, title: 'Application Delivery Kit | Components | Forms | Combobox' },
  { path: '/components/datepicker', component: ComponentsDatepickerPage, title: 'Application Delivery Kit | Components | Forms | Datepicker' },
  { path: '/components/card', component: ComponentsCardsPage, title: 'Application Delivery Kit | Components | User Interface | Card' },
  { path: '/components/split-view', component: ComponentsSplitViewPage, title: 'Application Delivery Kit | Components | User Interface | Split View' },
  { path: '/components/button', component: ComponentsButtonsPage, title: 'Application Delivery Kit | Components | Interaction | Button' },
]
