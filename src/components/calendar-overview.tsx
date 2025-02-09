"use client"

import { useState } from "react"
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
} from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

// Temporary event data - replace with your API data
const events = [
  {
    id: 1,
    subject: "Computing",
    startTime: "2025-02-09T09:00:00Z",
    endTime: "2025-02-09T10:30:00Z",
    location: "Computing 1, Building A2",
    color: "bg-blue-500",
  },
  {
    id: 2,
    subject: "English",
    startTime: "2025-02-09T10:45:00Z",
    endTime: "2025-02-09T12:15:00Z",
    location: "English 7A, Main Block",
    color: "bg-amber-500",
  },
  {
    id: 3,
    subject: "Physics",
    startTime: "2025-02-09T13:05:00Z",
    endTime: "2025-02-09T14:35:00Z",
    location: "Physics 2, Sciences A",
    color: "bg-emerald-500",
  },
]

export function CalendarOverview() {
  const [currentWeek, setCurrentWeek] = useState(new Date())

  const weekStart = startOfWeek(currentWeek, { weekStartsOn: 1 }) // Start week on Monday
  const weekEnd = endOfWeek(currentWeek, { weekStartsOn: 1 })
  const days = eachDayOfInterval({ start: weekStart, end: weekEnd })

  // Generate time slots from 8:00 to 23:00
  const timeSlots = Array.from({ length: 16 }, (_, i) => i + 8)

  const handlePreviousWeek = () => setCurrentWeek(subWeeks(currentWeek, 1))
  const handleNextWeek = () => setCurrentWeek(addWeeks(currentWeek, 1))
  const handleToday = () => setCurrentWeek(new Date())

  const getEventsForDayAndTime = (day: Date, hour: number) => {
    return events.filter((event) => {
      if (!event.startTime || !isValid(parseISO(event.startTime))) return false
      const eventDate = parseISO(event.startTime)
      const eventHour = eventDate.getHours()
      return isSameDay(eventDate, day) && eventHour === hour
    })
  }

  return (
    <Card>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">{format(weekStart, "MMMM yyyy")}</h2>
            <span className="text-muted-foreground">week {format(weekStart, "w")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleToday}>
              Today
            </Button>
            <Button variant="outline" size="icon" onClick={handlePreviousWeek}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNextWeek}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-[auto_1fr] divide-x border-t">
          {/* Time column */}
          <div className="w-20 divide-y">
            <div className="h-14" /> {/* Empty cell for header */}
            {timeSlots.map((hour) => (
              <div key={hour} className="h-24 p-2 text-sm text-muted-foreground">
                {format(new Date().setHours(hour, 0), "HH:mm")}
              </div>
            ))}
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-7 divide-x">
            {/* Header row with days */}
            <div className="col-span-7 grid grid-cols-7 divide-x">
              {days.map((day) => (
                <div key={day.toString()} className="h-14 p-2 text-center">
                  <div className="text-sm font-medium">{format(day, "EEE")}</div>
                  <div
                    className={cn(
                      "text-sm mt-1",
                      isSameDay(day, new Date()) &&
                        "rounded-full bg-primary text-primary-foreground w-6 h-6 mx-auto flex items-center justify-center",
                    )}
                  >
                    {format(day, "d")}
                  </div>
                </div>
              ))}
            </div>

            {/* Time slots grid */}
            {timeSlots.map((hour) => (
              <div key={hour} className="col-span-7 grid grid-cols-7 divide-x">
                {days.map((day) => {
                  const dayEvents = getEventsForDayAndTime(day, hour)
                  return (
                    <div key={day.toString()} className="h-24 p-1 relative hover:bg-muted/50 transition-colors">
                      {dayEvents.map((event) => (
                        <div
                          key={event.id}
                          className={cn("absolute inset-x-1 rounded-md p-2 text-white", event.color)}
                          style={{
                            top: "0.25rem",
                            minHeight: "calc(100% - 0.5rem)",
                          }}
                        >
                          <div className="text-sm font-medium truncate">{event.subject}</div>
                          <div className="text-xs truncate opacity-90">{event.location}</div>
                        </div>
                      ))}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}