//+
import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL } from '@/config/index'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const router = useRouter()

  useEffect(() => checkUserLoggedIn(), [])

  // Register user
  const register = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    const data = await res.json()
    if (res.ok) {
      setUser(data.user)
      router.push('/account/dashboard')
    } else {
      setError(data.message)
      setError(null)
    }
  }

  // Login user
  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    })

    const data = await res.json()

    if (res.ok) {
      setUser(data.user)
      router.push('/account/dashboard')
    } else {
      console.log(data)
      setError(data.message)
      setError(null)
    }
  }

    // Lost password
    const lost = async (email) => {
      const res = await fetch(`${NEXT_URL}/api/lost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(email),
      })
  
      const data = await res.json()
      if (res.ok) {
        setUser(data.user)
        router.push('/account/validate')
      } else {
        setError(data.message)
        setError(null)
      }
    }

        // Validate password
        const validatePas = async ({code, email}) => {
          const res = await fetch(`${NEXT_URL}/api/validatePas`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({code, email}),
          })
      
          const data = await res.json()
          
          if (res.ok) {
            setUser(data.user)
            router.push('/account/setPassword')
          } else {
            setError(data.message)
            setError(null)
          }
        }
        // Set password
        const SetPassword = async ({code, email, password}) => {
          const res = await fetch(`${NEXT_URL}/api/setPas`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({code, email, password}),
          })

          const data = await res.json()
          
          if (res.ok) {
            setUser(data.user)
            router.push('/account/login')
          } else {
            setError(data.message)
            setError(null)
          }
        }
  // Logout user
  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: 'POST',
    })

    if (res.ok) {
      setUser(null)
      router.push('/')
    }
  }

  // Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/user`)
    const data = await res.json()

    if (res.ok) {
      setUser(data.user)
    } else {
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout, lost, validatePas, SetPassword }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext