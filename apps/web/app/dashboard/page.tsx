import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { getSession } from "../../src/lib/auth/server";

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
    <div>
      <h1>Dashboard</h1>

      <pre>
        {JSON.stringify(profile, null, 2)}
      </pre>
    </div>
  );
}