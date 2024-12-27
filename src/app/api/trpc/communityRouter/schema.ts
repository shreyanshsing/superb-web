import { z } from "zod";

export const CreateCommunitySchema = z.object({
    name: z.string(),
    description: z.string(),
    avatar: z.string(),
    ownerId: z.string(),
});

export const GetCommunitySchema = z.object({
    id: z.string(),
});

export const GetAllCommunities = z.object({
    name: z.string().optional(),
    offset: z.number().optional(),
    limit: z.number().optional(),
});