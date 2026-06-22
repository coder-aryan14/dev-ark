import { MetricCard } from "../../src/components/dashboard/metric-card";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { getSession } from "../../src/lib/auth/server";
import { DashboardLayout } from "../../src/components/dashboard/dashboard-layout";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@repo/ui/card";

import { getCreatorProfileByUserId } from "@repo/db";

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
    <DashboardLayout name={session.user.name}>
     <div className="space-y-6">
  <div className="grid gap-4 md:grid-cols-4">
    <MetricCard
      title="Followers"
      value={profile.followerCount}
    />

    <MetricCard
      title="Platform"
      value={profile.primaryPlatform}
    />

    <MetricCard
      title="Niche"
      value={profile.niche}
    />

    <MetricCard
      title="Creator Score"
      value="72/100"
      description="Placeholder"
    />
  </div>

  <Card>
    <CardHeader>
      <CardTitle>
        Creator Profile
      </CardTitle>
    </CardHeader>

    <CardContent>
      <p>
        Niche: {profile.niche}
      </p>

      <p>
        Platform: {profile.primaryPlatform}
      </p>

      <p>
        Followers: {profile.followerCount}
      </p>
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>
        Recommendations
      </CardTitle>
    </CardHeader>

    <CardContent>
      <p>
        Coming Soon
      </p>
    </CardContent>
  </Card>
</div>
    </DashboardLayout>
  );
}