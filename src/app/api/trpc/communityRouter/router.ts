import { protectedProcedure, router } from "@/server/trpc";
import { CreateCommunitySchema, GetAllCommunities, GetCommunitySchema } from "./schema";
import { createCommunity } from "./mutation-handler";
import { getAllCommunities, getUserCommunities } from "./query-handler";

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
        }),
        getAllCommunities: protectedProcedure
        .input(GetAllCommunities)
        .query(async ({ input }) => {
            return getAllCommunities(input);
        }),
});

export default communityRouter;