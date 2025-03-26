'use client'

import { useEffect, useRef, useState } from 'react'
import {
  format,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  parseISO,
  isValid,
  addWeeks,
  subWeeks,
  isBefore,
  isAfter,
} from 'date-fns'
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import slotifyClient from '@/hooks/fetch'
import { errorToast, toast } from '@/hooks/use-toast'
import {
  CalendarEvent,
  MeetingTimeSuggestion,
  SchedulingSlotsSuccessResponse,
  User,
} from '@/types/types'

interface WeeklyCalendarProps {
  availabilityData: SchedulingSlotsSuccessResponse | null
  conflictEvents: CalendarEvent[]
  myEvents: CalendarEvent[]
  currentUser: User | null
  participants: User[]
  location: string
  eventTitle: string
  closeCreateEventDialogOpen: () => void
  isRescheduleAccepted: boolean
  isComplete: boolean
  rescheduleID: number | null
  selectedRange: { start: Date; end: Date } | null
  getRescheduleEvents?: () => Promise<void>
  availabilityLoading?: boolean
}

export function WeeklyCalendar({
  availabilityData,
  conflictEvents,
  myEvents,
  currentUser,
  participants,
  location,
  eventTitle,
  closeCreateEventDialogOpen,
  isRescheduleAccepted,
  isComplete,
  rescheduleID,
  selectedRange,
  getRescheduleEvents,
  availabilityLoading,
}: WeeklyCalendarProps) {
  console.log('location:', location)
  const [currentWeek, setCurrentWeek] = useState<Date>(new Date())
  const [selectedSuggestion, setSelectedSuggestion] =
    useState<MeetingTimeSuggestion | null>(null)
  const [selectedConflict, setSelectedConflict] =
    useState<CalendarEvent | null>(null)
  const totalHours = 24
  const viewportRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Calculate current week (Monday to Sunday)
  const weekStart = startOfWeek(currentWeek, { weekStartsOn: 1 })
  const weekEnd = endOfWeek(currentWeek, { weekStartsOn: 1 })
  const days = eachDayOfInterval({ start: weekStart, end: weekEnd })

  const prevWeek = () => setCurrentWeek(subWeeks(currentWeek, 1))
  const nextWeek = () => setCurrentWeek(addWeeks(currentWeek, 1))
  const goToToday = () => setCurrentWeek(new Date())

  // Formatting helpers
  const formatDay = (date: Date) => format(date, 'EEE')
  const formatDate = (date: Date) => format(date, 'd')
  const formatMonthYear = (date: Date) => format(date, 'MMMM yyyy')
  const getWeekNumber = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1)
    const pastDays = (date.getTime() - firstDayOfYear.getTime()) / 86400000
    return Math.ceil((pastDays + firstDayOfYear.getDay() + 1) / 7)
  }

  // Calculate fractional hour (for partial-hour positioning)
  const getHourFraction = (date: Date) => {
    const h = date.getHours()
    const m = date.getMinutes()
    return h + m / 60
  }

  // Helpers for filtering events by day
  const getSuggestionsForDay = (day: Date) => {
    if (!availabilityData || !availabilityData.meetingTimeSuggestions) return []

    return availabilityData.meetingTimeSuggestions.filter(
      (suggestion: MeetingTimeSuggestion) => {
        const suggestionStart = parseISO(suggestion.meetingTimeSlot!.start)
        if (!isValid(suggestionStart)) return false
        const dayStart = new Date(day)
        dayStart.setHours(0, 0, 0, 0)
        const dayEnd = new Date(day)
        dayEnd.setHours(23, 59, 59, 999)
        return suggestionStart >= dayStart && suggestionStart <= dayEnd
      },
    )
  }

  const getConflictEventsForDay = (day: Date) => {
    if (!conflictEvents) return []
    return conflictEvents.filter((event: CalendarEvent) => {
      const eventStart = parseISO(event.startTime!)
      if (!isValid(eventStart)) return false
      const dayStart = new Date(day)
      dayStart.setHours(0, 0, 0, 0)
      const dayEnd = new Date(day)
      dayEnd.setHours(23, 59, 59, 999)
      return eventStart >= dayStart && eventStart <= dayEnd
    })
  }

  const getMyEventsForDay = (day: Date) => {
    if (!myEvents) return []
    return myEvents.filter((event: CalendarEvent) => {
      const eventStart = parseISO(event.startTime!)
      if (!isValid(eventStart)) return false
      const dayStart = new Date(day)
      dayStart.setHours(0, 0, 0, 0)
      const dayEnd = new Date(day)
      dayEnd.setHours(23, 59, 59, 999)
      return eventStart >= dayStart && eventStart <= dayEnd
    })
  }

  /**
   * Extract text content from an HTML string.
   */
  function extractTextFromHTML(htmlString: string) {
    if (!htmlString) return ''
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlString, 'text/html')
    return (doc.body.textContent || '').trim()
  }

  // Function to create a new event based on a suggestion.
  // This builds a CalendarEvent object per your schema and calls the API.
  const createEvent = async (start: string, end: string) => {
    try {
      setIsLoading(true)
      if (rescheduleID) {
        if (isRescheduleAccepted) {
          void (await slotifyClient.PatchAPIRescheduleRequestRequestIDAccept(
            {
              newStartTime: start,
              newEndTime: end,
            },
            {
              params: {
                requestID: rescheduleID,
              },
            },
          ))
          toast({
            title: 'Successfully rescheduled meeting',
          })
          if (getRescheduleEvents) {
            void (await getRescheduleEvents())
          }
        } else if (isComplete) {
          const attendees = participants.map(user => ({
            email: user.email,
            attendeeType: 'required' as const,
            responseStatus: 'none' as const,
          }))

          const calendarEvent: CalendarEvent = {
            attendees,
            locations: [],
            subject: eventTitle ? eventTitle : 'My New Meeting',
            body: 'Meeting booked via Slotify AI',
            startTime: start,
            endTime: end,
            isCancelled: false,
            organizer: currentUser?.email || 'user@example.com',
            joinURL: null,
            webLink: '',
          }

          void (await slotifyClient.PostAPIRescheduleRequestRequestIDComplete(
            calendarEvent,
            {
              params: {
                requestID: rescheduleID,
              },
            },
          ))
        }
      } else {
        const attendees = participants.map(user => ({
          email: user.email,
          attendeeType: 'required' as const,
          responseStatus: 'none' as const,
        }))

        const calendarEvent: CalendarEvent = {
          attendees,
          locations: [],
          subject: eventTitle ? eventTitle : 'My New Meeting',
          body: 'Meeting booked via Slotify AI',
          startTime: start,
          endTime: end,
          isCancelled: false,
          organizer: currentUser?.email || 'user@example.com',
          joinURL: null,
          webLink: '',
        }
        void (await slotifyClient.PostAPICalendarMe(calendarEvent))
        toast({
          title: 'Successfully scheduled meeting',
        })
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error('Error creating event:', error)
      errorToast(error)
    }
    closeCreateEventDialogOpen()
  }

  useEffect(() => {
    if (viewportRef.current) {
      const el = viewportRef.current
      const targetScrollTop = el.scrollHeight * 0.375
      const duration = 500 // duration in ms
      const startScrollTop = el.scrollTop
      const distance = targetScrollTop - startScrollTop
      let startTime: number | null = null

      const step = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime
        }
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1) // linear progress
        el.scrollTop = startScrollTop + distance * progress
        if (progress < 1) {
          requestAnimationFrame(step)
        }
      }
      requestAnimationFrame(step)
    }
  }, [])

  return (
    <div className='w-full h-full overflow-hidden'>
      {/* Header with week info and navigation */}
      <div className='flex items-center justify-between p-4 border-b max-h-[5vh]'>
        <div className='font-medium h-full'>
          {formatMonthYear(weekStart)} - Week {getWeekNumber(weekStart)}
        </div>
        <div className='flex items-center gap-2 h-full'>
          <Button variant='outline' size='sm' onClick={goToToday}>
            Today
          </Button>
          <Button variant='outline' size='icon' onClick={prevWeek}>
            <ChevronLeft className='h-4 w-4' />
          </Button>
          <Button variant='outline' size='icon' onClick={nextWeek}>
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </div>

      {/* Day Header Row */}
      <div className='grid grid-cols-[60px_repeat(7,1fr)] pl-5 h-[5vh] overflow-hidden'>
        <div className='border-b'></div>
        {days.map((day, index) => (
          <div
            key={index}
            className={cn(
              'text-center p-1 border-b',
              index < 6 ? 'border-r' : '',
            )}
          >
            <div
              className={cn(
                format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
                  ? 'bg-focusColor/90 text-white rounded-xl'
                  : '',
              )}
            >
              <div className='font-medium text-xs'>{formatDay(day)}</div>
              <div className='text-xs font-bold'>{formatDate(day)}</div>
            </div>
          </div>
        ))}
      </div>

      {availabilityLoading ? (
        <div className='flex items-center justify-center h-[66vh] space-x-2'>
          <Loader2 className='h-6 w-6 animate-spin' />
          <span>Loading...</span>
        </div>
      ) : (
        <ScrollArea.Root className='w-full h-[60vh] overflow-hidden rounded'>
          <ScrollArea.Viewport
            ref={viewportRef}
            className='w-full h-full relative'
          >
            <div className='grid grid-cols-[auto_1fr]'>
              {/* Time Label Column */}
              <div
                className='relative border-r w-20'
                style={{
                  display: 'grid',
                  gridTemplateRows: `repeat(${totalHours}, 1fr)`,
                }}
              >
                {Array.from({ length: totalHours }).map((_, i) => {
                  const timeLabel = format(new Date(0, 0, 0, i), 'HH:mm')
                  return (
                    <div
                      key={i}
                      className='text-xs flex justify-center items-start h-20'
                    >
                      {timeLabel}
                    </div>
                  )
                })}
              </div>

              {/* Day Columns */}
              <div className='grid grid-cols-7 divide-x relative'>
                {days.map(day => {
                  const suggestions = getSuggestionsForDay(day)
                  const conflicts = getConflictEventsForDay(day)
                  const myDayEvents = getMyEventsForDay(day)
                  return (
                    <div
                      key={day.toString()}
                      className='relative'
                      style={{
                        display: 'grid',
                        gridTemplateRows: `repeat(${totalHours}, 1fr)`,
                      }}
                    >
                      {/* Optional Hour Lines */}
                      {Array.from({ length: totalHours }).map((_, i) => (
                        <div
                          key={i}
                          className='absolute left-0 right-0 border-t border-dashed border-muted-foreground opacity-30'
                          style={{ top: `${(i / totalHours) * 100}%` }}
                        />
                      ))}
                      {/* Render available suggestions (green) */}
                      {suggestions.map(
                        (suggestion: MeetingTimeSuggestion, index: number) => {
                          const suggestionStart = parseISO(
                            suggestion.meetingTimeSlot!.start,
                          )
                          const suggestionEnd = parseISO(
                            suggestion.meetingTimeSlot!.end,
                          )
                          if (
                            !isValid(suggestionStart) ||
                            !isValid(suggestionEnd)
                          )
                            return null

                          const dayStart = new Date(day)
                          dayStart.setHours(0, 0, 0, 0)
                          const dayEnd = new Date(day)
                          dayEnd.setHours(23, 59, 59, 999)
                          const actualStart = isBefore(
                            suggestionStart,
                            dayStart,
                          )
                            ? dayStart
                            : suggestionStart
                          const actualEnd = isAfter(suggestionEnd, dayEnd)
                            ? dayEnd
                            : suggestionEnd

                          const startFraction = getHourFraction(actualStart)
                          const endFraction = getHourFraction(actualEnd)
                          const topPercent = (startFraction / totalHours) * 100
                          const heightPercent =
                            ((endFraction - startFraction) / totalHours) * 100

                          return (
                            <div
                              key={`suggestion-${index}`}
                              className='absolute p-1 rounded-md bg-green-300 text-green-800 text-xs cursor-pointer duration-200 ease-in transform hover:scale-110 font-bold hover:bg-green-400'
                              style={{
                                top: `${topPercent}%`,
                                height: `${heightPercent}%`,
                                left: '2px',
                                right: '2px',
                              }}
                              onClick={() => setSelectedSuggestion(suggestion)}
                            >
                              <div>
                                Rating:{' '}
                                {suggestion.confidence
                                  ? `${parseInt(suggestion.confidence.toString(), 10)}%`
                                  : ''}
                              </div>
                            </div>
                          )
                        },
                      )}
                      {/* Render user's own events (neutral color) */}
                      {myDayEvents.map(
                        (myEvent: CalendarEvent, index: number) => {
                          const eventStart = parseISO(myEvent.startTime!)
                          const eventEnd = parseISO(myEvent.endTime!)
                          if (!isValid(eventStart) || !isValid(eventEnd))
                            return null

                          const dayStart = new Date(day)
                          dayStart.setHours(0, 0, 0, 0)
                          const dayEnd = new Date(day)
                          dayEnd.setHours(23, 59, 59, 999)
                          const actualStart = isBefore(eventStart, dayStart)
                            ? dayStart
                            : eventStart
                          const actualEnd = isAfter(eventEnd, dayEnd)
                            ? dayEnd
                            : eventEnd

                          const startFraction = getHourFraction(actualStart)
                          const endFraction = getHourFraction(actualEnd)
                          const topPercent = (startFraction / totalHours) * 100
                          const heightPercent =
                            ((endFraction - startFraction) / totalHours) * 100

                          return (
                            <div
                              key={`myEvent-${index}`}
                              className='absolute p-1 rounded-md bg-gray-300 text-gray-900 text-xs'
                              style={{
                                top: `${topPercent}%`,
                                height: `${heightPercent}%`,
                                left: '2px',
                                right: '2px',
                              }}
                            >
                              <div className='font-medium truncate'>
                                {myEvent.subject
                                  ? myEvent.subject
                                  : '(No name)'}
                              </div>
                              <div className='text-[0.7rem] truncate'>
                                {extractTextFromHTML(myEvent.body!)}
                              </div>
                            </div>
                          )
                        },
                      )}
                      {/* Render conflict events (red) */}
                      {conflicts
                        .filter(
                          (conflict: CalendarEvent) =>
                            !conflict.attendees.some(
                              attendee => attendee.email === currentUser!.email,
                            ),
                        )
                        .map((conflict: CalendarEvent, index: number) => {
                          const eventStart = parseISO(conflict.startTime!)
                          const eventEnd = parseISO(conflict.endTime!)
                          if (!isValid(eventStart) || !isValid(eventEnd))
                            return null

                          const dayStart = new Date(day)
                          dayStart.setHours(0, 0, 0, 0)
                          const dayEnd = new Date(day)
                          dayEnd.setHours(23, 59, 59, 999)
                          const actualStart = isBefore(eventStart, dayStart)
                            ? dayStart
                            : eventStart
                          const actualEnd = isAfter(eventEnd, dayEnd)
                            ? dayEnd
                            : eventEnd

                          const startFraction = getHourFraction(actualStart)
                          const endFraction = getHourFraction(actualEnd)
                          const topPercent = (startFraction / totalHours) * 100
                          const heightPercent =
                            ((endFraction - startFraction) / totalHours) * 100

                          return (
                            <div
                              key={`conflict-${index}`}
                              className='absolute p-1 rounded-md bg-red-300 text-red-800 text-xs cursor-pointer duration-200 ease-in transform hover:scale-110 font-bold hover:bg-red-400 hover:text-white'
                              style={{
                                top: `${topPercent}%`,
                                height: `${heightPercent}%`,
                                left: '2px',
                                right: '2px',
                              }}
                              onClick={() => {
                                setSelectedConflict(conflict)
                              }}
                            >
                              <div className='font-medium'>Conflict</div>
                            </div>
                          )
                        })}
                    </div>
                  )
                })}
              </div>
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            className='flex touch-none select-none bg-gray-100 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-gray-200 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col'
            orientation='vertical'
          >
            <ScrollArea.Thumb className='relative flex-1 rounded-[10px] bg-gray-500 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-11 before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2' />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner className='bg-focusColor' />
        </ScrollArea.Root>
      )}

      {/* Modal to confirm booking a meeting from a suggestion */}
      {selectedSuggestion && (
        <Dialog open={true} onOpenChange={() => setSelectedSuggestion(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Book Meeting</DialogTitle>
            </DialogHeader>
            <div>
              <p>
                Book meeting from{' '}
                {format(
                  parseISO(selectedSuggestion.meetingTimeSlot!.start),
                  'PPpp',
                )}{' '}
                to{' '}
                {format(
                  parseISO(selectedSuggestion.meetingTimeSlot!.end),
                  'PPpp',
                )}
                ?
              </p>
              <div className='flex justify-center gap-5 mt-4'>
                <Button
                  variant='outline'
                  onClick={() => setSelectedSuggestion(null)}
                >
                  Cancel
                </Button>
                <Button
                  className='bg-focusColor hover:bg-focusColor/90 pr-2'
                  onClick={async () => {
                    setIsLoading(true)
                    await createEvent(
                      selectedSuggestion.meetingTimeSlot!.start,
                      selectedSuggestion.meetingTimeSlot!.end,
                    )
                    setIsLoading(false)
                    setSelectedSuggestion(null)
                  }}
                >
                  Confirm
                  {isLoading && <Loader2 className='h-6 w-6 animate-spin' />}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Modal to confirm reschdule request */}
      {selectedConflict && !isRescheduleAccepted && !isComplete && (
        <Dialog open={true} onOpenChange={() => setSelectedConflict(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Reschedule Request</DialogTitle>
            </DialogHeader>
            <div>
              <p>
                Reschedule meeting from{' '}
                {format(parseISO(selectedConflict.startTime!), 'PPpp')} to{' '}
                {format(parseISO(selectedConflict.endTime!), 'PPpp')}?
              </p>
              <p>
                Participants:{' '}
                {selectedConflict.attendees
                  ?.map(attendee => attendee.email)
                  .join(', ')}
              </p>
              <p>
                Range of times:{' '}
                {selectedRange ? format(selectedRange.start, 'PPpp') : 'N/A'} to{' '}
                {selectedRange ? format(selectedRange.end, 'PPpp') : 'N/A'}
              </p>
              <div className='flex justify-center gap-5 mt-4'>
                <Button
                  variant='outline'
                  onClick={() => setSelectedConflict(null)}
                >
                  Cancel
                </Button>
                <Button
                  className='bg-focusColor hover:bg-focusColor/90 pr-2'
                  onClick={async () => {
                    setIsLoading(true)
                    const repsonse =
                      await slotifyClient.PostAPIRescheduleRequestReplace({
                        newMeeting: {
                          title: selectedConflict.subject!,
                          meetingDuration: 60,
                          attendees: participants.map(user => user.id),
                          location: '',
                          startRangeTime: selectedRange
                            ? selectedRange.start.toISOString()
                            : '',
                          endRangeTime: selectedRange
                            ? selectedRange.end.toISOString()
                            : '',
                        },
                        oldMeeting: {
                          ownerEmail: selectedConflict.organizer!,
                          msftMeetingID: selectedConflict.iCalUId!,
                        },
                      })
                    setIsLoading(false)
                    if (repsonse) {
                      toast({
                        title: 'Reschedule request sent',
                      })
                    } else {
                      errorToast('Error sending reschedule request')
                    }
                    setSelectedConflict(null)
                  }}
                >
                  Confirm
                  {isLoading && <Loader2 className='h-6 w-6 animate-spin' />}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
