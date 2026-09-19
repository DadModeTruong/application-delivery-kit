/**
 * ComponentsSplitViewPage — Split View component usage guide.
 *
 * Explains how SplitPane gives a main area and a secondary area a clear,
 * responsive relationship without taking ownership of either area's content.
 */

import { SecondaryPane, SplitPane } from '@/components/layout/split-pane'
import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { userInterfaceSidebarLinks } from '@/config/component-navigation'
import { SplitPaneDemo } from '../demos/split-pane-demo'

function ComponentsSplitViewPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/split-view"
      tabActiveHref="/components/user-interface"
      sidebarNav={userInterfaceSidebarLinks}
      sidebarNavLabel="User Interface"
      sidebarAriaLabel="User Interface"
    >
            <div className="space-y-12">
              <section className="space-y-5" aria-labelledby="split-view-heading">
                <h1 id="split-view-heading" className="text-4xl font-semibold tracking-tight">
                  Split View
                </h1>
                <p className="text-xl leading-8 text-muted-foreground">
                  Use Split View when a primary task benefits from supporting information beside it.
                  The primary area stays first in reading order, the supporting area can be hidden
                  when it is not needed, and both areas stack naturally on smaller screens.
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="split-view-what-heading">
                <h2 id="split-view-what-heading" className="text-2xl font-semibold tracking-tight">
                  What is it?
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Split View is a relationship between two areas: the primary area holds the main
                  task, while the supporting area holds details, a preview, or another related view.
                  SplitPane controls their proportion, stacking, and visibility; the consuming page
                  still owns the content, selection, and show/hide interaction.
                </p>
                <div className="overflow-hidden rounded-xl border">
                  <SplitPane secondarySize="third">
                    <section className="space-y-2 p-6" aria-labelledby="split-basic-main-heading">
                      <h3 id="split-basic-main-heading" className="text-lg font-semibold">
                        Main task
                      </h3>
                      <p className="leading-7 text-muted-foreground">
                        Review a list, complete a form, or work through the primary page task here.
                      </p>
                    </section>
                    <SecondaryPane
                      className="space-y-2 border-t p-6 lg:border-l lg:border-t-0"
                      aria-labelledby="split-basic-secondary-heading"
                    >
                      <h3 id="split-basic-secondary-heading" className="text-lg font-semibold">
                        Supporting details
                      </h3>
                      <p className="leading-7 text-muted-foreground">
                        Show context that helps people understand or complete the main task.
                      </p>
                    </SecondaryPane>
                  </SplitPane>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  Try it: resize the preview. Main should remain first when the areas stack, and
                  both areas should remain readable without horizontal scrolling.
                </p>
              </section>

              <section
                className="grid gap-10 lg:grid-cols-2"
                aria-labelledby="split-view-use-heading"
              >
                <div className="space-y-5">
                  <h2 id="split-view-use-heading" className="text-2xl font-semibold tracking-tight">
                    When to use it
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    Use Split View when supporting information helps someone complete or understand
                    a primary task without leaving it.
                  </p>
                  <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                    <li>For a results list beside a selected record or preview.</li>
                    <li>When the supporting area can be hidden without losing the main task.</li>
                    <li>When the relationship between the two areas is clearer side by side.</li>
                  </ul>
                </div>
                <div className="space-y-5" aria-labelledby="split-view-not-heading">
                  <h2 id="split-view-not-heading" className="text-2xl font-semibold tracking-tight">
                    When not to use it
                  </h2>
                  <p className="leading-7 text-muted-foreground">
                    Choose a normal section, dialog, or separate page when the relationship does not
                    need two persistent areas.
                  </p>
                  <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                    <li>When the secondary content is required before the main task can start.</li>
                    <li>When both areas need the same visual priority at every screen size.</li>
                    <li>When the secondary area would leave the main content too narrow to use.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-5" aria-labelledby="split-view-design-heading">
                <h2
                  id="split-view-design-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Design considerations
                </h2>
                <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>
                    Give the primary area the clearest task and the strongest content hierarchy.
                  </li>
                  <li>
                    Use a one-third supporting area when the primary task needs more room; use equal
                    halves when both views need comparable space.
                  </li>
                  <li>Start with supporting details hidden when they are helpful but optional.</li>
                  <li>
                    Choose columns inside each area from the content that must remain readable, not
                    from the space available.
                  </li>
                  <li>
                    Make the relationship visible through headings, selection state, and concise
                    supporting content.
                  </li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="split-view-accessibility-heading">
                <h2
                  id="split-view-accessibility-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Accessibility considerations
                </h2>
                <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>
                    Keep the primary area first in the DOM so it remains first when the areas stack.
                  </li>
                  <li>
                    Give the supporting area a useful heading; use its aside landmark when it
                    contains a distinct, related region.
                  </li>
                  <li>
                    Use a real button for showing or hiding details, with an expanded state and a
                    control relationship exposed to assistive technology.
                  </li>
                  <li>When details close, return focus to the button that opened them.</li>
                  <li>
                    Ensure hidden details are removed from the accessibility tree and every control
                    has a clear name.
                  </li>
                  <li>
                    Do not rely on position or color alone to explain which record or item the
                    supporting area describes; expose that relationship in text and state.
                  </li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="split-view-responsive-heading">
                <h2
                  id="split-view-responsive-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Responsive behavior
                </h2>
                <p className="leading-7 text-muted-foreground">
                  Split View stacks the primary area before the supporting area on narrow screens.
                  At the large breakpoint, the one-third proportion gives the primary area
                  two-thirds and the supporting area one-third of the available content width. The
                  half proportion gives both areas equal space. If the supporting area is hidden,
                  the primary area expands to one full-width column.
                </p>
                <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
                  <li>
                    Test the narrow layout with long headings, descriptions, and action labels.
                  </li>
                  <li>
                    Confirm that both areas remain usable at 200% zoom and without horizontal
                    scrolling.
                  </li>
                  <li>
                    Check that the primary-to-supporting reading order still makes sense when
                    stacked.
                  </li>
                  <li>
                    Verify that hiding the supporting area does not strand its trigger, focus, or
                    required content.
                  </li>
                </ul>
              </section>

              <section className="space-y-5" aria-labelledby="split-view-examples-heading">
                <h2
                  id="split-view-examples-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Examples and variations
                </h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  These previews use the reusable Split View demo. Compare the supported proportions
                  and the open/closed secondary-area behavior rather than treating the content cards
                  as a required pattern.
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Try it: activate View details, close the details area from either control, then
                  resize through narrow and wide widths. Confirm that focus returns to the opening
                  control, Main remains first, and neither pane becomes unusably narrow.
                </p>
                <div className="space-y-10">
                  <article className="space-y-6 rounded-lg border p-6 sm:p-8">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-tight">
                        Main two-thirds, Secondary one-third
                      </h3>
                      <p className="text-muted-foreground">
                        Give Main more room when Secondary provides context, a preview, or
                        supporting details.
                      </p>
                    </div>
                    <SplitPaneDemo
                      secondarySize="third"
                      mainColumns={{
                        visible: { base: 1, sm: 2, md: 2, lg: 3 },
                        hidden: { base: 1, sm: 2, md: 3, lg: 4 },
                      }}
                      mainCardCount={8}
                      secondaryColumns={{
                        third: { base: 1, sm: 1, md: 1, lg: 2 },
                        half: { base: 1, sm: 1, md: 2, lg: 2 },
                      }}
                      secondaryCardCount={4}
                    />
                    <p className="text-muted-foreground">
                      This proportion keeps the primary task visually dominant while preserving a
                      useful supporting area.
                    </p>
                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <h4 className="font-semibold">Do</h4>
                        <ul className="mt-3 list-disc space-y-3 pl-5 text-muted-foreground">
                          <li>Give the primary task more room than its supporting content.</li>
                          <li>Keep Secondary directly related to the current Main task.</li>
                          <li>Check that Main remains usable when Secondary is open.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold">Don&apos;t</h4>
                        <ul className="mt-3 list-disc space-y-3 pl-5 text-muted-foreground">
                          <li>Use the smaller pane for a second task with equal priority.</li>
                          <li>Fill Secondary with unrelated navigation or competing actions.</li>
                          <li>
                            Assume the desktop proportion stays side by side at narrow widths.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">
                      <strong>Check:</strong> Open and close details at wide and narrow widths. The
                      primary task should stay usable, the supporting content should remain related,
                      and focus should return to the opening control when details close.
                    </p>
                  </article>
                  <article className="space-y-6 rounded-lg border p-6 sm:p-8">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-tight">
                        Main half, Secondary half
                      </h3>
                      <p className="text-muted-foreground">
                        Give both areas equal room when people need to compare or move between
                        related views.
                      </p>
                    </div>
                    <SplitPaneDemo
                      secondarySize="half"
                      mainColumns={{
                        visible: { base: 1, sm: 2, md: 2, lg: 3 },
                        hidden: { base: 1, sm: 2, md: 3, lg: 4 },
                      }}
                      mainCardCount={8}
                      secondaryColumns={{
                        third: { base: 1, sm: 1, md: 1, lg: 2 },
                        half: { base: 1, sm: 1, md: 2, lg: 2 },
                      }}
                      secondaryCardCount={4}
                    />
                    <p className="text-muted-foreground">
                      An equal split is useful when neither area should be treated as a narrow
                      detail column. Keep the primary relationship clear through headings and
                      content.
                    </p>
                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <h4 className="font-semibold">Do</h4>
                        <ul className="mt-3 list-disc space-y-3 pl-5 text-muted-foreground">
                          <li>Use equal space for related views with comparable importance.</li>
                          <li>Make the relationship between the areas explicit.</li>
                          <li>
                            Test both panes with realistic content before choosing equal
                            proportions.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold">Don&apos;t</h4>
                        <ul className="mt-3 list-disc space-y-3 pl-5 text-muted-foreground">
                          <li>
                            Use equal columns when one area is clearly only supporting context.
                          </li>
                          <li>
                            Allow dense content or long labels to make either pane difficult to use.
                          </li>
                          <li>
                            Treat equal width as equal priority when task order still matters.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">
                      <strong>Check:</strong> Compare the two areas with realistic content at wide
                      and narrow widths. Both should remain readable, while headings and reading
                      order still communicate which task comes first.
                    </p>
                  </article>
                </div>
              </section>
            </div>
      </ComponentGuideShell>
  )
}

export { ComponentsSplitViewPage }
