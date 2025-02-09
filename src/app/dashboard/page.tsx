"use client";

import { Suspense } from "react";
import { User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarOverview } from "@/components/calendar-overview";
import { RescheduleRequests } from "@/components/reschedule-requests";

function LoadingDashboard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
export default function Dashboard() {
  return (
    <div className="flex flex-col justify-start items-center mt-10 h-[90vh] w-screen overflow-x-hidden">
      {/* Welcome message */}
      <div className="flex flex-row w-screen ml-20">
        <User className="h-10 w-10" />
        <div className="flex flex-row justify-center items-center ml-5 font-semibold text-2xl">
          Welcome Aevin
        </div>
      </div>

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
