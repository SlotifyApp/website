'use client'

import { useEffect, useRef, useState } from 'react'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { errorToast, toast } from '@/hooks/use-toast'
import { Check, ChevronDown, Search } from 'lucide-react'
import slotifyClient from '@/hooks/fetch'
import { Attendee, SlotifyGroup, User } from '@/types/types'

interface CreateEventDialogProps {
  open: boolean
  onOpenChangeAction: (open: boolean) => void
  selectedDate: Date | null
}

export function CreateEventDialog({
  open,
  onOpenChangeAction,
  selectedDate,
}: CreateEventDialogProps) {
  const [date, setDate] = useState<Date | undefined>(selectedDate || undefined)
  const [yourSlotifyGroups, setYourSlotifyGroups] = useState<
    Array<SlotifyGroup>
  >([])
  const [selectedSlotifyGroup, setSelectedGroup] =
    useState<SlotifyGroup | null>(null)
  const [members, setMembers] = useState<User[]>([])
  const [selectedParticipants, setSelectedParticipants] = useState<User[]>([])

  const [startTime, setStartTime] = useState<string | null>(null)
  const [endTime, setEndTime] = useState<string | null>(null)

  const createEvent = async (
    eventTitle: string,
    startTime: string,
    endTime: string,
    description?: string,
  ) => {
    const attendees: Attendee[] = []
    selectedParticipants.forEach(participant => {
      const attendee: Attendee = {
        email: participant.email,
        attendeeType: 'required', //TODO: Ask what the type is
        responseStatus: 'notResponded',
      }
      attendees.push(attendee)
    })
    if (!description) {
      description = 'Calendar description default'
    }

    //TODO: ask for locations
    try {
      const calRouteData = await slotifyClient.PostAPICalendarMe({
        attendees,
        subject: eventTitle,
        body: description,
        locations: [],
        startTime,
        endTime,
      })
      if (calRouteData) {
        toast({
          title: 'Successfully scheduled meeting',
        })
      }
    } catch (error) {
      console.error(error)
      errorToast(error)
    }
  }
  useEffect(() => {
    const getUserSlotifyGroups = async () => {
      // This code is ugly, but needs to be done for the refresh.
      // It works, but we need better code
      try {
        const slotifyGroupsData = await slotifyClient.GetAPISlotifyGroupsMe()
        setYourSlotifyGroups(slotifyGroupsData)
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
    }
    const getSlotifyGroupMembers = async () => {
      if (!selectedSlotifyGroup) {
        return
      }
      const slotifyGroupID = selectedSlotifyGroup?.id
      try {
        const slotifyGroupUsersData =
          await slotifyClient.GetAPISlotifyGroupsSlotifyGroupIDUsers({
            params: {
              slotifyGroupID: slotifyGroupID,
            },
          })

        setMembers(slotifyGroupUsersData)
      } catch (error) {
        console.error(error)
        errorToast(error)
      }
    }

    getUserSlotifyGroups()
    getSlotifyGroupMembers()
  }, [selectedSlotifyGroup])

  const toggleParticipant = (participant: User) => {
    setSelectedParticipants(current =>
      current.some(p => p.id === participant.id)
        ? current.filter(p => p.id !== participant.id)
        : [...current, participant],
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChangeAction}>
      <DialogContent className='max-w-4xl'>
        <DialogHeader>
          <DialogTitle>Event Form</DialogTitle>
          <DialogDescription>Create a new event.</DialogDescription>
        </DialogHeader>
        <div className='grid grid-cols-[300px_1fr] gap-6'>
          {/* Left side - Participants */}
          <div className='border-r pr-6'>
            <h2 className='font-semibold mb-4'>Participants</h2>
            <ScrollArea className='h-[500px]'>
              <div className='space-y-2'>
                {members.map(member => (
                  <div
                    key={member.id}
                    className={cn(
                      'flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-accent',
                      selectedParticipants.some(p => p.id === member.id) &&
                        'bg-accent',
                    )}
                    onClick={() => toggleParticipant(member)}
                  >
                    <Avatar>
                      <AvatarImage
                        src={`https://api.dicebear.com/6.x/initials/svg?seed=${
                          member.firstName + ' ' + member.lastName
                        }`}
                        alt={member.firstName + ' ' + member.lastName}
                      />
                      <AvatarFallback>
                        {member.firstName + ' ' + member.lastName}
                      </AvatarFallback>
                    </Avatar>
                    <div className='flex-1 min-w-0'>
                      <div className='font-medium truncate'>
                        {member.firstName + ' ' + member.lastName}
                      </div>
                      <div className='text-sm text-muted-foreground truncate'>
                        {member.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Right side - Event details form */}
          <div className='space-y-6'>
            <div>
              <h2 className='font-semibold mb-4'>Event Details</h2>
            </div>

            <ScrollArea>
              <div className='space-y-4'>
                <div className='space-y-2'>
                  <div className='space-y-2'>
                    <SlotifyGroupSelect
                      selectedSlotifyGroup={selectedSlotifyGroup}
                      setSelectedSlotifyGroupAction={setSelectedGroup}
                      slotifyGroups={yourSlotifyGroups}
                    />
                  </div>
                  <Label htmlFor='subject'>Subject</Label>
                  <Input id='subject' placeholder='Enter event subject' />
                </div>

                <div className='space-y-2'>
                  <Label>Date</Label>
                  <Calendar
                    mode='single'
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <Select onValueChange={value => setStartTime(value)}>
                    <SelectTrigger id='start-time'>
                      <SelectValue placeholder='Select start time' />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }).map((_, i) => (
                        <SelectItem key={i} value={`${i}:00`}>
                          {`${i}:00`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select onValueChange={value => setEndTime(value)}>
                    <SelectTrigger id='end-time'>
                      <SelectValue placeholder='Select end time' />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }).map((_, i) => (
                        <SelectItem key={i} value={`${i}:00`}>
                          {`${i}:00`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </ScrollArea>

            <div className='flex justify-end gap-2'>
              <Button
                variant='outline'
                onClick={() => onOpenChangeAction(false)}
              >
                Cancel
              </Button>
              <Button
                className='bg-focusColor hover:bg-focusColor/90'
                onClick={() => {
                  const eventTitle = (
                    document.getElementById('subject') as HTMLInputElement
                  )?.value

                  if (!date || !startTime || !endTime) {
                    toast({
                      title: 'Error',
                      description:
                        'Please select a date, start time, and end time.',
                      variant: 'destructive',
                    })
                    return
                  }

                  const startDateTime = new Date(date)
                  const [startHour, startMinutes] = startTime
                    .split(':')
                    .map(Number)

                  const endDateTime = new Date(date)
                  const [endHour, endMinutes] = endTime.split(':').map(Number)

                  if (startHour && endHour) {
                    startDateTime.setHours(startHour, startMinutes, 0)
                    endDateTime.setHours(endHour, endMinutes, 0)

                    createEvent(
                      eventTitle,
                      startDateTime.toISOString(),
                      endDateTime.toISOString(),
                    )
                  }
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

interface SlotifyGroupSelectProps {
  selectedSlotifyGroup: SlotifyGroup | null
  setSelectedSlotifyGroupAction: (slotifyGroup: SlotifyGroup | null) => void
  slotifyGroups: SlotifyGroup[]
}

export default function SlotifyGroupSelect({
  selectedSlotifyGroup: selectedSlotifyGroup,
  setSelectedSlotifyGroupAction: setSelectedSlotifyGroupAction,
  slotifyGroups: slotifyGroups,
}: SlotifyGroupSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filteredSlotifyGroups = slotifyGroups.filter(slotifyGroup =>
    slotifyGroup.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='relative w-64' ref={dropdownRef}>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        aria-haspopup='listbox'
        aria-expanded={isOpen}
      >
        {selectedSlotifyGroup
          ? selectedSlotifyGroup.name
          : 'Select a slotify group'}
        <ChevronDown
          className='w-5 h-5 ml-2 -mr-1 text-gray-400'
          aria-hidden='true'
        />
      </button>

      {isOpen && (
        <div className='absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg'>
          <div className='px-3 py-2'>
            <div className='flex items-center'>
              <Search className='w-5 h-5 text-gray-400' />
              <input
                type='text'
                className='w-full px-2 py-1 ml-2 text-sm focus:outline-none'
                placeholder='Search slotify groups...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <ul
            className='py-1 overflow-auto text-base rounded-md max-h-60 focus:outline-none sm:text-sm'
            tabIndex={-1}
            role='listbox'
          >
            {filteredSlotifyGroups.map(team => (
              <li
                key={team.id}
                className={`${
                  selectedSlotifyGroup === team
                    ? 'text-white bg-indigo-600'
                    : 'text-gray-900'
                } cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-indigo-100`}
                role='option'
                aria-selected={selectedSlotifyGroup === team}
                onClick={() => {
                  setSelectedSlotifyGroupAction(team)
                  setIsOpen(false)
                  setSearchTerm('')
                }}
              >
                <span className='block truncate'>{team.name}</span>
                {selectedSlotifyGroup === team && (
                  <span className='absolute inset-y-0 right-0 flex items-center pr-4'>
                    <Check className='w-5 h-5' aria-hidden='true' />
                  </span>
                )}
              </li>
            ))}
            {filteredSlotifyGroups.length === 0 && (
              <li className='px-3 py-2 text-sm text-gray-900'>
                No teams found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
