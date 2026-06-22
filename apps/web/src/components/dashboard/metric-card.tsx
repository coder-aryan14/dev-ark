import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/card";

type MetricCardProps = {
  title: string;
  value: string | number;
  description?: string;
};

export function MetricCard({
  title,
  value,
  description,
}: MetricCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="text-3xl font-bold">
          {value}
        </div>

        {description ? (
          <p className="mt-2 text-sm opacity-70">
            {description}
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}