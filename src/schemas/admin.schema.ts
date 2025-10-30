import { z } from "zod";

export const adminSchema = z.object({
  name: z.string().trim().optional(),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["Admin", "DepartmentHead"]).default("Admin"),
  department: z.string().optional(),
});

export type AdminSchema = z.infer<typeof adminSchema>;
