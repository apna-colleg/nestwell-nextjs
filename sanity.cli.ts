/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from "sanity/cli";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  // Configuration for `sanity typegen generate`
  typegen: {
    // Look for GROQ queries in app/lib (including `lib/sanity/queries.ts`)
    path: "./{app,components,lib,sanity,hooks,utils,actions}/**/*.{ts,tsx",
    // Uses the schema extracted by `sanity schema extract --path=./schema.json`

    // Where to write the generated types
    generates: "./sanity.types.ts",

  },
});
