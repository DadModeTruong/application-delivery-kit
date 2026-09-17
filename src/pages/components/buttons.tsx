import { ExampleVariation } from '@/components/layout/example-variation'
/**
 * ComponentsButtonsPage — Button component usage guide.
 *
 * Explains how buttons communicate actions, how to choose a visual
 * variant, and when a link should be used instead of a button.
 */

import { MousePointerClick } from 'lucide-react'
import { Header, SkipLink } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { Footer } from '@/components/layout/footer'
import { PageBody } from '@/components/layout/page-body'
import { PageShell } from '@/components/layout/page-shell'
import { LayoutProvider } from '@/components/layout/layout-provider'
import { SecondaryNav } from '@/components/layout/secondary-nav'
import { Sidebar } from '@/components/layout/sidebar'
import { Button, LinkButton } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
  return (
    <LayoutProvider
      secondaryNav={componentSectionLinks}
      secondaryNavLabel="Component areas"
      sidebarNav={componentSidebarLinks}
      sidebarNavLabel="Interaction"
      activeHref="/components/button"
    >
      <PageShell>
        <SkipLink />
        <Header logo={{ href: '/', label: 'Application Delivery Kit' }} nav={primaryNav} />
        <SecondaryNav aria-label="Component areas" activeHref="/components/interaction" />
        <PageBody>
          <Sidebar aria-label="Interaction components" />
          <Main size="full">
            <div className="space-y-14 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
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
                  Button is the interaction primitive for actions such as saving, opening, applying,
                  or removing something. It uses a real button underneath, so it can receive focus,
                  respond to keyboard input, and expose its disabled state to assistive technology.
                </p>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>The label tells people what result to expect.</li>
                  <li>The variant controls visual emphasis, not the meaning of the action.</li>
                  <li>The size and state help the control fit the surrounding task.</li>
                  <li>
                    A link remains the better choice when the control navigates to another page.
                  </li>
                  <li>
                    Describe the outcome in the label before choosing a variant, size, icon, or
                    state.
                  </li>
                </ul>
              </section>

              <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="buttons-use-heading">
                <div className="space-y-5">
                  <h2 id="buttons-use-heading" className="text-2xl font-semibold tracking-tight">
                    When to use it
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>When activating it changes something on the current page.</li>
                    <li>When submitting, saving, confirming, or cancelling an interaction.</li>
                    <li>When the action needs a clear keyboard and focus target.</li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="buttons-not-heading">
                  <h2 id="buttons-not-heading" className="text-2xl font-semibold tracking-tight">
                    When not to use it
                  </h2>
                  <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                    <li>When the primary job is navigating to another URL; use a link instead.</li>
                    <li>When plain text or a heading is enough to explain the page.</li>
                    <li>When adding a control would make a low-risk reading flow feel heavier.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-5" aria-labelledby="buttons-design-heading">
                <h2 id="buttons-design-heading" className="text-2xl font-semibold tracking-tight">
                  Design considerations
                </h2>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>Use a short verb that describes the result: Save, Apply, or View details.</li>
                  <li>Use one prominent action when several actions compete for attention.</li>
                  <li>
                    Choose the visual variant according to the action's importance and consequence.
                  </li>
                  <li>Keep labels readable when buttons wrap or stack on smaller screens.</li>
                  <li>
                    Make the action's importance and risk clear before choosing how much visual
                    attention it receives.
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
                  <li>Use a real button for an action and a real anchor for navigation.</li>
                  <li>Keep visible focus styles so keyboard users can see the active control.</li>
                  <li>Do not rely on color alone to distinguish a destructive action.</li>
                  <li>Give icon-only buttons an accessible label and keep the icon familiar.</li>
                  <li>
                    Test the control with a keyboard: it should be easy to reach, visibly focused,
                    and understandable before and after activation.
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
                  still has room. On a narrow screen, let actions wrap or stack instead of shrinking
                  the labels until their meaning is unclear.
                </p>
                <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
                  <li>Keep the most important action easy to find when controls wrap.</li>
                  <li>Do not hide a necessary action only because the viewport is narrow.</li>
                  <li>
                    Check that labels, focus indicators, and activation targets remain comfortable
                    to use.
                  </li>
                  <li>
                    Test the longest realistic label and the unavailable or destructive state at the
                    narrowest supported width.
                  </li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="buttons-examples-heading">
                <div className="space-y-2">
                  <h2
                    id="buttons-examples-heading"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    Examples
                  </h2>
                <p className="text-sm text-muted-foreground">Try it: Activate the examples with a mouse and keyboard, and inspect the disabled and loading states. Confirm that the action, state change, focus treatment, and accessible name remain clear without relying on color alone.</p>

                <div className="space-y-8">
                  <ExampleVariation title="Action hierarchy" description="Visual emphasis should match the consequence and frequency of the action." explanation="Use one primary action when a task has a clear preferred outcome. Secondary and destructive actions should remain understandable without relying on visual emphasis alone." doItems={["Use labels that describe outcomes, such as Save changes or Delete draft.", "Keep the primary action visually distinct from secondary and destructive actions."]} dontItems={["Do not style every action as primary.", "Do not use destructive styling for ordinary cancellation or navigation."]}>
                    <div className="flex flex-wrap gap-3"><button type="button" className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Save changes</button><button type="button" className="rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Cancel</button><button type="button" className="rounded-md border border-destructive px-3 py-2 text-sm text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Delete draft</button></div>
                  </ExampleVariation>
                  <ExampleVariation title="Icon and text" description="Icons reinforce a familiar action; they do not replace a clear label when the action is unfamiliar." explanation="Use an icon with text when the action benefits from faster recognition. Icon-only buttons need an accessible name and should be reserved for familiar, space-constrained actions." doItems={["Give icon-only buttons a specific accessible name.", "Keep the target large enough for touch and keyboard use."]} dontItems={["Do not rely on an icon alone when its meaning is ambiguous.", "Do not remove the visible label just to make a button look smaller."]}>
                    <div className="flex flex-wrap gap-3"><button type="button" className="rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">＋ Add member</button><button type="button" aria-label="Open settings" className="rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">⚙</button></div>
                  </ExampleVariation>
                  <ExampleVariation title="Loading and disabled" description="State changes should explain whether work is in progress or the action is unavailable." explanation="Disabled means the action cannot be used in the current context. Loading means work is in progress and duplicate activation should be prevented while the result is pending." doItems={["Preserve the action’s purpose while communicating its changed state.", "Restore the normal state and focus behavior when work completes."]} dontItems={["Do not disable an action without explaining why it is unavailable.", "Do not show a loading label without communicating busy state in the implementation."]}>
                    <div className="flex flex-wrap gap-3"><button type="button" disabled className="cursor-not-allowed rounded-md border px-3 py-2 text-sm opacity-60">Save unavailable</button><button type="button" aria-busy="true" className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Saving…</button></div>
                  </ExampleVariation>
                  <ExampleVariation title="Submit versus navigation" description="Use a button for an action and a link for a destination." explanation="A submit button changes data through a form. A link changes location. Keeping those semantics honest gives people predictable keyboard and browser behavior." doItems={["Use type=submit for form submission and an anchor for navigation.", "Make the action or destination clear from its text."]} dontItems={["Do not use a button to imitate a page link.", "Do not style a link as a button just because it needs visual emphasis."]}>
                    <div className="flex flex-wrap gap-3"><form className="flex flex-wrap gap-3"><label className="sr-only" htmlFor="button-example-title">Title</label><input id="button-example-title" className="rounded-md border px-3 py-2 text-sm" placeholder="Title" /><button type="submit" className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Create</button></form><a href="#button-example-details" className="rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">View details</a></div>
                  </ExampleVariation>
                  <ExampleVariation title="Menu trigger" description="A trigger must expose the relationship to the menu it opens." explanation="A menu trigger is more than a styled button. The production interaction needs a complete popup model: open state, focus movement, keyboard navigation, Escape, outside dismissal, and focus restoration." doItems={["Expose the menu relationship and expanded state.", "Move focus into the menu and return it to the trigger when the menu closes."]} dontItems={["Do not hide a single common action behind an unnecessary menu.", "Do not claim a complete menu interaction from aria-expanded alone."]}>
                    <div><button type="button" aria-haspopup="menu" aria-expanded="true" aria-controls="button-example-menu" className="rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Actions ▾</button><div id="button-example-menu" role="menu" aria-label="Record actions" className="mt-2 w-40 rounded-md border p-1 text-sm"><a href="#button-edit" role="menuitem" className="block rounded px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Edit</a><a href="#button-archive" role="menuitem" className="block rounded px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Archive</a></div></div>
                  </ExampleVariation>
                </div>
                  <p className="leading-7 text-muted-foreground">
                    Start with the default variant for the main action. Use less emphasis for nearby
                    alternatives, and reserve destructive for an action that cannot be easily
                    undone. The controls wrap instead of shrinking their labels on narrow screens;
                    keyboard focus and the action order should remain clear after they wrap.
                  </p>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Choose emphasis by consequence</CardTitle>
                    <CardDescription>
                      The visual treatment supports the meaning of the action; it does not replace a
                      clear label.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap items-center gap-3">
                    <Button>Save changes</Button>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="secondary">Preview</Button>
                    <Button variant="ghost">More options</Button>
                    <Button variant="destructive">Delete</Button>
                    <Button variant="link">Learn more</Button>
                  </CardContent>
                </Card>
              </section>

              <section
                className="grid gap-10 lg:grid-cols-2"
                aria-labelledby="buttons-sizes-heading"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Sizes</CardTitle>
                    <CardDescription>
                      Choose a size that fits the surrounding layout without making the label hard
                      to read or the target hard to activate.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap items-center gap-3">
                    <Button size="xs">Extra small</Button>
                    <Button size="sm">Small</Button>
                    <Button>Default</Button>
                    <Button size="lg">Large</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>States</CardTitle>
                    <CardDescription>
                      A disabled button should explain that an action is unavailable, not look like
                      a missing control.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap items-center gap-3">
                    <Button isDisabled>Unavailable</Button>
                    <Button variant="outline" isDisabled>
                      Cannot continue
                    </Button>
                  </CardContent>
                </Card>
              </section>

              <section className="space-y-5" aria-labelledby="buttons-icon-heading">
                <h2 id="buttons-icon-heading" className="text-2xl font-semibold tracking-tight">
                  Icon buttons and links
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Use an icon button when the action is familiar and space is limited. Use a link
                  button when the destination is another page; the visible treatment can match a
                  button while the underlying element remains a link.
                </p>
                <Card>
                  <CardHeader>
                    <CardTitle>Use the semantic element that matches the job</CardTitle>
                    <CardDescription>
                      Icon-only controls need an accessible name. Destination controls should remain
                      real links so browser navigation continues to work.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap items-center gap-3">
                    <Button size="icon" aria-label="Open actions">
                      <MousePointerClick />
                    </Button>
                    <Button variant="outline" size="icon-sm" aria-label="Open actions">
                      <MousePointerClick />
                    </Button>
                    <LinkButton href="/components/card" variant="outline">
                      Read about Card
                    </LinkButton>
                  </CardContent>
                </Card>
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
