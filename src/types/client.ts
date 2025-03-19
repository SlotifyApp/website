import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

type TimeConstraint = {
  activityDomain?: string | undefined;
  timeSlots: Array<MeetingTimeSlot>;
};
type MeetingTimeSlot = {
  end: string;
  start: string;
};
type RescheduleRequest = {
  request_id: number;
  requested_by: number;
  status: string;
  requested_at: string;
  oldMeeting: ReschedulingRequestOldMeeting;
  newMeeting?: ReschedulingRequestNewMeeting | undefined;
};
type ReschedulingRequestOldMeeting = {
  msftMeetingID: string;
  meetingId: number;
};
type ReschedulingRequestNewMeeting = {
  title: string;
  meetingDuration: string;
  startTime: string;
  endTime: string;
  location: string;
};
type ReschedulingCheckBodySchema = {
  newMeeting: {
    title: string;
    meetingDuration: string;
    attendees: Array<AttendeeBase>;
  };
  oldMeeting: {
    msftMeetingID: string;
    isOrganizerOptional?: boolean | undefined;
  };
};
type AttendeeBase = {
  emailAddress: EmailAddress;
  attendeeType: AttendeeType;
};
type EmailAddress = {
  address: string;
  name: string;
};
type AttendeeType = "required" | "optional" | "resource";
type SchedulingSlotsBodySchema = {
  attendees: Array<AttendeeBase>;
  meetingName: string;
  meetingDuration: string;
  isOrganizerOptional: boolean;
  locationConstraint: LocationConstraint;
  minimumAttendeePercentage?: number | undefined;
  maxCandidates?: number | undefined;
  timeConstraint: TimeConstraint;
};
type LocationConstraint = Partial<{
  isRequired: boolean;
  locations: Array<LocationConstraintItem>;
  suggestLocation: boolean;
}>;
type LocationConstraintItem = {
  displayName: string;
  resolveAvailability: boolean;
  locationEmailAddress?: string | undefined;
  address: PhysicalAddress;
};
type PhysicalAddress = Partial<{
  city: string;
  countryOrRegion: string;
  postalCode: string;
  state: string;
  street: string;
}>;
type AttendeeAvailability = {
  availability: FreeBusyStatus;
  attendee: AttendeeBase;
};
type FreeBusyStatus =
  | "free"
  | "tentative"
  | "busy"
  | "oof"
  | "workingElsewhere"
  | "unknown";
type MeetingTimeSuggestion = Partial<{
  attendeeAvailability: Array<AttendeeAvailability>;
  confidence: number;
  locations: Array<Location>;
  meetingTimeSlot: MeetingTimeSlot;
  order: number;
  organizerAvailability: string;
  suggestionReason: string;
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
type SchedulingSlotsSuccessResponseBody = Partial<{
  emptySuggestionsReason: EmptySuggestionsReason;
  meetingTimeSuggestions: Array<MeetingTimeSuggestion>;
}>;
type EmptySuggestionsReason =
  | "attendeesUnavailable"
  | "attendeesUnavailableOrUnknown"
  | "locationsUnavailable"
  | "organizerUnavailable"
  | "unknown";
type Attendee = {
  email: string;
  attendeeType?: AttendeeType | undefined;
  responseStatus?:
    | (
        | "none"
        | "organizer"
        | "entativelyAccepted"
        | "accepted"
        | "declined"
        | "notResponded"
        | null
      )
    | undefined;
};
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
type InvitesGroup = {
  inviteID: number;
  message: string;
  status: InviteStatus;
  expiryDate: string;
  fromUserEmail: string;
  fromUserFirstName: string;
  fromUserLastName: string;
  toUserEmail: string;
  toUserFirstName: string;
  toUserLastName: string;
  createdAt: string;
};
type InviteStatus = "accepted" | "declined" | "expired" | "pending";
type InvitesMe = {
  inviteID: number;
  message: string;
  expiryDate: string;
  createdAt: string;
  status: InviteStatus;
  fromUserEmail: string;
  slotifyGroupName: string;
  fromUserFirstName: string;
  fromUserLastName: string;
};

const Notification = z
  .object({
    id: z.number().int(),
    message: z.string(),
    created: z.string().datetime({ offset: true }),
  })
  .passthrough();
const AttendeeType = z.enum(["required", "optional", "resource"]);
const Attendee: z.ZodType<Attendee> = z
  .object({
    email: z.string().email(),
    attendeeType: AttendeeType.optional(),
    responseStatus: z
      .enum([
        "none",
        "organizer",
        "entativelyAccepted",
        "accepted",
        "declined",
        "notResponded",
      ])
      .nullish(),
  })
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
const InviteStatus = z.enum(["accepted", "declined", "expired", "pending"]);
const InvitesMe: z.ZodType<InvitesMe> = z
  .object({
    inviteID: z.number().int(),
    message: z.string(),
    expiryDate: z.string(),
    createdAt: z.string().datetime({ offset: true }),
    status: InviteStatus,
    fromUserEmail: z.string().email(),
    slotifyGroupName: z.string(),
    fromUserFirstName: z.string(),
    fromUserLastName: z.string(),
  })
  .passthrough();
const InviteCreate = z
  .object({
    slotifyGroupID: z.number().int(),
    expiryDate: z.string(),
    toUserID: z.number().int(),
    message: z.string(),
    createdAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const InvitesGroup: z.ZodType<InvitesGroup> = z
  .object({
    inviteID: z.number().int(),
    message: z.string(),
    status: InviteStatus,
    expiryDate: z.string(),
    fromUserEmail: z.string().email(),
    fromUserFirstName: z.string(),
    fromUserLastName: z.string(),
    toUserEmail: z.string().email(),
    toUserFirstName: z.string(),
    toUserLastName: z.string(),
    createdAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const SlotifyGroup = z
  .object({ id: z.number().int(), name: z.string() })
  .passthrough();
const SlotifyGroupCreate = z.object({ name: z.string() }).passthrough();
const EmailAddress: z.ZodType<EmailAddress> = z
  .object({ address: z.string().email(), name: z.string() })
  .passthrough();
const AttendeeBase: z.ZodType<AttendeeBase> = z
  .object({ emailAddress: EmailAddress, attendeeType: AttendeeType })
  .passthrough();
const PhysicalAddress = z
  .object({
    city: z.string(),
    countryOrRegion: z.string(),
    postalCode: z.string(),
    state: z.string(),
    street: z.string(),
  })
  .partial()
  .passthrough();
const LocationConstraintItem: z.ZodType<LocationConstraintItem> = z
  .object({
    displayName: z.string(),
    resolveAvailability: z.boolean(),
    locationEmailAddress: z.string().optional(),
    address: PhysicalAddress,
  })
  .passthrough();
const LocationConstraint: z.ZodType<LocationConstraint> = z
  .object({
    isRequired: z.boolean(),
    locations: z.array(LocationConstraintItem),
    suggestLocation: z.boolean(),
  })
  .partial()
  .passthrough();
const MeetingTimeSlot: z.ZodType<MeetingTimeSlot> = z
  .object({
    end: z.string().datetime({ offset: true }),
    start: z.string().datetime({ offset: true }),
  })
  .passthrough();
const TimeConstraint: z.ZodType<TimeConstraint> = z
  .object({
    activityDomain: z.string().optional(),
    timeSlots: z.array(MeetingTimeSlot),
  })
  .passthrough();
const SchedulingSlotsBodySchema: z.ZodType<SchedulingSlotsBodySchema> = z
  .object({
    attendees: z.array(AttendeeBase),
    meetingName: z.string(),
    meetingDuration: z.string(),
    isOrganizerOptional: z.boolean(),
    locationConstraint: LocationConstraint,
    minimumAttendeePercentage: z.number().optional(),
    maxCandidates: z.number().int().optional(),
    timeConstraint: TimeConstraint,
  })
  .passthrough();
const EmptySuggestionsReason = z.enum([
  "attendeesUnavailable",
  "attendeesUnavailableOrUnknown",
  "locationsUnavailable",
  "organizerUnavailable",
  "unknown",
]);
const FreeBusyStatus = z.enum([
  "free",
  "tentative",
  "busy",
  "oof",
  "workingElsewhere",
  "unknown",
]);
const AttendeeAvailability: z.ZodType<AttendeeAvailability> = z
  .object({ availability: FreeBusyStatus, attendee: AttendeeBase })
  .passthrough();
const MeetingTimeSuggestion: z.ZodType<MeetingTimeSuggestion> = z
  .object({
    attendeeAvailability: z.array(AttendeeAvailability),
    confidence: z.number(),
    locations: z.array(Location),
    meetingTimeSlot: MeetingTimeSlot,
    order: z.number().int(),
    organizerAvailability: z.string(),
    suggestionReason: z.string(),
  })
  .partial()
  .passthrough();
const SchedulingSlotsSuccessResponseBody: z.ZodType<SchedulingSlotsSuccessResponseBody> =
  z
    .object({
      emptySuggestionsReason: EmptySuggestionsReason,
      meetingTimeSuggestions: z.array(MeetingTimeSuggestion),
    })
    .partial()
    .passthrough();
const ReschedulingCheckBodySchema: z.ZodType<ReschedulingCheckBodySchema> = z
  .object({
    newMeeting: z
      .object({
        title: z.string(),
        meetingDuration: z.string(),
        attendees: z.array(AttendeeBase),
      })
      .passthrough(),
    oldMeeting: z
      .object({
        msftMeetingID: z.string(),
        isOrganizerOptional: z.boolean().optional().default(false),
      })
      .passthrough(),
  })
  .passthrough();
const ReschedulingRequestOldMeeting: z.ZodType<ReschedulingRequestOldMeeting> =
  z
    .object({ msftMeetingID: z.string(), meetingId: z.number().int() })
    .passthrough();
const ReschedulingRequestNewMeeting: z.ZodType<ReschedulingRequestNewMeeting> =
  z
    .object({
      title: z.string(),
      meetingDuration: z.string(),
      startTime: z.string().datetime({ offset: true }),
      endTime: z.string().datetime({ offset: true }),
      location: z.string(),
    })
    .passthrough();
const RescheduleRequest: z.ZodType<RescheduleRequest> = z
  .object({
    request_id: z.number().int(),
    requested_by: z.number().int(),
    status: z.string(),
    requested_at: z.string().datetime({ offset: true }),
    oldMeeting: ReschedulingRequestOldMeeting,
    newMeeting: ReschedulingRequestNewMeeting.optional(),
  })
  .passthrough();
const ReschedulingRequestAcceptBodySchema = z
  .object({
    newStartTime: z.string().datetime({ offset: true }),
    newEndTime: z.string().datetime({ offset: true }),
  })
  .passthrough();
const ReschedulingRequestBodySchema = z
  .object({
    newMeeting: z
      .object({
        title: z.string(),
        meetingDuration: z.string(),
        attendees: z.array(z.number().int()),
        startTime: z.string().datetime({ offset: true }),
        endTime: z.string().datetime({ offset: true }),
        location: z.string(),
        startRangeTime: z.string().datetime({ offset: true }),
        endRangeTime: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    oldMeeting: z
      .object({
        msftMeetingID: z.string(),
        meetingStartTime: z.string().datetime({ offset: true }),
        meetingOwner: z.number().int(),
      })
      .passthrough(),
  })
  .passthrough();
const ReschedulingRequestSingleBodySchema = z
  .object({ msftMeetingID: z.string() })
  .passthrough();
const MSFTGroup = z.object({ id: z.string(), name: z.string() }).passthrough();
const MSFTUser = z
  .object({
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
  })
  .passthrough();
const Room = z
  .object({ email: z.string().email(), name: z.string() })
  .passthrough();

export const schemas = {
  Notification,
  AttendeeType,
  Attendee,
  Location,
  CalendarEvent,
  User,
  UserCreate,
  InviteStatus,
  InvitesMe,
  InviteCreate,
  InvitesGroup,
  SlotifyGroup,
  SlotifyGroupCreate,
  EmailAddress,
  AttendeeBase,
  PhysicalAddress,
  LocationConstraintItem,
  LocationConstraint,
  MeetingTimeSlot,
  TimeConstraint,
  SchedulingSlotsBodySchema,
  EmptySuggestionsReason,
  FreeBusyStatus,
  AttendeeAvailability,
  MeetingTimeSuggestion,
  SchedulingSlotsSuccessResponseBody,
  ReschedulingCheckBodySchema,
  ReschedulingRequestOldMeeting,
  ReschedulingRequestNewMeeting,
  RescheduleRequest,
  ReschedulingRequestAcceptBodySchema,
  ReschedulingRequestBodySchema,
  ReschedulingRequestSingleBodySchema,
  MSFTGroup,
  MSFTUser,
  Room,
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
    path: "/api/calendar/:userID",
    alias: "GetAPICalendarUserID",
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
      {
        name: "userID",
        type: "Path",
        schema: z.number().int(),
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
    method: "get",
    path: "/api/calendar/event",
    alias: "GetAPICalendarEvent",
    requestFormat: "json",
    parameters: [
      {
        name: "msftID",
        type: "Query",
        schema: z.string(),
      },
    ],
    response: CalendarEvent,
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
    response: CalendarEvent,
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
    method: "post",
    path: "/api/invites",
    alias: "PostAPIInvites",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: InviteCreate,
      },
    ],
    response: InvitesGroup,
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
        description: `Slotify group not found`,
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
    method: "patch",
    path: "/api/invites/:inviteID",
    alias: "PatchAPIInvitesInviteID",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z.object({ message: z.string() }).passthrough(),
      },
      {
        name: "inviteID",
        type: "Path",
        schema: z.number().int(),
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
        status: 404,
        description: `Invite not found`,
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
    method: "delete",
    path: "/api/invites/:inviteID",
    alias: "DeleteAPIInvitesInviteID",
    requestFormat: "json",
    parameters: [
      {
        name: "inviteID",
        type: "Path",
        schema: z.number().int(),
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
        status: 404,
        description: `Invite not found`,
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
    method: "patch",
    path: "/api/invites/:inviteID/accept",
    alias: "PatchAPIInvitesInviteIDAccept",
    requestFormat: "json",
    parameters: [
      {
        name: "inviteID",
        type: "Path",
        schema: z.number().int(),
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
        status: 404,
        description: `Invite not found`,
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
    method: "patch",
    path: "/api/invites/:inviteID/decline",
    alias: "PatchAPIInvitesInviteIDDecline",
    requestFormat: "json",
    parameters: [
      {
        name: "inviteID",
        type: "Path",
        schema: z.number().int(),
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
        status: 404,
        description: `Invite not found`,
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
    path: "/api/invites/me",
    alias: "GetAPIInvitesMe",
    requestFormat: "json",
    parameters: [
      {
        name: "status",
        type: "Query",
        schema: z
          .enum(["accepted", "declined", "expired", "pending"])
          .optional(),
      },
    ],
    response: z.array(InvitesMe),
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
    path: "/api/msft-groups",
    alias: "GetAPIMSFTGroups",
    requestFormat: "json",
    parameters: [
      {
        name: "name",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: z.array(MSFTGroup),
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid microsoft group name)`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 502,
        description: `Something went wrong with an external API`,
        schema: z.string(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/msft-groups/:groupID",
    alias: "GetAPIMSFTGroupsGroupID",
    requestFormat: "json",
    parameters: [
      {
        name: "groupID",
        type: "Path",
        schema: z.string(),
      },
    ],
    response: MSFTGroup,
    errors: [
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Microsoft group not found`,
        schema: z.void(),
      },
      {
        status: 500,
        description: `Something went wrong internally`,
        schema: z.void(),
      },
      {
        status: 502,
        description: `Something went wrong with an external API`,
        schema: z.string(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/msft-groups/:groupID/users",
    alias: "GetAPIMSFTGroupsGroupIDUsers",
    requestFormat: "json",
    parameters: [
      {
        name: "groupID",
        type: "Path",
        schema: z.string(),
      },
      {
        name: "nextLink",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "limit",
        type: "Query",
        schema: z.number().int(),
      },
    ],
    response: z
      .object({ users: z.array(MSFTUser), nextLink: z.string().nullish() })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Bad request, Microsoft group id is invalid`,
        schema: z.string(),
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
    method: "get",
    path: "/api/msft-groups/me",
    alias: "GetAPIMSFTGroupsMe",
    requestFormat: "json",
    response: z.array(z.string()),
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
    path: "/api/msft-users",
    alias: "GetAPIMSFTUsers",
    requestFormat: "json",
    parameters: [
      {
        name: "nextLink",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "limit",
        type: "Query",
        schema: z.number().int(),
      },
    ],
    response: z
      .object({ users: z.array(MSFTUser), nextLink: z.string().nullish() })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Failed to get users from Microsoft`,
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
    method: "get",
    path: "/api/msft-users/search",
    alias: "GetAPIMSFTUsersSearch",
    requestFormat: "json",
    parameters: [
      {
        name: "search",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "nextLink",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "limit",
        type: "Query",
        schema: z.number().int(),
      },
    ],
    response: z
      .object({ users: z.array(MSFTUser), nextLink: z.string().optional() })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Failed to get users from Microsoft`,
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
        status: 404,
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
    method: "post",
    path: "/api/reschedule/check",
    alias: "PostAPIRescheduleCheck",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: ReschedulingCheckBodySchema,
      },
    ],
    response: z
      .object({
        isNewMeetingMoreImportant: z.boolean(),
        canBeRescheduled: z.boolean(),
      })
      .partial()
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid event data)`,
        schema: z.string(),
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
    ],
  },
  {
    method: "get",
    path: "/api/reschedule/request/:requestID",
    alias: "GetAPIRescheduleRequestRequestID",
    requestFormat: "json",
    parameters: [
      {
        name: "requestID",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: RescheduleRequest,
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid event data)`,
        schema: z.string(),
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
    ],
  },
  {
    method: "patch",
    path: "/api/reschedule/request/:requestID/accept",
    alias: "PatchAPIRescheduleRequestRequestIDAccept",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: ReschedulingRequestAcceptBodySchema,
      },
      {
        name: "requestID",
        type: "Path",
        schema: z.number().int(),
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
        status: 404,
        description: `Invite not found`,
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
    method: "patch",
    path: "/api/reschedule/request/:requestID/reject",
    alias: "PatchAPIRescheduleRequestRequestIDReject",
    requestFormat: "json",
    parameters: [
      {
        name: "requestID",
        type: "Path",
        schema: z.number().int(),
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
        status: 404,
        description: `Invite not found`,
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
    method: "post",
    path: "/api/reschedule/request/replace",
    alias: "PostAPIRescheduleRequestReplace",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: ReschedulingRequestBodySchema,
      },
    ],
    response: z.string(),
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid event data)`,
        schema: z.string(),
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
    ],
  },
  {
    method: "post",
    path: "/api/reschedule/request/single",
    alias: "PostAPIRescheduleRequestSingle",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z.object({ msftMeetingID: z.string() }).passthrough(),
      },
    ],
    response: z.number(),
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid event data)`,
        schema: z.string(),
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
    ],
  },
  {
    method: "get",
    path: "/api/reschedule/requests/me",
    alias: "GetAPIRescheduleRequestsMe",
    requestFormat: "json",
    response: z.array(RescheduleRequest),
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid event data)`,
        schema: z.string(),
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
    ],
  },
  {
    method: "get",
    path: "/api/rooms/all",
    alias: "GetAPIRoomsAll",
    requestFormat: "json",
    response: z.array(Room),
    errors: [
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Failed to get rooms from Microsoft`,
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
    path: "/api/scheduling/slots",
    alias: "PostAPISchedulingSlots",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: SchedulingSlotsBodySchema,
      },
    ],
    response: SchedulingSlotsSuccessResponseBody,
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid event data)`,
        schema: z.string(),
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
    ],
  },
  {
    method: "post",
    path: "/api/slotify-groups",
    alias: "PostAPISlotifyGroups",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: z.object({ name: z.string() }).passthrough(),
      },
    ],
    response: SlotifyGroup,
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid slotifyGroup name)`,
        schema: z.string(),
      },
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/slotify-groups/:slotifyGroupID",
    alias: "DeleteAPISlotifyGroupsSlotifyGroupID",
    requestFormat: "json",
    parameters: [
      {
        name: "slotifyGroupID",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: z.string(),
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid slotifyGroup id)`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `SlotifyGroup not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/slotify-groups/:slotifyGroupID",
    alias: "GetAPISlotifyGroupsSlotifyGroupID",
    requestFormat: "json",
    parameters: [
      {
        name: "slotifyGroupID",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: SlotifyGroup,
    errors: [
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `SlotifyGroup not found`,
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
    path: "/api/slotify-groups/:slotifyGroupID/invites",
    alias: "GetAPISlotifyGroupsSlotifyGroupIDInvites",
    requestFormat: "json",
    parameters: [
      {
        name: "status",
        type: "Query",
        schema: z
          .enum(["accepted", "declined", "expired", "pending"])
          .optional(),
      },
      {
        name: "slotifyGroupID",
        type: "Path",
        schema: z.number().int(),
      },
      {
        name: "pageToken",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "limit",
        type: "Query",
        schema: z.number().int(),
      },
    ],
    response: z
      .object({
        invites: z.array(InvitesGroup),
        nextPageToken: z.number().int(),
      })
      .passthrough(),
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
        description: `Slotify group not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/slotify-groups/:slotifyGroupID/leave/me",
    alias: "DeleteSlotifyGroupsSlotifyGroupIDLeaveMe",
    requestFormat: "json",
    parameters: [
      {
        name: "slotifyGroupID",
        type: "Path",
        schema: z.number().int(),
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
        status: 404,
        description: `Slotify group not found`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/slotify-groups/:slotifyGroupID/users",
    alias: "GetAPISlotifyGroupsSlotifyGroupIDUsers",
    requestFormat: "json",
    parameters: [
      {
        name: "slotifyGroupID",
        type: "Path",
        schema: z.number().int(),
      },
      {
        name: "pageToken",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "limit",
        type: "Query",
        schema: z.number().int(),
      },
      {
        name: "name",
        type: "Query",
        schema: z.string().optional(),
      },
      {
        name: "email",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: z
      .object({ users: z.array(User), nextPageToken: z.number().int() })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Access token is missing or invalid`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Bad request, slotifyGroup id is invalid`,
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
    method: "get",
    path: "/api/slotify-groups/me",
    alias: "GetAPISlotifyGroupsMe",
    requestFormat: "json",
    parameters: [
      {
        name: "pageToken",
        type: "Query",
        schema: z.number().int().optional(),
      },
      {
        name: "limit",
        type: "Query",
        schema: z.number().int(),
      },
    ],
    response: z
      .object({
        slotifyGroups: z.array(SlotifyGroup),
        nextPageToken: z.number().int(),
      })
      .passthrough(),
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
        schema: z.string().optional(),
      },
      {
        name: "name",
        type: "Query",
        schema: z.string().optional(),
      },
    ],
    response: z.array(User),
    errors: [
      {
        status: 400,
        description: `Bad request (e.g., invalid slotifyGroup ID)`,
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
        description: `Bad request (e.g., invalid slotifyGroup ID)`,
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
        description: `Bad request (e.g., invalid slotifyGroup ID)`,
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
        description: `Bad request (e.g., invalid slotifyGroup ID)`,
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
        status: 404,
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
