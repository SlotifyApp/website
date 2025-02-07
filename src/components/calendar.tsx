"use client";
import client from "@/hooks/fetch";
import { useEffect, useState } from "react";
import "@/globalFunc";

interface CalendarInterface {
  subject?: string;
  startTime?: string;
  endTime?: string;
}

export default function DisplayCalendar() {
  const [calendar, setCalendar] = useState<Array<CalendarInterface>>([]);

  useEffect(() => {
    const fetchCalendar = async () => {
      // This code is less ugly now and needs to be done for the refresh.
      const calRoute = globalThis.stringToPairsPath("/api/calendar/me");

      const getUserCalData = async () => {
        const { data, error, response } = await client.GET(calRoute, {});
        if (error && response.status == 401) {
          const refreshErrorOccurred = await globalThis.refreshRetryAPIroute(calRoute);
          return refreshErrorOccurred ? null : data;
        }
        return data;
      };
      
      const calData = await getUserCalData();
      if (calData) {
        setCalendar(calData);
      }
      // const { data, error, response } = await client.GET(calRoute, {},);
      /* if (error && response.status == 401) {
        const refreshErrorOccurred = globalThis.refreshRetryAPIroute(calRoute);
        if (!refreshErrorOccurred) {
          setCalendar(data);
        }
      } else if (data) {
        setCalendar(data);
      } */
    };

    fetchCalendar();
  }, []);

  if (!calendar) {
    return <div>No calendar displayed.</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(calendar, null, 2)}</pre>
    </div>
  );
}
