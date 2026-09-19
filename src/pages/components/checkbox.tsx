import { FormGuide } from './form-guide'
import { InputGuidance, InputVariation } from './form-example-primitives'
import { useState } from 'react'
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

function CheckboxVariations() {
  return (
    <section className="space-y-8" aria-labelledby="checkbox-variations-heading">
      <div className="space-y-5">
        <h2 id="checkbox-variations-heading" className="text-2xl font-semibold tracking-tight">
          Examples and variations
        </h2>
        <p className="leading-7 text-muted-foreground">
          These examples show how a Checkbox changes as the choice needs a label, persistent
          guidance, availability, validation, or a required acknowledgment. The label should always
          explain the independent choice people are making.
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
            <input
              id="checkbox-basic-variation"
              className="mt-1 size-4 accent-primary"
              type="checkbox"
            />
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

function BasicCheckboxExample() {
  return (
    <label className="flex items-center gap-3 text-sm" htmlFor="intro-checkbox">
      <input id="intro-checkbox" className="size-4 accent-primary" type="checkbox" />
      <span>Send me product updates</span>
    </label>
  )
}

function ComponentsCheckboxPage() {
  return (
    <FormGuide
      kind="checkbox"
      title="Checkbox"
      description="Use Checkbox for an independent yes/no preference or a choice that can be selected on its own."
      basicExample={<BasicCheckboxExample />}
      variations={<CheckboxVariations />}
    />
  )
}

export { ComponentsCheckboxPage }
