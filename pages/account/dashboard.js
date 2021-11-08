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
      {console.log(token)}
      <h1>Hello </h1>
  
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)


  return {
    props: {
      token
    },
  }
}