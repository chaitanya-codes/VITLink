// 'use client'; // Marks this as a Client Component

// import React, { useEffect, useState } from 'react';
// import { signInWithGoogle, signOutFromApp } from "@/auth/authActions";
// import { auth } from "@/auth";

// export default function SignInButton() {
//   const [user, setUser] = useState(null); // State to hold user session

//   useEffect(() => {
//     async function fetchSession() {
//       const session = await auth(); // Fetch session data asynchronously
//       setUser(session?.user); // Set user session in state
//     }
//     fetchSession(); // Call fetch session function when component mounts
//   }, []); // Empty dependency array to run only on mount

//   return (
//     <>
//       {user ? (
//         <form
//           action={async () => {
//             await signOutFromApp(); // Calling the server-side action
//           }}
//         >
//           <button className="text-white google-signin" type="submit">
//             Sign out
//           </button>
//         </form>
//       ) : (
//         <form
//           action={async () => {
//             await signInWithGoogle(); // Calling the server-side action
//           }}
//         >
//           <button type="submit" className="google-signin">
//             Sign in with Google
//           </button>
//         </form>
//       )}
//     </>
//   );
// }
