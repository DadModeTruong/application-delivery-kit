import { FormGuide } from './form-guide'
import { InputGuidance, InputVariation } from './form-example-primitives'
import { useEffect, useRef, useState } from 'react'
function BasicComboboxExample() {
  // The basic example changes configuration, not keyboard semantics.
  return <ComboboxVariation />
}

function useComboboxOutsideClick(open: boolean, onClose: () => void) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const handleMouseDown = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    const handleFocusIn = (event: FocusEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('focusin', handleFocusIn)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('focusin', handleFocusIn)
    }
  }, [onClose, open])

  return containerRef
}

type ComboboxVariationOption = {
  label: string
  group?: string
}

const comboboxVariationOptions: ComboboxVariationOption[] = [
  { label: 'Canada', group: 'North America' },
  { label: 'Mexico', group: 'North America' },
  { label: 'United States', group: 'North America' },
  { label: 'France', group: 'Europe' },
  { label: 'Germany', group: 'Europe' },
  { label: 'Japan', group: 'Asia' },
]

function ComboboxVariation({
  hint,
  disabled = false,
  invalid = false,
  multiple = false,
  clearable = false,
  grouped = false,
  placeholder = 'Search countries',
}: {
  hint?: string
  disabled?: boolean
  invalid?: boolean
  multiple?: boolean
  clearable?: boolean
  grouped?: boolean
  placeholder?: string
}) {
  const id = `combobox-variation-${multiple ? 'multiple' : clearable ? 'clearable' : grouped ? 'grouped' : disabled ? 'disabled' : invalid ? 'invalid' : 'basic'}`
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const containerRef = useComboboxOutsideClick(open, () => setOpen(false))
  const filtered = comboboxVariationOptions.filter((option) =>
    option.label.toLowerCase().includes(value.toLowerCase()),
  )
  const groups = grouped
    ? Array.from(new Set(filtered.map((option) => option.group).filter(Boolean)))
    : [undefined]
  const describedBy = invalid ? `${id}-error` : hint ? `${id}-hint` : undefined

  const choose = (option: string) => {
    if (multiple) {
      setSelected((current) =>
        current.includes(option) ? current.filter((item) => item !== option) : [...current, option],
      )
      setValue('')
      setActiveIndex(-1)
      setOpen(true)
    } else {
      setSelected([option])
      setValue(option)
      setActiveIndex(-1)
      setOpen(false)
    }
  }

  return (
    <div ref={containerRef} className="space-y-2">
      <label className="block text-sm font-medium" htmlFor={id}>
        {multiple ? 'Countries' : 'Country'}
      </label>
      <div className="relative">
        {multiple && selected.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2" aria-label="Selected countries">
            {selected.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1 rounded-md border bg-muted px-2 py-1 text-xs"
              >
                {item}
                <button
                  type="button"
                  className="rounded-sm px-1 text-muted-foreground hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Remove ${item}`}
                  onClick={() =>
                    setSelected((current) =>
                      current.filter((selectedItem) => selectedItem !== item),
                    )
                  }
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-2">
          <input
            id={id}
            className={`h-10 min-w-0 flex-1 rounded-md border bg-background px-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${invalid ? 'border-destructive' : 'border-input'}`}
            type="text"
            role="combobox"
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            aria-expanded={open}
            aria-controls={`${id}-listbox`}
            aria-activedescendant={activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined}
            aria-autocomplete="list"
            aria-describedby={describedBy}
            onFocus={() => !disabled && setOpen(true)}
            onChange={(event) => {
              setValue(event.target.value)
              setOpen(true)
            }}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                setOpen(false)
                setActiveIndex(-1)
                return
              }
              if (event.key === 'ArrowDown' && filtered.length > 0) {
                event.preventDefault()
                setOpen(true)
                setActiveIndex((current) => (current + 1) % filtered.length)
              }
              if (event.key === 'ArrowUp' && filtered.length > 0) {
                event.preventDefault()
                setOpen(true)
                setActiveIndex((current) => (current <= 0 ? filtered.length - 1 : current - 1))
              }
              if (event.key === 'Enter' && filtered[activeIndex >= 0 ? activeIndex : 0]) {
                event.preventDefault()
                choose(filtered[activeIndex >= 0 ? activeIndex : 0].label)
              }
            }}
          />
          {clearable && (value || selected.length > 0) && (
            <button
              type="button"
              className="rounded-md border px-3 text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Clear country selection"
              onClick={() => {
                setValue('')
                setSelected([])
                setOpen(false)
              }}
            >
              Clear
            </button>
          )}
        </div>
        {open && !disabled && (
          <ul
            id={`${id}-listbox`}
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md border bg-popover p-1 text-sm shadow-md"
            role="listbox"
            aria-label="Country options"
          >
            {filtered.length === 0 && (
              <li className="px-2 py-2 text-muted-foreground">No countries found.</li>
            )}
            {groups.map((group) => {
              const options = filtered.filter((option) => !group || option.group === group)
              if (options.length === 0) return null
              return (
                <li
                  key={group || 'all'}
                  role={group ? 'group' : undefined}
                  aria-label={group || undefined}
                >
                  {group && (
                    <div className="px-2 pb-1 pt-2 text-xs font-semibold text-muted-foreground">
                      {group}
                    </div>
                  )}
                  <ul>
                    {options.map((option) => {
                      const optionIndex = filtered.findIndex((item) => item.label === option.label)
                      return (
                        <li
                          id={`${id}-option-${optionIndex}`}
                          key={option.label}
                          role="option"
                          aria-selected={selected.includes(option.label)}
                          className="cursor-pointer rounded-sm px-2 py-2 hover:bg-muted"
                          tabIndex={-1}
                          onMouseDown={(event) => event.preventDefault()}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              event.preventDefault()
                              choose(option.label)
                            }
                          }}
                          onClick={() => choose(option.label)}
                        >
                          {option.label}
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        )}
      </div>
      {hint && !invalid && (
        <p id={`${id}-hint`} className="text-sm text-muted-foreground">
          {hint}
        </p>
      )}
      {invalid && (
        <p id={`${id}-error`} className="text-sm text-destructive" role="alert">
          Choose a country from the available options.
        </p>
      )}
      {selected.length > 0 && (
        <p className="text-sm text-muted-foreground" role="status">
          Selected: {selected.join(', ')}
        </p>
      )}
    </div>
  )
}

function RequiredComboboxExample() {
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const error = submitted && !value ? 'Choose a country before continuing.' : undefined
  const options = comboboxVariationOptions.map((option) => option.label)
  const filtered = options.filter((option) => option.toLowerCase().includes(value.toLowerCase()))
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const containerRef = useComboboxOutsideClick(open, () => setOpen(false))

  return (
    <div ref={containerRef}>
      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(true)
        }}
      >
        <div className="space-y-2">
          <label className="block text-sm font-medium" htmlFor="combobox-required">
            Country
          </label>
          <input
            id="combobox-required"
            className={`h-10 w-full rounded-md border bg-background px-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring ${error ? 'border-destructive' : 'border-input'}`}
            type="text"
            role="combobox"
            value={value}
            placeholder="Search countries"
            aria-expanded={open}
            aria-controls="combobox-required-listbox"
            aria-activedescendant={
              activeIndex >= 0 ? `combobox-required-option-${activeIndex}` : undefined
            }
            aria-autocomplete="list"
            aria-describedby={error ? 'combobox-required-error' : 'combobox-required-hint'}
            onFocus={() => setOpen(true)}
            onChange={(event) => {
              setValue(event.target.value)
              setSubmitted(false)
              setOpen(true)
            }}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                setOpen(false)
                setActiveIndex(-1)
                return
              }
              if (event.key === 'ArrowDown' && filtered.length > 0) {
                event.preventDefault()
                setOpen(true)
                setActiveIndex((current) => (current + 1) % filtered.length)
              }
              if (event.key === 'ArrowUp' && filtered.length > 0) {
                event.preventDefault()
                setOpen(true)
                setActiveIndex((current) => (current <= 0 ? filtered.length - 1 : current - 1))
              }
              if (event.key === 'Enter' && filtered[activeIndex >= 0 ? activeIndex : 0]) {
                event.preventDefault()
                setValue(filtered[activeIndex >= 0 ? activeIndex : 0])
                setActiveIndex(-1)
                setOpen(false)
              }
            }}
          />
          {open && (
            <ul
              id="combobox-required-listbox"
              className="max-h-48 overflow-auto rounded-md border bg-popover p-1 text-sm shadow-md"
              role="listbox"
              aria-label="Country options"
            >
              {filtered.map((option, optionIndex) => (
                <li
                  id={`combobox-required-option-${optionIndex}`}
                  key={option}
                  role="option"
                  aria-selected={option === value}
                  className="cursor-pointer rounded-sm px-2 py-2 hover:bg-muted"
                  tabIndex={-1}
                  onMouseDown={(event) => event.preventDefault()}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      setValue(option)
                      setActiveIndex(-1)
                      setOpen(false)
                    }
                  }}
                  onClick={() => {
                    setValue(option)
                    setOpen(false)
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
          <p id="combobox-required-hint" className="text-sm text-muted-foreground">
            Required. Try submitting without a country to see the error.
          </p>
          {error && (
            <p id="combobox-required-error" className="text-sm text-destructive" role="alert">
              {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Continue
        </button>
        {submitted && !error && (
          <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
            Country saved: {value}.
          </p>
        )}
      </form>
    </div>
  )
}

function ComboboxVariations() {
  return (
    <section className="space-y-8" aria-labelledby="combobox-variations-heading">
      <div className="space-y-5">
        <h2 id="combobox-variations-heading" className="text-2xl font-semibold tracking-tight">
          Examples and variations
        </h2>
        <p className="leading-7 text-muted-foreground">
          A Combobox combines an editable text input with a filtered list of suggestions. People can
          type to narrow the list, then choose a result.
        </p>
      </div>
      <div className="grid gap-8">
        <InputVariation
          title="Basic"
          description="An editable, filterable input with a single selection and no supporting text."
          guidance={
            <InputGuidance
              intro="A Combobox is useful when people may know part of a value and need suggestions while typing. The visible label names the field; a placeholder can show an example or format, but it cannot replace the label."
              dos={[
                'Use a concise label and a familiar example as placeholder text when it helps people understand what to type.',
                'Filter suggestions as people type and show a clear no-results message.',
                'Let people use the keyboard to focus, filter, select, and dismiss the popup.',
              ]}
              donts={[
                'Do not use placeholder text as the only label or instruction.',
                'Do not use a Combobox when the list is short and a static set of radio buttons is easier to compare.',
                'Do not make suggestions unrelated to the typed value or hide the current selection.',
              ]}
            />
          }
        >
          <ComboboxVariation />
        </InputVariation>
        <InputVariation
          title="With helper text"
          description="A single-selection Combobox with persistent guidance about the value or search behavior."
          guidance={
            <InputGuidance
              intro="Use helper text when people need context that remains useful while searching, such as accepted formats, data source, or whether they can choose only existing values."
              dos={[
                'Explain what the suggestions represent and whether a matching option must be selected.',
                'Keep essential instructions visible and associate them with the input using aria-describedby.',
                'Use plain language that helps people decide what to type.',
              ]}
              donts={[
                'Do not repeat the label in the helper text.',
                'Do not hide required rules or important consequences in optional help.',
                'Do not use helper text for a validation failure; use an error message for that.',
              ]}
            />
          }
        >
          <ComboboxVariation hint="Choose a country from the suggestions. Start typing to filter the list." />
        </InputVariation>
        <InputVariation
          title="Disabled"
          description="A Combobox that is unavailable in the current context."
          guidance={
            <InputGuidance
              intro="Disable a Combobox only when people cannot search or change the value right now, such as when another setting controls the field or required data is still unavailable."
              dos={[
                'Explain why it is unavailable and what action could activate it.',
                'Keep the label, current value, and supporting context understandable.',
                'Use read-only text when people need to review or copy the value.',
              ]}
              donts={[
                'Do not disable the field merely to prevent mistakes; validate or explain instead.',
                'Do not disable it during loading without communicating that work is in progress.',
                'Do not make a disabled field the only place important information is available.',
              ]}
            />
          }
        >
          <ComboboxVariation disabled hint="Available after you select an organization." />
        </InputVariation>
        <InputVariation
          title="Invalid"
          description="A Combobox whose value or selection conflicts with an actionable rule."
          guidance={
            <InputGuidance
              intro="Show an invalid state after people have had a fair chance to enter or choose a value and the value needs correction, such as when it is required or not in the available list."
              dos={[
                'Explain what is wrong and the action that will fix it.',
                'Keep the entered value visible so people can edit it rather than starting over.',
                'Associate the error with the input using aria-describedby and communicate it with text, not color alone.',
              ]}
              donts={[
                'Do not show an error before people have had a fair chance to interact.',
                'Do not rely on a red border or icon without an explanation.',
                'Do not write “Invalid value” without saying what a valid value looks like.',
              ]}
            />
          }
        >
          <ComboboxVariation invalid hint="The selected country is no longer available." />
        </InputVariation>
        <InputVariation
          title="Required"
          description="A Combobox that requires a valid country before the task can continue."
          guidance={
            <InputGuidance
              intro="Use a required Combobox when the task cannot proceed without a value and there is no safe default."
              dos={[
                'State what people must choose and whether the value must come from the suggestions.',
                'Write an error that names the missing action, such as “Choose a country before continuing.”',
                'Preserve the entered text and return focus to the field when validation fails.',
              ]}
              donts={[
                'Do not use an error that only says “Required.”',
                'Do not pre-fill a required value when doing so could conceal an important decision.',
                'Do not require a value when the task can proceed without it.',
              ]}
            />
          }
        >
          <RequiredComboboxExample />
        </InputVariation>
        <InputVariation
          title="Multiple"
          description="A filterable Combobox that allows several independent selections."
          guidance={
            <InputGuidance
              intro="Allow multiple selection when people may need more than one related value, such as several notification topics or regions."
              dos={[
                'Tell people that multiple values are allowed and show selected values as removable or otherwise understandable items.',
                'Keep the input available after each selection so people can continue searching.',
                'Set and communicate selection limits when the list or workflow requires them.',
              ]}
              donts={[
                'Do not allow multiple selection when exactly one value is required; use a single-selection Combobox or radio group.',
                'Do not hide selected values or make people remember what they chose.',
                'Do not silently remove selections when the input is cleared.',
              ]}
            />
          }
        >
          <ComboboxVariation
            multiple
            hint="Select one or more countries. Keep typing to find additional options."
          />
        </InputVariation>
        <InputVariation
          title="Option to clear"
          description="A single-selection Combobox with an explicit way to remove the current value."
          guidance={
            <InputGuidance
              intro="Offer a clear option when the field is optional or when replacing a selection is less clear than resetting it."
              dos={[
                'Give the clear control an accessible name that identifies what will be cleared.',
                'Return the field to its empty state and communicate the result clearly.',
                'Keep the clear action separate from choosing a suggestion.',
              ]}
              donts={[
                'Do not add a clear action to a required field unless clearing is a valid temporary state.',
                'Do not make people delete a long value manually when a clear action is expected.',
                'Do not clear the value without a visible or announced result.',
              ]}
            />
          }
        >
          <ComboboxVariation
            clearable
            hint="Optional. Clear the country if you do not want to filter by one."
          />
        </InputVariation>
        <InputVariation
          title="Groups"
          description="Suggestions organized under meaningful headings to make a larger set easier to scan."
          guidance={
            <InputGuidance
              intro="Group items when categories are meaningful to the decision and help people find a result. Grouping should reduce search effort, not add decorative hierarchy."
              dos={[
                'Use short, recognizable group names that describe the options below them.',
                'Keep groups mutually understandable and use a consistent organizing principle.',
                'Preserve filtering so empty groups disappear and matching options remain easy to find.',
              ]}
              donts={[
                'Do not group a short list when headings add more work than clarity.',
                'Do not mix organizing principles, such as geography and popularity, in the same list.',
                'Do not use group names that are vague, duplicated, or not announced to assistive technology.',
              ]}
            />
          }
        >
          <ComboboxVariation
            grouped
            hint="Suggestions are grouped by region to make the list easier to scan."
          />
        </InputVariation>
      </div>
    </section>
  )
}

function ComponentsComboboxPage() {
  return (
    <FormGuide
      kind="combobox"
      title="Combobox"
      description="Use Combobox when people need to choose from a list that can be searched or filtered."
      basicExample={<BasicComboboxExample />}
      variations={<ComboboxVariations />}
    />
  )
}

export { ComponentsComboboxPage }
