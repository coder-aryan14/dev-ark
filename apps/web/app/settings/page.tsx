import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { LogoutButton } from "../../src/components/settings/logout-button";

import {
  getCreatorProfileByUserId,
} from "@repo/db";

import { getSession } from "../../src/lib/auth/server";

import { SettingsCard } from "../../src/components/settings/settings-card";

export default async function SettingsPage() {
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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="text-muted-foreground">
          Manage your account settings.
        </p>
      </div>

      <SettingsCard title="Account Information">
        <div className="space-y-2">
          <p>
            <strong>Name:</strong>{" "}
            {session.user.name}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {session.user.email}
          </p>
        </div>
      </SettingsCard>

      <SettingsCard title="Creator Settings">
        <div className="space-y-2">
          <p>
            <strong>Platform:</strong>{" "}
            {profile.primaryPlatform}
          </p>

          <p>
            <strong>Niche:</strong>{" "}
            {profile.niche}
          </p>

          <p>
            <strong>Followers:</strong>{" "}
            {profile.followerCount}
          </p>
        </div>
      </SettingsCard>

      <SettingsCard title="Danger Zone">
        <div>
          <LogoutButton />
        </div>
      </SettingsCard>
    </div>
  );
}