/** Root composition for the Application Delivery Kit reference app. */
import * as React from 'react'
import { findRoute, useHistoryRoute } from '@/routing/history-router'
import { NotFoundPage } from '@/pages/not-found'

function App() {
  const path = useHistoryRoute()
  const route = findRoute(path)

  React.useEffect(() => {
    document.title = route?.title ?? 'Application Delivery Kit | Page Not Found'
  }, [route])

  if (!route) return <NotFoundPage path={path} />
  const Page = route.component
  return <Page />
}

export default App
