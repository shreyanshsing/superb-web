import { publicProcedure, router } from "@server/trpc";
import { UserSchema } from "./schema";
import { createUser } from "./mutation-handler";
import { z } from "zod";
import { getUserById } from "./queries-handler";

const userRouter = router({
    getUserById: publicProcedure
    .input(z.string())
    .query(async({ input }) => await getUserById(input)),
    createUser: publicProcedure
        .input(UserSchema)
        .mutation(async({ input }) => await createUser(input)),
});

export default userRouter;