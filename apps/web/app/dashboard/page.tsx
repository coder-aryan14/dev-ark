import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { getSession } from "../../src/lib/auth/server";

import { getCreatorProfileByUserId } from "@repo/db";
import { DashboardLayout } from "../../src/components/dashboard/dashboard-layout";

export default async function DashboardPage() {
  const session = await getSession(await headers());

  if (!session) {
    redirect("/login");
  }

  const profile = await getCreatorProfileByUserId(
    session.user.id
  );

  if (!profile) {
    redirect("/onboarding");
  }

  return (
  <DashboardLayout
    name={session.user.name}
  >
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border p-6">
        <h2 className="font-semibold">
          Creator Profile
        </h2>

        <p>
          Niche: {profile.niche}
        </p>

        <p>
          Platform: {profile.primaryPlatform}
        </p>

        <p>
          Followers: {profile.followerCount}
        </p>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="font-semibold">
          Creator Score
        </h2>

        <p>
          Coming Soon
        </p>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="font-semibold">
          Recommendations
        </h2>

        <p>
          Coming Soon
        </p>
      </div>
    </div>
  </DashboardLayout>
);
}