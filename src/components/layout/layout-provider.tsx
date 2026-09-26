/**
 * LayoutProvider — shares layout config across page-chrome components.
 *
 * TabNavigation can receive shared section data from this provider.
 * The reusable Header and Sidebar remain independent from this context;
 * an application shell composes their props explicitly.
 *
 * The provider is optional — TabNavigation and Sidebar can be used
 * standalone by passing props directly. Explicit props always
 * override context (standard React pattern).
 *
 * `tabNavigationLabel` describes shared tab-navigation data when an
 * application shell needs it elsewhere. Component landmarks are named
 * by their own `aria-label` props.
 *
 * @example
 * <LayoutProvider
 *   tabNavigation={[
 *     { href: "/docs/overview", label: "Overview" },
 *     { href: "/docs/theming", label: "Theming" },
 *   ]}
 *   tabNavigationLabel="Documentation"
 *   activeHref={pathname}
 * >
 *   <Header logo={...} nav={primaryNav} />
 *   <TabNavigation aria-label="Documentation" />
 *   <Main>...</Main>
 *   <Footer copyright={...} />
 * </LayoutProvider>
 */

import * as React from 'react'
import type { NavLeaf } from './types'

// ---------------------------------------------------------------
// Context
// ---------------------------------------------------------------

type LayoutContextValue = {
  /**
   * Items for the TabNavigation component. The application shell may
   * adapt them into a labelled MobileNavigation section.
   *
   * Typed as NavLeaf[] because TabNavigation doesn't support
   * dropdowns — its consumers are tabs, which shouldn't have
   * submenus. (Header's `nav` prop still accepts NavItem[] with
   * NavParent dropdowns; those live on Header navigation only.)
   */
  tabNavigation?: NavLeaf[]
  /**
   * Suggested label for a shell-adapted tab-navigation section.
   * Usually set to the same value as TabNavigation's `aria-label`.
   */
  tabNavigationLabel?: string
  /**
   * Currently active URL. Used by TabNavigation and Sidebar to
   * apply `aria-current="page"` and active-state styling. Match
   * is exact (`item.href === activeHref`).
   */
  activeHref?: string
}

// Safe default: an empty object. useLayout() never returns
// undefined, so consumers can destructure without null-checks.
// A component with no provider above it behaves as if all
// context fields were omitted — TabNavigation/Sidebar fall back
// to their own props or render nothing.
const LayoutContext = React.createContext<LayoutContextValue>({})

// ---------------------------------------------------------------
// Provider
// ---------------------------------------------------------------

type LayoutProviderProps = LayoutContextValue & {
  children: React.ReactNode
}

/**
 * Wraps a page tree with shared layout config. Reads values off
 * its own props and hands them to the context. No internal state.
 *
 * Rendering is a pass-through — no wrapper element, so it doesn't
 * affect layout or introduce a DOM node. Consumers keep full
 * control over the page's flex/grid structure.
 */
function LayoutProvider({ children, ...value }: LayoutProviderProps) {
  // Memoize the context value so consumers don't re-render on
  // every parent render. The dependency list is the individual
  // config fields — object identity of `value` changes each
  // render, so we can't just pass `value` directly.
  const memoized = React.useMemo<LayoutContextValue>(
    () => ({
      tabNavigation: value.tabNavigation,
      tabNavigationLabel: value.tabNavigationLabel,
      activeHref: value.activeHref,
    }),
    [value.tabNavigation, value.tabNavigationLabel, value.activeHref],
  )

  return <LayoutContext.Provider value={memoized}>{children}</LayoutContext.Provider>
}

// ---------------------------------------------------------------
// Hook
// ---------------------------------------------------------------

/**
 * Read layout config from the nearest LayoutProvider.
 *
 * Returns an empty object if no provider is above the caller,
 * so destructuring is always safe. Consumers should treat every
 * field as potentially undefined.
 *
 * @example
 * function TabNavigation({ items: itemsProp, activeHref: activeProp }: Props) {
 *   const ctx = useLayout()
 *   // Explicit prop overrides context, context falls back to []
 *   const items = itemsProp ?? ctx.tabNavigation ?? []
 *   const activeHref = activeProp ?? ctx.activeHref
 *   ...
 * }
 */
function useLayout(): LayoutContextValue {
  return React.useContext(LayoutContext)
}

export { LayoutProvider, useLayout, type LayoutContextValue, type LayoutProviderProps }
