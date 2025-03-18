'use client'
import { useEffect, useState } from 'react'
import { Member } from '@/components/slotify-group-members'

import { User as LucideUserIcon, CalendarDays } from 'lucide-react'
import slotifyClient from '@/hooks/fetch'
import { errorToast } from '@/hooks/use-toast'

export default function User() {
  const [user, setUser] = useState<Member | null>(null)
  const today = new Date()
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const fetchUser = async () => {
    try {
      console.log('Making fetch call to /users')
      const data = await slotifyClient.GetAPIUsersMe()
      setUser(data)
    } catch (error) {
      console.error(error)
      errorToast(error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className='flex flex-row w-screen pl-20 pr-20 justify-between'>
      <div className='flex flex-row justify-center items-center'>
        <div className='flex flex-row justify-center items-center gap-5 text-2xl font-semibold'>
        <LucideUserIcon className='h-10 w-10' />
          Welcome {user ? user.firstName: 'User'}
        </div>
      </div>
      <div className='flex flex-row justify-center items-center gap-5 text-xl'>
        {formattedDate}
        <CalendarDays className='h-10 w-10' />
      </div>
    </div>
  )
}
