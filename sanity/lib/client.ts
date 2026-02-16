import { createClient } from "next-sanity";

import {dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export const readClient = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn: true,
});