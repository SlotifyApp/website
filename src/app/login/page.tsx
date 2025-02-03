"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MicrosoftSVG = (props: any) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path fill="#F35325" d="M1 1h6.5v6.5H1V1z" />
    <path fill="#81BC06" d="M8.5 1H15v6.5H8.5V1z" />
    <path fill="#05A6F0" d="M1 8.5h6.5V15H1V8.5z" />
    <path fill="#FFBA08" d="M8.5 8.5H15V15H8.5V8.5z" />
  </svg>
);

export default function MicrosoftAuthScreen() {
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Welcome
          </CardTitle>
          <CardDescription className="text-center">
            Continue with your Microsoft account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full" onClick={handleLogin}>
            <MicrosoftSVG />
            Continue with Microsoft
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
