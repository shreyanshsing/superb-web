import { prismaClient } from "@/server/index";
import { UserSchema, UserUpdateSchema } from "./schema";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { hashPassword } from "../auth/utils";
import { getUsersByFields } from "./queries-handler";

export const createUser = async (input: z.infer<typeof UserSchema>) => {
    try {
        const user = await getUsersByFields({ email: input.email });
        if (user.length > 0) {
            throw new TRPCError({
                code: "BAD_REQUEST",
                message: "User already exists",
            });
        }
        const hashedPassword = await hashPassword(input.password);
        const result = await prismaClient.user.create({
            data: {
                name: input.name,
                email: input.email,
                password: hashedPassword,
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

export const updateUser = async (input: z.infer<typeof UserUpdateSchema>) => {
    const userId = input.id;
    const user = await prismaClient.user.findUnique({
        where: {
            id: userId,
        },
    });
    if (!user) {
        throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not found",
        });
    }
    try {
        const result = await prismaClient.user.update({
            where: {
                id: userId,
            },
            data: {
                name: input.name,
                email: input.email,
                phone: input.phone,
                country: input.country,
                wallpaper: input.wallpaper,
                avatar: input.avatar,
                bio: input.bio,
                headline: input.headline,
                password: input.password ? await hashPassword(input.password) : undefined,
            },
        });
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
}