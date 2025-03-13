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

interface CreateEventProps {
  open: boolean
  onOpenChangeAction: (open: boolean) => void
}

// Mapping from dropdown option to minutes
const durationMapping: { [key: string]: number } = {
  '30 minutes': 30,
  '1hr': 60,
  '2hrs': 120,
}

export function CreateEvent({ open, onOpenChangeAction }: CreateEventProps) {
  // Create a local open state so that child components can update it.
  const [isOpen, setIsOpen] = useState(open)

  // Sync local state if prop changes.
  useEffect(() => {
    setIsOpen(open)
  }, [open])

  // Callback to update open in both local state and parent state.
  const handleUpdateOpen = useCallback(
    (newOpen: boolean) => {
      setIsOpen(newOpen)
      onOpenChangeAction(newOpen)
    },
    [onOpenChangeAction],
  )

  const [myEvents, setMyEvents] = useState<any[]>([])
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [duration, setDuration] = useState('1hr')

  const [userSearchQuery, setUserSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [selectedParticipants, setSelectedParticipants] = useState<any[]>([])

  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedRange, setSelectedRange] = useState<{
    start: Date
    end: Date
  } | null>(null)
  const [availabilityData, setAvailabilityData] = useState<any>(null)

  const [conflictEvents, setConflictEvents] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const [currentUser, setCurrentUser] = useState<any>(null)

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await slotifyClient.GetAPIUsersMe()
        console.log('Current user:', user)
        setCurrentUser(user)
      } catch (error) {
        console.error('Error fetching current user:', error)
      }
    }
    fetchCurrentUser()
  }, [])

  // Ref to store the last fetched range (optional)
  const lastFetchedRangeRef = useRef<{ start: number; end: number } | null>(
    null,
  )

  // Memoize selectedRange to prevent unnecessary re-renders
  const memoizedRange = useMemo(
    () => selectedRange,
    [selectedRange?.start, selectedRange?.end],
  )

  // Update selectedRange only when necessary
  const handleRangeSelect = useCallback(
    (range: { start: Date; end: Date } | null) => {
      if (
        range &&
        (!selectedRange ||
          selectedRange.start.getTime() !== range.start.getTime() ||
          selectedRange.end.getTime() !== range.end.getTime())
      ) {
        console.log('Range selected (updating):', range)
        setSelectedRange(range)
      } else {
        console.log('Range selected is identical or null; no update.')
      }
    },
    [selectedRange],
  )

  useEffect(() => {
    const searchUsers = async () => {
      if (!userSearchQuery) {
        setSearchResults([])
        return
      }
      try {
        let response
        if (userSearchQuery.includes('@')) {
          // Search by email
          response = await slotifyClient.GetAPIUsers({
            queries: { email: userSearchQuery },
          })
        } else {
          // Search by name
          response = await slotifyClient.GetAPIUsers({
            queries: { name: userSearchQuery },
          })
        }
        console.log('User search results:', response)
        setSearchResults(response)
      } catch (error) {
        console.error('Error searching users:', error)
        toast({
          title: 'Error',
          description: 'Failed to search users.',
          variant: 'destructive',
        })
      }
    }
    searchUsers()
  }, [userSearchQuery])

  // Add a user from search results to selected participants
  const handleAddParticipant = (user: any) => {
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
    setUserSearchQuery('')
    setSearchResults([])
  }

  // Remove a selected participant
  const handleRemoveParticipant = (userId: string) => {
    setSelectedParticipants(selectedParticipants.filter(u => u.id !== userId))
  }

  // Fetch scheduling suggestions and then fetch conflict events from each selected participant's calendar
  const handleCheckAvailability = async () => {
    // Fetch user's own events
    const myEventsResponse = await slotifyClient.GetAPICalendarMe({
      queries: {
        start: memoizedRange?.start?.toISOString() || new Date().toISOString(),
        end: memoizedRange?.end?.toISOString() || new Date().toISOString(),
      },
    })
    console.log("User's own events:", myEventsResponse)
    setMyEvents(myEventsResponse)

    console.log('Check Availability button clicked.')

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
      console.log(
        'Range unchanged from last fetch; re-fetching due to manual trigger.',
      )
    }

    lastFetchedRangeRef.current = {
      start: memoizedRange.start.getTime(),
      end: memoizedRange.end.getTime(),
    }

    setIsLoading(true)
    try {
      // Build attendees array from selected participants for scheduling suggestions
      const attendees = selectedParticipants.map(user => ({
        emailAddress: {
          address: user.email,
          name: user.name || user.email,
        },
        attendeeType: 'required' as const,
      }))
      console.log('Attendees:', attendees)

      const durationInMinutes = durationMapping[duration] || 60
      const meetingDuration = `PT${durationInMinutes}M`
      console.log('Meeting duration:', meetingDuration)

      console.log('Sending scheduling API call with details:', {
        meetingName: title || 'New Meeting',
        meetingDuration,
        timeSlot: {
          start: memoizedRange.start.toISOString(),
          end: memoizedRange.end.toISOString(),
        },
      })

      // Fetch scheduling suggestions
      const response = await slotifyClient.PostAPISchedulingSlots({
        attendees,
        meetingName: title || 'New Meeting',
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

      console.log('Scheduling API response received:', response)
      setAvailabilityData(response)

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
      console.log('Conflict events fetched:', allConflictEvents)
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
      console.log('Finished API call for availability.')
    }
  }

  const handleCreateManually = () => {
    console.log('Manual event creation triggered')
    onOpenChangeAction(false)
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
                      console.log('Title changed:', e.target.value)
                      setTitle(e.target.value)
                    }}
                  />
                </div>

                <div className='space-y-2 m-2'>
                  <Label htmlFor='location'>Location</Label>
                  <Input
                    id='location'
                    placeholder='None'
                    value={location}
                    onChange={e => {
                      console.log('Location changed:', e.target.value)
                      setLocation(e.target.value)
                    }}
                  />
                </div>

                <div className='space-y-2 m-2'>
                  <Label htmlFor='duration'>Event Duration</Label>
                  <select
                    id='duration'
                    value={duration}
                    onChange={e => {
                      console.log('Duration changed:', e.target.value)
                      setDuration(e.target.value)
                    }}
                    className='block w-full rounded-md border border-gray-300 p-2'
                  >
                    <option value='30 minutes'>30 minutes</option>
                    <option value='1hr'>1hr</option>
                    <option value='2hrs'>2hrs</option>
                  </select>
                </div>

                {/* Participants Search & Selected Users */}
                <div className='space-y-2 relative m-2'>
                  <Label htmlFor='user-search'>Search Participants</Label>
                  <Input
                    id='user-search'
                    placeholder='Enter email or name'
                    value={userSearchQuery}
                    onChange={e => {
                      console.log('User search query:', e.target.value)
                      setUserSearchQuery(e.target.value)
                    }}
                  />
                  {/* Search results dropdown */}
                  {searchResults.length > 0 && (
                    <div className='border rounded bg-white shadow absolute z-10 w-full max-h-40 overflow-y-auto m-2'>
                      {searchResults.map(user => (
                        <div
                          key={user.id}
                          className='p-2 hover:bg-gray-100 cursor-pointer'
                          onClick={() => handleAddParticipant(user)}
                        >
                          {user.name
                            ? `${user.name} (${user.email})`
                            : user.email}
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Selected participants */}
                  {selectedParticipants.length > 0 && (
                    <div className='m-2'>
                      <div className='font-medium mb-2'>
                        Selected Participants:
                      </div>
                      <div className='flex flex-wrap gap-2'>
                        {selectedParticipants.map(user => (
                          <div
                            key={user.id}
                            className='flex items-center gap-1 bg-blue-100 text-blue-800 rounded px-2 py-1'
                          >
                            <span>{user.name ? user.name : user.email}</span>
                            <button
                              onClick={() => handleRemoveParticipant(user.id)}
                              className='text-blue-500 hover:text-blue-700'
                            >
                              x
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className='space-y-2'>
                  <Label>Event Range</Label>
                  <EventRangePicker
                    selectedDate={selectedDate}
                    onDateSelect={date => {
                      console.log('Date selected:', date)
                      setSelectedDate(date)
                    }}
                    onRangeSelect={handleRangeSelect}
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
              isLoading={isLoading}
              currentUser={currentUser}
              participants={selectedParticipants}
              location={
                location
                  ? location
                  : currentUser
                    ? currentUser.location
                    : 'Online'
              }
              eventTitle={title}
              handleUpdateOpen={handleUpdateOpen}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
