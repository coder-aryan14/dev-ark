/// <reference types="node" />

import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
import path from "path";

config({
  path: path.resolve(__dirname, "../../.env"),
});
console.log("DATABASE_URL:", !!process.env.DATABASE_URL);

export default defineConfig({
  schema: "./src/schema",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});