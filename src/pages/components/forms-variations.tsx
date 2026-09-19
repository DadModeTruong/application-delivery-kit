/**
 * Forms component area and component reference pages.
 *
 * Form controls collect information. Each guide keeps the semantic HTML
 * behavior visible while demonstrating the equivalent shadcn-style pattern.
 */
import { useEffect, useRef, useState } from 'react'
import {
  ChevronsUpDown,
} from 'lucide-react'
const inputClass =
  'mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring'
type FormKind =
  | 'input'
  | 'select'
  | 'textarea'
  | 'checkbox'
  | 'checkbox-group'
  | 'radio-group'
  | 'combobox'
  | 'datepicker'

export { BasicExample, CheckboxGroupVariations, CheckboxVariations, ComboboxVariations, DatepickerVariations, InputVariations, RadioButtonVariations, SelectVariations, TextareaVariations }
export type { FormKind }
function Field({
  id,
  label,
  children,
  hint,
  disabled,
}: {
  id?: string
  label: string
  children: React.ReactNode
  hint?: string
  disabled?: boolean
}) {
  return (
    <div className="group" data-disabled={disabled || undefined}>
      <label
        className="text-sm font-medium group-data-[disabled=true]:opacity-50"
        htmlFor={id ?? label.toLowerCase().replaceAll(' ', '-')}
      >
        {label}
      </label>
      {children}
      {hint && (
        <p
          id={id ? `${id}-hint` : undefined}
          className="mt-2 text-sm text-muted-foreground group-data-[disabled=true]:opacity-50"
        >
          {hint}
        </p>
      )}
    </div>
  )
}

function BasicComboboxExample() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [value, setValue] = useState('')
  const options = ['Canada', 'Mexico', 'United States']
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div
      className="relative"
      onBlur={(event) => {
        const nextTarget = event.relatedTarget
        if (!nextTarget || !event.currentTarget.contains(nextTarget as Node)) {
          setOpen(false)
        }
      }}
    >
      <label className="block text-sm font-medium" htmlFor="basic-combobox">
        Country
      </label>
      <div className="relative">
        <input
          id="basic-combobox"
          className={`${inputClass} pr-10`}
          role="combobox"
          type="text"
          value={query}
          placeholder="Search countries"
          aria-autocomplete="list"
          aria-controls="basic-combobox-options"
          aria-expanded={open}
          onChange={(event) => {
            setQuery(event.target.value)
            setValue('')
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setOpen(false)
          }}
        />
        <ChevronsUpDown
          className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
      </div>
      {open && (
        <ul
          id="basic-combobox-options"
          className="absolute z-10 mt-1 w-full rounded-md border bg-popover p-1 text-sm shadow-md"
          role="listbox"
          aria-label="Country options"
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li key={option} role="option" aria-selected={option === value}>
                <button
                  type="button"
                  className="w-full rounded-sm px-3 py-2 text-left hover:bg-accent hover:text-accent-foreground"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    setValue(option)
                    setQuery(option)
                    setOpen(false)
                  }}
                >
                  {option}
                </button>
              </li>
            ))
          ) : (
            <li className="px-3 py-2 text-muted-foreground" role="status">
              No countries found.
            </li>
          )}
        </ul>
      )}
    </div>
  )
}

function InputVariation({
  title,
  description,
  children,
  guidance,
}: {
  title: string
  description: string
  children: React.ReactNode
  guidance: React.ReactNode
}) {
  return (
    <article className="space-y-5 rounded-xl border bg-card p-6 shadow-xs">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="leading-7 text-muted-foreground">{description}</p>
      </div>
      <div className="rounded-lg border bg-background p-5">{children}</div>
      <div className="space-y-3 leading-7 text-muted-foreground">{guidance}</div>
    </article>
  )
}

function InputGuidance({ intro, dos, donts }: { intro: string; dos: string[]; donts: string[] }) {
  return (
    <div className="space-y-5 leading-7 text-muted-foreground">
      <p>{intro}</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">Do</h4>
          <ul className="list-disc space-y-2 pl-5">
            {dos.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">Don't</h4>
          <ul className="list-disc space-y-2 pl-5">
            {donts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function RequiredInputExample() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <Field
        id="input-required-variation"
        label="Project name"
        hint="Required. Try submitting this blank: the browser should prevent submission. Enter a name and submit again to see the success confirmation."
      >
        <input
          id="input-required-variation"
          className={inputClass}
          type="text"
          required
          aria-required="true"
          aria-describedby="input-required-variation-hint"
          onChange={() => setSubmitted(false)}
        />
      </Field>
      <button
        type="submit"
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Submit
      </button>
      {submitted && (
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Submitted successfully because the required field has a value.
        </p>
      )}
    </form>
  )
}

function InputVariations() {
  return (
    <section className="space-y-8" aria-labelledby="input-variations-heading">
      <div className="space-y-5">
        <h2 id="input-variations-heading" className="text-2xl font-semibold tracking-tight">
          Examples and variations
        </h2>
        <p className="leading-7 text-muted-foreground">
          These examples show how the same Input control changes as the task needs instructions,
          validation, availability, or file selection. Use the Do and Don't guidance to understand
          what belongs in each variation and what common mistakes to avoid.
        </p>
      </div>
      <div className="grid gap-8">
        <InputVariation
          title="Basic"
          description="A short value with a visible label and no additional supporting text."
          guidance={
            <InputGuidance
              intro="Placeholder text can provide a short example of the expected format, such as name@example.com, or demonstrate a useful search query. It should not carry information people need while reviewing what they entered."
              dos={[
                'Write placeholders as realistic examples, not vague prompts like “Enter text.”',
                'Keep them brief and match the field’s expected format and capitalization.',
              ]}
              donts={[
                'Do not use placeholder text as the only label or instruction.',
                'Do not put required instructions, errors, or essential definitions only in a placeholder.',
                'Do not use a placeholder when the label and surrounding context already make the answer obvious.',
              ]}
            />
          }
        >
          <Field id="input-basic-variation" label="Email address">
            <input
              id="input-basic-variation"
              className={inputClass}
              type="email"
              placeholder="name@example.com"
            />
          </Field>
        </InputVariation>

        <InputVariation
          title="With helper text"
          description="A field with persistent guidance that answers a likely question before an error occurs."
          guidance={
            <InputGuidance
              intro="Helper text is useful when people benefit from a format, privacy, length, or process explanation that applies whether or not the field has a value."
              dos={[
                'Explain what belongs in the field and why the information is needed.',
                'Keep the message specific, short, and useful at the moment of entry.',
                'Use plain language and associate the text with the input using aria-describedby.',
              ]}
              donts={[
                'Do not repeat the label or state something the surrounding context already makes obvious.',
                'Do not use helper text for a validation warning that belongs in an error message.',
                'Do not overload the field with policy text or instructions that belong elsewhere.',
              ]}
            />
          }
        >
          <Field
            id="input-helper-variation"
            label="Project name"
            hint="Use the name people will recognize in the project list."
          >
            <input
              id="input-helper-variation"
              className={inputClass}
              type="text"
              aria-describedby="input-helper-variation-hint"
            />
          </Field>
        </InputVariation>

        <InputVariation
          title="Disabled"
          description="A field that cannot be changed in the current context because its value is controlled elsewhere."
          guidance={
            <InputGuidance
              intro="Disable an Input only when the person cannot make a meaningful change in the current context, such as a value derived from an earlier choice or a feature unavailable to their account."
              dos={[
                'Explain why the field is unavailable and what action would activate it.',
                'Preserve the value and label so the disabled state remains understandable.',
              ]}
              donts={[
                'Do not disable a field merely to prevent mistakes or while waiting for a request; use validation or a loading state instead.',
                'Do not use disabled when people need to read, copy, or discover the value.',
                'Do not make a disabled field the only place where important information is available.',
              ]}
            />
          }
        >
          <Field
            id="input-disabled-variation"
            label="Email"
            hint="This field is currently disabled."
            disabled
          >
            <input
              id="input-disabled-variation"
              className={`${inputClass} disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50`}
              type="email"
              placeholder="Email"
              disabled
              aria-describedby="input-disabled-variation-hint"
            />
          </Field>
        </InputVariation>

        <InputVariation
          title="Invalid"
          description="A field whose current value does not meet a known requirement and needs correction."
          guidance={
            <InputGuidance
              intro="Use an invalid state when the value is missing, malformed, or conflicts with a requirement that the person can act on."
              dos={[
                'Say what is wrong and how to fix it; “Enter a work email, such as name@company.com” is more useful than “Invalid.”',
                'Keep the person’s input so they can edit it instead of starting over.',
                'Connect the error with aria-describedby and aria-invalid, and place it close to the field.',
              ]}
              donts={[
                'Do not show an error before someone has had a fair chance to complete the field unless the problem is already known.',
                'Do not rely on red borders or icons alone.',
                'Do not blame the person or use an error that gives no path to correction.',
              ]}
            />
          }
        >
          <Field id="input-invalid-variation" label="Work email">
            <input
              id="input-invalid-variation"
              className={`${inputClass} border-destructive focus-visible:ring-destructive`}
              type="email"
              value="tommy@example"
              readOnly
              aria-invalid="true"
              aria-describedby="input-invalid-error"
            />
            <p id="input-invalid-error" className="mt-2 text-sm text-destructive">
              Enter a complete email address, such as name@company.com.
            </p>
          </Field>
        </InputVariation>

        <InputVariation
          title="Required"
          description="A field that must contain a value before the task can be completed."
          guidance={
            <InputGuidance
              intro="Mark an Input as required when the information is genuinely necessary to complete the task or meet a stated rule."
              dos={[
                'Use a clear required indicator and make its meaning available in the surrounding guidance.',
                'Explain the requirement in the error using an action, such as “Enter a project name.”',
                'Keep optional fields identifiable when a form mixes required and optional information.',
              ]}
              donts={[
                'Do not make every field required simply because the system could store the value.',
                'Do not hide the required status until submission.',
                'Do not write an error that only says “Required” when the label or rule could be clearer.',
              ]}
            />
          }
        >
          <RequiredInputExample />
        </InputVariation>

        <InputVariation
          title="File input"
          description="A native file control for selecting a document to upload."
          guidance={
            <InputGuidance
              intro="File inputs are appropriate when people need to provide a local document, image, or other file. The browser and operating system own the file picker, so do not imply that a file has uploaded until the upload actually succeeds."
              dos={[
                'State accepted formats, maximum size, and whether multiple files are allowed near the control.',
                'Show the selected filename, size, upload progress, success, and recoverable errors.',
                'On desktop, support filesystem browsing and optionally drag and drop; on mobile web, expect the picker to offer camera, photo library, or device files.',
                'Keep the native control usable with keyboard and assistive technology.',
              ]}
              donts={[
                'Do not reject a file based only on its extension; validate its content and explain how to correct a problem.',
                'Do not require drag and drop or assume a full filesystem is available on a phone.',
                'Do not hide the native focus target behind a decorative upload button.',
                'Do not report success until the upload has actually completed.',
              ]}
            />
          }
        >
          <Field
            id="input-file-variation"
            label="Supporting document"
            hint="Choose a PDF or DOCX up to 10 MB. After choosing a file, its filename should appear; this reference example does not upload it."
          >
            <input
              id="input-file-variation"
              className={inputClass}
              type="file"
              accept=".pdf,.docx,application/pdf"
              aria-describedby="input-file-variation-hint"
            />
          </Field>
        </InputVariation>
      </div>
    </section>
  )
}

function SelectOptionButton({
  option,
  selected,
  onSelect,
}: {
  option: { label: string; value: string }
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      className="flex w-full items-center rounded-sm px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      onClick={onSelect}
    >
      {option.label}
    </button>
  )
}

function ScrollableSelectExample() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('america-new-york')
  const options = [
    { label: 'Eastern Standard Time', value: 'america-new-york' },
    { label: 'Central Standard Time', value: 'america-chicago' },
    { label: 'Mountain Standard Time', value: 'america-denver' },
    { label: 'Pacific Standard Time', value: 'america-los-angeles' },
    { label: 'Alaska Standard Time', value: 'america-anchorage' },
    { label: 'Hawaii Standard Time', value: 'pacific-honolulu' },
    { label: 'Greenwich Mean Time', value: 'europe-london' },
    { label: 'Central European Time', value: 'europe-berlin' },
    { label: 'Eastern European Time', value: 'europe-athens' },
    { label: 'India Standard Time', value: 'asia-kolkata' },
    { label: 'China Standard Time', value: 'asia-shanghai' },
    { label: 'Japan Standard Time', value: 'asia-tokyo' },
  ]
  const selected = options.find((option) => option.value === value)

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium" htmlFor="select-scrollable-trigger">
        Time zone
      </label>
      <div className="relative">
        <button
          id="select-scrollable-trigger"
          type="button"
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-left text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls="select-scrollable-options"
          onClick={() => setOpen((current) => !current)}
        >
          <span>{selected?.label}</span>
          <span aria-hidden="true">⌄</span>
        </button>
        {open && (
          <div className="absolute z-10 mt-1 w-full rounded-md border bg-popover p-1 shadow-md">
            <ul
              id="select-scrollable-options"
              className="max-h-52 overflow-y-auto"
              role="listbox"
              aria-label="Time zone options"
            >
              {options.map((option) => (
                <li key={option.value}>
                  <SelectOptionButton
                    option={option}
                    selected={option.value === value}
                    onSelect={() => {
                      setValue(option.value)
                      setOpen(false)
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function SearchableSelectExample() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [value, setValue] = useState('')
  const options = [
    { label: 'Argentina', value: 'ar' },
    { label: 'Australia', value: 'au' },
    { label: 'Brazil', value: 'br' },
    { label: 'Canada', value: 'ca' },
    { label: 'China', value: 'cn' },
    { label: 'Colombia', value: 'co' },
    { label: 'Egypt', value: 'eg' },
    { label: 'France', value: 'fr' },
    { label: 'Germany', value: 'de' },
    { label: 'Italy', value: 'it' },
    { label: 'Japan', value: 'jp' },
    { label: 'Kenya', value: 'ke' },
    { label: 'Mexico', value: 'mx' },
    { label: 'New Zealand', value: 'nz' },
    { label: 'Nigeria', value: 'ng' },
    { label: 'South Africa', value: 'za' },
    { label: 'South Korea', value: 'kr' },
    { label: 'United Kingdom', value: 'gb' },
    { label: 'United States', value: 'us' },
  ]
  const selected = options.find((option) => option.value === value)
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium" htmlFor="select-searchable-trigger">
        Country
      </label>
      <div className="relative">
        <button
          id="select-searchable-trigger"
          type="button"
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-left text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls="select-searchable-options"
          onClick={() => setOpen((current) => !current)}
        >
          <span className={selected ? '' : 'text-muted-foreground'}>
            {selected?.label ?? 'Select country'}
          </span>
          <span aria-hidden="true">⌄</span>
        </button>
        {open && (
          <div className="absolute z-10 mt-1 w-full rounded-md border bg-popover p-1 shadow-md">
            <input
              className="mb-1 h-9 w-full rounded-sm border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              type="search"
              value={query}
              placeholder="Search countries"
              aria-label="Filter country options"
              aria-controls="select-searchable-options"
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Escape') setOpen(false)
              }}
            />
            <ul
              id="select-searchable-options"
              className="max-h-52 overflow-y-auto"
              role="listbox"
              aria-label="Country options"
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <li key={option.value}>
                    <SelectOptionButton
                      option={option}
                      selected={option.value === value}
                      onSelect={() => {
                        setValue(option.value)
                        setQuery('')
                        setOpen(false)
                      }}
                    />
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-sm text-muted-foreground" role="status">
                  No countries found.
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function RequiredSelectExample() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <Field
        id="select-required-variation"
        label="Deployment region"
        hint="Required. Leave the prompt selected and submit to see the browser prevent submission; choose a region to continue."
      >
        <select
          id="select-required-variation"
          className={inputClass}
          defaultValue=""
          required
          aria-required="true"
          aria-describedby="select-required-variation-hint"
          onChange={() => setSubmitted(false)}
        >
          <option value="" disabled>
            Choose a deployment region
          </option>
          <option value="us-east">US East</option>
          <option value="eu-west">EU West</option>
          <option value="ap-southeast">Asia Pacific Southeast</option>
        </select>
      </Field>
      <button
        type="submit"
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Submit
      </button>
      {submitted && (
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Submitted successfully because a deployment region was selected.
        </p>
      )}
    </form>
  )
}

function SelectVariations() {
  return (
    <section className="space-y-8" aria-labelledby="select-variations-heading">
      <div className="space-y-5">
        <h2 id="select-variations-heading" className="text-2xl font-semibold tracking-tight">
          Examples and variations
        </h2>
        <p className="leading-7 text-muted-foreground">
          These examples show how a Select changes when people need a prompt, explanation, validation,
          unavailable options, grouping, scrolling, or search. Use the guidance to choose the simplest
          behavior that fits the decision.
        </p>
      </div>
      <div className="grid gap-8">
        <InputVariation
          title="Basic"
          description="A Select with no helper text or description and a prompt instead of a preselected value."
          guidance={
            <InputGuidance
              intro="Use placeholder text in a Select when people must make an intentional choice and there is no safe default. The prompt disappears after selection, so it should identify the action rather than explain the whole task."
              dos={[
                'Use a concise action such as “Choose a contact preference.”',
                'Match the prompt to the question answered by the label.',
                'Keep the prompt visually distinct from a real option and selected value.',
              ]}
              donts={[
                'Do not use a placeholder when a safe, common default would reduce work.',
                'Do not put required instructions, definitions, or error messages only in the prompt.',
                'Do not write vague prompts such as “Select one” when the label does not provide the context.',
              ]}
            />
          }
        >
          <Field id="select-basic-variation" label="Contact preference">
            <select id="select-basic-variation" className={inputClass} defaultValue="">
              <option value="" disabled>
                Choose a contact preference
              </option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="sms">Text message</option>
            </select>
          </Field>
        </InputVariation>

        <InputVariation
          title="With helper text"
          description="A Select with persistent guidance that explains a decision before and after the menu is opened."
          guidance={
            <InputGuidance
              intro="Use helper or description text when the choice needs context that remains useful after selection, such as consequences, eligibility, format, or how the options are organized."
              dos={[
                'Explain why the choice matters or how to choose, not what the label already says.',
                'Keep the guidance short enough to scan before opening the menu.',
                'Use plain language and associate the description with the Select using aria-describedby.',
              ]}
              donts={[
                'Do not repeat every option in the helper text.',
                'Do not use helper text for a correction the person must make; use an error instead.',
                'Do not hide essential instructions in text that disappears when the control opens.',
              ]}
            />
          }
        >
          <Field
            id="select-helper-variation"
            label="Notification frequency"
            hint="Choose how often the project summary is sent to your team."
          >
            <select
              id="select-helper-variation"
              className={inputClass}
              defaultValue="weekly"
              aria-describedby="select-helper-variation-hint"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </Field>
        </InputVariation>

        <InputVariation
          title="Disabled"
          description="A Select that cannot be changed because its value or availability is controlled elsewhere."
          guidance={
            <InputGuidance
              intro="Disable a Select only when people cannot make a meaningful change in the current context, such as a dependent choice that is unavailable until an earlier selection is made."
              dos={[
                'Explain why the Select is unavailable and what action can activate it.',
                'Preserve the label and any value needed to understand the surrounding workflow.',
              ]}
              donts={[
                'Do not disable a choice merely to prevent mistakes; explain the rule or validate the choice instead.',
                'Do not disable a Select while loading without communicating that work is in progress.',
                'Do not use disabled when people need to read, copy, or discover the value; use read-only or plain text.',
              ]}
            />
          }
        >
          <Field
            id="select-disabled-variation"
            label="Fruit"
            hint="This field is currently disabled."
            disabled
          >
            <button
              id="select-disabled-variation"
              type="button"
              className="mt-2 flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-left text-sm shadow-xs outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50"
              disabled
              aria-haspopup="listbox"
              aria-expanded="false"
              aria-describedby="select-disabled-variation-hint"
            >
              <span className="text-muted-foreground">Select a fruit</span>
              <span aria-hidden="true">⌄</span>
            </button>
          </Field>
        </InputVariation>

        <InputVariation
          title="Invalid"
          description="A Select whose current value conflicts with a known rule and needs a different choice."
          guidance={
            <InputGuidance
              intro="Show an invalid state when the current choice is missing, no longer available, or conflicts with a rule the person can act on."
              dos={[
                'Explain what is wrong and what kind of choice will fix it.',
                'Keep the selected value visible so people can understand and change their decision.',
                'Connect the error with aria-describedby and aria-invalid, and place it close to the Select.',
              ]}
              donts={[
                'Do not show an error before people have had a fair chance to choose.',
                'Do not rely on a red border or warning icon alone.',
                'Do not use “Invalid selection” without explaining the correction.',
              ]}
            />
          }
        >
          <Field id="select-invalid-variation" label="Review status">
            <select
              id="select-invalid-variation"
              className={`${inputClass} border-destructive focus-visible:ring-destructive`}
              defaultValue="archived"
              aria-invalid="true"
              aria-describedby="select-invalid-error"
            >
              <option value="draft">Draft</option>
              <option value="review">Ready for review</option>
              <option value="archived">Archived</option>
            </select>
            <p id="select-invalid-error" className="mt-2 text-sm text-destructive">
              Archived projects cannot be submitted for review. Choose Draft or Ready for review.
            </p>
          </Field>
        </InputVariation>

        <InputVariation
          title="Required"
          description="A Select that must have a meaningful choice before the task can be completed."
          guidance={
            <InputGuidance
              intro="Use a required Select only when leaving the decision unanswered would prevent the task from being completed or create a meaningful problem."
              dos={[
                'Use a prompt that is not a valid option and identify the requirement before submission.',
                'Write an error that names the missing decision and gives an action, such as “Choose a region.”',
                'Keep the required state available to assistive technology and visible in the surrounding guidance.',
              ]}
              donts={[
                'Do not select a value on someone’s behalf when the choice has important consequences.',
                'Do not use an error that only says “Required.”',
                'Do not make a Select required when a reasonable default is genuinely safe.',
              ]}
            />
          }
        >
          <RequiredSelectExample />
        </InputVariation>

        <InputVariation
          title="Groups"
          description="A Select that organizes related options under meaningful group names."
          guidance={
            <InputGuidance
              intro="Group options when the list contains clear categories that help people scan and understand their choices. Grouping is useful for related locations, roles, or products—not for decoration."
              dos={[
                'Give each group a short, meaningful name that describes all options beneath it.',
                'Keep groups mutually understandable and order them predictably.',
                'Use native optgroup semantics so group names are available to assistive technology.',
              ]}
              donts={[
                'Do not create a group with one option unless the category is important to the decision.',
                'Do not mix unrelated options under a generic group such as “Other.”',
                'Do not use groups to compensate for unclear option names or an overly large list.',
              ]}
            />
          }
        >
          <Field id="select-groups-variation" label="Project owner">
            <select id="select-groups-variation" className={inputClass} defaultValue="">
              <option value="" disabled>
                Choose a project owner
              </option>
              <optgroup label="Design">
                <option value="maya">Maya Chen</option>
                <option value="jordan">Jordan Lee</option>
              </optgroup>
              <optgroup label="Engineering">
                <option value="sam">Sam Rivera</option>
                <option value="riley">Riley Patel</option>
              </optgroup>
            </select>
          </Field>
        </InputVariation>

        <InputVariation
          title="Scrollable"
          description="A Select that exposes several options in a bounded viewport while allowing the list to scroll."
          guidance={
            <InputGuidance
              intro="Allow the options to scroll when the list is long enough that opening it would obscure the page or extend beyond the viewport, but people still benefit from scanning rather than searching."
              dos={[
                'Keep the visible window large enough to show the list has more options.',
                'Use predictable ordering and preserve the selected option when the list scrolls.',
                'Make sure keyboard users can reach every option without depending on a pointer.',
              ]}
              donts={[
                'Do not use scrolling to hide a short list that could be scanned at once.',
                'Do not make the control so short that people miss available options.',
                'Do not use a scrollable Select for a very large collection that needs filtering.',
              ]}
            />
          }
        >
          <ScrollableSelectExample />
        </InputVariation>

        <InputVariation
          title="Searchable"
          description="A searchable alternative for a long list where filtering is faster than scanning every option."
          guidance={
            <InputGuidance
              intro="Use a searchable control when the list is long, people know what they are looking for, or option names are easier to find by typing than by scrolling. In most designs, this is a Combobox rather than a native Select."
              dos={[
                'Support typing, filtering, selection, clearing, and a useful no-results message.',
                'Keep the selected value visible and distinguish it from the search query while editing.',
                'Announce the result count or no-results state and support keyboard navigation.',
              ]}
              donts={[
                'Do not add search to a short list that is faster to scan.',
                'Do not filter without explaining why options disappeared or how to clear the query.',
                'Do not let the search field accept arbitrary text when only listed options are valid.',
              ]}
            />
          }
        >
          <SearchableSelectExample />
        </InputVariation>
      </div>
    </section>
  )
}

function RequiredTextareaExample() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <Field
        id="textarea-required-variation"
        label="Project summary"
        hint="Required. Try submitting this blank: the browser should prevent submission. Add a summary and submit again to see the success confirmation."
      >
        <textarea
          id="textarea-required-variation"
          className={`${inputClass} min-h-24 resize-y`}
          required
          aria-required="true"
          aria-describedby="textarea-required-variation-hint"
          onChange={() => setSubmitted(false)}
        />
      </Field>
      <button
        type="submit"
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Submit
      </button>
      {submitted && (
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Submitted successfully because the project summary has a value.
        </p>
      )}
    </form>
  )
}

function TextareaVariations() {
  return (
    <section className="space-y-8" aria-labelledby="textarea-variations-heading">
      <div className="space-y-5">
        <h2 id="textarea-variations-heading" className="text-2xl font-semibold tracking-tight">
          Examples and variations
        </h2>
        <p className="leading-7 text-muted-foreground">
          These examples show how the same Text area changes as the task needs a prompt, persistent
          guidance, availability, validation, or a required response. Use the Do and Don't guidance to
          choose only the support people need at the moment of writing.
        </p>
      </div>
      <div className="grid gap-8">
        <InputVariation
          title="Basic"
          description="A free-form response with a visible label and a short placeholder example."
          guidance={
            <InputGuidance
              intro="Use placeholder text in a Text area when a short example makes the expected response easier to start, such as showing the kind of detail or tone that is useful. The example should disappear as soon as someone writes."
              dos={[
                'Show a realistic opening or example, such as “Describe what happened and when.”',
                'Keep the prompt short and match it to the label and task.',
                'Use the label and surrounding instructions for information people need while reviewing their response.',
              ]}
              donts={[
                'Do not use placeholder text as the only label, instruction, or required indicator.',
                'Do not put a long policy, privacy notice, or complete writing brief inside the field.',
                'Do not use a placeholder when the label and context already make the response obvious.',
              ]}
            />
          }
        >
          <Field id="textarea-basic-variation" label="What happened?">
            <textarea
              id="textarea-basic-variation"
              className={`${inputClass} min-h-24 resize-y`}
              placeholder="Describe what happened and when."
            />
          </Field>
        </InputVariation>

        <InputVariation
          title="With helper text"
          description="A Text area with persistent guidance that explains what a useful response should include."
          guidance={
            <InputGuidance
              intro="Use helper or description text when people benefit from guidance that remains relevant while they write, such as a length target, expected detail, audience, privacy reminder, or process explanation."
              dos={[
                'Tell people what useful content looks like and why it is needed.',
                'Give a concise length, format, or audience hint when it reduces uncertainty.',
                'Keep the guidance readable and associate it with the Text area using aria-describedby.',
              ]}
              donts={[
                'Do not repeat the label or narrate what the control already makes clear.',
                'Do not use helper text for a validation problem that requires an error message.',
                'Do not overload the field with instructions that belong in the task introduction or a policy link.',
              ]}
            />
          }
        >
          <Field
            id="textarea-helper-variation"
            label="Release notes"
            hint="Mention the user-visible change, who is affected, and any action they need to take."
          >
            <textarea
              id="textarea-helper-variation"
              className={`${inputClass} min-h-24 resize-y`}
              aria-describedby="textarea-helper-variation-hint"
            />
          </Field>
        </InputVariation>

        <InputVariation
          title="Disabled"
          description="A Text area that cannot be changed because the response is unavailable in the current context."
          guidance={
            <InputGuidance
              intro="Disable a Text area only when people cannot make a meaningful change right now, such as content controlled by another workflow step or a feature unavailable to their account."
              dos={[
                'Explain why writing is unavailable and what action can activate the field.',
                'Preserve the label and any context needed to understand the unavailable state.',
                'Use read-only or plain text when people still need to read, copy, or discover the response.',
              ]}
              donts={[
                'Do not disable a field merely to prevent mistakes; provide guidance or validate the response instead.',
                'Do not disable while saving or loading without communicating that work is in progress.',
                'Do not make a disabled Text area the only place important information is available.',
              ]}
            />
          }
        >
          <Field
            id="textarea-disabled-variation"
            label="Internal notes"
            hint="This field is currently disabled."
            disabled
          >
            <textarea
              id="textarea-disabled-variation"
              className={`${inputClass} min-h-24 resize-y disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50`}
              placeholder="Internal notes"
              disabled
              aria-describedby="textarea-disabled-variation-hint"
            />
          </Field>
        </InputVariation>

        <InputVariation
          title="Invalid"
          description="A Text area whose response does not meet a known requirement and needs correction."
          guidance={
            <InputGuidance
              intro="Show an invalid state when the response is missing, too short, unsafe to process, or otherwise conflicts with a rule the person can act on."
              dos={[
                'Explain what is wrong and how to correct it; include a useful minimum or expected detail when relevant.',
                'Keep the person’s writing so they can edit it instead of starting over.',
                'Connect the error with aria-describedby and aria-invalid, and place it close to the Text area.',
              ]}
              donts={[
                'Do not show an error before people have had a fair chance to write unless the problem is already known.',
                'Do not rely on a red border, color, or warning icon alone.',
                'Do not blame the person or use an error such as “Invalid response” with no correction path.',
              ]}
            />
          }
        >
          <Field id="textarea-invalid-variation" label="Accessibility feedback">
            <textarea
              id="textarea-invalid-variation"
              className={`${inputClass} min-h-24 resize-y border-destructive focus-visible:ring-destructive`}
              value="The button is hard to use."
              readOnly
              aria-invalid="true"
              aria-describedby="textarea-invalid-error"
            />
            <p id="textarea-invalid-error" className="mt-2 text-sm text-destructive">
              Add where the problem occurs and what happens when you try to use the button.
            </p>
          </Field>
        </InputVariation>

        <InputVariation
          title="Required"
          description="A Text area that must contain a meaningful response before the task can be completed."
          guidance={
            <InputGuidance
              intro="Use a required Text area only when the response is necessary to complete the task or avoid a meaningful problem. Tell people what level of detail is needed before they submit."
              dos={[
                'Explain the requirement near the field and use a prompt that helps people begin writing.',
                'Write an error that names the missing response and gives an action, such as “Describe the issue.”',
                'Keep the required state available to assistive technology and preserve the response after validation.',
              ]}
              donts={[
                'Do not require an essay when a short answer would meet the task’s need.',
                'Do not use an error that only says “Required.”',
                'Do not make a response required when people cannot reasonably know what to write.',
              ]}
            />
          }
        >
          <RequiredTextareaExample />
        </InputVariation>
      </div>
    </section>
  )
}

function CheckboxField({
  id,
  label,
  hint,
  error,
  disabled = false,
  children,
}: {
  id: string
  label: string
  hint?: string
  error?: string
  disabled?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="group space-y-2" data-disabled={disabled || undefined}>
      <div className="flex items-start gap-3 group-data-[disabled=true]:opacity-50">
        {children}
        <label className="text-sm font-medium leading-5" htmlFor={id}>
          {label}
        </label>
      </div>
      {hint && !error && (
        <p id={`${id}-hint`} className="pl-7 text-sm text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="pl-7 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

function RequiredCheckboxExample() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <CheckboxField
        id="checkbox-required-variation"
        label="I agree to the project terms"
        hint="Required. Try submitting this unchecked: the browser should prevent submission. Check the box and submit again to see the success confirmation."
      >
        <input
          id="checkbox-required-variation"
          className="mt-1 size-4 accent-primary"
          type="checkbox"
          required
          aria-required="true"
          aria-describedby="checkbox-required-variation-hint"
          onChange={() => setSubmitted(false)}
        />
      </CheckboxField>
      <button
        type="submit"
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Submit
      </button>
      {submitted && (
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Submitted successfully because the terms were accepted.
        </p>
      )}
    </form>
  )
}

function CheckboxGroupField({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string
  label: string
  hint?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <fieldset className="space-y-3" aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}>
      <legend className="text-sm font-medium">{label}</legend>
      {hint && !error && (
        <p id={`${id}-hint`} className="text-sm text-muted-foreground">
          {hint}
        </p>
      )}
      <div className="space-y-3">{children}</div>
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  )
}

function CheckboxGroupExample({
  idPrefix = 'checkbox-group-example',
  hint,
  disabled = false,
  invalid = false,
}: {
  idPrefix?: string
  hint?: string
  disabled?: boolean
  invalid?: boolean
}) {
  return (
    <CheckboxGroupField
      id={idPrefix}
      label="Which updates would you like to receive?"
      hint={hint}
      error={invalid ? 'Choose at least one update type.' : undefined}
    >
      {['Product news', 'Accessibility improvements', 'Events and webinars'].map((option) => (
        <label key={option} className="flex items-start gap-3 text-sm" htmlFor={`${idPrefix}-${option}`}>
          <input
            id={`${idPrefix}-${option}`}
            className="mt-1 size-4 accent-primary disabled:cursor-not-allowed disabled:opacity-50"
            type="checkbox"
            disabled={disabled}
          />
          <span>{option}</span>
        </label>
      ))}
    </CheckboxGroupField>
  )
}

function RequiredCheckboxGroupExample() {
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const options = ['Product news', 'Accessibility improvements', 'Events and webinars']
  const error = submitted && selected.length === 0 ? 'Choose at least one update type before continuing.' : undefined

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <fieldset className="space-y-3" aria-describedby={error ? 'checkbox-group-required-error' : 'checkbox-group-required-hint'}>
        <legend className="text-sm font-medium">Which updates would you like to receive?</legend>
        <p id="checkbox-group-required-hint" className="text-sm text-muted-foreground">
          Required. Try submitting with no choices selected to see the error. Select one or more choices and submit again.
        </p>
        <div className="space-y-3">
          {options.map((option) => (
            <label key={option} className="flex items-start gap-3 text-sm" htmlFor={`checkbox-group-required-${option}`}>
              <input
                id={`checkbox-group-required-${option}`}
                className="mt-1 size-4 accent-primary"
                type="checkbox"
                checked={selected.includes(option)}
                onChange={(event) => {
                  setSubmitted(false)
                  setSelected((current) =>
                    event.target.checked ? [...current, option] : current.filter((item) => item !== option),
                  )
                }}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {error && (
          <p id="checkbox-group-required-error" className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
      </fieldset>
      <button
        type="submit"
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Continue
      </button>
      {submitted && !error && (
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Preferences saved with {selected.length} update type{selected.length === 1 ? '' : 's'} selected.
        </p>
      )}
    </form>
  )
}

function RadioGroupField({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string
  label: string
  hint?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <fieldset className="space-y-3" aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}>
      <legend className="text-sm font-medium">{label}</legend>
      {hint && !error && (
        <p id={`${id}-hint`} className="text-sm text-muted-foreground">
          {hint}
        </p>
      )}
      <div className="space-y-3">{children}</div>
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  )
}

function RadioButtonExample({
  idPrefix = 'radio-button-example',
  hint,
  disabled = false,
  invalid = false,
}: {
  idPrefix?: string
  hint?: string
  disabled?: boolean
  invalid?: boolean
}) {
  const options = ['Email', 'Text message', 'No notifications']

  return (
    <RadioGroupField
      id={idPrefix}
      label="How should we contact you?"
      hint={hint}
      error={invalid ? 'Choose one contact method.' : undefined}
    >
      {options.map((option) => (
        <label key={option} className="flex items-start gap-3 text-sm" htmlFor={`${idPrefix}-${option}`}>
          <input
            id={`${idPrefix}-${option}`}
            className="mt-1 size-4 accent-primary disabled:cursor-not-allowed disabled:opacity-50"
            type="radio"
            name={idPrefix}
            value={option}
            disabled={disabled}
          />
          <span>{option}</span>
        </label>
      ))}
    </RadioGroupField>
  )
}

function RequiredRadioButtonExample() {
  const [selected, setSelected] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const options = ['Email', 'Text message', 'No notifications']
  const error = submitted && !selected ? 'Choose one contact method before continuing.' : undefined

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <fieldset className="space-y-3" aria-describedby={error ? 'radio-button-required-error' : 'radio-button-required-hint'}>
        <legend className="text-sm font-medium">How should we contact you?</legend>
        <p id="radio-button-required-hint" className="text-sm text-muted-foreground">
          Required. Try submitting without a choice to see the error. Select one option and submit again.
        </p>
        <div className="space-y-3">
          {options.map((option) => (
            <label key={option} className="flex items-start gap-3 text-sm" htmlFor={`radio-button-required-${option}`}>
              <input
                id={`radio-button-required-${option}`}
                className="mt-1 size-4 accent-primary"
                type="radio"
                name="radio-button-required"
                value={option}
                checked={selected === option}
                onChange={(event) => {
                  setSubmitted(false)
                  setSelected(event.target.value)
                }}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {error && (
          <p id="radio-button-required-error" className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
      </fieldset>
      <button
        type="submit"
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Continue
      </button>
      {submitted && !error && (
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Contact preference saved: {selected}.
        </p>
      )}
    </form>
  )
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
  const filtered = comboboxVariationOptions.filter((option) => option.label.toLowerCase().includes(value.toLowerCase()))
  const groups = grouped
    ? Array.from(new Set(filtered.map((option) => option.group).filter(Boolean)))
    : [undefined]
  const describedBy = invalid ? `${id}-error` : hint ? `${id}-hint` : undefined

  const choose = (option: string) => {
    if (multiple) {
      setSelected((current) => (current.includes(option) ? current.filter((item) => item !== option) : [...current, option]))
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
              <span key={item} className="inline-flex items-center gap-1 rounded-md border bg-muted px-2 py-1 text-xs">
                {item}
                <button
                  type="button"
                  className="rounded-sm px-1 text-muted-foreground hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Remove ${item}`}
                  onClick={() => setSelected((current) => current.filter((selectedItem) => selectedItem !== item))}
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
          <ul id={`${id}-listbox`} className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md border bg-popover p-1 text-sm shadow-md" role="listbox" aria-label="Country options">
            {filtered.length === 0 && <li className="px-2 py-2 text-muted-foreground">No countries found.</li>}
            {groups.map((group) => {
              const options = filtered.filter((option) => !group || option.group === group)
              if (options.length === 0) return null
              return (
                <li key={group || 'all'} role={group ? 'group' : undefined} aria-label={group || undefined}>
                  {group && <div className="px-2 pb-1 pt-2 text-xs font-semibold text-muted-foreground">{group}</div>}
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
      {hint && !invalid && <p id={`${id}-hint`} className="text-sm text-muted-foreground">{hint}</p>}
      {invalid && <p id={`${id}-error`} className="text-sm text-destructive" role="alert">Choose a country from the available options.</p>}
      {selected.length > 0 && <p className="text-sm text-muted-foreground" role="status">Selected: {selected.join(', ')}</p>}
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
      <form className="space-y-4" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
      <div className="space-y-2">
        <label className="block text-sm font-medium" htmlFor="combobox-required">Country</label>
        <input
          id="combobox-required"
          className={`h-10 w-full rounded-md border bg-background px-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring ${error ? 'border-destructive' : 'border-input'}`}
          type="text"
          role="combobox"
          value={value}
          placeholder="Search countries"
          aria-expanded={open}
          aria-controls="combobox-required-listbox"
          aria-activedescendant={activeIndex >= 0 ? `combobox-required-option-${activeIndex}` : undefined}
          aria-autocomplete="list"
          aria-describedby={error ? 'combobox-required-error' : 'combobox-required-hint'}
          onFocus={() => setOpen(true)}
          onChange={(event) => { setValue(event.target.value); setSubmitted(false); setOpen(true) }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') { setOpen(false); setActiveIndex(-1); return }
            if (event.key === 'ArrowDown' && filtered.length > 0) { event.preventDefault(); setOpen(true); setActiveIndex((current) => (current + 1) % filtered.length) }
            if (event.key === 'ArrowUp' && filtered.length > 0) { event.preventDefault(); setOpen(true); setActiveIndex((current) => (current <= 0 ? filtered.length - 1 : current - 1)) }
            if (event.key === 'Enter' && filtered[activeIndex >= 0 ? activeIndex : 0]) { event.preventDefault(); setValue(filtered[activeIndex >= 0 ? activeIndex : 0]); setActiveIndex(-1); setOpen(false) }
          }}
        />
        {open && (
          <ul id="combobox-required-listbox" className="max-h-48 overflow-auto rounded-md border bg-popover p-1 text-sm shadow-md" role="listbox" aria-label="Country options">
            {filtered.map((option, optionIndex) => <li
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
              onClick={() => { setValue(option); setOpen(false) }}
            >
              {option}
            </li>)}
          </ul>
        )}
        <p id="combobox-required-hint" className="text-sm text-muted-foreground">Required. Try submitting without a country to see the error.</p>
        {error && <p id="combobox-required-error" className="text-sm text-destructive" role="alert">{error}</p>}
      </div>
      <button type="submit" className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Continue</button>
      {submitted && !error && <p className="text-sm text-muted-foreground" role="status" aria-live="polite">Country saved: {value}.</p>}
      </form>
    </div>
  )
}

function DatePickerVariation({
  hint,
  disabled = false,
  invalid = false,
}: {
  hint?: string
  disabled?: boolean
  invalid?: boolean
}) {
  const id = `datepicker-variation-${disabled ? 'disabled' : invalid ? 'invalid' : hint ? 'helper' : 'basic'}`
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium" htmlFor={id}>Date</label>
      <input
        id={id}
        className={`[color-scheme:light] h-10 rounded-md border bg-background px-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${invalid ? 'border-destructive' : 'border-input'}`}
        type="date"
        disabled={disabled}
        aria-describedby={invalid ? `${id}-error` : hint ? `${id}-hint` : undefined}
      />
      {hint && !invalid && <p id={`${id}-hint`} className="text-sm text-muted-foreground">{hint}</p>}
      {invalid && <p id={`${id}-error`} className="text-sm text-destructive" role="alert">Enter a valid date in the allowed range.</p>}
    </div>
  )
}

function RequiredDatePickerExample() {
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const error = submitted && !value ? 'Choose a date before continuing.' : undefined

  return (
    <form className="space-y-4" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
      <div className="space-y-2">
        <label className="block text-sm font-medium" htmlFor="datepicker-required">Start date</label>
        <input
          id="datepicker-required"
          className={`[color-scheme:light] h-10 rounded-md border bg-background px-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring ${error ? 'border-destructive' : 'border-input'}`}
          type="date"
          value={value}
          aria-describedby={error ? 'datepicker-required-error' : 'datepicker-required-hint'}
          onChange={(event) => { setValue(event.target.value); setSubmitted(false) }}
        />
        <p id="datepicker-required-hint" className="text-sm text-muted-foreground">Required. Try submitting without a date to see the error.</p>
        {error && <p id="datepicker-required-error" className="text-sm text-destructive" role="alert">{error}</p>}
      </div>
      <button type="submit" className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Continue</button>
      {submitted && !error && <p className="text-sm text-muted-foreground" role="status" aria-live="polite">Start date saved: {value}.</p>}
    </form>
  )
}

function DateRangePickerExample() {
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const invalid = Boolean(start && end && end < start)
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium">Date range</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2"><label className="block text-sm font-medium" htmlFor="datepicker-range-start">Start date</label><input id="datepicker-range-start" className="[color-scheme:light] h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring" type="date" value={start} onChange={(event) => setStart(event.target.value)} /></div>
        <div className="space-y-2"><label className="block text-sm font-medium" htmlFor="datepicker-range-end">End date</label><input id="datepicker-range-end" className={`h-10 w-full rounded-md border bg-background px-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring ${invalid ? 'border-destructive' : 'border-input'}`} type="date" value={end} min={start || undefined} onChange={(event) => setEnd(event.target.value)} aria-invalid={invalid || undefined} aria-describedby={invalid ? 'datepicker-range-error' : 'datepicker-range-hint'} /></div>
      </div>
      <p id="datepicker-range-hint" className="text-sm text-muted-foreground">Choose the first and last day of your stay.</p>
      {invalid && <p id="datepicker-range-error" className="text-sm text-destructive" role="alert">The end date must be on or after the start date.</p>}
      {start && end && !invalid && <p className="text-sm text-muted-foreground" role="status">Range: {start} through {end}.</p>}
    </div>
  )
}

function DateTimePickerExample() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2"><label className="block text-sm font-medium" htmlFor="datepicker-time-date">Date</label><input id="datepicker-time-date" className="[color-scheme:light] h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring" type="date" value={date} onChange={(event) => setDate(event.target.value)} /></div>
        <div className="space-y-2"><label className="block text-sm font-medium" htmlFor="datepicker-time-time">Time</label><input id="datepicker-time-time" className="[color-scheme:light] h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring" type="time" value={time} onChange={(event) => setTime(event.target.value)} /></div>
      </div>
      <p id="datepicker-time-hint" className="text-sm text-muted-foreground">Choose the appointment time in Eastern Time. You can change it before confirming.</p>
      {date && time && <p className="text-sm text-muted-foreground" role="status">Appointment: {date} at {time} Eastern Time.</p>}
    </div>
  )
}

function DatepickerVariations() {
  return (
    <section className="space-y-8" aria-labelledby="datepicker-variations-heading">
      <div className="space-y-5">
        <h2 id="datepicker-variations-heading" className="text-2xl font-semibold tracking-tight">Examples and variations</h2>
        <p className="leading-7 text-muted-foreground">A Datepicker helps people enter or choose a calendar date. Use clear labels, sensible constraints, and explicit time-zone guidance when a date represents a real-world event.</p>
      </div>
      <div className="grid gap-8">
        <InputVariation title="Basic" description="A date input with a visible label and no additional supporting text." guidance={<InputGuidance intro="Native date inputs generally do not need placeholder text: the browser supplies the date format and calendar affordance. If a custom date field uses a placeholder, use it only as an example and never as the label." dos={['Use a visible label that names the date’s purpose, such as “Move-in date.”', 'Accept the format people use in their locale and avoid making them guess the order of month, day, and year.', 'Use a calendar picker when browsing dates is easier than typing, while keeping the field editable.']} donts={['Do not use placeholder text as the only label or instruction.', 'Do not use a Datepicker when a month/year selector or plain text is the better input.', 'Do not silently reinterpret an ambiguous date such as 03/04/2027.']} />}>
          <DatePickerVariation />
        </InputVariation>
        <InputVariation title="With helper text" description="A date input with persistent guidance about format, constraints, or purpose." guidance={<InputGuidance intro="Use helper text when people need context that remains useful while choosing a date, such as an event deadline, allowed date window, or local time-zone rule." dos={['Explain the date’s purpose or constraint without repeating the label.', 'State important boundaries before people choose, such as “Choose a date within the next 30 days.”', 'Associate the description with the input using aria-describedby.']} donts={['Do not hide essential date rules in optional help.', 'Do not use helper text to announce an invalid date; use an error message for that.', 'Do not give a format instruction that conflicts with the browser or locale.']} />}>
          <DatePickerVariation hint="Choose a date within the next 30 days." />
        </InputVariation>
        <InputVariation title="Disabled" description="A date input that is unavailable in the current context." guidance={<InputGuidance intro="Disable a Datepicker only when the date cannot be changed right now, such as when another selection determines it or the workflow is temporarily unavailable." dos={['Explain why the date is unavailable and what action could activate it.', 'Keep the label and any current value understandable in the disabled state.', 'Use read-only text when people need to review or copy the date.']} donts={['Do not disable a date merely to prevent mistakes; constrain or validate it instead.', 'Do not disable it while loading without communicating that work is in progress.', 'Do not make a disabled date field the only place important information is available.']} />}>
          <DatePickerVariation disabled hint="Available after you choose a service." />
        </InputVariation>
        <InputVariation title="Invalid" description="A date that violates an actionable rule and needs correction." guidance={<InputGuidance intro="Show an invalid state when the entered date is missing, malformed, outside an allowed range, or conflicts with another date and the person can correct it." dos={['Name the problem and the correction, including the allowed range when useful.', 'Keep the entered value visible so people can correct it without starting over.', 'Associate the error with the input and communicate it with text, not color alone.']} donts={['Do not show an error before people have had a fair chance to choose a date.', 'Do not rely on a red border or calendar icon without an explanation.', 'Do not say only “Invalid date”; explain what a valid date looks like.']} />}>
          <DatePickerVariation invalid hint="The selected date is outside the available service window." />
        </InputVariation>
        <InputVariation title="Required" description="A date input that must have a valid value before the task can continue." guidance={<InputGuidance intro="Use a required Datepicker when the task cannot proceed without knowing the date and there is no safe default." dos={['Label the date by its purpose and state any important date boundary.', 'Write an error that names the missing action, such as “Choose a date before continuing.”', 'Return focus to the field when validation fails and preserve what the person entered.']} donts={['Do not use an error that only says “Required.”', 'Do not pre-fill a consequential date when doing so could conceal an important decision.', 'Do not require a date when the task can proceed without one.']} />}>
          <RequiredDatePickerExample />
        </InputVariation>
        <InputVariation title="Range picker" description="Two related date inputs for selecting a start and end date." guidance={<InputGuidance intro="Allow range selection when the task has a beginning and an end, such as a stay, reporting period, or date filter." dos={['Label both endpoints clearly as start and end, and explain whether the endpoints are inclusive.', 'Prevent or validate an end date before the start date and show the selected range.', 'Use a range picker when the relationship between the two dates matters.']} donts={['Do not use a range when people need only one date.', 'Do not make people infer which date is the start or end from position alone.', 'Do not silently adjust one endpoint when the other changes.']} />}>
          <DateRangePickerExample />
        </InputVariation>
        <InputVariation title="Time picker" description="A date and time selection for scheduling a specific moment." guidance={<InputGuidance intro="Allow time selection with a date when the task represents a specific moment, such as an appointment, delivery, or scheduled publication." dos={['State the time zone and whether the time uses a 12-hour or 24-hour convention.', 'Use the smallest precision the task needs and explain the consequence of changing the time.', 'Keep date and time labels separate so people can review each part.']} donts={['Do not ask for a time when only a date or approximate period matters.', 'Do not assume the user’s time zone for a cross-region event without stating it.', 'Do not hide daylight-saving or unavailable-time rules when they affect scheduling.']} />}>
          <DateTimePickerExample />
        </InputVariation>
      </div>
    </section>
  )
}

function ComboboxVariations() {
  return (
    <section className="space-y-8" aria-labelledby="combobox-variations-heading">
      <div className="space-y-5">
        <h2 id="combobox-variations-heading" className="text-2xl font-semibold tracking-tight">Examples and variations</h2>
        <p className="leading-7 text-muted-foreground">A Combobox combines an editable text input with a filtered list of suggestions. People can type to narrow the list, then choose a result.</p>
      </div>
      <div className="grid gap-8">
        <InputVariation title="Basic" description="An editable, filterable input with a single selection and no supporting text." guidance={<InputGuidance intro="A Combobox is useful when people may know part of a value and need suggestions while typing. The visible label names the field; a placeholder can show an example or format, but it cannot replace the label." dos={['Use a concise label and a familiar example as placeholder text when it helps people understand what to type.', 'Filter suggestions as people type and show a clear no-results message.', 'Let people use the keyboard to focus, filter, select, and dismiss the popup.']} donts={['Do not use placeholder text as the only label or instruction.', 'Do not use a Combobox when the list is short and a static set of radio buttons is easier to compare.', 'Do not make suggestions unrelated to the typed value or hide the current selection.']} />}>
          <ComboboxVariation />
        </InputVariation>
        <InputVariation title="With helper text" description="A single-selection Combobox with persistent guidance about the value or search behavior." guidance={<InputGuidance intro="Use helper text when people need context that remains useful while searching, such as accepted formats, data source, or whether they can choose only existing values." dos={['Explain what the suggestions represent and whether a matching option must be selected.', 'Keep essential instructions visible and associate them with the input using aria-describedby.', 'Use plain language that helps people decide what to type.']} donts={['Do not repeat the label in the helper text.', 'Do not hide required rules or important consequences in optional help.', 'Do not use helper text for a validation failure; use an error message for that.']} />}>
          <ComboboxVariation hint="Choose a country from the suggestions. Start typing to filter the list." />
        </InputVariation>
        <InputVariation title="Disabled" description="A Combobox that is unavailable in the current context." guidance={<InputGuidance intro="Disable a Combobox only when people cannot search or change the value right now, such as when another setting controls the field or required data is still unavailable." dos={['Explain why it is unavailable and what action could activate it.', 'Keep the label, current value, and supporting context understandable.', 'Use read-only text when people need to review or copy the value.']} donts={['Do not disable the field merely to prevent mistakes; validate or explain instead.', 'Do not disable it during loading without communicating that work is in progress.', 'Do not make a disabled field the only place important information is available.']} />}>
          <ComboboxVariation disabled hint="Available after you select an organization." />
        </InputVariation>
        <InputVariation title="Invalid" description="A Combobox whose value or selection conflicts with an actionable rule." guidance={<InputGuidance intro="Show an invalid state after people have had a fair chance to enter or choose a value and the value needs correction, such as when it is required or not in the available list." dos={['Explain what is wrong and the action that will fix it.', 'Keep the entered value visible so people can edit it rather than starting over.', 'Associate the error with the input using aria-describedby and communicate it with text, not color alone.']} donts={['Do not show an error before people have had a fair chance to interact.', 'Do not rely on a red border or icon without an explanation.', 'Do not write “Invalid value” without saying what a valid value looks like.']} />}>
          <ComboboxVariation invalid hint="The selected country is no longer available." />
        </InputVariation>
        <InputVariation title="Required" description="A Combobox that requires a valid country before the task can continue." guidance={<InputGuidance intro="Use a required Combobox when the task cannot proceed without a value and there is no safe default." dos={['State what people must choose and whether the value must come from the suggestions.', 'Write an error that names the missing action, such as “Choose a country before continuing.”', 'Preserve the entered text and return focus to the field when validation fails.']} donts={['Do not use an error that only says “Required.”', 'Do not pre-fill a required value when doing so could conceal an important decision.', 'Do not require a value when the task can proceed without it.']} />}>
          <RequiredComboboxExample />
        </InputVariation>
        <InputVariation title="Multiple" description="A filterable Combobox that allows several independent selections." guidance={<InputGuidance intro="Allow multiple selection when people may need more than one related value, such as several notification topics or regions." dos={['Tell people that multiple values are allowed and show selected values as removable or otherwise understandable items.', 'Keep the input available after each selection so people can continue searching.', 'Set and communicate selection limits when the list or workflow requires them.']} donts={['Do not allow multiple selection when exactly one value is required; use a single-selection Combobox or radio group.', 'Do not hide selected values or make people remember what they chose.', 'Do not silently remove selections when the input is cleared.']} />}>
          <ComboboxVariation multiple hint="Select one or more countries. Keep typing to find additional options." />
        </InputVariation>
        <InputVariation title="Option to clear" description="A single-selection Combobox with an explicit way to remove the current value." guidance={<InputGuidance intro="Offer a clear option when the field is optional or when replacing a selection is less clear than resetting it." dos={['Give the clear control an accessible name that identifies what will be cleared.', 'Return the field to its empty state and communicate the result clearly.', 'Keep the clear action separate from choosing a suggestion.']} donts={['Do not add a clear action to a required field unless clearing is a valid temporary state.', 'Do not make people delete a long value manually when a clear action is expected.', 'Do not clear the value without a visible or announced result.']} />}>
          <ComboboxVariation clearable hint="Optional. Clear the country if you do not want to filter by one." />
        </InputVariation>
        <InputVariation title="Groups" description="Suggestions organized under meaningful headings to make a larger set easier to scan." guidance={<InputGuidance intro="Group items when categories are meaningful to the decision and help people find a result. Grouping should reduce search effort, not add decorative hierarchy." dos={['Use short, recognizable group names that describe the options below them.', 'Keep groups mutually understandable and use a consistent organizing principle.', 'Preserve filtering so empty groups disappear and matching options remain easy to find.']} donts={['Do not group a short list when headings add more work than clarity.', 'Do not mix organizing principles, such as geography and popularity, in the same list.', 'Do not use group names that are vague, duplicated, or not announced to assistive technology.']} />}>
          <ComboboxVariation grouped hint="Suggestions are grouped by region to make the list easier to scan." />
        </InputVariation>
      </div>
    </section>
  )
}

function RadioButtonVariations() {
  return (
    <section className="space-y-8" aria-labelledby="radio-button-variations-heading">
      <div className="space-y-5">
        <h2 id="radio-button-variations-heading" className="text-2xl font-semibold tracking-tight">
          Examples and variations
        </h2>
        <p className="leading-7 text-muted-foreground">
          Radio Buttons present mutually exclusive options. Use the group legend to describe the single decision and each visible label to identify one possible answer.
        </p>
      </div>
      <div className="grid gap-8">
        <InputVariation
          title="Basic"
          description="A group of mutually exclusive choices with a legend and no additional supporting text."
          guidance={
            <InputGuidance
              intro="Radio buttons do not use placeholder text. The visible legend names the decision, and each option label must make its choice clear without relying on position or appearance."
              dos={[
                'Use radio buttons when exactly one option can be selected from the group.',
                'Write a concise legend that describes the question or decision shared by every option.',
                'Make each option complete and distinct so people can compare the choices.',
              ]}
              donts={[
                'Do not add placeholder text to a radio group; it cannot replace a visible legend or option label.',
                'Do not use radio buttons when people may select several options; use a Checkbox Group instead.',
                'Do not use vague options such as “Yes” and “No” without a clear legend that explains what they answer.',
              ]}
            />
          }
        >
          <RadioButtonExample idPrefix="radio-button-basic" />
        </InputVariation>

        <InputVariation
          title="With helper text"
          description="A group with persistent guidance that explains the decision or its consequence."
          guidance={
            <InputGuidance
              intro="Use helper or description text when people need context to compare the options, such as timing, eligibility, privacy, or what happens after choosing one."
              dos={[
                'Explain the consequence or rule that applies to the group, not just what the legend already says.',
                'Keep essential instructions visible and associate them with the fieldset using aria-describedby.',
                'Use plain language that helps people decide before they select an option.',
              ]}
              donts={[
                'Do not repeat the legend in the helper text.',
                'Do not hide essential eligibility rules or consequences in optional help.',
                'Do not use helper text to communicate a validation failure; use an error message for that.',
              ]}
            />
          }
        >
          <RadioButtonExample idPrefix="radio-button-helper" hint="Choose the method you check most often. You can change this preference later." />
        </InputVariation>

        <InputVariation
          title="Disabled"
          description="A group of mutually exclusive choices that is unavailable in the current context."
          guidance={
            <InputGuidance
              intro="Disable a Radio Button Group only when its decision cannot be changed right now, such as when another setting controls the available contact methods."
              dos={[
                'Explain why the group is unavailable and what action could activate it.',
                'Keep the legend, option labels, and helper text understandable in the disabled state.',
                'Use read-only text or a summary when people only need to review the current choice.',
              ]}
              donts={[
                'Do not disable the group merely to prevent mistakes; explain the consequence or validate instead.',
                'Do not disable the group during loading without communicating that work is in progress.',
                'Do not make a disabled group the only place important information is available.',
              ]}
            />
          }
        >
          <RadioButtonExample idPrefix="radio-button-disabled" disabled hint="Available after you add a verified contact method." />
        </InputVariation>

        <InputVariation
          title="Invalid"
          description="A group with no valid selection or a selection that conflicts with an actionable rule."
          guidance={
            <InputGuidance
              intro="Show an invalid state when the group violates a rule the person can correct, such as requiring one choice or making a selected option unavailable."
              dos={[
                'Explain what must be selected or changed and why the correction is needed.',
                'Keep the legend and every option visible so people can understand the decision.',
                'Associate the error with the fieldset using aria-describedby and expose the invalid state semantically.',
              ]}
              donts={[
                'Do not show an error before people have had a fair chance to make a choice.',
                'Do not rely on red borders, icons, or color alone to communicate the problem.',
                'Do not write “Invalid selection” without explaining what action will fix it.',
              ]}
            />
          }
        >
          <RadioButtonExample idPrefix="radio-button-invalid" invalid hint="Select one contact method to continue." />
        </InputVariation>

        <InputVariation
          title="Required"
          description="A group that requires exactly one choice before the person can continue."
          guidance={
            <InputGuidance
              intro="Use a required Radio Button Group when people must choose one option before continuing and there is no safe or meaningful default."
              dos={[
                'State that one option is required and write an error that names the missing action.',
                'Use a complete legend and option labels so the required decision is understandable.',
                'Preserve the unselected state when people must actively make the choice themselves.',
              ]}
              donts={[
                'Do not pre-select a required choice when doing so could conceal an important decision.',
                'Do not use an error that only says “Required.”',
                'Do not require a radio group when the person has no meaningful choice or the task can proceed without it.',
              ]}
            />
          }
        >
          <RequiredRadioButtonExample />
        </InputVariation>
      </div>
    </section>
  )
}

function CheckboxGroupVariations() {
  return (
    <section className="space-y-8" aria-labelledby="checkbox-group-variations-heading">
      <div className="space-y-5">
        <h2 id="checkbox-group-variations-heading" className="text-2xl font-semibold tracking-tight">
          Examples and variations
        </h2>
        <p className="leading-7 text-muted-foreground">
          A Checkbox Group presents several related independent choices under one clear legend. Use the group to organize the choices and the individual labels to explain each option.
        </p>
      </div>
      <div className="grid gap-8">
        <InputVariation
          title="Basic"
          description="A group of independent choices with a legend and no additional supporting text."
          guidance={
            <InputGuidance
              intro="Checkbox groups do not use placeholder text. The group legend names the decision, while each visible label names an independent option."
              dos={[
                'Use a short legend that describes the shared question or category.',
                'Write each option so it makes sense on its own and does not depend on position.',
                'Use a group when people can select more than one option.',
              ]}
              donts={[
                'Do not add placeholder text to a fieldset; it cannot replace a visible legend or option label.',
                'Do not use a group when exactly one option must be selected; use a radio group instead.',
                'Do not use vague options such as “Other” without a way to explain the other choice when needed.',
              ]}
            />
          }
        >
          <CheckboxGroupExample idPrefix="checkbox-group-basic" />
        </InputVariation>

        <InputVariation
          title="With helper text"
          description="A group with persistent guidance that explains selection rules or consequences."
          guidance={
            <InputGuidance
              intro="Use helper or description text when people need context to choose among related options, such as selection limits, notification frequency, or how choices are used."
              dos={[
                'Explain the rule or consequence that applies to the group, not just what the legend already says.',
                'Keep essential instructions visible and associate them with the fieldset using aria-describedby.',
                'Mention limits such as “Select all that apply” or “Choose up to three” before people select.',
              ]}
              donts={[
                'Do not repeat the legend in the helper text.',
                'Do not hide required selection rules or important consequences in optional help.',
                'Do not use helper text to communicate a validation failure; use an error message for that.',
              ]}
            />
          }
        >
          <CheckboxGroupExample idPrefix="checkbox-group-helper" hint="Select all that apply. We will use these choices to tailor your notifications." />
        </InputVariation>

        <InputVariation
          title="Disabled"
          description="A related set of choices that is unavailable in the current context."
          guidance={
            <InputGuidance
              intro="Disable a Checkbox Group only when none of its choices can be changed right now, such as when a plan or account setting controls the entire group."
              dos={[
                'Explain why the group is unavailable and what action could activate it.',
                'Keep the legend, option labels, and helper text understandable in the disabled state.',
                'Use read-only text or a summary when people only need to review the current choices.',
              ]}
              donts={[
                'Do not disable the group merely to prevent mistakes; explain the consequence or validate instead.',
                'Do not disable a group while loading without communicating that work is in progress.',
                'Do not make a disabled group the only place important information is available.',
              ]}
            />
          }
        >
          <CheckboxGroupExample idPrefix="checkbox-group-disabled" disabled hint="Available after you choose a notification plan." />
        </InputVariation>

        <InputVariation
          title="Invalid"
          description="A group whose current selection violates a rule that people can correct."
          guidance={
            <InputGuidance
              intro="Show an invalid state when the group violates an actionable rule, such as requiring at least one choice or exceeding a maximum number of selections."
              dos={[
                'Explain the rule and the correction, such as “Choose at least one” or “Choose no more than three.”',
                'Keep the legend and all option labels visible so people can understand the decision.',
                'Associate the error with the fieldset using aria-describedby and expose the invalid state semantically.',
              ]}
              donts={[
                'Do not show an error before people have had a fair chance to make their selections.',
                'Do not rely on red borders, icons, or color alone to communicate the problem.',
                'Do not write “Invalid selection” without explaining what action will fix it.',
              ]}
            />
          }
        >
          <CheckboxGroupExample idPrefix="checkbox-group-invalid" invalid hint="Select at least one update type." />
        </InputVariation>

        <InputVariation
          title="Required"
          description="A group that requires one or more choices before the person can continue."
          guidance={
            <InputGuidance
              intro="Use a required Checkbox Group when people must choose one or more independent options before continuing, while still allowing multiple selections."
              dos={[
                'State whether at least one option or a specific number of options is required.',
                'Write an error that names the missing action, such as “Choose at least one update type.”',
                'Preserve the unchecked state so people make the selection themselves.',
              ]}
              donts={[
                'Do not pre-select a required acknowledgment or choice without a clear reason.',
                'Do not use an error that only says “Required.”',
                'Do not require a group when the person has no meaningful choice or the task can proceed without it.',
              ]}
            />
          }
        >
          <RequiredCheckboxGroupExample />
        </InputVariation>
      </div>
    </section>
  )
}

function CheckboxVariations() {
  return (
    <section className="space-y-8" aria-labelledby="checkbox-variations-heading">
      <div className="space-y-5">
        <h2 id="checkbox-variations-heading" className="text-2xl font-semibold tracking-tight">
          Examples and variations
        </h2>
        <p className="leading-7 text-muted-foreground">
          These examples show how a Checkbox changes as the choice needs a label, persistent guidance,
          availability, validation, or a required acknowledgment. The label should always explain the
          independent choice people are making.
        </p>
      </div>
      <div className="grid gap-8">
        <InputVariation
          title="Basic"
          description="An independent choice with a visible label and no additional supporting text."
          guidance={
            <InputGuidance
              intro="Checkboxes do not use placeholder text. The visible label is the control’s name and must explain the choice or action clearly enough to stand on its own."
              dos={[
                'Write the label as a concise choice or commitment, such as “Send me product updates.”',
                'Put the meaningful outcome in the label so it remains available before and after checking.',
                'Use sentence case and make the whole label easy to activate.',
              ]}
              donts={[
                'Do not add placeholder text to a checkbox; it disappears or is not part of the checkbox name.',
                'Do not use a vague label such as “Yes,” “Enable,” or “Option 1” without naming what changes.',
                'Do not make the label describe appearance instead of the independent choice.',
              ]}
            />
          }
        >
          <CheckboxField id="checkbox-basic-variation" label="Send me product updates">
            <input id="checkbox-basic-variation" className="mt-1 size-4 accent-primary" type="checkbox" />
          </CheckboxField>
        </InputVariation>

        <InputVariation
          title="With helper text"
          description="An independent choice with persistent guidance that explains its consequence or scope."
          guidance={
            <InputGuidance
              intro="Use helper or description text when the choice has a consequence, audience, privacy implication, or other context that is useful before and after the box is checked."
              dos={[
                'Explain what happens when the choice is checked and, when useful, what happens when it is cleared.',
                'Keep the label focused on the choice and put supporting detail in the description.',
                'Associate the description with the checkbox using aria-describedby.',
              ]}
              donts={[
                'Do not repeat the label or add text that does not help someone decide.',
                'Do not hide consent terms, eligibility rules, or essential consequences only in optional help.',
                'Do not use helper text for a validation problem that belongs in an error message.',
              ]}
            />
          }
        >
          <CheckboxField
            id="checkbox-helper-variation"
            label="Share usage data"
            hint="Helps us improve the product. Your content is not shared with other customers."
          >
            <input
              id="checkbox-helper-variation"
              className="mt-1 size-4 accent-primary"
              type="checkbox"
              aria-describedby="checkbox-helper-variation-hint"
            />
          </CheckboxField>
        </InputVariation>

        <InputVariation
          title="Disabled"
          description="An independent choice that is unavailable in the current context."
          guidance={
            <InputGuidance
              intro="Disable a Checkbox only when people cannot meaningfully change the choice right now, such as a feature unavailable to their account or an option controlled by another setting."
              dos={[
                'Explain why the choice is unavailable and what action could activate it.',
                'Keep the label and current state understandable even when the checkbox cannot be focused.',
                'Use read-only text or a non-interactive status when people only need to know the setting.',
              ]}
              donts={[
                'Do not disable a checkbox merely to prevent mistakes; explain the consequence or validate instead.',
                'Do not disable it while saving or loading without communicating that work is in progress.',
                'Do not make a disabled checkbox the only place important information is available.',
              ]}
            />
          }
        >
          <CheckboxField
            id="checkbox-disabled-variation"
            disabled
            label="Enable advanced analytics"
            hint="Available on the Business plan."
          >
            <input
              id="checkbox-disabled-variation"
              className="mt-1 size-4 accent-primary disabled:cursor-not-allowed disabled:opacity-50"
              type="checkbox"
              disabled
              aria-describedby="checkbox-disabled-variation-hint"
            />
          </CheckboxField>
        </InputVariation>

        <InputVariation
          title="Invalid"
          description="A Checkbox whose current state conflicts with a known rule and needs correction."
          guidance={
            <InputGuidance
              intro="Show an invalid state when the checkbox state violates a requirement the person can act on, such as a required confirmation that is unchecked or a choice that conflicts with another setting."
              dos={[
                'Explain what must be checked or changed and why the correction is needed.',
                'Keep the label and current state visible so people can understand the decision.',
                'Connect the error with aria-describedby and aria-invalid, and place it close to the checkbox.',
              ]}
              donts={[
                'Do not show an error before people have had a fair chance to make the choice.',
                'Do not rely on a red outline or icon without text.',
                'Do not use “Invalid checkbox” without explaining the action that will fix it.',
              ]}
            />
          }
        >
          <CheckboxField
            id="checkbox-invalid-variation"
            label="Confirm this workspace is ready to archive"
            error="Confirm the workspace is ready before archiving it."
          >
            <input
              id="checkbox-invalid-variation"
              className="mt-1 size-4 accent-destructive"
              type="checkbox"
              aria-invalid="true"
              aria-describedby="checkbox-invalid-variation-error"
            />
          </CheckboxField>
        </InputVariation>

        <InputVariation
          title="Required"
          description="A Checkbox that must be checked before the task can be completed."
          guidance={
            <InputGuidance
              intro="Use a required Checkbox when the person must actively acknowledge a term, confirm a condition, or choose an independent option before continuing."
              dos={[
                'Write the label as a clear statement of what checking means, not as a vague agreement.',
                'Explain the requirement before submission and write an error that gives a direct action.',
                'Preserve the unchecked state so the person must make the acknowledgment themselves.',
              ]}
              donts={[
                'Do not pre-check a required acknowledgment or use checking as a substitute for informed consent.',
                'Do not use an error that only says “Required.”',
                'Do not require a checkbox when the person has no meaningful choice or the task can proceed without it.',
              ]}
            />
          }
        >
          <RequiredCheckboxExample />
        </InputVariation>
      </div>
    </section>
  )
}

function BasicExample({ kind }: { kind: FormKind }) {
  switch (kind) {
    case 'input':
      return (
        <Field id="intro-input" label="Email address">
          <input
            id="intro-input"
            className={inputClass}
            type="email"
            placeholder="you@example.com"
          />
        </Field>
      )
    case 'select':
      return (
        <Field id="intro-select" label="Contact preference">
          <select id="intro-select" className={inputClass} defaultValue="email">
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </Field>
      )
    case 'textarea':
      return (
        <Field id="intro-textarea" label="Message">
          <textarea
            id="intro-textarea"
            className={`${inputClass} min-h-24 resize-y`}
            placeholder="Write a message"
          />
        </Field>
      )
    case 'checkbox':
      return (
        <label className="flex items-center gap-3 text-sm" htmlFor="intro-checkbox">
          <input id="intro-checkbox" className="size-4 accent-primary" type="checkbox" />
          <span>Send me product updates</span>
        </label>
      )
    case 'checkbox-group':
      return (
        <fieldset className="space-y-3">
          <legend className="text-sm font-medium">Topics of interest</legend>
          <label className="flex items-center gap-3 text-sm" htmlFor="intro-checkbox-a">
            <input id="intro-checkbox-a" className="size-4 accent-primary" type="checkbox" />
            <span>Accessibility</span>
          </label>
          <label className="flex items-center gap-3 text-sm" htmlFor="intro-checkbox-b">
            <input id="intro-checkbox-b" className="size-4 accent-primary" type="checkbox" />
            <span>Design systems</span>
          </label>
        </fieldset>
      )
    case 'radio-group':
      return (
        <fieldset className="space-y-3">
          <legend className="text-sm font-medium">Notification frequency</legend>
          <label className="flex items-center gap-3 text-sm" htmlFor="intro-frequency">
            <input
              id="intro-frequency"
              className="size-4 accent-primary"
              type="radio"
              name="intro-frequency"
              defaultChecked
            />
            <span>Immediately</span>
          </label>
          <label className="flex items-center gap-3 text-sm" htmlFor="intro-frequency-daily">
            <input
              id="intro-frequency-daily"
              className="size-4 accent-primary"
              type="radio"
              name="intro-frequency"
            />
            <span>Daily digest</span>
          </label>
        </fieldset>
      )
    case 'combobox':
      return <BasicComboboxExample />
    case 'datepicker':
      return (
        <Field id="intro-datepicker" label="Start date">
          <input
            id="intro-datepicker"
            className={`${inputClass} [color-scheme:light]`}
            type="date"
          />
        </Field>
      )
  }
}
