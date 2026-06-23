"use client";

import { useRouter } from "next/navigation";
import { authClient } from "../../lib/auth/client";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded border px-4 py-2"
    >
      Logout
    </button>
  );
}