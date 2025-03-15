'use client'

import { Check, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/hooks/use-toast'
import slotifyClient from '@/hooks/fetch'
import { RescheduleRequest } from '@/types/types'

export function RescheduleRequests() {
  const [myRequests, setmyRequests] = useState<RescheduleRequest[] | null>(null)

  // hashmap of user id to user name
  const [userMap, setUserMap] = useState<{ [key: number]: string }>({})

  const handleAction = (id: number, action: 'accept' | 'ignore') => {
    if (action === 'accept') {
      toast({
        title: 'Request accepted',
        description: `Request has been accepted`,
      })
    } else {
      toast({
        title: 'Request ignored',
        description: `Request has been ignored`,
      })
    }
  }

  const getRescheduleRequests = async () => {
    const response = await slotifyClient.GetAPIRescheduleRequestsMe()
    setmyRequests(response)
    console.log('myRequests', myRequests)
    // getUserForEachRequest()
    // console.log('userMap', userMap)
  }

  const getUserForEachRequest = async () => {
    myRequests?.forEach(async request => {
      const response = await slotifyClient.GetAPIUsersUserID({ params: { userID: request.requested_by } })
      setUserMap((prev) => ({ ...prev, [request.requested_by]: response.firstName + ' ' + response.lastName }))
    })
  }

  async function getUserByID(id: number) {
    const response = await slotifyClient.GetAPIUsersUserID({ params: { userID: id } })
    return response.firstName + ' ' + response.lastName
  }

  useEffect(() => {
    getRescheduleRequests()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center justify-between'>
          Reschedule Requests
          <Badge variant='secondary'>{myRequests?.length}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <ScrollArea className='h-[calc(100vh-280px)]'>
          <div className='divide-y'>
            {myRequests?.map(request => (
              <div key={request.request_id} className='p-4'>
                <div className='space-y-3'>
                  <div>
                    <h4 className='font-medium leading-none'>
                      {request.newMeeting?.title ? request.newMeeting.title : 'Untitled'}
                    </h4>
                    <p className='text-sm text-muted-foreground mt-1'>
                      Requested by {getUserByID(request.requested_by)}
                    </p>
                  </div>

                  {/* <div className='space-y-1 text-sm'>
                    <div className='flex items-start gap-2'>
                      <div className='w-20 font-medium shrink-0'>Current:</div>
                      <div className='text-muted-foreground'>
                        {(request.oldMeeting)}
                      </div>
                    </div>
                    <div className='flex items-start gap-2'>
                      <div className='w-20 font-medium shrink-0'>
                        Requested:
                      </div>
                      <div className='text-muted-foreground'>
                        {request.requestedDateTime}
                      </div>
                    </div>
                    <div className='flex items-start gap-2'>
                      <div className='w-20 font-medium shrink-0'>
                        Attendees:
                      </div>
                      <div className='text-muted-foreground'>
                        {request.participants.join(', ')}
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center gap-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      className='w-full text-green-500 hover:text-green-600 hover:bg-green-50'
                      onClick={() => handleAction(request.id, 'accept')}
                    >
                      <Check className='h-4 w-4 mr-1' />
                      Accept
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      className='w-full text-red-500 hover:text-red-600 hover:bg-red-50'
                      onClick={() => handleAction(request.id, 'ignore')}
                    >
                      <X className='h-4 w-4 mr-1' />
                      Ignore
                    </Button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
