import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
} from "drizzle-orm/pg-core";

import { user } from "./auth";

export const creatorProfiles = pgTable("creator_profiles", {
  id: text("id").primaryKey(),

  userId: text("user_id")
    .notNull()
    .unique()
    .references(() => user.id, {
      onDelete: "cascade",
    }),

  niche: text("niche").notNull(),

  primaryPlatform: text("primary_platform").notNull(),

  followerCount: integer("follower_count")
    .notNull()
    .default(0),

  onboardingCompleted: boolean(
    "onboarding_completed"
  )
    .notNull()
    .default(false),

  createdAt: timestamp("created_at")
    .notNull()
    .defaultNow(),

  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow(),
});