"use client";

import { useEffect, useState } from "react";
import client from "@/hooks/fetch";
import LogoutButton from "@/components/logout-button";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState(null);
  const [teams, setTeams] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      // This code is ugly, but needs to be done for the refresh.
      // It works, but we need better code
      setLoading(true);
      const { data, response } = await client.GET("/api/users/me", {});
      console.log(JSON.stringify(data));
      console.log(JSON.stringify(response));
      if (data) {
        setLoading(false);
        setUser(data);
        return;
      }
      if (response.status == 401) {
        //unauthorized, hit /refresh
        const { response } = await client.POST("/api/refresh", {});
        if (response.status == 401) {
          // refresh failed, just log user out
          await client.POST("/api/users/me/logout", {});
          setLoading(false);
          window.location.href = "/login";
          return;
        }

        if (response.status == 201) {
          // retry the user route
          const { data, error } = await client.GET("/api/users/me", {});
          setLoading(false);
          if (error) {
            setError(error);
            return;
          }
          if (data) {
            setUser(data);
            return;
          }
        }
      }
    };

    const fetchTeams = async () => {
      // This code is ugly, but needs to be done for the refresh.
      // It works, but we need better code
      const { data, error, response } = await client.GET("/api/teams/me", {});
      if (error && response.status == 401) {
        const { error, response } = await client.POST("/api/refresh", {});
        if (response.status == 401) {
          // The refresh token was invalid, could not refresh
          // so back to login. This has to be done for every fetch
          window.location.href = "/login";
        } else if (response.status == 201) {
          //retry the /user route
          const { data, error, response } = await client.GET(
            "/api/teams/me",
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
            setUser(data);
          }
        } else if (error) {
          setError(error);
        }
      } else if (data) {
        setTeams(data);
      }
    };

    fetchUser();
    fetchTeams();
  }, []);

  return (
    <div>
      {loading && !error ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>
            Welcome, {user.firstName} {user.lastName}!
          </h1>
          <p>Email: {user.email}</p>
          <p>User ID: {user.id}</p>
          <p>My Teams:</p>
          {JSON.stringify(teams)}
          <LogoutButton />
        </>
      )}
      {error ? <div>Error: {error}</div> : <></>}
    </div>
  );
}
