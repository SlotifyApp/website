"use client";

import { useEffect, useState } from "react";
import client from "@/hooks/fetch";
import LogoutButton from "../components/logout-button";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState(null);
  const [teams, setTeams] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      // This code is ugly, but needs to be done for the refresh.
      // It works, but we need better code
      const { data, error, response } = await client.GET("/api/users/me", {});
      if (error && response.status == 401) {
        const { error, response } = await client.POST("/api/refresh", {});
        if (response.status == 401) {
          // The refresh token was invalid, could not refresh
          // so back to login. This has to be done for every fetch
          await client.POST("/api/users/me/logout", {});
          window.location.href = "/";
        } else if (response.status == 201) {
          //retry the /user route
          const { data, error } = await client.GET("/api/users/me", {});
          if (error) {
            setError(error);
          } else if (data) {
            setUser(data);
          }
        } else if (error) {
          setError(error);
        }
      } else if (data) {
        setUser(data);
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
          window.location.href = "/";
        } else if (response.status == 201) {
          //retry the /user route
          const { data, error } = await client.GET("/api/teams/me", {});
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>
        Welcome, {user.firstName} {user.lastName}!
      </h1>
      <p>Email: {user.email}</p>
      <p>User ID: {user.id}</p>
      <p>My Teams:</p>
      {JSON.stringify(teams)}
      <LogoutButton />
    </div>
  );
}
