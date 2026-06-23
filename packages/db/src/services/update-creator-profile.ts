import { eq } from "drizzle-orm";

import { db } from "../client";
import { creatorProfiles } from "../schema";

type UpdateCreatorProfileInput = {
  userId: string;
  niche: string;
  primaryPlatform: string;
  followerCount: number;
};

export async function updateCreatorProfile(
  input: UpdateCreatorProfileInput
) {
  const [profile] = await db
    .update(creatorProfiles)
    .set({
      niche: input.niche,
      primaryPlatform: input.primaryPlatform,
      followerCount: input.followerCount,
      updatedAt: new Date(),
    })
    .where(
      eq(
        creatorProfiles.userId,
        input.userId
      )
    )
    .returning();

  return profile;
}