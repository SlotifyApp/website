"use client";

import { useState, useEffect, Suspense } from "react";
import { Input } from "@/components/ui/input";
import { TeamList, Team } from "@/components/team-list";
import { TeamMembers, Member } from "@/components/team-members";
import { JoinableTeams } from "@/components/joinable-teams";
import { ProfileForm } from "@/components/team-form";
import { Skeleton } from "@/components/ui/skeleton";
import fetchHelpers from "@/hooks/fetchHelpers";

function LoadingDashboardTeams() {
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

export default function TeamsPage() {
  // for search bars
  const [yourTeamsSearchTerm, setYourTeamsSearchTerm] = useState<string>("");
  const [joinableTeamsSearchTerm, setJoinableTeamsSearchTerm] =
    useState<string>("");
  //for teams, your current teams and joinable teams
  const [yourTeams, setYourTeams] = useState<Array<Team>>([]);
  const [joinableTeams, setJoinableTeams] = useState<Array<Team>>([]);
  // currently selected teams
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  // members of currently selected team
  const [members, setMembers] = useState<Array<Member>>([]);

  //TODO: Handle 401 like dashboard

  const handleJoinTeam = async (teamID: number) => {
    // UPDATE: Added /refresh route from fetchHelpers here.
    // Type Guard to check if userData is of interface type "Team"
    function isTeam(data: unknown): data is Team {
      if (typeof data != "object" || data == null) {
        return false;
      }
      const obj = data as Record<string, unknown>;
      return (
        "id" in obj &&
        typeof obj.id === "number" &&
        "name" in obj &&
        typeof obj.email === "string"
      );
    }

    const userTeamsRoute = "/api/teams/{teamID}/users/me";
    const data = await fetchHelpers.postAPIrouteData(userTeamsRoute, {
      params: {
        path: { teamID: teamID },
      },
    });
    if (isTeam(data)) {
      console.log(`Joined team with id: ${teamID}`);
      setYourTeams([...yourTeams, data]);
      setJoinableTeams(joinableTeams.filter((team) => team.id !== teamID));
    }
  };

  // On every page refresh, set yourTeams and joinableTeams
  useEffect(() => {
    const getUserTeams = async () => {
      const teamRoute = "/api/teams/me";
      const teamsData = await fetchHelpers.getAPIrouteData(teamRoute, {});
      if (Array.isArray(teamsData)) {
        setYourTeams(teamsData);
      }
    };

    const getJoinableTeams = async () => {
      const joinableTeamsRoute = "/api/teams/joinable/me";
      const joinableTeamsData = await fetchHelpers.getAPIrouteData(
        joinableTeamsRoute,
        {},
      );
      if (Array.isArray(joinableTeamsData)) {
        setJoinableTeams(joinableTeamsData);
      }
    };

    const getTeamMembers = async () => {
      if (!selectedTeam) {
        return;
      }
      const teamID = selectedTeam?.id;
      const teamMembersRoute = "/api/teams/{teamID}/users";
      const teamMemberData = await fetchHelpers.getAPIrouteData(
        teamMembersRoute,
        {
          params: {
            path: { teamID: teamID },
          },
        },
      );
      if (Array.isArray(teamMemberData)) {
        setMembers(teamMemberData);
      }
    };

    getUserTeams();
    getJoinableTeams();
    getTeamMembers();
  }, [selectedTeam]);

  //TODO: Do this search bar funcionality
  //handle your teams search bar
  // useEffect(() => {
  //   const filteredYourTeams = yourTeams.filter((team) =>
  //     team.name.toLowerCase().includes(yourTeamsSearchTerm.toLowerCase()),
  //   );
  // }, [yourTeamsSearchTerm]);
  //
  // //handle your joinable teams search bar
  // useEffect(() => {
  //   const filteredJoinableTeams = joinableTeams.filter((team) =>
  //     team.name.toLowerCase().includes(joinableTeamsSearchTerm.toLowerCase()),
  //   );
  //   setJoinableTeams(filteredJoinableTeams);
  // }, [joinableTeamsSearchTerm]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ProfileForm teams={yourTeams} onSetYourTeamsAction={setYourTeams} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">My Teams</h2>
          <Input
            type="text"
            placeholder="Search your teams..."
            value={yourTeamsSearchTerm}
            onChange={(e) => setYourTeamsSearchTerm(e.target.value)}
            className="w-full max-w-md mb-4"
          />
          <Suspense fallback={<LoadingDashboardTeams />}>
            <TeamList teams={yourTeams} onSelectTeam={setSelectedTeam} />
          </Suspense>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Team Members</h2>

          <Suspense fallback={<LoadingDashboardTeams />}>
            {selectedTeam ? (
              <TeamMembers members={members} />
            ) : (
              <p>Select a team to view its members</p>
            )}
          </Suspense>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Join Other Teams</h2>
        <Input
          type="text"
          placeholder="Search teams to join..."
          value={joinableTeamsSearchTerm}
          onChange={(e) => setJoinableTeamsSearchTerm(e.target.value)}
          className="w-full max-w-md mb-4"
        />

        <Suspense fallback={<LoadingDashboardTeams />}>
          <JoinableTeams teams={joinableTeams} onJoinTeam={handleJoinTeam} />
        </Suspense>
      </div>
    </div>
  );
}
