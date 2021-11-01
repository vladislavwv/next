//+
import { AuthProvider } from '@/context/AuthContext'
import '../styles/globals.css'
import '../scripts/css/responsive.css'
import '../scripts/customizer/css/style.css'



function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp