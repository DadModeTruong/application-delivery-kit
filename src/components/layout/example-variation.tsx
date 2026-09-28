/**
 * ExampleVariation renders a production-backed example with either the legacy
 * guidance layout or the standardized role-based supplemental tabs.
 *
 * The legacy shape remains available while guide pages migrate incrementally.
 * New examples should provide a summary, Try it instruction, and Guidance,
 * Requirements, Criteria, Verification, and Code content.
 */

import * as React from 'react'
import type { ReactNode } from 'react'
import { cn } from 'cn'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type ExampleGuidance = {
  explanation: ReactNode
  doItems: string[]
  dontItems: string[]
  considerations?: string[]
}

type ExampleCodeItem = {
  name: string
  type: string
  description: ReactNode
  example?: string
}

type ExampleCode = {
  language?: string
  source: string
  html: string
  props?: ExampleCodeItem[]
  attributes?: ExampleCodeItem[]
  notes?: ReactNode
}

type AcceptanceCriterion = {
  id?: string
  requirementRefs?: string[]
  given: string
  when: string
  then: string
  and?: string[]
}

type VerificationCase = {
  id?: string
  criterionRefs?: string[]
  role?: string
  title: string
  description?: string
  steps: string[]
  expected: string
}

type VerificationScenario = {
  id?: string
  criterionRefs?: string[]
  role?: string
  title: string
  description?: string
  cases: VerificationCase[]
}

type ExampleRequirementGroup = {
  id?: string
  title: string
  items: string[]
}

type ExampleRequirements = {
  userStory?: ReactNode
  groups?: ExampleRequirementGroup[]
  acceptanceCriteria?: AcceptanceCriterion[]
}

type ExampleVerification = {
  scenarios: VerificationScenario[]
}

type ExampleSupplemental = {
  guidance: ExampleGuidance
  code: ExampleCode
  requirements: ExampleRequirements
  verification: ExampleVerification
  tabLayout?: 'default' | 'requirements'
}

type ExampleVariationBaseProps = {
  title: string
  children: ReactNode
  exampleClassName?: string
}

type StandardizedExampleVariationProps = ExampleVariationBaseProps & {
  articleClassName?: string
  summary: string
  tryIt: ReactNode
  supplemental: ExampleSupplemental
}

type LegacyExampleVariationProps = ExampleVariationBaseProps & {
  description: string
  explanation: ReactNode
  doItems: string[]
  dontItems: string[]
}

type ExampleVariationProps = StandardizedExampleVariationProps | LegacyExampleVariationProps

function CodeBlock({ code, idPrefix }: { code: ExampleCode; idPrefix: string }) {
  return (
    <div className="space-y-8">
      <section aria-labelledby={`${idPrefix}-application-code-heading`}>
        <h4 id={`${idPrefix}-application-code-heading`} className="font-semibold text-foreground">
          Application Delivery Kit code
        </h4>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Use this TSX when building with the Application Delivery Kit component API.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-muted p-4 text-sm leading-6 text-foreground">
          <code>{code.source}</code>
        </pre>
        {code.props && code.props.length > 0 && (
          <div className="mt-5">
            <h5 className="font-semibold text-foreground">Props used in this example</h5>
            <dl className="mt-3 divide-y rounded-md border text-sm">
              {code.props.map((prop) => (
                <div
                  key={prop.name}
                  className="grid gap-1 p-3 sm:grid-cols-[minmax(9rem,16rem)_minmax(0,1fr)]"
                >
                  <dt className="font-mono font-semibold text-foreground">{prop.name}</dt>
                  <dd className="space-y-1 text-muted-foreground">
                    <div>
                      <code>{prop.type}</code>
                      {prop.example ? ` — ${prop.example}` : null}
                    </div>
                    <div>{prop.description}</div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </section>
      <section aria-labelledby={`${idPrefix}-rendered-html-heading`}>
        <h4 id={`${idPrefix}-rendered-html-heading`} className="font-semibold text-foreground">
          Representative HTML structure
        </h4>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          This is an illustrative excerpt of the structure produced by the reusable component. Some
          wrapper or library-generated details may be omitted; preserve the semantic elements,
          responsive classes, focus classes, and state attributes shown when adapting the pattern.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-muted p-4 text-sm leading-6 text-foreground">
          <code>{code.html}</code>
        </pre>
        {code.attributes && code.attributes.length > 0 && (
          <div className="mt-5">
            <h5 className="font-semibold text-foreground">Attributes and styling hooks</h5>
            <dl className="mt-3 divide-y rounded-md border text-sm">
              {code.attributes.map((attribute) => (
                <div
                  key={attribute.name}
                  className="grid gap-1 p-3 sm:grid-cols-[minmax(9rem,16rem)_minmax(0,1fr)]"
                >
                  <dt className="font-mono font-semibold text-foreground">{attribute.name}</dt>
                  <dd className="space-y-1 text-muted-foreground">
                    <div>{attribute.example ? <code>{attribute.example}</code> : null}</div>
                    <div>{attribute.description}</div>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </section>
      {code.notes && <div className="text-sm leading-6 text-muted-foreground">{code.notes}</div>}
    </div>
  )
}

function GuidancePanel({ guidance }: { guidance: ExampleGuidance }) {
  return (
    <div className="space-y-6 text-muted-foreground">
      <div>{guidance.explanation}</div>
      {guidance.considerations && guidance.considerations.length > 0 && (
        <div>
          <h4 className="font-semibold text-foreground">Considerations</h4>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            {guidance.considerations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h4 className="font-semibold text-foreground">Do</h4>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            {guidance.doItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Don&apos;t</h4>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            {guidance.dontItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function AcceptanceCriteriaPanel({
  requirements,
  showUserStory = true,
}: {
  requirements: ExampleRequirements
  showUserStory?: boolean
}) {
  const criteria = requirements.acceptanceCriteria ?? []

  return (
    <div className="space-y-6 text-muted-foreground">
      {showUserStory && requirements.userStory && (
        <div>
          <h4 className="font-semibold text-foreground">User story</h4>
          <p className="mt-3 leading-7">{requirements.userStory}</p>
        </div>
      )}
      <div>
        <h4 className="font-semibold text-foreground">Acceptance criteria</h4>
        <ol className="mt-3 list-decimal space-y-5 pl-5 leading-7">
          {criteria.map((criterion, index) => (
            <li key={`${criterion.given}-${index}`} className="pl-2">
              {(criterion.id || criterion.requirementRefs?.length) && (
                <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                  {criterion.id && (
                    <code className="text-sm font-medium text-foreground">{criterion.id}</code>
                  )}
                  {criterion.requirementRefs && criterion.requirementRefs.length > 0 && (
                    <span>Satisfies: {criterion.requirementRefs.join(', ')}</span>
                  )}
                </div>
              )}
              <strong className="text-foreground">Given</strong> {criterion.given}
              <ol type="a" className="mt-2 list-[lower-alpha] space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">When</strong> {criterion.when}
                </li>
                <li>
                  <strong className="text-foreground">Then</strong> {criterion.then}
                </li>
                {criterion.and?.map((statement) => (
                  <li key={statement}>
                    <strong className="text-foreground">And</strong> {statement}
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

function RequirementsPanel({ requirements }: { requirements: ExampleRequirements }) {
  if (requirements.groups) {
    return (
      <div className="space-y-8 text-muted-foreground">
        {requirements.userStory && (
          <div>
            <h4 className="font-semibold text-foreground">Purpose</h4>
            <p className="mt-3 leading-7">{requirements.userStory}</p>
          </div>
        )}
        {requirements.groups.map((group) => (
          <section key={group.title}>
            <h4 className="font-semibold text-foreground">
              {group.title}
              {group.id && (
                <code className="ml-2 text-sm font-medium text-foreground">{group.id}</code>
              )}
            </h4>
            <ol className="mt-3 list-decimal space-y-3 pl-5 leading-7">
              {group.items.map((item, itemIndex) => (
                <li key={item} className="pl-2">
                  {group.id && (
                    <code className="mr-2 text-sm font-medium text-foreground">
                      {group.id}-{String(itemIndex + 1).padStart(2, '0')}
                    </code>
                  )}
                  {item}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    )
  }

  return <AcceptanceCriteriaPanel requirements={requirements} />
}

function VerificationPanel({
  verification,
  idPrefix,
}: {
  verification: ExampleVerification
  idPrefix: string
}) {
  return (
    <div className="space-y-8 text-muted-foreground">
      {verification.scenarios.map((scenario, scenarioIndex) => (
        <section
          key={scenario.title}
          aria-labelledby={`${idPrefix}-scenario-${scenarioIndex}-heading`}
        >
          <h4
            id={`${idPrefix}-scenario-${scenarioIndex}-heading`}
            className="font-semibold text-foreground"
          >
            {scenario.title}
            {scenario.id && (
              <code className="ml-2 text-sm font-medium text-foreground">{scenario.id}</code>
            )}
          </h4>
          {(scenario.description || scenario.criterionRefs?.length) && (
            <div className="mt-2 space-y-1 text-sm text-muted-foreground">
              {scenario.description && <p className="leading-6">{scenario.description}</p>}
              {scenario.criterionRefs && scenario.criterionRefs.length > 0 && (
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <span>Verifies: {scenario.criterionRefs.join(', ')}</span>
                </div>
              )}
            </div>
          )}
          <div className="mt-5 space-y-8">
            {scenario.cases.map((testCase) => (
              <article key={testCase.title} className="space-y-4">
                <h5 className="font-medium text-foreground">
                  {testCase.title}
                  {testCase.id && (
                    <code className="ml-2 text-sm font-medium text-foreground">{testCase.id}</code>
                  )}
                </h5>
                {testCase.description && <p className="leading-6">{testCase.description}</p>}
                {(scenario.role || testCase.role || testCase.criterionRefs?.length) && (
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    {(scenario.role || testCase.role) && (
                      <span>Primary role: {testCase.role ?? scenario.role}</span>
                    )}
                    {testCase.criterionRefs && testCase.criterionRefs.length > 0 && (
                      <span>Verifies: {testCase.criterionRefs.join(', ')}</span>
                    )}
                  </div>
                )}
                <div>
                  <h6 className="text-sm font-medium text-foreground">Steps</h6>
                  <ol className="mt-2 list-decimal space-y-2 pl-5">
                    {testCase.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
                <p className="border-l-2 border-primary/40 pl-4 leading-7">
                  <strong className="font-medium text-foreground">Expected result</strong>:{' '}
                  {testCase.expected}
                </p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function StandardizedExample({
  title,
  summary,
  tryIt,
  children,
  supplemental,
  exampleClassName,
  articleClassName,
}: StandardizedExampleVariationProps) {
  const idPrefix = React.useId().replaceAll(':', '')
  const tabIds = {
    guidance: `${idPrefix}-guidance`,
    code: `${idPrefix}-code`,
    requirements: `${idPrefix}-requirements`,
    acceptanceCriteria: `${idPrefix}-acceptance-criteria`,
    verification: `${idPrefix}-verification`,
  }

  return (
    <article className={cn('space-y-6', articleClassName)}>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground">{summary}</p>
      </div>
      <div className={cn('overflow-hidden rounded-xl border', exampleClassName)}>{children}</div>
      <div className="rounded-md bg-muted/50 p-4 text-sm leading-6 text-muted-foreground">
        <strong className="mr-2 text-foreground">Try it:</strong>
        {tryIt}
      </div>
      <Tabs defaultSelectedKey={tabIds.guidance} className="min-w-0 gap-2">
        <TabsList aria-label={`${title} supplemental information`} className="max-w-full flex-wrap">
          <TabsTrigger id={tabIds.guidance}>Guidance</TabsTrigger>
          {supplemental.tabLayout === 'requirements' ? (
            <>
              <TabsTrigger id={tabIds.requirements}>Requirements</TabsTrigger>
              <TabsTrigger id={tabIds.acceptanceCriteria}>Criteria</TabsTrigger>
              <TabsTrigger id={tabIds.verification}>Verification</TabsTrigger>
              <TabsTrigger id={tabIds.code}>Code</TabsTrigger>
            </>
          ) : (
            <>
              <TabsTrigger id={tabIds.code}>Code</TabsTrigger>
              <TabsTrigger id={tabIds.requirements}>Criteria</TabsTrigger>
              <TabsTrigger id={tabIds.verification}>Verification</TabsTrigger>
            </>
          )}
        </TabsList>
        <div className="rounded-lg border bg-card p-4 sm:p-6">
          <TabsContent id={tabIds.guidance}>
            <GuidancePanel guidance={supplemental.guidance} />
          </TabsContent>
          {supplemental.tabLayout === 'requirements' ? (
            <>
              <TabsContent id={tabIds.requirements}>
                <RequirementsPanel requirements={supplemental.requirements} />
              </TabsContent>
              <TabsContent id={tabIds.acceptanceCriteria}>
                <AcceptanceCriteriaPanel requirements={supplemental.requirements} />
              </TabsContent>
              <TabsContent id={tabIds.verification}>
                <VerificationPanel verification={supplemental.verification} idPrefix={idPrefix} />
              </TabsContent>
              <TabsContent id={tabIds.code}>
                <CodeBlock code={supplemental.code} idPrefix={idPrefix} />
              </TabsContent>
            </>
          ) : (
            <>
              <TabsContent id={tabIds.code}>
                <CodeBlock code={supplemental.code} idPrefix={idPrefix} />
              </TabsContent>
              <TabsContent id={tabIds.requirements}>
                <RequirementsPanel requirements={supplemental.requirements} />
              </TabsContent>
              <TabsContent id={tabIds.verification}>
                <VerificationPanel verification={supplemental.verification} idPrefix={idPrefix} />
              </TabsContent>
            </>
          )}
        </div>
      </Tabs>
    </article>
  )
}

function LegacyExample({
  title,
  description,
  children,
  explanation,
  doItems,
  dontItems,
  exampleClassName,
}: LegacyExampleVariationProps) {
  return (
    <article className="space-y-6 rounded-lg border p-6 sm:p-8">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className={cn('rounded-lg border p-5 sm:p-6', exampleClassName)}>{children}</div>
      <div className="text-muted-foreground">{explanation}</div>
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h4 className="font-semibold">Do</h4>
          <ul className="mt-3 list-disc space-y-3 pl-5 text-muted-foreground">
            {doItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Don&apos;t</h4>
          <ul className="mt-3 list-disc space-y-3 pl-5 text-muted-foreground">
            {dontItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export function ExampleVariation(props: ExampleVariationProps) {
  if ('supplemental' in props) {
    return <StandardizedExample {...props} />
  }

  return <LegacyExample {...props} />
}

export type {
  AcceptanceCriterion,
  ExampleCode,
  ExampleGuidance,
  ExampleRequirements,
  ExampleSupplemental,
  ExampleVerification,
  VerificationCase,
  VerificationScenario,
}
