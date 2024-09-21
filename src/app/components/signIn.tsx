"use server"

import { signIn } from "@/auth"

export default function SignIn() {
    return (
      <form
        action={async () => {
          await signIn("google")
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
    )
  } 