import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const UrlTable = pgTable("urls", {
  id: serial("id").primaryKey(),
  original: text("original").notNull(),
  slug: varchar("slug", { length: 10 }).notNull().unique(),
  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
  updatedAt: timestamp("updated_at")
    .notNull()
    .default(sql`now()`),
});

export type Url = typeof UrlTable.$inferSelect;
export type NewUrlTable = typeof UrlTable.$inferInsert; // Para tipagem dos dados para inserção
