'use client'

import { CalendarDays, Loader2 } from 'lucide-react'
import { CalendarEvent } from '@/types/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'

interface EventsForTodayProps {
  events: CalendarEvent[]
  isLoading: boolean
}

export function EventsForToday({ events, isLoading }: EventsForTodayProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center justify-between'>
          Today&apos;s Events
          <Badge variant='secondary'>{events.length}</Badge>
        </CardTitle>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <div className='flex items-center justify-center h-[66vh] space-x-2'>
            <Loader2 className='h-6 w-6 animate-spin' />
            <span>Loading...</span>
          </div>
        ) : (
          <ScrollArea className='h-[60vh]'>
            <div className='divide-y'>
              {events.map(event => (
                <div key={event.id} className='mb-4'>
                  <div className='flex items-center'>
                    <CalendarDays className='h-5 w-5 text-gray-500 mr-2' />
                    <h3 className='text-md font-semibold'>{event?.subject}</h3>
                  </div>
                  <p className='text-gray-600 ml-7'>
                    {event?.startTime
                      ? new Date(event.startTime).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                        })
                      : 'n/a'}{' '}
                    -{' '}
                    {event?.endTime
                      ? new Date(event.endTime).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                        })
                      : 'n/a'}
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  )
}
