'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import * as ScrollArea from '@radix-ui/react-scroll-area'

interface WeeklyCalendarProps {
  availabilityData: any
  isLoading: boolean
  selectedRange: { start: Date; end: Date } | null
}

export function WeeklyCalendar({
  availabilityData,
  isLoading,
  selectedRange,
}: WeeklyCalendarProps) {
  const [currentWeek, setCurrentWeek] = useState<Date>(new Date())
  const viewportRef = useRef<HTMLDivElement>(null)

  // Generate week days starting from Monday
  const getWeekDays = (date: Date) => {
    const day = date.getDay()
    const diff = date.getDate() - day + (day === 0 ? -6 : 1) // Adjust when day is Sunday
    const monday = new Date(date)
    monday.setDate(diff)

    const days = []
    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(monday)
      currentDay.setDate(monday.getDate() + i)
      days.push(currentDay)
    }
    return days
  }

  const weekDays = getWeekDays(currentWeek)
  const hours = Array.from({ length: 24 }, (_, i) => i)

  const prevWeek = () => {
    const newDate = new Date(currentWeek)
    newDate.setDate(currentWeek.getDate() - 7)
    setCurrentWeek(newDate)
  }

  const nextWeek = () => {
    const newDate = new Date(currentWeek)
    newDate.setDate(currentWeek.getDate() + 7)
    setCurrentWeek(newDate)
  }

  const goToToday = () => {
    setCurrentWeek(new Date())
  }

  // Formatting helpers
  const formatDate = (date: Date) => date.getDate()
  const formatMonth = (date: Date) =>
    date.toLocaleString('default', { month: 'long' })
  const formatDay = (date: Date) =>
    date.toLocaleString('default', { weekday: 'short' })

  // Define the shape of event status for a time slot
  interface EventStatus {
    type: 'meeting' | 'conflict' | 'possible'
    title?: string
    score?: number
  }

  // Parse and return event status for a given day and hour cell
  const getEventStatus = (day: Date, hour: number): EventStatus | null => {
    if (!availabilityData || isLoading) return null

    const suggestions = availabilityData.meetingTimeSuggestions
    if (!suggestions || !Array.isArray(suggestions)) return null

    // Define the cell boundaries for the current hour in the given day
    const cellStart = new Date(day)
    cellStart.setHours(hour, 0, 0, 0)
    const cellEnd = new Date(day)
    cellEnd.setHours(hour + 1, 0, 0, 0)

    // Iterate over each suggestion to see if it overlaps with the cell
    for (const suggestion of suggestions) {
      const suggestionStart = new Date(suggestion.meetingTimeSlot.start)
      // If the suggestion’s start time falls within the cell
      if (suggestionStart >= cellStart && suggestionStart < cellEnd) {
        return {
          type: 'possible',
          title: 'Available',
          score: suggestion.confidence || 10,
        }
      }
    }
    return null
  }

  useEffect(() => {
    if (viewportRef.current) {
      const el = viewportRef.current
      el.scrollTop = el.scrollHeight * 0.4
    }
  }, [])

  return (
    <div className='w-full'>
      {/* Calendar Header */}
      <div className='flex items-center justify-between p-4 border-b'>
        <div className='font-medium'>
          {weekDays[0] && formatMonth(weekDays[0])} {new Date().getFullYear()}{' '}
          week {weekDays[0] && getWeekNumber(weekDays[0])}
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='outline' size='sm' onClick={goToToday}>
            Today
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='h-8 w-8'
            onClick={prevWeek}
          >
            <ChevronLeft className='h-4 w-4' />
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='h-8 w-8'
            onClick={nextWeek}
          >
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </div>

      {/* Days and Time Slots Grid wrapped in a ScrollArea */}
      <ScrollArea.Root className='w-full h-[66vh] overflow-hidden rounded'>
        <ScrollArea.Viewport ref={viewportRef} className='w-full h-full'>
          <div className='grid grid-cols-[60px_repeat(7,1fr)]'>
            {/* Column headers */}
            <div className='border-r border-b p-2'></div>
            {weekDays.map((day, index) => (
              <div
                key={index}
                className={cn(
                  'text-center p-2 border-b',
                  index < 6 ? 'border-r' : '',
                )}
              >
                <div className='font-medium'>{formatDay(day)}</div>
                <div className='text-lg'>{formatDate(day)}</div>
              </div>
            ))}

            {/* Render time slots */}
            {hours.map(hour => (
              <React.Fragment key={hour}>
                {/* Time label column */}
                <div className='border-r border-b p-2 text-right text-sm text-muted-foreground'>
                  {hour}:00
                </div>
                {weekDays.map((day, dayIndex) => {
                  const status = getEventStatus(day, hour)
                  return (
                    <div
                      key={`${hour}-${dayIndex}`}
                      className={cn(
                        'border-b p-2 min-h-[80px]',
                        dayIndex < 6 ? 'border-r' : '',
                        status?.type === 'possible' ? 'bg-green-300' : '',
                      )}
                    >
                      {status?.type === 'possible' && (
                        <div className='text-sm'>
                          <div className='font-medium'>{status.title}</div>
                          <div className='flex items-center text-xs text-muted-foreground'>
                            <span className='mr-1'>★</span>
                            {status.score}/100
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </React.Fragment>
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className='flex touch-none select-none bg-gray-200 p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col'
          orientation='vertical'
        >
          <ScrollArea.Thumb className='relative flex-1 rounded-[10px] bg-gray-300 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-11 before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2' />
        </ScrollArea.Scrollbar>

        <ScrollArea.Scrollbar
          orientation='horizontal'
          className='flex select-none touch-none p-1 bg-gray-200'
        >
          <ScrollArea.Thumb className='flex-1 bg-gray-400 rounded' />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className='bg-gray-200' />
      </ScrollArea.Root>
    </div>
  )
}

// Helper function to get week number
function getWeekNumber(date: Date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1)
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)
}
