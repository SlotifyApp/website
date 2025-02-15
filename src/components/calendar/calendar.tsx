"use client";

import { useEffect, useState } from "react";
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
} from "date-fns";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { CreateEventDialog } from "@/components/calendar/create-event-dialog";
import { DayEventsDialog } from "@/components/calendar/day-events-dialog";
import { CalendarHeader } from "@/components/calendar/calendar-header";
import { AnimatePresence, motion } from "framer-motion";
import slotifyClient from "@/hooks/fetch";
import { toast } from "@/hooks/use-toast";
import { components } from "@/types/openapi";

export type Attendee = components["schemas"]["Attendee"];
export type CalendarEvent = components["schemas"]["CalendarEvent"];

export function DisplayCalendar() {
  const [calendar, setCalendar] = useState<Array<CalendarEvent>>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null,
  );
  const [isCreateEventDialogOpen, setIsCreateEventDialogOpen] = useState(false);
  const [isDayEventsDialogOpen, setIsDayEventsDialogOpen] = useState(false);

  useEffect(() => {
    //TODO: Use new fetchhelpers
    const fetchCalendar = async () => {
      const end = new Date(currentMonth);
      end.setMonth(currentMonth.getMonth() + 1);

      const startFormatted = currentMonth.toISOString().slice(0, 19) + "Z";
      const endFormatted = end.toISOString().slice(0, 19) + "Z";

      const { data, error, response } = await slotifyClient.GET(
        "/api/calendar/me",
        {
          params: {
            query: {
              start: startFormatted,
              end: endFormatted,
            },
          },
        },
      );

      if (error && response.status == 401) {
        const { error, response } = await slotifyClient.POST(
          "/api/refresh",
          {},
        );
        if (response.status == 401) {
          // The refresh token was invalid, could not refresh
          // so back to login. This has to be done for every fetch
          await slotifyClient.POST("/api/users/me/logout", {});
          window.location.href = "/";
        } else if (response.status == 201) {
          const { data, error, response } = await slotifyClient.GET(
            "/api/calendar/me",
            {
              params: {
                query: {
                  start: currentMonth.toString(),
                  end: end.toString(),
                },
              },
            },
          );
          if (response.status == 401) {
            //MSAL client may no longer have user in cache, no other option other than
            //to log out
            await slotifyClient.POST("/api/users/me/logout", {});
            window.location.href = "/";
          }
          if (error) {
            toast({
              title: "Error",
              description: error,
              variant: "destructive",
            });
          } else if (data) {
            setCalendar(data);
          }
        } else if (error) {
          toast({
            title: "Error",
            description: error,
            variant: "destructive",
          });
        }
      } else if (data) {
        setCalendar(data);
      }
    };

    fetchCalendar();
  }, [currentMonth]);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const getEventsForDay = (date: Date) => {
    return calendar.filter(
      (event) =>
        event.startTime &&
        isValid(parseISO(event.startTime)) &&
        isSameDay(parseISO(event.startTime), date),
    );
  };

  const handlePreviousMonth = () =>
    setCurrentMonth((prev) =>
      isValid(prev) ? subMonths(prev, 1) : new Date(),
    );
  const handleNextMonth = () =>
    setCurrentMonth((prev) =>
      isValid(prev) ? addMonths(prev, 1) : new Date(),
    );
  const handleToday = () => setCurrentMonth(new Date());

  return (
    <div>
      <CalendarHeader
        currentMonth={currentMonth}
        onPreviousMonthAction={handlePreviousMonth}
        onNextMonthAction={handleNextMonth}
        onTodayAction={handleToday}
        onCreateEventAction={() => setIsCreateEventDialogOpen(true)}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMonth.toISOString()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="grid grid-cols-7 gap-px bg-muted rounded-lg overflow-hidden">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="bg-muted-foreground/5 p-3 text-center text-sm font-medium"
              >
                {day}
              </div>
            ))}
            {days.map((day) => {
              const dayEvents = getEventsForDay(day);
              return (
                <div
                  key={day.toString()}
                  className={cn(
                    "min-h-[120px] bg-card p-2 relative",
                    !isSameMonth(day, currentMonth) && "bg-muted-foreground/5",
                    "hover:bg-accent cursor-pointer",
                  )}
                  onClick={() => {
                    setSelectedDate(day);
                    setSelectedEvent(null);
                    setIsDayEventsDialogOpen(true);
                  }}
                >
                  <time
                    dateTime={format(day, "yyyy-MM-dd")}
                    className={cn(
                      "ml-auto font-medium",
                      isToday(day) &&
                        "bg-focusColor text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center",
                    )}
                  >
                    {format(day, "d")}
                  </time>
                  <div className="mt-2 space-y-1">
                    {dayEvents.slice(0, 2).map((event) => (
                      <Badge
                        key={event.id}
                        variant="secondary"
                        className="block truncate text-xs cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDate(day);
                          setSelectedEvent(event);
                          setIsDayEventsDialogOpen(true);
                        }}
                      >
                        {event.startTime &&
                          format(parseISO(event.startTime), "HH:mm")}{" "}
                        {event.subject}
                      </Badge>
                    ))}
                    {dayEvents.length > 2 && (
                      <Badge
                        variant="outline"
                        className="block truncate text-xs"
                      >
                        +{dayEvents.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <CreateEventDialog
        open={isCreateEventDialogOpen}
        onOpenChangeAction={setIsCreateEventDialogOpen}
        selectedDate={selectedDate}
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
  );
}
