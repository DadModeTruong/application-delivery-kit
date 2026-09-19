/**
 * Forms component area and component reference pages.
 *
 * Form controls collect information. Each guide keeps the semantic HTML
 * behavior visible while demonstrating the equivalent shadcn-style pattern.
 */
import type { ReactNode } from 'react'

import { ComponentGuideShell } from '@/components/layout/component-guide-shell'
import { formSidebarLinks } from '@/config/component-navigation'
import { guideContent, sectionDetails, tryItText, type FormKind } from './form-guide-content'
import { GuideList, panelClass } from './form-control-shared'

type FormGuideProps = {
  title: string
  description: string
  kind: FormKind
  activeHref?: string
  basicExample: ReactNode
  variations: ReactNode
}

export function FormGuide({
  title,
  description,
  kind,
  activeHref = `/components/${kind === 'datepicker' ? 'datepicker' : kind}`,
  basicExample,
  variations,
}: FormGuideProps) {
  const content = guideContent[kind]
  const detail = sectionDetails[kind]
  return (
    <ComponentGuideShell
      activeHref={activeHref}
      tabActiveHref="/components/forms"
      sidebarNav={formSidebarLinks}
      sidebarNavLabel="Forms components"
    >
      <div className="space-y-14">
        <section className="space-y-5">
          <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
          <p className="text-xl leading-8 text-muted-foreground">{description}</p>
        </section>
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">What is it?</h2>
          <p className="leading-7 text-muted-foreground">
            {content.what} This first example is intentionally simple: use it to recognize the
            control before thinking about its states or styling.
          </p>
          <div className={panelClass}>
            <div className="max-w-xl">{basicExample}</div>
          </div>
          <p className="text-sm leading-6 text-muted-foreground">Try it: {tryItText[kind]}</p>
        </section>
        <section className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight">When to use it</h2>
            <p className="leading-7 text-muted-foreground">{detail.useIntro}</p>
            <GuideList items={[...content.use, ...detail.useMore]} />
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight">When not to use it</h2>
            <p className="leading-7 text-muted-foreground">{detail.notUseIntro}</p>
            <GuideList items={[...content.notUse, ...detail.notUseMore]} />
          </div>
        </section>
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Design considerations</h2>
          <p className="leading-7 text-muted-foreground">{detail.designIntro}</p>
          <GuideList items={[...content.design, ...detail.designMore]} />
        </section>
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Accessibility considerations</h2>
          <p className="leading-7 text-muted-foreground">{detail.accessibilityIntro}</p>
          <GuideList items={[...content.accessibility, ...detail.accessibilityMore]} />
        </section>
        <section className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight">Responsive behavior</h2>
          <p className="leading-7 text-muted-foreground">{detail.responsiveIntro}</p>
          <p className="leading-7 text-muted-foreground">{content.responsive}</p>
        </section>
        {variations}
      </div>
    </ComponentGuideShell>
  )
}

export type { FormKind }
