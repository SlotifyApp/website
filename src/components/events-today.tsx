import { CalendarDays } from 'lucide-react'
import { CalendarEvent } from './calendar/calendar'

interface EventsForTodayProps {
  events: CalendarEvent[]
}

export function EventsForToday({ events }: EventsForTodayProps) {
  const today = new Date()
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className='w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <div className='md:flex'>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1'>
            Events for Today
          </div>
          <h2 className='block mt-1 text-lg leading-tight font-medium text-black'>
            {formattedDate}
          </h2>
          <div className='mt-4'>
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
        </div>
      </div>
    </div>
  )
}
