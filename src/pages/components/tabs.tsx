/**
 * ComponentsTabsPage — guide to the Tabs interaction primitive.
 *
 * Shows the basic Tabs pattern, the role-oriented documentation pattern used by
 * component examples, and a vertical product-view variation.
 */

import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { ExampleVariation } from '@/components/layout/example-variation'
import { TryIt } from '@/components/layout/try-it'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { interactionSidebarLinks } from '@/config/component-navigation'

function ComponentsTabsPage() {
  return (
    <ComponentGuideShell
      activeHref="/components/tabs"
      tabActiveHref="/components/interaction"
      sidebarNav={interactionSidebarLinks}
      sidebarNavLabel="Interaction components"
    >
      <div className="space-y-14">
        <section className="space-y-5" aria-labelledby="tabs-heading">
          <h1 id="tabs-heading" className="text-4xl font-semibold tracking-tight">
            Tabs
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            Tabs organize related views in the same space. Use them when people need to compare or
            switch between sibling content without leaving the current context.
          </p>
        </section>

        <section className="space-y-5" aria-labelledby="tabs-what-heading">
          <h2 id="tabs-what-heading" className="text-2xl font-semibold tracking-tight">
            What is it?
          </h2>
          <p className="leading-7 text-muted-foreground">
            Tabs are a keyboard-accessible set of controls that show one associated panel at a time.
            The selected tab communicates which view is active, while the panel provides the
            corresponding content.
          </p>
          <TryIt>
            Tab to a view, use the arrow keys to move between tabs, and activate a tab. Confirm that
            its selected state and associated panel stay together.
          </TryIt>
          <Tabs defaultSelectedKey="tab-1" className="w-full">
            <TabsList aria-label="Example tabs" className="max-w-full flex-wrap">
              <TabsTrigger id="basic-tab-1" key="tab-1">
                Tab 1
              </TabsTrigger>
              <TabsTrigger id="basic-tab-2" key="tab-2">
                Tab 2
              </TabsTrigger>
              <TabsTrigger id="basic-tab-3" key="tab-3">
                Tab 3
              </TabsTrigger>
              <TabsTrigger id="basic-tab-4" key="tab-4">
                Tab 4
              </TabsTrigger>
            </TabsList>
            <div className="mt-2 rounded-lg border bg-card p-4 sm:p-6">
              <TabsContent id="basic-tab-1" key="tab-1" className="leading-7">
                Content for Tab 1.
              </TabsContent>
              <TabsContent id="basic-tab-2" key="tab-2" className="leading-7">
                Content for Tab 2.
              </TabsContent>
              <TabsContent id="basic-tab-3" key="tab-3" className="leading-7">
                Content for Tab 3.
              </TabsContent>
              <TabsContent id="basic-tab-4" key="tab-4" className="leading-7">
                Content for Tab 4.
              </TabsContent>
            </div>
          </Tabs>
        </section>

        <section className="grid gap-10 lg:grid-cols-2" aria-labelledby="tabs-use-heading">
          <div className="space-y-5">
            <h2 id="tabs-use-heading" className="text-2xl font-semibold tracking-tight">
              When to use it
            </h2>
            <p className="leading-7 text-muted-foreground">
              Use Tabs for a small set of related views that share the same context and do not need
              to be compared side by side.
            </p>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Keep labels short and parallel so people can predict each panel.</li>
              <li>Choose a default tab that gives useful context first.</li>
              <li>Keep the tab list close to its associated panel.</li>
            </ul>
          </div>
          <div className="space-y-5" aria-labelledby="tabs-not-heading">
            <h2 id="tabs-not-heading" className="text-2xl font-semibold tracking-tight">
              When not to use it
            </h2>
            <p className="leading-7 text-muted-foreground">
              Use visible sections or links when the information is unrelated, must be compared at
              once, or represents a different destination.
            </p>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
              <li>Do not hide unrelated destinations behind tabs; use links for navigation.</li>
              <li>Do not use Tabs for a long workflow that needs a clear next step.</li>
              <li>Do not make essential information available only in a non-default panel.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-5" aria-labelledby="tabs-design-heading">
          <h2 id="tabs-design-heading" className="text-2xl font-semibold tracking-tight">
            Design considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Make the selected state visible without relying on color alone.</li>
            <li>Keep the tab list readable at narrow widths and high zoom.</li>
            <li>Use parallel labels and predictable panel content.</li>
            <li>Prefer one consistent tab treatment within a product area.</li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="tabs-accessibility-heading">
          <h2 id="tabs-accessibility-heading" className="text-2xl font-semibold tracking-tight">
            Accessibility considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Give each tab list a meaningful accessible label that describes its views.</li>
            <li>Use the production Tabs primitive for tab and panel relationships.</li>
            <li>Verify keyboard focus, arrow-key movement, activation, and selected state.</li>
            <li>Keep the active panel in a logical reading order after the tab list.</li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="tabs-responsive-heading">
          <h2 id="tabs-responsive-heading" className="text-2xl font-semibold tracking-tight">
            Responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">
            Let tab labels wrap or use a deliberate overflow treatment rather than clipping them.
            Test the narrowest supported width and high zoom so focus and selected-state indicators
            remain visible. Vertical tabs should stack into a readable order when the available
            width is too narrow for a side-by-side layout.
          </p>
        </section>

        <section className="space-y-8" aria-labelledby="tabs-examples-heading">
          <div className="space-y-2">
            <h2 id="tabs-examples-heading" className="text-2xl font-semibold tracking-tight">
              Examples and variations
            </h2>
            <p className="leading-7 text-muted-foreground">
              These examples teach two different choices: using Tabs as a documentation switcher and
              changing the orientation when product views need a persistent vertical list.
            </p>
          </div>

          <ExampleVariation
            title="Documentation tabs"
            summary="Use a consistent set of role-oriented tabs to keep implementation and delivery guidance together without repeating it in the page flow."
            tryIt="Move through Guidance, Requirements, Criteria, Verification, and Code with the keyboard. Activate each tab and confirm that its label matches the visible panel."
            supplemental={{
              tabLayout: 'requirements',
              guidance: {
                explanation:
                  'Documentation tabs separate why, what, how, and how to prove an example without displaying every layer at once.',
                considerations: [
                  'Keep the tab labels consistent across standardized examples so readers build a reliable mental model.',
                  'Use the live preview and Try it instruction to demonstrate the component; keep delivery detail in the supplemental panels.',
                ],
                doItems: [
                  'Use concise labels that match the content in each panel.',
                  'Keep the active panel associated with the selected tab and readable after keyboard navigation.',
                  'Write Criteria and Verification as related but distinct delivery artifacts.',
                ],
                dontItems: [
                  'Do not repeat the same paragraph in Guidance, Criteria, and Verification.',
                  'Do not use tabs to hide unrelated product destinations.',
                  'Do not rely on color alone to show which documentation tab is selected.',
                ],
              },
              code: {
                language: 'tsx',
                source: `<Tabs defaultSelectedKey="guidance">
  <TabsList aria-label="Example documentation">
    <TabsTrigger id="guidance-tab">Guidance</TabsTrigger>
    <TabsTrigger id="requirements-tab">Requirements</TabsTrigger>
    <TabsTrigger id="criteria-tab">Criteria</TabsTrigger>
    <TabsTrigger id="verification-tab">Verification</TabsTrigger>
    <TabsTrigger id="code-tab">Code</TabsTrigger>
  </TabsList>
  <TabsContent id="guidance-tab">...</TabsContent>
  <TabsContent id="requirements-tab">...</TabsContent>
  <TabsContent id="criteria-tab">...</TabsContent>
  <TabsContent id="verification-tab">...</TabsContent>
  <TabsContent id="code-tab">...</TabsContent>
</Tabs>`,
                html: `<div role="tablist" aria-label="Example documentation">
  <button role="tab" aria-selected="true" aria-controls="guidance-panel">Guidance</button>
  ...
</div>
<div role="tabpanel" aria-labelledby="guidance-tab">...</div>`,
                props: [
                  {
                    name: 'aria-label',
                    type: 'string',
                    example: 'Example documentation',
                    description:
                      'Names the tab list so its purpose is clear to assistive technology.',
                  },
                  {
                    name: 'id',
                    type: 'string',
                    example: 'guidance-tab',
                    description:
                      'Pairs each tab with its associated panel; use instance-safe values.',
                  },
                ],
                attributes: [
                  {
                    name: 'aria-selected',
                    type: 'state',
                    example: 'true',
                    description: 'Identifies the currently selected tab.',
                  },
                  {
                    name: 'aria-controls / aria-labelledby',
                    type: 'relationship',
                    description: 'Connects each tab to its panel in both directions.',
                  },
                ],
              },
              requirements: {
                userStory:
                  'As a delivery team member, I want consistent documentation tabs so I can find guidance, requirements, criteria, verification, and code without losing the example context.',
                groups: [
                  {
                    id: 'FR-DOCS',
                    title: 'Functional requirements',
                    items: [
                      'The tab list must expose Guidance, Requirements, Criteria, Verification, and Code.',
                      'Selecting a tab must show its associated panel and hide the other panels.',
                    ],
                  },
                  {
                    id: 'A11Y-DOCS',
                    title: 'Accessibility requirements',
                    items: [
                      'The tab list must have a meaningful accessible name and keyboard interaction.',
                      'Each tab and panel must expose its selected state and relationship.',
                    ],
                  },
                ],
                acceptanceCriteria: [
                  {
                    id: 'AC-DOCS-01',
                    requirementRefs: ['FR-DOCS-01'],
                    given: 'the documentation tab list is rendered',
                    when: 'a person selects a tab',
                    then: 'the selected tab becomes active and its associated panel is shown',
                    and: ['the previously selected panel is hidden'],
                  },
                  {
                    id: 'AC-DOCS-02',
                    requirementRefs: ['A11Y-DOCS-01', 'A11Y-DOCS-02'],
                    given: 'a person navigates with the keyboard',
                    when: 'focus moves through the tab list',
                    then: 'the tabs support the production keyboard behavior and show visible focus',
                    and: ['the active tab and panel relationship remains exposed'],
                  },
                ],
              },
              verification: {
                scenarios: [
                  {
                    id: 'VR-DOCS-01',
                    criterionRefs: ['AC-DOCS-01'],
                    role: 'Functional QA',
                    title: 'Switch documentation panels',
                    cases: [
                      {
                        id: 'VR-DOCS-01A',
                        criterionRefs: ['AC-DOCS-01'],
                        title: 'Select each documentation tab',
                        steps: [
                          'Activate Guidance, Requirements, Criteria, Verification, and Code with a pointer.',
                          'Inspect the visible panel after each selection.',
                        ],
                        expected:
                          'Only the selected tab’s panel is visible and its content matches the label.',
                      },
                    ],
                  },
                  {
                    id: 'VR-DOCS-02',
                    criterionRefs: ['AC-DOCS-02'],
                    role: 'Accessibility QA',
                    title: 'Navigate and inspect tab relationships',
                    cases: [
                      {
                        id: 'VR-DOCS-02A',
                        criterionRefs: ['AC-DOCS-02'],
                        title: 'Use keyboard navigation',
                        steps: [
                          'Tab to the tab list, use the arrow keys to move, and activate a different tab.',
                          'Inspect the focused tab, selected state, and active panel relationship.',
                        ],
                        expected:
                          'Focus is visible, keyboard movement follows the Tabs pattern, and the selected tab controls the visible panel.',
                      },
                    ],
                  },
                ],
              },
            }}
          >
            <Tabs defaultSelectedKey="guidance" className="w-full">
              <TabsList aria-label="Example documentation" className="max-w-full flex-wrap">
                <TabsTrigger id="docs-guidance-tab" key="guidance">
                  Guidance
                </TabsTrigger>
                <TabsTrigger id="docs-requirements-tab" key="requirements">
                  Requirements
                </TabsTrigger>
                <TabsTrigger id="docs-criteria-tab" key="criteria">
                  Criteria
                </TabsTrigger>
                <TabsTrigger id="docs-verification-tab" key="verification">
                  Verification
                </TabsTrigger>
                <TabsTrigger id="docs-code-tab" key="code">
                  Code
                </TabsTrigger>
              </TabsList>
              <TabsContent id="docs-guidance-tab" key="guidance" className="pt-4 leading-7">
                Explain when the example fits, what it teaches, and what to avoid.
              </TabsContent>
              <TabsContent id="docs-requirements-tab" key="requirements" className="pt-4 leading-7">
                Capture the user and delivery needs before implementation.
              </TabsContent>
              <TabsContent id="docs-criteria-tab" key="criteria" className="pt-4 leading-7">
                Express observable behavior using Given, When, Then, and And.
              </TabsContent>
              <TabsContent id="docs-verification-tab" key="verification" className="pt-4 leading-7">
                Name the checks and expected results that prove the criteria.
              </TabsContent>
              <TabsContent id="docs-code-tab" key="code" className="pt-4 leading-7">
                Show the smallest copyable implementation and its important props.
              </TabsContent>
            </Tabs>
          </ExampleVariation>

          <ExampleVariation
            title="Vertical tabs"
            summary="Use vertical Tabs when a stable set of longer labels benefits from a persistent list beside the active product view."
            tryIt="Move through Summary, Permissions, and Activity with the keyboard, then resize the page. Confirm that the selected view, focus indicator, and panel relationship remain clear."
            supplemental={{
              guidance: {
                explanation:
                  'Vertical Tabs can give longer labels more room while keeping the current product context visible. Use this layout only when the side-by-side relationship helps people scan the available views.',
                considerations: [
                  'The consuming application owns the view data and selected key; Tabs owns the interaction and selected-state semantics.',
                  'At narrow widths, the layout should stack without changing the order of the tab list and active panel.',
                ],
                doItems: [
                  'Use vertical orientation for a stable, related set of views with labels that benefit from more width.',
                  'Keep the selected state visible in the line-style tab list.',
                  'Test the stacked layout and keyboard order at narrow widths.',
                ],
                dontItems: [
                  'Do not use vertical Tabs as a replacement for a page sidebar or route navigation.',
                  'Do not hide unrelated workflows in one tab list.',
                  'Do not let long labels clip or force horizontal scrolling.',
                ],
              },
              code: {
                language: 'tsx',
                source: `<Tabs orientation="vertical" defaultSelectedKey="summary">
  <TabsList aria-label="Application record" variant="line">
    <TabsTrigger id="summary-tab">Summary</TabsTrigger>
    <TabsTrigger id="permissions-tab">Permissions</TabsTrigger>
    <TabsTrigger id="activity-tab">Activity</TabsTrigger>
  </TabsList>
  <TabsContent id="summary-tab">...</TabsContent>
  <TabsContent id="permissions-tab">...</TabsContent>
  <TabsContent id="activity-tab">...</TabsContent>
</Tabs>`,
                html: `<div data-orientation="vertical">
  <div role="tablist" aria-label="Application record">...</div>
  <div role="tabpanel" aria-labelledby="summary-tab">...</div>
</div>`,
                props: [
                  {
                    name: 'orientation',
                    type: 'horizontal | vertical',
                    example: 'vertical',
                    description: 'Chooses the tab list and keyboard orientation.',
                  },
                  {
                    name: 'variant',
                    type: 'default | line',
                    example: 'line',
                    description: 'Chooses the visual treatment for the tab list.',
                  },
                ],
                attributes: [
                  {
                    name: 'data-orientation',
                    type: 'state hook',
                    example: 'vertical',
                    description:
                      'Communicates orientation to the component styling and inspection tools.',
                  },
                  {
                    name: 'role="tabpanel"',
                    type: 'semantic role',
                    description: 'Identifies the active content associated with the selected tab.',
                  },
                ],
              },
              requirements: {
                userStory:
                  'As a product team member, I want a vertical set of related views so people can scan longer labels while staying in the same record context.',
                groups: [
                  {
                    id: 'FR-VERTICAL',
                    title: 'Functional requirements',
                    items: [
                      'The vertical tab list must expose Summary, Permissions, and Activity as sibling views.',
                      'Selecting a tab must show its corresponding product view without changing the page destination.',
                    ],
                  },
                  {
                    id: 'RESP-VERTICAL',
                    title: 'Responsive requirements',
                    items: [
                      'The tab list and active panel must stack in a readable order when the viewport is narrow.',
                      'Labels and focus indicators must remain visible without horizontal scrolling.',
                    ],
                  },
                ],
                acceptanceCriteria: [
                  {
                    id: 'AC-VERTICAL-01',
                    requirementRefs: ['FR-VERTICAL-01'],
                    given: 'the vertical tab example is rendered',
                    when: 'a person selects Permissions or Activity',
                    then: 'the selected view appears beside the vertical tab list',
                    and: ['the page context and destination remain unchanged'],
                  },
                  {
                    id: 'AC-VERTICAL-02',
                    requirementRefs: ['RESP-VERTICAL-01', 'RESP-VERTICAL-02'],
                    given: 'the viewport becomes narrow',
                    when: 'the vertical layout reflows',
                    then: 'the tab list and active panel stack in reading order',
                    and: ['labels and focus remain visible without horizontal scrolling'],
                  },
                ],
              },
              verification: {
                scenarios: [
                  {
                    id: 'VR-VERTICAL-01',
                    criterionRefs: ['AC-VERTICAL-01'],
                    role: 'Functional QA',
                    title: 'Switch vertical product views',
                    cases: [
                      {
                        id: 'VR-VERTICAL-01A',
                        criterionRefs: ['AC-VERTICAL-01'],
                        title: 'Select each view',
                        steps: [
                          'Activate Permissions and Activity with a pointer and with the keyboard.',
                          'Inspect the active panel and the selected tab after each activation.',
                        ],
                        expected:
                          'The matching product panel appears, the selected state is clear, and the page does not navigate away.',
                      },
                    ],
                  },
                  {
                    id: 'VR-VERTICAL-02',
                    criterionRefs: ['AC-VERTICAL-02'],
                    role: 'Responsive QA',
                    title: 'Check vertical layout reflow',
                    cases: [
                      {
                        id: 'VR-VERTICAL-02A',
                        criterionRefs: ['AC-VERTICAL-02'],
                        title: 'Resize to a narrow viewport',
                        steps: [
                          'Resize the page until the vertical layout stacks, then tab through the controls and panel.',
                        ],
                        expected:
                          'The tab list remains before the active panel, labels wrap without clipping, and focus remains visible.',
                      },
                    ],
                  },
                ],
              },
            }}
          >
            <Tabs
              orientation="vertical"
              defaultSelectedKey="summary"
              className="grid gap-4 sm:grid-cols-[12rem_minmax(0,1fr)]"
            >
              <TabsList aria-label="Application record" variant="line" className="max-w-full">
                <TabsTrigger id="vertical-summary-tab" key="summary">
                  Summary
                </TabsTrigger>
                <TabsTrigger id="vertical-permissions-tab" key="permissions">
                  Permissions
                </TabsTrigger>
                <TabsTrigger id="vertical-activity-tab" key="activity">
                  Activity
                </TabsTrigger>
              </TabsList>
              <TabsContent id="vertical-summary-tab" key="summary" className="leading-7">
                The summary gives the reader the most important current information first.
              </TabsContent>
              <TabsContent id="vertical-permissions-tab" key="permissions" className="leading-7">
                Permissions explain who can view or change this record.
              </TabsContent>
              <TabsContent id="vertical-activity-tab" key="activity" className="leading-7">
                Activity shows changes without taking the reader to another page.
              </TabsContent>
            </Tabs>
          </ExampleVariation>
        </section>

        <section className="space-y-5" aria-labelledby="tabs-questions-heading">
          <h2 id="tabs-questions-heading" className="text-2xl font-semibold tracking-tight">
            Questions to ask
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Are these views truly siblings, or would separate navigation be clearer?</li>
            <li>Can each tab label predict the content that appears in its panel?</li>
            <li>Can keyboard users identify, move between, and activate every tab?</li>
            <li>What happens to the selected view when the surrounding context changes?</li>
          </ul>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsTabsPage }
