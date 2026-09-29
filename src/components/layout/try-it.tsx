import type { ReactNode } from 'react'
import { MousePointerClick } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { cn } from 'cn'

type TryItProps = {
  children: ReactNode
  className?: string
}

/**
 * Shared instructional callout for component-guide previews.
 *
 * Keep the action prompt visually distinct from the live example while keeping
 * the instruction close to the behavior the reader should observe.
 */
function TryIt({ children, className }: TryItProps) {
  return (
    <Alert className={cn('text-muted-foreground', className)}>
      <MousePointerClick aria-hidden="true" />
      <AlertTitle className="text-foreground">Try it</AlertTitle>
      <AlertDescription className="w-full text-left ![text-wrap:wrap]">{children}</AlertDescription>
    </Alert>
  )
}

export { TryIt }
