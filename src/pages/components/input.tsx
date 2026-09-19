import { FormGuide } from './form-guide'
import { useState } from 'react'
import { Field, inputClass, InputGuidance, InputVariation } from './form-example-primitives'

function RequiredInputExample() {
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
        id="input-required-variation"
        label="Project name"
        hint="Required. Try submitting this blank: the browser should prevent submission. Enter a name and submit again to see the success confirmation."
      >
        <input
          id="input-required-variation"
          className={inputClass}
          type="text"
          required
          aria-required="true"
          aria-describedby="input-required-variation-hint"
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
          Submitted successfully because the required field has a value.
        </p>
      )}
    </form>
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
            label="Email"
            hint="This field is currently disabled."
            disabled
          >
            <input
              id="input-disabled-variation"
              className={`${inputClass} disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50`}
              type="email"
              placeholder="Email"
              disabled
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
          <RequiredInputExample />
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
            hint="Choose a PDF or DOCX up to 10 MB. After choosing a file, its filename should appear; this reference example does not upload it."
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

function BasicInputExample() {
  return (
    <Field id="intro-input" label="Email address">
      <input id="intro-input" className={inputClass} type="email" placeholder="you@example.com" />
    </Field>
  )
}

function ComponentsInputPage() {
  return (
    <FormGuide
      kind="input"
      title="Input"
      description="Use Input for a short, single-line value such as a name, email address, or search term."
      basicExample={<BasicInputExample />}
      variations={<InputVariations />}
    />
  )
}

export { ComponentsInputPage }
