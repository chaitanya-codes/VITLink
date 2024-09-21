import { auth, signIn, signOut } from "@/auth"
import "@/app/styles/styles.css"; // Adjust to the correct path

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
        <button className=" google-signin" type="submit">Sign out</button>
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
        <button type="submit  google-signin">Signin with Google</button>
      </form>
    )
  } 