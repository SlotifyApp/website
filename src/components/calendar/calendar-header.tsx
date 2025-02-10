"use client";

import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format, isValid } from "date-fns";

interface CalendarHeaderProps {
  currentMonth: Date;
  onPreviousMonthAction: () => void;
  onNextMonthAction: () => void;
  onTodayAction: () => void;
  onCreateEventAction: () => void;
}

export function CalendarHeader({
  currentMonth,
  onPreviousMonthAction: onPreviousMonth,
  onNextMonthAction: onNextMonth,
  onTodayAction: onToday,
  onCreateEventAction: onCreateEvent,
}: CalendarHeaderProps) {
  const formattedMonth = isValid(currentMonth)
    ? format(currentMonth, "MMMM yyyy")
    : "Invalid Date";

  return (
    <header className="border-b mb-4">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Calendar</h1>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" onClick={onPreviousMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={onNextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-lg font-medium">{formattedMonth}</div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={onToday}>
            Today
          </Button>
          <Button onClick={onCreateEvent}>
            <Plus className="h-4 w-4 mr-2" />
            Create Event
          </Button>
        </div>
      </div>
    </header>
  );
}
