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

const formComponents: NavGroup[] = [
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
  label,
  children,
  hint,
}: {
  label: string
  children: React.ReactNode
  hint?: string
}) {
  return (
    <div>
      <label className="text-sm font-medium" htmlFor={label.toLowerCase().replaceAll(' ', '-')}>
        {label}
      </label>
      {children}
      {hint && <p className="mt-2 text-sm text-muted-foreground">{hint}</p>}
    </div>
  )
}

function Example({ kind }: { kind: FormKind }) {
  const [checked, setChecked] = useState(false)
  const [selected, setSelected] = useState('Immediately')
  const [favorite, setFavorite] = useState('email')
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState('')

  switch (kind) {
    case 'input':
      return (
        <Field label="Email address" hint="Use a type that matches the expected value.">
          <input
            id="email-address"
            className={inputClass}
            type="email"
            placeholder="you@example.com"
          />
        </Field>
      )
    case 'select':
      return (
        <Field label="Contact preference">
          <select id="contact-preference" className={inputClass} defaultValue="email">
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="none">Do not contact me</option>
          </select>
        </Field>
      )
    case 'textarea':
      return (
        <Field
          label="Description"
          hint="Give people enough room to write without making the field unnecessarily large."
        >
          <textarea
            id="description"
            className={`${inputClass} min-h-32 resize-y`}
            placeholder="Tell us a little more..."
          />
        </Field>
      )
    case 'checkbox':
      return (
        <div className="flex items-start gap-3 text-sm">
          <input
            id="product-updates"
            className="mt-1 size-4 accent-primary"
            type="checkbox"
            aria-labelledby="product-updates-label"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
          />
          <span>
            <span id="product-updates-label" className="font-medium">
              Send me product updates
            </span>
            <span className="mt-1 block text-muted-foreground">
              You can change this preference later.
            </span>
          </span>
        </div>
      )
    case 'checkbox-group':
      return (
        <fieldset className="space-y-3">
          <legend className="text-sm font-medium">Topics of interest</legend>
          {['Accessibility', 'Design systems', 'Research'].map((topic) => {
            const id = `topic-${topic.toLowerCase().replaceAll(' ', '-')}`
            return (
              <label className="flex items-center gap-3 text-sm" key={topic} htmlFor={id}>
                <input
                  id={id}
                  className="size-4 accent-primary"
                  type="checkbox"
                  name="topics"
                  value={topic}
                />
                <span>{topic}</span>
              </label>
            )
          })}
        </fieldset>
      )
    case 'radio':
      return (
        <fieldset className="space-y-3">
          <legend className="text-sm font-medium">Preferred contact method</legend>
          {['Email', 'Phone'].map((method) => {
            const id = `contact-${method.toLowerCase()}`
            return (
              <label className="flex items-center gap-3 text-sm" key={method} htmlFor={id}>
                <input
                  id={id}
                  className="size-4 accent-primary"
                  type="radio"
                  name="contact"
                  value={method}
                  defaultChecked={method === 'Email'}
                />
                <span>{method}</span>
              </label>
            )
          })}
        </fieldset>
      )
    case 'radio-group':
      return (
        <fieldset className="space-y-3">
          <legend className="text-sm font-medium">Notification frequency</legend>
          {['Immediately', 'Daily digest', 'Never'].map((frequency) => {
            const id = `frequency-${frequency.toLowerCase().replaceAll(' ', '-')}`
            return (
              <label className="flex items-center gap-3 text-sm" key={frequency} htmlFor={id}>
                <input
                  id={id}
                  className="size-4 accent-primary"
                  type="radio"
                  name="frequency"
                  value={frequency}
                  checked={selected === frequency}
                  onChange={() => setSelected(frequency)}
                />
                <span>{frequency}</span>
              </label>
            )
          })}
        </fieldset>
      )
    case 'combobox':
      return (
        <div className="relative">
          <label className="text-sm font-medium" htmlFor="country">
            Country
          </label>
          <button
            id="country"
            type="button"
            className={`${inputClass} flex items-center justify-between text-left`}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span>{favorite === 'email' ? 'United States' : 'Canada'}</span>
            <ChevronsUpDown className="size-4 text-muted-foreground" aria-hidden="true" />
          </button>
          {open && (
            <div className="absolute z-10 mt-1 w-full rounded-md border bg-popover p-1 shadow-md">
              <button
                type="button"
                className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-muted"
                onClick={() => {
                  setFavorite('email')
                  setOpen(false)
                }}
              >
                United States
              </button>
              <button
                type="button"
                className="block w-full rounded px-3 py-2 text-left text-sm hover:bg-muted"
                onClick={() => {
                  setFavorite('phone')
                  setOpen(false)
                }}
              >
                Canada
              </button>
            </div>
          )}
        </div>
      )
    case 'datepicker':
      return (
        <Field
          label="Start date"
          hint="Use a date input when the value is a calendar date, not free-form text."
        >
          <input
            id="start-date"
            className={inputClass}
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </Field>
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
            <div className="space-y-12 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
              <section className="max-w-3xl space-y-5">
                <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
                <p className="text-xl leading-8 text-muted-foreground">{description}</p>
              </section>
              <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.65fr)]">
                <div className={panelClass}>
                  <h2 className="text-lg font-semibold">Preview</h2>
                  <div className="mt-6 max-w-xl">
                    <Example kind={kind} />
                  </div>
                </div>
                <div className="space-y-5">
                  <h2 className="text-2xl font-semibold tracking-tight">Good design and usage</h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>Give the control a visible, specific label.</li>
                    <li>Use the native semantic type and name that match the value.</li>
                    <li>Show help, error, and required information in text, not color alone.</li>
                    <li>Keep keyboard focus visible and test the complete interaction.</li>
                  </ul>
                </div>
              </section>
              <section className="space-y-5">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Accessibility considerations
                </h2>
                <p className="max-w-3xl leading-7 text-muted-foreground">
                  Labels, grouping, focus, error messaging, and reading order are part of the
                  component contract. Prefer the shadcn primitive that provides the needed behavior
                  rather than styling an unrelated element to look like a form control.
                </p>
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
    <FormGuide
      kind="input"
      activeHref="/components/forms"
      title="Forms help people provide information."
      description="Form components give people a clear, accessible way to enter, choose, and review information. Start with the smallest control that fits the value, then add grouping and guidance when the task needs it."
    />
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
