import mongoose, { Schema, Document, Model } from "mongoose";

// Example interface (you’ll already have your own for each)
export interface FacultyDocument extends Document {
  name: string;
  facultyId: string;
  email: string;
  password: string;
  department: string;
}

// Example schema
const facultySchema = new Schema<FacultyDocument>({
  name: { type: String, required: true },
  facultyId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  department: { type: String, required: true },
});

// ✅ Safe model creation pattern (works perfectly with Next.js hot reload)
export const Faculty: Model<FacultyDocument> =
  mongoose.models.Faculty || mongoose.model<FacultyDocument>("Faculty", facultySchema);
