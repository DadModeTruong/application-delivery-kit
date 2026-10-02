/**
 * MobileNavigation — reusable trigger and drawer for global and contextual navigation.
 *
 * Global navigation keeps broad area changes available. Contextual sections use the
 * same route data as desktop sidebars so sibling guides remain reachable on mobile.
 */

import * as React from 'react'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { isNavParent, type NavGroup, type NavItem, type NavLeaf } from '../types'

const linkClass =
  'inline-flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[current=true]:bg-muted'

type MobileNavigationSection = {
  label: string
  items?: NavLeaf[]
  groups?: NavGroup[]
}

type MobileNavigationProps = {
  items: NavItem[]
  sections?: MobileNavigationSection[]
  activeHref?: string
  title?: string
  triggerLabel?: string
  navigationLabel?: string
}

function isCurrent(item: NavLeaf, activeHref?: string): boolean {
  return item.current ?? item.href === activeHref
}

function DrawerLink({ item, activeHref }: { item: NavLeaf; activeHref?: string }) {
  const current = isCurrent(item, activeHref)

  return (
    <a
      href={item.href}
      aria-current={current ? 'page' : undefined}
      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={linkClass}
      data-current={current || undefined}
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

function DrawerParent({
  item,
  activeHref,
}: {
  item: Extract<NavItem, { children: NavLeaf[] }>
  activeHref?: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <SubGroupLabel>
        {item.icon && <item.icon className="mr-2 -mt-0.5 inline-block size-4" aria-hidden="true" />}
        {item.label}
      </SubGroupLabel>
      <div className="flex flex-col gap-1 pl-6">
        {item.children.map((child) => (
          <DrawerLink key={child.href} item={child} activeHref={activeHref} />
        ))}
      </div>
    </div>
  )
}

function DrawerItems({ items, activeHref }: { items: NavItem[]; activeHref?: string }) {
  return (
    <>
      {items.map((item, index) =>
        isNavParent(item) ? (
          <DrawerParent key={`parent-${item.label}-${index}`} item={item} activeHref={activeHref} />
        ) : (
          <DrawerLink key={item.href} item={item} activeHref={activeHref} />
        ),
      )}
    </>
  )
}

function DrawerSection({
  section,
  activeHref,
}: {
  section: MobileNavigationSection
  activeHref?: string
}) {
  const items = section.items ?? []
  const groups = section.groups ?? []

  return (
    <nav aria-label={section.label} className="flex flex-col gap-1 border-t border-border pt-4">
      <h2 className="px-3 pt-1 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {section.label}
      </h2>
      {items.length > 0 && <DrawerItems items={items} activeHref={activeHref} />}
      {groups.map((group) => (
        <div key={group.label} className="flex flex-col gap-1">
          <SubGroupLabel>{group.label}</SubGroupLabel>
          <div className="flex flex-col gap-1 pl-6">
            {group.items.map((item) => (
              <DrawerLink key={item.href} item={item} activeHref={activeHref} />
            ))}
          </div>
        </div>
      ))}
    </nav>
  )
}

function filterGlobalItems(items: NavItem[], sections: MobileNavigationSection[]): NavItem[] {
  const contextualHrefs = new Set(
    sections.flatMap((section) => [
      ...(section.items ?? []).map((item) => item.href),
      ...(section.groups ?? []).flatMap((group) => group.items.map((item) => item.href)),
    ]),
  )
  const filtered: NavItem[] = []

  for (const item of items) {
    if (!isNavParent(item)) {
      if (!contextualHrefs.has(item.href)) filtered.push(item)
      continue
    }

    const children = item.children.filter((child) => !contextualHrefs.has(child.href))
    if (children.length > 0) filtered.push({ ...item, children })
  }

  return filtered
}

function MobileNavigation({
  items,
  sections = [],
  activeHref,
  title = 'Navigation menu',
  triggerLabel = 'Open navigation menu',
  navigationLabel = 'Global navigation',
}: MobileNavigationProps) {
  const navigationHeadingId = React.useId()
  const globalItems = filterGlobalItems(items, sections)

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
            <DrawerItems items={globalItems} activeHref={activeHref} />
          </nav>
          {sections.map((section) => (
            <DrawerSection key={section.label} section={section} activeHref={activeHref} />
          ))}
        </div>
      </Sheet>
    </SheetTrigger>
  )
}

export { MobileNavigation, type MobileNavigationProps, type MobileNavigationSection }
