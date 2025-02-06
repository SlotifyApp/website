"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { TeamList, Team } from "@/components/team-list";
import { TeamMembers, Member } from "@/components/team-members";
import { JoinableTeams } from "@/components/joinable-teams";
import client from "@/hooks/fetch";
import { toast } from "@/hooks/use-toast";
import { ProfileForm } from "@/components/team-form";

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
    const { data, error } = await client.POST("/api/teams/{teamID}/users/me", {
      params: {
        path: { teamID: teamID },
      },
    });
    console.log(`Joined team with id: ${teamID}`);
    if (data) {
      setYourTeams([...yourTeams, data]);
      setJoinableTeams(joinableTeams.filter((team) => team.id !== teamID));
    }
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
    }
  };

  // On every page refresh, set yourTeams and joinableTeams
  useEffect(() => {
    const getUserTeams = async () => {
      // This code is ugly, but needs to be done for the refresh.
      // It works, but we need better code
      const { data, error, response } = await client.GET("/api/teams/me", {});
      if (error && response.status == 401) {
        const { error, response } = await client.POST("/api/refresh", {});
        if (response.status == 401) {
          // The refresh token was invalid, could not refresh
          // so back to login. This has to be done for every fetch
          window.location.href = "/login";
        } else if (response.status == 201) {
          //retry the /user route
          const { data, error, response } = await client.GET(
            "/api/teams/me",
            {},
          );
          if (response.status == 401) {
            //MSAL client may no longer have user in cache, no other option other than
            //to log out
            await client.POST("/api/users/me/logout", {});
            window.location.href = "/login";
          }
          if (error) {
            toast({
              title: "Error",
              description: error,
              variant: "destructive",
            });
          } else if (data) {
            setYourTeams(data);
          }
        } else if (error) {
          toast({
            title: "Error",
            description: error,
            variant: "destructive",
          });
        }
      } else if (data) {
        setYourTeams(data);
      }
    };
    const getJoinableTeams = async () => {
      const { data, error } = await client.GET("/api/teams/joinable/me");
      if (data) {
        setJoinableTeams(data);
      }
      if (error) {
        toast({
          title: "Error",
          description: error,
          variant: "destructive",
        });
      }
    };
    const getTeamMembers = async () => {
      if (!selectedTeam) {
        return;
      }
      const teamID = selectedTeam?.id;
      const { data, error } = await client.GET("/api/teams/{teamID}/users", {
        params: {
          path: { teamID: teamID },
        },
      });
      if (data) {
        setMembers(data);
      }
      if (error) {
        toast({
          title: "Error",
          description: error,
          variant: "destructive",
        });
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
          <TeamList teams={yourTeams} onSelectTeam={setSelectedTeam} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Team Members</h2>
          {selectedTeam ? (
            <TeamMembers members={members} />
          ) : (
            <p>Select a team to view its members</p>
          )}
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
        <JoinableTeams teams={joinableTeams} onJoinTeam={handleJoinTeam} />
      </div>
    </div>
  );
}
