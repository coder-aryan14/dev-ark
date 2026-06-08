import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";

export default function Home() {
  return (
    
   
    <main className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
       <h1 className="text-4xl font-bold">
  DevArk
</h1>

<p className="mt-2 text-sm text-gray-500">
  AI-Powered Creator Growth OS
</p>

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
    
  );
}