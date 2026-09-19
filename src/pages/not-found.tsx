/** Explicit fallback for unknown paths; broken links should not silently render Home. */
export function NotFoundPage({ path }: { path: string }) {
  return (
    <main
      className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-4 px-6 py-16"
      aria-labelledby="not-found-title"
    >
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 id="not-found-title" className="text-3xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="max-w-prose text-muted-foreground">
        No Application Delivery Kit page matches <code>{path}</code>.
      </p>
      <a
        className="w-fit rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        href="/"
      >
        Return home
      </a>
    </main>
  )
}
