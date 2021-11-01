//+
import cookie from 'cookie'
import { API_URL } from '@/config/index'

export default async (req, res) => {
  if (req.method === 'POST') {
    const { username, email, password } = req.body
    
    

    const strapiRes = await fetch(`${API_URL}/wp-json/wp/v2/users/register`, {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
    const strapiRes2 = await fetch(`${API_URL}/wp-json/jwt-auth/v1/token?username=${username}&password=${password}`, {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
    const data2 = await strapiRes2.json()


    const data = await strapiRes.json()


    if (strapiRes.ok) {
      // Set Cookie
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', data2.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: 'strict',
          path: '/',
        })
      )

      res.status(200).json({ user: data.user })
    } else {
      res
        .status(data.statusCode)
        .json({ message: data.message[0].messages[0].message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}