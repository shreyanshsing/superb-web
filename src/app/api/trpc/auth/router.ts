import { publicProcedure, router } from "@/server/trpc";
import { LoginSchema } from "./schema";
import { createSession } from "./mutation-handler";

const authRouter = router({
    session: publicProcedure
    .input(LoginSchema)
    .mutation(async({ input }) => {
        return createSession(input);
    })
});

export default authRouter;