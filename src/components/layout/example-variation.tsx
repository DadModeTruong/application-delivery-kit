/**
 * ExampleVariation renders a production-backed example with either the legacy
 * guidance layout or the standardized role-based supplemental tabs.
 *
 * The legacy shape remains available while guide pages migrate incrementally.
 * New examples should provide a summary, Try it instruction, and Guidance,
 * Code, Story & criteria, and Verification content.
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

type ExampleCode = {
  language?: string
  source: string
  notes?: ReactNode
}

type AcceptanceCriterion = {
  title?: string
  text: string
}

type VerificationSection = {
  title: string
  items: string[]
}

type ExampleRequirements = {
  userStory: ReactNode
  acceptanceCriteria: AcceptanceCriterion[]
}

type ExampleVerification = {
  sections: VerificationSection[]
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

function CodeBlock({ code }: { code: ExampleCode }) {
  return (
    <div className="space-y-4">
      <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm leading-6 text-foreground">
        <code>{code.source}</code>
      </pre>
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
        <ul className="mt-3 space-y-4">
          {requirements.acceptanceCriteria.map((criterion) => (
            <li key={criterion.title ?? criterion.text} className="rounded-md border p-4 leading-7">
              {criterion.title && (
                <strong className="mr-2 text-foreground">{criterion.title}</strong>
              )}
              {criterion.text}
            </li>
          ))}
        </ul>
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
    <div className="grid gap-6 text-muted-foreground sm:grid-cols-2">
      {verification.sections.map((section) => (
        <section
          key={section.title}
          aria-labelledby={`${idPrefix}-${section.title}-verification-heading`}
        >
          <h4
            id={`${idPrefix}-${section.title}-verification-heading`}
            className="font-semibold text-foreground"
          >
            {section.title}
          </h4>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
    <article className="space-y-6 rounded-lg border p-6 sm:p-8">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground">{summary}</p>
      </div>
      <div className={cn('rounded-lg border p-5 sm:p-6', exampleClassName)}>{children}</div>
      <div className="rounded-md bg-muted/50 p-4 text-sm leading-6 text-muted-foreground">
        <strong className="mr-2 text-foreground">Try it:</strong>
        {tryIt}
      </div>
      <Tabs defaultSelectedKey={tabIds.guidance} className="min-w-0">
        <TabsList aria-label={`${title} supplemental information`} className="max-w-full flex-wrap">
          <TabsTrigger id={tabIds.guidance}>Guidance</TabsTrigger>
          <TabsTrigger id={tabIds.code}>Code</TabsTrigger>
          <TabsTrigger id={tabIds.requirements}>Story &amp; criteria</TabsTrigger>
          <TabsTrigger id={tabIds.verification}>Verification</TabsTrigger>
        </TabsList>
        <TabsContent id={tabIds.guidance} className="pt-4">
          <GuidancePanel guidance={supplemental.guidance} />
        </TabsContent>
        <TabsContent id={tabIds.code} className="pt-4">
          <CodeBlock code={supplemental.code} />
        </TabsContent>
        <TabsContent id={tabIds.requirements} className="pt-4">
          <RequirementsPanel requirements={supplemental.requirements} />
        </TabsContent>
        <TabsContent id={tabIds.verification} className="pt-4">
          <VerificationPanel verification={supplemental.verification} idPrefix={idPrefix} />
        </TabsContent>
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
  VerificationSection,
}
