'use client'
import { useEffect } from 'react'
import LandingPage from '@/components/dashboard-landing'

import axios from 'axios'

export default function Home() {
  useEffect(() => {
    const fetchUser = async () => {
      // Keep this instead of using the slotifyClient.
      // slotifyClient will cause an infinite loop here
      try {
        await axios.get(process.env.NEXT_PUBLIC_API_URL + 'api/users/me', {
          withCredentials: true,
        })
        window.location.href = '/dashboard'
        return
      } catch (error) {
        console.log('error', error)
      }
      try {
        await axios.post(process.env.NEXT_PUBLIC_API_URL + 'api/refresh', {
          withCredentials: true,
        })
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchUser()
  }, [])

  return <LandingPage />
}
