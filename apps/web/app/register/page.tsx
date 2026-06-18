"use client";

import { useState } from "react";
import { authClient } from "../../src/lib/auth/client";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const result = await authClient.signUp.email({
      name,
      email,
      password,
    });

    console.log("FULL RESULT:", result);

if (result.error) {
  console.error("AUTH ERROR:", result.error);
}
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1>Create Account</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      <button onClick={handleRegister}>
        Create Account
      </button>
    </div>
  );
}