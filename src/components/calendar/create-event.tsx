'use client'

import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EventRangePicker } from './event-range-picker'
import { WeeklyCalendar } from './weekly-calendar'
import slotifyClient from '@/hooks/fetch'
import { toast } from '@/hooks/use-toast'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import {
  User,
  AttendeeBase,
  CalendarEvent,
  SchedulingSlotsSuccessResponse,
  MeetingTimeSuggestion,
} from '@/types/types'
import { UserSearch } from '@/components/user-search-bar'

interface CreateEventProps {
  open: boolean
  onOpenChangeAction: (open: boolean) => void
  closeCreateEventDialogOpen: () => void
  initialTitle?: string
  initialDuration?: number
  initialParticipants?: User[]
  initialSelectedRange?: { start: Date; end: Date } | null
  inputsDisabled?: boolean
  isRescheduleAccepted: boolean
  isComplete: boolean
  rescheduleID?: number | null
  getRescheduleEvents?: () => Promise<void>
  handleManualCreateEvent?: (date: Date) => void
}

export function CreateEvent({
  open,
  onOpenChangeAction,
  closeCreateEventDialogOpen,
  initialTitle = '',
  initialDuration,
  initialParticipants = [],
  initialSelectedRange = null,
  inputsDisabled = false,
  isRescheduleAccepted,
  isComplete,
  rescheduleID = null,
  getRescheduleEvents,
  handleManualCreateEvent,
}: CreateEventProps) {
  const [myEvents, setMyEvents] = useState<CalendarEvent[]>([])
  const [title, setTitle] = useState(initialTitle)
  const [location, setLocation] = useState('')
  const [duration, setDuration] = useState(initialDuration)

  // const [userSearchQuery, setUserSearchQuery] = useState('')
  // const [searchResults, setSearchResults] = useState<User[]>([])
  const [selectedParticipants, setSelectedParticipants] =
    useState<User[]>(initialParticipants)

  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedRange, setSelectedRange] = useState(initialSelectedRange)
  const [availabilityData, setAvailabilityData] =
    useState<SchedulingSlotsSuccessResponse | null>(null)

  const [conflictEvents, setConflictEvents] = useState<CalendarEvent[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await slotifyClient.GetAPIUsersMe()
        setCurrentUser(user)
      } catch (error) {
        console.error('Error fetching current user:', error)
      }
    }
    fetchCurrentUser()
  }, [])

  useEffect(() => {
    if (open) {
      setTitle(initialTitle)
      setDuration(initialDuration)
      setSelectedParticipants(initialParticipants)
      setSelectedRange(initialSelectedRange)
    }
  }, [
    open,
    initialTitle,
    initialDuration,
    initialParticipants,
    initialSelectedRange,
  ])

  // Ref to store the last fetched range (optional)
  const lastFetchedRangeRef = useRef<{ start: number; end: number } | null>(
    null,
  )

  // Memoize selectedRange to prevent unnecessary re-renders
  const memoizedRange = useMemo(() => selectedRange, [selectedRange])

  // Update selectedRange only when necessary
  const handleRangeSelect = useCallback(
    (range: { start: Date; end: Date } | null) => {
      if (
        range &&
        (!selectedRange ||
          selectedRange.start.getTime() !== range.start.getTime() ||
          selectedRange.end.getTime() !== range.end.getTime())
      ) {
        setSelectedRange(range)
      }
    },
    [selectedRange],
  )

  // Add a user from search results to selected participants
  const handleAddParticipant = (user: User) => {
    if (
      currentUser &&
      user.email.toLowerCase() === currentUser.email.toLowerCase()
    ) {
      toast({
        title: 'Invalid Participant',
        description: 'You cannot add yourself as a participant.',
        variant: 'destructive',
      })
      return
    }
    if (!selectedParticipants.find(u => u.id === user.id)) {
      setSelectedParticipants([...selectedParticipants, user])
    }
  }

  // Remove a selected participant
  const handleRemoveParticipant = (userId: number) => {
    setSelectedParticipants(selectedParticipants.filter(u => u.id !== userId))
  }

  // Fetch scheduling suggestions and then fetch conflict events from each selected participant's calendar
  const handleCheckAvailability = async () => {
    setIsLoading(true)
    // Fetch user's own events
    const myEventsResponse = await slotifyClient.GetAPICalendarMe({
      queries: {
        start: memoizedRange?.start?.toISOString() || new Date().toISOString(),
        end: memoizedRange?.end?.toISOString() || new Date().toISOString(),
      },
    })
    setMyEvents(myEventsResponse)

    // Validate required fields
    if (selectedParticipants.length === 0 || !memoizedRange) {
      toast({
        title: 'Missing Fields',
        description:
          'Please select at least one participant and choose an Event Range.',
        variant: 'destructive',
      })
      return
    }

    if (
      lastFetchedRangeRef.current &&
      memoizedRange &&
      lastFetchedRangeRef.current.start === memoizedRange.start.getTime() &&
      lastFetchedRangeRef.current.end === memoizedRange.end.getTime()
    ) {
      lastFetchedRangeRef.current = {
        start: memoizedRange.start.getTime(),
        end: memoizedRange.end.getTime(),
      }
    }

    try {
      // Build attendees array from selected participants for scheduling suggestions
      const attendees: AttendeeBase[] = []
      for (const user of selectedParticipants) {
        attendees.push({
          emailAddress: {
            address: user.email,
            name: user.firstName + ' ' + user.lastName,
          },
          attendeeType: 'required',
        })
      }

      const durationInMinutes = duration
      const meetingDuration = `PT${durationInMinutes}M`

      // Divide the selected range into daily segments
      const dailyPromises: Promise<SchedulingSlotsSuccessResponse>[] = []
      const suggestionsResults: MeetingTimeSuggestion[] = []
      let currentStart = new Date(memoizedRange.start)
      const overallEnd = new Date(memoizedRange.end)

      while (currentStart < overallEnd) {
        const nextDay = new Date(currentStart)
        nextDay.setDate(nextDay.getDate() + 1)
        const dayEnd = nextDay < overallEnd ? nextDay : overallEnd

        dailyPromises.push(
          slotifyClient.PostAPISchedulingSlots({
            attendees,
            meetingName: title || 'New Meeting',
            meetingDuration,
            timeConstraint: {
              timeSlots: [
                {
                  start: currentStart.toISOString(),
                  end: dayEnd.toISOString(),
                },
              ],
            },
            isOrganizerOptional: false,
            locationConstraint: {
              isRequired: false,
              suggestLocation: false,
            },
            minimumAttendeePercentage: 0,
          }),
        )
        // Move to the next day
        currentStart = nextDay
      }

      // Execute daily scheduling calls in parallel
      const dailyResponses = await Promise.all(dailyPromises)
      // Flatten all suggestions from each day
      dailyResponses.forEach(response => {
        if (
          response &&
          response.meetingTimeSuggestions &&
          response.meetingTimeSuggestions.length !== 0
        ) {
          if (Array.isArray(response.meetingTimeSuggestions)) {
            suggestionsResults.push(...response.meetingTimeSuggestions)
          } else {
            suggestionsResults.push(response.meetingTimeSuggestions)
          }
        }
      })

      // Construct a SchedulingSlotsSuccessResponse object.
      // Use the emptySuggestionsReason from the first response
      const combinedAvailabilityData: SchedulingSlotsSuccessResponse = {
        emptySuggestionsReason: dailyResponses[0]?.emptySuggestionsReason,
        meetingTimeSuggestions: suggestionsResults,
      }

      setAvailabilityData(combinedAvailabilityData)

      // Now fetch each selected participant's calendar events for conflicts
      const conflictPromises = selectedParticipants.map(user =>
        slotifyClient.GetAPICalendarUserID({
          params: { userID: user.id },
          queries: {
            start: memoizedRange.start.toISOString(),
            end: memoizedRange.end.toISOString(),
          },
        }),
      )
      const conflictResults = await Promise.all(conflictPromises)
      const allConflictEvents = conflictResults.flat()

      setConflictEvents(allConflictEvents)
    } catch (error) {
      console.error('Error fetching availability:', error)
      toast({
        title: 'Error',
        description: 'Failed to fetch availability data.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateManually = () => {
    onOpenChangeAction(false)
    handleManualCreateEvent!(new Date())
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChangeAction}>
      <DialogContent className='max-w-[70vw] max-h-[90vh]'>
        <DialogHeader>
          <DialogTitle>New Event</DialogTitle>
          <DialogDescription>
            Create a new event and find the best time for all participants.
          </DialogDescription>
        </DialogHeader>

        <div className='flex items-center gap-6 h-[70vh] w-full pb-5'>
          {/* Left side - Form fields */}
          <ScrollArea.Root className='h-full w-[22vw]'>
            <ScrollArea.Viewport className='h-full'>
              <div className='space-y-6 relative w-[20vw]'>
                <div className='space-y-2 m-2'>
                  <Label htmlFor='event-title'>Event Title</Label>
                  <Input
                    id='event-title'
                    placeholder='My New Meeting'
                    value={title}
                    onChange={e => {
                      setTitle(e.target.value)
                    }}
                    disabled={inputsDisabled}
                  />
                </div>

                <div className='space-y-2 m-2'>
                  <Label htmlFor='location'>Location</Label>
                  <Input
                    id='location'
                    placeholder='None'
                    value={location}
                    onChange={e => {
                      setLocation(e.target.value)
                    }}
                    disabled={inputsDisabled}
                  />
                </div>

                <div className='space-y-2 m-2'>
                  <Label htmlFor='duration'>Event Duration</Label>
                  <select
                    id='duration'
                    value={duration}
                    onChange={e => {
                      setDuration(Number(e.target.value))
                      console.log('e.target.value', e.target.value)
                      console.log('duration', duration)
                    }}
                    className='block w-full rounded-md border border-gray-300 p-2'
                    disabled={inputsDisabled}
                  >
                    <option value={30}>30 minutes</option>
                    <option value={60}>1hr</option>
                    <option value={120}>2hrs</option>
                  </select>
                </div>

                <UserSearch
                  handleAddUsersAction={handleAddParticipant}
                  handleRemoveUserAction={handleRemoveParticipant}
                  selectedUsers={selectedParticipants}
                />

                <div className='space-y-2'>
                  <Label>Event Range</Label>
                  <EventRangePicker
                    selectedDate={selectedDate}
                    selectedRange={selectedRange}
                    onDateSelect={date => {
                      if (!inputsDisabled) setSelectedDate(date)
                    }}
                    onRangeSelect={range => {
                      if (!inputsDisabled) handleRangeSelect(range)
                    }}
                    disabled={inputsDisabled}
                  />
                </div>

                <Button
                  className='w-full'
                  variant='default'
                  onClick={handleCheckAvailability}
                  disabled={isLoading}
                >
                  {isLoading
                    ? 'Checking Availability...'
                    : 'Check Availability'}
                </Button>

                <Button
                  className='w-full'
                  variant='default'
                  onClick={handleCreateManually}
                >
                  Create Manually
                </Button>
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              className='flex touch-none select-none bg-gray-100 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-gray-200 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col'
              orientation='vertical'
            >
              <ScrollArea.Thumb className='relative flex-1 rounded-[10px] bg-gray-500 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-11 before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2' />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className='bg-focusColor' />
          </ScrollArea.Root>

          {/* Right side - Calendar view */}
          <div className='border rounded-md w-[45vw] h-full'>
            <WeeklyCalendar
              availabilityData={availabilityData}
              conflictEvents={conflictEvents}
              myEvents={myEvents}
              currentUser={currentUser}
              participants={selectedParticipants}
              location={''} //TODO fix this
              eventTitle={title ?? 'New Meeting'}
              closeCreateEventDialogOpen={closeCreateEventDialogOpen}
              isRescheduleAccepted={isRescheduleAccepted!}
              isComplete={isComplete!}
              rescheduleID={rescheduleID}
              selectedRange={memoizedRange}
              getRescheduleEvents={getRescheduleEvents}
              availabilityLoading={isLoading}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
