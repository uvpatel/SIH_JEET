import { NextResponse } from "next/server";
import { dbConnect } from "@/dbConfig/dbConfig";
import { Faculty } from "@/models/faculty.model";
import { Subject } from "@/models/subject.model";
import { Room } from "@/models/room.model";
import { Timetable } from "@/models/timetable.model";
import { z } from "zod";

// ✅ Input validation
const generateSchema = z.object({
  classId: z.string().min(2, "Class ID required"),
  week: z.number().default(1),
  days: z.array(z.string()).default(["Mon", "Tue", "Wed", "Thu", "Fri"]),
  slots: z.array(z.string()).default(["9AM-10AM", "10AM-11AM", "11AM-12PM", "1PM-2PM"]),
});

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { classId, week, days, slots } = generateSchema.parse(body);

    const subjects = await Subject.find();
    const faculties = await Faculty.find();
    const rooms = await Room.find();

    if (!subjects.length || !faculties.length || !rooms.length) {
      return NextResponse.json({
        success: false,
        message: "Ensure subjects, faculty, and rooms exist before generation",
      }, { status: 400 });
    }

    // 🧠 Basic generation logic
    const schedule: any[] = [];
    let subjectIndex = 0;
    let facultyIndex = 0;
    let roomIndex = 0;

    for (const day of days) {
      for (const slot of slots) {
        const subject = subjects[subjectIndex % subjects.length];
        const faculty = faculties[facultyIndex % faculties.length];
        const room = rooms[roomIndex % rooms.length];

        schedule.push({
          day,
          slot,
          subject: subject._id,
          faculty: faculty._id,
          room: room._id,
        });

        subjectIndex++;
        facultyIndex++;
        roomIndex++;
      }
    }

    // 🧾 Save the generated timetable
    const timetable = await Timetable.create({
      classId,
      week,
      schedule,
      status: "pending",
    });

    return NextResponse.json({
      success: true,
      message: "Timetable generated successfully",
      timetable,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 400 }
    );
  }
}
