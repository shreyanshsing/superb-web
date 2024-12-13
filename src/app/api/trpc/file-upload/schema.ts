import { z } from 'zod';

export const FileSchema = z.object({
  folder: z.string(),
  fileName: z.string(),
  fileType: z.string(),
});