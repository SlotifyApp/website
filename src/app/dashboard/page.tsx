"use client";

import { useEffect, useState } from "react";
import client from "@/hooks/fetch";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await client.GET("/user", {});
      if (error) {
        setError(error);
      } else if (data) {
        setUser(data);
      }
    };

    fetchUser();
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
        Welcome,{user.firstName} {user.lastName}!
      </h1>
      <p>Email: {user.email}</p>
      <p>User ID: {user.id}</p>
    </div>
  );
}
