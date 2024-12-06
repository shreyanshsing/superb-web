import { z } from "zod";

export const UserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    phone: z.string().optional().default(""),
    country: z.string().optional().default(""),
});

export const UserSearchSchema = z.object({
    email: z.string().email().optional(),
    name: z.string().optional()
});