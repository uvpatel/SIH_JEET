import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { dbConnect } from "@/dbConfig/dbConfig";
import { Admin } from "@/models/admin.model";
import { Faculty } from "@/models/faculty.model";
import { Student } from "@/models/student.model";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    const user =
      (await Admin.findOne({ email })) ||
      (await Faculty.findOne({ email })) ||
      (await Student.findOne({ email }));

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
    }

    // You can set cookies/JWT here if needed
    return NextResponse.json({ success: true, message: "Login successful", user }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 400 });
  }
}
