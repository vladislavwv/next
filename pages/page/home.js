//+
import Link from 'next/link'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'

export default function HomePage({ home, menu }) {
  return (
    <Layout home={home} menu={menu}>
      <h1>Home page</h1>
     
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/wp-json/wp/v2/posts`)
  const home = await res.json()
  const res2 = await fetch(`${API_URL}/wp-json/wp/v2/menu`)
  const menu = await res2.json()

  return {
    props: { home, menu },
    revalidate: 1,
  }
}