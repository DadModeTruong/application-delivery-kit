import { useEffect, useId, useRef, useState } from 'react'

/**
 * Searchable single- or multi-select input with native combobox/listbox semantics.
 * The consuming application owns selected values and persistence.
 */
type ComboboxOption = {
  label: string
  value: string
  group?: string
}

type ComboboxProps = {
  id?: string
  label: string
  options: ComboboxOption[]
  value: string | string[]
  onValueChange: (value: string | string[]) => void
  hint?: string
  error?: string
  placeholder?: string
  disabled?: boolean
  multiple?: boolean
  clearable?: boolean
}

const inputClass =
  'h-10 min-w-0 flex-1 rounded-md border border-input bg-background px-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'

function Combobox({
  id: providedId,
  label,
  options,
  value,
  onValueChange,
  hint,
  error,
  placeholder = 'Search options',
  disabled = false,
  multiple = false,
  clearable = false,
}: ComboboxProps) {
  const generatedId = useId()
  const id = providedId ?? `combobox-${generatedId.replace(/:/g, '')}`
  const inputId = `${id}-input`
  const listboxId = `${id}-listbox`
  const descriptionId = error ? `${id}-error` : hint ? `${id}-hint` : undefined
  const selectedValues: string[] = multiple
    ? Array.isArray(value)
      ? value
      : []
    : typeof value === 'string' && value
      ? [value]
      : []
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const filtered = options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase()),
  )

  useEffect(() => {
    if (!open) return
    const closeOnOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', closeOnOutside)
    return () => document.removeEventListener('mousedown', closeOnOutside)
  }, [open])

  const choose = (option: ComboboxOption) => {
    if (multiple) {
      const next = selectedValues.includes(option.value)
        ? selectedValues.filter((item) => item !== option.value)
        : [...selectedValues, option.value]
      onValueChange(next)
      setQuery('')
      setOpen(true)
    } else {
      onValueChange(option.value)
      setQuery(option.label)
      setOpen(false)
    }
    setActiveIndex(-1)
  }

  const clear = () => {
    onValueChange(multiple ? [] : '')
    setQuery('')
    setOpen(false)
    setActiveIndex(-1)
  }

  return (
    <div ref={containerRef} className="space-y-2">
      <label className="block text-sm font-medium" htmlFor={inputId}>
        {label}
      </label>
      {multiple && selectedValues.length > 0 && (
        <div className="flex flex-wrap gap-2" aria-label={`Selected ${label.toLowerCase()}`}>
          {selectedValues.map((selectedValue) => {
            const option = options.find((item) => item.value === selectedValue)
            return (
              <span
                key={selectedValue}
                className="inline-flex items-center gap-1 rounded-md border bg-muted px-2 py-1 text-xs"
              >
                {option?.label ?? selectedValue}
                <button
                  type="button"
                  className="rounded-sm px-1 text-muted-foreground hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Remove ${option?.label ?? selectedValue}`}
                  onClick={() => choose(option ?? { label: selectedValue, value: selectedValue })}
                >
                  ×
                </button>
              </span>
            )
          })}
        </div>
      )}
      <div className="relative flex gap-2">
        <input
          id={inputId}
          className={`${inputClass} ${error ? 'border-destructive' : ''}`}
          type="text"
          role="combobox"
          value={
            multiple
              ? query
              : query || options.find((option) => option.value === value)?.label || ''
          }
          placeholder={placeholder}
          disabled={disabled}
          aria-expanded={open}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-activedescendant={activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined}
          aria-describedby={descriptionId}
          aria-invalid={error ? 'true' : undefined}
          onFocus={() => !disabled && setOpen(true)}
          onChange={(event) => {
            setQuery(event.target.value)
            setOpen(true)
            if (!multiple) onValueChange('')
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setOpen(false)
              setActiveIndex(-1)
            } else if (event.key === 'ArrowDown' && filtered.length > 0) {
              event.preventDefault()
              setOpen(true)
              setActiveIndex((current) => (current + 1) % filtered.length)
            } else if (event.key === 'ArrowUp' && filtered.length > 0) {
              event.preventDefault()
              setActiveIndex((current) => (current <= 0 ? filtered.length - 1 : current - 1))
            } else if (event.key === 'Enter' && filtered[activeIndex >= 0 ? activeIndex : 0]) {
              event.preventDefault()
              choose(filtered[activeIndex >= 0 ? activeIndex : 0])
            }
          }}
        />
        {clearable && selectedValues.length > 0 && (
          <button
            type="button"
            className="rounded-md border px-3 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={clear}
          >
            Clear
          </button>
        )}
        {open && !disabled && (
          <ul
            id={listboxId}
            role="listbox"
            aria-label={`${label} options`}
            className="absolute top-full z-20 mt-1 max-h-56 w-full overflow-auto rounded-md border bg-popover p-1 text-sm shadow-md"
          >
            {filtered.length === 0 && (
              <li className="px-2 py-2 text-muted-foreground">No matches found.</li>
            )}
            {filtered.map((option, index) => (
              <li
                id={`${id}-option-${index}`}
                key={option.value}
                role="option"
                aria-selected={selectedValues.includes(option.value)}
                className="cursor-pointer rounded-sm px-2 py-2 hover:bg-muted"
                tabIndex={-1}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    choose(option)
                  }
                }}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => choose(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
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
      {selectedValues.length > 0 && (
        <p className="text-sm text-muted-foreground" role="status">
          Selected:{' '}
          {selectedValues
            .map((item) => options.find((option) => option.value === item)?.label ?? item)
            .join(', ')}
        </p>
      )}
    </div>
  )
}

export { Combobox }
export type { ComboboxOption, ComboboxProps }
