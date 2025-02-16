'use client'

import { Toaster } from '@/components/ui/toaster'
import { NotificationProvider } from '@/context/notification_context'
import React from 'react'
import NewNavbar from '@/components/newNavbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NotificationProvider>
        <Toaster />
        <NewNavbar />
        {children}
      </NotificationProvider>
    </div>
  )
}
