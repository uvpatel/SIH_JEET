import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import {  dbConnect } from "@/dbConfig/dbConfig";
import { Admin } from "@/models/admin.model";
import { Faculty } from "@/models/faculty.model";
import { Student } from "@/models/student.model";
import { adminSchema } from "@/schemas/admin.schema";
import { facultySchema } from "@/schemas/faculty.schema";
import { studentSchema } from "@/schemas/student.shema";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { role } = body;

    let validated;
    if (role === "Admin" || role === "DepartmentHead") {
      validated = adminSchema.parse(body);
      validated.password = await bcrypt.hash(validated.password, 10);
      await Admin.create(validated);
    } else if (body.facultyId) {
      validated = facultySchema.parse(body);
      validated.password = await bcrypt.hash(validated.password, 10);
      await Faculty.create(validated);
    } else {
      validated = studentSchema.parse(body);
      validated.password = await bcrypt.hash(validated.password, 10);
      await Student.create(validated);
    }

    return NextResponse.json({ success: true, message: "Registered successfully" }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 400 });
  }
}
