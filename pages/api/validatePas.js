//+
import { API_URL } from '@/config/index'

export default async (req, res) => {
  if (req.method === 'POST') {
    const { code, email } = req.body
    
    

    const strapiRes = await fetch(`${API_URL}/wp-json/bdpwr/v1/validate-code`, {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
        email
      }),
    })
    const data = await strapiRes.json()
    

    if (strapiRes.ok) {
      res.status(200).json({ email: data.email })
    } else {
      res
        .status(data.data.status)
        .json({ message: data.message })
    }


  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}