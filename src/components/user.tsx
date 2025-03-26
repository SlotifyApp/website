'use client'
import { useEffect, useState } from 'react'
import { Member } from '@/components/slotify-group-members'

import { User as LucideUserIcon, CalendarDays, Loader2 } from 'lucide-react'
import slotifyClient from '@/hooks/fetch'
import { errorToast } from '@/hooks/use-toast'

export default function User() {
  const [user, setUser] = useState<Member | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const today = new Date()
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const fetchUser = async () => {
    setIsLoading(true)
    try {
      const data = await slotifyClient.GetAPIUsersMe()
      setUser(data)
    } catch (error) {
      console.error(error)
      errorToast(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className='flex flex-row w-screen pl-20 pr-20 justify-between'>
      <div className='flex flex-row justify-center items-center'>
        <div className='flex flex-row justify-center items-center gap-5 text-2xl font-semibold'>
          <LucideUserIcon className='h-10 w-10' />
          Welcome{' '}
          {isLoading ? (
            <Loader2 className='h-10 w-10' />
          ) : user ? (
            user.firstName
          ) : (
            'User'
          )}
        </div>
      </div>
      <div className='flex flex-row justify-center items-center gap-5 text-xl'>
        {formattedDate}
        <CalendarDays className='h-10 w-10' />
      </div>
    </div>
  )
}
