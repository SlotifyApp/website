"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EventRangePicker } from "./event-range-picker"
import { WeeklyCalendar } from "./weekly-calendar"
import slotifyClient from "@/hooks/fetch"
import { toast } from "@/hooks/use-toast"

interface CreateEventProps {
  open: boolean
  onOpenChangeAction: (open: boolean) => void
}

export function CreateEvent({ open, onOpenChangeAction }: CreateEventProps) {
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [duration, setDuration] = useState("30 minutes")
  const [participants, setParticipants] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedRange, setSelectedRange] = useState<{ start: Date; end: Date } | null>(null)
  const [availabilityData, setAvailabilityData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Fetch availability data when participants or date range changes
  useEffect(() => {
    const fetchAvailability = async () => {
      if (!participants || !selectedRange) return

      setIsLoading(true)
      try {
        // Parse email addresses
        const attendees = participants.split(",").map((email) => ({
          emailAddress: {
            address: email.trim(),
            name: email.trim(),
          },
          attendeeType: "required" as const,
        }))

        const response = await slotifyClient.PostAPISchedulingFree({
          attendees,
          meetingName: title || "New Meeting",
          meetingDuration: `PT${duration.split(" ")[0]}M`, // Convert "30 minutes" to "PT30M"
          timeConstraint: {
            timeSlots: [
              {
                start: selectedRange.start.toISOString(),
                end: selectedRange.end.toISOString(),
              },
            ],
          },
          isOrganizerOptional: false,
          locationConstraint: {
            isRequired: false,
            suggestLocation: false,
          },
        })

        setAvailabilityData(response)
      } catch (error) {
        console.error("Error fetching availability:", error)
        toast({
          title: "Error",
          description: "Failed to fetch availability data",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchAvailability()
  }, [participants, selectedRange, title, duration])

  const handleCreateManually = () => {
    // Implement manual creation logic
    toast({
      title: "Event Created",
      description: "Your event has been created manually",
    })
    onOpenChangeAction(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChangeAction}>
      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <DialogTitle>New Event</DialogTitle>
          <DialogDescription>Create a new event and find the best time for all participants</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-[350px_1fr] gap-6">
          {/* Left side - Form fields */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="event-title">Event Title</Label>
              <Input
                id="event-title"
                placeholder="Example Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Online"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Event Duration</Label>
              <Input
                id="duration"
                placeholder="30 minutes"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="participants">Participants</Label>
              <Input
                id="participants"
                placeholder="user1@microsoft.com"
                value={participants}
                onChange={(e) => setParticipants(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Event Range</Label>
              <EventRangePicker
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
                onRangeSelect={setSelectedRange}
              />
            </div>

            <Button className="w-full" variant="default" onClick={handleCreateManually}>
              Create Manually
            </Button>
          </div>

          {/* Right side - Calendar view */}
          <div className="border rounded-md">
            <WeeklyCalendar availabilityData={availabilityData} isLoading={isLoading} selectedRange={selectedRange} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

