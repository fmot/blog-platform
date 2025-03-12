import { z } from "zod";

export const postPatchSchema = z.object({
  title: z
    .string()
    .min(3)
    .max(128, { message: "Title must be less than 128 characters" }),
  content: z.any().optional(),
});

export type postPatchSchemaType = z.infer<typeof postPatchSchema>;
