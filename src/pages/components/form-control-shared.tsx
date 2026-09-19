/** Small presentation helpers shared by routed form guides. */
import type { ReactNode } from 'react'

export const panelClass = 'rounded-xl border bg-card p-6 shadow-xs'

export function GuideList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-3 pl-5 leading-7 text-muted-foreground">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export type FormExample = ReactNode
