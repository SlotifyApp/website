"use client";
import { useEffect } from "react";
import slotifyClient from "@/hooks/fetch";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const fetchUser = async () => {
      // Detects whether the access token or refresh token are valid.
      // If either one is, then redirect to /dashboard.
      // Done through:
      // 1. Attempt to get /user route, if 200 then redirect to /dashboard
      // 2. if 401 then attempt to refresh
      // 3. If refresh fails then do nothing, if it succeeds then redirect to /dashboard
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
  return (
    // <div>
    //   <Button onClick={() => (window.location.href = "/login")}>Login</Button>
    // </div>
    <div className="min-h-screen min-w-full flex flex-col items-center bg-slate-50">
      <div
        id="header"
        className="min-h-[5vh] min-w-full flex flex-row justify-between items-center bg-white border-solid"
      >
        <div className="ml-5 text-2xl font-semibold">Slotify</div>
        <div className="min-w-72 min-h-16 flex flex-row justify-between items-center">
          <div className="transform transition duration-100 hover:scale-110">
            About
          </div>
          <div className="transform transition duration-100 hover:scale-110">
            Contact
          </div>
          <div
            className="h-10 w-20 rounded-lg bg-focusColor text-white font-semibold drop-shadow-lg flex items-center justify-center transform transition duration-100 hover:scale-110 mr-5"
            onClick={() => (window.location.href = "/login")}
          >
            Log in
          </div>
        </div>
      </div>

      <div
        id="body"
        className="flex flex-col justify-center min-h-[95vh] min-w-72"
      >
        <div className="flex flex-row justify-center items-center text-4xl font-semibold mt-32 drop-shadow-lg">
          One tap to book your next meeting
        </div>
        <div className="flex flex-row justify-center items-center max-w-2xl text-center mt-3">
          Slotify uses AI to dynamically find the best meeting time based on
          everyone&apos;s availability—no hassle, just smart scheduling.
        </div>
        <div className="flex flex-row items-center justify-center mt-10">
          <div
            className="flex justify-center items-center h-12 w-44 rounded-lg bg-focusColor text-white font-semibold drop-shadow-lg transform transition duration-100 hover:scale-110 mr-5"
            onClick={() => (window.location.href = "/login")}
          >
            Get started now
          </div>
        </div>
        <div className="flex flex-row min-w-full justify-center items-start mt-10 max-h-52 overflow-clip">
          <Image
            src={"/assets/images/slotify-preview.png"}
            alt="Slotify Preview - to be replaced" // TODO replace this image
            width={400}
            height={200}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="flex flex-row justify-center mt-10 text-xs text-gray-500">
          Working in conjunction with AWS & councils across the United Kingdom
        </div>

        <div className="flex flex-row justify-center items-center mt-16">
          <div className="-lg flex size-10 animate-bounce items-center justify-center rounded-full bg-white p-2 ring-1 ring-gray-900/5 dark:bg-white/5 dark:ring-white/20">
            <svg
              className="size-6 text-violet-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      <div id="footer" className="text-xs text-gray-500">
        © 2025 Slotify. All rights reserved.
      </div>
    </div>
  );
}
