import { FormGuide } from './form-guide'
import { Field, inputClass, InputGuidance, InputVariation } from './form-control-shared'
import { useState } from 'react'
function SelectOptionButton({
  option,
  selected,
  onSelect,
}: {
  option: { label: string; value: string }
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      className="flex w-full items-center rounded-sm px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      onClick={onSelect}
    >
      {option.label}
    </button>
  )
}

function ScrollableSelectExample() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('america-new-york')
  const options = [
    { label: 'Eastern Standard Time', value: 'america-new-york' },
    { label: 'Central Standard Time', value: 'america-chicago' },
    { label: 'Mountain Standard Time', value: 'america-denver' },
    { label: 'Pacific Standard Time', value: 'america-los-angeles' },
    { label: 'Alaska Standard Time', value: 'america-anchorage' },
    { label: 'Hawaii Standard Time', value: 'pacific-honolulu' },
    { label: 'Greenwich Mean Time', value: 'europe-london' },
    { label: 'Central European Time', value: 'europe-berlin' },
    { label: 'Eastern European Time', value: 'europe-athens' },
    { label: 'India Standard Time', value: 'asia-kolkata' },
    { label: 'China Standard Time', value: 'asia-shanghai' },
    { label: 'Japan Standard Time', value: 'asia-tokyo' },
  ]
  const selected = options.find((option) => option.value === value)

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium" htmlFor="select-scrollable-trigger">
        Time zone
      </label>
      <div className="relative">
        <button
          id="select-scrollable-trigger"
          type="button"
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-left text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls="select-scrollable-options"
          onClick={() => setOpen((current) => !current)}
        >
          <span>{selected?.label}</span>
          <span aria-hidden="true">⌄</span>
        </button>
        {open && (
          <div className="absolute z-10 mt-1 w-full rounded-md border bg-popover p-1 shadow-md">
            <ul
              id="select-scrollable-options"
              className="max-h-52 overflow-y-auto"
              role="listbox"
              aria-label="Time zone options"
            >
              {options.map((option) => (
                <li key={option.value}>
                  <SelectOptionButton
                    option={option}
                    selected={option.value === value}
                    onSelect={() => {
                      setValue(option.value)
                      setOpen(false)
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function SearchableSelectExample() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [value, setValue] = useState('')
  const options = [
    { label: 'Argentina', value: 'ar' },
    { label: 'Australia', value: 'au' },
    { label: 'Brazil', value: 'br' },
    { label: 'Canada', value: 'ca' },
    { label: 'China', value: 'cn' },
    { label: 'Colombia', value: 'co' },
    { label: 'Egypt', value: 'eg' },
    { label: 'France', value: 'fr' },
    { label: 'Germany', value: 'de' },
    { label: 'Italy', value: 'it' },
    { label: 'Japan', value: 'jp' },
    { label: 'Kenya', value: 'ke' },
    { label: 'Mexico', value: 'mx' },
    { label: 'New Zealand', value: 'nz' },
    { label: 'Nigeria', value: 'ng' },
    { label: 'South Africa', value: 'za' },
    { label: 'South Korea', value: 'kr' },
    { label: 'United Kingdom', value: 'gb' },
    { label: 'United States', value: 'us' },
  ]
  const selected = options.find((option) => option.value === value)
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium" htmlFor="select-searchable-trigger">
        Country
      </label>
      <div className="relative">
        <button
          id="select-searchable-trigger"
          type="button"
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-left text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls="select-searchable-options"
          onClick={() => setOpen((current) => !current)}
        >
          <span className={selected ? '' : 'text-muted-foreground'}>
            {selected?.label ?? 'Select country'}
          </span>
          <span aria-hidden="true">⌄</span>
        </button>
        {open && (
          <div className="absolute z-10 mt-1 w-full rounded-md border bg-popover p-1 shadow-md">
            <input
              className="mb-1 h-9 w-full rounded-sm border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              type="search"
              value={query}
              placeholder="Search countries"
              aria-label="Filter country options"
              aria-controls="select-searchable-options"
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Escape') setOpen(false)
              }}
            />
            <ul
              id="select-searchable-options"
              className="max-h-52 overflow-y-auto"
              role="listbox"
              aria-label="Country options"
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <li key={option.value}>
                    <SelectOptionButton
                      option={option}
                      selected={option.value === value}
                      onSelect={() => {
                        setValue(option.value)
                        setQuery('')
                        setOpen(false)
                      }}
                    />
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-sm text-muted-foreground" role="status">
                  No countries found.
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function RequiredSelectExample() {
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
        id="select-required-variation"
        label="Deployment region"
        hint="Required. Leave the prompt selected and submit to see the browser prevent submission; choose a region to continue."
      >
        <select
          id="select-required-variation"
          className={inputClass}
          defaultValue=""
          required
          aria-required="true"
          aria-describedby="select-required-variation-hint"
          onChange={() => setSubmitted(false)}
        >
          <option value="" disabled>
            Choose a deployment region
          </option>
          <option value="us-east">US East</option>
          <option value="eu-west">EU West</option>
          <option value="ap-southeast">Asia Pacific Southeast</option>
        </select>
      </Field>
      <button
        type="submit"
        className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Submit
      </button>
      {submitted && (
        <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
          Submitted successfully because a deployment region was selected.
        </p>
      )}
    </form>
  )
}

function SelectVariations() {
  return (
    <section className="space-y-8" aria-labelledby="select-variations-heading">
      <div className="space-y-5">
        <h2 id="select-variations-heading" className="text-2xl font-semibold tracking-tight">
          Examples and variations
        </h2>
        <p className="leading-7 text-muted-foreground">
          These examples show how a Select changes when people need a prompt, explanation, validation,
          unavailable options, grouping, scrolling, or search. Use the guidance to choose the simplest
          behavior that fits the decision.
        </p>
      </div>
      <div className="grid gap-8">
        <InputVariation
          title="Basic"
          description="A Select with no helper text or description and a prompt instead of a preselected value."
          guidance={
            <InputGuidance
              intro="Use placeholder text in a Select when people must make an intentional choice and there is no safe default. The prompt disappears after selection, so it should identify the action rather than explain the whole task."
              dos={[
                'Use a concise action such as “Choose a contact preference.”',
                'Match the prompt to the question answered by the label.',
                'Keep the prompt visually distinct from a real option and selected value.',
              ]}
              donts={[
                'Do not use a placeholder when a safe, common default would reduce work.',
                'Do not put required instructions, definitions, or error messages only in the prompt.',
                'Do not write vague prompts such as “Select one” when the label does not provide the context.',
              ]}
            />
          }
        >
          <Field id="select-basic-variation" label="Contact preference">
            <select id="select-basic-variation" className={inputClass} defaultValue="">
              <option value="" disabled>
                Choose a contact preference
              </option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="sms">Text message</option>
            </select>
          </Field>
        </InputVariation>

        <InputVariation
          title="With helper text"
          description="A Select with persistent guidance that explains a decision before and after the menu is opened."
          guidance={
            <InputGuidance
              intro="Use helper or description text when the choice needs context that remains useful after selection, such as consequences, eligibility, format, or how the options are organized."
              dos={[
                'Explain why the choice matters or how to choose, not what the label already says.',
                'Keep the guidance short enough to scan before opening the menu.',
                'Use plain language and associate the description with the Select using aria-describedby.',
              ]}
              donts={[
                'Do not repeat every option in the helper text.',
                'Do not use helper text for a correction the person must make; use an error instead.',
                'Do not hide essential instructions in text that disappears when the control opens.',
              ]}
            />
          }
        >
          <Field
            id="select-helper-variation"
            label="Notification frequency"
            hint="Choose how often the project summary is sent to your team."
          >
            <select
              id="select-helper-variation"
              className={inputClass}
              defaultValue="weekly"
              aria-describedby="select-helper-variation-hint"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </Field>
        </InputVariation>

        <InputVariation
          title="Disabled"
          description="A Select that cannot be changed because its value or availability is controlled elsewhere."
          guidance={
            <InputGuidance
              intro="Disable a Select only when people cannot make a meaningful change in the current context, such as a dependent choice that is unavailable until an earlier selection is made."
              dos={[
                'Explain why the Select is unavailable and what action can activate it.',
                'Preserve the label and any value needed to understand the surrounding workflow.',
              ]}
              donts={[
                'Do not disable a choice merely to prevent mistakes; explain the rule or validate the choice instead.',
                'Do not disable a Select while loading without communicating that work is in progress.',
                'Do not use disabled when people need to read, copy, or discover the value; use read-only or plain text.',
              ]}
            />
          }
        >
          <Field
            id="select-disabled-variation"
            label="Fruit"
            hint="This field is currently disabled."
            disabled
          >
            <button
              id="select-disabled-variation"
              type="button"
              className="mt-2 flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-left text-sm shadow-xs outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50"
              disabled
              aria-haspopup="listbox"
              aria-expanded="false"
              aria-describedby="select-disabled-variation-hint"
            >
              <span className="text-muted-foreground">Select a fruit</span>
              <span aria-hidden="true">⌄</span>
            </button>
          </Field>
        </InputVariation>

        <InputVariation
          title="Invalid"
          description="A Select whose current value conflicts with a known rule and needs a different choice."
          guidance={
            <InputGuidance
              intro="Show an invalid state when the current choice is missing, no longer available, or conflicts with a rule the person can act on."
              dos={[
                'Explain what is wrong and what kind of choice will fix it.',
                'Keep the selected value visible so people can understand and change their decision.',
                'Connect the error with aria-describedby and aria-invalid, and place it close to the Select.',
              ]}
              donts={[
                'Do not show an error before people have had a fair chance to choose.',
                'Do not rely on a red border or warning icon alone.',
                'Do not use “Invalid selection” without explaining the correction.',
              ]}
            />
          }
        >
          <Field id="select-invalid-variation" label="Review status">
            <select
              id="select-invalid-variation"
              className={`${inputClass} border-destructive focus-visible:ring-destructive`}
              defaultValue="archived"
              aria-invalid="true"
              aria-describedby="select-invalid-error"
            >
              <option value="draft">Draft</option>
              <option value="review">Ready for review</option>
              <option value="archived">Archived</option>
            </select>
            <p id="select-invalid-error" className="mt-2 text-sm text-destructive">
              Archived projects cannot be submitted for review. Choose Draft or Ready for review.
            </p>
          </Field>
        </InputVariation>

        <InputVariation
          title="Required"
          description="A Select that must have a meaningful choice before the task can be completed."
          guidance={
            <InputGuidance
              intro="Use a required Select only when leaving the decision unanswered would prevent the task from being completed or create a meaningful problem."
              dos={[
                'Use a prompt that is not a valid option and identify the requirement before submission.',
                'Write an error that names the missing decision and gives an action, such as “Choose a region.”',
                'Keep the required state available to assistive technology and visible in the surrounding guidance.',
              ]}
              donts={[
                'Do not select a value on someone’s behalf when the choice has important consequences.',
                'Do not use an error that only says “Required.”',
                'Do not make a Select required when a reasonable default is genuinely safe.',
              ]}
            />
          }
        >
          <RequiredSelectExample />
        </InputVariation>

        <InputVariation
          title="Groups"
          description="A Select that organizes related options under meaningful group names."
          guidance={
            <InputGuidance
              intro="Group options when the list contains clear categories that help people scan and understand their choices. Grouping is useful for related locations, roles, or products—not for decoration."
              dos={[
                'Give each group a short, meaningful name that describes all options beneath it.',
                'Keep groups mutually understandable and order them predictably.',
                'Use native optgroup semantics so group names are available to assistive technology.',
              ]}
              donts={[
                'Do not create a group with one option unless the category is important to the decision.',
                'Do not mix unrelated options under a generic group such as “Other.”',
                'Do not use groups to compensate for unclear option names or an overly large list.',
              ]}
            />
          }
        >
          <Field id="select-groups-variation" label="Project owner">
            <select id="select-groups-variation" className={inputClass} defaultValue="">
              <option value="" disabled>
                Choose a project owner
              </option>
              <optgroup label="Design">
                <option value="maya">Maya Chen</option>
                <option value="jordan">Jordan Lee</option>
              </optgroup>
              <optgroup label="Engineering">
                <option value="sam">Sam Rivera</option>
                <option value="riley">Riley Patel</option>
              </optgroup>
            </select>
          </Field>
        </InputVariation>

        <InputVariation
          title="Scrollable"
          description="A Select that exposes several options in a bounded viewport while allowing the list to scroll."
          guidance={
            <InputGuidance
              intro="Allow the options to scroll when the list is long enough that opening it would obscure the page or extend beyond the viewport, but people still benefit from scanning rather than searching."
              dos={[
                'Keep the visible window large enough to show the list has more options.',
                'Use predictable ordering and preserve the selected option when the list scrolls.',
                'Make sure keyboard users can reach every option without depending on a pointer.',
              ]}
              donts={[
                'Do not use scrolling to hide a short list that could be scanned at once.',
                'Do not make the control so short that people miss available options.',
                'Do not use a scrollable Select for a very large collection that needs filtering.',
              ]}
            />
          }
        >
          <ScrollableSelectExample />
        </InputVariation>

        <InputVariation
          title="Searchable"
          description="A searchable alternative for a long list where filtering is faster than scanning every option."
          guidance={
            <InputGuidance
              intro="Use a searchable control when the list is long, people know what they are looking for, or option names are easier to find by typing than by scrolling. In most designs, this is a Combobox rather than a native Select."
              dos={[
                'Support typing, filtering, selection, clearing, and a useful no-results message.',
                'Keep the selected value visible and distinguish it from the search query while editing.',
                'Announce the result count or no-results state and support keyboard navigation.',
              ]}
              donts={[
                'Do not add search to a short list that is faster to scan.',
                'Do not filter without explaining why options disappeared or how to clear the query.',
                'Do not let the search field accept arbitrary text when only listed options are valid.',
              ]}
            />
          }
        >
          <SearchableSelectExample />
        </InputVariation>
      </div>
    </section>
  )
}

function BasicSelectExample() {
  return <Field id="intro-select" label="Contact preference"><select id="intro-select" className={inputClass} defaultValue="email"><option value="email">Email</option><option value="phone">Phone</option></select></Field>
}

function ComponentsSelectPage() {
  return <FormGuide kind="select" title="Select" description="Use Select when people choose one option from a known, relatively stable list." basicExample={<BasicSelectExample />} variations={<SelectVariations />} />
}

export { ComponentsSelectPage }
