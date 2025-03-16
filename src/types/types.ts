import { schemas } from '@/types/client'
import { z } from 'zod'

export type Attendee = z.infer<typeof schemas.Attendee>
export type AttendeeBase = z.infer<typeof schemas.AttendeeBase>
export type User = z.infer<typeof schemas.User>
export type CalendarEvent = z.infer<typeof schemas.CalendarEvent>
export type SlotifyGroup = z.infer<typeof schemas.SlotifyGroup>
export type InvitesMe = z.infer<typeof schemas.InvitesMe>
export type InvitesGroup = z.infer<typeof schemas.InvitesGroup>
export type SchedulingSlotsSuccessResponse = z.infer<
  typeof schemas.SchedulingSlotsSuccessResponseBody
>
export type MeetingTimeSuggestion = z.infer<
  typeof schemas.MeetingTimeSuggestion
>
