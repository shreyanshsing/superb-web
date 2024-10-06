import userRouter from "@api/trpc/userRouter/router";
import { mergeRouter, publicProcedure, router } from "./trpc";
import prisma from "@prisma/client";

const smapleRouter =  router({
    greetings: publicProcedure
    .query(() => {
        return 'Hello World';
    }),
}
);


export const prismaClient = new prisma.PrismaClient();
export const appRouter = mergeRouter(smapleRouter, userRouter);
export type AppRouter = typeof appRouter;