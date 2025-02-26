'use client'
import slotifyClient from '@/hooks/fetch'
import { errorToast, toast } from '@/hooks/use-toast'
import React, { useEffect, createContext, useContext, useState } from 'react'

export interface Notification {
  id: number
  message: string
  created: string
}

interface NotificationContextType {
  notifications: Notification[]
  markAsRead: (id: number) => Promise<void>
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
)

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  //notifs from db

  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    const getUnreadNotifs = async () => {
      try {
        const notifData = await slotifyClient.GetAPIUsersMeNotifications()
        setNotifications(prev => [...prev, ...notifData])
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
    }
    getUnreadNotifs()
    console.log('Initializing EventSource...')

    const eventSource = new EventSource('http://localhost:8080/api/events', {
      withCredentials: true,
    })

    eventSource.addEventListener('calendar_notification', event => {
      const newNotification: Notification = JSON.parse(event.data)
      setNotifications(prev => [newNotification, ...prev])
      toast({
        title: newNotification.message,
      })
      const audio = new Audio(
        'https://www.soundjay.com/buttons/sounds/button-14.mp3',
      )
      audio.volume = 0.5
      audio.play()
    })

    return () => {
      eventSource.close()
    }
  }, [])

  async function markAsRead(notification_id: number): Promise<void> {
    try {
      const readNotifData =
        await slotifyClient.PatchAPINotificationsNotificationIDRead(undefined, {
          params: {
            notificationID: notification_id,
          },
        })

      if (readNotifData) {
        setNotifications(notifications.filter(n => n.id !== notification_id))
        toast({
          title: JSON.stringify(readNotifData),
        })
      }
    } catch (error) {
      console.error(error)
      errorToast(error)
    }
  }

  return (
    <NotificationContext.Provider value={{ notifications, markAsRead }}>
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotifications() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error(
      'useNotifications must be used within a NotificationProvider',
    )
  }
  return context
}
