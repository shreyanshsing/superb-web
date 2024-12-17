import { protectedProcedure, router } from "@/server/trpc";
import { fileUpload } from "./mutation-handler";
import { FileSchema } from "./schema";

const fileUploadRouter = router({
  uploadFile: protectedProcedure
    .input(FileSchema)
    .mutation(async ({ input }) => {
      console.log("input", input);
      const { url, key } = await fileUpload(input);
      return { url, key };
    }),
});

export default fileUploadRouter;