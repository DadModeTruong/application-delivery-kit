import { FormGuide } from './form-guide'
import { InputGuidance, InputVariation } from './form-control-shared'
import { useState } from 'react'
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

function BasicCheckboxGroupExample() {
  return <fieldset className="space-y-3"><legend className="text-sm font-medium">Topics of interest</legend><label className="flex items-center gap-3 text-sm" htmlFor="intro-checkbox-a"><input id="intro-checkbox-a" className="size-4 accent-primary" type="checkbox" /><span>Accessibility</span></label><label className="flex items-center gap-3 text-sm" htmlFor="intro-checkbox-b"><input id="intro-checkbox-b" className="size-4 accent-primary" type="checkbox" /><span>Design systems</span></label></fieldset>
}

function ComponentsCheckboxGroupPage() {
  return <FormGuide kind="checkbox-group" title="Checkbox group" description="Use a Checkbox group when people may choose zero, one, or several related options." basicExample={<BasicCheckboxGroupExample />} variations={<CheckboxGroupVariations />} />
}

export { ComponentsCheckboxGroupPage }
