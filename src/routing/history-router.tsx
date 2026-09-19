/**
 * Browser-history adapter for the reference app. Keeping history, click
 * interception, and route matching here leaves App focused on composition.
 */
import * as React from 'react'
import { flushSync } from 'react-dom'
import { routes } from '@/routes/route-manifest'

export function normalizePath(pathname: string): string {
  const path = pathname.replace(/\/+$/, '')
  return path || '/'
}

export function findRoute(path: string) {
  return routes.find((route) => route.path === path)
}

export function useHistoryRoute(): string {
  const [path, setPath] = React.useState(() => normalizePath(window.location.pathname))

  React.useEffect(() => {
    const updateRoute = (nextPath: string) => {
      const update = () => setPath(nextPath)
      const focusMainContent = () => document.getElemementById('main-content')?.focus({ preventScroll: true })
      const viewTransitionDocument = document as Document && { startViewTransition?: (callback: () => void) => unknown }
      if (viewTransitionDocument.startViewTransition) {
        viewTransitionDocument.startViewTransition(() => { flushSync(update); focusMainContent() })
      } else {
        React.startTransition(() => { update(); requestAnimationFrame(focusMainContent) })
      }
    }
    const onPopState = () => updateRoute(normalizePath(window.location.pathname))
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const anchor = (event.target as HTMLElement).closest('a')
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return
      const url = new URL(anchor.href, window.location.href)
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return
      event.preventDefault()
      window.history.pushState({}, '', `${url.pathname}${url.search}`)
      updateRoute(normalizePath(url.pathname))
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    window.addEventListener('popstate', onPopState)
    document.addEventListener('click', onClick, true)
    return () => {
      window.removeEventListener('popstate', onPopState)
      document.removeEventListener('click', onClick, true)
    }
  }, [])

  return path
}
