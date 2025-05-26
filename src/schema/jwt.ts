import { z } from "@hono/zod-openapi";

export const userPayloadSchema = z
  .object({
    id: z.string(),
    name: z.string(),
  })
  .openapi({
    required: ["id", "name"],
  });
export const adminPayloadSchema = z
  .object({
    id: z.string(),
    name: z.string(),
  })
  .openapi({
    required: ["id", "name"],
  });

export type IUserPayload = z.infer<typeof userPayloadSchema>;
export type IAdminPayload = z.infer<typeof adminPayloadSchema>;
