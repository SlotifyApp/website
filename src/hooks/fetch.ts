import createClient from "openapi-fetch";
import type { paths } from "../types/openapi.d.ts";

const client = createClient<paths>({ baseUrl: "https://localhost:3000/" });

const { data, error } = await client.GET("/healthcheck", {});
