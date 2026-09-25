/**
 * Header — reusable application-shell header with optional navigation.
 *
 * The component owns header layout, responsive presentation, and navigation
 * interaction. Consumers own branding, route state, navigation meaning, and
 * router integration. Header navigation is intentionally neutral: it may be
 * global, primary, or section-level depending on the consuming application.
 */

import * as React from 'react'
import { cn } from 'cn'
import { Container } from '@/components/layout/container'
import { DesktopNavigation } from './desktop-navigation'
import { MobileNavigation } from './mobile-navigation'
import type { MobileNavigationSection, NavItem } from '../types'

type HeaderLogoConfig = {
  href: string
  label: string
}

type HeaderProps = {
  /** Custom logo/brand content, or the simple href + label form. */
  logo: React.ReactNode | HeaderLogoConfig
  /** Optional Header navigation. It is not assumed to be the primary nav. */
  nav?: NavItem[]
  /** Accessible label for the Header navigation landmark. */
  navigationLabel?: string
  /** Right-side application-level actions. */
  actions?: React.ReactNode
  /** Additional labelled groups shown inside the mobile drawer. */
  mobileSections?: MobileNavigationSection[]
  /** Viewport width at which inline navigation appears. */
  mobileBreakpoint?: 'md' | 'lg'
  /** Layout width behavior. */
  size?: 'contained' | 'full'
}

function isHeaderLogoConfig(value: React.ReactNode | HeaderLogoConfig): value is HeaderLogoConfig {
  return typeof value === 'object' && value !== null && 'href' in value && 'label' in value
}

function HeaderLogo({ logo }: { logo: HeaderProps['logo'] }) {
  if (!isHeaderLogoConfig(logo)) {
    return <>{logo}</>
  }

  return (
    <a
      href={logo.href}
      className="rounded-sm font-heading text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {logo.label}
    </a>
  )
}

function useScrolledPast(threshold: number): boolean {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > threshold)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

function Header({
  logo,
  nav = [],
  navigationLabel = 'Global navigation',
  actions,
  mobileSections = [],
  mobileBreakpoint = 'md',
  size = 'contained',
}: HeaderProps) {
  const scrolled = useScrolledPast(10)
  const isMd = mobileBreakpoint === 'md'
  const desktopVisibility = isMd ? 'hidden md:flex' : 'hidden lg:flex'
  const mobileVisibility = isMd ? 'md:hidden' : 'lg:hidden'
  const headerHeight = isMd ? 'h-14 md:h-16' : 'h-14 lg:h-16'
  const hasMobileNavigation = nav.length > 0 || mobileSections.length > 0

  return (
    <header
      data-slot="header"
      data-scrolled={scrolled}
      data-size={size}
      className={cn(
        'sticky top-0 z-40 w-full',
        headerHeight,
        'bg-background/0 transition-[background-color,border-color,backdrop-filter] duration-150',
        'data-[scrolled=true]:border-b data-[scrolled=true]:border-border data-[scrolled=true]:bg-background/80 data-[scrolled=true]:backdrop-blur-sm',
      )}
    >
      <Container
        size={size === 'full' ? 'full' : '2xl'}
        className="flex h-full items-center justify-between gap-4"
      >
        <HeaderLogo logo={logo} />

        <div className="flex min-w-0 items-center gap-4">
          {nav.length > 0 && (
            <div className={cn(desktopVisibility, 'min-w-0')}>
              <DesktopNavigation items={nav} label={navigationLabel} />
            </div>
          )}
          <div className="flex shrink-0 items-center gap-2">
            {actions}
            {hasMobileNavigation && (
              <div className={mobileVisibility}>
                <MobileNavigation
                  items={nav}
                  sections={mobileSections}
                  navigationLabel={navigationLabel}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  )
}

export { Header, type HeaderProps }
