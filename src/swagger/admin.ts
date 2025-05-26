import { createRoute, z } from "@hono/zod-openapi";
import { adminLoginSchema, adminRegisterSchema } from "@schema/admin";

export const adminRegisterDoc = createRoute({
  tags: ["Admin"],
  method: "post",
  path: "/register",
  summary: "Register a new admin",
  description: "Creates a new admin account with the provided details",
  request: {
    body: {
      content: {
        "application/json": {
          schema: adminRegisterSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Successful registration",
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
export const adminLoginDoc = createRoute({
  tags: ["Admin"],
  method: "post",
  path: "/login",
  summary: "Login to admin",
  description: "Login to admin account with the provided details",
  request: {
    body: {
      content: {
        "application/json": {
          schema: adminLoginSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Successful login",
      content: {
        "application/json": {
          schema: z.object({
            status: z.number(),
            message: z.string(),
            token: z.string(),
            refreshToken: z.string(),
            expireTime: z.number(),
          }),
        },
      },
    },
  },
});