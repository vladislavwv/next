//+
import Layout from '@/components/Layout'
import Pagination from '@/components/Pagination'
import { API_URL, PER_PAGE } from '@/config/index'

export default function EventsPage({ events, page, total }) {
  return (
    <Layout>
      <h1>Events</h1>
      
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/events/count`)
  const total = await totalRes.json()

  // Fetch events
  const eventRes = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  )
  const events = await eventRes.json()

  return {
    props: { events, page: +page, total },
  }
}