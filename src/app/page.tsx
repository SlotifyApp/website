"use client";
import { useEffect } from "react";
import slotifyClient from "@/hooks/fetch";
import LandingPage from "@/components/dashboard-landing";

export default function Home() {
  useEffect(() => {
    const fetchUser = async () => {
      // Detects whether the access token or refresh token are valid.
      // If either one is, then redirect to /dashboard.
      const { response } = await slotifyClient.GET("/api/users/me", {});
      if (response.status == 200) {
        window.location.href = "/dashboard";
      } else if (response.status == 401) {
        const { response } = await slotifyClient.POST("/api/refresh", {});
        if (response.status == 201) {
          window.location.href = "/dashboard";
        }
      }
    };
    fetchUser();
  }, []);

  return <LandingPage />;
}
