/**
 * Radio button guide page.
 *
 * Uses the shared FormGuide renderer to teach one choice from a group,
 * fieldset and legend semantics, validation, and disabled options.
 */

import { useState } from 'react'

import { FormGuide } from './form-guide'
import { InputGuidance, InputVariation } from './form-example-primitives'

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
    <fieldset
      className="space-y-3"
      aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
    >
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
        <label
          key={option}
          className="flex items-start gap-3 text-sm"
          htmlFor={`${idPrefix}-${option}`}
        >
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
      <fieldset
        className="space-y-3"
        aria-describedby={error ? 'radio-button-required-error' : 'radio-button-required-hint'}
      >
        <legend className="text-sm font-medium">How should we contact you?</legend>
        <p id="radio-button-required-hint" className="text-sm text-muted-foreground">
          Required. Try submitting without a choice to see the error. Select one option and submit
          again.
        </p>
        <div className="space-y-3">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-start gap-3 text-sm"
              htmlFor={`radio-button-required-${option}`}
            >
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

function RadioButtonVariations() {
  return (
    <section className="space-y-8" aria-labelledby="radio-button-variations-heading">
      <div className="space-y-5">
        <h2 id="radio-button-variations-heading" className="text-2xl font-semibold tracking-tight">
          Examples and variations
        </h2>
        <p className="leading-7 text-muted-foreground">
          Radio Buttons present mutually exclusive options. Use the group legend to describe the
          single decision and each visible label to identify one possible answer.
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
          <RadioButtonExample
            idPrefix="radio-button-helper"
            hint="Choose the method you check most often. You can change this preference later."
          />
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
          <RadioButtonExample
            idPrefix="radio-button-disabled"
            disabled
            hint="Available after you add a verified contact method."
          />
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
          <RadioButtonExample
            idPrefix="radio-button-invalid"
            invalid
            hint="Select one contact method to continue."
          />
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

function BasicRadioExample() {
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
}

function ComponentsRadioPage() {
  return (
    <FormGuide
      kind="radio-group"
      title="Radio button"
      description="Use Radio buttons as a group when people must choose exactly one option from a small set of mutually exclusive choices."
      activeHref="/components/radio"
      basicExample={<BasicRadioExample />}
      variations={<RadioButtonVariations />}
    />
  )
}

export { ComponentsRadioPage }
