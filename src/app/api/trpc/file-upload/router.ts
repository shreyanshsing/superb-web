import { protectedProcedure, router } from "@/server/trpc";
import { fileUpload } from "./mutation-handler";
import { FileSchema } from "./schema";

const fileUploadRouter = router({
  uploadFile: protectedProcedure
    .input(FileSchema)
    .mutation(async ({ input }) => {
      console.log("input", input);
      const url = await fileUpload(input);
      return { url };
    }),
});

export default fileUploadRouter;