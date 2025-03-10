"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EventRangePickerProps {
  selectedDate: Date | null
  onDateSelect: (date: Date) => void
  onRangeSelect: (range: { start: Date; end: Date } | null) => void
}

export function EventRangePicker({ selectedDate, onDateSelect, onRangeSelect }: EventRangePickerProps) {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
  const [dragStart, setDragStart] = useState<Date | null>(null)
  const [dragEnd, setDragEnd] = useState<Date | null>(null)
  const [isSelecting, setIsSelecting] = useState(false)

  // Update range when drag is complete
  useEffect(() => {
    if (dragStart && dragEnd && !isSelecting) {
      // Ensure start date is before end date
      const start = dragStart < dragEnd ? dragStart : dragEnd
      const end = dragStart < dragEnd ? dragEnd : dragStart

      // Set the end of day for the end date
      const endDate = new Date(end)
      endDate.setHours(23, 59, 59, 999)

      onRangeSelect({ start, end: endDate })
    }
  }, [dragStart, dragEnd, isSelecting, onRangeSelect])

  // Get days in month
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const days = []
    const firstDayOfMonth = new Date(year, month, 1).getDay()

    // Add days from previous month to fill the first week
    const prevMonthDays = new Date(year, month, 0).getDate()
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const day = prevMonthDays - i
      const date = new Date(year, month - 1, day)
      days.push({ date, isCurrentMonth: false })
    }

    // Add days of current month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i)
      days.push({ date, isCurrentMonth: true })
    }

    // Add days from next month to complete the last week
    const lastDayOfMonth = new Date(year, month, daysInMonth).getDay()
    for (let i = 1; i < 7 - lastDayOfMonth; i++) {
      const date = new Date(year, month + 1, i)
      days.push({ date, isCurrentMonth: false })
    }

    return days
  }

  const days = getDaysInMonth(currentMonth)
  const monthName = currentMonth.toLocaleString("default", { month: "long" })
  const year = currentMonth.getFullYear()

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const handleMouseDown = (date: Date) => {
    setIsSelecting(true)
    setDragStart(date)
    setDragEnd(date)
    onDateSelect(date)
  }

  const handleMouseEnter = (date: Date) => {
    if (isSelecting) {
      setDragEnd(date)
    }
  }

  const handleMouseUp = () => {
    setIsSelecting(false)
  }

  // Check if a date is in the selected range
  const isInRange = (date: Date) => {
    if (!dragStart || !dragEnd) return false

    const start = dragStart < dragEnd ? dragStart : dragEnd
    const end = dragStart < dragEnd ? dragEnd : dragStart

    return date >= start && date <= end
  }

  // Format date for display
  const formatDate = (date: Date) => {
    return date.getDate()
  }

  useEffect(() => {
    // Add global mouse up handler to stop selection even if mouse is released outside calendar
    document.addEventListener("mouseup", handleMouseUp)
    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <div className="border rounded-md p-4">
      <div className="flex items-center justify-between mb-4">
        <Button variant="outline" size="icon" onClick={prevMonth} className="h-7 w-7">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="font-medium">
          {monthName} {year}
        </div>
        <Button variant="outline" size="icon" onClick={nextMonth} className="h-7 w-7">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs mb-1">
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
        <div>Su</div>
      </div>

      <div className="grid grid-cols-7 gap-1" onMouseLeave={() => isSelecting && setIsSelecting(false)}>
        {days.map(({ date, isCurrentMonth }, index) => (
          <div
            key={index}
            className={cn(
              "h-8 flex items-center justify-center text-sm rounded cursor-pointer select-none",
              !isCurrentMonth && "text-muted-foreground",
              isInRange(date) && "bg-primary text-primary-foreground",
              date.toDateString() === (selectedDate?.toDateString() || "") && "ring-2 ring-primary",
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

