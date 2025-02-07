import client from "./hooks/fetch";
import { toast } from "@/hooks/use-toast";
import type { paths } from "@/types/openapi";
import type { PathsWithMethod } from "openapi-typescript-helpers";

globalThis.testGlobalFunc = function (param: string): string {
  console.log("Global Function Called with:", param);
  return "a";
};

globalThis.stringToPairsPath = function(param: string): PathsWithMethod<paths, "get"> {
  return (param as PathsWithMethod<paths, "get">)
}

globalThis.refreshRetryAPIroute = async function (route: PathsWithMethod<paths, "get">): Promise<boolean> {
  let errorOcurred = false;
  const { error, response } = await client.POST("/api/refresh", {});
  if (response.status == 401) {
    // The refresh token was invalid, could not refresh so back to login. 
    // This has to be done for every fetch
    await client.POST("/api/users/me/logout", {});
    window.location.href = "/login";
  } else if (response.status == 201) {
    // retry the specified route
    const {data, error, response } = await client.GET(route, {},);
    console.log(data);
    if (response.status == 401) {
    // MSAL client may no longer have user in cache, no other option other than to log out
      await client.POST("/api/users/me/logout", {});
      window.location.href = "/login";
    }
    if (error) {
      errorOcurred = true;
      toastDestructiveError(error);
    } 
  } else if (error) {
    errorOcurred = true;
    toastDestructiveError(error);
  }
  return errorOcurred;
}

globalThis.toastDestructiveError = function(error: undefined): void {
  toast({
    title: "Error",
    description: error,
    variant: "destructive",
  });
}