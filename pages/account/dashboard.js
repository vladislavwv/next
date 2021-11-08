//+
import { parseCookies } from '../../helpers/index'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
// import DashboardEvent from '@/components/DashboardEvent'
import { API_URL } from '../../config/index'
import styles from '@/styles/Dashboard.module.css'

export default function DashboardPage({ events, token }) {
  const router = useRouter()


  return (
    <Layout title='User Dashboard'>
      {console.log(events)}
      <h1>Hello {events.name}</h1>
      {console.log(events)}
      {console.log(token)}
      {/* <div className={styles.dash}>
        <h1>Dashboard</h1>
        <h3>My Events</h3>

        {events.map((evt) => (
          <DashboardEvent key={evt.id} evt={evt} handleDelete={deleteEvent} />
        ))}
      </div> */}
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  const res = await fetch(`${API_URL}/wp-json/wp/v2/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const events = await res.json()

  return {
    props: {
      events,
      token,
    },
  }
}