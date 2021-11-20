//+
import { API_URL } from '@/config/index'

export default async (req, res) => {
  localStorage.setItem('myCat', 'Tom')
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
    console.log(data)
  

    if (strapiRes.ok) {
      res.status(200).json({ email: data.email })
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