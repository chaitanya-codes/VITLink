import { db } from '@/db/index';
import { InsertPost, InsertUser, postsTable, usersTable } from '@/db/schema';

import React from 'react'
import { auth, signIn, signOut } from "@/auth"
import "@/app/styles/sign.css"; // Adjust to the correct path

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
        <button className="text-white google-signin" type="submit">Sign out</button>
      </form>
  </>
)
  :( <div className="flex items-center justify-center h-dvh">

       <form action={async ()=>{

            "use server";
            await signIn("google")
            await db.insert(usersTable).values({
              // name: user.name,
              // email:user.email,
              // image:user.image,
              name: "1",
              email: "xyz",
              image:"pqr",
            });
            await db.insert(postsTable).values({
              title: "hello moto",
              content: "yolo",
              userId:1
            });
          }
          }>
            <button type="submit" className="google-signin">Signin with Google</button>
          </form> 
      </div>
    )
  } 