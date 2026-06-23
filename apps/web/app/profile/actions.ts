"use server";

import { headers } from "next/headers";

import {
  updateCreatorProfile,
} from "@repo/db";

import { getSession } from "../../src/lib/auth/server";

export async function updateProfileAction(
  formData: FormData
) {
  const session = await getSession(
    await headers()
  );

  if (!session) {
    throw new Error(
      "Unauthorized"
    );
  }

  const niche =
    formData.get("niche") as string;

  const primaryPlatform =
    formData.get(
      "primaryPlatform"
    ) as string;

  const followerCount = Number(
    formData.get("followerCount")
  );

  await updateCreatorProfile({
    userId: session.user.id,
    niche,
    primaryPlatform,
    followerCount,
  });
}