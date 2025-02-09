"use client"

import { Check, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const initialRequests = [
  {
    id: 1,
    title: "Team Sync Meeting",
    currentDateTime: "2024-02-09 10:00 AM",
    requestedDateTime: "2024-02-10 11:00 AM",
    participants: ["John", "Jane", "Bob"],
    requestedBy: "John",
    status: "pending",
  },
  {
    id: 2,
    title: "Project Review",
    currentDateTime: "2024-02-09 02:00 PM",
    requestedDateTime: "2024-02-09 04:00 PM",
    participants: ["Alice", "Bob", "Charlie"],
    requestedBy: "Bob",
    status: "pending",
  },
  {
    id: 3,
    title: "Client Meeting",
    currentDateTime: "2024-02-10 11:00 AM",
    requestedDateTime: "2024-02-11 02:00 PM",
    participants: ["David", "Eve"],
    requestedBy: "David",
    status: "pending",
  },
]

export function RescheduleRequests() {
  const [requests, setRequests] = useState(initialRequests)

  const handleAction = (id: number, action: "accept" | "ignore") => {
    console.log(`Action: ${action} for request with ID: ${id}`)
    setRequests(requests.filter((request) => request.id !== id))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Reschedule Requests
          <Badge variant="secondary">{requests.length}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[calc(100vh-280px)]">
          <div className="divide-y">
            {requests.map((request) => (
              <div key={request.id} className="p-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium leading-none">{request.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">Requested by {request.requestedBy}</p>
                  </div>

                  <div className="space-y-1 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-20 font-medium shrink-0">Current:</div>
                      <div className="text-muted-foreground">{request.currentDateTime}</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-20 font-medium shrink-0">Requested:</div>
                      <div className="text-muted-foreground">{request.requestedDateTime}</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-20 font-medium shrink-0">Attendees:</div>
                      <div className="text-muted-foreground">{request.participants.join(", ")}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-green-500 hover:text-green-600 hover:bg-green-50"
                      onClick={() => handleAction(request.id, "accept")}
                    >
                      <Check className="h-4 w-4 mr-1" />
                      Accept
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={() => handleAction(request.id, "ignore")}
                    >
                      <X className="h-4 w-4 mr-1" />
                      Ignore
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

