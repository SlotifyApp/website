'use client'

import { useEffect, useState } from 'react'
import { CreateEventDialog } from '@/components/calendar/create-event-dialog'
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
import Link from 'next/link'
import slotifyClient from '@/hooks/fetch'
import { errorToast } from '@/hooks/use-toast'

export function CalendarOverview() {
  const [isDayEventsDialogOpen, setIsDayEventsDialogOpen] = useState(false)
  const [isCreateEventDialogOpen, setIsCreateEventDialogOpen] = useState(false)
  const [calendar, setCalendar] = useState<Array<CalendarEvent>>([])
  const [currentWeek, setCurrentWeek] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const weekStart = startOfWeek(currentWeek, { weekStartsOn: 1 }) // Monday
  const weekEnd = endOfWeek(currentWeek, { weekStartsOn: 1 })
  const days = eachDayOfInterval({ start: weekStart, end: weekEnd })

  // We’ll display rows for 24 hours.
  const totalHours = 24

  const handlePreviousWeek = () => setCurrentWeek(subWeeks(currentWeek, 1))
  const handleNextWeek = () => setCurrentWeek(addWeeks(currentWeek, 1))
  const handleToday = () => setCurrentWeek(new Date())

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
        console.log(calenData)
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
                onClick={() => setIsCreateEventDialogOpen(true)}
                className='bg-focusColor hover:bg-focusColor/90'
              >
                <Plus className='h-4 w-4 mr-2' />
                Create Event
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
          <ScrollArea className='h-[66vh]'>
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
                            className='absolute p-2 rounded-md bg-accent hover:bg-gray-200 text-accent-foreground cursor-pointer overflow-hidden w-full hover:text-focusColor font-medium duration-300 hover:font-bold hover:scale-105'
                            style={{
                              top: `${eventTop}%`,
                              height: `${eventHeight}%`,
                              zIndex: 10,
                            }}
                          >
                            <div className='text-sm truncate'>
                              {event.subject}
                            </div>
                            <div className='text-xs truncate overflow-hidden'>
                              {event.body}
                            </div>
                            <div className='text-xs truncate opacity-90 overflow-hidden'>
                              {event.locations?.[0]?.name}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <CreateEventDialog
        open={isCreateEventDialogOpen}
        onOpenChangeAction={setIsCreateEventDialogOpen}
        selectedDate={selectedDate}
      />

      <Dialog
        open={isDayEventsDialogOpen}
        onOpenChange={setIsDayEventsDialogOpen}
      >
        <DialogContent className='max-w-3xl'>
          <ScrollArea className='h-[500px] mt-4'>
            {selectedEvent && (
              <div className='space-y-4'>
                <DialogHeader>
                  <DialogTitle>{selectedEvent.subject}</DialogTitle>
                  {selectedEvent.body && (
                    <DialogDescription>{selectedEvent.body}</DialogDescription>
                  )}
                </DialogHeader>
                <div className='space-y-2'>
                  <div className='flex items-center text-sm'>
                    <Clock className='mr-2 h-4 w-4' />
                    {selectedEvent.startTime && selectedEvent.endTime && (
                      <>
                        {format(parseISO(selectedEvent.startTime), 'HH:mm')} -{' '}
                        {format(parseISO(selectedEvent.endTime), 'HH:mm')}
                      </>
                    )}
                  </div>
                  {selectedEvent.locations?.map(loc => (
                    <div key={loc.id} className='flex items-center text-sm'>
                      <MapPin className='mr-2 h-4 w-4' />
                      {loc.name}
                    </div>
                  ))}
                  {selectedEvent.organizer && (
                    <div className='flex items-center text-sm'>
                      <User className='mr-2 h-4 w-4' />
                      Organizer: {selectedEvent.organizer}
                    </div>
                  )}
                  {selectedEvent.attendees?.length ? (
                    <div className='flex items-start text-sm'>
                      <Users className='mr-2 h-4 w-4 mt-1' />
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
                <div className='mt-4 space-y-2'>
                  {selectedEvent.joinURL && (
                    <Button asChild>
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
                    <Button asChild>
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

                  <Button variant='destructive'>Reschedule</Button>
                </div>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}
