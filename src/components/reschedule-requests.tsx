'use client'

import { Check, X } from 'lucide-react'
import { useEffect, useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { errorToast, toast } from '@/hooks/use-toast'
import slotifyClient from '@/hooks/fetch'
import { CalendarEvent, RescheduleRequest, Attendee, User } from '@/types/types'
import { format, parseISO } from 'date-fns'
import { CreateEvent } from './calendar/create-event'

interface CreateEventData {
  title: string
  duration: string
  participants: User[]
  selectedRange: { start: Date; end: Date } | null
  disabled: boolean
}

export function RescheduleRequests() {
  // TODO - this can be removed since we are using full requests instead
  const [myRequests, setmyRequests] = useState<RescheduleRequest[] | null>(null)
  const [createEventOpen, setCreateEventOpen] = useState(false)

  const [createEventData, setCreateEventData] = useState<CreateEventData>({
    title: '',
    duration: '1hr',
    participants: [],
    selectedRange: null,
    disabled: false,
  })

  const [fullRequests, setFullRequests] = useState<{
    [key: number]: {
      requestedAt: string
      requestedBy: string
      status: string
      oldEvent: CalendarEvent
      newEvent: {
        startTime: string
        endTime: string
        title: string
        duration: string
        location: string
      } | null
    }
  }>({})

  const convertAttendeesToUsers = async (attendees: Attendee[]) => {
    try {
      const usersPromises = attendees.map(attendee =>
        slotifyClient.GetAPIUsers({ queries: { email: attendee.email } }),
      )
      const usersArrays = await Promise.all(usersPromises)
      const users = usersArrays.flat()
      return users
    } catch (error) {
      console.error('Error converting attendees:', error)
      return []
    }
  }

  const getRescheduleRequests = async () => {
    const response = await slotifyClient.GetAPIRescheduleRequestsMe()
    setmyRequests(response)
  }

  const getFullRequests = useCallback(async () => {
    myRequests?.forEach(async request => {
      const requestedBy = await getUserByID(request.requested_by)
      const oldEvent = await slotifyClient.GetAPICalendarEvent({
        queries: { msftID: request.oldMeeting.msftMeetingID },
      })
      const newEvent =
        request.newMeeting?.startTime === '0001-01-01T00:00:00Z'
          ? null
          : {
              startTime: request.newMeeting!.startTime,
              endTime: request.newMeeting!.endTime,
              title: request.newMeeting!.title,
              duration: request.newMeeting!.meetingDuration,
              location: request.newMeeting!.location,
            }

      setFullRequests(prevFullRequests => ({
        ...prevFullRequests,
        [request.request_id]: {
          requestedAt: request.requested_at,
          requestedBy: requestedBy,
          status: request.status,
          oldEvent: oldEvent,
          newEvent: newEvent,
        },
      }))
    })
  }, [myRequests])

  const getUserByID = async (id: number) => {
    const response = await slotifyClient.GetAPIUsersUserID({
      params: { userID: id },
    })
    return response.firstName + ' ' + response.lastName
  }

  const handleRequestReject = async (requestID: number) => {
    const response =
      await slotifyClient.PatchAPIRescheduleRequestRequestIDReject(undefined, {
        params: { requestID },
      })

    // TODO - 2 api calls are made here for some reason
    if (response) {
      toast({
        title: 'Request rejected',
        description: 'The request has been rejected',
      })
    } else {
      errorToast('Failed to reject request')
    }
  }

  const handleRequestAccept = async (oldEvent: CalendarEvent) => {
    const start = parseISO(oldEvent.startTime!)
    const end = parseISO(oldEvent.endTime!)
    const diffInMinutes = Math.round((end.getTime() - start.getTime()) / 60000)
    const candidates = [30, 60, 120];
    const closest = candidates.reduce((prev, curr) =>
      Math.abs(curr - diffInMinutes) < Math.abs(prev - diffInMinutes) ? curr : prev
    );
    const durationString =
      closest === 30 ? '30 minutes' : closest === 60 ? '1hr' : '2hrs';

    const newParticipants = await convertAttendeesToUsers(oldEvent.attendees)

    setCreateEventData({
      title: oldEvent.subject ?? '',
      duration: durationString,
      participants: newParticipants,
      selectedRange: {
        start: new Date(oldEvent.startTime!),
        end: new Date(oldEvent.endTime!),
      },
      disabled: true,
    })
    setCreateEventOpen(true)
  }

  // TODO - this can be removed since we are using full requests instead
  useEffect(() => {
    getRescheduleRequests()
  }, [])

  useEffect(() => {
    getFullRequests()
  }, [getFullRequests])

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center justify-between'>
            Reschedule Requests
            <Badge variant='secondary'>{myRequests?.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-row min-w-full'>
            <ScrollArea className='h-[60vh]'>
              <div className='divide-y'>
                {myRequests
                  ?.filter(request => request.status === 'pending')
                  .map(request => (
                    <div key={request.request_id} className='p-4'>
                      <div className='space-y-3'>
                        <div>
                          <h4 className='font-medium leading-none'>
                            {request.newMeeting?.title
                              ? request.newMeeting.title
                              : '(No name)'}
                          </h4>
                          <p className='text-sm text-muted-foreground mt-1'>
                            Current event:{' '}
                            {fullRequests[request.request_id]
                              ? format(
                                  parseISO(
                                    fullRequests[
                                      request.request_id
                                    ]!.oldEvent.startTime?.toString() ?? '',
                                  ),
                                  'EEEE do HH:mm',
                                )
                              : ''}
                          </p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            Status:{' '}
                            {fullRequests[request.request_id]
                              ? fullRequests[request.request_id]!.status
                              : ''}
                          </p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            Requested by{' '}
                            {fullRequests[request.request_id]
                              ? fullRequests[request.request_id]!.requestedBy
                              : ''}
                          </p>
                        </div>

                        <div className='space-y-1 text-sm'>
                          <div className='flex items-start gap-2'>
                            <div className='w-25 font-medium shrink-0'>
                              Requested on:
                            </div>
                            <div className='text-muted-foreground'>
                              {fullRequests[request.request_id]
                                ? format(
                                    parseISO(
                                      fullRequests[request.request_id]!
                                        .requestedAt,
                                    ),
                                    'EEEE do HH:mm',
                                  )
                                : ''}
                            </div>
                          </div>
                          {/* <div className='flex items-start gap-2'>
                      <div className='w-20 font-medium shrink-0'>
                        Requested:
                      </div>
                      <div className='text-muted-foreground'>
                        {request.requestedDateTime}
                      </div>
                    </div> */}
                          <div className='flex items-start gap-2'>
                            <div className='w-25 font-medium shrink-0'>
                              Attendees:
                            </div>
                            <div className='text-muted-foreground'>
                              {fullRequests[request.request_id]
                                ? fullRequests[
                                    request.request_id
                                  ]!.oldEvent.attendees.map(
                                    attendee => attendee.email,
                                  ).join(', ')
                                : ''}
                            </div>
                          </div>
                        </div>

                        <div className='flex items-center gap-2'>
                          <Button
                            variant='outline'
                            size='sm'
                            className='w-full text-green-500 hover:text-green-600 hover:bg-green-50'
                            onClick={() =>
                            handleRequestAccept(fullRequests[request.request_id]!.oldEvent)
                            }
                          >
                            <Check className='h-4 w-4 mr-1' />
                            Reschedule Now
                          </Button>

                          <Button
                            variant='outline'
                            size='sm'
                            className='w-full text-red-500 hover:text-red-600 hover:bg-red-50'
                            onClick={() =>
                              handleRequestReject(request.request_id)
                            }
                          >
                            <X className='h-4 w-4 mr-1' />
                            Ignore
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </ScrollArea>

            <ScrollArea className='h-[60vh]'>
              <div className='divide-y'>
                {myRequests
                  ?.filter(request => request.status !== 'pending')
                  .map(request => (
                    <div
                      key={request.request_id}
                      className='p-4 duration-200 hover:bg-gray-200 hover:rounded-lg'
                      onClick={async () => {
                        const currentFullRequest =
                          fullRequests[request.request_id]
                        if (!currentFullRequest) {
                          return
                        }

                        // If newMeeting exists and is valid, update createEventData.
                        if (
                          currentFullRequest.newEvent &&
                          currentFullRequest.newEvent.startTime !==
                            '0001-01-01T00:00:00Z'
                        ) {
                          const newParticipants = await convertAttendeesToUsers(
                            currentFullRequest.oldEvent.attendees,
                          )
                          setCreateEventData({
                            title: currentFullRequest.newEvent.title,
                            duration: currentFullRequest.newEvent.duration,
                            participants: newParticipants,
                            selectedRange: {
                              start: new Date(
                                currentFullRequest.newEvent.startTime,
                              ),
                              end: new Date(
                                currentFullRequest.newEvent.endTime,
                              ),
                            },
                            disabled: false,
                          })
                        } else {
                          const newParticipants = await convertAttendeesToUsers(
                            currentFullRequest.oldEvent.attendees,
                          )
                          setCreateEventData({
                            title: '',
                            duration: '1hr',
                            participants: newParticipants,
                            selectedRange: null,
                            disabled: false,
                          })
                        }
                        setCreateEventOpen(true)
                      }}
                    >
                      <div className='space-y-3'>
                        <div>
                          <h4 className='font-medium leading-none'>
                            {request.newMeeting?.title
                              ? request.newMeeting.title
                              : '(No name)'}
                          </h4>
                          <p className='text-sm text-muted-foreground mt-1'>
                            Current event:{' '}
                            {fullRequests[request.request_id]
                              ? format(
                                  parseISO(
                                    fullRequests[
                                      request.request_id
                                    ]!.oldEvent.startTime?.toString() ?? '',
                                  ),
                                  'EEEE do HH:mm',
                                )
                              : ''}
                          </p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            Status:{' '}
                            {fullRequests[request.request_id]
                              ? fullRequests[request.request_id]!.status
                              : ''}
                          </p>
                          <p className='text-sm text-muted-foreground mt-1'>
                            Requested by{' '}
                            {fullRequests[request.request_id]
                              ? fullRequests[request.request_id]!.requestedBy
                              : ''}
                          </p>
                        </div>

                        <div className='space-y-1 text-sm'>
                          <div className='flex items-start gap-2'>
                            <div className='w-25 font-medium shrink-0'>
                              Requested on:
                            </div>
                            <div className='text-muted-foreground'>
                              {fullRequests[request.request_id]
                                ? format(
                                    parseISO(
                                      fullRequests[request.request_id]!
                                        .requestedAt,
                                    ),
                                    'EEEE do HH:mm',
                                  )
                                : ''}
                            </div>
                          </div>

                          <div className='flex items-start gap-2'>
                            <div className='w-25 font-medium shrink-0'>
                              Attendees:
                            </div>
                            <div className='text-muted-foreground'>
                              {fullRequests[request.request_id]
                                ? fullRequests[
                                    request.request_id
                                  ]!.oldEvent.attendees.map(
                                    attendee => attendee.email,
                                  ).join(', ')
                                : ''}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </ScrollArea>
          </div>
        </CardContent>
      </Card>

      <CreateEvent
        open={createEventOpen}
        onOpenChangeAction={setCreateEventOpen}
        closeCreateEventDialogOpen={() => setCreateEventOpen(false)}
        initialTitle={createEventData.title}
        initialDuration={createEventData.duration}
        initialParticipants={createEventData.participants}
        initialSelectedRange={createEventData.selectedRange}
        inputsDisabled={createEventData.disabled}
      />
    </>
  )
}
