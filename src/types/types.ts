import { schemas } from '@/types/client'
import { z } from 'zod'

export type Attendee = z.infer<typeof schemas.Attendee>
export type AttendeeBase = z.infer<typeof schemas.AttendeeBase>
export type User = z.infer<typeof schemas.User>
export type CalendarEvent = z.infer<typeof schemas.CalendarEvent>
export type SlotifyGroup = z.infer<typeof schemas.SlotifyGroup>
export type MSFTGroup = z.infer<typeof schemas.MSFTGroup>
export type InvitesMe = z.infer<typeof schemas.InvitesMe>
export type InvitesGroup = z.infer<typeof schemas.InvitesGroup>
export type SchedulingSlotsSuccessResponse = z.infer<
  typeof schemas.SchedulingSlotsSuccessResponseBody
>
export type MeetingTimeSuggestion = z.infer<
  typeof schemas.MeetingTimeSuggestion
>
export type RescheduleRequest = z.infer<typeof schemas.RescheduleRequest>
