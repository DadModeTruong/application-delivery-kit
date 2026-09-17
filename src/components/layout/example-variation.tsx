import type { ReactNode } from 'react'

type ExampleVariationProps = {
  title: string
  description: string
  children: ReactNode
  explanation: string
  doItems: string[]
  dontItems: string[]
}

export function ExampleVariation({
  title,
  description,
  children,
  explanation,
  doItems,
  dontItems,
}: ExampleVariationProps) {
  return (
    <article className="space-y-6 rounded-lg border p-6 sm:p-8">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="rounded-lg border p-5 sm:p-6">{children}</div>
      <p className="text-muted-foreground">{explanation}</p>
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h4 className="font-semibold">Do</h4>
          <ul className="mt-3 list-disc space-y-3 pl-5 text-muted-foreground">
            {doItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Don&apos;t</h4>
          <ul className="mt-3 list-disc space-y-3 pl-5 text-muted-foreground">
            {dontItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </article>
  )
}
