"use server";

import { signIn as authSignIn, signOut as authSignOut } from "@/auth";

export async function signInWithGoogle() {
  await authSignIn("google");
}

export async function signOutFromApp() {
  await authSignOut();
}
