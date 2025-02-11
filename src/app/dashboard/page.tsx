"use client";

import User from "@/components/user";
import { CalendarOverview } from "@/components/calendar-overview";
import { RescheduleRequests } from "@/components/reschedule-requests";

// function LoadingDashboard() {
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
export default function Dashboard() {
  return (
    <div className="flex flex-col justify-start items-center mt-10 h-[90vh] w-screen overflow-x-hidden">
      <User />
      <div className="flex flex-row justify-start ml-[10vw] w-screen gap-6 mt-10">
        <div className="w-[60vw]">
          <CalendarOverview />
        </div>
        <div className="w-[30vw]">
          <RescheduleRequests />
        </div>
      </div>
    </div>
  );
}
