import { createRoute, z } from "@hono/zod-openapi";
import { singleMediaSchema } from "@schema/media";

export const singleFileDoc = createRoute({
  tags: ["Media"],
  method: "post",
  path: "/file",
  summary: "Upload Single media",
  request: {
    body: {
      content: {
        "multipart/form-data": {
          schema: singleMediaSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Media uploaded suscefully",
      content: {
        "application/json": {
          schema: z.object({
            status: z.number(),
            path: z.string(),
          }),
        },
      },
    },
  },
});
