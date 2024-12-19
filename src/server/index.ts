import userRouter from "@api/trpc/userRouter/router";
import { mergeRouter, publicProcedure, router } from "./trpc";
import prisma from "@prisma/client";
import authRouter from "@/app/api/trpc/auth/router";
import fileUploadRouter from "@/app/api/trpc/file-upload/router";
import communityRouter from "@/app/api/trpc/communityRouter/router";

const smapleRouter = router({
    greetings: publicProcedure
        .query(() => {
            return 'Hello World';
        }),
}
);


export const prismaClient = new prisma.PrismaClient();
export const appRouter = mergeRouter(
    smapleRouter,
    userRouter,
    authRouter,
    fileUploadRouter,
    communityRouter
);
export type AppRouter = typeof appRouter;