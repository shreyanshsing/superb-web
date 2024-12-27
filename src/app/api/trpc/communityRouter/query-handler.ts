import { z } from "zod";
import { GetCommunitySchema } from "./schema";
import { prismaClient } from "@/server";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { TRPCError } from "@trpc/server";

export const getUserCommunities = async (input: z.infer<typeof GetCommunitySchema>) => {
    try {
        const result = await prismaClient.community.findMany({
            where: {
                OR: [
                    {
                        ownerId: input.id,
                    },
                    {
                        admins: {
                            some: {
                                id: input.id,
                            },
                        },
                    },
                    {
                        members: {
                            some: {
                                id: input.id,
                            },
                        },
                    },
                ],
            },
        });

        console.log("result", result);

        return result;
    } catch (error: any) {
        let message = error?.message ?? "Error updating user";
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
};