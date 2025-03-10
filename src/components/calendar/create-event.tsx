"use client"

import { useState, useMemo, useCallback, useRef } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
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

// Mapping from dropdown option to minutes
const durationMapping: { [key: string]: number } = {
  "30 minutes": 30,
  "1hr": 60,
  "2hrs": 120,
}

export function CreateEvent({ open, onOpenChangeAction }: CreateEventProps) {
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [duration, setDuration] = useState("1hr")
  const [participants, setParticipants] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedRange, setSelectedRange] = useState<{ start: Date; end: Date } | null>(null)
  const [availabilityData, setAvailabilityData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Ref to store the last fetched range (optional: if you want to avoid duplicate calls)
  const lastFetchedRangeRef = useRef<{ start: number; end: number } | null>(null)

  // Use a memoized version of selectedRange to prevent unnecessary re-creations
  const memoizedRange = useMemo(() => selectedRange, [selectedRange?.start, selectedRange?.end])

  // Custom callback for updating selectedRange only when necessary
  const handleRangeSelect = useCallback(
    (range: { start: Date; end: Date } | null) => {
      if (
        range &&
        (!selectedRange ||
          selectedRange.start.getTime() !== range.start.getTime() ||
          selectedRange.end.getTime() !== range.end.getTime())
      ) {
        console.log("Range selected (updating):", range)
        setSelectedRange(range)
      } else {
        console.log("Range selected is identical or null; no update.")
      }
    },
    [selectedRange]
  )

  // New function to manually trigger the API call for checking availability
  const handleCheckAvailability = async () => {
    console.log("Check Availability button clicked.")

    // Validate that required fields are provided
    if (!participants || !memoizedRange) {
      toast({
        title: "Missing Fields",
        description: "Please fill out the Participants and select an Event Range.",
        variant: "destructive",
      })
      return
    }

    // Optionally, you can clear the previous fetched range here if you want to allow re-fetching
    // lastFetchedRangeRef.current = null;

    // Optionally check if the range is the same as last fetched (if you want to avoid duplicate calls)
    if (
      lastFetchedRangeRef.current &&
      memoizedRange &&
      lastFetchedRangeRef.current.start === memoizedRange.start.getTime() &&
      lastFetchedRangeRef.current.end === memoizedRange.end.getTime()
    ) {
      console.log("Range unchanged from last fetch; re-fetching due to manual trigger.")
    }

    lastFetchedRangeRef.current = {
      start: memoizedRange.start.getTime(),
      end: memoizedRange.end.getTime(),
    }

    setIsLoading(true)
    try {
      const attendees = participants.split(",").map((email) => ({
        emailAddress: {
          address: email.trim(),
          name: email.trim(),
        },
        attendeeType: "required" as const,
      }))
      console.log("Parsed attendees:", attendees)

      // Use the mapping to convert the selected duration to minutes
      const durationInMinutes = durationMapping[duration] || 60
      const meetingDuration = `PT${durationInMinutes}M`
      console.log("Converted meeting duration:", meetingDuration)

      console.log("Sending API call with meeting details:", {
        meetingName: title || "New Meeting",
        meetingDuration,
        timeSlot: {
          start: memoizedRange.start.toISOString(),
          end: memoizedRange.end.toISOString(),
        },
      })

      const response = await slotifyClient.PostAPISchedulingSlots({
        attendees,
        meetingName: title || "New Meeting",
        meetingDuration,
        timeConstraint: {
          timeSlots: [
            {
              start: memoizedRange.start.toISOString(),
              end: memoizedRange.end.toISOString(),
            },
          ],
        },
        isOrganizerOptional: false,
        locationConstraint: {
          isRequired: false,
          suggestLocation: false,
        },
      })

      console.log("API response received:", response)
      setAvailabilityData(response)
      toast({
        title: "Availability Fetched",
        description: "Potential time slots have been updated.",
      })
    } catch (error) {
      console.error("Error fetching availability:", error)
      toast({
        title: "Error",
        description: "Failed to fetch availability data.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
      console.log("Finished API call for availability.")
    }
  }

  // Optional: This button still triggers manual event creation
  const handleCreateManually = () => {
    console.log("Manual event creation triggered")
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
          <DialogDescription>
            Create a new event and find the best time for all participants.
          </DialogDescription>
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
                onChange={(e) => {
                  console.log("Title changed:", e.target.value)
                  setTitle(e.target.value)
                }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Online"
                value={location}
                onChange={(e) => {
                  console.log("Location changed:", e.target.value)
                  setLocation(e.target.value)
                }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Event Duration</Label>
              <select
                id="duration"
                value={duration}
                onChange={(e) => {
                  console.log("Duration changed:", e.target.value)
                  setDuration(e.target.value)
                }}
                className="block w-full rounded-md border border-gray-300 p-2"
              >
                <option value="30 minutes">30 minutes</option>
                <option value="1hr">1hr</option>
                <option value="2hrs">2hrs</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="participants">Participants</Label>
              <Input
                id="participants"
                placeholder="user1@microsoft.com"
                value={participants}
                onChange={(e) => {
                  console.log("Participants changed:", e.target.value)
                  setParticipants(e.target.value)
                }}
              />
            </div>

            <div className="space-y-2">
              <Label>Event Range</Label>
              <EventRangePicker
                selectedDate={selectedDate}
                onDateSelect={(date) => {
                  console.log("Date selected:", date)
                  setSelectedDate(date)
                }}
                onRangeSelect={handleRangeSelect}
              />
            </div>

            {/* New button to trigger API call */}
            <Button
              className="w-full"
              variant="default"
              onClick={handleCheckAvailability}
              disabled={isLoading}
            >
              {isLoading ? "Checking Availability..." : "Check Availability"}
            </Button>

            <Button className="w-full" variant="default" onClick={handleCreateManually}>
              Create Manually
            </Button>
          </div>

          {/* Right side - Calendar view */}
          <div className="border rounded-md">
            <WeeklyCalendar
              availabilityData={availabilityData}
              isLoading={isLoading}
              selectedRange={selectedRange}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
