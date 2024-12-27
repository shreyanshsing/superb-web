import { z } from "zod";
import { CreateCommunitySchema } from "./schema";
import { prismaClient } from "@/server";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { TRPCError } from "@trpc/server";

export const createCommunity = async (input: z.infer<typeof CreateCommunitySchema>) => {
    try {
        const community = await prismaClient.community.create({
            data: {
                name: input.name,
                description: input.description,
                avatar: input.avatar,
                ownerId: input.ownerId,
                admins: {
                    connect: {
                        id: input.ownerId,
                    },
                }
            },
        });
        return community;
    } catch (error: any) {
        let message = error?.message ?? "Error creating community";
        if (error instanceof PrismaClientValidationError) {
            message = error?.message?.split("invocation")[1];
        }
        const err = new TRPCError({
            code: "BAD_REQUEST",
            message: message,
            cause: error,
        });
        throw err;
    }
}