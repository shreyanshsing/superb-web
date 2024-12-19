import { z } from "zod";

export const CreateCommunitySchema = z.object({
    name: z.string(),
    description: z.string(),
    avatar: z.string(),
    ownerId: z.string(),
});