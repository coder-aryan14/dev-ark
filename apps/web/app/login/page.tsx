"use client";

import { useState } from "react";
import { authClient } from "../../src/lib/auth/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const result = await authClient.signIn.email({
      email,
      password,
    });

    console.log("LOGIN RESULT:", result);

if (result.data) {
  console.log("LOGIN SUCCESS");
}

    if (result.error) {
      console.error("LOGIN ERROR:", result.error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1>Login</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}