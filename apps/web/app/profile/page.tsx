import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ProfileForm } from "../../src/components/profile/profile-form";

import {
  getCreatorProfileByUserId,
} from "@repo/db";

import { getSession } from "../../src/lib/auth/server";

export default async function ProfilePage() {
  const session = await getSession(
    await headers()
  );

  if (!session) {
    redirect("/login");
  }

  const profile =
    await getCreatorProfileByUserId(
      session.user.id
    );

  if (!profile) {
    redirect("/onboarding");
  }

  return (
    <div>
      <h1>Profile</h1>

      <ProfileForm
  niche={profile.niche}
  primaryPlatform={
    profile.primaryPlatform
  }
  followerCount={
    profile.followerCount
  }
/>
    </div>
  );
}