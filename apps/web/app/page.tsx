import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";

export default function Home() {
  return (
    <>
    <div className="bg-red-500 p-10 text-white">
  Tailwind Test
</div>
<div className="rounded-xl border border-green-500 bg-green-100 p-6">
  Local Tailwind Test
</div>
    <main className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <h1 className="mb-6 text-3xl font-bold">
          DevArk
        </h1>

        <div className="space-y-4">
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <Button className="w-full">
            Login
          </Button>
        </div>
      </Card>
    </main>
    </>
  );
}