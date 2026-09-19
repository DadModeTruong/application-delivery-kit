/**
 * ComponentsInteractionPage — introduction to the Interaction area.
 *
 * Explains how interaction components communicate actions and state,
 * then directs people to the component guides.
 */

import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { interactionSidebarLinks } from '@/config/component-navigation'


/**
 * Interaction area introduction. Mounted by the demo router at
 * `/components/interaction`.
 *
 * @example
 * { path: '/components/interaction', component: ComponentsInteractionPage }
 */
function ComponentsInteractionPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/interaction"
      tabActiveHref="/components/interaction"
      sidebarNav={interactionSidebarLinks}
      sidebarNavLabel="Interaction components"
    >
            <div className="space-y-14">
              <section className="space-y-5" aria-labelledby="interaction-heading">
                <h1 id="interaction-heading" className="text-4xl font-semibold tracking-tight">
                  Interaction
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  Interaction components help people change something, trigger a process, or move to
                  another place. They expose an action, its current state, and its result.
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="interaction-what-heading">
                <h2 id="interaction-what-heading" className="text-2xl font-semibold tracking-tight">
                  What belongs here?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  This area covers controls and navigation patterns that respond to input and
                  communicate an action or state. The most important choice is the semantic one: use
                  a button for an action and a link for navigation.
                </p>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>Give every control a clear name that describes the result.</li>
                  <li>Use visual emphasis to show which actions matter most.</li>
                  <li>Keep focus, keyboard, disabled, and other states understandable.</li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="interaction-guides-heading">
                <div className="space-y-2">
                  <h2 id="interaction-guides-heading" className="text-2xl font-semibold tracking-tight">
                    Component guides
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    Start with the guide that matches the action people need to take. Each guide
                    explains the semantic choice, states, content, accessibility, and responsive
                    behavior to consider before implementation.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    href="/components/button"
                    className="rounded-xl border bg-card p-5 shadow-xs transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <h3 className="font-semibold text-foreground">Button</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Actions that change something or trigger a process.
                    </p>
                  </a>
                </div>
              </section>

              <section
                className="grid gap-10 lg:grid-cols-2"
                aria-labelledby="interaction-decisions-heading"
              >
                <div className="space-y-5">
                  <h2
                    id="interaction-decisions-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    Good interaction design
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>Uses a verb that tells people what will happen.</li>
                    <li>Shows when an action is unavailable or needs attention.</li>
                    <li>Works with a keyboard and exposes its state to assistive technology.</li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="interaction-not-heading">
                  <h2
                    id="interaction-not-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    What it should not do
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>Use a button when the real job is navigating to another page.</li>
                    <li>Make a destructive action look identical to a safe alternative.</li>
                    <li>Hide the action's meaning behind an unlabeled icon.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-5" aria-labelledby="interaction-guidance-heading">
                <h2
                  id="interaction-guidance-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Good design and usage
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>
                    Describe the result of the action with a short, specific verb such as Save,
                    Apply, or Close.
                  </li>
                  <li>Use one clear primary action and reduce emphasis for nearby alternatives.</li>
                  <li>
                    Keep buttons, links, and other controls keyboard accessible and visibly
                    focusable.
                  </li>
                  <li>
                    Show unavailable, busy, selected, or destructive states in a way that does not
                    rely on color alone.
                  </li>
                  <li>
                    Use a familiar icon only when it adds meaning, and give icon-only controls an
                    accessible name.
                  </li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="interaction-questions-heading">
                <h2
                  id="interaction-questions-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Questions to ask
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>Is this control changing something, or is it taking someone somewhere?</li>
                  <li>
                    Will the label still make sense if someone only hears the control out of
                    context?
                  </li>
                  <li>What should people see while the action is unavailable or in progress?</li>
                  <li>
                    What happens after activation, and is that result clear to keyboard and
                    screen-reader users?
                  </li>
                </ul>
              </section>
            </div>
      </ComponentGuideShell>
  )
}

export { ComponentsInteractionPage }
