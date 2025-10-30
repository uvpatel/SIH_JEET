import { z } from "zod";

export const subjectSchema = z.object({
  subjectCode: z.string().trim().min(2, "Subject code is required"),
  name: z.string().trim().min(2, "Subject name is required"),
  department: z.string().optional(),
  credits: z.number().min(1).max(6).optional(),
  faculty: z.array(z.string()).optional(), // Faculty ObjectIds
});

export type SubjectSchema = z.infer<typeof subjectSchema>;
