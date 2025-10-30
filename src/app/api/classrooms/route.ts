import { NextResponse } from "next/server";
import { dbConnect } from "@/dbConfig/dbConfig";
import { Room } from "@/models/room.model";
import { roomSchema } from "@/schemas/room.schema";

export async function GET() {
  await dbConnect();
  const rooms = await Room.find();
  return NextResponse.json(rooms);
}

export async function POST(req: Request) {
  await dbConnect();
  try {
    const body = await req.json();
    const validated = roomSchema.parse(body);
    const room = await Room.create(validated);
    return NextResponse.json(room, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
