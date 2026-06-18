import { auth } from "./auth";

export async function getSession(headers: Headers) {
  return auth.api.getSession({
    headers,
  });
}