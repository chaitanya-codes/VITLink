import { auth, signIn, signOut } from "@/auth";
import React from "react";
import { useRouter } from 'next/navigation';
import "@/app/styles/sign.css";


export default async function SignIn() {
  const session = await auth();
  console.log(session)
  const user = session?.user
  return user?
  (
    <>
  <h1 className="font-bold">Welcome </h1>
  <div className="mx-5">{user.name}</div>
  <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button className="gs" type="submit">Sign out</button>
      </form>
  </>
)
  :(
      <form
        action={async () => {
          "use server"
          await signIn("google")
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
    )
  } 