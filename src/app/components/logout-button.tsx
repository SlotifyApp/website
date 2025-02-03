"use client";

import client from "@/hooks/fetch";

const LogoutButton = () => {
  const handleLogout = async () => {
    const { error } = await client.POST("/api/users/me/logout", {});
    if (error) {
      console.log(`error: ${JSON.stringify(error)}`);
    }

    // Want to redirect the user back to the home page
    // even if logout api failed
    window.location.href = "/";
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
