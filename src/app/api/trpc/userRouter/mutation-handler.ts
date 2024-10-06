import { prismaClient } from "@/server/index";
import { UserSchema } from "./schema";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";

export const createUser = async(input: z.infer<typeof UserSchema>) => {
    try {
        const result = await prismaClient.user.create({
            data: {
                name: input.name,
                email: input.email,
                password: input.password,
                phone: input.phone,
                country: input.country,
            },
        });
        return result;
    } catch (error: any) {
        let message = error?.message ?? "Error creating user";
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