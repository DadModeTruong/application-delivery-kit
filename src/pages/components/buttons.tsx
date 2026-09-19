/**
 * Button guide page.
 *
 * Use this page as a reference for action semantics, hierarchy, states, icons,
 * loading, form submission, and menu triggers. The examples use the production
 * Button and LinkButton primitives so the page can be read as an implementation
 * guide, not only as a visual catalog.
 */

import { ExampleVariation } from '@/components/layout/example-variation'
/**
 * ComponentsButtonsPage — Button component usage guide.
 *
 * Explains how buttons communicate actions, how to choose a visual
 * variant, and when a link should be used instead of a button.
 */

import { useState } from 'react'
import { LoaderCircle, MousePointerClick } from 'lucide-react'
import { Pressable } from 'react-aria-components'
import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { TabNavigation } from '@/components/layout/tab-navigation'
import { Sidebar } from '@/components/layout/sidebar'
import { Button, LinkButton } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import type { NavGroup, NavLeaf } from '@/components/layout/types'
import { primaryNav, footerLinks } from '../page-registry'

// ---------------------------------------------------------------
// Component-area navigation
// ---------------------------------------------------------------

const componentSectionLinks: NavLeaf[] = [
  { href: '/components/user-interface', label: 'User Interface' },
  { href: '/components/interaction', label: 'Interaction' },
  { href: '/components/forms', label: 'Forms' },
]

const componentSidebarLinks: (NavLeaf | NavGroup)[] = [
  { href: '/components/interaction', label: 'Interaction' },
  {
    label: 'Actions',
    items: [{ href: '/components/button', label: 'Button', icon: MousePointerClick }],
  },
]

// ---------------------------------------------------------------
// Page
// ---------------------------------------------------------------

/**
 * Button component reference page. Mounted by the demo router at
 * `/components/button`.
 *
 * @example
 * { path: '/components/button', component: ComponentsButtonsPage }
 */
function ComponentsButtonsPage() {
  const [formStatus, setFormStatus] = useState('')

  return (
    <LayoutProvider
      tabNavigation={componentSectionLinks}
      tabNavigationLabel="Component areas"
      sidebarNav={componentSidebarLinks}
      sidebarNavLabel="Interaction"
      activeHref="/components/button"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <TabNavigation aria-label="Component areas" activeHref="/components/interaction" />
        <PageBody>
          <Sidebar aria-label="Interaction components" />
          <Main size="full">
            <div className="space-y-14 pb-12 pt-6">
              <section className="space-y-5" aria-labelledby="buttons-heading">
                <h1 id="buttons-heading" className="text-4xl font-semibold tracking-tight">
                  Buttons should make an action clear.
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  Use Button when someone is asking the page to do something. The label, visual
                  emphasis, and state should help people understand what will happen before they
                  activate it.
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="buttons-what-heading">
                <h2 id="buttons-what-heading" className="text-2xl font-semibold tracking-tight">
                  What is it?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  A button is an interactive control that performs an action in the current context:
                  saving, opening, applying, submitting, or removing something. Use a real link when
                  the user is going to another destination. The Button primitive supplies consistent
                  focus, disabled, size, and visual-variant behavior while the product team supplies
                  the label and action.
                </p>
                <div className="overflow-hidden rounded-lg border p-5 sm:p-6">
                  <div className="space-y-3">
                    <h3 className="text-base font-medium">Save a draft</h3>
                    <p className="text-sm text-muted-foreground">
                      A basic action button keeps the next step clear.
                    </p>
                    <Button type="button">Save draft</Button>
                  </div>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  Try it: move to the button with the keyboard and confirm that the focus indicator
                  is visible before activating it.
                </p>
              </section>

              <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="buttons-use-heading">
                <div className="space-y-5">
                  <h2 id="buttons-use-heading" className="text-2xl font-semibold tracking-tight">
                    When to use it
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    Use a button for an immediate action that changes state, submits information,
                    opens a menu, or starts a task without changing the destination.
                  </p>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>Choose a prominent style for the primary action in a clear task.</li>
                    <li>
                      Use a quieter style for supporting actions that should remain available.
                    </li>
                    <li>
                      Use a destructive style only when the consequence is meaningful and clear.
                    </li>
                  </ul>
                </div>
                <div className="space-y-5">
                  <h2 id="buttons-not-heading" className="text-2xl font-semibold tracking-tight">
                    When not to use it
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    Do not use button styling for navigation. A control that takes someone to a new
                    route should be an anchor or LinkButton, even when it is styled like a button.
                  </p>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>Do not use a button when a plain text link is sufficient.</li>
                    <li>Do not use a destructive style for routine or reversible actions.</li>
                    <li>Do not make a whole card or unrelated region act like one giant button.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-5" aria-labelledby="buttons-design-heading">
                <h2 id="buttons-design-heading" className="text-2xl font-semibold tracking-tight">
                  Design considerations
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>
                    Give each action one clear purpose and start the label with a specific verb.
                  </li>
                  <li>
                    Use the visual hierarchy to show priority, not to make every action prominent.
                  </li>
                  <li>Keep related actions together and place the primary action consistently.</li>
                  <li>
                    Use the same label before and after an action unless the state change genuinely
                    needs different wording.
                  </li>
                  <li>
                    Do not use an icon, color, or shape as the only explanation of what will happen.
                  </li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="buttons-accessibility-heading">
                <h2
                  id="buttons-accessibility-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Accessibility considerations
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>Use a native button for an action and a native anchor for navigation.</li>
                  <li>
                    Give every button an accessible name; icon-only buttons need an explicit label.
                  </li>
                  <li>
                    Keep focus visible, make the control keyboard operable, and do not communicate
                    state by color alone.
                  </li>
                  <li>
                    Use <code>type="button"</code> for non-submit controls inside forms and{' '}
                    <code>type="submit"</code> only for the form’s submission action.
                  </li>
                  <li>
                    When loading, expose progress in text or an accessible status and prevent
                    duplicate activation without removing the action’s meaning.
                  </li>
                  <li>
                    Use a disabled state only when the action is unavailable; do not use it as a
                    substitute for an explanation or read-only content.
                  </li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="buttons-responsive-heading">
                <h2
                  id="buttons-responsive-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Responsive behavior
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Buttons can sit beside one another when their labels remain readable and the row
                  remains easy to scan. On narrow screens, let actions wrap or stack rather than
                  shrinking text or creating a horizontal scroll area.
                </p>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>Keep the primary action first in reading and focus order.</li>
                  <li>
                    When actions stack on mobile, preserve their priority and keep the full label
                    visible; do not rely on position or color alone.
                  </li>
                  <li>
                    Preserve readable labels and comfortable touch targets at narrow widths and 200%
                    zoom.
                  </li>
                  <li>
                    Stack competing actions when side-by-side placement makes their hierarchy
                    unclear.
                  </li>
                  <li>
                    Keep icon-only controls large enough to operate and pair them with a tooltip or
                    nearby visible explanation when the action is not obvious.
                  </li>
                </ul>
              </section>

              <section className="space-y-6" aria-labelledby="buttons-examples-heading">
                <div className="space-y-3">
                  <h2
                    id="buttons-examples-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    Examples and variations
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    Compare the visual and semantic choices below. Each example changes one
                    meaningful decision so teams can choose a style, size, state, or interaction
                    model without treating every button as interchangeable.
                  </p>
                </div>

                <div className="space-y-8">
                  <ExampleVariation
                    title="Styles and hierarchy"
                    description="Use the variant that matches the action’s priority and consequence."
                    explanation={
                      <>
                        Use visual emphasis to communicate priority and consequence. Compare the
                        styles below, then choose the least prominent style that still makes the
                        action clear.
                        <ul className="mt-3 list-disc space-y-2 pl-5">
                          <li>Default: use for the primary action in a task.</li>
                          <li>
                            Secondary and outline: use for supporting actions that should remain
                            available without competing with the primary action.
                          </li>
                          <li>
                            Ghost: use for low-emphasis actions when a full button surface would add
                            unnecessary weight.
                          </li>
                          <li>
                            Destructive: use for irreversible or high-consequence actions such as
                            deleting or removing data.
                          </li>
                          <li>
                            Link: use for a quiet action that should read like a link rather than a
                            prominent button.
                          </li>
                        </ul>
                        <p className="mt-3">
                          Try it: identify the one primary action, then check that the quieter
                          styles do not compete with it.
                        </p>
                      </>
                    }
                    doItems={[
                      'Use one clear primary style for the main action in a task.',
                      'Use outline, secondary, ghost, or link styles to reduce emphasis for supporting actions.',
                      'Reserve destructive for actions such as deleting or removing data.',
                    ]}
                    dontItems={[
                      'Do not use destructive to attract attention to an ordinary action.',
                      'Do not use link styling when the action needs strong prominence or a large target.',
                      'Do not make every button in a group look equally primary.',
                    ]}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <Button type="button">Default</Button>
                      <Button type="button" variant="secondary">
                        Secondary
                      </Button>
                      <Button type="button" variant="outline">
                        Outline
                      </Button>
                      <Button type="button" variant="ghost">
                        Ghost
                      </Button>
                      <Button type="button" variant="destructive">
                        Delete
                      </Button>
                      <Button type="button" variant="link">
                        View details
                      </Button>
                    </div>
                  </ExampleVariation>

                  <ExampleVariation
                    title="Sizes"
                    description="Choose a size that fits the density and importance of the surrounding task."
                    explanation="Use the default size for most actions, a smaller size for compact supporting controls, and a larger size only when the action needs extra prominence or touch comfort. Try it: resize the viewport and confirm that each label remains readable without changing the action’s meaning."
                    doItems={[
                      'Use one size consistently within a related action group.',
                      'Use the small size for dense supporting controls, not for essential mobile actions.',
                      'Choose a larger target when the action needs extra prominence or touch comfort.',
                    ]}
                    dontItems={[
                      'Do not use size alone to communicate priority; use the variant as well.',
                      'Do not shrink text until labels become ambiguous or hard to tap.',
                      'Do not mix arbitrary sizes in one group without a clear layout reason.',
                    ]}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <Button type="button" size="sm">
                        Small
                      </Button>
                      <Button type="button">Default</Button>
                      <Button type="button" size="lg">
                        Large
                      </Button>
                    </div>
                  </ExampleVariation>

                  <ExampleVariation
                    title="Icon with text and icon only"
                    description="Use icons to reinforce a visible label or to support a genuinely familiar icon-only action."
                    explanation="A visible label is the clearest name for most actions. An icon-only button can work for a familiar, repeated action when its accessible name is explicit and its meaning is clear from context. Try it: tab to each control and confirm that the icon-only buttons still have a useful accessible name."
                    doItems={[
                      'Use an icon with text when the action may be unfamiliar or consequential.',
                      'Give icon-only buttons an aria-label that describes the action, not the icon.',
                      'Keep the icon and label aligned consistently across related controls.',
                    ]}
                    dontItems={[
                      'Do not remove a useful label merely to save horizontal space.',
                      'Do not use an unfamiliar icon as the only signifier for an important action.',
                      'Do not create icon-only links or buttons without an accessible name.',
                    ]}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <Button type="button">
                        <MousePointerClick />
                        Open interaction guide
                      </Button>
                      <Button type="button" size="icon" aria-label="Open interaction guide">
                        <MousePointerClick />
                      </Button>
                      <LinkButton
                        href="/components/card"
                        variant="ghost"
                        size="icon"
                        aria-label="Read the Card guide"
                      >
                        <MousePointerClick />
                      </LinkButton>
                    </div>
                  </ExampleVariation>

                  <ExampleVariation
                    title="Loading with text and spinner"
                    description="Show progress without making the user guess whether an action was accepted."
                    explanation="Text such as “Saving…” keeps the state understandable, while a spinner reinforces that work is in progress. Keep the accessible name meaningful, prevent duplicate activation, and restore the ordinary action state when work finishes. Try it: compare both loading treatments and confirm that progress is communicated without relying on motion alone."
                    doItems={[
                      'Use a text label when the action or wait state needs extra clarity.',
                      'Use a spinner as supporting feedback and respect reduced-motion preferences in the implementation.',
                      'Disable duplicate activation while the request is in progress.',
                    ]}
                    dontItems={[
                      'Do not replace the label with an unexplained spinner for a consequential action.',
                      'Do not leave a control looking active while it ignores repeated activation.',
                      'Do not use loading as a permanent substitute for disabled, unavailable, or read-only state.',
                    ]}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <Button type="button" isDisabled aria-busy="true">
                        Saving…
                      </Button>
                      <Button type="button" isDisabled aria-busy="true" aria-label="Saving">
                        <LoaderCircle className="animate-spin" aria-hidden="true" />
                      </Button>
                    </div>
                  </ExampleVariation>

                  <ExampleVariation
                    title="Form submission"
                    description="Use submit semantics for the action that sends the form, and keep other controls from submitting accidentally."
                    explanation="Inside a form, declare each button's role so the browser and assistive technology know what it does. The submit button sends the form; other controls must explicitly opt out of submission."
                    doItems={[
                      'Use type=submit for the action that sends the form.',
                      'Use type=button for cancel, reset, help, or other controls that must not submit the form.',
                      'Use an explicit label that describes the result, such as “Save changes” or “Create account”.',
                    ]}
                    dontItems={[
                      'Do not use a generic “Submit” label when the outcome can be named more clearly.',
                      'Do not let reset, cancel, or help controls submit the form accidentally.',
                      'Do not remove the submit action’s name while showing progress.',
                    ]}
                  >
                    <div className="space-y-3">
                      <form
                        className="flex flex-wrap items-center gap-3"
                        onSubmit={(event) => {
                          event.preventDefault()
                          setFormStatus('Changes saved.')
                        }}
                      >
                        <Button type="submit">Save changes</Button>
                        <Button type="button" variant="outline">
                          Cancel
                        </Button>
                      </form>
                      <p id="button-form-status" className="text-sm font-medium" aria-live="polite">
                        {formStatus}
                      </p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        The Save changes button submits this form using <code>type="submit"</code>.
                        Cancel uses <code>type="button"</code> so it does not submit.
                      </p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        Try it: submit the form with the keyboard and confirm that “Changes saved.”
                        appears without leaving the page.
                      </p>
                    </div>
                  </ExampleVariation>

                  <ExampleVariation
                    title="Menu or dropdown trigger"
                    description="A menu trigger is still a button: it opens a separate set of choices rather than performing one immediate action."
                    explanation="Use a real menu trigger when the control opens related commands. The trigger needs an accessible name and expanded state, and the menu implementation owns keyboard navigation, Escape, focus movement, and focus restoration. Try it: open the menu, move through items with the keyboard, press Escape, and confirm focus returns to the trigger."
                    doItems={[
                      'Use a menu when several related commands need to share one control.',
                      'Keep the trigger label focused on the group of commands it opens.',
                      'Use the production menu primitive so keyboard and focus behavior are consistent.',
                    ]}
                    dontItems={[
                      'Do not use a menu to hide one frequently needed primary action.',
                      'Do not make a menu trigger look like a navigation link without showing its expanded state.',
                      'Do not claim a static visual menu is interactive unless the open, keyboard, and dismissal behavior exists.',
                    ]}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <DropdownMenuTrigger>
                        <Pressable>
                          <Button type="button" variant="outline" aria-haspopup="menu">
                            More actions
                          </Button>
                        </Pressable>
                        <DropdownMenu>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem>Archive</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenu>
                      </DropdownMenuTrigger>
                    </div>
                  </ExampleVariation>
                </div>
              </section>
            </div>
          </Main>
        </PageBody>
        <Footer copyright={<>© 2026 Tommy Truong</>} links={footerLinks} />
      </PageShell>
    </LayoutProvider>
  )
}

export { ComponentsButtonsPage }
