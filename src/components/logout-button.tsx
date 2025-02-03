"use client";

import client from "@/hooks/fetch";
import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  const handleLogout = async () => {
    const { error } = await client.POST("/api/users/me/logout", {});
    if (error) {
      console.log(`error: ${JSON.stringify(error)}`);
    }

    // Want to redirect the user back to the home page
    // even if logout api failed
    window.location.href = "/login";
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
