import { protectedProcedure, router } from "@/server/trpc";
import { CreateCommunitySchema, GetCommunitySchema } from "./schema";
import { createCommunity } from "./mutation-handler";
import { getUserCommunities } from "./query-handler";

const communityRouter = router({
    createCommunity: protectedProcedure
        .input(CreateCommunitySchema)
        .mutation(async ({ input }) => {
            return createCommunity(input);
        }),
    getUserCommunities: protectedProcedure
        .input(GetCommunitySchema)
        .query(async ({ input }) => {
            return getUserCommunities(input);
        })
});

export default communityRouter;