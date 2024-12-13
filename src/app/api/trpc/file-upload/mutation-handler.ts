import { generateUploadFileUrl } from "@/services/aws/s3";
import { z } from "zod";
import { FileSchema } from "./schema";


export const fileUpload = async (input: z.infer<typeof FileSchema>): Promise<any> => {
    return await generateUploadFileUrl(input);
};