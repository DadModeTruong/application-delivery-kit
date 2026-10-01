import { useState, type ReactNode } from 'react'

import { Datepicker } from '@/components/ui/datepicker'
import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { ExampleVariation } from '@/components/layout/example-variation'
import { TryIt } from '@/components/layout/try-it'
import { formSidebarLinks } from '@/config/component-navigation'

/**
 * Datepicker guide page. Demonstrates native date entry, validation, required
 * values, ranges, and date-plus-time scheduling.
 */

function BasicExample() {
  return <Datepicker id="datepicker-basic" label="Start date" />
}
function HelperExample() {
  return (
    <Datepicker
      id="datepicker-helper"
      label="Start date"
      hint="Choose a date within the next 30 days."
    />
  )
}
function DisabledExample() {
  return (
    <Datepicker
      id="datepicker-disabled"
      label="Service date"
      disabled
      hint="Available after you choose a service."
    />
  )
}
function InvalidExample() {
  return (
    <Datepicker
      id="datepicker-invalid"
      label="Service date"
      defaultValue="2027-04-03"
      error="Choose a date within the available service window."
    />
  )
}
function RequiredExample() {
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const error = submitted && !value ? 'Choose a date before continuing.' : undefined
  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <Datepicker
        id="datepicker-required"
        label="Start date"
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
          setSubmitted(false)
        }}
        error={error}
      />
      <button
        type="submit"
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Continue
      </button>
      {submitted && !error && (
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Start date saved: {value}.
        </p>
      )}
    </form>
  )
}
function RangeExample() {
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const invalid = Boolean(start && end && end < start)
  return (
    <div className="space-y-4">
      <fieldset className="grid gap-4 sm:grid-cols-2">
        <legend className="sr-only">Date range</legend>
        <Datepicker
          id="datepicker-range-start"
          label="Start date"
          value={start}
          onChange={(event) => setStart(event.target.value)}
        />
        <Datepicker
          id="datepicker-range-end"
          label="End date"
          value={end}
          min={start || undefined}
          onChange={(event) => setEnd(event.target.value)}
          error={invalid ? 'The end date must be on or after the start date.' : undefined}
        />
      </fieldset>
      {start && end && !invalid && (
        <p className="text-sm text-muted-foreground" role="status">
          Range: {start} through {end}.
        </p>
      )}
    </div>
  )
}
function DateTimeExample() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Datepicker
          id="datepicker-time-date"
          label="Date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <div className="space-y-2">
          <label className="block text-sm font-medium" htmlFor="datepicker-time-time">
            Time
          </label>
          <input
            id="datepicker-time-time"
            type="time"
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </div>
      </div>
      <p className="text-sm text-muted-foreground">Choose the appointment time in Eastern Time.</p>
      {date && time && (
        <p className="text-sm text-muted-foreground" role="status">
          Appointment: {date} at {time} Eastern Time.
        </p>
      )}
    </div>
  )
}

type Config = {
  id: string
  title: string
  purpose: string
  tryIt: string
  explanation: string
  doItems: string[]
  dontItems: string[]
  source: string
  html: string
  requirementItems: string[]
  criteria: {
    id: string
    requirementRefs: string[]
    given: string
    when: string
    then: string
    and: string[]
  }[]
  verification: {
    id: string
    role: string
    title: string
    criterionRefs: string[]
    steps: string[]
    expected: string
  }[]
}
function supplemental(config: Config) {
  const business = `BR-${config.id}`
  const functional = `FR-${config.id}`
  const accessibility = `A11Y-${config.id}`
  const technical = `TR-${config.id}`
  return {
    tabLayout: 'requirements' as const,
    guidance: {
      explanation: config.explanation,
      considerations: [
        'Use the production Datepicker so native calendar affordances and text/keyboard entry remain available.',
        'Keep date interpretation, range rules, time zone, and persistence owned by the consuming application.',
      ],
      doItems: config.doItems,
      dontItems: config.dontItems,
    },
    code: {
      language: 'tsx',
      source: config.source,
      html: config.html,
      props: [
        {
          name: 'label / value / onChange',
          type: 'Datepicker props',
          description:
            'Name the date and let the consuming application own its value when stateful.',
        },
        {
          name: 'hint / error / min / max / required',
          type: 'native and wrapper props',
          description: 'Communicate context, constraints, and validation relationships.',
        },
      ],
      attributes: [
        {
          name: 'type="date"',
          type: 'native input behavior',
          description: 'Preserves browser calendar affordances and keyboard/text entry.',
        },
        {
          name: 'aria-describedby / aria-invalid',
          type: 'accessibility attributes',
          description: 'Connect helper or error text and expose invalid state.',
        },
      ],
      notes:
        'The HTML shows the relevant label, native date input, constraints, and feedback for this variation.',
    },
    requirements: {
      userStory: `As a form user, I want the ${config.title.toLowerCase()} Datepicker to communicate its date rules and preserve a reliable text and keyboard path so that I can enter the intended date.`,
      groups: [
        {
          id: business,
          title: 'Business requirements',
          items: [config.purpose, 'The visible label must identify the date’s purpose.'],
        },
        { id: functional, title: 'Functional requirements', items: config.requirementItems },
        {
          id: accessibility,
          title: 'Accessibility requirements',
          items: [
            'The label, helper/error text, constraints, and invalid state must be available through semantics and text.',
            'The native date input must remain operable with keyboard and text entry.',
          ],
        },
        {
          id: technical,
          title: 'Technical requirements',
          items: [
            'The example must use the production Datepicker primitive shown in its Code panel.',
            'The consuming application must own stateful validation and persistence behavior.',
          ],
        },
      ],
      acceptanceCriteria: config.criteria.map((criterion) => ({
        ...criterion,
        requirementRefs: criterion.requirementRefs.map((ref) =>
          ref === 'business'
            ? `${business}-01`
            : ref === 'functional'
              ? `${functional}-01`
              : `${accessibility}-01`,
        ),
      })),
    },
    verification: {
      scenarios: config.verification.map((scenario) => ({
        id: scenario.id,
        role: scenario.role,
        title: scenario.title,
        criterionRefs: scenario.criterionRefs,
        cases: [
          {
            id: `${scenario.id}-A`,
            title: scenario.title,
            criterionRefs: scenario.criterionRefs,
            steps: scenario.steps,
            expected: scenario.expected,
          },
        ],
      })),
    },
  }
}

const examples: Config[] = [
  {
    id: 'BASIC',
    title: 'Basic',
    purpose: 'A basic Datepicker must present one clearly labelled calendar date field.',
    tryIt:
      'Focus Start date, type or choose a date, and confirm the browser date control remains keyboard operable.',
    explanation:
      'Use a basic Datepicker for one calendar date when browser date affordances help people browse or enter the value.',
    doItems: [
      'Name the date’s purpose in the label.',
      'Preserve native date entry and calendar affordances.',
    ],
    dontItems: [
      'Do not use placeholder text as the only label.',
      'Do not silently reinterpret ambiguous text dates.',
    ],
    source: `<Datepicker id="datepicker-basic" label="Start date" />`,
    html: `<label for="datepicker-basic">Start date</label>\n<input data-slot="datepicker" id="datepicker-basic" type="date">`,
    requirementItems: [
      'The field must have one visible associated label.',
      'The input must remain editable through text and keyboard paths.',
    ],
    criteria: [
      {
        id: 'AC-BASIC-01',
        requirementRefs: ['business', 'functional'],
        given: 'the Basic Datepicker is rendered',
        when: 'a person enters or chooses a date',
        then: 'the date field accepts the value and retains its label',
        and: ['keyboard focus remains visible'],
      },
    ],
    verification: [
      {
        id: 'VR-BASIC-01',
        role: 'Accessibility QA',
        title: 'Enter one calendar date',
        criterionRefs: ['AC-BASIC-01'],
        steps: [
          'Focus Start date.',
          'Enter a date with the keyboard.',
          'Inspect the label and focus indicator.',
        ],
        expected: 'The date is editable, the label remains associated, and focus is visible.',
      },
    ],
  },
  {
    id: 'HELPER',
    title: 'With helper text',
    purpose: 'Helper text must explain a date boundary before selection.',
    tryIt: 'Read the 30-day instruction, choose a date, and confirm the helper remains associated.',
    explanation:
      'Use helper text for date windows, purpose, or time-zone context that remains useful during entry.',
    doItems: [
      'State boundaries before the person chooses.',
      'Associate helper text with the input.',
    ],
    dontItems: [
      'Do not hide essential constraints in optional help.',
      'Do not contradict the browser or locale format.',
    ],
    source: `<Datepicker id="datepicker-helper" label="Start date" hint="Choose a date within the next 30 days." />`,
    html: `<label for="datepicker-helper">Start date</label>\n<input id="datepicker-helper" type="date" aria-describedby="datepicker-helper-hint">\n<p id="datepicker-helper-hint">Choose a date within the next 30 days.</p>`,
    requirementItems: [
      'The helper text must remain visible while the date is chosen.',
      'The input must reference the helper text.',
    ],
    criteria: [
      {
        id: 'AC-HELPER-01',
        requirementRefs: ['business', 'functional'],
        given: 'the helper Datepicker is rendered',
        when: 'a person chooses a date',
        then: 'the 30-day instruction remains visible and associated',
        and: [],
      },
    ],
    verification: [
      {
        id: 'VR-HELPER-01',
        role: 'Accessibility QA',
        title: 'Inspect date guidance',
        criterionRefs: ['AC-HELPER-01'],
        steps: ['Focus Start date.', 'Inspect aria-describedby.', 'Choose a date.'],
        expected: 'The helper text remains available and describes the date constraint.',
      },
    ],
  },
  {
    id: 'DISABLED',
    title: 'Disabled',
    purpose: 'An unavailable Datepicker must communicate the prerequisite for changing the date.',
    tryIt: 'Attempt to focus or change Service date and confirm the prerequisite remains readable.',
    explanation:
      'Disable a Datepicker only when another choice or workflow state controls availability.',
    doItems: ['Explain what activates the date.', 'Keep the label and explanation readable.'],
    dontItems: [
      'Do not disable a field merely to prevent mistakes.',
      'Do not hide the only explanation in the disabled input.',
    ],
    source: `<Datepicker id="datepicker-disabled" label="Service date" disabled hint="Available after you choose a service." />`,
    html: `<label for="datepicker-disabled">Service date</label>\n<input id="datepicker-disabled" type="date" disabled aria-describedby="datepicker-disabled-hint">\n<p id="datepicker-disabled-hint">Available after you choose a service.</p>`,
    requirementItems: [
      'The input must prevent changes while disabled.',
      'The prerequisite must remain visible.',
    ],
    criteria: [
      {
        id: 'AC-DISABLED-01',
        requirementRefs: ['business', 'functional'],
        given: 'the disabled Datepicker is rendered',
        when: 'a person attempts to change the date',
        then: 'the date cannot change and the prerequisite remains visible',
        and: [],
      },
    ],
    verification: [
      {
        id: 'VR-DISABLED-01',
        role: 'Functional QA',
        title: 'Inspect unavailable date',
        criterionRefs: ['AC-DISABLED-01'],
        steps: [
          'Attempt to focus Service date.',
          'Attempt to enter a date.',
          'Read the helper text.',
        ],
        expected: 'The field is unavailable and the prerequisite is understandable.',
      },
    ],
  },
  {
    id: 'INVALID',
    title: 'Invalid',
    purpose:
      'An invalid Datepicker must state the date rule and preserve the value for correction.',
    tryIt: 'Review the invalid date, read the error, and replace it with an allowed date.',
    explanation:
      'Use invalid state when a date is outside a service window or conflicts with another field.',
    doItems: ['Name the allowed rule and correction.', 'Connect the error to the field.'],
    dontItems: ['Do not rely on a border alone.', 'Do not say only “Invalid date.”'],
    source: `<Datepicker id="datepicker-invalid" label="Service date" error="Choose a date within the available service window." />`,
    html: `<label for="datepicker-invalid">Service date</label>\n<input id="datepicker-invalid" type="date" aria-invalid="true" aria-describedby="datepicker-invalid-error">\n<p id="datepicker-invalid-error" role="alert">Choose a date within the available service window.</p>`,
    requirementItems: [
      'The error must state the correction path.',
      'The field must remain editable.',
    ],
    criteria: [
      {
        id: 'AC-INVALID-01',
        requirementRefs: ['business', 'functional'],
        given: 'the invalid Datepicker is rendered',
        when: 'a person reads the error and enters an allowed date',
        then: 'the date remains editable and the correction rule is clear',
        and: ['aria-invalid and aria-describedby expose the relationship'],
      },
    ],
    verification: [
      {
        id: 'VR-INVALID-01',
        role: 'Functional QA',
        title: 'Correct an invalid date',
        criterionRefs: ['AC-INVALID-01'],
        steps: ['Read the error.', 'Enter an allowed date.', 'Inspect the input relationships.'],
        expected:
          'The field accepts correction and the error relationship is programmatically available.',
      },
    ],
  },
  {
    id: 'REQUIRED',
    title: 'Required',
    purpose:
      'A required Datepicker must block an empty submission and announce successful recovery.',
    tryIt:
      'Activate Continue with no date, then choose a date and submit again to verify error and success states.',
    explanation: 'Use required state when the task cannot proceed without a calendar date.',
    doItems: ['Name the missing action.', 'Preserve the date and announce success.'],
    dontItems: [
      'Do not use an error that only says “Required.”',
      'Do not prefill a consequential date without a clear reason.',
    ],
    source: `const [value, setValue] = useState('')\n<Datepicker label="Start date" value={value} onChange={(event) => setValue(event.target.value)} />`,
    html: `<form><label for="datepicker-required">Start date</label>\n<input id="datepicker-required" type="date" aria-describedby="datepicker-required-error">\n<button type="submit">Continue</button>\n<p id="datepicker-required-error" role="alert">Choose a date before continuing.</p>\n</form>`,
    requirementItems: [
      'An empty submission must expose a corrective error.',
      'A valid submission must expose a polite success status.',
    ],
    criteria: [
      {
        id: 'AC-REQUIRED-01',
        requirementRefs: ['business', 'functional'],
        given: 'no date is selected',
        when: 'a person activates Continue',
        then: 'submission is blocked and the error asks for a date',
        and: ['after a date is selected, another submission reports the saved date'],
      },
    ],
    verification: [
      {
        id: 'VR-REQUIRED-01',
        role: 'Functional QA',
        title: 'Submit a required date',
        criterionRefs: ['AC-REQUIRED-01'],
        steps: ['Activate Continue with no date.', 'Choose a date.', 'Activate Continue again.'],
        expected:
          'The first submission shows the correction error; the second announces the saved date.',
      },
    ],
  },
  {
    id: 'RANGE',
    title: 'Range picker',
    purpose:
      'A date range must expose start and end labels and prevent an end date before the start.',
    tryIt:
      'Choose a start and end date, then try an end date before the start to verify the relationship and error.',
    explanation: 'Use a range when the beginning and end are both meaningful to the task.',
    doItems: ['Label both endpoints.', 'Prevent or clearly validate reversed dates.'],
    dontItems: [
      'Do not make people infer start and end from position alone.',
      'Do not silently adjust one endpoint.',
    ],
    source: `<Datepicker label="Start date" />\n<Datepicker label="End date" min={start} error={rangeError} />`,
    html: `<fieldset><legend>Date range</legend><label for="datepicker-range-start">Start date</label><input id="datepicker-range-start" type="date">\n<label for="datepicker-range-end">End date</label><input id="datepicker-range-end" type="date" min="2027-04-03"></fieldset>`,
    requirementItems: [
      'Both endpoints must have clear labels.',
      'The end date must not precede the start date.',
      'A valid range must be announced.',
    ],
    criteria: [
      {
        id: 'AC-RANGE-01',
        requirementRefs: ['business', 'functional'],
        given: 'the range picker is rendered',
        when: 'a person chooses a start and end date',
        then: 'the range is shown only when the end is on or after the start',
        and: ['a reversed range exposes a corrective error'],
      },
    ],
    verification: [
      {
        id: 'VR-RANGE-01',
        role: 'Functional QA',
        title: 'Validate a date range',
        criterionRefs: ['AC-RANGE-01'],
        steps: [
          'Choose April 3 as the start.',
          'Choose April 10 as the end.',
          'Change the end to April 2.',
        ],
        expected: 'The valid range is announced; the reversed range shows an actionable error.',
      },
    ],
  },
  {
    id: 'DATETIME',
    title: 'Date and time',
    purpose: 'A scheduled moment must label date and time separately and state the time zone.',
    tryIt: 'Choose a date and time and confirm the status names both values and Eastern Time.',
    explanation: 'Use date and time together when the task represents a specific scheduled moment.',
    doItems: ['State the time zone.', 'Keep date and time labels separate.'],
    dontItems: [
      'Do not assume a cross-region time zone.',
      'Do not request time precision the task does not need.',
    ],
    source: `<Datepicker label="Date" />\n<label htmlFor="time">Time</label><input id="time" type="time" />`,
    html: `<label for="datepicker-time-date">Date</label><input id="datepicker-time-date" type="date">\n<label for="datepicker-time-time">Time</label><input id="datepicker-time-time" type="time">`,
    requirementItems: [
      'Date and time must have separate labels.',
      'The displayed status must state Eastern Time.',
    ],
    criteria: [
      {
        id: 'AC-DATETIME-01',
        requirementRefs: ['business', 'functional'],
        given: 'the date and time example is rendered',
        when: 'a person chooses both values',
        then: 'the status reports the appointment date, time, and Eastern Time',
        and: [],
      },
    ],
    verification: [
      {
        id: 'VR-DATETIME-01',
        role: 'Functional QA',
        title: 'Review scheduled moment',
        criterionRefs: ['AC-DATETIME-01'],
        steps: ['Choose a date.', 'Choose a time.', 'Read the status.'],
        expected: 'The status names both values and explicitly identifies Eastern Time.',
      },
    ],
  },
]

function renderExample(config: Config, child: ReactNode) {
  return (
    <ExampleVariation
      title={config.title}
      summary={config.purpose}
      tryIt={config.tryIt}
      exampleClassName="p-5 sm:p-6"
      supplemental={supplemental(config)}
    >
      {child}
    </ExampleVariation>
  )
}
function ComponentsDatepickerPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/datepicker"
      tabActiveHref="/components/forms"
      sidebarNav={formSidebarLinks}
      sidebarNavLabel="Forms components"
    >
      <div className="space-y-14">
        <section className="space-y-5">
          <h1 className="text-4xl font-semibold tracking-tight">Datepicker</h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Use Datepicker for calendar dates while preserving a usable text and keyboard path
            alongside browser calendar affordances.
          </p>
        </section>
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">What is it?</h2>
          <p className="leading-7 text-muted-foreground">
            Datepicker is a labelled native date input with guidance, constraints, and validation
            that help people enter a calendar date or scheduled moment.
          </p>
          <TryIt>
            Focus Start date, enter a date with the keyboard or calendar affordance, and confirm the
            value remains editable.
          </TryIt>
          <div className="rounded-lg border p-5 sm:p-6">
            <BasicExample />
          </div>
        </section>
        <section className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight">When to use it</h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Use it when a calendar date has a clear purpose.</li>
              <li>Use ranges when both endpoints matter.</li>
              <li>State time zone rules when choosing a scheduled moment.</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight">When not to use it</h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Use a month/year selector for period selection.</li>
              <li>Use plain text when the date is descriptive rather than an input.</li>
              <li>Do not hide locale or time-zone assumptions.</li>
            </ul>
          </div>
        </section>
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">
            Accessibility and responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">
            Keep labels, helper text, errors, constraints, and required states connected in text and
            semantics. Preserve the native calendar and keyboard entry path, let paired range fields
            stack at narrow widths, and keep focus rings and long guidance visible.
          </p>
        </section>
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Examples and variations</h2>
            <p className="leading-7 text-muted-foreground">
              Each example demonstrates a distinct date-entry, validation, range, or scheduling
              decision.
            </p>
          </div>
          <div className="space-y-10">
            {renderExample(examples[0], <BasicExample />)}
            {renderExample(examples[1], <HelperExample />)}
            {renderExample(examples[2], <DisabledExample />)}
            {renderExample(examples[3], <InvalidExample />)}
            {renderExample(examples[4], <RequiredExample />)}
            {renderExample(examples[5], <RangeExample />)}
            {renderExample(examples[6], <DateTimeExample />)}
          </div>
        </section>
      </div>
    </ComponentGuideShell>
  )
}
export { ComponentsDatepickerPage }
