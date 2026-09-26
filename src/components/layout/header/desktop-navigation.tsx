/**
 * DesktopNavigation — renders the Header's optional top-level navigation.
 *
 * The consuming application supplies the navigation label and current state.
 * This component owns desktop link, menu, and focus behavior but does not
 * decide whether the navigation is primary, global, or section-level.
 */

import { ChevronDownIcon } from 'lucide-react'
import { Pressable } from 'react-aria-components'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { isNavParent, type NavItem, type NavLeaf, type NavParent } from '../types'

const triggerClass =
  'inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[current=true]:bg-muted data-[current=true]:text-foreground'

type DesktopNavigationProps = {
  items: NavItem[]
  label: string
}

function DesktopLeaf({ item }: { item: NavLeaf }) {
  return (
    <a
      href={item.href}
      aria-current={item.current ? 'page' : undefined}
      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={triggerClass}
      data-current={item.current || undefined}
    >
      {item.icon && <item.icon className="size-4 shrink-0" aria-hidden="true" />}
      {item.label}
      {item.external && <span className="sr-only"> (opens in new window)</span>}
    </a>
  )
}

function DesktopParent({ item }: { item: NavParent }) {
  return (
    <DropdownMenuTrigger>
      <Pressable>
        <button type="button" className={triggerClass} data-current={item.current || undefined}>
          {item.icon && <item.icon className="size-4 shrink-0" aria-hidden="true" />}
          {item.label}
          <ChevronDownIcon className="size-4 shrink-0" aria-hidden="true" />
        </button>
      </Pressable>
      <DropdownMenu>
        {item.children.map((child) => (
          <DropdownMenuItem
            key={child.href}
            href={child.href}
            textValue={child.label}
            aria-current={child.current ? 'page' : undefined}
            data-current={child.current || undefined}
            {...(child.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="w-full items-center gap-2 data-[current=true]:bg-muted"
          >
            {child.icon && <child.icon className="size-4 shrink-0" aria-hidden="true" />}
            {child.label}
            {child.external && <span className="sr-only"> (opens in new window)</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </DropdownMenuTrigger>
  )
}

function DesktopNavigation({ items, label }: DesktopNavigationProps) {
  return (
    <nav aria-label={label} className="flex items-center gap-1">
      {items.map((item, index) =>
        isNavParent(item) ? (
          <DesktopParent key={`parent-${item.label}-${index}`} item={item} />
        ) : (
          <DesktopLeaf key={item.href} item={item} />
        ),
      )}
    </nav>
  )
}

export { DesktopNavigation, type DesktopNavigationProps }
