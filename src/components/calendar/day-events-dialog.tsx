"use client";

import { format, parseISO } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { CalendarEvent } from "@/components/calendar/calendar";
import Link from "next/link";
import {
  Clock,
  MapPin,
  User,
  Users,
  Calendar,
  ChevronLeft,
} from "lucide-react";

interface DayEventsDialogProps {
  open: boolean;
  onOpenChangeAction: (open: boolean) => void;
  selectedDate: Date | null;
  events: CalendarEvent[];
  selectedEvent: CalendarEvent | null;
  onEventSelectAction: (event: CalendarEvent | null) => void;
}

export function DayEventsDialog({
  open,
  onOpenChangeAction,
  selectedDate,
  events,
  selectedEvent,
  onEventSelectAction,
}: DayEventsDialogProps) {
  if (!selectedDate) return null;

  const renderEventList = () => (
    <div className="space-y-4">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-muted p-4 rounded-lg cursor-pointer hover:bg-accent"
          onClick={() => onEventSelectAction(event)}
        >
          <h3 className="text-lg font-semibold mb-2">{event.subject}</h3>
          <div className="flex items-center text-sm">
            <Clock className="mr-2 h-4 w-4" />
            {event.startTime && event.endTime && (
              <>
                {format(parseISO(event.startTime), "HH:mm")} -{" "}
                {format(parseISO(event.endTime), "HH:mm")}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderEventDetails = (event: CalendarEvent) => (
    <div className="space-y-4">
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => onEventSelectAction(null)}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to event list
      </Button>
      <h3 className="text-xl font-semibold mb-2">{event.subject}</h3>
      <div className="space-y-2">
        <div className="flex items-center text-sm">
          <Clock className="mr-2 h-4 w-4" />
          {event.startTime && event.endTime && (
            <>
              {format(parseISO(event.startTime), "HH:mm")} -{" "}
              {format(parseISO(event.endTime), "HH:mm")}
            </>
          )}
        </div>
        {event.locations &&
          event.locations.map((loc) => (
            <div key={loc.id} className="flex items-center text-sm">
              <MapPin className="mr-2 h-4 w-4" />
              {loc.name}
            </div>
          ))}

        {event.organizer && (
          <div className="flex items-center text-sm">
            <User className="mr-2 h-4 w-4" />
            Organizer: {event.organizer}
          </div>
        )}
        {event.attendees && event.attendees.length > 0 && (
          <div className="flex items-start text-sm">
            <Users className="mr-2 h-4 w-4 mt-1" />
            <div>
              <div>Attendees:</div>
              <ul className="list-disc list-inside pl-4">
                {event.attendees.map((attendee, index) => (
                  <li key={index}>
                    {attendee.email || attendee.type} ({attendee.responseStatus}
                    )
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      {event.body && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold mb-2">Description:</h4>
          <p className="text-sm">{event.body}</p>
        </div>
      )}
      <div className="mt-4 space-y-2">
        {event.joinURL && (
          <Button asChild>
            <Link
              href={event.joinURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Join Meeting
            </Link>
          </Button>
        )}
        {event.webLink && (
          <Button asChild>
            <Link
              href={event.webLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2 h-4 w-4" />
              View in Calendar
            </Link>
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChangeAction}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            {format(selectedDate, "EEEE, MMMM d, yyyy")}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[500px] mt-4">
          {events.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No events scheduled for this day.
            </p>
          ) : selectedEvent ? (
            renderEventDetails(selectedEvent)
          ) : (
            renderEventList()
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
