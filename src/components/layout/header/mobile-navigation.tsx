/**
 * MobileNavigation — reusable trigger and drawer for navigation groups.
 *
 * It derives mobile groups from the same navigation items used by Header:
 * leaf items remain links, while dropdown parents become labelled groups.
 */

import * as React from 'react'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { isNavParent, type NavItem, type NavLeaf } from '../types'

const linkClass =
  'inline-flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[current=true]:bg-muted'

type MobileNavigationProps = {
  items: NavItem[]
  title?: string
  triggerLabel?: string
  navigationLabel?: string
}

function DrawerLink({ item }: { item: NavLeaf }) {
  return (
    <a
      href={item.href}
      aria-current={item.current ? 'page' : undefined}
      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={linkClass}
      data-current={item.current || undefined}
    >
      {item.icon && <item.icon className="size-5 shrink-0" aria-hidden="true" />}
      {item.label}
      {item.external && <span className="sr-only"> (opens in new window)</span>}
    </a>
  )
}

function SubGroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="px-3 pt-2 pb-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
      {children}
    </h3>
  )
}

function DrawerParent({ item }: { item: Extract<NavItem, { children: NavLeaf[] }> }) {
  return (
    <div className="flex flex-col gap-1">
      <SubGroupLabel>
        {item.icon && <item.icon className="mr-2 -mt-0.5 inline-block size-4" aria-hidden="true" />}
        {item.label}
      </SubGroupLabel>
      <div className="flex flex-col gap-1 pl-6">
        {item.children.map((child) => (
          <DrawerLink key={child.href} item={child} />
        ))}
      </div>
    </div>
  )
}

function MobileNavigation({
  items,
  title = 'Navigation menu',
  triggerLabel = 'Open navigation menu',
  navigationLabel = 'Global navigation',
}: MobileNavigationProps) {
  const navigationHeadingId = React.useId()

  return (
    <SheetTrigger>
      <Button variant="ghost" size="icon" aria-label={triggerLabel}>
        <MenuIcon />
      </Button>
      <Sheet side="right">
        <SheetHeader>
          <SheetTitle className="sr-only">{title}</SheetTitle>
        </SheetHeader>
        <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto p-4">
          <nav aria-labelledby={navigationHeadingId} className="flex flex-col gap-1">
            <h2
              id={navigationHeadingId}
              className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              {navigationLabel}
            </h2>
            {items.map((item, index) =>
              isNavParent(item) ? (
                <DrawerParent key={`parent-${item.label}-${index}`} item={item} />
              ) : (
                <DrawerLink key={item.href} item={item} />
              ),
            )}
          </nav>
        </div>
      </Sheet>
    </SheetTrigger>
  )
}

export { MobileNavigation, type MobileNavigationProps }
