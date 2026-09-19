import { FormGuide } from './form-guide'
import { Field, inputClass, InputGuidance, InputVariation } from './form-control-shared'
import { useState } from 'react'

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

function BasicDatepickerExample() {
  return <Field id="intro-datepicker" label="Start date"><input id="intro-datepicker" className={`${inputClass} [color-scheme:light]`} type="date" /></Field>
}

function ComponentsDatepickerPage() {
  return <FormGuide kind="datepicker" title="Datepicker" description="Use Datepicker for a calendar date. Preserve a usable text and keyboard path alongside calendar affordances." basicExample={<BasicDatepickerExample />} variations={<DatepickerVariations />} />
}

export { ComponentsDatepickerPage }
