import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_UR as string,
});

export const { signIn, signUp, useSession ,signOut } = createAuthClient();