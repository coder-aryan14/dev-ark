import * as React from "react";

import { cn } from "./lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border p-6 shadow-sm",
        className
      )}
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
        color: "var(--card-foreground)",
      }}
      {...props}
    />
  );
}