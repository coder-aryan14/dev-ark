import { eq } from "drizzle-orm";

import { db } from "../client";
import { creatorProfiles } from "../schema";

export async function getCreatorProfileByUserId(
  userId: string
) {
  const profile = await db
    .select()
    .from(creatorProfiles)
    .where(
      eq(creatorProfiles.userId, userId)
    );

  return profile[0] ?? null;
}