import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { NotificationProvider } from "@/context/notification_context";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NotificationProvider>
        <Toaster />
        <Navbar />
        {children}
      </NotificationProvider>
    </div>
  );
}
