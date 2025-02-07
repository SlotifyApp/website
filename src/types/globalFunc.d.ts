export {};

declare global {
  function testGlobalFunc(param: string): string;
  function stringToPairsPath(param: string): PathsWithMethod<paths, "get">;
  function refreshRetryAPIroute(param: PathsWithMethod<paths, "get">): Promise<boolean>;
  function toastDestructiveError(param: undefined): void;
}