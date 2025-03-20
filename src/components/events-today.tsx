'use client'

import { CalendarDays } from 'lucide-react'
import { CalendarEvent } from '@/types/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'

interface EventsForTodayProps {
  events: CalendarEvent[]
}

export function EventsForToday({ events }: EventsForTodayProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center justify-between'>
          Today&apos;s Events
          <Badge variant='secondary'>{events.length}</Badge>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ScrollArea className='h-[60vh]'>
          <div className='divide-y'>
            {events.map(event => (
              <div key={event.id} className='mb-4'>
                <div className='flex items-center'>
                  <CalendarDays className='h-5 w-5 text-gray-500 mr-2' />
                  <h3 className='text-md font-semibold'>{event?.subject}</h3>
                </div>
                <p className='text-gray-600 ml-7'>
                  {event?.startTime} -{' '}
                  {event?.locations &&
                    event.locations.length > 0 &&
                    event.locations[0]?.name}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>

    // <div className='min-w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden'>
    //   <div className='md:flex'>
    //     <div className='p-8'>
    //       <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1'>
    //         Events for Today
    //       </div>
    //       <h2 className='block mt-1 text-lg leading-tight font-medium text-black'>
    //         {formattedDate}
    //       </h2>
    //       <div className='mt-4'>
    //         {events.map(event => (
    //           <div key={event.id} className='mb-4'>
    //             <div className='flex items-center'>
    //               <CalendarDays className='h-5 w-5 text-gray-500 mr-2' />
    //               <h3 className='text-md font-semibold'>{event?.subject}</h3>
    //             </div>
    //             <p className='text-gray-600 ml-7'>
    //               {event?.startTime} -{' '}
    //               {event?.locations &&
    //                 event.locations.length > 0 &&
    //                 event.locations[0]?.name}
    //             </p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
