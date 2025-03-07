'use client'

import slotifyClient from '@/hooks/fetch'
import { useEffect, useState } from 'react'
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
import { InvitesMe } from '@/types/types'
import { errorToast } from '@/hooks/use-toast'
import { formatDistanceToNow, format } from 'date-fns'

export default function InvitesPage() {
  const [invites, setInvites] = useState<InvitesMe[]>([])
  const [pagetoken, setPageToken] = useState<number>(0)
  const declineInvite = async (inviteID: number) => {
    try {
      //TODO: create pop up based on the message this
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
    } catch (error) {
      console.error(error)
      errorToast(error)
    }
  }
  const acceptInvite = async (inviteID: number) => {
    try {
      //TODO: create pop up based on the message this
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
    } catch (error) {
      console.error(error)
      errorToast(error)
    }
  }
  useEffect(() => {
    const getInvites = async () => {
      try {
        const inviteData = await slotifyClient.GetAPIInvitesMe({
          queries: {
            limit: 10,
            pageToken: pagetoken,
          },
        })
        const { invites, nextPageToken } = inviteData
        setInvites(invites)
        setPageToken(nextPageToken)
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
    }
    getInvites()
  }, [pagetoken])

  return (
    <div className='container mx-auto py-10'>
      <div className='space-y-8'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Group Invites</h1>
          <p className='text-muted-foreground'>
            Manage your pending and past group invitations.
          </p>
        </div>
        <div className='grid gap-6'>
          {invites.map(invite => (
            <Card key={invite.inviteID}>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-4'>
                    <Avatar>
                      <AvatarImage
                        src={`https://api.dicebear.com/6.x/initials/svg?seed=${
                          invite.slotifyGroupName
                        }`}
                        alt={invite.slotifyGroupName}
                      />
                      <AvatarFallback>{invite.slotifyGroupName}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{invite.slotifyGroupName}</CardTitle>
                      <CardDescription>
                        Invited by{' '}
                        {invite.fromUserFirstName +
                          ' ' +
                          invite.fromUserLastName}{' '}
                        ({invite.fromUserEmail})
                      </CardDescription>
                    </div>
                  </div>
                  {invite.status === 'pending' ? (
                    <div className='flex items-center gap-4'>
                      <div className='flex items-center text-xs text-muted-foreground'>
                        <Clock className='mr-1 h-3 w-3' />
                        Expires{' '}
                        {format(new Date(invite.expiryDate), 'MMM d, h:mm a')}
                      </div>
                      <div className='flex items-center gap-2'>
                        <Button
                          size='icon'
                          variant='outline'
                          onClick={() => {
                            declineInvite(invite.inviteID)
                          }}
                          className='h-8 w-8 text-destructive'
                          aria-label='Decline invitation'
                        >
                          <X className='h-4 w-4' />
                        </Button>
                        <Button
                          size='icon'
                          variant='outline'
                          className='h-8 w-8 text-green-600'
                          onClick={() => {
                            acceptInvite(invite.inviteID)
                          }}
                          aria-label='Accept invitation'
                        >
                          <Check className='h-4 w-4' />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className='flex items-center gap-4'>
                      <div className='flex items-center text-xs text-muted-foreground'>
                        <Clock className='mr-1 h-3 w-3' />
                        Expired{' '}
                        {format(new Date(invite.expiryDate), 'MMM d, h:mm a')}
                      </div>
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
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground'>
                  {invite.message}
                </p>
                <p className='mt-2 text-xs text-muted-foreground'>
                  Invited{' '}
                  {formatDistanceToNow(new Date(invite.createdAt), {
                    addSuffix: true,
                  })}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
