import { NextResponse } from "next/server";
import { dbConnect } from "@/dbConfig/dbConfig";
import { Subject } from "@/models/subject.model";
import { subjectSchema } from "@/schemas/subject.schema";

export async function GET() {
  try {
    await dbConnect();
    const subjects = await Subject.find().populate("faculty");
    return NextResponse.json({ success: true, data: subjects });
  } catch (error: any) {
    console.error("GET /subjects error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const validated = subjectSchema.parse(body);

    const subject = await Subject.create(validated);
    return NextResponse.json({ success: true, data: subject }, { status: 201 });
  } catch (error: any) {
    console.error("POST /subjects error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}