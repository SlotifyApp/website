"use client";

import { useEffect, useState } from "react";
import client from "@/hooks/fetch";

export default function Calendar() {
  const [calendar, setCalendar] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      // This code is ugly, but needs to be done for the refresh.
      // It works, but we need better code
      const { data, error, response } = await client.GET(
        "/api/calendar/me",
        {},
      );
      if (error && response.status == 401) {
        const { error, response } = await client.POST("/api/refresh", {});
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
            setError(error);
          } else if (data) {
            setCalendar(data);
          }
        } else if (error) {
          setError(error);
        }
      } else if (data) {
        setCalendar(data);
      }
    };

    fetchUser();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!calendar) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(calendar)}</div>;
}
