import mongoose, { Schema, Document, Types } from "mongoose";

export interface SubjectDocument extends Document {
  subjectCode: string;
  name: string;
  department: string;
  credits: number;
  faculty: Types.ObjectId[];
}

const subjectSchema = new Schema<SubjectDocument>(
  {
    subjectCode: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
    },
    credits: {
      type: Number,
      default: 3,
    },
    faculty: [
      {
        type: Schema.Types.ObjectId,
        ref: "Faculty",
      },
    ],
  },
  { timestamps: true }
);


if (mongoose.models.Subject) {
  delete mongoose.models.Subject;
}

export const Subject =
  mongoose.model<SubjectDocument>("Subject", subjectSchema);
