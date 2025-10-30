import { z } from "zod";

export const facultySchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  facultyId: z.string().min(2, "Faculty ID is required"),
  email: z.string().email({ message: "Invalid email address" }),
  department: z.string().optional(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  availableDays: z.array(z.string()).optional(),
  availableSlots: z.array(z.string()).optional(),
  maxLoad: z.number().int().min(0).default(20),
  assignedSubjects: z.array(z.string()).optional(), // ObjectId strings
});

export type FacultySchema = z.infer<typeof facultySchema>;
