import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { getSession } from "../../src/lib/auth/server";

export default async function DashboardPage() {
  const session = await getSession(await headers());

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
}