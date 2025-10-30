import { NextResponse } from "next/server";
import { dbConnect } from "@/dbConfig/dbConfig";
import { Faculty } from "@/models/faculty.model";
import { facultySchema } from "@/schemas/faculty.schema";

// export async function GET() {
//   await dbConnect();
//   const data = await Faculty.find().populate("assignedSubjects");
//   return NextResponse.json(data);
// }

export async function GET() {
  try {
    await dbConnect();

    const faculties = await Faculty.find();
    return NextResponse.json({ success: true, data: faculties });
  } catch (error: any) {
    console.error("Error fetching faculty:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  await dbConnect();
  try {
    const body = await req.json();
    const validated = facultySchema.parse(body);
    const created = await Faculty.create(validated);
    return NextResponse.json(created, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
