import { prismaClient } from "@/server";

export const getUserById = async ( id: string) => {
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