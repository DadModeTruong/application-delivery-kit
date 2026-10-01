import * as React from 'react'
import { cn } from 'cn'

/**
 * Native multiline text primitive used by the form guides and product forms.
 * Consumers own the label, value, validation, and descriptions; this component
 * supplies shared styling while preserving textarea semantics and native editing.
 */
function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'flex min-h-24 w-full min-w-0 resize-y rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
