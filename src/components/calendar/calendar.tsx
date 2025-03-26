'use client'

import { useEffect, useState } from 'react'
import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  startOfWeek,
  endOfWeek,
  isToday,
  isSameDay,
  isValid,
  parseISO,
} from 'date-fns'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { CreateManualEventDialog } from '@/components/calendar/create-manual-event-dialog'
import { DayEventsDialog } from '@/components/calendar/day-events-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import slotifyClient from '@/hooks/fetch'
import { CalendarEvent } from '@/types/types'
import { errorToast } from '@/hooks/use-toast'
import { ChevronLeft, ChevronRight, Loader2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CreateEvent } from './create-event'

export function DisplayCalendar() {
  const [calendar, setCalendar] = useState<Array<CalendarEvent>>([])
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const [isManualCreateEventOpen, setisManualCreateEventOpen] = useState(false)
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false)
  const [isDayEventsDialogOpen, setIsDayEventsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchCalendar = async () => {
      setIsLoading(true)
      const end = new Date(currentMonth)
      end.setMonth(currentMonth.getMonth() + 1)

      const startFormatted = currentMonth.toISOString().slice(0, 19) + 'Z'
      const endFormatted = end.toISOString().slice(0, 19) + 'Z'

      try {
        const calendarData = await slotifyClient.GetAPICalendarMe({
          queries: {
            start: startFormatted,
            end: endFormatted,
          },
        })
        setCalendar(calendarData)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
    }

    fetchCalendar()
  }, [currentMonth])

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const days = eachDayOfInterval({ start: startDate, end: endDate })

  const getEventsForDay = (date: Date) => {
    return calendar.filter(
      event =>
        event.startTime &&
        isValid(parseISO(event.startTime)) &&
        isSameDay(parseISO(event.startTime), date),
    )
  }

  const handlePreviousMonth = () =>
    setCurrentMonth(prev => (isValid(prev) ? subMonths(prev, 1) : new Date()))
  const handleNextMonth = () =>
    setCurrentMonth(prev => (isValid(prev) ? addMonths(prev, 1) : new Date()))
  const handleToday = () => setCurrentMonth(new Date())

  const formattedMonth = isValid(currentMonth)
    ? format(currentMonth, 'MMMM yyyy')
    : 'Invalid Date'

  function handleManualCreateEvent(date: Date) {
    setSelectedDate(date)
    setisManualCreateEventOpen(true)
  }

  return (
    <div>
      <header className='border-b mb-4'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='text-lg font-semibold'>{formattedMonth}</div>
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

            <Button variant='outline' onClick={handleToday}>
              Today
            </Button>
            <div className='flex items-center gap-1'>
              <Button
                variant='outline'
                size='icon'
                onClick={handlePreviousMonth}
              >
                <ChevronLeft className='h-4 w-4' />
              </Button>
              <Button variant='outline' size='icon' onClick={handleNextMonth}>
                <ChevronRight className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence mode='wait'>
        <motion.div
          key={currentMonth.toISOString()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {isLoading ? (
            <div className='flex items-center justify-center h-[66vh] space-x-2'>
              <Loader2 className='h-6 w-6 animate-spin' />
              <span>Loading...</span>
            </div>
          ) : (
            <div className='grid grid-cols-7 gap-px bg-muted rounded-lg overflow-hidden'>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div
                  key={day}
                  className='bg-muted-foreground/5 p-3 text-center text-sm font-medium'
                >
                  {day}
                </div>
              ))}
              {days.map(day => {
                const dayEvents = getEventsForDay(day)
                return (
                  <div
                    key={day.toString()}
                    className={cn(
                      'min-h-[120px] bg-card p-2 relative',
                      !isSameMonth(day, currentMonth) &&
                        'bg-muted-foreground/5',
                      'hover:bg-accent cursor-pointer',
                    )}
                    onClick={() => {
                      setSelectedDate(day)
                      setSelectedEvent(null)
                      setIsDayEventsDialogOpen(true)
                    }}
                  >
                    <time
                      dateTime={format(day, 'yyyy-MM-dd')}
                      className={cn(
                        'font-medium',
                        isToday(day) &&
                          'bg-focusColor text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center',
                      )}
                    >
                      {format(day, 'd')}
                    </time>
                    <div className='mt-2 space-y-1'>
                      {dayEvents.slice(0, 2).map(event => (
                        <Badge
                          key={event.id}
                          variant='secondary'
                          className='block truncate text-xs cursor-pointer'
                          onClick={e => {
                            e.stopPropagation()
                            setSelectedDate(day)
                            setSelectedEvent(event)
                            setIsDayEventsDialogOpen(true)
                          }}
                        >
                          {event.startTime &&
                            format(parseISO(event.startTime), 'HH:mm')}{' '}
                          {event.subject ? event.subject : '(No Name)'}
                        </Badge>
                      ))}
                      {dayEvents.length > 2 && (
                        <Badge
                          variant='outline'
                          className='block truncate text-xs'
                        >
                          +{dayEvents.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <CreateManualEventDialog
        open={isManualCreateEventOpen}
        onOpenChangeAction={setisManualCreateEventOpen}
        selectedDate={selectedDate}
      />

      <CreateEvent
        open={isCreateEventOpen}
        onOpenChangeAction={setIsCreateEventOpen}
        closeCreateEventDialogOpen={() => setIsCreateEventOpen(false)}
        initialTitle={''}
        initialDuration={60}
        initialParticipants={[]}
        initialSelectedRange={null}
        inputsDisabled={false}
        isRescheduleAccepted={false}
        isComplete={false}
        handleManualCreateEvent={handleManualCreateEvent}
      />

      <DayEventsDialog
        open={isDayEventsDialogOpen}
        onOpenChangeAction={setIsDayEventsDialogOpen}
        selectedDate={selectedDate}
        events={selectedDate ? getEventsForDay(selectedDate) : []}
        selectedEvent={selectedEvent}
        onEventSelectAction={setSelectedEvent}
      />
    </div>
  )
}
