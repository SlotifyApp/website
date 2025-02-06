"use client";
import { useState } from "react";
import { Bell, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow, parseISO } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useNotifications, Notification } from "@/context/notification_context";
import { DialogDescription } from "@radix-ui/react-dialog";

export default function NotificationButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { notifications } = useNotifications();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          {notifications.length > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 px-2 py-1 text-xs"
            >
              {notifications.length}
            </Badge>
          )}
          <span className="sr-only">Open notifications</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90vw] sm:h-[90vh] sm:max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Notifications</DialogTitle>
          <DialogDescription>
            {" "}
            Mark a notification as read to acknowledge it.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 px-6">
          <NotificationList notifications={notifications} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function NotificationList({
  notifications,
}: {
  notifications: Notification[];
}) {
  console.log(`notifications: ${JSON.stringify(notifications)}`);
  const { markAsRead } = useNotifications();
  const [loadingStates, setLoadingStates] = useState<{
    [key: number]: boolean;
  }>({});

  const handleMarkAsRead = async (id: number) => {
    console.log(`handleMarkAsRead: ${id}`);
    setLoadingStates((prev) => ({ ...prev, [id]: true }));
    await markAsRead(id);
    setLoadingStates((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <ul className="space-y-4 py-6">
      {notifications.length === 0 ? (
        <li className="text-center text-muted-foreground">
          No new notifications
        </li>
      ) : (
        notifications.map((notification) => (
          <li
            key={notification.id}
            className="bg-secondary p-4 rounded-lg flex justify-between items-start"
          >
            <div>
              <h3 className="font-semibold">{notification.message}</h3>
              <p className="text-xs text-muted-foreground mt-2">
                {formatDistanceToNow(parseISO(notification.created), {
                  addSuffix: true,
                })}
              </p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => handleMarkAsRead(notification.id)}
              disabled={loadingStates[notification.id]}
            >
              {loadingStates[notification.id] ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Mark as Read"
              )}
            </Button>
          </li>
        ))
      )}
    </ul>
  );
}
