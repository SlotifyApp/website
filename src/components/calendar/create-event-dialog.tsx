"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { components } from "@/types/openapi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Team, TeamList } from "../team-list";
import slotifyClient from "@/hooks/fetch";
import { toast } from "@/hooks/use-toast";
import { Attendee } from "@/components/calendar/calendar";

interface CreateEventDialogProps {
  open: boolean;
  onOpenChangeAction: (open: boolean) => void;
  selectedDate: Date | null;
}

export type User = components["schemas"]["User"];

export function CreateEventDialog({
  open,
  onOpenChangeAction,
  selectedDate,
}: CreateEventDialogProps) {
  const [date, setDate] = useState<Date | undefined>(selectedDate || undefined);
  const [yourTeams, setYourTeams] = useState<Array<Team>>([]);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [members, setMembers] = useState<User[]>([]);
  const [selectedParticipants, setSelectedParticipants] = useState<User[]>([]);

  const createEvent = async (
    eventTitle: string,
    startTime: string,
    endTime: string,
    description?: string,
  ) => {
    let attendees: Attendee[] = [];
    selectedParticipants.forEach((participant) => {
      const attendee: Attendee = {
        email: participant.email,
        type: "required", //TODO: Ask what the type is
        responseStatus: "notResponded",
      };
      attendees.push(attendee);
    });
    if (!description) {
      description = "Calendar description default";
    }
    const { data, error } = await slotifyClient.POST("/api/calendar/me", {
      body: {
        attendees,
        subject: eventTitle,
        body: description,
        startTime,
        endTime,
      },
    });
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
    }
    if (data) {
      toast({
        title: "Successfully scheduled meeting",
      });
    }
  };
  useEffect(() => {
    const getUserTeams = async () => {
      // This code is ugly, but needs to be done for the refresh.
      // It works, but we need better code
      const { data, error, response } = await slotifyClient.GET(
        "/api/teams/me",
        {},
      );
      if (error && response.status == 401) {
        const { error, response } = await slotifyClient.POST(
          "/api/refresh",
          {},
        );
        if (response.status == 401) {
          // The refresh token was invalid, could not refresh
          // so back to login. This has to be done for every fetch
          window.location.href = "/login";
        } else if (response.status == 201) {
          //retry the /user route
          const { data, error, response } = await slotifyClient.GET(
            "/api/teams/me",
            {},
          );
          if (response.status == 401) {
            //MSAL client may no longer have user in cache, no other option other than
            //to log out
            await slotifyClient.POST("/api/users/me/logout", {});
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
    const getTeamMembers = async () => {
      if (!selectedTeam) {
        return;
      }
      const teamID = selectedTeam?.id;
      const { data, error } = await slotifyClient.GET(
        "/api/teams/{teamID}/users",
        {
          params: {
            path: { teamID: teamID },
          },
        },
      );
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
    getTeamMembers();
  }, [selectedTeam]);

  const toggleParticipant = (participant: User) => {
    setSelectedParticipants((current) =>
      current.some((p) => p.id === participant.id)
        ? current.filter((p) => p.id !== participant.id)
        : [...current, participant],
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChangeAction}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Event Form</DialogTitle>
          <DialogDescription>Create a new event.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-[300px_1fr] gap-6">
          {/* Left side - Participants */}
          <div className="border-r pr-6">
            <h2 className="font-semibold mb-4">Participants</h2>
            <ScrollArea className="h-[500px]">
              <div className="space-y-2">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className={cn(
                      "flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-accent",
                      selectedParticipants.some((p) => p.id === member.id) &&
                        "bg-accent",
                    )}
                    onClick={() => toggleParticipant(member)}
                  >
                    <Avatar>
                      <AvatarImage
                        src={`https://api.dicebear.com/6.x/initials/svg?seed=${member.firstName + " " + member.lastName}`}
                        alt={member.firstName + " " + member.lastName}
                      />
                      <AvatarFallback>
                        {member.firstName + " " + member.lastName}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">
                        {member.firstName + " " + member.lastName}
                      </div>
                      <div className="text-sm text-muted-foreground truncate">
                        {member.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Right side - Event details form */}
          <div className="space-y-6">
            <div>
              <h2 className="font-semibold mb-4">Event Details</h2>
            </div>

            <ScrollArea>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="space-y-2">
                    <Label htmlFor="team">Team</Label>
                    <Select>
                      <SelectTrigger id="team">
                        <SelectValue placeholder="Select team" />
                      </SelectTrigger>
                      <SelectContent>
                        <TeamList
                          teams={yourTeams}
                          onSelectTeam={setSelectedTeam}
                        />
                      </SelectContent>
                    </Select>
                  </div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Enter event subject" />
                </div>

                <div className="space-y-2">
                  <Label>Date</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-time">Start Time</Label>
                    <Select>
                      <SelectTrigger id="start-time">
                        <SelectValue placeholder="Select start time" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 24 }).map((_, i) => (
                          <SelectItem key={i} value={`${i}:00`}>
                            {`${i}:00`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="end-time">End Time</Label>
                    <Select>
                      <SelectTrigger id="end-time">
                        <SelectValue placeholder="Select end time" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 24 }).map((_, i) => (
                          <SelectItem key={i} value={`${i}:00`}>
                            {`${i}:00`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </ScrollArea>

            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => onOpenChangeAction(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  const eventTitle = (
                    document.getElementById("subject") as HTMLInputElement
                  )?.value;
                  const startTime = date
                    ? new Date(date).toISOString()
                    : new Date().toISOString(); // Default to current date-time if none selected
                  const endTime = new Date(
                    new Date(startTime).getTime() + 60 * 60 * 1000,
                  ).toISOString(); // Default to 1 hour after start time

                  createEvent(eventTitle, startTime, endTime);
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
