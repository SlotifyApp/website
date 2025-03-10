"use client"

import { useEffect, useRef, useState } from "react"
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
} from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import * as ScrollArea from "@radix-ui/react-scroll-area"

interface WeeklyCalendarProps {
  availabilityData: any
  conflictEvents: any[]
  isLoading: boolean
  selectedRange: { start: Date; end: Date } | null
}

export function WeeklyCalendar({
  availabilityData,
  conflictEvents,
  isLoading,
}: WeeklyCalendarProps) {
  const [currentWeek, setCurrentWeek] = useState<Date>(new Date())
  const totalHours = 24
  const viewportRef = useRef<HTMLDivElement>(null)

  // Calculate current week (Monday to Sunday)
  const weekStart = startOfWeek(currentWeek, { weekStartsOn: 1 })
  const weekEnd = endOfWeek(currentWeek, { weekStartsOn: 1 })
  const days = eachDayOfInterval({ start: weekStart, end: weekEnd })

  const prevWeek = () => setCurrentWeek(subWeeks(currentWeek, 1))
  const nextWeek = () => setCurrentWeek(addWeeks(currentWeek, 1))
  const goToToday = () => setCurrentWeek(new Date())

  // Formatting helpers
  const formatDay = (date: Date) => format(date, "EEE")
  const formatDate = (date: Date) => format(date, "d")
  const formatMonthYear = (date: Date) => format(date, "MMMM yyyy")
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

  // Get available suggestions for a given day
  const getSuggestionsForDay = (day: Date) => {
    if (!availabilityData || !availabilityData.meetingTimeSuggestions) return []
    return availabilityData.meetingTimeSuggestions.filter((suggestion: any) => {
      const suggestionStart = parseISO(suggestion.meetingTimeSlot.start)
      if (!isValid(suggestionStart)) return false
      const dayStart = new Date(day)
      dayStart.setHours(0, 0, 0, 0)
      const dayEnd = new Date(day)
      dayEnd.setHours(23, 59, 59, 999)
      return suggestionStart >= dayStart && suggestionStart <= dayEnd
    })
  }

  // Get conflict events (existing calendar events) for a given day
  const getConflictEventsForDay = (day: Date) => {
    if (!conflictEvents) return []
    return conflictEvents.filter((event: any) => {
      const eventStart = parseISO(event.startTime)
      if (!isValid(eventStart)) return false
      const dayStart = new Date(day)
      dayStart.setHours(0, 0, 0, 0)
      const dayEnd = new Date(day)
      dayEnd.setHours(23, 59, 59, 999)
      return eventStart >= dayStart && eventStart <= dayEnd
    })
  }

  useEffect(() => {
    if (viewportRef.current) {
      const el = viewportRef.current
      el.scrollTop = el.scrollHeight * 0.375
    }
  }, [])

  return (
    <div className="w-full">
      {/* Header with week info and navigation */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="font-medium">
          {formatMonthYear(weekStart)} - week {getWeekNumber(weekStart)}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={goToToday}>
            Today
          </Button>
          <Button variant="outline" size="icon" onClick={prevWeek}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextWeek}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Day Header Row */}
      <div className="grid grid-cols-[60px_repeat(7,1fr)] pl-5">
        <div className="border-b"></div>
        {days.map((day, index) => (
          <div
            key={index}
            className={cn("text-center p-2 border-b", index < 6 ? "border-r" : "")}
          >
            <div className={cn(
              format(day, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd")
                ? "bg-focusColor/90 text-white rounded-xl"
                : ""
            )}>
              <div className="font-medium">{formatDay(day)}</div>
              <div className="text-lg">{formatDate(day)}</div>
            </div>
          </div>
        ))}
      </div>

      <ScrollArea.Root className="w-full h-[66vh] overflow-hidden rounded">
        <ScrollArea.Viewport ref={viewportRef} className="w-full h-full relative">
          <div className="grid grid-cols-[auto_1fr]">
            {/* Time Label Column */}
            <div
              className="relative border-r w-20"
              style={{ display: "grid", gridTemplateRows: `repeat(${totalHours}, 1fr)` }}
            >
              {Array.from({ length: totalHours }).map((_, i) => {
                const timeLabel = format(new Date(0, 0, 0, i), "HH:mm")
                return (
                  <div key={i} className="text-xs flex justify-center items-start h-20">
                    {timeLabel}
                  </div>
                )
              })}
            </div>

            {/* Day Columns */}
            <div className="grid grid-cols-7 divide-x relative">
              {days.map((day) => {
                const suggestions = getSuggestionsForDay(day)
                const conflicts = getConflictEventsForDay(day)
                return (
                  <div
                    key={day.toString()}
                    className="relative"
                    style={{ display: "grid", gridTemplateRows: `repeat(${totalHours}, 1fr)` }}
                  >
                    {/* Optional Hour Lines */}
                    {Array.from({ length: totalHours }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-0 right-0 border-t border-dashed border-muted-foreground opacity-30"
                        style={{ top: `${(i / totalHours) * 100}%` }}
                      />
                    ))}
                    {/* Render available suggestions (green) */}
                    {suggestions.map((suggestion: any, index: number) => {
                      const suggestionStart = parseISO(suggestion.meetingTimeSlot.start)
                      const suggestionEnd = parseISO(suggestion.meetingTimeSlot.end)
                      if (!isValid(suggestionStart) || !isValid(suggestionEnd)) return null

                      const dayStart = new Date(day)
                      dayStart.setHours(0, 0, 0, 0)
                      const dayEnd = new Date(day)
                      dayEnd.setHours(23, 59, 59, 999)
                      const actualStart = isBefore(suggestionStart, dayStart) ? dayStart : suggestionStart
                      const actualEnd = isAfter(suggestionEnd, dayEnd) ? dayEnd : suggestionEnd

                      const startFraction = getHourFraction(actualStart)
                      const endFraction = getHourFraction(actualEnd)
                      const topPercent = (startFraction / totalHours) * 100
                      const heightPercent = ((endFraction - startFraction) / totalHours) * 100

                      return (
                        <div
                          key={`suggestion-${index}`}
                          className="absolute p-1 rounded-md bg-green-300 text-green-800 text-xs cursor-pointer"
                          style={{
                            top: `${topPercent}%`,
                            height: `${heightPercent}%`,
                            left: "2px",
                            right: "2px",
                          }}
                        >
                          <div>Rating: {suggestion.confidence ? `${suggestion.confidence}%` : ""}</div>
                        </div>
                      )
                    })}
                    {/* Render conflict events (red) */}
                    {conflicts.map((conflict: any, index: number) => {
                      const eventStart = parseISO(conflict.startTime)
                      const eventEnd = parseISO(conflict.endTime)
                      if (!isValid(eventStart) || !isValid(eventEnd)) return null

                      const dayStart = new Date(day)
                      dayStart.setHours(0, 0, 0, 0)
                      const dayEnd = new Date(day)
                      dayEnd.setHours(23, 59, 59, 999)
                      const actualStart = isBefore(eventStart, dayStart) ? dayStart : eventStart
                      const actualEnd = isAfter(eventEnd, dayEnd) ? dayEnd : eventEnd

                      const startFraction = getHourFraction(actualStart)
                      const endFraction = getHourFraction(actualEnd)
                      const topPercent = (startFraction / totalHours) * 100
                      const heightPercent = ((endFraction - startFraction) / totalHours) * 100

                      return (
                        <div
                          key={`conflict-${index}`}
                          className="absolute p-1 rounded-md bg-red-300 text-red-800 text-xs cursor-pointer"
                          style={{
                            top: `${topPercent}%`,
                            height: `${heightPercent}%`,
                            left: "2px",
                            right: "2px",
                          }}
                        >
                          <div className="font-medium">Conflict</div>
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
          orientation="vertical"
          className="flex select-none touch-none p-1 bg-gray-200"
        >
          <ScrollArea.Thumb className="flex-1 bg-gray-400 rounded" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex select-none touch-none p-1 bg-gray-200"
        >
          <ScrollArea.Thumb className="flex-1 bg-gray-400 rounded" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="bg-gray-200" />
      </ScrollArea.Root>
    </div>
  )
}
