/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Subscribe to notifications
         * @description Establishes a stream connection to receive real-time updates about rendering tasks via Server-Sent Events (SSE).
         */
        get: operations["renderEvent"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/users/me/notifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** get user's unread notifications */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successfully updated notification. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Notification"][];
                    };
                };
                401: components["responses"]["UnauthorizedError"];
                /** @description Notification not found. */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Something went wrong internally */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/notifications/{notificationID}/read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        /** CORS preflight for marking a notification as read */
        options: operations["OptionsAPINotificationsNotificationIDRead"];
        head?: never;
        /** mark a notification as being read */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    notificationID: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successfully updated notification */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string;
                    };
                };
                401: components["responses"]["UnauthorizedError"];
                /** @description Notification not found. */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Something went wrong internally */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": string;
                    };
                };
            };
        };
        trace?: never;
    };
    "/api/calendar/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** get a user's calendar events */
        get: operations["GetAPICalendarMe"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Refresh Slotify access token and refresh token */
        post: operations["PostAPIRefresh"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/auth/callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Auth route for authorisation code flow */
        get: operations["GetAPIAuthCallback"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/healthcheck": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Healthcheck route */
        get: operations["GetAPIHealthcheck"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/users/me/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Logout user */
        post: operations["PostAPIUsersMeLogout"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/users/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get the user by id passed by JWT */
        get: operations["GetAPIUsersMe"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a user by query params */
        get: operations["GetAPIUsers"];
        put?: never;
        /** Create a new user */
        post: operations["PostAPIUsers"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/users/{userID}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a user by id */
        get: operations["GetAPIUsersUserID"];
        put?: never;
        post?: never;
        /** Delete a user by id */
        delete: operations["DeleteAPIUsersUserID"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/teams/joinable/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all joinable teams for a user excluding teams they are already a part of */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Got all user's teams successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Team"][];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                401: components["responses"]["UnauthorizedError"];
                /** @description User not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/teams/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all teams for user by id passed by JWT */
        get: operations["GetAPITeamsMe"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/teams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a team by query params */
        get: operations["GetAPITeams"];
        put?: never;
        /** Create a new team */
        post: operations["PostAPITeams"];
        delete?: never;
        /** CORS preflight for teams */
        options: operations["OptionsAPITeams"];
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/teams/{teamID}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a team by id */
        get: operations["GetAPITeamsTeamID"];
        put?: never;
        post?: never;
        /** Delete a team by id */
        delete: operations["DeleteAPITeamsTeamID"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/teams/{teamID}/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all members of a team */
        get: operations["GetAPITeamsTeamIDUsers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/teams/{teamID}/users/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add current user to a team */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description ID of the team */
                    teamID: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description User successfully added to the team */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Team"];
                    };
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                401: components["responses"]["UnauthorizedError"];
                /** @description User or team not found */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/teams/{teamID}/users/{userID}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add a user to a team */
        post: operations["PostAPITeamsTeamIDUsersUserID"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        CalendarEvent: {
            subject?: string;
            startTime?: string;
            endTime?: string;
        };
        Notification: {
            /** Format: uint32 */
            id: number;
            message: string;
            /** Format: date-time */
            created: string;
        };
        UserCreate: {
            /** Format: email */
            email: string;
            firstName: string;
            lastName: string;
        };
        User: {
            /** Format: uint32 */
            id: number;
            /** Format: email */
            email: string;
            firstName: string;
            lastName: string;
        };
        TeamCreate: {
            name: string;
        };
        Team: {
            /** Format: uint32 */
            id: number;
            name: string;
        };
    };
    responses: {
        /** @description Access token is missing or invalid */
        UnauthorizedError: {
            headers: {
                [name: string]: unknown;
            };
            content?: never;
        };
    };
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    renderEvent: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A continuous stream of server-sent events. */
            200: {
                headers: {
                    /** @description No caching is allowed for this stream. */
                    "Cache-Control"?: string;
                    /** @description Advises the client to keep the connection open. */
                    Connection?: string;
                    /** @description The MIME type of this stream is text/event-stream. */
                    "Content-Type"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "text/event-stream": string;
                };
            };
        };
    };
    OptionsAPINotificationsNotificationIDRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                notificationID: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful CORS preflight */
            204: {
                headers: {
                    /** @description The allowed origin for cross-origin requests */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Allowed HTTP methods */
                    "Access-Control-Allow-Methods"?: string;
                    /** @description Allowed headers in the actual request */
                    "Access-Control-Allow-Headers"?: string;
                    /** @description Whether credentials (cookies, HTTP authentication) are allowed */
                    "Access-Control-Allow-Credentials"?: string;
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetAPICalendarMe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully got user calendar events */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CalendarEvent"][];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["UnauthorizedError"];
            /** @description Something went wrong internally */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
        };
    };
    PostAPIRefresh: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully refreshed access token */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            401: components["responses"]["UnauthorizedError"];
        };
    };
    GetAPIAuthCallback: {
        parameters: {
            query: {
                code: string;
                state: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful auth */
            302: {
                headers: {
                    /** @description The URL to redirect to after successful authentication */
                    Location?: string;
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetAPIHealthcheck: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Healthcheck successful */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
        };
    };
    PostAPIUsersMeLogout: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully logged out on backend */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
        };
    };
    GetAPIUsersMe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Got user successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            /** @description Bad request (e.g., invalid team ID) */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["UnauthorizedError"];
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetAPIUsers: {
        parameters: {
            query?: {
                /** @description Email of user */
                email?: string;
                /** @description First name of user */
                firstName?: string;
                /** @description Last name of user */
                lastName?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Users matching the query parameters */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"][];
                };
            };
            /** @description Bad request (e.g., invalid team ID) */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PostAPIUsers: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserCreate"];
            };
        };
        responses: {
            /** @description User created successfully */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            /** @description Bad request (e.g., invalid team ID) */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetAPIUsersUserID: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Numeric ID of the user to get */
                userID: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Got user successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            /** @description Bad request (e.g., invalid team ID) */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DeleteAPIUsersUserID: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Numeric ID of the user to delete */
                userID: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Deleted user successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            /** @description Bad request (e.g., invalid user ID) */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetAPITeamsMe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Got all user's teams successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Team"][];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["UnauthorizedError"];
            /** @description User not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetAPITeams: {
        parameters: {
            query?: {
                /** @description Team name */
                name?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Teams matching the query parameters */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Team"][];
                };
            };
            /** @description Bad request (e.g., invalid team name) */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    PostAPITeams: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TeamCreate"];
            };
        };
        responses: {
            /** @description Team created successfully */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Team"];
                };
            };
            /** @description Bad request (e.g., invalid team name) */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
        };
    };
    OptionsAPITeams: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful CORS preflight */
            204: {
                headers: {
                    /** @description The allowed origin for cross-origin requests */
                    "Access-Control-Allow-Origin"?: string;
                    /** @description Allowed HTTP methods */
                    "Access-Control-Allow-Methods"?: string;
                    /** @description Allowed headers in the actual request */
                    "Access-Control-Allow-Headers"?: string;
                    /** @description Whether credentials (cookies, HTTP authentication) are allowed */
                    "Access-Control-Allow-Credentials"?: string;
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetAPITeamsTeamID: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Numeric ID of the team to get */
                teamID: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Got team successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Team"];
                };
            };
            /** @description Team not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Something went wrong internally */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DeleteAPITeamsTeamID: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Numeric ID of the team to delete */
                teamID: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Deleted team successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            /** @description Bad request (e.g., invalid team id) */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Team not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetAPITeamsTeamIDUsers: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the team */
                teamID: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Users successfully found */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"][];
                };
            };
            /** @description Bad request, team id is invalid */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
            /** @description Something went wrong */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
        };
    };
    PostAPITeamsTeamIDUsersUserID: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the user */
                userID: number;
                /** @description ID of the team */
                teamID: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description User successfully added to the team */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Team"];
                };
            };
            /** @description Bad request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["UnauthorizedError"];
            /** @description User or team not found */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
