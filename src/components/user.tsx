"use client";
import { useEffect, useState } from "react";
import { Member } from "@/components/team-members";
import fetchHelpers from "@/hooks/fetchHelpers";

import { User as LucideUserIcon } from "lucide-react";

export default function User() {
  const [user, setUser] = useState<Member | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      // This code is less ugly now and needs to be done for the refresh.
      // TODO: dont we already have the refresh in fetchHelpers? 
      // UPDATE: Rewrote code structure to use fetchHelpers structure
      
/*       const getUserCalData = async () => {
        try {
          const { data, error, response } = await slotifyClient.GET(userRoute, {});
          console.log("User Data: ", JSON.stringify(data));
          console.log("Response: ", JSON.stringify(response));
          if (error && response.status == 401) {
            const refreshErrorOccurred =
              await fetchHelpers.refreshRetryGetAPIroute(userRoute);
            return refreshErrorOccurred ? null : data;
          }
          return data;
        } catch (error) {
          fetchHelpers.toastDestructiveError(error as undefined);
          return null;
        }
      }; */

      // Type Guard to check if userData is of interface type "Member"
      function isMember(data: unknown): data is Member {
        if (typeof data != "object" || data == null) {
          return false;
        }
        const obj = data as Record<string, unknown>;
        return (
          "id" in obj && typeof obj.id === "number" &&
          "email" in obj && typeof obj.email === "string" &&
          "firstName" in obj && typeof obj.firstName === "string" &&
          "lastName" in obj && typeof obj.lastName === "string"
        );
      }

      const userRoute = "/api/users/me"
      const userData = await fetchHelpers.getAPIrouteData(userRoute, {});
      if (isMember(userData)) {
        setUser(userData);
      }
      /* OLD CODE, REMOVE ONCE CONFIRMED TO BE CORRECT
      try {
        const { data: userData, response } = await slotifyClient.GET(userRoute, {},);
        console.log("User Data: ", JSON.stringify(userData));
        console.log("Response: ", JSON.stringify(response));
        // Switch case replaces if/else blocks
        switch (response.status) {
          case 200: // Success
            if (userData) setUser(userData);
            break;
          case 401: // user was unauthorised. Therefore, /refresh.
            fetchHelpers.refreshRetryAPIroute(userRoute);
            break;
          case 201:
            const { data: retryData } = await slotifyClient.GET(
              "/api/users/me",
              {},
            );
            if (retryData) setUser(retryData);
            break;
        }
      } catch (error) {
        fetchHelpers.toastDestructiveError(error as undefined);
      } */
    };
    fetchUser();
  }, []);

  if (!user) return "No user";

  return (
    <div className="flex flex-row w-screen ml-20">
      <LucideUserIcon className="h-10 w-10" />
      <div className="flex flex-row justify-center items-center ml-5 font-semibold text-2xl">
        Welcome {user.firstName}
      </div>
    </div>
  );
}
