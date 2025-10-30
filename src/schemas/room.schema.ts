import { z } from "zod";

export const roomSchema = z.object({
  roomNumber: z.string().trim().min(1, "Room number is required"),
  capacity: z.number().int().min(1, "Capacity must be at least 1"),
  type: z.enum(["Lecture Hall", "Lab", "Seminar Hall"]).default("Lecture Hall"),
  availability: z.object({
    days: z.array(z.string()).optional(),
    slots: z.array(z.string()).optional(),
  }).optional(),
});

export type RoomSchema = z.infer<typeof roomSchema>;
