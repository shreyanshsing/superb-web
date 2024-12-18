import { protectedProcedure, publicProcedure, router } from "@server/trpc";
import { UserSchema, UserSearchSchema, UserUpdateSchema } from "./schema";
import { createUser, updateUser } from "./mutation-handler";
import { z } from "zod";
import { getUserById, getUsersByFields, getUserStats } from "./queries-handler";

const userRouter = router({
    getUserById: protectedProcedure
        .input(z.string())
        .query(async ({ input }) => await getUserById(input)),
    getUsersByFields: publicProcedure
        .input(UserSearchSchema)
        .query(async ({ input }) => await getUsersByFields(input)),
    createUser: publicProcedure
        .input(UserSchema)
        .mutation(async ({ input }) => await createUser(input)),
    updateUser: protectedProcedure
        .input(UserUpdateSchema)
        .mutation(async ({ input }) => await updateUser(input)),
    getUserStats: protectedProcedure
        .input(z.string())
        .query(async ({ input }) => await getUserStats(input)),

});

export default userRouter;