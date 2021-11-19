//+
import { API_URL } from '@/config/index'

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body
    
    

    const strapiRes = await fetch(`${API_URL}/wp-json/bdpwr/v1/reset-password`, {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email
      }),
    })
    const data = await strapiRes.json()
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('email', 'hello', {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7
      })
    )

    // if (strapiRes.ok) {
    //   res.setHeader(
    //     'Set-Cookie',
    //     cookie.serialize('email', 'hello', {
    //       httpOnly: true,
    //       maxAge: 60 * 60 * 24 * 7
    //     })
    //   )
    //   res.status(200).json({ email: data.email })
    // } else {
    //   res
    //     .status(data.statusCode)
    //     .json({ message: data.message[0].messages[0].message })
    // }


  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}