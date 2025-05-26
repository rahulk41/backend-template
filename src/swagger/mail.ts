import { createRoute, z } from "@hono/zod-openapi";
import { sendMailSchema } from "@schema/mail";

export const sendMailDoc = createRoute({
  tags: ["Mailer"],
  method: "post",
  path: "/send-mail",
  summary: "Send mail to email",
  request: {
    body: {
      content: {
        "application/json": {
          schema: sendMailSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Successful mail send to user",
      content: {
        "application/json": {
          schema: z.object({
            status: z.number(),
            message: z.string(),
          }),
        },
      },
    },
  },
});
