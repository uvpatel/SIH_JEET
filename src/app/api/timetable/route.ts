import { NextResponse } from "next/server";
import { dbConnect } from "@/dbConfig/dbConfig";
import { Timetable }  from "@/models/timetable.model";
import { Subject } from "@/models/subject.model";
import { Faculty } from "@/models/faculty.model";
import { Room } from "@/models/room.model";

// ✅ GET — Fetch all timetables
export async function GET() {
  try {
    await dbConnect();

    const timetables = await Timetable.find()
      .populate("schedule.subject", "name code")
      .populate("schedule.faculty", "name email")
      .populate("schedule.room", "roomNumber")
      .lean();

    return NextResponse.json(
      { success: true, data: timetables },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching timetables:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

// ✅ POST — Create a new timetable
export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { classId, week, schedule } = body;

    if (!classId || !schedule) {
      return NextResponse.json(
        { success: false, message: "classId and schedule are required" },
        { status: 400 }
      );
    }

    // Optional validation (check if referenced items exist)
    for (const item of schedule) {
      if (item.subject) {
        const subjectExists = await Subject.findById(item.subject);
        if (!subjectExists)
          return NextResponse.json(
            { success: false, message: `Invalid subject ID: ${item.subject}` },
            { status: 400 }
          );
      }

      if (item.faculty) {
        const facultyExists = await Faculty.findById(item.faculty);
        if (!facultyExists)
          return NextResponse.json(
            { success: false, message: `Invalid faculty ID: ${item.faculty}` },
            { status: 400 }
          );
      }

      if (item.room) {
        const roomExists = await Room.findById(item.room);
        if (!roomExists)
          return NextResponse.json(
            { success: false, message: `Invalid room ID: ${item.room}` },
            { status: 400 }
          );
      }
    }

    // ✅ Create new timetable
    const newTimetable = await Timetable.create({
      classId,
      week: week || 1,
      schedule,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Timetable created successfully",
        data: newTimetable,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating timetable:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
