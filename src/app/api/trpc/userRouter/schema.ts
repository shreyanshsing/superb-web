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

export const UserUpdateSchema = z.object({
    id: z.string(),
    name: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    country: z.string().optional(),
    wallpaper: z.string().optional(),
    avatar: z.string().optional(),
    bio: z.string().optional(),
    headline: z.string().optional(),
    followers: z.array(z.string()).optional(),
    following: z.array(z.string()).optional(),
    password: z.string().min(6).optional()
});

export const UserStatsSchema = z.object({
    followers: z.number().optional(),
    following: z.number().optional(),
    posts: z.number().optional(),
    tags: z.number().optional(),
    saved: z.number().optional(),
});