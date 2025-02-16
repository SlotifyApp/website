import { schemas } from '@/types/client'
import { z } from 'zod'

export type Attendee = z.infer<typeof schemas.Attendee>
export type User = z.infer<typeof schemas.User>
export type CalendarEvent = z.infer<typeof schemas.CalendarEvent>
