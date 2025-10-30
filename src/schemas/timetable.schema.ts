import { z } from "zod";

export const timetableSchema = z.object({
  faculty: z.string().optional(), // ObjectId
  subject: z.string().optional(), // ObjectId
  room: z.string().optional(),    // ObjectId
  day: z.string().min(3, "Day is required"), // e.g., "Monday"
  slot: z.string().min(3, "Slot is required"), // e.g., "9AM-10AM"
  batch: z.string().optional(),
});

export type TimetableSchema = z.infer<typeof timetableSchema>;
