"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  createCreatorProfile,
} from "@repo/db";

import { getSession } from "../../src/lib/auth/server";

export async function createProfileAction(
  formData: FormData
) {
  const session = await getSession(
    await headers()
  );

  if (!session) {
    redirect("/login");
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

  await createCreatorProfile({
    userId: session.user.id,
    niche,
    primaryPlatform,
    followerCount,
  });

  redirect("/dashboard");
}