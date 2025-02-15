"use client";
import { useEffect, useState } from "react";
import slotifyClient from "@/hooks/fetch";
import { Member } from "@/components/team-members";
import { toast } from "@/hooks/use-toast";

import { User as LucideUserIcon } from "lucide-react";

export default function User() {
  const [user, setUser] = useState<Member | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      // This code is ugly, but needs to be done for the refresh.
      // It works, but we need better code
      // setLoading(true);
      const { data, response } = await slotifyClient.GET("/api/users/me", {});
      console.log(JSON.stringify(data));
      console.log(JSON.stringify(response));
      if (data) {
        // setLoading(false);
        setUser(data);
        return;
      }
      if (response.status == 401) {
        //unauthorized, hit /refresh
        const { response } = await slotifyClient.POST("/api/refresh", {});
        if (response.status == 401) {
          // refresh failed, just log user out
          await slotifyClient.POST("/api/users/me/logout", {});
          // setLoading(false);
          window.location.href = "/";
          return;
        }

        if (response.status == 201) {
          // retry the user route
          const { data, error } = await slotifyClient.GET("/api/users/me", {});
          // setLoading(false);
          if (error) {
            toast({
              title: "Error",
              description: error,
              variant: "destructive",
            });
          }
          if (data) {
            setUser(data);
            return;
          }
        }
      }
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
