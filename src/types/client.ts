import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

type CalendarEvent = {
  id?: string | undefined;
  attendees: Array<Attendee>;
  body?: string | undefined;
  created?: string | undefined;
  endTime?: (string | null) | undefined;
  isCancelled?: boolean | undefined;
  joinURL?: (string | null) | undefined;
  locations: Array<Location>;
  organizer?: string | undefined;
  startTime?: (string | null) | undefined;
  subject?: string | undefined;
  webLink?: string | undefined;
};
type Attendee = Partial<{
  email: string | null;
  type: "required" | "optional" | "resource" | null;
  responseStatus:
    | "none"
    | "organizer"
    | "entativelyAccepted"
    | "accepted"
    | "declined"
    | "notResponded"
    | null;
}>;
type Location = Partial<{
  id: string;
  name: string;
  roomType:
    | "default"
    | "conferenceRoom"
    | "homeAddress"
    | "businessAddress"
    | "geoCoordinates"
    | "streetAddress"
    | "hotel"
    | "restaurant"
    | "localBusiness"
    | "postalAddress"
    | null;
  street: string | null;
}>;

const Notification = z
  .object({
    id: z.number().int(),
    message: z.string(),
    created: z.string().datetime({ offset: true }),
  })
  .passthrough();
const Attendee: z.ZodType<Attendee> = z
  .object({
    email: z.string().email().nullable(),
    type: z.enum(["required", "optional", "resource"]).nullable(),
    responseStatus: z
      .enum([
        "none",
        "organizer",
        "entativelyAccepted",
        "accepted",
        "declined",
        "notResponded",
      ])
      .nullable(),
  })
  .partial()
  .passthrough();
const Location: z.ZodType<Location> = z
  .object({
    id: z.string(),
    name: z.string(),
    roomType: z
      .enum([
        "default",
        "conferenceRoom",
        "homeAddress",
        "businessAddress",
        "geoCoordinates",
        "streetAddress",
        "hotel",
        "restaurant",
        "localBusiness",
        "postalAddress",
      ])
      .nullable(),
    street: z.string().nullable(),
  })
  .partial()
  .passthrough();
const CalendarEvent: z.ZodType<CalendarEvent> = z
  .object({
    id: z.string().optional(),
    attendees: z.array(Attendee),
    body: z.string().optional(),
    created: z.string().datetime({ offset: true }).optional(),
    endTime: z.string().nullish(),
    isCancelled: z.boolean().optional(),
    joinURL: z.string().nullish(),
    locations: z.array(Location),
    organizer: z.string().email().optional(),
    startTime: z.string().nullish(),
    subject: z.string().optional(),
    webLink: z.string().optional(),
  })
  .passthrough();
const User = z
  .object({
    id: z.number().int(),
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
  })
  .passthrough();
const UserCreate = z
  .object({
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
  })
  .passthrough();
const Team = z.object({ id: z.number().int(), name: z.string() }).passthrough();
const TeamCreate = z.object({ name: z.string() }).passthrough();

export const schemas = {
  Notification,
  Attendee,
  Location,
  CalendarEvent,
  User,
  UserCreate,
  Team,
  TeamCreate,
};

const endpoints = makeApi([
  {
    method: "get",
    path: "/api/auth/callback",
    alias: "GetAPIAuthCallback",
    requestFormat: "json",
    parameters: [
      {
        name: "code",
        type: "Query",
        schema: z.string(),
      },
      {
        name: "state",
        type: "Query",
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 302,
        description: `Successful auth`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/calendar/me",
    alias: "GetAPICalendarMe",
    requestFormat: "json",
    parameters: [
      {
        name: "start",
        type: "Query",
        schema: z.string().datetime({ offset: true }),
      },
      {
        name: "end",
        type: "Query",
        schema: z.string().datetime({ offset: true }),
      },
    ],
    response: z.array(CalendarEvent),
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Something went wrong internally`,
        schema: z.string(),
      },
      {
        status: 502,
        description: `Something went wrong with an external API`,
        schema: z.string(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/calendar/me",
    alias: "PostAPICalendarMe",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: CalendarEvent,
      },
    ],
    response: z.string(),
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Something went wrong internally`,
        schema: z.string(),
      },
      {
        status: 502,
        description: `Something went wrong with an external API`,
        schema: z.string(),
      },
    ],
  },
  {
    method: "options",
    path: "/api/calendar/me",
    alias: "OptionsAPICalendarMe",
    requestFormat: "json",
    response: z.void(),
  },
  {
    method: "get",
    path: "/api/events",
    alias: "renderEvent",
    description: `Establishes a stream connection to receive real-time updates about rendering tasks via Server-Sent Events (SSE).`,
    requestFormat: "json",
    response: z.void(),
  },
  {
    method: "get",
    path: "/api/healthcheck",
    alias: "GetAPIHealthcheck",
    requestFormat: "json",
    response: z.string(),
  },
  {
    method: "options",
    path: "/api/notifications/:notificationID/read",
    alias: "OptionsAPINotificationsNotificationIDRead",
    requestFormat: "json",
    parameters: [
      {
        name: "notificationID",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: z.void(),
  },
  {
    method: "patch",
    path: "/api/notifications/:notificationID/read",
    alias: "PatchAPINotificationsNotificationIDRead",
    requestFormat: "json",
    parameters: [
      {
        name: "notificationID",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: z.string(),
    errors: [
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Notification not found.`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Something went wrong internally`,
        schema: z.string(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/refresh",
    alias: "PostAPIRefresh",
    requestFormat: "json",
    response: z.string(),
    errors: [
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/teams",
    alias: "GetAPITeams",
    requestFormat: "json",
    parameters: [
      {
        name: "name",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: z.array(Team),
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid team name)`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "options",
    path: "/api/teams",
    alias: "OptionsAPITeams",
    requestFormat: "json",
    response: z.void(),
  },
  {
    method: "post",
    path: "/api/teams",
    alias: "PostAPITeams",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z.object({ name: z.string() }).passthrough(),
      },
    ],
    response: Team,
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid team name)`,
        schema: z.string(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/teams/:teamID",
    alias: "DeleteAPITeamsTeamID",
    requestFormat: "json",
    parameters: [
      {
        name: "teamID",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: z.string(),
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid team id)`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Team not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/teams/:teamID",
    alias: "GetAPITeamsTeamID",
    requestFormat: "json",
    parameters: [
      {
        name: "teamID",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: Team,
    errors: [
      {
        status: 404,
        description: `Team not found`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Something went wrong internally`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/teams/:teamID/users",
    alias: "GetAPITeamsTeamIDUsers",
    requestFormat: "json",
    parameters: [
      {
        name: "teamID",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: z.array(User),
    errors: [
      {
        status: 403,
        description: `Bad request, team id is invalid`,
        schema: z.string(),
      },
      {
        status: 500,
        description: `Something went wrong`,
        schema: z.string(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/teams/:teamID/users/:userID",
    alias: "PostAPITeamsTeamIDUsersUserID",
    requestFormat: "json",
    parameters: [
      {
        name: "userID",
        type: "Path",
        schema: z.number().int(),
      },
      {
        name: "teamID",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: Team,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `User or team not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/teams/:teamID/users/me",
    alias: "PostAPITeamsTeamIDUsersMe",
    requestFormat: "json",
    parameters: [
      {
        name: "teamID",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: Team,
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `User or team not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/teams/joinable/me",
    alias: "GetAPITeamsJoinableMe",
    requestFormat: "json",
    response: z.array(Team),
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `User not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/teams/me",
    alias: "GetAPITeamsMe",
    requestFormat: "json",
    response: z.array(Team),
    errors: [
      {
        status: 400,
        description: `Bad request`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `User not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/users",
    alias: "GetAPIUsers",
    requestFormat: "json",
    parameters: [
      {
        name: "email",
        type: "Query",
        schema: z.string().email().optional(),
      },
      {
        name: "firstName",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "lastName",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: z.array(User),
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid team ID)`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/users",
    alias: "PostAPIUsers",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: UserCreate,
      },
    ],
    response: User,
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid team ID)`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/users/:userID",
    alias: "GetAPIUsersUserID",
    requestFormat: "json",
    parameters: [
      {
        name: "userID",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: User,
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid team ID)`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `User not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/users/:userID",
    alias: "DeleteAPIUsersUserID",
    requestFormat: "json",
    parameters: [
      {
        name: "userID",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: z.string(),
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid user ID)`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `User not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/users/me",
    alias: "GetAPIUsersMe",
    requestFormat: "json",
    response: User,
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid team ID)`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `User not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/users/me/logout",
    alias: "PostAPIUsersMeLogout",
    requestFormat: "json",
    response: z.string(),
  },
  {
    method: "get",
    path: "/api/users/me/notifications",
    alias: "GetAPIUsersMeNotifications",
    requestFormat: "json",
    response: z.array(Notification),
    errors: [
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Notification not found.`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Something went wrong internally`,
        schema: z.string(),
      },
    ],
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
