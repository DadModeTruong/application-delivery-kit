/** Typed documentation content owned by the Forms guide renderer. */

export type GuideContent = {
  what: string
  use: string[]
  notUse: string[]
  design: string[]
  accessibility: string[]
  responsive: string
  examples: string
}
export const guideContent: Record<FormKind, GuideContent> = {
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
  'radio-group': {
    what: 'A radio button is one option within a related set of mutually exclusive choices. In practice, radio buttons should be presented as a radio group with one shared question and one selected value.',
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
      'Use a radio group for one-of-many decisions, with descriptions when the consequences differ.',
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
    examples: 'Use the simple searchable list to understand when finding an option is the problem.',
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
      'Use direct entry alongside calendar navigation, and choose the simplest date pattern that matches the question.',
  },
}

export const sectionDetails: Record<
  FormKind,
  {
    useIntro: string
    notUseIntro: string
    designIntro: string
    accessibilityIntro: string
    responsiveIntro: string
    useMore: string[]
    notUseMore: string[]
    designMore: string[]
    accessibilityMore: string[]
  }
> = {
  input: {
    useIntro:
      'Input works best when the answer is short enough to understand as one line and structured enough to validate.',
    notUseIntro:
      'The familiar text field is not automatically the right pattern when the person needs to choose, write at length, or take an action.',
    designIntro:
      'The label and supporting content should explain what belongs in the field before typing begins.',
    accessibilityIntro:
      'The purpose, instructions, current value, state, and error should be available regardless of input method.',
    responsiveIntro:
      'A field can become cramped when an action, unit, or error is placed beside it.',
    useMore: ['Use autocomplete when the browser can safely help with a known personal value.'],
    notUseMore: ['Do not use a single-line field for a narrative response.'],
    designMore: [
      'Choose a width that reflects the expected answer instead of making every field equally wide.',
    ],
    accessibilityMore: [
      'Use the correct input type, autocomplete, and inputmode when they make entry easier.',
    ],
  },
  select: {
    useIntro:
      'Select is useful when one known value must be chosen and seeing every option at once is not necessary.',
    notUseIntro:
      'Select becomes a poor choice when people must compare options, search a large collection, or choose more than one value.',
    designIntro:
      'The closed control should communicate both the question and the current answer; the open menu should be easy to scan.',
    accessibilityIntro:
      'The trigger, popup, selection, and keyboard path must remain understandable as one control.',
    responsiveIntro:
      'The popup is part of the responsive design and must remain readable near any edge of the screen.',
    useMore: ['Use a stable option order so returning users can predict where a choice will be.'],
    notUseMore: ['Do not hide a decision people need to compare side by side.'],
    designMore: ['Make placeholder text distinct from a selected value.'],
    accessibilityMore: ['Keep option names meaningful out of visual context.'],
  },
  textarea: {
    useIntro:
      'Text area is for language that may naturally grow beyond a line; people should be able to review what they wrote.',
    notUseIntro:
      'A large writing surface is the wrong choice for a short, structured value or a known set of options.',
    designIntro:
      'The starting size, prompt, and length guidance should set expectations without making the field feel like a test.',
    accessibilityIntro:
      'Long responses, help text, and errors must remain associated with the same field as it grows.',
    responsiveIntro:
      'The control should provide more room vertically rather than forcing horizontal scrolling.',
    useMore: ['Use a minimum length only when the task truly needs enough detail to be useful.'],
    notUseMore: [
      'Do not use a text area for an email, date, identifier, or other structured value.',
    ],
    designMore: ['Show a character count when the limit changes how someone should write.'],
    accessibilityMore: [
      'Make the limit available as text and avoid premature errors while typing.',
    ],
  },
  checkbox: {
    useIntro:
      'Checkbox is the right mental model when each option can be independently true or false.',
    notUseIntro:
      'Checkbox is often confused with a radio button, switch, or submit action; its meaning should remain an independent choice.',
    designIntro:
      'The copy should describe the preference or confirmation, including what changes after selection.',
    accessibilityIntro:
      'Checked, unchecked, mixed, disabled, and invalid states need names and relationships beyond the visual mark.',
    responsiveIntro:
      'Long preference and consent labels need room to wrap while keeping the control aligned.',
    useMore: ['Use an explicit opt-in for optional communications or features.'],
    notUseMore: ['Do not precheck a consequential consent choice.'],
    designMore: ['Put the consequence in the label or nearby description, not behind a tooltip.'],
    accessibilityMore: [
      'Make the full label target clickable without creating a conflicting accessible name.',
    ],
  },
  'checkbox-group': {
    useIntro:
      'A group is appropriate when several choices answer the same question and more than one answer can be true.',
    notUseIntro:
      'Grouping changes the meaning of the controls, so it is incorrect for unrelated or mutually exclusive choices.',
    designIntro:
      'The group label should name the shared question; each option should name one possible answer.',
    accessibilityIntro:
      'The group relationship helps people understand the question before hearing individual options.',
    responsiveIntro:
      'A vertical list usually gives related choices the clearest reading and activation order.',
    useMore: ['Offer a “none” option when selecting nothing is meaningful and valid.'],
    notUseMore: ['Do not require a group when “none” is valid but is not offered.'],
    designMore: ['Keep the legend, help, error, and options visually close.'],
    accessibilityMore: [
      'Make a mixed parent state understandable without relying on checkbox appearance.',
    ],
  },
  'radio-group': {
    useIntro:
      'Radio buttons are normally used together as a group: people compare the available answers to one question and choose exactly one.',
    notUseIntro:
      'It is the wrong model when several values may be selected or the options are too numerous to compare.',
    designIntro:
      'Treat the group as one decision, with each option providing a clearly comparable answer.',
    accessibilityIntro:
      'The group label, selected value, disabled choices, and error should be announced in a useful order.',
    responsiveIntro:
      'Descriptions usually make a stacked layout safer; compact horizontal choices must still wrap predictably.',
    useMore: [
      'Use controlled state when the selection immediately changes another visible value, such as a price.',
    ],
    notUseMore: ['Do not use a group when a single checkbox expresses the preference.'],
    designMore: [
      'Make the selected result visible beyond the small radio indicator when it has consequences.',
    ],
    accessibilityMore: [
      'Put group errors near the group instead of repeating them for every option.',
    ],
  },
  combobox: {
    useIntro:
      'Combobox is useful when finding the right option requires typing, filtering, or recognizing a value from a large collection.',
    notUseIntro:
      'It adds interaction complexity, so it is not an improvement when a short visible list would be quicker.',
    designIntro:
      'People should understand whether they are searching, selecting an existing record, or entering a new value.',
    accessibilityIntro:
      'The input, suggestions, active result, selected result, and popup state must form one coherent interaction.',
    responsiveIntro:
      'Results need enough space for names and supporting information without running off-screen.',
    useMore: [
      'Use it for people, projects, countries, or other collections that are difficult to scan.',
    ],
    notUseMore: ['Do not use it as decorative autocomplete for a short list.'],
    designMore: ['Keep the typed value visible while results update.'],
    accessibilityMore: ['Announce loading and no-results states without erasing the query.'],
  },
  datepicker: {
    useIntro:
      'Datepicker is appropriate when the value is a calendar date and people benefit from direct entry and calendar navigation.',
    notUseIntro:
      'A calendar adds work to a simple choice and is the wrong tool for a month, year, duration, or time-only value.',
    designIntro:
      'The format, allowed range, unavailable dates, and relationship to nearby dates should be clear before submission.',
    accessibilityIntro:
      'People must be able to edit date segments, navigate the calendar, identify today and selected dates, and recover from invalid input.',
    responsiveIntro:
      'The calendar must stay within the viewport while the date field remains comfortable to edit on a small screen.',
    useMore: ['Use constraints for real rules such as future appointments or a contract period.'],
    notUseMore: ['Do not force calendar navigation for a date people can enter more quickly.'],
    designMore: [
      'Explain whether the date uses the person’s locale or a specific business timezone.',
    ],
    accessibilityMore: ['Keep keyboard entry available alongside the calendar trigger.'],
  },
}

export const tryItText: Record<FormKind, string> = {
  input:
    'enter an email address, then confirm the label, input type, and any validation message remain clear.',
  select:
    'open the list and choose a contact preference with the keyboard, then confirm the selected option is clear.',
  textarea:
    'enter a multiline message and resize the field, then confirm the label and entered content remain understandable.',
  checkbox:
    'toggle the product-updates option with the keyboard, then confirm its checked state is visible without relying on color alone.',
  'checkbox-group':
    'select more than one topic, then confirm each option can be changed independently and the group remains understandable.',
  'radio-group':
    'choose a single notification method, then use the arrow keys to change the selection and confirm only one option is selected.',
  combobox:
    'type to filter the available options, choose one, and confirm the chosen value is announced and remains visible.',
  datepicker:
    'open the calendar, navigate to a date with the keyboard, and select it while confirming the chosen date is clear.',
}

export type FormKind =
  | 'input'
  | 'select'
  | 'textarea'
  | 'checkbox'
  | 'checkbox-group'
  | 'radio-group'
  | 'combobox'
  | 'datepicker'
