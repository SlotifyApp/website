"use client";

const LoginButton = () => {
  const handleLogin = () => {
    // Construct the /authorize URL
    const clientId = process.env.NEXT_PUBLIC_MICROSOFT_CLIENT_ID;
    const tenantId = process.env.NEXT_PUBLIC_MICROSOFT_TENANT_ID;
    const redirectUri = encodeURIComponent(
      "http://localhost:8080/api/auth/callback",
    );
    const scopes = encodeURIComponent(
      "openid profile email User.ReadWrite Calendars.ReadBasic Calendars.Read Calendars.ReadWrite Calendars.ReadWrite.Shared",
    ); // Replace with your required scopes
    const state = "12345"; // Random string for CSRF protection

    const authUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}&state=${state}`;

    // Redirect the user to the /authorize endpoint
    window.location.href = authUrl;
  };

  return <button onClick={handleLogin}>New Microsoft</button>;
};

export default LoginButton;
