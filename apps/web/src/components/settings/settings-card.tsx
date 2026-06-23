import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/card";

import { ReactNode } from "react";

type SettingsCardProps = {
  title: string;
  children: ReactNode;
};

export function SettingsCard({
  title,
  children,
}: SettingsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}