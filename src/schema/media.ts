import { z } from "@hono/zod-openapi";

export const singleMediaSchema = z
  .object({
    folder: z.string(),
    file: z.instanceof(File).openapi({
      type: "string",
      format: "binary",
    }),
  })
  .openapi({
    required: ["folder", "file"],
  });

export type ISingleMedia = z.infer<typeof singleMediaSchema>;
