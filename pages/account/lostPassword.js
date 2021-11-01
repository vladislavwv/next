//+
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/AuthForm.module.css'

export default function LostPassword() {
  const [email, setUsername] = useState('')

  const { lost, error } = useContext(AuthContext)

  useEffect(() => error && toast.error(error))

  const handleSubmit = (e) => {
    e.preventDefault()
    lost({ email })
  }

  return (
    <Layout title='Lost Pasword'>
      <div className={styles.auth}>
        <h1>
          <FaUser />Lost Password
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              value={email}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <input type='submit' value='Login' className='btn' />
        </form>

        <p>
          Don't have an account? <Link href='/account/register'>Register</Link>
        </p>
      </div>
    </Layout>
  )
}