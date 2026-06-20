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
      <div className="grid gap-6 md:grid-cols-2">
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
              Creator Score
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p>Coming Soon</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>
              Recommendations
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p>Coming Soon</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}