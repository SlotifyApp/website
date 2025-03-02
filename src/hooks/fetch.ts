import { createApiClient } from '@/types/client'
import axios, { AxiosError, AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL?.replace(/^\/+/, ''),
  withCredentials: true, // Ensure cookies are included in requests
  headers: {
    'Content-Type': 'application/json',
  },
})

const refreshToken = async () => {
  try {
    const response = await axiosInstance.post('/api/refresh')

    if (response.status === 201) {
      return true
    }
  } catch (error) {
    console.error(error)
    return false
  }
}

const logoutUser = async () => {
  try {
    await axiosInstance.post('/api/users/me/logout')
  } catch (error) {
    console.log(error)
  }
  console.log('redirecting to home')
  window.location.href = '/'
}

axiosInstance.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosError['config'] & {
      _retry?: boolean
    }

    if (error.response?.status === 401) {
      console.log('In interceptor error 401')
      // If this was the refresh route, then log out the user
      if (originalRequest.url?.includes('/api/refresh')) {
        await logoutUser()
        return Promise.reject(error)
      }

      // Try refreshing session
      const refreshed = await refreshToken()

      if (refreshed) {
        return axiosInstance(originalRequest) // Retry original request
      } else {
        await logoutUser() // Refresh failed, log out
      }
    }

    return Promise.reject(error)
  },
)

const slotifyClient = createApiClient(
  process.env.NEXT_PUBLIC_API_URL || 'https://localhost:8080/',
  {
    axiosInstance,
  },
)

export default slotifyClient
