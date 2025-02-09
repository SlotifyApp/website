"use client";

import { Suspense } from "react";
import User from "@/components/user";
import { Skeleton } from "@/components/ui/skeleton";

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
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <Suspense fallback={<LoadingDashboard />}>
        <User />
      </Suspense>
    </div>
  );
}
