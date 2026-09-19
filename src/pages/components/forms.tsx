/**
 * Forms component area landing page.
 *
 * Individual form-control guides live in their own page modules. This file
 * owns only the overview and shared Forms-area entry point.
 */

import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { formSidebarLinks } from '@/config/component-navigation'

function ComponentsFormsPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/forms"
      tabActiveHref="/components/forms"
      sidebarNav={formSidebarLinks}
      sidebarNavLabel="Forms components"
    >
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby="forms-heading">
          <h1 id="forms-heading" className="text-4xl font-semibold tracking-tight">
            Forms
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Form components help people enter, choose, and review information. The right control
            makes the expected value clear before someone starts typing or selecting.
          </p>
        </section>
        <section className="space-y-5" aria-labelledby="forms-what-heading">
          <h2 id="forms-what-heading" className="text-2xl font-semibold tracking-tight">
            What belongs here?
          </h2>
          <p className="leading-7 text-muted-foreground">
            This area covers controls for collecting structured information, from a short text value
            to a date or a set of related choices. Each control should have a visible label, a
            useful name, and a clear relationship to its help or error message.
          </p>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Choose the control that matches the value and number of available choices.</li>
            <li>Group related choices with a fieldset and legend when they share one question.</li>
            <li>Keep instructions close enough to help without interrupting the reading order.</li>
          </ul>
        </section>
        <section className="space-y-5" aria-labelledby="forms-guides-heading">
          <div className="space-y-2">
            <h2 id="forms-guides-heading" className="text-2xl font-semibold tracking-tight">
              Control guides
            </h2>
            <p className="leading-7 text-muted-foreground">
              Start with the guide that matches the value or decision your interface needs to
              collect. Each guide includes a basic example, state variations, content guidance,
              accessibility considerations, and responsive behavior.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Input', '/components/input', 'Short, single-line values.'],
              ['Select', '/components/select', 'One choice from a known list.'],
              ['Text area', '/components/textarea', 'Longer, free-form responses.'],
              ['Checkbox', '/components/checkbox', 'One independent choice.'],
              [
                'Checkbox group',
                '/components/checkbox-group',
                'Several choices that may all apply.',
              ],
              ['Radio button', '/components/radio', 'Exactly one choice from a small set.'],
              ['Combobox', '/components/combobox', 'Searchable or filterable choices.'],
              ['Datepicker', '/components/datepicker', 'Calendar dates and date ranges.'],
            ].map(([label, href, description]) => (
              <a
                key={href}
                href={href}
                className="rounded-xl border bg-card p-5 shadow-xs transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <h3 className="font-semibold text-foreground">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </a>
            ))}
          </div>
        </section>
        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="forms-decisions-heading">
          <div className="space-y-5">
            <h2 id="forms-decisions-heading" className="text-2xl font-semibold tracking-tight">
              Shared form principles
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Uses labels that describe the value, not just the visual appearance.</li>
              <li>Shows required, optional, unavailable, and invalid states in text.</li>
              <li>Preserves the user’s input when validation finds a problem.</li>
              <li>
                Connects labels, instructions, values, and errors for keyboard and
                assistive-technology users.
              </li>
            </ul>
          </div>
          <div className="space-y-5" aria-labelledby="forms-not-heading">
            <h2 id="forms-not-heading" className="text-2xl font-semibold tracking-tight">
              Common pitfalls
            </h2>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Use placeholder text as the only label or instruction.</li>
              <li>Make a long list of choices harder to use than a searchable combobox.</li>
              <li>Rely on color, position, or an icon alone to communicate an error.</li>
              <li>
                Use a disabled state when people need to review or copy the value; use read-only
                presentation instead.
              </li>
            </ul>
          </div>
        </section>
        <section className="space-y-5" aria-labelledby="forms-guidance-heading">
          <h2 id="forms-guidance-heading" className="text-2xl font-semibold tracking-tight">
            Choosing the right control
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Start with the smallest control that can express the expected value.</li>
            <li>
              Use Select for a short known list; use Combobox when filtering helps people find an
              option.
            </li>
            <li>
              Use Checkbox for independent choices and Radio group for mutually exclusive choices.
            </li>
            <li>Use Datepicker for dates while keeping a keyboard-friendly input path.</li>
            <li>
              Use helper text for persistent context and error text for a problem that needs
              correction.
            </li>
            <li>
              Test the complete form with a keyboard, a screen reader, and a narrow viewport before
              shipping it.
            </li>
          </ul>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsFormsPage }
