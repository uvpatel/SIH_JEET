import mongoose, { Schema, Document, Types } from "mongoose";

// 1️⃣ Define the interface (TypeScript types)
export interface ITimetableEntry {
  day: string; // e.g., "Monday"
  slot: string; // e.g., "9AM-10AM"
  subject: Types.ObjectId; // ref to Subject
  faculty: Types.ObjectId; // ref to Faculty
  room: Types.ObjectId; // ref to Room
}

export interface ITimetable extends Document {
  classId: string; // e.g., "CSE-3A"
  week: number;
  schedule: ITimetableEntry[];
  createdAt?: Date;
  updatedAt?: Date;
}

// 2️⃣ Define the Mongoose schema
const timetableSchema = new Schema<ITimetable>(
  {
    classId: {
      type: String,
      required: true,
      trim: true,
    },
    week: {
      type: Number,
      default: 1,
    },
    schedule: [
      {
        day: {
          type: String,
          required: true,
        },
        slot: {
          type: String,
          required: true,
        },
        subject: {
          type: Schema.Types.ObjectId,
          ref: "Subject",
          required: true,
        },
        faculty: {
          type: Schema.Types.ObjectId,
          ref: "Faculty",
          required: true,
        },
        room: {
          type: Schema.Types.ObjectId,
          ref: "Room",
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

// 3️⃣ Export the model
export const Timetable =
  mongoose.models.Timetable || mongoose.model("Timetable", timetableSchema);