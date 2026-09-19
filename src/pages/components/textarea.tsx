import { FormGuide } from './form-guide'
import { Field, inputClass, InputGuidance, InputVariation } from './form-example-primitives'
import { useState } from 'react'
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

function BasicTextareaExample() {
  return <Field id="intro-textarea" label="Message"><textarea id="intro-textarea" className={`${inputClass} min-h-24 resize-y`} placeholder="Write a message" /></Field>
}

function ComponentsTextareaPage() {
  return <FormGuide kind="textarea" title="Text area" description="Use Text area for a longer, free-form response that may need multiple lines." basicExample={<BasicTextareaExample />} variations={<TextareaVariations />} />
}

export { ComponentsTextareaPage }
