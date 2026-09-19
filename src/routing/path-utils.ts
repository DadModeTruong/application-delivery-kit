/** Normalize browser paths before route matching. */
export function normalizePath(pathname: string): string {
  const path = pathname.replace(/\/+$/, '')
  return path || '/'
}
