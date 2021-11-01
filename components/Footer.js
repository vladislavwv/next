//+
import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import { API_URL } from '@/config/index'
import Script from 'next/script'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Events 2021</p>
      <p>
        <Link href='/about'>About This Project</Link>
      </p>
      <Script
        src={API_URL + "/wp-content/themes/next/scripts/scripts.js"}
        strategy="afterInteractive"
      />
    </footer>
  )
}