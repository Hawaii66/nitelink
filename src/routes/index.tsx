import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return <h1>Hello worlds {JSON.stringify({
	loc:window.location
  },null,2)}</h1>
}
