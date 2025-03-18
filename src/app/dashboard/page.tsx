'use client'

import User from '@/components/user'
import { RescheduleRequests } from '@/components/reschedule-requests'
import { useEffect, useState } from 'react'
import { EventsForToday } from '@/components/events-today'
import type { CalendarEvent, InvitesMe } from '@/types/types'
import slotifyClient from '@/hooks/fetch'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Check, X, Clock } from 'lucide-react'
import { errorToast } from '@/hooks/use-toast'
import { format } from 'date-fns'

export default function Dashboard() {
  const [calendar, setCalendar] = useState<Array<CalendarEvent>>([])
  const [invites, setInvites] = useState<InvitesMe[]>([])

  useEffect(() => {
    const fetchCalendar = async () => {
      const now = new Date()
      const endOfDay = new Date(now)
      endOfDay.setHours(23, 59, 59, 999)

      const startFormatted = now.toISOString().slice(0, 19) + 'Z'
      const endFormatted = endOfDay.toISOString().slice(0, 19) + 'Z'

      try {
        const data = await slotifyClient.GetAPICalendarMe({
          queries: {
            start: startFormatted,
            end: endFormatted,
          },
        })
        setCalendar(data)
      } catch (error) {
        console.log('calendar me error', error)
      }
    }

    fetchCalendar()
  }, [])

  useEffect(() => {
    const getInvites = async () => {
      try {
        const inviteData = await slotifyClient.GetAPIInvitesMe({})
        setInvites(inviteData)
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
    }
    getInvites()
  }, [])

  const declineInvite = async (inviteID: number) => {
    //TODO: create pop up based on the message this
    try {
      await slotifyClient.PatchAPIInvitesInviteIDDecline(undefined, {
        params: {
          inviteID,
        },
      })

      //successful decline
      setInvites(prevInvites =>
        prevInvites.map(invite =>
          invite.inviteID == inviteID
            ? { ...invite, status: 'declined' }
            : invite,
        ),
      )

      //remove invite from being stored in system
      await slotifyClient.DeleteAPIInvitesInviteID(undefined, {
        params: {
          inviteID: inviteID,
        },
      })
    } catch (error) {
      console.error(error)
      errorToast(error)
    }
  }

  const acceptInvite = async (inviteID: number) => {
    //TODO: create pop up based on the message this
    try {
      await slotifyClient.PatchAPIInvitesInviteIDAccept(undefined, {
        params: {
          inviteID,
        },
      })

      //successful accept
      setInvites(prevInvites =>
        prevInvites.map(invite =>
          invite.inviteID == inviteID
            ? { ...invite, status: 'accepted' }
            : invite,
        ),
      )

      //remove invite from being stored in system
      await slotifyClient.DeleteAPIInvitesInviteID(undefined, {
        params: {
          inviteID: inviteID,
        },
      })
    } catch (error) {
      console.error(error)
      errorToast(error)
    }
  }

  return (
    <div className='flex flex-col justify-start items-center pt-10 h-[90vh] w-screen overflow-hidden'>
      <User />
      <div className='flex flex-row justify-center w-screen gap-10 mt-5'>
        <div className='w-[45vw]'>
          <div className='mb-8'>
            <EventsForToday events={calendar} />
          </div>
          <div className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>Group Invites</h2>
            {invites.length > 0 ? (
              <div className='grid gap-4'>
                {invites
                  .filter(invite => invite.status === 'pending')
                  .map(invite => (
                    <Card key={invite.inviteID}>
                      <CardHeader className='pb-2'>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-4'>
                            <Avatar>
                              <AvatarImage
                                src={`https://api.dicebear.com/6.x/initials/svg?seed=${invite.slotifyGroupName}`}
                                alt={invite.slotifyGroupName}
                              />
                              <AvatarFallback>
                                {invite.slotifyGroupName.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className='text-lg'>
                                {invite.slotifyGroupName}
                              </CardTitle>
                              <CardDescription>
                                Invited by{' '}
                                {invite.fromUserFirstName +
                                  ' ' +
                                  invite.fromUserLastName}
                              </CardDescription>
                            </div>
                          </div>
                          {invite.status === 'pending' ? (
                            <div className='flex items-center gap-2'>
                              <div className='hidden sm:flex items-center text-xs text-muted-foreground'>
                                <Clock className='mr-1 h-3 w-3' />
                                Expires{' '}
                                {format(new Date(invite.expiryDate), 'MMM d')}
                              </div>
                              <div className='flex items-center gap-2'>
                                <Button
                                  size='icon'
                                  variant='outline'
                                  onClick={() => declineInvite(invite.inviteID)}
                                  className='h-8 w-8 text-destructive'
                                  aria-label='Decline invitation'
                                >
                                  <X className='h-4 w-4' />
                                </Button>
                                <Button
                                  size='icon'
                                  variant='outline'
                                  className='h-8 w-8 text-green-600'
                                  onClick={() => acceptInvite(invite.inviteID)}
                                  aria-label='Accept invitation'
                                >
                                  <Check className='h-4 w-4' />
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                invite.status === 'accepted'
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                  : invite.status === 'expired'
                                    ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                              }`}
                            >
                              {invite.status.charAt(0).toUpperCase() +
                                invite.status.slice(1)}
                            </span>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        {invite.message && (
                          <p className='text-sm text-muted-foreground line-clamp-1'>
                            {invite.message}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
              </div>
            ) : (
              <p className='text-muted-foreground'>
                You currently do not have any pending invites.
              </p>
            )}
          </div>
        </div>
        <div className='w-[45vw]'>
          <RescheduleRequests />
        </div>
      </div>
    </div>
  )
}
