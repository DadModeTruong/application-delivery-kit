import type { InputHTMLAttributes } from 'react'

/**
 * Native date input wrapper. It preserves browser calendar affordances and the
 * keyboard/text entry path while providing the kit's shared styling hook.
 */
type DatepickerProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string
  hint?: string
  error?: string
}

const datepickerClass =
  'h-10 rounded-md border border-input bg-background px-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive [color-scheme:light]'

function Datepicker({ id, label, hint, error, className, ...props }: DatepickerProps) {
  const descriptionId = error ? `${id}-error` : hint ? `${id}-hint` : undefined
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        {...props}
        id={id}
        type="date"
        className={`${datepickerClass} ${className ?? ''} ${error ? 'border-destructive' : ''}`}
        aria-describedby={descriptionId}
        aria-invalid={error ? 'true' : props['aria-invalid']}
      />
      {hint && !error && (
        <p id={`${id}-hint`} className="text-sm text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export { Datepicker, datepickerClass }
export type { DatepickerProps }
