"use client";

import User from "@/components/user";
import { RescheduleRequests } from "@/components/reschedule-requests";
import { useEffect, useState } from "react";
import { CalendarEvent } from "@/components/calendar/calendar";
import { EventsForToday } from "@/components/events-today";
import fetchHelpers from "@/hooks/fetchHelpers";

// function LoadingDashboard() {
//   return (
//     <div className="flex flex-col space-y-3">
//       <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//       <div className="space-y-2">
//         <Skeleton className="h-4 w-[250px]" />
//         <Skeleton className="h-4 w-[200px]" />
//       </div>
//     </div>
//   );
// }
//
export default function Dashboard() {
  const [calendar, setCalendar] = useState<Array<CalendarEvent>>([]);

  useEffect(() => {
    const fetchCalendar = async () => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);

      const startFormatted = now.toISOString().slice(0, 19) + "Z";
      const endFormatted = endOfDay.toISOString().slice(0, 19) + "Z";
      const calendarRoute = "/api/calendar/me";
      const data = await fetchHelpers.getAPIrouteData(calendarRoute, {
        params: {
          query: {
            start: startFormatted,
            end: endFormatted,
          },
        },
      });
      if (Array.isArray(data)) {
        setCalendar(data);
      }
    };

    fetchCalendar();
  }, []);
  return (
    <div className="flex flex-col justify-start items-center mt-10 h-[90vh] w-screen overflow-x-hidden">
      <User />
      <div className="flex flex-row justify-start ml-[10vw] w-screen gap-6 mt-10">
        <div className="w-[60vw]">
          <EventsForToday events={calendar} />
        </div>
        <div className="w-[30vw]">
          <RescheduleRequests />
        </div>
      </div>
    </div>
  );
}
