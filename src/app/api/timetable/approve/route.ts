import { NextResponse } from "next/server";
import {dbConnect} from "@/dbConfig/dbConfig";
import { Timetable } from "@/models/timetable.model";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const { timetableId, status, remarks } = await req.json();

    if (!timetableId || !status) {
      return NextResponse.json(
        { success: false, message: "Missing timetableId or status" },
        { status: 400 }
      );
    }

    const timetable = await Timetable.findById(timetableId);
    if (!timetable) {
      return NextResponse.json(
        { success: false, message: "Timetable not found" },
        { status: 404 }
      );
    }

    timetable.status = status;
    timetable.remarks = remarks || "";
    await timetable.save();

    return NextResponse.json(
      {
        success: true,
        message: "Timetable status updated successfully",
        data: timetable,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error approving timetable:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
