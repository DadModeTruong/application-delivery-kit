/**
 * Forms component area and component reference pages.
 *
 * Form controls collect information. Each guide keeps the semantic HTML
 * behavior visible while demonstrating the equivalent shadcn-style pattern.
 */
/* eslint-disable react-refresh/only-export-components */

import { useState } from 'react'
import {
  AlignLeft,
  CalendarDays,
  CheckSquare,
  ChevronsUpDown,
  ListChecks,
  ListFilter,
  Radio,
  TextCursorInput,
} from 'lucide-react'
import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { SecondaryNav } from '@/components/layout/secondary-nav'
import { Sidebar } from '@/components/layout/sidebar'
import type { NavGroup, NavLeaf } from '@/components/layout/types'
import { primaryNav, footerLinks } from '../page-registry'

const componentAreaLinks: NavLeaf[] = [
  { href: '/components/user-interface', label: 'User Interface' },
  { href: '/components/interaction', label: 'Interaction' },
  { href: '/components/forms', label: 'Forms' },
]

const formComponents: (NavLeaf | NavGroup)[] = [
  { href: '/components/forms', label: 'Forms' },
  {
    label: 'Form controls',
    items: [
      { href: '/components/input', label: 'Input', icon: TextCursorInput },
      { href: '/components/select', label: 'Select', icon: ListFilter },
      { href: '/components/textarea', label: 'Text area', icon: AlignLeft },
      { href: '/components/checkbox', label: 'Checkbox', icon: CheckSquare },
      { href: '/components/checkbox-group', label: 'Checkbox group', icon: ListChecks },
      { href: '/components/radio', label: 'Radio button', icon: Radio },
      { href: '/components/combobox', label: 'Combobox', icon: ChevronsUpDown },
      { href: '/components/datepicker', label: 'Datepicker', icon: CalendarDays },
    ],
  },
]

const inputClass =
  'mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring'
const panelClass = 'rounded-xl border bg-card p-6 shadow-xs'
type FormKind =
  | 'input'
  | 'select'
  | 'textarea'
  | 'checkbox'
  | 'checkbox-group'
  | 'radio-group'
  | 'combobox'
  | 'datepicker'

type FormGuideProps = {
  title: string
  description: string
  kind: FormKind
  activeHref?: string
}

function Field({
  id,
  label,
  children,
  hint,
}: {
  id?: string
  label: string
  children: React.ReactNode
  hint?: string
}) {
  return (
    <div>
      <label
        className="text-sm font-medium"
        htmlFor={id ?? label.toLowerCase().replaceAll(' ', '-')}
      >
        {label}
      </label>
      {children}
      {hint && (
        <p id={id ? `${id}-hint` : undefined} className="mt-2 text-sm text-muted-foreground">
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
      <label className="text-sm font-medium" htmlFor="basic-combobox">
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
            label="Account region"
            hint="Set by your organization administrator; not editable here."
          >
            <input
              id="input-disabled-variation"
              className={inputClass}
              type="text"
              value="US East"
              disabled
              readOnly
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
          <Field id="input-required-variation" label="Project name">
            <input
              id="input-required-variation"
              className={inputClass}
              type="text"
              required
              aria-required="true"
              aria-describedby="input-required-variation-hint"
            />
            <p id="input-required-variation-hint" className="mt-2 text-sm text-muted-foreground">
              Required for creating the project.
            </p>
          </Field>
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
            hint="PDF or DOCX, up to 10 MB."
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

function BasicExample({ kind }: { kind: FormKind }) {
  switch (kind) {
    case 'input':
      return (
        <Field id="basic-input" label="Email address">
          <input
            id="basic-input"
            className={inputClass}
            type="email"
            placeholder="you@example.com"
          />
        </Field>
      )
    case 'select':
      return (
        <Field id="basic-select" label="Contact preference">
          <select id="basic-select" className={inputClass} defaultValue="email">
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </Field>
      )
    case 'textarea':
      return (
        <Field id="basic-textarea" label="Message">
          <textarea
            id="basic-textarea"
            className={`${inputClass} min-h-24 resize-y`}
            placeholder="Write a message"
          />
        </Field>
      )
    case 'checkbox':
      return (
        <label className="flex items-center gap-3 text-sm" htmlFor="basic-checkbox">
          <input id="basic-checkbox" className="size-4 accent-primary" type="checkbox" />
          <span>Send me product updates</span>
        </label>
      )
    case 'checkbox-group':
      return (
        <fieldset className="space-y-3">
          <legend className="text-sm font-medium">Topics of interest</legend>
          <label className="flex items-center gap-3 text-sm" htmlFor="basic-checkbox-a">
            <input id="basic-checkbox-a" className="size-4 accent-primary" type="checkbox" />
            <span>Accessibility</span>
          </label>
          <label className="flex items-center gap-3 text-sm" htmlFor="basic-checkbox-b">
            <input id="basic-checkbox-b" className="size-4 accent-primary" type="checkbox" />
            <span>Design systems</span>
          </label>
        </fieldset>
      )
    case 'radio-group':
      return (
        <fieldset className="space-y-3">
          <legend className="text-sm font-medium">Notification frequency</legend>
          <label className="flex items-center gap-3 text-sm" htmlFor="basic-frequency">
            <input
              id="basic-frequency"
              className="size-4 accent-primary"
              type="radio"
              name="basic-frequency"
              defaultChecked
            />
            <span>Immediately</span>
          </label>
          <label className="flex items-center gap-3 text-sm" htmlFor="basic-frequency-daily">
            <input
              id="basic-frequency-daily"
              className="size-4 accent-primary"
              type="radio"
              name="basic-frequency"
            />
            <span>Daily digest</span>
          </label>
        </fieldset>
      )
    case 'combobox':
      return <BasicComboboxExample />
    case 'datepicker':
      return (
        <Field id="basic-datepicker" label="Start date">
          <input
            id="basic-datepicker"
            className={`${inputClass} [color-scheme:light]`}
            type="date"
          />
        </Field>
      )
  }
}

type GuideContent = {
  what: string
  use: string[]
  notUse: string[]
  design: string[]
  accessibility: string[]
  responsive: string
  examples: string
}
const guideContent: Record<FormKind, GuideContent> = {
  input: {
    what: 'A single-line field for a short value such as a name, email address, search term, or account ID.',
    use: [
      'Enter or edit one short value.',
      'Use a type that matches the value, such as email, password, search, or number.',
    ],
    notUse: [
      'For multiple lines; use Text area.',
      'For a known set of choices; use Select, Radio group, or Combobox.',
    ],
    design: [
      'Keep label, help, and errors close.',
      'Use an action beside the field only when it directly supports the value.',
    ],
    accessibility: [
      'Use a visible label and connect descriptions and errors.',
      'Preserve the value when validation fails.',
    ],
    responsive:
      'Let the field fill available width. Stack a related action when the row becomes crowded.',
    examples:
      'Compare basic, required, invalid, and disabled TextField states. Add a state only when the workflow needs it.',
  },
  select: {
    what: 'A control for choosing one option from a known list that opens when activated.',
    use: ['Use a short or moderately sized list.', 'Use a prompt when there is no safe default.'],
    notUse: [
      'For a long list that needs search; use Combobox.',
      'For several selections; use Checkbox group.',
      'For a few choices that should be visible together; use Radio group.',
    ],
    design: [
      'Order options predictably.',
      'Group options only when group labels help people find a choice.',
    ],
    accessibility: [
      'Expose the label, expanded state, and selected option.',
      'Make options keyboard reachable and communicate unavailable choices.',
    ],
    responsive:
      'Give the popup enough width for the longest option and keep it within the viewport.',
    examples:
      'Compare a selected value, required prompt, and disabled Select. Choose Select when scanning is easier than searching.',
  },
  textarea: {
    what: 'A multi-line field for a longer, free-form response.',
    use: [
      'Use it for comments, descriptions, messages, or other text that may need more than one line.',
      'Add writing guidance or a limit when it helps.',
    ],
    notUse: ['For a short structured value; use Input.', 'For choosing from known options.'],
    design: ['Give it a useful starting height.', 'Retain the response when validation fails.'],
    accessibility: [
      'Connect label, description, limit, and error to the field.',
      'Do not communicate limits with color alone.',
    ],
    responsive:
      'Allow vertical growth and wrapping. Avoid fixed heights that hide content on small screens.',
    examples:
      'Compare described, invalid, and disabled TextArea states. Use the basic field first, then add constraints only when needed.',
  },
  checkbox: {
    what: 'One independent choice that can be on or off without changing other choices.',
    use: [
      'Use for preferences, opt-ins, confirmations, or independent permissions.',
      'Use indeterminate only for a parent that represents partially selected children.',
    ],
    notUse: [
      'For exactly one choice from a set; use Radio group.',
      'For navigation or submission; use a link or button.',
    ],
    design: [
      'Make the label and supporting text easy to activate.',
      'Make the consequence clear, especially for consent.',
    ],
    accessibility: [
      'Expose checked, mixed, disabled, and invalid states.',
      'Use a group label when several checkboxes answer one question.',
    ],
    responsive: 'Let labels wrap and align the checkbox with the first line of long text.',
    examples:
      'Compare independent, selected, and disabled Checkbox states. Use Checkbox when each choice can stand on its own.',
  },
  'checkbox-group': {
    what: 'Related checkboxes answering one question where zero, one, or several options may be selected.',
    use: [
      'Use for interests, notification channels, permissions, or services.',
      'Require the group only when at least one choice is necessary.',
    ],
    notUse: [
      'For unrelated questions.',
      'When only one answer is valid; use Radio group or Select.',
    ],
    design: [
      'Use one clear group label.',
      'Use a parent checkbox only when it controls visible child choices.',
    ],
    accessibility: [
      'Use fieldset/legend or the React Aria group relationship.',
      'Make group-level errors easy to find.',
    ],
    responsive: 'Stack choices and keep descriptions with their choices.',
    examples:
      'Compare multiple selection and required-group states. Choose this pattern when several answers can be true at once.',
  },
  'radio-group': {
    what: 'A radio button is one option within a related set of mutually exclusive choices. In practice, radio buttons should be presented as a radio group with one shared question and one selected value.',
    use: [
      'Use for a small, visible set where exactly one choice is needed.',
      'Use a default only when it is safe and likely correct.',
    ],
    notUse: ['When several choices can be selected.', 'For long lists; use Select or Combobox.'],
    design: [
      'Keep the complete set visible when comparison matters.',
      'Use vertical layout for long labels.',
    ],
    accessibility: [
      'Give the set one label and expose selected state.',
      'Support arrow-key movement and visible focus.',
    ],
    responsive: 'Let horizontal choices wrap or stack without truncation.',
    examples:
      'Use a radio group for one-of-many decisions, with descriptions when the consequences differ.',
  },
  combobox: {
    what: 'Text entry combined with suggestions so people can search for and select an option.',
    use: [
      'Use when filtering helps people find an option in a long list.',
      'Allow custom values only when values outside the list are valid.',
    ],
    notUse: [
      'For a tiny list that is faster to scan.',
      'When only approved records are valid and custom values are not supported.',
    ],
    design: [
      'Show typed value, suggestions, and open state clearly.',
      'Provide useful no-results feedback.',
    ],
    accessibility: [
      'Expose input, popup, active option, and selected option relationships.',
      'Support keyboard navigation without unexpected focus traps.',
    ],
    responsive: 'Keep the popup aligned and wide enough for results; let descriptions wrap.',
    examples: 'Use the simple searchable list to understand when finding an option is the problem.',
  },
  datepicker: {
    what: 'A control for entering a calendar date through an accessible field and, when useful, a calendar popup.',
    use: [
      'Use for due dates, appointments, dates of birth, or reporting periods.',
      'Use constraints when the business rule is known in advance.',
    ],
    notUse: [
      'For a simple month or year choice; use Select.',
      'When the calendar would be the only way to enter a date.',
    ],
    design: [
      'Show the expected format and explain constraints.',
      'Use ranges, date-time, or presets only when the task needs them.',
    ],
    accessibility: [
      'Support segmented keyboard entry, calendar navigation, and visible focus.',
      'Expose selected, today, unavailable, disabled, and invalid states.',
    ],
    responsive:
      'Keep the calendar within the viewport and make date segments easy to edit on small screens.',
    examples:
      'Use direct entry alongside calendar navigation, and choose the simplest date pattern that matches the question.',
  },
}

const sectionDetails: Record<
  FormKind,
  {
    useIntro: string
    notUseIntro: string
    designIntro: string
    accessibilityIntro: string
    responsiveIntro: string
    useMore: string[]
    notUseMore: string[]
    designMore: string[]
    accessibilityMore: string[]
  }
> = {
  input: {
    useIntro:
      'Input works best when the answer is short enough to understand as one line and structured enough to validate.',
    notUseIntro:
      'The familiar text field is not automatically the right pattern when the person needs to choose, write at length, or take an action.',
    designIntro:
      'The label and supporting content should explain what belongs in the field before typing begins.',
    accessibilityIntro:
      'The purpose, instructions, current value, state, and error should be available regardless of input method.',
    responsiveIntro:
      'A field can become cramped when an action, unit, or error is placed beside it.',
    useMore: ['Use autocomplete when the browser can safely help with a known personal value.'],
    notUseMore: ['Do not use a single-line field for a narrative response.'],
    designMore: [
      'Choose a width that reflects the expected answer instead of making every field equally wide.',
    ],
    accessibilityMore: [
      'Use the correct input type, autocomplete, and inputmode when they make entry easier.',
    ],
  },
  select: {
    useIntro:
      'Select is useful when one known value must be chosen and seeing every option at once is not necessary.',
    notUseIntro:
      'Select becomes a poor choice when people must compare options, search a large collection, or choose more than one value.',
    designIntro:
      'The closed control should communicate both the question and the current answer; the open menu should be easy to scan.',
    accessibilityIntro:
      'The trigger, popup, selection, and keyboard path must remain understandable as one control.',
    responsiveIntro:
      'The popup is part of the responsive design and must remain readable near any edge of the screen.',
    useMore: ['Use a stable option order so returning users can predict where a choice will be.'],
    notUseMore: ['Do not hide a decision people need to compare side by side.'],
    designMore: ['Make placeholder text distinct from a selected value.'],
    accessibilityMore: ['Keep option names meaningful out of visual context.'],
  },
  textarea: {
    useIntro:
      'Text area is for language that may naturally grow beyond a line; people should be able to review what they wrote.',
    notUseIntro:
      'A large writing surface is the wrong choice for a short, structured value or a known set of options.',
    designIntro:
      'The starting size, prompt, and length guidance should set expectations without making the field feel like a test.',
    accessibilityIntro:
      'Long responses, help text, and errors must remain associated with the same field as it grows.',
    responsiveIntro:
      'The control should provide more room vertically rather than forcing horizontal scrolling.',
    useMore: ['Use a minimum length only when the task truly needs enough detail to be useful.'],
    notUseMore: [
      'Do not use a text area for an email, date, identifier, or other structured value.',
    ],
    designMore: ['Show a character count when the limit changes how someone should write.'],
    accessibilityMore: [
      'Make the limit available as text and avoid premature errors while typing.',
    ],
  },
  checkbox: {
    useIntro:
      'Checkbox is the right mental model when each option can be independently true or false.',
    notUseIntro:
      'Checkbox is often confused with a radio button, switch, or submit action; its meaning should remain an independent choice.',
    designIntro:
      'The copy should describe the preference or confirmation, including what changes after selection.',
    accessibilityIntro:
      'Checked, unchecked, mixed, disabled, and invalid states need names and relationships beyond the visual mark.',
    responsiveIntro:
      'Long preference and consent labels need room to wrap while keeping the control aligned.',
    useMore: ['Use an explicit opt-in for optional communications or features.'],
    notUseMore: ['Do not precheck a consequential consent choice.'],
    designMore: ['Put the consequence in the label or nearby description, not behind a tooltip.'],
    accessibilityMore: [
      'Make the full label target clickable without creating a conflicting accessible name.',
    ],
  },
  'checkbox-group': {
    useIntro:
      'A group is appropriate when several choices answer the same question and more than one answer can be true.',
    notUseIntro:
      'Grouping changes the meaning of the controls, so it is incorrect for unrelated or mutually exclusive choices.',
    designIntro:
      'The group label should name the shared question; each option should name one possible answer.',
    accessibilityIntro:
      'The group relationship helps people understand the question before hearing individual options.',
    responsiveIntro:
      'A vertical list usually gives related choices the clearest reading and activation order.',
    useMore: ['Offer a “none” option when selecting nothing is meaningful and valid.'],
    notUseMore: ['Do not require a group when “none” is valid but is not offered.'],
    designMore: ['Keep the legend, help, error, and options visually close.'],
    accessibilityMore: [
      'Make a mixed parent state understandable without relying on checkbox appearance.',
    ],
  },
  'radio-group': {
    useIntro:
      'Radio buttons are normally used together as a group: people compare the available answers to one question and choose exactly one.',
    notUseIntro:
      'It is the wrong model when several values may be selected or the options are too numerous to compare.',
    designIntro:
      'Treat the group as one decision, with each option providing a clearly comparable answer.',
    accessibilityIntro:
      'The group label, selected value, disabled choices, and error should be announced in a useful order.',
    responsiveIntro:
      'Descriptions usually make a stacked layout safer; compact horizontal choices must still wrap predictably.',
    useMore: [
      'Use controlled state when the selection immediately changes another visible value, such as a price.',
    ],
    notUseMore: ['Do not use a group when a single checkbox expresses the preference.'],
    designMore: [
      'Make the selected result visible beyond the small radio indicator when it has consequences.',
    ],
    accessibilityMore: [
      'Put group errors near the group instead of repeating them for every option.',
    ],
  },
  combobox: {
    useIntro:
      'Combobox is useful when finding the right option requires typing, filtering, or recognizing a value from a large collection.',
    notUseIntro:
      'It adds interaction complexity, so it is not an improvement when a short visible list would be quicker.',
    designIntro:
      'People should understand whether they are searching, selecting an existing record, or entering a new value.',
    accessibilityIntro:
      'The input, suggestions, active result, selected result, and popup state must form one coherent interaction.',
    responsiveIntro:
      'Results need enough space for names and supporting information without running off-screen.',
    useMore: [
      'Use it for people, projects, countries, or other collections that are difficult to scan.',
    ],
    notUseMore: ['Do not use it as decorative autocomplete for a short list.'],
    designMore: ['Keep the typed value visible while results update.'],
    accessibilityMore: ['Announce loading and no-results states without erasing the query.'],
  },
  datepicker: {
    useIntro:
      'Datepicker is appropriate when the value is a calendar date and people benefit from direct entry and calendar navigation.',
    notUseIntro:
      'A calendar adds work to a simple choice and is the wrong tool for a month, year, duration, or time-only value.',
    designIntro:
      'The format, allowed range, unavailable dates, and relationship to nearby dates should be clear before submission.',
    accessibilityIntro:
      'People must be able to edit date segments, navigate the calendar, identify today and selected dates, and recover from invalid input.',
    responsiveIntro:
      'The calendar must stay within the viewport while the date field remains comfortable to edit on a small screen.',
    useMore: ['Use constraints for real rules such as future appointments or a contract period.'],
    notUseMore: ['Do not force calendar navigation for a date people can enter more quickly.'],
    designMore: [
      'Explain whether the date uses the person’s locale or a specific business timezone.',
    ],
    accessibilityMore: ['Keep keyboard entry available alongside the calendar trigger.'],
  },
}

function GuideList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
function FormGuide({
  title,
  description,
  kind,
  activeHref = `/components/${kind === 'datepicker' ? 'datepicker' : kind}`,
}: FormGuideProps) {
  const content = guideContent[kind]
  const detail = sectionDetails[kind]
  return (
    <LayoutProvider
      secondaryNav={componentAreaLinks}
      secondaryNavLabel="Component areas"
      sidebarNav={formComponents}
      sidebarNavLabel="Forms components"
      activeHref={activeHref}
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Component areas" activeHref="/components/forms" />
        <PageBody>
          <Sidebar aria-label="Forms components" />
          <Main size="full">
            <div className="space-y-14 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
              <section className="space-y-5">
                <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
                <p className="text-xl leading-8 text-muted-foreground">{description}</p>
              </section>
              <section className="space-y-5">
                <h2 className="text-2xl font-semibold tracking-tight">What is it?</h2>
                <p className="leading-7 text-muted-foreground">
                  {content.what} This first example is intentionally simple: use it to recognize the
                  control before thinking about its states or styling.
                </p>
                <div className={panelClass}>
                  <div className="max-w-xl">
                    <BasicExample kind={kind} />
                  </div>
                </div>
              </section>
              <section className="grid gap-10 lg:grid-cols-2">
                <div className="space-y-5">
                  <h2 className="text-2xl font-semibold tracking-tight">When to use it</h2>
                  <p className="leading-7 text-muted-foreground">{detail.useIntro}</p>
                  <GuideList items={[...content.use, ...detail.useMore]} />
                </div>
                <div className="space-y-5">
                  <h2 className="text-2xl font-semibold tracking-tight">When not to use it</h2>
                  <p className="leading-7 text-muted-foreground">{detail.notUseIntro}</p>
                  <GuideList items={[...content.notUse, ...detail.notUseMore]} />
                </div>
              </section>
              <section className="space-y-5">
                <h2 className="text-2xl font-semibold tracking-tight">Design considerations</h2>
                <p className="leading-7 text-muted-foreground">{detail.designIntro}</p>
                <GuideList items={[...content.design, ...detail.designMore]} />
              </section>
              <section className="space-y-5">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Accessibility considerations
                </h2>
                <p className="leading-7 text-muted-foreground">{detail.accessibilityIntro}</p>
                <GuideList items={[...content.accessibility, ...detail.accessibilityMore]} />
              </section>
              <section className="space-y-5">
                <h2 className="text-2xl font-semibold tracking-tight">Responsive behavior</h2>
                <p className="leading-7 text-muted-foreground">{detail.responsiveIntro}</p>
                <p className="leading-7 text-muted-foreground">{content.responsive}</p>
              </section>
              {kind === 'input' && <InputVariations />}
            </div>
          </Main>
        </PageBody>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

function ComponentsFormsPage() {
  return (
    <LayoutProvider
      secondaryNav={componentAreaLinks}
      secondaryNavLabel="Component areas"
      sidebarNav={formComponents}
      sidebarNavLabel="Forms components"
      activeHref="/components/forms"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Component areas" />
        <PageBody>
          <Sidebar aria-label="Forms components" />
          <Main size="full">
            <div className="space-y-14 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
              <section className="space-y-5" aria-labelledby="forms-heading">
                <h1 id="forms-heading" className="text-4xl font-semibold tracking-tight">
                  Forms
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  Form components help people enter, choose, and review information. The right
                  control makes the expected value clear before someone starts typing or selecting.
                </p>
              </section>
              <section className="space-y-5" aria-labelledby="forms-what-heading">
                <h2 id="forms-what-heading" className="text-2xl font-semibold tracking-tight">
                  What belongs here?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  This area covers controls for collecting structured information, from a short text
                  value to a date or a set of related choices. Each control should have a visible
                  label, a useful name, and a clear relationship to its help or error message.
                </p>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>
                    Choose the control that matches the value and number of available choices.
                  </li>
                  <li>
                    Group related choices with a fieldset and legend when they share one question.
                  </li>
                  <li>
                    Keep instructions close enough to help without interrupting the reading order.
                  </li>
                </ul>
              </section>
              <section
                className="grid gap-10 lg:grid-cols-2"
                aria-labelledby="forms-decisions-heading"
              >
                <div className="space-y-5">
                  <h2
                    id="forms-decisions-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    Good form design
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>Uses labels that describe the value, not just the visual appearance.</li>
                    <li>Shows required, optional, unavailable, and invalid states in text.</li>
                    <li>Preserves the user’s input when validation finds a problem.</li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="forms-not-heading">
                  <h2 id="forms-not-heading" className="text-2xl font-semibold tracking-tight">
                    What it should not do
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>Use placeholder text as the only label or instruction.</li>
                    <li>Make a long list of choices harder to use than a searchable combobox.</li>
                    <li>Rely on color, position, or an icon alone to communicate an error.</li>
                  </ul>
                </div>
              </section>
              <section className="space-y-5" aria-labelledby="forms-guidance-heading">
                <h2 id="forms-guidance-heading" className="text-2xl font-semibold tracking-tight">
                  Good design and usage
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>Start with the smallest control that can express the expected value.</li>
                  <li>
                    Use Select for a short known list; use Combobox when filtering helps people find
                    an option.
                  </li>
                  <li>
                    Use Checkbox for independent choices and Radio group for mutually exclusive
                    choices.
                  </li>
                  <li>Use Datepicker for dates while keeping a keyboard-friendly input path.</li>
                  <li>
                    Test the complete form with a keyboard and a screen reader before shipping it.
                  </li>
                </ul>
              </section>
            </div>
          </Main>
        </PageBody>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

const guides: Record<Exclude<FormKind, 'input'> | 'input', [string, string]> = {
  input: [
    'Input',
    'Use Input for a short, single-line value such as a name, email address, or search term.',
  ],
  select: [
    'Select',
    'Use Select when people choose one option from a known, relatively stable list.',
  ],
  textarea: [
    'Text area',
    'Use Text area for a longer, free-form response that may need multiple lines.',
  ],
  checkbox: [
    'Checkbox',
    'Use Checkbox for an independent yes/no preference or a choice that can be selected on its own.',
  ],
  'checkbox-group': [
    'Checkbox group',
    'Use a Checkbox group when people may choose zero, one, or several related options.',
  ],
  'radio-group': [
    'Radio button',
    'Use Radio buttons as a group when people must choose exactly one option from a small set of mutually exclusive choices.',
  ],
  combobox: [
    'Combobox',
    'Use Combobox when people need to choose from a list that can be searched or filtered.',
  ],
  datepicker: [
    'Datepicker',
    'Use Datepicker for a calendar date. Preserve a usable text and keyboard path alongside calendar affordances.',
  ],
}

function makeGuide(kind: FormKind, activeHref?: string) {
  const [title, description] = guides[kind]
  return function GuidePage() {
    return <FormGuide kind={kind} title={title} description={description} activeHref={activeHref} />
  }
}

const ComponentsInputPage = makeGuide('input')
const ComponentsSelectPage = makeGuide('select')
const ComponentsTextareaPage = makeGuide('textarea')
const ComponentsCheckboxPage = makeGuide('checkbox')
const ComponentsCheckboxGroupPage = makeGuide('checkbox-group')
const ComponentsRadioPage = makeGuide('radio-group', '/components/radio')
const ComponentsComboboxPage = makeGuide('combobox')
const ComponentsDatepickerPage = makeGuide('datepicker')

export {
  ComponentsFormsPage,
  ComponentsInputPage,
  ComponentsSelectPage,
  ComponentsTextareaPage,
  ComponentsCheckboxPage,
  ComponentsCheckboxGroupPage,
  ComponentsRadioPage,
  ComponentsComboboxPage,
  ComponentsDatepickerPage,
}
