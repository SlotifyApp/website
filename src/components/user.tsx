"use client";
import { useEffect, useState } from "react";
import { Member } from "@/components/team-members";
import fetchHelpers from "@/hooks/fetchHelpers";

import { User as LucideUserIcon } from "lucide-react";
import { z } from "zod";

export default function User() {
  const [user, setUser] = useState<Member | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      // This code is less ugly now and needs to be done for the refresh.
      const userRoute = "/api/users/me";
      const data = await fetchHelpers.getAPIrouteData(userRoute, {});

      const member = z.object({
        id: z.number(),
        email: z.string(),
        firstName: z.string(),
        lastName: z.string()
      });
      const userData = member.parse(data);

      if (userData) {
        setUser(userData);
      }
    };
    fetchUser();
  }, []);

  if (!user) return "No user";

  return (
    <div className="flex flex-row w-screen ml-20">
      <LucideUserIcon className="h-10 w-10" />
      <div className="flex flex-row justify-center items-center ml-5 font-semibold text-2xl">
        Welcome {user.firstName}
      </div>
    </div>
  );
}
