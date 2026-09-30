import type * as React from 'react'
import { cn } from 'cn'

const selectClass =
  'flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40 md:text-sm'

const Select = ({ className, ...props }: React.ComponentProps<'select'>) => (
  <select data-slot="select" className={cn(selectClass, className)} {...props} />
)

export { Select, selectClass }
