/**
 * ComponentsSplitViewPage — Split View component usage guide.
 *
 * Explains how SplitPane gives a main area and a secondary area a clear,
 * responsive relationship without taking ownership of either area's content.
 */

import { SecondaryPane, SplitPane } from '@/components/layout/split-pane'
import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { ExampleVariation } from '@/components/layout/example-variation'
import { TryIt } from '@/components/layout/try-it'
import { userInterfaceSidebarLinks } from '@/config/component-navigation'
import { SplitPaneExample } from '../examples/shared/split-pane-example'

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
            Use Split View when a primary task benefits from supporting information beside it. The
            primary area stays first in reading order, the supporting area can be hidden when it is
            not needed, and both areas stack naturally on smaller screens.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="split-view-what-heading">
          <h2 id="split-view-what-heading" className="text-2xl font-semibold tracking-tight">
            What is it?
          </h2>
          <p className="leading-7 text-muted-foreground">
            Split View is a relationship between two areas: the primary area holds the main task,
            while the supporting area holds details, a preview, or another related view. SplitPane
            controls their proportion, stacking, and visibility; the consuming page still owns the
            content, selection, and show/hide interaction.
          </p>
          <TryIt>
            Resize the preview. Main should remain first when the areas stack, and both areas should
            remain readable without horizontal scrolling.
          </TryIt>
          <div className="-mt-2 overflow-hidden rounded-xl border">
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
        </section>

        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="split-view-use-heading">
          <div className="space-y-5">
            <h2 id="split-view-use-heading" className="text-2xl font-semibold tracking-tight">
              When to use it
            </h2>
            <p className="leading-7 text-muted-foreground">
              Use Split View when supporting information helps someone complete or understand a
              primary task without leaving it.
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
              Choose a normal section, dialog, or separate page when the relationship does not need
              two persistent areas.
            </p>
            <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
              <li>When the secondary content is required before the main task can start.</li>
              <li>When both areas need the same visual priority at every screen size.</li>
              <li>When the secondary area would leave the main content too narrow to use.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-5" aria-labelledby="split-view-design-heading">
          <h2 id="split-view-design-heading" className="text-2xl font-semibold tracking-tight">
            Design considerations
          </h2>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
            <li>Give the primary area the clearest task and the strongest content hierarchy.</li>
            <li>
              Use a one-third supporting area when the primary task needs more room; use equal
              halves when both views need comparable space.
            </li>
            <li>Start with supporting details hidden when they are helpful but optional.</li>
            <li>
              Choose columns inside each area from the content that must remain readable, not from
              the space available.
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
              Give the supporting area a useful heading; use its aside landmark when it contains a
              distinct, related region.
            </li>
            <li>
              Use a real button for showing or hiding details, with an expanded state and a control
              relationship exposed to assistive technology.
            </li>
            <li>When details close, return focus to the button that opened them.</li>
            <li>
              Ensure hidden details are removed from the accessibility tree and every control has a
              clear name.
            </li>
            <li>
              Do not rely on position or color alone to explain which record or item the supporting
              area describes; expose that relationship in text and state.
            </li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="split-view-responsive-heading">
          <h2 id="split-view-responsive-heading" className="text-2xl font-semibold tracking-tight">
            Responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">
            Split View stacks the primary area before the supporting area on narrow screens. At the
            large breakpoint, the one-third proportion gives the primary area two-thirds and the
            supporting area one-third of the available content width. The half proportion gives both
            areas equal space. If the supporting area is hidden, the primary area expands to one
            full-width column.
          </p>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
            <li>Test the narrow layout with long headings, descriptions, and action labels.</li>
            <li>
              Confirm that both areas remain usable at 200% zoom and without horizontal scrolling.
            </li>
            <li>
              Check that the primary-to-supporting reading order still makes sense when stacked.
            </li>
            <li>
              Verify that hiding the supporting area does not strand its trigger, focus, or required
              content.
            </li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="split-view-examples-heading">
          <h2 id="split-view-examples-heading" className="text-2xl font-semibold tracking-tight">
            Examples and variations
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            These previews use the reusable Split View example. Compare the supported proportions
            and the open/closed secondary-area behavior rather than treating the content cards as a
            required pattern.
          </p>
          <div className="space-y-8">
            <ExampleVariation
              title="Main two-thirds, Secondary one-third"
              summary="Give Main more room when Secondary provides context, a preview, or supporting details."
              tryIt="Activate View details, close the details area from either control, then resize through narrow and wide widths. Confirm that focus returns to the opening control, Main remains first, and neither pane becomes unusably narrow."
              supplemental={{
                tabLayout: 'requirements',
                guidance: {
                  explanation:
                    'Use the third proportion when the primary task needs more room than its supporting details. The SplitPane owns the responsive relationship; the consuming page owns the content, visibility state, and interaction that opens or closes details.',
                  considerations: [
                    'The live example starts with Secondary hidden so the primary task expands until supporting details are requested.',
                    'At large widths, Main receives two-thirds and Secondary receives one-third. Below the large breakpoint, the areas stack with Main first.',
                    'The example uses realistic card collections to reveal whether either pane becomes too narrow at wide, narrow, or zoomed layouts.',
                  ],
                  doItems: [
                    'Give Main the larger proportion when Secondary is contextual rather than an equal task.',
                    'Keep Secondary directly related to the current Main task and label both areas clearly.',
                    'Return focus to the opening control when the details area closes.',
                  ],
                  dontItems: [
                    'Do not use the smaller pane for a second task with equal priority.',
                    'Do not put unrelated navigation or competing actions in Secondary.',
                    'Do not assume the desktop proportion remains side by side at narrow widths.',
                  ],
                },
                code: {
                  language: 'tsx',
                  source: `<SplitPaneExample
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
/>`,
                  html: `<div data-slot="split-pane" data-secondary-size="third"
  data-secondary-visible="true"
  class="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
  <div>Main content and View details control</div>
  <aside aria-labelledby="secondary-heading">Secondary content</aside>
</div>`,
                  props: [
                    {
                      name: 'secondarySize',
                      type: '"third" | "half"',
                      example: 'secondarySize="third"',
                      description: 'Reserves one-third of the large-screen width for Secondary.',
                    },
                    {
                      name: 'mainColumns',
                      type: 'responsive column settings',
                      description: 'Keeps Main readable when Secondary is open or hidden.',
                    },
                    {
                      name: 'secondaryColumns',
                      type: 'Record<SecondarySize, responsive columns>',
                      description:
                        'Chooses a matching internal grid for each supported proportion.',
                    },
                  ],
                  attributes: [
                    {
                      name: 'data-secondary-size',
                      type: 'SplitPane state hook',
                      example: 'data-secondary-size="third"',
                      description: 'Identifies the selected proportion for inspection and styling.',
                    },
                    {
                      name: 'data-secondary-visible',
                      type: 'SplitPane state hook',
                      example: 'data-secondary-visible="true"',
                      description: 'Reflects whether the secondary grid track is occupied.',
                    },
                    {
                      name: 'aria-expanded / aria-controls',
                      type: 'button relationship',
                      description:
                        'The consuming interaction exposes the details toggle and controlled Secondary region.',
                    },
                  ],
                  notes:
                    'SplitPaneExample is documentation infrastructure. Product code should use SplitPane and SecondaryPane directly, with application-owned state controlling the details interaction.',
                },
                requirements: {
                  userStory:
                    'As a person completing a primary task, I want related details available without losing my place so that the supporting information helps rather than competes with Main.',
                  groups: [
                    {
                      id: 'BR-THIRD',
                      title: 'Business requirements',
                      items: [
                        'The example must keep the primary task visually dominant while providing related supporting details.',
                        'The example must allow people to inspect details without navigating away from Main.',
                      ],
                    },
                    {
                      id: 'FR-THIRD',
                      title: 'Functional requirements',
                      items: [
                        'The example must open and close Secondary through the View details and Hide details controls.',
                        'The example must use the third proportion when Secondary is visible at large widths.',
                      ],
                    },
                    {
                      id: 'NFR-THIRD',
                      title: 'Non-functional requirements',
                      items: [
                        'The example must keep Main and Secondary readable without horizontal scrolling at supported widths.',
                        'The example must preserve the primary-to-supporting relationship when the areas stack.',
                      ],
                    },
                    {
                      id: 'A11Y-THIRD',
                      title: 'Accessibility requirements',
                      items: [
                        'The example must expose the details control state and controlled region to assistive technology.',
                        'The example must return focus to the opening control when Secondary closes.',
                      ],
                    },
                    {
                      id: 'TR-THIRD',
                      title: 'Technical requirements',
                      items: [
                        'The example must keep Main first in the DOM and use SplitPane with SecondaryPane for the relationship.',
                        'The consuming page must own the visibility state and content for both areas.',
                      ],
                    },
                  ],
                  acceptanceCriteria: [
                    {
                      id: 'AC-THIRD-01',
                      requirementRefs: ['BR-THIRD-01', 'FR-THIRD-01'],
                      given: 'the third-proportion example is rendered with Secondary hidden',
                      when: 'the person activates View details',
                      then: 'Secondary opens beside Main at large widths without leaving the current page',
                      and: [
                        'the control exposes its expanded state and controls the Secondary region',
                      ],
                    },
                    {
                      id: 'AC-THIRD-02',
                      requirementRefs: ['FR-THIRD-02', 'NFR-THIRD-01'],
                      given: 'Secondary is visible at a large viewport',
                      when: 'the Split View layout is inspected',
                      then: 'Main occupies approximately two-thirds and Secondary occupies approximately one-third',
                      and: ['both areas remain readable without horizontal scrolling'],
                    },
                    {
                      id: 'AC-THIRD-03',
                      requirementRefs: ['NFR-THIRD-02', 'TR-THIRD-01'],
                      given: 'the viewport is narrow enough for the areas to stack',
                      when: 'the layout reflows',
                      then: 'Main remains before Secondary in the reading order',
                      and: ['each area remains usable with long content'],
                    },
                    {
                      id: 'AC-THIRD-04',
                      requirementRefs: ['A11Y-THIRD-02'],
                      given: 'Secondary is open and focus is moved to Hide details',
                      when: 'the person closes Secondary',
                      then: 'Secondary is hidden and focus returns to View details',
                    },
                  ],
                },
                verification: {
                  scenarios: [
                    {
                      id: 'VR-THIRD-01',
                      criterionRefs: ['AC-THIRD-01', 'AC-THIRD-02'],
                      role: 'Functional QA',
                      title: 'Open the third-proportion details area',
                      cases: [
                        {
                          id: 'VR-THIRD-01A',
                          criterionRefs: ['AC-THIRD-01'],
                          title: 'Open and inspect Secondary',
                          steps: [
                            'Render the example with Secondary initially hidden.',
                            'Activate View details with a pointer and with the keyboard.',
                            'Inspect the button expanded state and the controlled Secondary region.',
                          ],
                          expected:
                            'Secondary opens without navigation, the button exposes the expanded state, and the controlled region is associated with the button.',
                        },
                        {
                          id: 'VR-THIRD-01B',
                          criterionRefs: ['AC-THIRD-02'],
                          title: 'Check the large-screen proportion',
                          steps: ['Set a large viewport and inspect the two grid areas.'],
                          expected:
                            'Main is approximately two-thirds wide, Secondary is approximately one-third wide, and neither area scrolls horizontally.',
                        },
                      ],
                    },
                    {
                      id: 'VR-THIRD-02',
                      criterionRefs: ['AC-THIRD-03'],
                      role: 'Accessibility QA',
                      title: 'Check stacked reading order',
                      cases: [
                        {
                          id: 'VR-THIRD-02A',
                          criterionRefs: ['AC-THIRD-03'],
                          title: 'Resize the layout',
                          steps: [
                            'Resize to a narrow viewport and inspect the DOM and visual order.',
                          ],
                          expected:
                            'Main remains first, Secondary follows it, and realistic content remains readable without horizontal scrolling.',
                        },
                      ],
                    },
                    {
                      id: 'VR-THIRD-03',
                      criterionRefs: ['AC-THIRD-04'],
                      role: 'Accessibility QA',
                      title: 'Restore focus after closing details',
                      cases: [
                        {
                          id: 'VR-THIRD-03A',
                          criterionRefs: ['AC-THIRD-04'],
                          title: 'Close Secondary',
                          steps: ['Open Secondary, move focus to Hide details, and activate it.'],
                          expected:
                            'Secondary closes and focus returns to the View details button.',
                        },
                      ],
                    },
                  ],
                },
              }}
            >
              <SplitPaneExample
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
            </ExampleVariation>

            <ExampleVariation
              title="Main half, Secondary half"
              summary="Give both areas equal room when people need to compare or move between related views."
              tryIt="Activate View details, close the details area from either control, then resize through narrow and wide widths. Confirm that both panes remain readable, Main stays first in the stacked layout, and focus returns to the opening control."
              supplemental={{
                tabLayout: 'requirements',
                guidance: {
                  explanation:
                    'Use the half proportion when Main and Secondary have comparable importance and people need to compare or move between related views. Equal width does not remove the need to make the primary relationship and reading order clear.',
                  considerations: [
                    'The same interactive details pattern is used as the third-proportion example, but both areas receive equal large-screen space.',
                    'Use realistic content to test whether equal columns remain readable rather than assuming equal width is always the best choice.',
                    'At narrow widths, Main still precedes Secondary even though the desktop proportions are equal.',
                  ],
                  doItems: [
                    'Use equal space for related views with comparable importance.',
                    'Make the relationship between the two areas explicit through headings and content.',
                    'Test both panes with realistic labels and content before choosing equal proportions.',
                  ],
                  dontItems: [
                    'Do not use equal columns when Secondary is only narrow supporting context.',
                    'Do not let dense content or long labels make either pane difficult to use.',
                    'Do not treat equal width as equal task priority when the workflow still has a clear first step.',
                  ],
                },
                code: {
                  language: 'tsx',
                  source: `<SplitPaneExample
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
/>`,
                  html: `<div data-slot="split-pane" data-secondary-size="half"
  data-secondary-visible="true"
  class="grid gap-6 lg:grid-cols-2">
  <div>Main content and View details control</div>
  <aside aria-labelledby="secondary-heading">Secondary content</aside>
</div>`,
                  props: [
                    {
                      name: 'secondarySize',
                      type: '"third" | "half"',
                      example: 'secondarySize="half"',
                      description: 'Reserves half of the large-screen width for each area.',
                    },
                    {
                      name: 'mainColumns',
                      type: 'responsive column settings',
                      description: 'Keeps Main readable when the equal split is open or collapsed.',
                    },
                    {
                      name: 'secondaryColumns',
                      type: 'Record<SecondarySize, responsive columns>',
                      description: 'Provides the internal card layout for each proportion.',
                    },
                  ],
                  attributes: [
                    {
                      name: 'data-secondary-size',
                      type: 'SplitPane state hook',
                      example: 'data-secondary-size="half"',
                      description:
                        'Identifies the equal-width proportion for inspection and styling.',
                    },
                    {
                      name: 'data-secondary-visible',
                      type: 'SplitPane state hook',
                      example: 'data-secondary-visible="true"',
                      description: 'Reflects whether the secondary grid track is occupied.',
                    },
                    {
                      name: 'aria-expanded / aria-controls',
                      type: 'button relationship',
                      description:
                        'The consuming interaction exposes the details toggle and controlled Secondary region.',
                    },
                  ],
                  notes:
                    'Use SplitPane and SecondaryPane directly in product code. SplitPaneExample supplies the guide fixture, card content, and visibility state used to teach the layout choice.',
                },
                requirements: {
                  userStory:
                    'As a person comparing related views, I want both areas to remain understandable while the primary task stays first so that equal space supports comparison without losing orientation.',
                  groups: [
                    {
                      id: 'BR-HALF',
                      title: 'Business requirements',
                      items: [
                        'The example must support comparison between related Main and Secondary views.',
                        'The example must keep the workflow understandable even when both areas have equal visual weight.',
                      ],
                    },
                    {
                      id: 'FR-HALF',
                      title: 'Functional requirements',
                      items: [
                        'The example must open and close Secondary through the provided controls.',
                        'The example must use equal large-screen columns when Secondary is visible.',
                      ],
                    },
                    {
                      id: 'NFR-HALF',
                      title: 'Non-functional requirements',
                      items: [
                        'The example must keep both panes readable with realistic content at wide and narrow widths.',
                        'The example must preserve Main before Secondary when the layout stacks.',
                      ],
                    },
                    {
                      id: 'A11Y-HALF',
                      title: 'Accessibility requirements',
                      items: [
                        'The example must expose the details state and control relationship to assistive technology.',
                        'The example must restore focus to View details when Secondary closes.',
                      ],
                    },
                    {
                      id: 'TR-HALF',
                      title: 'Technical requirements',
                      items: [
                        'The example must configure SplitPane with the half proportion and keep Main first in the DOM.',
                        'The consuming page must provide the content and own the visibility interaction.',
                      ],
                    },
                  ],
                  acceptanceCriteria: [
                    {
                      id: 'AC-HALF-01',
                      requirementRefs: ['BR-HALF-01', 'FR-HALF-01'],
                      given: 'the equal-proportion example is rendered with Secondary hidden',
                      when: 'the person activates View details',
                      then: 'Secondary opens beside Main without navigating away',
                      and: ['the control exposes the expanded state and controlled region'],
                    },
                    {
                      id: 'AC-HALF-02',
                      requirementRefs: ['FR-HALF-02', 'NFR-HALF-01'],
                      given: 'Secondary is visible at a large viewport',
                      when: 'the Split View layout is inspected',
                      then: 'Main and Secondary receive equal large-screen space',
                      and: ['both panes remain readable with realistic content'],
                    },
                    {
                      id: 'AC-HALF-03',
                      requirementRefs: ['NFR-HALF-02', 'TR-HALF-01'],
                      given: 'the viewport becomes narrow',
                      when: 'the areas stack',
                      then: 'Main remains before Secondary in the reading order',
                      and: ['the equal desktop choice does not cause horizontal scrolling'],
                    },
                    {
                      id: 'AC-HALF-04',
                      requirementRefs: ['A11Y-HALF-02'],
                      given: 'Secondary is open and focus is on Hide details',
                      when: 'the person closes Secondary',
                      then: 'Secondary is hidden and focus returns to View details',
                    },
                  ],
                },
                verification: {
                  scenarios: [
                    {
                      id: 'VR-HALF-01',
                      criterionRefs: ['AC-HALF-01', 'AC-HALF-02'],
                      role: 'Functional QA',
                      title: 'Open and compare equal panes',
                      cases: [
                        {
                          id: 'VR-HALF-01A',
                          criterionRefs: ['AC-HALF-01'],
                          title: 'Open the comparison area',
                          steps: [
                            'Render the example with Secondary initially hidden.',
                            'Activate View details and inspect the resulting state.',
                          ],
                          expected:
                            'Secondary opens in place, the button exposes its expanded state, and the controlled region is associated with the button.',
                        },
                        {
                          id: 'VR-HALF-01B',
                          criterionRefs: ['AC-HALF-02'],
                          title: 'Check equal large-screen space',
                          steps: [
                            'Set a large viewport and compare the Main and Secondary grid tracks.',
                          ],
                          expected:
                            'Both panes receive equal space and remain readable with their realistic card content.',
                        },
                      ],
                    },
                    {
                      id: 'VR-HALF-02',
                      criterionRefs: ['AC-HALF-03'],
                      role: 'Accessibility QA',
                      title: 'Check narrow reading order',
                      cases: [
                        {
                          id: 'VR-HALF-02A',
                          criterionRefs: ['AC-HALF-03'],
                          title: 'Resize the equal split',
                          steps: ['Resize to a narrow viewport and inspect visual and DOM order.'],
                          expected:
                            'Main remains first, Secondary follows it, and both areas remain usable without horizontal scrolling.',
                        },
                      ],
                    },
                    {
                      id: 'VR-HALF-03',
                      criterionRefs: ['AC-HALF-04'],
                      role: 'Accessibility QA',
                      title: 'Restore focus after closing',
                      cases: [
                        {
                          id: 'VR-HALF-03A',
                          criterionRefs: ['AC-HALF-04'],
                          title: 'Close the comparison area',
                          steps: ['Open Secondary, focus Hide details, and activate the control.'],
                          expected: 'Secondary closes and focus returns to View details.',
                        },
                      ],
                    },
                  ],
                },
              }}
            >
              <SplitPaneExample
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
            </ExampleVariation>
          </div>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsSplitViewPage }
