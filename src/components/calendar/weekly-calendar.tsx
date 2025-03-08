"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface WeeklyCalendarProps {
  availabilityData: any
  isLoading: boolean
  selectedRange: { start: Date; end: Date } | null
}

export function WeeklyCalendar({ availabilityData, isLoading, selectedRange }: WeeklyCalendarProps) {
  const [currentWeek, setCurrentWeek] = useState<Date>(new Date())

  // Generate week days
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
  const hours = Array.from({ length: 10 }, (_, i) => i + 8) // 8:00 to 17:00

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

  // Format date for display
  const formatDate = (date: Date) => {
    return date.getDate()
  }

  // Format month for display
  const formatMonth = (date: Date) => {
    return date.toLocaleString("default", { month: "long" })
  }

  // Format day for display
  const formatDay = (date: Date) => {
    return date.toLocaleString("default", { weekday: "short" })
  }

  // Get event status for a specific time slot
  const getEventStatus = (day: Date, hour: number) => {
    if (!availabilityData || isLoading) return null

    // Mock data for demonstration
    const dayOfWeek = day.getDay()
    const hourOfDay = hour

    // This is where you would parse the actual availabilityData
    // For now, let's create some mock data based on the day and hour

    if (dayOfWeek === 1 && hourOfDay === 8) {
      // Monday 8:00
      return {
        type: "meeting",
        title: "Meeting Title",
        location: "Online",
        attendees: 2,
      }
    } else if (dayOfWeek === 3 && hourOfDay === 9) {
      // Wednesday 9:00
      return {
        type: "conflict",
        conflictCount: 2,
      }
    } else if (
      (dayOfWeek === 4 && hourOfDay >= 8 && hourOfDay <= 10) ||
      (dayOfWeek === 3 && hourOfDay === 10) ||
      (dayOfWeek === 1 && hourOfDay === 10)
    ) {
      // Thursday 8:00-10:00
      return {
        type: "possible",
        score: 9,
      }
    } else if (dayOfWeek === 5 && hourOfDay >= 10 && hourOfDay <= 13) {
      // Friday 10:00-13:00
      return {
        type: "meeting",
        title: "Meeting Title",
        location: "Online",
        attendees: 2,
      }
    } else if (dayOfWeek === 6 && hourOfDay >= 10 && hourOfDay <= 14) {
      // Saturday 10:00-14:00
      return {
        type: "conflict",
        conflictCount: 2,
      }
    } else if (dayOfWeek === 5 && hourOfDay >= 13) {
      // Friday after 13:00
      return {
        type: "possible",
        score: 2,
      }
    }

    return null
  }

  return (
    <div className="w-full">
      {/* Calendar header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="font-medium">
          {weekDays[0] && formatMonth(weekDays[0])} {new Date().getFullYear()} week {weekDays[0] && getWeekNumber(weekDays[0])}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={goToToday}>
            Today
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={prevWeek}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={nextWeek}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-[60px_repeat(7,1fr)]">
        <div className="border-r border-b p-2"></div>
        {weekDays.map((day, index) => (
          <div key={index} className={cn("text-center p-2 border-b", index < 6 ? "border-r" : "")}>
            <div className="font-medium">{formatDay(day)}</div>
            <div className="text-lg">{formatDate(day)}</div>
          </div>
        ))}

        {/* Time slots */}
        {hours.map((hour) => (
          <React.Fragment key={hour}>
            <div className="border-r border-b p-2 text-right text-sm text-muted-foreground">{hour}:00</div>
            {weekDays.map((day, dayIndex) => {
              const status = getEventStatus(day, hour)

              return (
                <div
                  key={`${hour}-${dayIndex}`}
                  className={cn(
                    "border-b p-2 min-h-[80px]",
                    dayIndex < 6 ? "border-r" : "",
                    status?.type === "meeting"
                      ? "bg-red-200"
                      : status?.type === "conflict"
                        ? "bg-red-500"
                        : status?.type === "possible"
                          ? "bg-green-300"
                          : "",
                  )}
                >
                  {status?.type === "meeting" && (
                    <div className="text-sm">
                      <div className="font-medium">{status.title}</div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {status.location}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Users className="h-3 w-3 mr-1" />
                        {status.attendees}
                      </div>
                    </div>
                  )}

                  {status?.type === "conflict" && (
                    <div className="text-sm text-white">
                      <div className="font-medium">Conflicts</div>
                      <div className="flex items-center text-xs">
                        <Users className="h-3 w-3 mr-1" />
                        {status.conflictCount}
                      </div>
                    </div>
                  )}

                  {status?.type === "possible" && (
                    <div className="text-sm">
                      <div className="font-medium">Possible</div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span className="mr-1">★</span>
                        {status.score}/10
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

// Helper function to get week number
function getWeekNumber(date: Date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1)
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)
}

