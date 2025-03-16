'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  format,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  parseISO,
  isSameDay,
  isValid,
  addWeeks,
  subWeeks,
  isBefore,
  isAfter,
  isWithinInterval,
} from 'date-fns'
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Plus,
  Repeat,
  Sparkles,
  User,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CalendarEvent } from '@/types/types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { ScrollArea } from './ui/scroll-area'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import Link from 'next/link'
import slotifyClient from '@/hooks/fetch'
import { errorToast, toast } from '@/hooks/use-toast'
import { CreateManualEventDialog } from '@/components/calendar/create-manual-event-dialog'
import { CreateEvent } from '@/components/calendar/create-event'

export function CalendarOverview() {
  const [isDayEventsDialogOpen, setIsDayEventsDialogOpen] = useState(false)
  const [calendar, setCalendar] = useState<Array<CalendarEvent>>([])
  const [currentWeek, setCurrentWeek] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const [isManualCreateEventOpen, setisManualCreateEventOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  // new create event dialogue vars
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false)

  const weekStart = startOfWeek(currentWeek, { weekStartsOn: 1 }) // Monday
  const weekEnd = endOfWeek(currentWeek, { weekStartsOn: 1 })
  const days = eachDayOfInterval({ start: weekStart, end: weekEnd })

  // Display rows for 24 hours.
  const totalHours = 24

  const handlePreviousWeek = () => setCurrentWeek(subWeeks(currentWeek, 1))
  const handleNextWeek = () => setCurrentWeek(addWeeks(currentWeek, 1))
  const handleToday = () => setCurrentWeek(new Date())

  const viewportRef = useRef<HTMLDivElement>(null)

  const closeCreateEventDialogOpen = useCallback(() => {
    setIsCreateEventOpen(false)
  }, [setIsCreateEventOpen])

  useEffect(() => {
    if (viewportRef.current) {
      const el = viewportRef.current
      el.scrollTop = el.scrollHeight * 0.375
    }
  }, [])

  useEffect(() => {
    const fetchCalendar = async () => {
      const startFormatted = weekStart.toISOString().slice(0, 19) + 'Z'
      const endFormatted = weekEnd.toISOString().slice(0, 19) + 'Z'
      try {
        const calenData = await slotifyClient.GetAPICalendarMe({
          queries: {
            start: startFormatted,
            end: endFormatted,
          },
        })
        setCalendar(calenData)
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
    }
    fetchCalendar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWeek])

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event)
    setIsDayEventsDialogOpen(true)
  }

  /**
   * Checks if an event overlaps the given day (even partially).
   */
  function eventOverlapsDay(event: CalendarEvent, day: Date) {
    if (!event.startTime || !event.endTime) return false
    const start = parseISO(event.startTime)
    const end = parseISO(event.endTime)
    if (!isValid(start) || !isValid(end)) return false

    const dayStart = new Date(day)
    dayStart.setHours(0, 0, 0, 0)
    const dayEnd = new Date(day)
    dayEnd.setHours(23, 59, 59, 999)

    return (
      isWithinInterval(start, { start: dayStart, end: dayEnd }) ||
      isWithinInterval(end, { start: dayStart, end: dayEnd }) ||
      (isBefore(start, dayStart) && isAfter(end, dayEnd))
    )
  }

  /**
   * Return all events that overlap this specific day.
   */
  function getEventsForDay(day: Date) {
    return calendar.filter(event => eventOverlapsDay(event, day))
  }

  /**
   * Convert date/time to a “fractional hour” if you want partial-hour alignment.
   * For simplicity, we can just use getHours() as an integer.
   */
  function getHourFraction(date: Date) {
    const h = date.getHours()
    const m = date.getMinutes()
    return h + m / 60
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

  return (
    <div>
      <Card>
        <CardHeader>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <h2 className='text-lg font-semibold'>
                {format(weekStart, 'MMMM yyyy')}
              </h2>
              <span className='text-muted-foreground'>
                week {format(weekStart, 'w')}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Button
                onClick={() => {
                  setIsCreateEventOpen(!isCreateEventOpen)
                  console.log('Create super event: ', isCreateEventOpen)
                }}
                className='bg-focusColor hover:bg-focusColor/90'
              >
                <Sparkles className='h-4 w-4 mr-2' />
                Create super event
              </Button>

              <Button
                onClick={() => {
                  setSelectedDate(new Date())
                  setisManualCreateEventOpen(true)
                }}
                variant={'outline'}
              >
                <Plus className='h-4 w-4 mr-2' />
                Create Event Manually
              </Button>

              <Button variant='outline' onClick={handleToday}>
                Today
              </Button>

              <Button
                variant='outline'
                size='icon'
                onClick={handlePreviousWeek}
              >
                <ChevronLeft className='h-4 w-4' />
              </Button>
              <Button variant='outline' size='icon' onClick={handleNextWeek}>
                <ChevronRight className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className='p-0'>
          <ScrollAreaPrimitive.Root className='h-[66vh]'>
            <ScrollAreaPrimitive.Viewport
              className='h-full w-full'
              ref={viewportRef}
            >
              {/* First, render day headers in a 7-column grid */}
              <div className='grid grid-cols-[auto_1fr]'>
                {/* Empty top-left corner or label for "Time" */}
                <div className='border-b' />

                {/* Day headers (7 columns) */}
                <div className='grid grid-cols-7 divide-x border-b pl-20'>
                  {days.map(day => (
                    <div key={day.toString()} className='h-14 p-2 text-center'>
                      <div className='text-sm font-medium'>
                        {format(day, 'EEE')}
                      </div>
                      <div
                        className={cn(
                          'text-sm mt-1 w-6 h-6 mx-auto flex items-center justify-center rounded-full',
                          isSameDay(day, new Date()) &&
                            'bg-focusColor text-primary-foreground',
                        )}
                      >
                        {format(day, 'd')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main area: 
                - Left column for hours (24 rows)
                - Right: 7 columns for days (each 24 rows)
            */}
              <div className='grid grid-cols-[auto_1fr]'>
                {/* Left time column */}
                <div
                  className='relative border-r w-20'
                  style={{
                    display: 'grid',
                    gridTemplateRows: `repeat(${totalHours}, 1fr)`,
                  }}
                >
                  {Array.from({ length: totalHours }, (_, i) => {
                    // Could also display half-hour marks if desired.
                    const timeLabel = format(
                      new Date(0, 0, 0, i), // any day, just hours = i
                      'HH:mm',
                    )
                    return (
                      <div
                        key={i}
                        style={{
                          gridRowStart: i + 1,
                          gridRowEnd: i + 2,
                        }}
                        className='text-xs flex justify-center items-start h-20'
                      >
                        {timeLabel}
                      </div>
                    )
                  })}
                </div>

                {/* 7-day columns */}
                <div className='grid grid-cols-7 divide-x'>
                  {days.map(day => {
                    const eventsForDay = getEventsForDay(day)
                    return (
                      <div
                        key={day.toString()}
                        className='relative'
                        style={{
                          // 24 rows for the day
                          display: 'grid',
                          gridTemplateRows: `repeat(${totalHours}, 1fr)`,
                        }}
                      >
                        {/* Optional horizontal lines for each hour */}
                        {Array.from({ length: totalHours }, (_, i) => (
                          <div
                            key={i}
                            className='absolute left-0 right-0 border-t border-dashed border-muted-foreground opacity-30'
                            style={{
                              top: `${(i / totalHours) * 100}%`,
                              zIndex: 0, // Ensure lines stay in the background
                            }}
                          />
                        ))}

                        {/* Render each event once, spanning rows */}
                        {eventsForDay.map(event => {
                          if (!event.startTime || !event.endTime) return null
                          const eventStart = parseISO(event.startTime)
                          const eventEnd = parseISO(event.endTime)
                          if (!isValid(eventStart) || !isValid(eventEnd))
                            return null

                          // Clamp the event to the day
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

                          // Get fractional hours
                          const startHour = getHourFraction(actualStart)
                          const endHour = getHourFraction(actualEnd)

                          // Calculate position
                          const eventTop = (startHour / totalHours) * 100
                          const eventHeight =
                            ((endHour - startHour) / totalHours) * 100

                          return (
                            <div
                              key={event.id}
                              onClick={() => handleEventClick(event)}
                              className='absolute p-2 rounded-md bg-accent hover:bg-gray-200 text-accent-foreground cursor-pointer overflow-hidden w-full hover:text-focusColor font-medium duration-300 hover:font-bold hover:scale-105 border'
                              style={{
                                top: `${eventTop}%`,
                                height: `${eventHeight}%`,
                                zIndex: 10,
                              }}
                            >
                              <div className='text-sm truncate'>
                                {event.subject
                                  ? event.subject.charAt(0).toUpperCase() +
                                    event.subject.slice(1)
                                  : '(No Name)'}
                              </div>
                              {event.body ? (
                                <div className='text-xs truncate overflow-hidden text-gray-500 font-normal'>
                                  {extractTextFromHTML(
                                    event.body?.toString() || '',
                                  )}
                                </div>
                              ) : null}
                              {event.locations?.length ? (
                                <div className='flex flex-row items-center'>
                                  <MapPin className='mr-2 h-4 w-4 text-focusColor' />
                                  <div className='text-xs truncate opacity-90 overflow-hidden text-black font-normal'>
                                    {event.locations?.[0]?.name}
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}
                </div>
              </div>
            </ScrollAreaPrimitive.Viewport>
            <ScrollAreaPrimitive.Scrollbar
              className='flex touch-none select-none bg-gray-100 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-gray-200 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col'
              orientation='vertical'
            >
              <ScrollAreaPrimitive.Thumb className='relative flex-1 rounded-[10px] bg-gray-500 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-11 before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2' />
            </ScrollAreaPrimitive.Scrollbar>
            <ScrollAreaPrimitive.Corner className='bg-focusColor' />
          </ScrollAreaPrimitive.Root>
        </CardContent>
      </Card>

      <CreateManualEventDialog
        open={isManualCreateEventOpen}
        onOpenChangeAction={setisManualCreateEventOpen}
        selectedDate={selectedDate}
      />

      <CreateEvent
        open={isCreateEventOpen}
        onOpenChangeAction={setIsCreateEventOpen}
        closeCreateEventDialogOpenAction={closeCreateEventDialogOpen}
      />

      <Dialog
        open={isDayEventsDialogOpen}
        onOpenChange={setIsDayEventsDialogOpen}
      >
        <DialogContent className='max-w-3xl min-h-[400px]'>
          {selectedEvent && (
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col'>
                <DialogHeader className='mb-5'>
                  <DialogTitle className='mb-4'>
                    {selectedEvent.subject
                      ? selectedEvent.subject.charAt(0).toUpperCase() +
                        selectedEvent.subject.slice(1)
                      : '(No Name)'}
                  </DialogTitle>
                  {selectedEvent.body && (
                    <ScrollArea className='h-[100px] pb-3 border-b'>
                      <DialogDescription className='pb-4 whitespace-pre-wrap break-words'>
                        {extractTextFromHTML(selectedEvent.body)}
                      </DialogDescription>
                    </ScrollArea>
                  )}
                </DialogHeader>
                <div className='space-y-2 pb-5 mb-10 border-b'>
                  <div className='flex items-center text-sm'>
                    <Clock className='mr-2 h-4 w-4 text-focusColor' />
                    {selectedEvent.startTime && selectedEvent.endTime && (
                      <>
                        {format(parseISO(selectedEvent.startTime), 'HH:mm')} -{' '}
                        {format(parseISO(selectedEvent.endTime), 'HH:mm')}
                      </>
                    )}
                  </div>
                  {selectedEvent.locations?.map(loc => (
                    <div key={loc.id} className='flex items-center text-sm'>
                      <MapPin className='mr-2 h-4 w-4 text-focusColor' />
                      {loc.name}
                    </div>
                  ))}
                  {selectedEvent.organizer && (
                    <div className='flex items-center text-sm'>
                      <User className='mr-2 h-4 w-4 text-focusColor' />
                      Organizer: {selectedEvent.organizer}
                    </div>
                  )}
                  {selectedEvent.attendees?.length ? (
                    <div className='flex items-start text-sm'>
                      <Users className='mr-2 h-4 w-4 mt-1 text-focusColor' />
                      <div>
                        <div>Attendees:</div>
                        <ul className='list-disc list-inside pl-4'>
                          {selectedEvent.attendees.map((attendee, index) => (
                            <li key={index}>
                              {attendee.email || attendee.attendeeType} (
                              {attendee.responseStatus})
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className='flex flex-row justify-between mb-5 pl-20 pr-20'>
                {selectedEvent.joinURL && (
                  <Button
                    asChild
                    className='bg-focusColor hover:bg-focusColor/90'
                  >
                    <Link
                      href={selectedEvent.joinURL}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Calendar className='mr-2 h-4 w-4' />
                      Join Meeting
                    </Link>
                  </Button>
                )}
                {selectedEvent.webLink && (
                  <Button
                    asChild
                    className='bg-focusColor hover:bg-focusColor/90'
                  >
                    <Link
                      href={selectedEvent.webLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Calendar className='mr-2 h-4 w-4' />
                      View In Outlook
                    </Link>
                  </Button>
                )}

                <Button
                  variant='destructive'
                  onClick={() => {
                    toast({
                      title: 'Reschedule sent',
                      description: 'Sent reschedule request to the organizer',
                    })
                    setIsDayEventsDialogOpen(false)
                  }}
                >
                  <div className='flex justify-center items-center'>
                    <Repeat className='mr-2 h-4 w-4' />
                    Reschedule
                  </div>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
