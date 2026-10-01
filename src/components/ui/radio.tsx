import * as React from 'react'
import { cn } from 'cn'

/**
 * Native radio-button primitive for one choice within a named group.
 * Consumers own the fieldset, legend, labels, name, and selection state.
 */
function Radio({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type="radio"
      data-slot="radio"
      className={cn(
        'size-4 shrink-0 rounded-full border border-input accent-primary outline-none transition-[color,box-shadow] focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
        className,
      )}
      {...props}
    />
  )
}

export { Radio }
