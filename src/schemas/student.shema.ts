import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  rollNumber: z.string().min(2, "Roll number is required"),
  email: z.string().email({ message: "Invalid email address" }),
  branch: z.string().min(2, "Branch is required"),
  year: z.number().int().min(1).max(4, "Year must be between 1 and 4"),
  section: z.string().optional(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  subjects: z.array(z.string()).optional(), // ObjectId strings
});

export type StudentSchema = z.infer<typeof studentSchema>;
