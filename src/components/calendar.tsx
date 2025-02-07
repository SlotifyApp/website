"use client";
import client from "@/hooks/fetch";
import { toast } from "@/hooks/use-toast";
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
      // This code is ugly, but needs to be done for the refresh.
      // It works, but we need better code
      var calRoute = globalThis.stringToPairsPath("/api/calendar/me");
      const { data, error, response } = await client.GET(calRoute, {},);
      if (error && response.status == 401) {
        const refreshErrorOccurred = globalThis.refreshRetryAPIroute(calRoute);
        if (!refreshErrorOccurred) {
          setCalendar(data);
        }
        /* const { error, response } = await client.POST("/api/refresh", {});
        if (response.status == 401) {
          // The refresh token was invalid, could not refresh
          // so back to login. This has to be done for every fetch
          await client.POST("/api/users/me/logout", {});
          window.location.href = "/login";
        } else if (response.status == 201) {
          const { data, error, response } = await client.GET(
            "/api/calendar/me",
            {},
          );
          if (response.status == 401) {
            //MSAL client may no longer have user in cache, no other option other than
            //to log out
            await client.POST("/api/users/me/logout", {});
            window.location.href = "/login";
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
        } */
      } else if (data) {
        setCalendar(data);
      }
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
