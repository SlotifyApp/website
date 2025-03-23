'use client'

import { Check, X } from 'lucide-react'
import { useEffect, useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { errorToast, toast } from '@/hooks/use-toast'
import slotifyClient from '@/hooks/fetch'
import { Attendee, CalendarEvent, RescheduleRequest, User } from '@/types/types'
import { format, parseISO } from 'date-fns'
import { CreateEvent } from './calendar/create-event'
import { Trash2 } from 'lucide-react'

interface CreateEventData {
  title: string
  duration: number
  participants: User[]
  selectedRange: { start: Date; end: Date } | null
  disabled: boolean
  isRescheduleAccepted: boolean
  isComplete: boolean
  rescheduleID: number | null
}

interface FullRequest {
  requestedAt: string
  requestedBy: string
  status: string
  searchQuery: {
    start: string
    end: string
  }
  oldEvent: CalendarEvent
  newEvent: {
    startRangeTime: string
    endRangeTime: string
    title: string
    duration: number
    location: string
    attendees: User[]
  } | null
}

export function RescheduleRequests() {
  // TODO - this can be removed since we are using full requests instead
  const [myRequests, setmyRequests] = useState<RescheduleRequest[] | null>(null)
  const [createEventOpen, setCreateEventOpen] = useState(false)
  // hashmap = request -> [fleshed out request]
  const [fullRequests, setFullRequests] = useState<{
    [key: number]: FullRequest
  }>({})
  const [createEventData, setCreateEventData] = useState<CreateEventData>({
    title: '',
    duration: 60,
    participants: [],
    selectedRange: null,
    disabled: false,
    isRescheduleAccepted: false,
    isComplete: false,
    rescheduleID: null,
  })

  const convertAttendeesToUsers2 = async (attendees: Attendee[]) => {
    try {
      const userPromises = attendees.map(attendee =>
        slotifyClient.GetAPIUsers({
          queries: { email: attendee.email },
        }),
      )

      const usersArrays = await Promise.all(userPromises)
      const users = usersArrays.flat()
      return users
    } catch (error) {
      errorToast(error)
      return []
    }
  }

  const convertAttendeesToUsers = async (attendees: number[]) => {
    try {
      const usersPromises = attendees.map(attendee =>
        slotifyClient.GetAPIUsersUserID({ params: { userID: attendee } }),
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
    try {
      const response = await slotifyClient.GetAPIRescheduleRequestsMe()
      const requests: RescheduleRequest[] = []
      response.pending.forEach((request: RescheduleRequest) => {
        requests.push(request)
      })
      response.responses.forEach((request: RescheduleRequest) => {
        requests.push(request)
      })

      setmyRequests(requests)
    } catch (error) {
      errorToast(error)
    }
  }

  const getFullRequests = useCallback(async () => {
    myRequests?.forEach(async request => {
      const requestedBy = await getUserByID(request.requested_by)
      const oldEvent = await slotifyClient.GetAPICalendarEvent({
        queries: { msftID: request.oldMeeting.msftMeetingID, isICalUId: true },
      })
      const searchQeury = {
        start: request.oldMeeting.timeRangeStart,
        end: request.oldMeeting.timeRangeEnd,
      }
      const newEvent =
        request.newMeeting?.startRangeTime === '0001-01-01T00:00:00Z'
          ? null
          : {
              startRangeTime:
                request.newMeeting!.startRangeTime ?? '0001-01-01T00:00:00Z',
              endRangeTime:
                request.newMeeting!.endRangeTime ?? '0001-01-01T00:00:00Z',
              title: request.newMeeting!.title,
              duration: request.newMeeting!.meetingDuration,
              location: request.newMeeting!.location,
              attendees: await convertAttendeesToUsers(
                request.newMeeting!.attendees ?? [],
              ),
            }

      setFullRequests(prevFullRequests => ({
        ...prevFullRequests,
        [request.request_id]: {
          requestedAt: request.requested_at,
          requestedBy: requestedBy,
          status: request.status,
          searchQuery: searchQeury,
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

  const handlePendingRequestReject = async (requestID: number) => {
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
    getRescheduleRequests()
  }

  const handlePendingRequestAccept = async (
    currentFullRequest: FullRequest,
    requestID: number,
  ) => {
    const newParticipants = await convertAttendeesToUsers2(
      currentFullRequest.oldEvent.attendees,
    )
    const start = parseISO(currentFullRequest.oldEvent.startTime!)
    const end = parseISO(currentFullRequest.oldEvent.endTime!)
    const diffInMinutes = Math.round((end.getTime() - start.getTime()) / 60000)
    const candidates = [30, 60, 120]
    const closest = candidates.reduce((prev, curr) =>
      Math.abs(curr - diffInMinutes) < Math.abs(prev - diffInMinutes)
        ? curr
        : prev,
    )

    setCreateEventData({
      title: currentFullRequest.oldEvent.subject ?? '',
      duration: closest,
      participants: newParticipants,
      selectedRange: {
        start: new Date(currentFullRequest.searchQuery.start!),
        end: new Date(currentFullRequest.searchQuery.end!),
      },
      disabled: true,
      isRescheduleAccepted: true,
      isComplete: false,
      rescheduleID: requestID,
    })
    setCreateEventOpen(true)
  }

  const handleNonPendingRequest = async (
    currentFullRequest: FullRequest,
    requestID: number,
  ) => {
    // If newMeeting exists and is valid, update createEventData.
    if (
      currentFullRequest.newEvent &&
      currentFullRequest.newEvent.startRangeTime !== '0001-01-01T00:00:00Z'
    ) {
      console.log('Creating new event')
      setCreateEventData({
        title: currentFullRequest.newEvent.title,
        duration: currentFullRequest.newEvent.duration,
        participants: currentFullRequest.newEvent.attendees,
        selectedRange: {
          start: new Date(currentFullRequest.newEvent.startRangeTime ?? ''),
          end: new Date(currentFullRequest.newEvent.endRangeTime ?? ''),
        },
        disabled: false,
        isRescheduleAccepted: false,
        isComplete: true,
        rescheduleID: requestID,
      })
      setCreateEventOpen(true)
    } else {
      void (await slotifyClient.GetAPIRescheduleRequestRequestIDClose({
        params: { requestID: requestID },
      }))
      toast({
        title: 'Request closed',
      })
    }
    getRescheduleRequests()
  }

  // TODO - this can be removed since we are using full requests instead
  useEffect(() => {
    getRescheduleRequests()
  }, [])

  useEffect(() => {
    getFullRequests()
  }, [getFullRequests, myRequests])

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
          <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
            {/* Pending Requests */}
            <div className='w-full md:w-1/2'>
              <h3 className='font-medium mb-2'>Pending Requests</h3>
              <div className='h-[60vh] overflow-hidden'>
                <ScrollAreaPrimitive.Root className='h-full w-full overflow-hidden'>
                  <ScrollAreaPrimitive.Viewport className='h-full w-full rounded-[inherit]'>
                    <div className='pr-4 min-w-[400px]'>
                      {myRequests
                        ?.filter(request => request.status === 'pending')
                        .map(request => (
                          <div
                            key={request.request_id}
                            className='p-4 mb-3 duration-200 bg-yellow-50 hover:bg-yellow-100 rounded-lg'
                          >
                            <div className='space-y-3'>
                              <div>
                                <h4 className='font-medium leading-none'>
                                  {fullRequests[request.request_id]
                                    ? fullRequests[request.request_id]!.oldEvent
                                        .subject
                                    : '(No name)'}
                                </h4>
                                <p className='text-sm text-muted-foreground mt-1'>
                                  Current event:{' '}
                                  {fullRequests[request.request_id]
                                    ? format(
                                        parseISO(
                                          fullRequests[
                                            request.request_id
                                          ]!.oldEvent.startTime?.toString() ??
                                            '',
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
                                    ? fullRequests[request.request_id]!
                                        .requestedBy
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

                              <div className='flex items-center gap-2'>
                                <Button
                                  variant='outline'
                                  size='sm'
                                  className='w-full text-green-500 hover:text-green-600 hover:bg-green-50'
                                  onClick={() =>
                                    handlePendingRequestAccept(
                                      fullRequests[request.request_id]!,
                                      request.request_id,
                                    )
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
                                    handlePendingRequestReject(
                                      request.request_id,
                                    )
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
                  </ScrollAreaPrimitive.Viewport>
                  <ScrollAreaPrimitive.Scrollbar
                    className='flex select-none touch-none p-0.5 bg-slate-100 transition-colors duration-150 ease-out hover:bg-slate-200 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5'
                    orientation='vertical'
                  >
                    <ScrollAreaPrimitive.Thumb className="flex-1 bg-slate-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                  </ScrollAreaPrimitive.Scrollbar>
                  <ScrollAreaPrimitive.Scrollbar
                    className='flex select-none touch-none p-0.5 bg-slate-100 transition-colors duration-150 ease-out hover:bg-slate-200 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5'
                    orientation='horizontal'
                  >
                    <ScrollAreaPrimitive.Thumb className="flex-1 bg-slate-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                  </ScrollAreaPrimitive.Scrollbar>
                  <ScrollAreaPrimitive.Corner className='bg-slate-200' />
                </ScrollAreaPrimitive.Root>
              </div>
            </div>

            {/* Non-Pending Requests */}
            <div className='w-full md:w-1/2'>
              <h3 className='font-medium mb-2'>Past Requests</h3>
              <div className='h-[60vh] overflow-hidden'>
                <ScrollAreaPrimitive.Root className='h-full w-full overflow-hidden'>
                  <ScrollAreaPrimitive.Viewport className='h-full w-full rounded-[inherit]'>
                    <div className='pr-4 min-w-[400px]'>
                      {myRequests
                        ?.filter(request => request.status !== 'pending')
                        .map(request => (
                          <div
                            key={request.request_id}
                            className={`p-4 mb-3 duration-200 rounded-lg ${
                              request.status === 'accepted'
                                ? 'bg-green-50'
                                : 'bg-red-50'
                            }`}
                          >
                            <div className='space-y-3'>
                              <div className='flex justify-between items-start'>
                                <div>
                                  <h4 className='font-medium leading-none'>
                                    {fullRequests[request.request_id]
                                      ? fullRequests[request.request_id]!
                                          .oldEvent.subject
                                      : '(No name)'}
                                  </h4>
                                  <p className='text-sm text-muted-foreground mt-1'>
                                    Current event:{' '}
                                    {fullRequests[request.request_id]
                                      ? format(
                                          parseISO(
                                            fullRequests[
                                              request.request_id
                                            ]!.oldEvent.startTime?.toString() ??
                                              '',
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
                                      ? fullRequests[request.request_id]!
                                          .requestedBy
                                      : ''}
                                  </p>
                                </div>
                                <Button
                                  variant='outline'
                                  size='sm'
                                  className='text-red-500 hover:text-red-600 hover:bg-red-50'
                                  onClick={async () => {
                                    const currentFullRequest =
                                      fullRequests[request.request_id]
                                    if (!currentFullRequest) {
                                      return
                                    }

                                    handleNonPendingRequest(
                                      currentFullRequest,
                                      request.request_id,
                                    )
                                  }}
                                >
                                  {(fullRequests[request.request_id]?.newEvent
                                    ?.startRangeTime ??
                                    '0001-01-01T00:00:00Z') !==
                                  '0001-01-01T00:00:00Z' ? (
                                    <div>Book</div>
                                  ) : (
                                    <Trash2 className='h-4 w-4' />
                                  )}
                                </Button>
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
                  </ScrollAreaPrimitive.Viewport>
                  <ScrollAreaPrimitive.Scrollbar
                    className='flex select-none touch-none p-0.5 bg-slate-100 transition-colors duration-150 ease-out hover:bg-slate-200 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5'
                    orientation='vertical'
                  >
                    <ScrollAreaPrimitive.Thumb className="flex-1 bg-slate-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                  </ScrollAreaPrimitive.Scrollbar>
                  <ScrollAreaPrimitive.Scrollbar
                    className='flex select-none touch-none p-0.5 bg-slate-100 transition-colors duration-150 ease-out hover:bg-slate-200 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5'
                    orientation='horizontal'
                  >
                    <ScrollAreaPrimitive.Thumb className="flex-1 bg-slate-300 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                  </ScrollAreaPrimitive.Scrollbar>
                  <ScrollAreaPrimitive.Corner className='bg-slate-200' />
                </ScrollAreaPrimitive.Root>
              </div>
            </div>
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
        isRescheduleAccepted={createEventData.isRescheduleAccepted}
        isComplete={createEventData.isComplete}
        rescheduleID={createEventData.rescheduleID}
        getRescheduleEvents={getRescheduleRequests}
      />
    </>
  )
}
