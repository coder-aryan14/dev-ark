import { ReactNode } from "react";

import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

type DashboardLayoutProps = {
  children: ReactNode;
  name: string;
};

export function DashboardLayout({
  children,
  name,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar name={name} />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}