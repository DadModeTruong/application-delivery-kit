import * as React from 'react'
import { cn } from 'cn'

/**
 * Native boolean-choice primitive used by the form guides and product forms.
 * Consumers own the label, grouping, validation, and descriptions; this
 * component supplies shared styling while preserving checkbox semantics.
 */
function Checkbox({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type="checkbox"
      data-slot="checkbox"
      className={cn(
        'size-4 shrink-0 rounded border border-input accent-primary outline-none transition-[color,box-shadow] focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
        className,
      )}
      {...props}
    />
  )
}

export { Checkbox }
