import { z } from "@hono/zod-openapi";

export const sendMailSchema = z
  .object({
    subject: z.string(),
    to: z.string().email(),
    from: z.string().email().optional(),
    cc: z.array(z.string().email()).optional(),
    html: z.string(),
  })
  .openapi({
    required: ["subject", "to", "html"],
    example: {
      subject: "Send Email",
      to: "example@gmail.com",
      html: "<p>Hello this mail is from template</p>",
    },
  });

export type ISendMail = z.infer<typeof sendMailSchema>;
