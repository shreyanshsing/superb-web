import { publicProcedure, router } from "@server/trpc";
import { UserSchema, UserSearchSchema } from "./schema";
import { createUser } from "./mutation-handler";
import { z } from "zod";
import { getUserById, getUsersByFields } from "./queries-handler";

const userRouter = router({
    getUserById: publicProcedure
    .input(z.string())
    .query(async({ input }) => await getUserById(input)),
    getUsersByFields: publicProcedure
    .input(UserSearchSchema)
    .query(async({ input }) => await getUsersByFields(input)),
    createUser: publicProcedure
        .input(UserSchema)
        .mutation(async({ input }) => await createUser(input)),
});

export default userRouter;