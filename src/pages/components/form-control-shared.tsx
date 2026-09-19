import type { ReactNode } from 'react'

const inputClass =
  'mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-ring'
const panelClass = 'rounded-xl border bg-card p-6 shadow-xs'

function Field({
  id,
  label,
  children,
  hint,
  disabled,
}: {
  id?: string
  label: string
  children: ReactNode
  hint?: string
  disabled?: boolean
}) {
  return (
    <div className="group" data-disabled={disabled || undefined}>
      <label
        className="text-sm font-medium group-data-[disabled=true]:opacity-50"
        htmlFor={id ?? label.toLowerCase().replaceAll(' ', '-')}
      >
        {label}
      </label>
      {children}
      {hint && (
        <p
          id={id ? `${id}-hint` : undefined}
          className="mt-2 text-sm text-muted-foreground group-data-[disabled=true]:opacity-50"
        >
          {hint}
        </p>
      )}
    </div>
  )
}

function InputVariation({
  title,
  description,
  children,
  guidance,
}: {
  title: string
  description: string
  children: ReactNode
  guidance: ReactNode
}) {
  return (
    <article className="space-y-5 rounded-xl border bg-card p-6 shadow-xs">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="leading-7 text-muted-foreground">{description}</p>
      </div>
      <div className="rounded-lg border bg-background p-5">{children}</div>
      <div className="space-y-3 leading-7 text-muted-foreground">{guidance}</div>
    </article>
  )
}

function InputGuidance({ intro, dos, donts }: { intro: string; dos: string[]; donts: string[] }) {
  return (
    <div className="space-y-5 leading-7 text-muted-foreground">
      <p>{intro}</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">Do</h4>
          <ul className="list-disc space-y-2 pl-5">
            {dos.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">Don't</h4>
          <ul className="list-disc space-y-2 pl-5">
            {donts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export { Field, InputGuidance, InputVariation, inputClass, panelClass }
