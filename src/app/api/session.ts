import { auth } from "@/auth";

export default async function handler(req, res) {
  const session = await auth(); // Fetch session server-side
  res.status(200).json({ user: session?.user });
}
