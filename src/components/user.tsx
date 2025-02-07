"use client";
import { useEffect, useState } from "react";
import client from "@/hooks/fetch";
import { Member } from "@/components/team-members";
import { toast } from "@/hooks/use-toast";

export default function User() {
  const [user, setUser] = useState<Member | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      // This code is ugly, but needs to be done for the refresh.
      // It works, but we need better code
      // setLoading(true);
      const { data, response } = await client.GET("/api/users/me", {});
      console.log(JSON.stringify(data));
      console.log(JSON.stringify(response));
      if (data) {
        // setLoading(false);
        setUser(data);
        return;
      }
      if (response.status == 401) {
        //unauthorized, hit /refresh
        const { response } = await client.POST("/api/refresh", {});
        if (response.status == 401) {
          // refresh failed, just log user out
          await client.POST("/api/users/me/logout", {});
          // setLoading(false);
          window.location.href = "/login";
          return;
        }

        if (response.status == 201) {
          // retry the user route
          const { data, error } = await client.GET("/api/users/me", {});
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
    <div>
      <h1>
        Welcome, {user.firstName} {user.lastName}!
      </h1>
      <p>Email: {user.email}</p>
      <p>User ID: {user.id}</p>
    </div>
  );
}
