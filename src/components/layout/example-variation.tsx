/**
 * ExampleVariation renders a production-backed example with either the legacy
 * guidance layout or the standardized role-based supplemental tabs.
 *
 * The legacy shape remains available while guide pages migrate incrementally.
 * New examples should provide a summary, Try it instruction, and Guidance,
 * Code, Criteria, and Verification content.
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
  given: string
  when: string
  then: string
  and?: string[]
}

type VerificationCase = {
  title: string
  steps: string[]
  expected: string
}

type VerificationScenario = {
  title: string
  cases: VerificationCase[]
}

type ExampleRequirements = {
  userStory: ReactNode
  acceptanceCriteria: AcceptanceCriterion[]
}

type ExampleVerification = {
  scenarios: VerificationScenario[]
}

type ExampleSupplemental = {
  guidance: ExampleGuidance
  code: ExampleCode
  requirements: ExampleRequirements
  verification: ExampleVerification
}

type ExampleVariationBaseProps = {
  title: string
  children: ReactNode
  exampleClassName?: string
}

type StandardizedExampleVariationProps = ExampleVariationBaseProps & {
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
          Rendered HTML structure
        </h4>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          This is the current browser structure produced by the reusable component, including the
          styling classes and data attributes used by this example. Preserve the semantic elements,
          responsive classes, focus classes, and state attributes when adapting the pattern.
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

function RequirementsPanel({ requirements }: { requirements: ExampleRequirements }) {
  return (
    <div className="space-y-6 text-muted-foreground">
      <div>
        <h4 className="font-semibold text-foreground">User story</h4>
        <p className="mt-3 leading-7">{requirements.userStory}</p>
      </div>
      <div>
        <h4 className="font-semibold text-foreground">Acceptance criteria</h4>
        <ol className="mt-3 list-decimal space-y-5 pl-5 leading-7">
          {requirements.acceptanceCriteria.map((criterion, index) => (
            <li key={`${criterion.given}-${index}`} className="pl-2">
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
          </h4>
          <div className="mt-5 space-y-8">
            {scenario.cases.map((testCase) => (
              <article key={testCase.title} className="space-y-4">
                <h5 className="font-medium text-foreground">{testCase.title}</h5>
                <div>
                  <h6 className="text-sm font-medium text-foreground">Steps</h6>
                  <ol className="mt-2 list-decimal space-y-2 pl-5">
                    {testCase.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
                <p className="border-l-2 border-primary/40 pl-4 leading-7">
                  <strong className="font-medium text-foreground">Expected result: </strong>
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
}: StandardizedExampleVariationProps) {
  const idPrefix = React.useId().replaceAll(':', '')
  const tabIds = {
    guidance: `${idPrefix}-guidance`,
    code: `${idPrefix}-code`,
    requirements: `${idPrefix}-requirements`,
    verification: `${idPrefix}-verification`,
  }

  return (
    <article className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground">{summary}</p>
      </div>
      <div className={cn('rounded-lg border p-5 sm:p-6', exampleClassName)}>{children}</div>
      <div className="rounded-md bg-muted/50 p-4 text-sm leading-6 text-muted-foreground">
        <strong className="mr-2 text-foreground">Try it:</strong>
        {tryIt}
      </div>
      <Tabs defaultSelectedKey={tabIds.guidance} className="min-w-0 gap-2">
        <TabsList
          aria-label={`${title} supplemental information`}
          className="max-w-full flex-wrap"
        >
          <TabsTrigger id={tabIds.guidance}>Guidance</TabsTrigger>
          <TabsTrigger id={tabIds.code}>Code</TabsTrigger>
          <TabsTrigger id={tabIds.requirements}>Criteria</TabsTrigger>
          <TabsTrigger id={tabIds.verification}>Verification</TabsTrigger>
        </TabsList>
        <div className="rounded-lg border bg-card p-4 sm:p-6">
          <TabsContent id={tabIds.guidance}>
            <GuidancePanel guidance={supplemental.guidance} />
          </TabsContent>
          <TabsContent id={tabIds.code}>
            <CodeBlock code={supplemental.code} idPrefix={idPrefix} />
          </TabsContent>
          <TabsContent id={tabIds.requirements}>
            <RequirementsPanel requirements={supplemental.requirements} />
          </TabsContent>
          <TabsContent id={tabIds.verification}>
            <VerificationPanel verification={supplemental.verification} idPrefix={idPrefix} />
          </TabsContent>
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
