import DisplayCalendar from "@/components/calendar";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

function LoadingDashboardCalendar() {
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
export default function Calendar() {
  return (
    <div>
      <h1 className="text-lg">These are your calendar events.</h1>
      <Suspense fallback={<LoadingDashboardCalendar />}>
        <DisplayCalendar />
      </Suspense>
    </div>
  );
}
