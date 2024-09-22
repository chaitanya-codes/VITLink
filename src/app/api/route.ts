// app/api/session/route.ts

import { auth } from "@/auth"; // Adjust the import path as needed
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await auth(); // Fetch session on the server
  return NextResponse.json({ user: session?.user });
}
