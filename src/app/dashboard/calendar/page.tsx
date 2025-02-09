import { DisplayCalendar } from "@/components/calendar/calendar";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

//TODO: Make this larger to look as through the calendar is loading
// right now its much smaller than the calendar
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
