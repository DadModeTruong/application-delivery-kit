/**
 * ComponentsTabsPage — guide to the Tabs interaction primitive.
 *
 * Shows the basic Tabs pattern and the role-oriented documentation pattern used
 * by component examples.
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
          <Tabs defaultSelectedKey="tab-1" className="min-w-0 gap-2">
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
            <div className="rounded-lg border bg-card p-4 sm:p-6">
              <TabsContent id="basic-tab-1" key="tab-1" className="text-muted-foreground">
                Tab 1 content.
              </TabsContent>
              <TabsContent id="basic-tab-2" key="tab-2" className="text-muted-foreground">
                Tab 2 content.
              </TabsContent>
              <TabsContent id="basic-tab-3" key="tab-3" className="text-muted-foreground">
                Tab 3 content.
              </TabsContent>
              <TabsContent id="basic-tab-4" key="tab-4" className="text-muted-foreground">
                Tab 4 content.
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
            remain visible when the tab list becomes crowded.
          </p>
        </section>

        <section className="space-y-8" aria-labelledby="tabs-examples-heading">
          <div className="space-y-2">
            <h2 id="tabs-examples-heading" className="text-2xl font-semibold tracking-tight">
              Examples and variations
            </h2>
            <p className="leading-7 text-muted-foreground">
              This example shows the basic Tabs pattern while the supplemental panels explain how to
              document and verify it.
            </p>
          </div>

          <ExampleVariation
            title="Basic tabs"
            summary="Use a small set of related tabs to show one focused panel at a time while keeping the surrounding context in place."
            tryIt="Move through Tab 1, Tab 2, Tab 3, and Tab 4 with the keyboard. Activate each tab and confirm that its selected state matches the visible panel."
            exampleClassName="overflow-visible rounded-none border-0 bg-transparent p-0"
            supplemental={{
              tabLayout: 'requirements',
              guidance: {
                explanation:
                  'This basic example uses four sibling views to show how Tabs keep related content in the same context while displaying one panel at a time.',
                considerations: [
                  'Keep the tab labels short, parallel, and consistent with the content in each panel.',
                  'Use the live preview and Try it instruction to demonstrate the component; keep implementation detail in the supplemental panels.',
                ],
                doItems: [
                  'Use concise labels that match the content in each panel.',
                  'Keep the active panel associated with the selected tab and readable after keyboard navigation.',
                  'Keep the four example panels focused on related content in the same context.',
                ],
                dontItems: [
                  'Do not use tabs to hide unrelated product destinations.',
                  'Do not make the tab labels vague or inconsistent with their panels.',
                  'Do not rely on color alone to show which tab is selected.',
                ],
              },
              code: {
                language: 'tsx',
                source: `<Tabs defaultSelectedKey="tab-1">
  <TabsList aria-label="Example tabs">
    <TabsTrigger id="tab-1">Tab 1</TabsTrigger>
    <TabsTrigger id="tab-2">Tab 2</TabsTrigger>
    <TabsTrigger id="tab-3">Tab 3</TabsTrigger>
    <TabsTrigger id="tab-4">Tab 4</TabsTrigger>
  </TabsList>
  <TabsContent id="tab-1">Tab 1 content.</TabsContent>
  <TabsContent id="tab-2">Tab 2 content.</TabsContent>
  <TabsContent id="tab-3">Tab 3 content.</TabsContent>
  <TabsContent id="tab-4">Tab 4 content.</TabsContent>
</Tabs>`,
                html: `<div role="tablist" aria-label="Example tabs">
  <button role="tab" aria-selected="true" aria-controls="tab-1-panel">Tab 1</button>
  ...
</div>
<div role="tabpanel" aria-labelledby="tab-1">Tab 1 content.</div>`,
                props: [
                  {
                    name: 'aria-label',
                    type: 'string',
                    example: 'Example tabs',
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
                  'As a delivery team member, I want four clearly labeled Tabs so people can switch between related panels without losing the example context.',
                groups: [
                  {
                    id: 'FR-DOCS',
                    title: 'Functional requirements',
                    items: [
                      'The tab list must expose Tab 1, Tab 2, Tab 3, and Tab 4.',
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
                    id: 'AC-TABS-01',
                    requirementRefs: ['FR-DOCS-01'],
                    given: 'the example tab list is rendered',
                    when: 'a person selects Tab 1, Tab 2, Tab 3, or Tab 4',
                    then: 'the selected tab becomes active and its associated panel is shown',
                    and: ['the previously selected panel is hidden'],
                  },
                  {
                    id: 'AC-TABS-02',
                    requirementRefs: ['A11Y-DOCS-01', 'A11Y-DOCS-02'],
                    given: 'a person navigates the example with the keyboard',
                    when: 'focus moves through Tab 1, Tab 2, Tab 3, and Tab 4',
                    then: 'the tabs support the production keyboard behavior and show visible focus',
                    and: ['the active tab and panel relationship remains exposed'],
                  },
                ],
              },
              verification: {
                scenarios: [
                  {
                    id: 'VR-TABS-01',
                    criterionRefs: ['AC-TABS-01'],
                    role: 'Functional QA',
                    title: 'Switch example panels',
                    cases: [
                      {
                        id: 'VR-TABS-01A',
                        criterionRefs: ['AC-DOCS-01'],
                        title: 'Select each example tab',
                        steps: [
                          'Activate Tab 1, Tab 2, Tab 3, and Tab 4 with a pointer.',
                          'Inspect the visible panel after each selection.',
                        ],
                        expected:
                          'Only the selected tab’s panel is visible and its content matches the label.',
                      },
                    ],
                  },
                  {
                    id: 'VR-TABS-02',
                    criterionRefs: ['AC-TABS-02'],
                    role: 'Accessibility QA',
                    title: 'Navigate and inspect tab relationships',
                    cases: [
                      {
                        id: 'VR-TABS-02A',
                        criterionRefs: ['AC-DOCS-02'],
                        title: 'Use keyboard navigation',
                        steps: [
                          'Tab to the example tab list, use the arrow keys to move, and activate a different tab.',
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
            <Tabs defaultSelectedKey="tab-1" className="min-w-0 gap-2">
              <TabsList aria-label="Example tabs" className="max-w-full flex-wrap">
                <TabsTrigger id="example-tab-1" key="tab-1">
                  Tab 1
                </TabsTrigger>
                <TabsTrigger id="example-tab-2" key="tab-2">
                  Tab 2
                </TabsTrigger>
                <TabsTrigger id="example-tab-3" key="tab-3">
                  Tab 3
                </TabsTrigger>
                <TabsTrigger id="example-tab-4" key="tab-4">
                  Tab 4
                </TabsTrigger>
              </TabsList>
              <div className="rounded-lg border bg-card p-4 sm:p-6">
                <TabsContent id="example-tab-1" key="tab-1" className="text-muted-foreground">
                  Tab 1 content.
                </TabsContent>
                <TabsContent id="example-tab-2" key="tab-2" className="text-muted-foreground">
                  Tab 2 content.
                </TabsContent>
                <TabsContent id="example-tab-3" key="tab-3" className="text-muted-foreground">
                  Tab 3 content.
                </TabsContent>
                <TabsContent id="example-tab-4" key="tab-4" className="text-muted-foreground">
                  Tab 4 content.
                </TabsContent>
              </div>
            </Tabs>
          </ExampleVariation>
        </section>
      </div>
    </ComponentGuideShell>
  )
}

export { ComponentsTabsPage }
