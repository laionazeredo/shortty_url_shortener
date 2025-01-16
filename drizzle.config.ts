import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required.");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/external/db/schema.ts",
  out: "./src/external/db/migrations/",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
