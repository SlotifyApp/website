'use client'

import { DisplayCalendar } from '@/components/calendar/calendar'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarOverview } from '@/components/calendar-overview'

//TODO: Make this larger to look as through the calendar is loading
// right now its much smaller than the calendar
// function LoadingDashboardCalendar() {
//   return (
//     <div className="flex flex-col space-y-3">
//       <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//       <div className="space-y-2">
//         <Skeleton className="h-4 w-[250px]" />
//         <Skeleton className="h-4 w-[200px]" />
//       </div>
//     </div>
//   );
// }
export default function Calendar() {
  const [view, setView] = useState<'weekly' | 'monthly'>('weekly')

  return (
    <Tabs value={view} onValueChange={v => setView(v as 'weekly' | 'monthly')}>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='weekly'>Weekly</TabsTrigger>
        <TabsTrigger value='monthly'>Monthly</TabsTrigger>
      </TabsList>
      <TabsContent value='weekly'>
        <div className='px-10 w-[100vw]'>
          <CalendarOverview />
        </div>
      </TabsContent>
      <TabsContent value='monthly'>
        <div className='px-10 w-[98vw]'>
          <DisplayCalendar />
        </div>
      </TabsContent>
    </Tabs>
  )
}
