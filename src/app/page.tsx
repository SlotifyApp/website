"use client";
import { useEffect } from "react";
import LoginButton from "./components/login-button";
import client from "@/hooks/fetch";

export default function Home() {
  useEffect(() => {
    const fetchUser = async () => {
      // Detects whether the access token or refresh token are valid, if either one is then
      // redirect to /dashboard. Done through:
      // Attempt to get /user route, if 200 then redirect to /dashboard
      // if 401 then attempt to refresh
      // If refresh fails then do nothing, if it succeeds then redirect to
      // /dashboard
      const { response } = await client.GET("/user", {});
      if (response.status == 401) {
        const { response } = await client.POST("/refresh", {});
        if (response.status == 201) {
          window.location.href = "/dashboard";
        }
      } else if (response.status == 200) {
        window.location.href = "/dashboard";
      }
    };
    fetchUser();
  }, []);
  return (
    <div>
      <LoginButton />
    </div>
  );
}
