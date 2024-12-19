import { protectedProcedure, router } from "@/server/trpc";
import { CreateCommunitySchema } from "./schema";
import { createCommunity } from "./mutation-handler";

const communityRouter = router({
    createCommunity: protectedProcedure
        .input(CreateCommunitySchema)
        .mutation(async ({ input }) => {
            return createCommunity(input);
        })
});

export default communityRouter;