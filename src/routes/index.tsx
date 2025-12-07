import { GetClub, GetHost } from '@/lib/host'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
	const host = GetHost()
	const club = GetClub()
	const baseURL = import.meta.env.BASE_URL
  return <div>

	host: {host}<br/>
	club: {club}<br/>
	baseurl: {baseURL}
  </div>
}
