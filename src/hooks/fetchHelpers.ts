/* eslint @typescript-eslint/no-explicit-any: 0 */

import client from "@/hooks/fetch";
import { toast } from "@/hooks/use-toast";
import type { paths } from "@/types/openapi";
import type { PathsWithMethod } from "openapi-typescript-helpers";
import slotifyClient from "@/hooks/fetch";

class FetchHelpers {
  testGlobalFunc(param: string): string {
    console.log("Global Function Called with:", param);
    return "a";
  }

  async getAPIrouteData<T>(
    route: PathsWithMethod<paths, "get">,
    params: any,
  ): Promise<T | null | undefined> {
    // UPDATE: This is now a generic method for GET routes.
    try {
      const { data, error, response } = await slotifyClient.GET(route, params);
      if (error && (response as Response).status == 401) {
        const refreshErrorOccurred = await this.refreshRetryGetAPIroute(route);
        return refreshErrorOccurred ? null : data;
      }
      return data;
    } catch (error) {
      this.toastDestructiveError(error as undefined);
      return null;
    }
  }

  async postAPIrouteData<T>(
    route: PathsWithMethod<paths, "post">,
    params: any,
  ): Promise<T | null | undefined> {
    // UPDATE: This is now a generic method for POST routes.
    try {
      const { data, error, response } = await slotifyClient.POST(route, params);
      if (error && (response as Response).status == 401) {
        const refreshErrorOccurred = await this.refreshRetryPostAPIroute(route);
        return refreshErrorOccurred ? null : data;
      }
      return data;
    } catch (error) {
      this.toastDestructiveError(error as undefined);
      return null;
    }
  }

  async refreshRetryGetAPIroute(
    route: PathsWithMethod<paths, "get">,
  ): Promise<boolean> {
    let errorOcurred = false;
    try {
      const { response } = await client.POST("/api/refresh", {});
      if (response.status == 401) {
        // The refresh token was invalid, could not refresh so back to login.
        // This has to be done for every fetch
        this.logOutUser();
      } else if (response.status == 201) {
        // retry the specified route
        const { data, response } = await client.GET(route, {});
        console.log(data);
        if (response.status == 401) {
          // MSAL client may no longer have user in cache, no other option other than to log out
          this.logOutUser();
        }
      }
      return errorOcurred;
    } catch (error) {
      errorOcurred = true;
      this.toastDestructiveError(error as undefined);
      return errorOcurred;
    }
  }

  async refreshRetryPostAPIroute(
    route: PathsWithMethod<paths, "post">,
  ): Promise<boolean> {
    let errorOcurred = false;
    try {
      const { response } = await client.POST("/api/refresh", {});
      if (response.status == 401) {
        this.logOutUser();
      } else if (response.status == 201) {
        const { data, response } = await client.POST(route, {});
        console.log(data);
        if (response.status == 401) {
          this.logOutUser();
        }
      }
      return errorOcurred;
    } catch (error) {
      errorOcurred = true;
      this.toastDestructiveError(error as undefined);
      return errorOcurred;
    }
  }

  async logOutUser(): Promise<void> {
    await client.POST("/api/users/me/logout", {});
    window.location.href = "/login";
  }

  toastDestructiveError(error: undefined): void {
    toast({
      title: "Error",
      description: JSON.stringify(error),
      variant: "destructive",
    });
  }
}

const fetchHelpers = new FetchHelpers();
export default fetchHelpers;
