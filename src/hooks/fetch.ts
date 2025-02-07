import createClient from "openapi-fetch";
import type { paths } from "../types/openapi.d.ts";

const slotifyClient = createClient<paths>({
  baseUrl: "http://localhost:8080/",
  credentials: "include", // fetch option to send http-only cookies
});

export default slotifyClient;
