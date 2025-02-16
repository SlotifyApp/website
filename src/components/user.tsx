'use client'
import { useEffect, useState } from 'react'
import { Member } from '@/components/team-members'

import { User as LucideUserIcon } from 'lucide-react'
import slotifyClient from '@/hooks/fetch'
import { errorToast } from '@/hooks/use-toast'

export default function User() {
  const [user, setUser] = useState<Member | null>(null)
  // const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await slotifyClient.GetAPIUsersMe()
        setUser(data)
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
    }
    fetchUser()
  }, [])

  if (!user) return 'No user'

  return (
    <div className='flex flex-row w-screen ml-20'>
      <LucideUserIcon className='h-10 w-10' />
      <div className='flex flex-row justify-center items-center ml-5 font-semibold text-2xl'>
        Welcome {user.firstName}
      </div>
    </div>
  )
}
