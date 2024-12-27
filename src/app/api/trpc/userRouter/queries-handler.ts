import { prismaClient } from "@/server";
import { UserSearchSchema } from "./schema";
import { z } from "zod";

export const getUserById = async (id: string) => {
    try {
        console.log("Getting user by id:", id);
        const user = await prismaClient.user.findUnique({
            where: {
                id: id,
            },
        });
        console.log("User:", user);
        return user;
    } catch (error: any) {
        console.error("Error:", error);
        throw new Error("Error getting user by id", error);
    }
};

export const getUsersByFields = async (fields: z.infer<typeof UserSearchSchema>) => {
    try {
        console.log("Getting user by fields:", fields);
        const user = await prismaClient.user.findMany({
            where: fields,
        });
        console.log("User:", user);
        return user;
    } catch (error: any) {
        console.error("Error:", error);
        throw new Error("Error getting user by fields", error);
    }
};

export const getUserStats = async (id: string) => {
    try {
        console.log("Getting user stats by id:", id);
        const user = await prismaClient.user.findUnique({
            where: {
                id: id,
            },
        });
        console.log("User:", user);
        const posts = 0;
        const tags = 0;
        const saved = 0;

        const stats = {
            posts,
            tags,
            saved,
        };
        return stats;
    } catch (error: any) {
        console.error("Error:", error);
        throw new Error("Error getting user stats by id", error);
    }
}