'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface EventRangePickerProps {
  selectedDate: Date | null
  onDateSelect: (date: Date) => void
  onRangeSelect: (range: { start: Date; end: Date } | null) => void
  selectedRange?: { start: Date; end: Date } | null
  disabled?: boolean // new optional prop to disable input changes
}

export function EventRangePicker({
  selectedDate,
  onDateSelect,
  onRangeSelect,
  selectedRange,
  disabled = false,
}: EventRangePickerProps) {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
  const [dragStart, setDragStart] = useState<Date | null>(null)
  const [dragEnd, setDragEnd] = useState<Date | null>(null)
  const [isSelecting, setIsSelecting] = useState(false)

  // Sync external selectedRange prop with internal state.
  useEffect(() => {
    if (selectedRange) {
      setDragStart(selectedRange.start)
      setDragEnd(selectedRange.end)
    } else {
      setDragStart(null)
      setDragEnd(null)
    }
  }, [selectedRange])

  // When drag is complete, update the range.
  useEffect(() => {
    if (dragStart && dragEnd && !isSelecting) {
      // Ensure start is before end.
      const start = dragStart < dragEnd ? dragStart : dragEnd
      const end = dragStart < dragEnd ? dragEnd : dragStart

      // Set the end of day for the end date.
      const endDate = new Date(end)
      endDate.setHours(23, 59, 59, 999)

      onRangeSelect({ start, end: endDate })
    }
  }, [dragStart, dragEnd, isSelecting, onRangeSelect])

  // Helper to normalize a date (zero out time).
  const normalize = (d: Date) =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate())

  // Check if a date is in the selected range (comparing only year, month, day).
  const isInRange = (date: Date) => {
    if (!dragStart || !dragEnd) return false
    const normalizedDate = normalize(date)
    const normalizedStart = normalize(dragStart)
    const normalizedEnd = normalize(dragEnd)
    return normalizedDate >= normalizedStart && normalizedDate <= normalizedEnd
  }

  // Get days in month.
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const days = []
    const firstDayOfMonth = new Date(year, month, 1).getDay()

    // Add days from previous month to fill the first week.
    const prevMonthDays = new Date(year, month, 0).getDate()
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const day = prevMonthDays - i
      const date = new Date(year, month - 1, day)
      days.push({ date, isCurrentMonth: false })
    }

    // Add days of current month.
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i)
      days.push({ date, isCurrentMonth: true })
    }

    // Add days from next month to complete the last week.
    const lastDayOfMonth = new Date(year, month, daysInMonth).getDay()
    for (let i = 1; i < 7 - lastDayOfMonth; i++) {
      const date = new Date(year, month + 1, i)
      days.push({ date, isCurrentMonth: false })
    }

    return days
  }

  const days = getDaysInMonth(currentMonth)
  const monthName = currentMonth.toLocaleString('default', { month: 'long' })
  const year = currentMonth.getFullYear()

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    )
  }

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    )
  }

  const handleMouseDown = (date: Date) => {
    if (disabled) return
    setIsSelecting(true)
    setDragStart(date)
    setDragEnd(date)
    onDateSelect(date)
  }

  const handleMouseEnter = (date: Date) => {
    if (disabled) return
    if (isSelecting) {
      setDragEnd(date)
    }
  }

  const handleMouseUp = () => {
    if (disabled) return
    setIsSelecting(false)
  }

  // Format date for display.
  const formatDate = (date: Date) => date.getDate()

  useEffect(() => {
    // Global mouseup handler to stop selection if mouse is released outside.
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div className='border rounded-md p-4'>
      <div className='flex items-center justify-between mb-4'>
        <Button
          variant='outline'
          size='icon'
          onClick={prevMonth}
          className='h-7 w-7'
          disabled={disabled}
        >
          <ChevronLeft className='h-4 w-4' />
        </Button>
        <div className='font-medium'>
          {monthName} {year}
        </div>
        <Button
          variant='outline'
          size='icon'
          onClick={nextMonth}
          className='h-7 w-7'
          disabled={disabled}
        >
          <ChevronRight className='h-4 w-4' />
        </Button>
      </div>

      <div className='grid grid-cols-7 gap-1 text-center text-xs mb-1'>
        <div>Su</div>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
      </div>

      <div
        className='grid grid-cols-7 gap-1'
        onMouseLeave={() => !disabled && isSelecting && setIsSelecting(false)}
      >
        {days.map(({ date, isCurrentMonth }, index) => (
          <div
            key={index}
            className={cn(
              'h-8 flex items-center justify-center text-sm rounded cursor-pointer select-none',
              !isCurrentMonth && 'text-muted-foreground',
              isInRange(date) && 'bg-primary text-primary-foreground',
              date.toDateString() === (selectedDate?.toDateString() || '') &&
                'ring-2 ring-primary',
            )}
            onMouseDown={() => handleMouseDown(date)}
            onMouseEnter={() => handleMouseEnter(date)}
          >
            {formatDate(date)}
          </div>
        ))}
      </div>
    </div>
  )
}
