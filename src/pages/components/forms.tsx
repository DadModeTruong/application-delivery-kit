/**
 * Forms component area and component reference pages.
 *
 * Form controls collect information. Each guide keeps the semantic HTML
 * behavior visible while demonstrating the equivalent shadcn-style pattern.
 */
/* eslint-disable react-refresh/only-export-components */

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
  radio: {
    what: 'One option in a mutually exclusive set; selecting it clears the previous choice.',
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
      'Compare stacked, horizontal, and disabled-option RadioGroup states. Use the layout that makes comparison easiest.',
  },
  'radio-group': {
    what: 'A related set of radio buttons with one label, name, and selection behavior.',
    use: [
      'Use for billing interval, shipping speed, access level, or another one-of-many decision.',
      'Use controlled state when selection immediately changes other UI.',
    ],
    notUse: [
      'When more than one option may be selected.',
      'When the list is too long to compare comfortably.',
    ],
    design: [
      'Keep option labels distinct from descriptions.',
      'Use a group-level error for a missing required decision.',
    ],
    accessibility: [
      'Preserve arrow-key behavior and expose required, invalid, disabled, and read-only states.',
      'Keep focus order aligned with visual order.',
    ],
    responsive: 'Prefer stacked options when descriptions are present.',
    examples:
      'Compare controlled selection, descriptions, and a disabled option. Use Radio group when exactly one answer is allowed.',
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
    examples:
      'Compare searchable, empty, and disabled ComboBox states. Choose it when finding an option is the problem.',
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
      'Compare segmented input, required, and disabled DatePicker states. Choose the simplest date pattern that matches the question.',
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
              <section className="space-y-5">
                <h2 className="text-2xl font-semibold tracking-tight">What is it?</h2>
                <p className="max-w-3xl leading-7 text-muted-foreground">
                  {content.what} Think of this as the quick recognition step: first confirm that
                  this control represents the kind of information or decision the task needs.
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
                  <p className="leading-7 text-muted-foreground">
                    Use this control when its interaction matches the question you are asking and
                    the information people need to provide. These are the situations where this
                    pattern is appropriate, recommended, or necessary.
                  </p>
                  <GuideList items={content.use} />
                </div>
                <div className="space-y-5">
                  <h2 className="text-2xl font-semibold tracking-tight">When not to use it</h2>
                  <p className="leading-7 text-muted-foreground">
                    A familiar-looking control can still be the wrong choice. Check these boundaries
                    before adding it, especially when another pattern would make the available
                    choices or expected answer clearer.
                  </p>
                  <GuideList items={content.notUse} />
                </div>
              </section>
              <section className="space-y-5">
                <h2 className="text-2xl font-semibold tracking-tight">Design considerations</h2>
                <p className="leading-7 text-muted-foreground">
                  Design the control around the person’s task, not around the control’s appearance.
                  The label, surrounding content, states, and validation should make the next step
                  understandable before interaction begins.
                </p>
                <GuideList items={content.design} />
              </section>
              <section className="space-y-5">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Accessibility considerations
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Accessibility is part of the control’s meaning and behavior, not a final visual
                  check. People should be able to identify, operate, understand, and recover from
                  problems with the control using the input methods and assistive technology they
                  rely on.
                </p>
                <GuideList items={content.accessibility} />
              </section>
              <section className="space-y-5">
                <h2 className="text-2xl font-semibold tracking-tight">Responsive behavior</h2>
                <p className="leading-7 text-muted-foreground">
                  Responsive behavior should preserve the same question, order, and meaning at every
                  width. The control can change size or arrangement, but it should not become harder
                  to read, operate, or understand.
                </p>
                <p className="leading-7 text-muted-foreground">{content.responsive}</p>
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
