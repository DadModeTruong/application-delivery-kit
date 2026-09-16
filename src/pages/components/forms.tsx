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
  CircleDot,
  ListChecks,
  ListFilter,
  Radio,
  TextCursorInput,
} from 'lucide-react'
import {
  Button as AriaButton,
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  ComboBox as AriaComboBox,
  DateInput,
  DatePicker as AriaDatePicker,
  DateSegment,
  FieldError as AriaFieldError,
  Input as AriaInput,
  Label as AriaLabel,
  ListBox,
  ListBoxItem,
  Popover,
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  Select as AriaSelect,
  SelectValue,
  Text as AriaText,
  TextArea as AriaTextArea,
  TextField as AriaTextField,
} from 'react-aria-components'
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
      { href: '/components/radio', label: 'Radio button', icon: CircleDot },
      { href: '/components/radio-group', label: 'Radio button group', icon: Radio },
      { href: '/components/combobox', label: 'Combobox', icon: ChevronsUpDown },
      { href: '/components/datepicker', label: 'Datepicker', icon: CalendarDays },
    ],
  },
]

const inputClass =
  'mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring'
const panelClass = 'rounded-xl border bg-card p-6 shadow-xs'
const ariaFieldClass =
  'mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring'
const ariaGroupClass =
  'mt-2 flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm'

type FormKind =
  | 'input'
  | 'select'
  | 'textarea'
  | 'checkbox'
  | 'checkbox-group'
  | 'radio'
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
      {hint && <p className="mt-2 text-sm text-muted-foreground">{hint}</p>}
    </div>
  )
}

function ExampleFrame({
  label,
  description,
  children,
}: {
  label: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-3 rounded-lg border bg-background p-4">
      <p className="text-sm font-semibold">{label}</p>
      {description && <p className="text-sm leading-6 text-muted-foreground">{description}</p>}
      {children}
    </div>
  )
}

function Examples({ kind }: { kind: FormKind }) {
  const [selectedFrequency, setSelectedFrequency] = useState('Immediately')
  const [selectedCountry, setSelectedCountry] = useState('United States')
  const [countryOpen, setCountryOpen] = useState(false)
  const [date, setDate] = useState('')

  switch (kind) {
    case 'input':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          <ExampleFrame label="A blank field">
            <Field id="input-blank-email" label="Email address" hint="We’ll send the receipt here.">
              <input
                id="input-blank-email"
                className={inputClass}
                type="email"
                placeholder="you@example.com"
              />
            </Field>
          </ExampleFrame>
          <ExampleFrame label="A field with an error">
            <Field
              id="input-error-email"
              label="Email address"
              hint="Enter an email in the format you@example.com."
            >
              <input
                id="input-error-email"
                className={`${inputClass} border-destructive`}
                type="email"
                value="tommy@"
                readOnly
                aria-invalid="true"
              />
            </Field>
            <p className="mt-2 text-sm font-medium text-destructive">
              Enter a complete email address.
            </p>
          </ExampleFrame>
          <ExampleFrame label="An optional field">
            <Field id="input-optional-company" label="Company (optional)">
              <input
                id="input-optional-company"
                className={inputClass}
                type="text"
                placeholder="Acme, Inc."
              />
            </Field>
          </ExampleFrame>
          <ExampleFrame label="A disabled field">
            <Field id="input-disabled-account" label="Account ID">
              <input
                id="input-disabled-account"
                className={inputClass}
                type="text"
                value="ACC-2048"
                disabled
                readOnly
              />
            </Field>
          </ExampleFrame>
        </div>
      )
    case 'select':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          <ExampleFrame label="A short list">
            <Field id="select-contact" label="Contact preference">
              <select id="select-contact" className={inputClass} defaultValue="email">
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="none">Do not contact me</option>
              </select>
            </Field>
          </ExampleFrame>
          <ExampleFrame label="A required choice">
            <Field
              id="select-priority"
              label="Priority"
              hint="Choose the option that best matches the request."
            >
              <select id="select-priority" className={inputClass} defaultValue="" required>
                <option value="" disabled>
                  Select priority
                </option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </Field>
          </ExampleFrame>
          <ExampleFrame label="A selected value">
            <Field id="select-timezone" label="Time zone">
              <select id="select-timezone" className={inputClass} defaultValue="eastern">
                <option value="eastern">Eastern Time (ET)</option>
                <option value="central">Central Time (CT)</option>
                <option value="pacific">Pacific Time (PT)</option>
              </select>
            </Field>
          </ExampleFrame>
          <ExampleFrame label="A disabled choice">
            <Field id="select-plan" label="Plan">
              <select id="select-plan" className={inputClass} defaultValue="pro" disabled>
                <option value="pro">Professional</option>
                <option value="team">Team</option>
              </select>
            </Field>
          </ExampleFrame>
        </div>
      )
    case 'textarea':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          <ExampleFrame label="A blank response">
            <Field
              id="textarea-description"
              label="Description"
              hint="Tell us a little more about the request."
            >
              <textarea
                id="textarea-description"
                className={`${inputClass} min-h-32 resize-y`}
                placeholder="Tell us a little more..."
              />
            </Field>
          </ExampleFrame>
          <ExampleFrame label="A response with content">
            <Field id="textarea-message" label="Message">
              <textarea
                id="textarea-message"
                className={`${inputClass} min-h-32 resize-y`}
                defaultValue="Please include the accessibility review in the next release."
              />
            </Field>
          </ExampleFrame>
          <ExampleFrame label="A response with an error">
            <Field id="textarea-error" label="Reason for request">
              <textarea
                id="textarea-error"
                className={`${inputClass} min-h-32 resize-y border-destructive`}
                defaultValue="No"
                aria-invalid="true"
              />
            </Field>
            <p className="mt-2 text-sm font-medium text-destructive">
              Add at least a few words so we know how to help.
            </p>
          </ExampleFrame>
          <ExampleFrame label="A field with a useful limit">
            <Field id="textarea-limit" label="Short summary" hint="0 of 160 characters">
              <textarea
                id="textarea-limit"
                className={`${inputClass} min-h-24 resize-y`}
                maxLength={160}
                placeholder="Summarize the request"
              />
            </Field>
          </ExampleFrame>
        </div>
      )
    case 'checkbox':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          <ExampleFrame label="Not selected">
            <label
              className="flex items-start gap-3 text-sm"
              htmlFor="checkbox-updates"
              aria-label="Send me product updates"
            >
              <input id="checkbox-updates" className="mt-1 size-4 accent-primary" type="checkbox" />
              <span>
                <span className="font-medium">Send me product updates</span>
                <span className="mt-1 block text-muted-foreground">
                  You can change this preference later.
                </span>
              </span>
            </label>
          </ExampleFrame>
          <ExampleFrame label="Selected">
            <label
              className="flex items-start gap-3 text-sm"
              htmlFor="checkbox-terms"
              aria-label="I agree to the terms"
            >
              <input
                id="checkbox-terms"
                className="mt-1 size-4 accent-primary"
                type="checkbox"
                defaultChecked
              />
              <span>
                <span className="font-medium">I agree to the terms</span>
                <span className="mt-1 block text-muted-foreground">
                  This is an independent confirmation.
                </span>
              </span>
            </label>
          </ExampleFrame>
          <ExampleFrame label="Disabled">
            <label
              className="flex items-start gap-3 text-sm text-muted-foreground"
              htmlFor="checkbox-sms"
              aria-label="Send SMS alerts"
            >
              <input
                id="checkbox-sms"
                className="mt-1 size-4 accent-primary"
                type="checkbox"
                disabled
              />
              <span>
                <span className="font-medium">Send SMS alerts</span>
                <span className="mt-1 block">Add a phone number to enable this option.</span>
              </span>
            </label>
          </ExampleFrame>
        </div>
      )
    case 'checkbox-group':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          <ExampleFrame label="Choose any that apply">
            <fieldset className="space-y-3">
              <legend className="text-sm font-medium">Topics of interest</legend>
              {['Accessibility', 'Design systems', 'Research'].map((topic, index) => (
                <label
                  className="flex items-center gap-3 text-sm"
                  key={topic}
                  htmlFor={`checkbox-group-${index}`}
                >
                  <input
                    id={`checkbox-group-${index}`}
                    className="size-4 accent-primary"
                    type="checkbox"
                    name="topics"
                    defaultChecked={index === 0}
                  />
                  <span>{topic}</span>
                </label>
              ))}
            </fieldset>
          </ExampleFrame>
          <ExampleFrame label="A group with help text">
            <fieldset className="space-y-3">
              <legend className="text-sm font-medium">Ways we can help</legend>
              <p className="text-sm text-muted-foreground">Select all services you need.</p>
              {['Planning', 'Content', 'Development'].map((option, index) => (
                <label
                  className="flex items-center gap-3 text-sm"
                  key={option}
                  htmlFor={`help-${index}`}
                >
                  <input
                    id={`help-${index}`}
                    className="size-4 accent-primary"
                    type="checkbox"
                    name="help"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </fieldset>
          </ExampleFrame>
        </div>
      )
    case 'radio':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          <ExampleFrame label="One choice from a small set">
            <fieldset className="space-y-3">
              <legend className="text-sm font-medium">Preferred contact method</legend>
              {['Email', 'Phone'].map((method, index) => (
                <label
                  className="flex items-center gap-3 text-sm"
                  key={method}
                  htmlFor={`radio-contact-${index}`}
                >
                  <input
                    id={`radio-contact-${index}`}
                    className="size-4 accent-primary"
                    type="radio"
                    name="contact"
                    value={method}
                    defaultChecked={index === 0}
                  />
                  <span>{method}</span>
                </label>
              ))}
            </fieldset>
          </ExampleFrame>
          <ExampleFrame label="A horizontal choice">
            <fieldset>
              <legend className="text-sm font-medium">Size</legend>
              <div className="mt-3 flex flex-wrap gap-5">
                {['Small', 'Medium', 'Large'].map((size, index) => (
                  <label
                    className="flex items-center gap-2 text-sm"
                    key={size}
                    htmlFor={`radio-size-${index}`}
                  >
                    <input
                      id={`radio-size-${index}`}
                      className="size-4 accent-primary"
                      type="radio"
                      name="size"
                      value={size}
                      defaultChecked={index === 1}
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </ExampleFrame>
        </div>
      )
    case 'radio-group':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          <ExampleFrame label="A controlled group">
            <fieldset className="space-y-3">
              <legend className="text-sm font-medium">Notification frequency</legend>
              {['Immediately', 'Daily digest', 'Never'].map((frequency) => (
                <label
                  className="flex items-center gap-3 text-sm"
                  key={frequency}
                  htmlFor={`frequency-${frequency.toLowerCase().replaceAll(' ', '-')}`}
                >
                  <input
                    id={`frequency-${frequency.toLowerCase().replaceAll(' ', '-')}`}
                    className="size-4 accent-primary"
                    type="radio"
                    name="frequency"
                    value={frequency}
                    checked={selectedFrequency === frequency}
                    onChange={() => setSelectedFrequency(frequency)}
                  />
                  <span>{frequency}</span>
                </label>
              ))}
            </fieldset>
            <p className="mt-4 text-sm text-muted-foreground">
              Selected: <strong className="text-foreground">{selectedFrequency}</strong>
            </p>
          </ExampleFrame>
          <ExampleFrame label="A group with descriptions">
            <fieldset className="space-y-3">
              <legend className="text-sm font-medium">Access level</legend>
              {[
                ['Viewer', 'Can view shared files'],
                ['Editor', 'Can view and update shared files'],
              ].map(([value, help], index) => (
                <label
                  className="flex items-start gap-3 text-sm"
                  key={value}
                  htmlFor={`access-${index}`}
                  aria-label={value}
                >
                  <input
                    id={`access-${index}`}
                    className="mt-1 size-4 accent-primary"
                    type="radio"
                    name="access"
                    defaultChecked={index === 0}
                  />
                  <span>
                    <span className="font-medium">{value}</span>
                    <span className="mt-1 block text-muted-foreground">{help}</span>
                  </span>
                </label>
              ))}
            </fieldset>
          </ExampleFrame>
        </div>
      )
    case 'combobox':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          <ExampleFrame label="Closed with a selected value">
            <div>
              <label className="text-sm font-medium" htmlFor="country-closed">
                Country
              </label>
              <button
                id="country-closed"
                type="button"
                className={`${inputClass} flex items-center justify-between text-left`}
                aria-expanded="false"
              >
                <span>United States</span>
                <ChevronsUpDown className="size-4 text-muted-foreground" aria-hidden="true" />
              </button>
            </div>
          </ExampleFrame>
          <ExampleFrame label="Open so people can choose">
            <div className="relative">
              <label className="text-sm font-medium" htmlFor="country-open">
                Country
              </label>
              <button
                id="country-open"
                type="button"
                className={`${inputClass} flex items-center justify-between text-left`}
                aria-expanded={countryOpen}
                onClick={() => setCountryOpen(!countryOpen)}
              >
                <span>{selectedCountry}</span>
                <ChevronsUpDown className="size-4 text-muted-foreground" aria-hidden="true" />
              </button>
              {countryOpen && (
                <div
                  className="absolute z-10 mt-1 w-full rounded-md border bg-popover p-1 shadow-md"
                  role="listbox"
                  aria-label="Countries"
                >
                  <button
                    type="button"
                    role="option"
                    aria-selected={selectedCountry === 'United States'}
                    className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-muted"
                    onClick={() => {
                      setSelectedCountry('United States')
                      setCountryOpen(false)
                    }}
                  >
                    United States
                  </button>
                  <button
                    type="button"
                    role="option"
                    aria-selected={selectedCountry === 'Canada'}
                    className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-muted"
                    onClick={() => {
                      setSelectedCountry('Canada')
                      setCountryOpen(false)
                    }}
                  >
                    Canada
                  </button>
                </div>
              )}
            </div>
          </ExampleFrame>
          <ExampleFrame label="A searchable-style choice">
            <Field
              id="combobox-team"
              label="Assign to team"
              hint="Use filtering when a list is too long to scan."
            >
              <input
                id="combobox-team"
                className={inputClass}
                type="search"
                placeholder="Search teams"
              />
            </Field>
          </ExampleFrame>
        </div>
      )
    case 'datepicker':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          <ExampleFrame label="No date selected">
            <Field id="date-empty" label="Start date">
              <input
                id="date-empty"
                className={inputClass}
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </Field>
          </ExampleFrame>
          <ExampleFrame label="A date already selected">
            <Field id="date-selected" label="Launch date">
              <input
                id="date-selected"
                className={inputClass}
                type="date"
                defaultValue="2026-09-16"
              />
            </Field>
          </ExampleFrame>
          <ExampleFrame label="A date with a constraint">
            <Field id="date-min" label="Appointment date" hint="Choose a date from today onward.">
              <input id="date-min" className={inputClass} type="date" min="2026-09-16" />
            </Field>
          </ExampleFrame>
        </div>
      )
  }
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
    case 'radio':
      return (
        <label className="flex items-center gap-3 text-sm" htmlFor="basic-radio">
          <input
            id="basic-radio"
            className="size-4 accent-primary"
            type="radio"
            name="basic-radio"
            defaultChecked
          />
          <span>Email</span>
        </label>
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
      return (
        <div>
          <label className="text-sm font-medium" htmlFor="basic-combobox">
            Country
          </label>
          <button
            id="basic-combobox"
            type="button"
            className={`${inputClass} flex items-center justify-between text-left`}
            aria-expanded="false"
          >
            <span>United States</span>
            <ChevronsUpDown className="size-4 text-muted-foreground" aria-hidden="true" />
          </button>
        </div>
      )
    case 'datepicker':
      return (
        <Field id="basic-datepicker" label="Start date">
          <input id="basic-datepicker" className={inputClass} type="date" />
        </Field>
      )
  }
}

const variationCatalog: Record<
  FormKind,
  { name: string; what: string; use: string; avoid: string }[]
> = {
  input: [
    {
      name: 'Label + description',
      what: 'The label names the value and the description explains format or purpose.',
      use: 'Password rules, account email, or an accepted file-name format.',
      avoid: 'Do not use placeholder text as the only label or instruction.',
    },
    {
      name: 'Required + invalid',
      what: 'Required tells people a value is necessary; invalid explains that the current value cannot be accepted.',
      use: 'Registration email or a username that failed server validation.',
      avoid:
        'Do not show an error before someone has had a reasonable chance to complete the field.',
    },
    {
      name: 'Read-only',
      what: 'The value stays available for review but cannot be edited in this step.',
      use: 'A verified email or generated account ID in a confirmation screen.',
      avoid: 'Do not use read-only when the person should be able to correct the value.',
    },
    {
      name: 'Input with action',
      what: 'An input is paired with a related action, such as reveal, search, or clear.',
      use: 'Search with a submit button or an API key with a Reveal action.',
      avoid: 'Do not add an action when pressing Enter or clearing the field already works.',
    },
  ],
  select: [
    {
      name: 'Placeholder / no selection',
      what: 'The control starts without a chosen option and prompts an intentional decision.',
      use: 'Choose a role or department during onboarding.',
      avoid: 'Do not use a placeholder when a safe, obvious default prevents errors.',
    },
    {
      name: 'Grouped options',
      what: 'Related choices are separated by visible group labels.',
      use: 'Shipping methods grouped as Standard and Express.',
      avoid: 'Do not group a short, flat list just to add visual decoration.',
    },
    {
      name: 'Long or scrollable list',
      what: 'The menu remains usable when there are more options than fit comfortably on screen.',
      use: 'Time zones, countries, or a large department list.',
      avoid: 'Do not use Select for a long list when search/filtering would be faster.',
    },
    {
      name: 'Disabled item / control',
      what: 'A choice or the whole control is visible but unavailable in the current context.',
      use: 'A State choice disabled until a Country is selected.',
      avoid: 'Do not disable a control merely because the user has not decided yet.',
    },
  ],
  textarea: [
    {
      name: 'Description + character limit',
      what: 'Supporting text sets expectations for length and helps people shape their response.',
      use: 'A 500-character profile bio or short issue summary.',
      avoid: 'Do not impose a limit without explaining why it helps the task.',
    },
    {
      name: 'Resizable',
      what: 'The person can expand the field when their content needs more room.',
      use: 'A message composer or a detailed support-ticket description.',
      avoid: 'Do not allow resizing to break the surrounding layout or hide required actions.',
    },
    {
      name: 'Invalid / error',
      what: 'The field keeps the response visible and explains the correction needed.',
      use: 'A required comment submitted empty or a response below a minimum length.',
      avoid: 'Do not erase the person’s text when validation fails.',
    },
    {
      name: 'Read-only / disabled',
      what: 'Read-only allows review; disabled communicates that the field is unavailable.',
      use: 'A locked legal notice or organization-managed notes.',
      avoid: 'Do not use disabled when people need to copy or review the value.',
    },
  ],
  checkbox: [
    {
      name: 'Independent boolean',
      what: 'One checkbox represents one choice that can be on or off without affecting other choices.',
      use: 'Remember me or send me product updates.',
      avoid: 'Do not use a checkbox when exactly one option from a set must be chosen.',
    },
    {
      name: 'Selected / default selected',
      what: 'The saved preference appears checked when the setting is already active.',
      use: 'Persisting a notification preference during account editing.',
      avoid: 'Do not preselect a consequential opt-in without clear consent.',
    },
    {
      name: 'Indeterminate',
      what: 'The mixed state means some, but not all, related items are selected.',
      use: 'A Select all permissions checkbox above partially selected child permissions.',
      avoid: 'Do not use indeterminate as a third answer to a yes/no question.',
    },
    {
      name: 'Read-only / disabled / invalid',
      what: 'These states communicate locked policy, unavailable interaction, or failed required validation.',
      use: 'Enforced compliance setting or required terms consent.',
      avoid: 'Do not hide the reason a setting is unavailable or invalid.',
    },
  ],
  'checkbox-group': [
    {
      name: 'Multiple selection',
      what: 'Several checkboxes answer one shared question and may all be selected.',
      use: 'Notification channels, interests, or project permissions.',
      avoid: 'Do not group unrelated questions under one legend.',
    },
    {
      name: 'Required group',
      what: 'The group is valid only when at least one option is selected.',
      use: 'At least one delivery method must be provided.',
      avoid: 'Do not require a choice when “none of these” is a valid answer but is missing.',
    },
    {
      name: 'Indeterminate parent',
      what: 'A parent checkbox reflects a partial set of selected child permissions.',
      use: 'Folder access where some child files are selected.',
      avoid: 'Do not show a mixed state without making the child selections discoverable.',
    },
    {
      name: 'Disabled or read-only group',
      what: 'The entire set is locked while its current values remain understandable.',
      use: 'Permissions shown during a review step or while a save is processing.',
      avoid: 'Do not lock the group when only one option is unavailable.',
    },
  ],
  radio: [
    {
      name: 'Vertical radio group',
      what: 'Mutually exclusive options stack so longer labels and descriptions remain readable.',
      use: 'Shipping speed with delivery estimates or billing interval.',
      avoid: 'Do not use a radio group for choices that can be selected together.',
    },
    {
      name: 'Horizontal radio group',
      what: 'Short exclusive choices sit side by side and can wrap on narrow screens.',
      use: 'Compact size choices or a small toolbar setting.',
      avoid: 'Do not force long labels into a horizontal row.',
    },
    {
      name: 'Disabled item',
      what: 'One unavailable option remains visible so people understand the complete set.',
      use: 'An Enterprise plan that requires contacting sales.',
      avoid: 'Do not remove an unavailable option when its absence would be confusing.',
    },
    {
      name: 'Required / invalid group',
      what: 'The group asks for one decision and reports a group-level validation problem.',
      use: 'Required payment method or preferred contact method.',
      avoid: 'Do not validate each radio as if multiple values could be chosen.',
    },
  ],
  'radio-group': [
    {
      name: 'Controlled selection',
      what: 'Application state owns the selected value and updates other UI when it changes.',
      use: 'A plan choice that updates a price summary immediately.',
      avoid: 'Do not add controlled state when the selection has no effect until submit.',
    },
    {
      name: 'Options with descriptions',
      what: 'Each option includes supporting information while remaining one selectable choice.',
      use: 'Access levels with permission summaries.',
      avoid: 'Do not bury the actual option label inside secondary copy.',
    },
    {
      name: 'Read-only review',
      what: 'The selected answer can be reviewed without being changed.',
      use: 'A submitted survey answer or order confirmation.',
      avoid: 'Do not use read-only to prevent a correction that the workflow should allow.',
    },
    {
      name: 'Disabled group or item',
      what: 'The whole decision or one option is unavailable while the reason remains visible.',
      use: 'Locking plan selection after checkout or disabling unsupported payment.',
      avoid: 'Do not disable every option without explaining what action will unlock them.',
    },
  ],
  combobox: [
    {
      name: 'Searchable selection',
      what: 'Typing filters a collection while the person can still choose a known item.',
      use: 'Assigning an issue to a team member or selecting a country.',
      avoid: 'Do not use ComboBox for a tiny list that is faster to scan.',
    },
    {
      name: 'Custom value',
      what: 'The typed value can be accepted even when it is not in the suggestions.',
      use: 'Adding a new tag or entering a free-form location.',
      avoid: 'Do not allow custom values when only approved records are valid.',
    },
    {
      name: 'Grouped or rich results',
      what: 'Sections and descriptions help people distinguish similar options.',
      use: 'Search results grouped by team, resource type, or project.',
      avoid: 'Do not add grouping when every result is already easy to distinguish.',
    },
    {
      name: 'No results / disabled item',
      what: 'The list explains an empty search or keeps unavailable results visible but unselectable.',
      use: 'No users found or archived users shown in a directory.',
      avoid: 'Do not leave an empty popup unexplained.',
    },
  ],
  datepicker: [
    {
      name: 'Segmented date input',
      what: 'Month, day, and year segments can be edited directly with the keyboard.',
      use: 'Keyboard-friendly date of birth or due-date entry.',
      avoid: 'Do not make the calendar the only way to enter a date.',
    },
    {
      name: 'Unavailable dates',
      what: 'Specific dates remain visible but cannot be selected.',
      use: 'Blocking holidays or already-booked appointment slots.',
      avoid: 'Do not silently remove dates when knowing why they are unavailable matters.',
    },
    {
      name: 'Min/max constraints',
      what: 'A valid date range limits choices before submission.',
      use: 'Future appointment dates or dates inside a contract period.',
      avoid:
        'Do not use a range constraint when the business rule is actually about date relationships.',
    },
    {
      name: 'Date range / date-time',
      what: 'Related pickers capture a start and end, or a date plus a time.',
      use: 'Hotel stay, report period, or meeting scheduling.',
      avoid: 'Do not use a range picker when only one date is needed.',
    },
    {
      name: 'Presets',
      what: 'Shortcuts select common ranges without requiring calendar navigation.',
      use: 'Today, Last 7 days, or This month in analytics filters.',
      avoid: 'Do not add presets when they create more choices than the calendar itself.',
    },
  ],
}

function VariationCatalog({ kind }: { kind: FormKind }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {variationCatalog[kind].map((variation) => (
        <div key={variation.name} className="rounded-lg border bg-background p-4">
          <h4 className="font-semibold">{variation.name}</h4>
          <dl className="mt-3 space-y-3 text-sm leading-6">
            <div>
              <dt className="font-medium">What it is</dt>
              <dd className="text-muted-foreground">{variation.what}</dd>
            </div>
            <div>
              <dt className="font-medium">Use it for</dt>
              <dd className="text-muted-foreground">{variation.use}</dd>
            </div>
            <div>
              <dt className="font-medium">Do not use it when</dt>
              <dd className="text-muted-foreground">{variation.avoid}</dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  )
}

function ReactAriaExamples({ kind }: { kind: FormKind }) {
  const card = (label: string, description: string, children: React.ReactNode) => (
    <ExampleFrame label={label} description={description}>
      {children}
    </ExampleFrame>
  )
  const selectOptions = (options: string[]) => (
    <Popover>
      <ListBox className="min-w-48 rounded-md border bg-popover p-1 shadow-md">
        {options.map((option) => (
          <ListBoxItem
            key={option}
            id={option}
            className="rounded px-3 py-2 text-sm focus:bg-muted"
          >
            {option}
          </ListBoxItem>
        ))}
      </ListBox>
    </Popover>
  )
  switch (kind) {
    case 'input':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          {card(
            'TextField: basic',
            'TextField connects the label, input, description, and validation relationship. Use it when those pieces should travel together.',
            <AriaTextField>
              <AriaLabel className="text-sm font-medium">Project name</AriaLabel>
              <AriaInput className={ariaFieldClass} placeholder="Accessibility audit" />
              <AriaText slot="description" className="mt-2 text-sm text-muted-foreground">
                Use a recognizable name.
              </AriaText>
            </AriaTextField>,
          )}
          {card(
            'TextField: required',
            'Use required when the form cannot be completed without a value. Do not mark fields required only because a value would be convenient.',
            <AriaTextField isRequired>
              <AriaLabel className="text-sm font-medium">Owner</AriaLabel>
              <AriaInput className={ariaFieldClass} placeholder="Choose an owner" />
              <AriaFieldError className="mt-2 text-sm font-medium text-destructive" />
            </AriaTextField>,
          )}
          {card(
            'TextField: invalid',
            'Use isInvalid with FieldError when the current value cannot be accepted. Say how to fix it.',
            <AriaTextField isInvalid defaultValue="tommy@">
              <AriaLabel className="text-sm font-medium">Email address</AriaLabel>
              <AriaInput className={`${ariaFieldClass} border-destructive`} type="email" />
              <AriaFieldError className="mt-2 text-sm font-medium text-destructive">
                Enter a complete email address.
              </AriaFieldError>
            </AriaTextField>,
          )}
          {card(
            'TextField: disabled',
            'Use disabled only when the person cannot act in the current context. Explain what would enable it when possible.',
            <AriaTextField isDisabled defaultValue="ACC-2048">
              <AriaLabel className="text-sm font-medium">Account ID</AriaLabel>
              <AriaInput className={ariaFieldClass} />
            </AriaTextField>,
          )}
        </div>
      )
    case 'select':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          {card(
            'Select: selected value',
            'Use Select for a short, known list where scanning is faster than searching. React Aria supplies popup and keyboard behavior.',
            <AriaSelect defaultSelectedKey="email">
              <AriaLabel className="text-sm font-medium">Contact preference</AriaLabel>
              <AriaButton className={`${ariaFieldClass} flex justify-between text-left`}>
                <SelectValue />
                <span aria-hidden="true">⌄</span>
              </AriaButton>
              {selectOptions(['Email', 'Phone', 'Do not contact me'])}
            </AriaSelect>,
          )}
          {card(
            'Select: required prompt',
            'Use a prompt when no option is a safe default. Use required when the person must choose before continuing.',
            <AriaSelect isRequired>
              <AriaLabel className="text-sm font-medium">Priority</AriaLabel>
              <AriaButton className={`${ariaFieldClass} flex justify-between text-left`}>
                <SelectValue />
                <span aria-hidden="true">⌄</span>
              </AriaButton>
              <AriaFieldError className="mt-2 text-sm text-destructive" />
              {selectOptions(['Low', 'Medium', 'High'])}
            </AriaSelect>,
          )}
          {card(
            'Select: disabled',
            'Use disabled when the choice is unavailable, not when the person simply has not decided yet.',
            <AriaSelect isDisabled defaultSelectedKey="Professional">
              <AriaLabel className="text-sm font-medium">Plan</AriaLabel>
              <AriaButton className={`${ariaFieldClass} flex justify-between text-left`}>
                <SelectValue />
                <span aria-hidden="true">⌄</span>
              </AriaButton>
              {selectOptions(['Professional', 'Team'])}
            </AriaSelect>,
          )}
        </div>
      )
    case 'textarea':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          {card(
            'TextField with TextArea',
            'Use TextArea inside TextField for multi-line input while keeping label, description, and error relationships.',
            <AriaTextField>
              <AriaLabel className="text-sm font-medium">Description</AriaLabel>
              <AriaTextArea
                className={`${ariaFieldClass} min-h-32 resize-y`}
                placeholder="Tell us a little more..."
              />
              <AriaText slot="description" className="mt-2 text-sm text-muted-foreground">
                Include the context someone needs.
              </AriaText>
            </AriaTextField>,
          )}
          {card(
            'TextArea: invalid',
            'Use invalid feedback next to the field and explain the correction, not only the failure.',
            <AriaTextField isInvalid defaultValue="No">
              <AriaLabel className="text-sm font-medium">Reason for request</AriaLabel>
              <AriaTextArea className={`${ariaFieldClass} min-h-32 border-destructive`} />
              <AriaFieldError className="mt-2 text-sm text-destructive">
                Add enough detail to continue.
              </AriaFieldError>
            </AriaTextField>,
          )}
          {card(
            'TextArea: disabled',
            'Use disabled when the response is managed elsewhere. Do not use it as a substitute for optional.',
            <AriaTextField isDisabled defaultValue="Managed by your organization.">
              <AriaLabel className="text-sm font-medium">Notes</AriaLabel>
              <AriaTextArea className={`${ariaFieldClass} min-h-24`} />
            </AriaTextField>,
          )}
        </div>
      )
    case 'checkbox':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          {card(
            'Checkbox: unselected',
            'Use Checkbox for one independent yes/no choice. The label remains part of the activation target.',
            <AriaCheckbox className={ariaGroupClass}>Send me product updates</AriaCheckbox>,
          )}
          {card(
            'Checkbox: selected',
            'Use a selected state when the preference is already active; keep the visible label.',
            <AriaCheckbox className={ariaGroupClass} defaultSelected>
              I agree to the terms
            </AriaCheckbox>,
          )}
          {card(
            'Checkbox: disabled',
            'Use disabled only when the option cannot be changed now, and explain why nearby.',
            <AriaCheckbox className={`${ariaGroupClass} text-muted-foreground`} isDisabled>
              Send SMS alerts
            </AriaCheckbox>,
          )}
        </div>
      )
    case 'checkbox-group':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          {card(
            'CheckboxGroup: multiple selection',
            'Use CheckboxGroup when zero, one, or many options answer one question. Do not group unrelated questions.',
            <AriaCheckboxGroup defaultValue={['accessibility']}>
              <AriaLabel className="text-sm font-medium">Topics of interest</AriaLabel>
              <AriaCheckbox value="accessibility" className="mt-3 flex gap-2 text-sm">
                Accessibility
              </AriaCheckbox>
              <AriaCheckbox value="research" className="mt-3 flex gap-2 text-sm">
                Research
              </AriaCheckbox>
            </AriaCheckboxGroup>,
          )}
          {card(
            'CheckboxGroup: required',
            'Use required when at least one option must be selected. Add group-level help or error text.',
            <AriaCheckboxGroup isRequired>
              <AriaLabel className="text-sm font-medium">Ways we can help</AriaLabel>
              <AriaText slot="description" className="mt-2 text-sm text-muted-foreground">
                Select all services you need.
              </AriaText>
              <AriaCheckbox value="planning" className="mt-3 flex gap-2 text-sm">
                Planning
              </AriaCheckbox>
              <AriaCheckbox value="content" className="mt-3 flex gap-2 text-sm">
                Content
              </AriaCheckbox>
              <AriaFieldError className="mt-2 text-sm text-destructive" />
            </AriaCheckboxGroup>,
          )}
        </div>
      )
    case 'radio':
    case 'radio-group':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          {card(
            'RadioGroup: stacked',
            'Use RadioGroup for mutually exclusive choices. Stack options when labels or descriptions need room.',
            <AriaRadioGroup defaultValue="email">
              <AriaLabel className="text-sm font-medium">Contact method</AriaLabel>
              <AriaRadio value="email" className="mt-3 flex gap-2 text-sm">
                Email
              </AriaRadio>
              <AriaRadio value="phone" className="mt-3 flex gap-2 text-sm">
                Phone
              </AriaRadio>
            </AriaRadioGroup>,
          )}
          {card(
            'RadioGroup: horizontal',
            'Use horizontal layout only for short labels that can wrap clearly at narrow widths.',
            <AriaRadioGroup defaultValue="medium">
              <AriaLabel className="text-sm font-medium">Size</AriaLabel>
              <div className="mt-3 flex flex-wrap gap-5">
                {['Small', 'Medium', 'Large'].map((value) => (
                  <AriaRadio key={value} value={value} className="flex gap-2 text-sm">
                    {value}
                  </AriaRadio>
                ))}
              </div>
            </AriaRadioGroup>,
          )}
          {card(
            'RadioGroup: disabled option',
            'Disable one option only when it is unavailable while the alternatives remain meaningful.',
            <AriaRadioGroup defaultValue="viewer">
              <AriaLabel className="text-sm font-medium">Access level</AriaLabel>
              <AriaRadio value="viewer" className="mt-3 flex gap-2 text-sm">
                Viewer
              </AriaRadio>
              <AriaRadio
                value="editor"
                isDisabled
                className="mt-3 flex gap-2 text-sm text-muted-foreground"
              >
                Editor (requires approval)
              </AriaRadio>
            </AriaRadioGroup>,
          )}
        </div>
      )
    case 'combobox':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          {card(
            'ComboBox: searchable',
            'Use ComboBox when typing or filtering helps people find an option in a long list. Do not use it for a tiny list that is faster to scan.',
            <AriaComboBox defaultSelectedKey="us">
              <AriaLabel className="text-sm font-medium">Country</AriaLabel>
              <AriaInput className={ariaFieldClass} />
              <AriaButton className="mt-2 rounded border px-3 py-2 text-sm">
                Show suggestions
              </AriaButton>
              <Popover>{selectOptions(['United States', 'Canada', 'Mexico'])}</Popover>
            </AriaComboBox>,
          )}
          {card(
            'ComboBox: empty',
            'Use an empty ComboBox when the person must make an intentional choice. Keep the label visible even when a placeholder is present.',
            <AriaComboBox>
              <AriaLabel className="text-sm font-medium">Assign to team</AriaLabel>
              <AriaInput className={ariaFieldClass} placeholder="Search teams" />
              <Popover>{selectOptions(['Design', 'Development'])}</Popover>
            </AriaComboBox>,
          )}
          {card(
            'ComboBox: disabled',
            'Use disabled when search and selection are unavailable in the current state, not to avoid deciding on the options.',
            <AriaComboBox isDisabled>
              <AriaLabel className="text-sm font-medium">Workspace</AriaLabel>
              <AriaInput className={ariaFieldClass} />
            </AriaComboBox>,
          )}
        </div>
      )
    case 'datepicker':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          {card(
            'DatePicker: segmented input',
            'Use DatePicker for a calendar date. React Aria makes each date segment keyboard-operable while supporting a calendar popup.',
            <AriaDatePicker>
              <AriaLabel className="text-sm font-medium">Start date</AriaLabel>
              <div className={`${ariaFieldClass} flex gap-2`}>
                <DateInput>
                  {(segment) => (
                    <DateSegment segment={segment} className="rounded px-1 focus:bg-muted" />
                  )}
                </DateInput>
                <AriaButton aria-label="Open calendar">▣</AriaButton>
              </div>
            </AriaDatePicker>,
          )}
          {card(
            'DatePicker: required',
            'Use required when the workflow cannot continue without a date. Explain acceptable dates before validation fails.',
            <AriaDatePicker isRequired>
              <AriaLabel className="text-sm font-medium">Appointment date</AriaLabel>
              <div className={ariaFieldClass}>
                <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
              </div>
              <AriaFieldError className="mt-2 text-sm text-destructive" />
            </AriaDatePicker>,
          )}
          {card(
            'DatePicker: disabled',
            'Use disabled when the date is managed elsewhere. Use read-only instead if people still need to review the value.',
            <AriaDatePicker isDisabled>
              <AriaLabel className="text-sm font-medium">Launch date</AriaLabel>
              <div className={ariaFieldClass}>
                <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
              </div>
            </AriaDatePicker>,
          )}
        </div>
      )
  }
}

function FormGuide({
  title,
  description,
  kind,
  activeHref = `/components/${kind === 'datepicker' ? 'datepicker' : kind}`,
}: FormGuideProps) {
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
              <section className="max-w-3xl space-y-5">
                <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
                <p className="text-xl leading-8 text-muted-foreground">{description}</p>
              </section>
              <section className="space-y-5" aria-labelledby="form-what-heading">
                <h2 id="form-what-heading" className="text-2xl font-semibold tracking-tight">
                  What is it?
                </h2>
                <p className="max-w-3xl leading-7 text-muted-foreground">
                  This is the simplest version of {title}. Start by looking at the label, the kind
                  of value it accepts, and the way a person interacts with it.
                </p>
                <div className={panelClass}>
                  <div className="max-w-xl">
                    <BasicExample kind={kind} />
                  </div>
                </div>
              </section>
              <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="form-use-heading">
                <div className="space-y-5">
                  <h2 id="form-use-heading" className="text-2xl font-semibold tracking-tight">
                    When to use it
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>
                      When the value has a clear type and the person needs to provide or choose it.
                    </li>
                    <li>
                      When a visible label and helpful guidance make the task easier to complete.
                    </li>
                    <li>
                      When the control’s state needs to be submitted or reviewed with other form
                      values.
                    </li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="form-not-heading">
                  <h2 id="form-not-heading" className="text-2xl font-semibold tracking-tight">
                    When not to use it
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>When a link or button is the real interaction rather than data entry.</li>
                    <li>
                      When a different control better matches the number or relationship of choices.
                    </li>
                    <li>When adding a field would collect information without a clear purpose.</li>
                  </ul>
                </div>
              </section>
              <section className="space-y-5" aria-labelledby="form-design-heading">
                <h2 id="form-design-heading" className="text-2xl font-semibold tracking-tight">
                  Design considerations
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>Keep the label, help text, and error message close to the control.</li>
                  <li>
                    Use a real name and value so the control works with forms and assistive
                    technology.
                  </li>
                  <li>
                    Show validation feedback next to the relevant field and explain how to fix it.
                  </li>
                  <li>
                    Keep the longest realistic label and error message readable at narrow widths.
                  </li>
                </ul>
              </section>
              <section className="space-y-5" aria-labelledby="form-accessibility-heading">
                <h2
                  id="form-accessibility-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Accessibility considerations
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>
                    Associate every control with a visible label; use legend for related groups.
                  </li>
                  <li>
                    Keep focus visible and make keyboard order follow the visual reading order.
                  </li>
                  <li>
                    Do not rely on placeholder text, color, or an icon alone to convey meaning.
                  </li>
                  <li>
                    Announce or expose validation errors in a way that screen-reader users can find.
                  </li>
                </ul>
              </section>
              <section className="space-y-5" aria-labelledby="form-responsive-heading">
                <h2 id="form-responsive-heading" className="text-2xl font-semibold tracking-tight">
                  Responsive behavior
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Let controls fill the available width and allow labels and messages to wrap.
                  Groups stack on narrow screens without changing their order or meaning.
                </p>
              </section>
              <section className="space-y-6" aria-labelledby="form-examples-heading">
                <div className="space-y-3">
                  <h2 id="form-examples-heading" className="text-2xl font-semibold tracking-tight">
                    Examples
                  </h2>
                  <p className="max-w-3xl leading-7 text-muted-foreground">
                    Compare these examples to see how the same control changes for different
                    situations. Try the interactive examples and notice what is communicated by the
                    label, help text, selected value, and error message.
                  </p>
                </div>
                <div className="max-w-5xl">
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold tracking-tight">
                        React Aria variations
                      </h3>
                      <p className="leading-7 text-muted-foreground">
                        These examples use React Aria Components. React Aria supplies accessible
                        behavior, keyboard interaction, and relationships between labels,
                        descriptions, errors, and controls; your team still chooses the visual
                        design and content.
                      </p>
                    </div>
                    <ReactAriaExamples kind={kind} />
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold tracking-tight">Variation guide</h3>
                      <p className="leading-7 text-muted-foreground">
                        These are common versions of {title} from shadcn and React Aria examples.
                        Each card connects the visual pattern to a familiar use case and a boundary
                        so the variation is not mistaken for a default.
                      </p>
                    </div>
                    <VariationCatalog kind={kind} />
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold tracking-tight">
                        Native HTML variations
                      </h3>
                      <p className="leading-7 text-muted-foreground">
                        Native controls are often the right choice for simple forms. They provide
                        familiar browser behavior with less code, while React Aria is useful when
                        the interaction needs richer composition or custom behavior.
                      </p>
                    </div>
                    <Examples kind={kind} />
                  </div>
                </div>
              </section>
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
  radio: [
    'Radio button',
    'Use a Radio button when one choice is required from a small set of mutually exclusive options.',
  ],
  'radio-group': [
    'Radio button group',
    'Use a Radio group to give a related set of mutually exclusive choices one clear label and name.',
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

function makeGuide(kind: FormKind) {
  const [title, description] = guides[kind]
  return function GuidePage() {
    return <FormGuide kind={kind} title={title} description={description} />
  }
}

const ComponentsInputPage = makeGuide('input')
const ComponentsSelectPage = makeGuide('select')
const ComponentsTextareaPage = makeGuide('textarea')
const ComponentsCheckboxPage = makeGuide('checkbox')
const ComponentsCheckboxGroupPage = makeGuide('checkbox-group')
const ComponentsRadioPage = makeGuide('radio')
const ComponentsRadioGroupPage = makeGuide('radio-group')
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
  ComponentsRadioGroupPage,
  ComponentsComboboxPage,
  ComponentsDatepickerPage,
}
