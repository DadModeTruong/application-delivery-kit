/**
 * ComponentsTabsPage — guide to the Tabs interaction primitive.
 *
 * Shows how Tabs organizes related views without changing the page location,
 * including the supplemental documentation pattern used by component examples.
 */

import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
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
          <div className="space-y-4">
            <div className="rounded-xl border bg-card p-5">
              <Tabs defaultSelectedKey="overview" className="w-full">
                <TabsList aria-label="Project information">
                  <TabsTrigger id="intro-overview-tab" key="overview">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger id="intro-activity-tab" key="activity">
                    Activity
                  </TabsTrigger>
                  <TabsTrigger id="intro-members-tab" key="members">
                    Members
                  </TabsTrigger>
                </TabsList>
                <TabsContent id="intro-overview-tab" key="overview" className="pt-4 leading-7">
                  A concise summary helps people decide what to do next.
                </TabsContent>
                <TabsContent id="intro-activity-tab" key="activity" className="pt-4 leading-7">
                  Recent changes and events give the project useful context.
                </TabsContent>
                <TabsContent id="intro-members-tab" key="members" className="pt-4 leading-7">
                  The people responsible for the project are listed here.
                </TabsContent>
              </Tabs>
            </div>
            <div className="rounded-lg border bg-muted/40 p-4 text-sm leading-6 text-muted-foreground">
              <strong className="font-semibold text-foreground">Try it</strong>
              <p>
                Tab to a tab, use Arrow Right and Arrow Left to move between tabs, then press Enter
                or Space to show the associated panel. Confirm that the selected state and panel
                content stay together.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5" aria-labelledby="tabs-use-heading">
          <h2 id="tabs-use-heading" className="text-2xl font-semibold tracking-tight">
            When to use it
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Use Tabs for a small set of related views that share the same context.</li>
            <li>Keep labels short and parallel so people can predict what each panel contains.</li>
            <li>Prefer visible sections when people need to compare multiple panels at once.</li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="tabs-not-heading">
          <h2 id="tabs-not-heading" className="text-2xl font-semibold tracking-tight">
            When not to use it
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Do not hide unrelated destinations behind tabs; use links for navigation.</li>
            <li>Do not use Tabs for a long workflow that needs a clear next step.</li>
            <li>Do not make a tab panel the only place to find essential information.</li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="tabs-design-heading">
          <h2 id="tabs-design-heading" className="text-2xl font-semibold tracking-tight">
            Design considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>
              Choose a default tab that gives useful context without requiring extra interaction.
            </li>
            <li>Keep the tab list close to its panel and make the selected state visible.</li>
            <li>Do not communicate selection with color alone; use the component state styling.</li>
            <li>Keep tab labels readable at narrow widths and high zoom.</li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="tabs-accessibility-heading">
          <h2 id="tabs-accessibility-heading" className="text-2xl font-semibold tracking-tight">
            Accessibility considerations
          </h2>
          <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
            <li>Give each tab list a meaningful accessible label that describes its views.</li>
            <li>
              Use the production Tabs primitive so tab and panel relationships are generated safely.
            </li>
            <li>
              Verify keyboard focus, arrow-key movement, activation, and visible selected state.
            </li>
            <li>Keep the active panel in a logical reading order after the tab list.</li>
          </ul>
        </section>

        <section className="space-y-5" aria-labelledby="tabs-responsive-heading">
          <h2 id="tabs-responsive-heading" className="text-2xl font-semibold tracking-tight">
            Responsive behavior
          </h2>
          <p className="leading-7 text-muted-foreground">
            Tabs should remain understandable when space is limited. Let the tab list wrap or use a
            deliberate overflow treatment rather than clipping labels. Test the narrowest supported
            width and high zoom so focus and selected-state indicators remain visible.
          </p>
        </section>

        <section className="space-y-8" aria-labelledby="tabs-examples-heading">
          <div className="space-y-2">
            <h2 id="tabs-examples-heading" className="text-2xl font-semibold tracking-tight">
              Examples and variations
            </h2>
            <p className="leading-7 text-muted-foreground">
              The examples below show the same Tabs primitive in two different content roles: a
              compact documentation switcher and a product-content switcher.
            </p>
          </div>

          <article className="space-y-5" aria-labelledby="tabs-docs-example-heading">
            <div className="space-y-2">
              <h3 id="tabs-docs-example-heading" className="text-xl font-semibold tracking-tight">
                Documentation tabs
              </h3>
              <p className="leading-7 text-muted-foreground">
                Use a consistent set of role-oriented tabs to keep implementation and delivery
                guidance together without repeating it in the page flow.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-5">
              <Tabs defaultSelectedKey="guidance" className="w-full">
                <TabsList aria-label="Example documentation">
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
                <TabsContent
                  id="docs-requirements-panel"
                  key="requirements"
                  className="pt-4 leading-7"
                >
                  Capture the user and delivery needs before implementation.
                </TabsContent>
                <TabsContent id="docs-criteria-tab" key="criteria" className="pt-4 leading-7">
                  Express observable behavior using Given, When, Then, and And.
                </TabsContent>
                <TabsContent
                  id="docs-verification-panel"
                  key="verification"
                  className="pt-4 leading-7"
                >
                  Name the checks and expected results that prove the criteria.
                </TabsContent>
                <TabsContent id="docs-code-tab" key="code" className="pt-4 leading-7">
                  Show the smallest copyable implementation and its important props.
                </TabsContent>
              </Tabs>
            </div>
            <div className="rounded-lg border bg-muted/40 p-4 text-sm leading-6 text-muted-foreground">
              <strong className="font-semibold text-foreground">Try it</strong>
              <p>
                Move through the documentation tabs with the keyboard and activate each one. Confirm
                that only the selected panel is exposed and that every label describes its content.
              </p>
            </div>
          </article>

          <article className="space-y-5" aria-labelledby="tabs-product-example-heading">
            <div className="space-y-2">
              <h3
                id="tabs-product-example-heading"
                className="text-xl font-semibold tracking-tight"
              >
                Product content tabs
              </h3>
              <p className="leading-7 text-muted-foreground">
                Use tabs for sibling product views when the surrounding context remains stable.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-5">
              <Tabs defaultSelectedKey="summary" className="w-full">
                <TabsList aria-label="Application record">
                  <TabsTrigger id="product-summary-tab" key="summary">
                    Summary
                  </TabsTrigger>
                  <TabsTrigger id="product-details-tab" key="details">
                    Details
                  </TabsTrigger>
                  <TabsTrigger id="product-history-tab" key="history">
                    History
                  </TabsTrigger>
                </TabsList>
                <TabsContent id="product-summary-tab" key="summary" className="pt-4 leading-7">
                  The summary gives the reader the most important current information first.
                </TabsContent>
                <TabsContent id="product-details-tab" key="details" className="pt-4 leading-7">
                  Details provide the supporting information for the current record.
                </TabsContent>
                <TabsContent id="product-history-tab" key="history" className="pt-4 leading-7">
                  History shows changes without taking the reader to another page.
                </TabsContent>
              </Tabs>
            </div>
            <div className="rounded-lg border bg-muted/40 p-4 text-sm leading-6 text-muted-foreground">
              <strong className="font-semibold text-foreground">Try it</strong>
              <p>
                Select each product view with a pointer and keyboard. Confirm that the panel
                changes, the selected tab is visibly distinct, and focus remains understandable.
              </p>
            </div>
          </article>
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
