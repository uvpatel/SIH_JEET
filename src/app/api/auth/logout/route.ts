import { NextResponse } from "next/server";

export async function POST() {
  // You can clear cookies or tokens here
  return NextResponse.json({ success: true, message: "Logged out successfully" });
}
