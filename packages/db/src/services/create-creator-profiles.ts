import { db } from "../client";
import { creatorProfiles } from "../schema";

type CreateCreatorProfileInput = {
  userId: string;
  niche: string;
  primaryPlatform: string;
  followerCount: number;
};

export async function createCreatorProfile(
  input: CreateCreatorProfileInput
) {
  const [profile] = await db
    .insert(creatorProfiles)
    .values({
      id: crypto.randomUUID(),
      userId: input.userId,
      niche: input.niche,
      primaryPlatform: input.primaryPlatform,
      followerCount: input.followerCount,
      onboardingCompleted: true,
    })
    .returning();

  return profile;
}