import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const UrlTable = pgTable("urls", {
  original: text("original").notNull().primaryKey(),
  slug: varchar("slug", { length: 10 }).notNull().unique(),
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
});

export const UrlHitTrackingTable = pgTable("url_hit_tracking", {
  id: serial("id").primaryKey(),
  original: text("original")
    .notNull()
    .references(() => UrlTable.original),
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
});

export type Url = typeof UrlTable.$inferSelect;
export type NewUrlTable = typeof UrlTable.$inferInsert;

export type UrlHitTracking = typeof UrlHitTrackingTable.$inferSelect;
export type NewUrlHitTracking = typeof UrlHitTrackingTable.$inferInsert;
