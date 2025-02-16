'use client'
import { useEffect } from 'react'
import LandingPage from '@/components/dashboard-landing'

import axios from 'axios'

export default function Home() {
  useEffect(() => {
    const fetchUser = async () => {
      // Detects whether the access token or refresh token are valid.
      // If either one is, then redirect to /dashboard.
      try {
        await axios.get('/api/users/me', {
          baseURL: 'http://localhost:8080/',
          withCredentials: true,
        })
        window.location.href = '/dashboard'
        return
      } catch (error) {
        console.log('error', error)
      }
      try {
        await axios.post('/api/refresh', {
          baseURL: 'http://localhost:8080/',
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
