import { createRoute, z } from "@hono/zod-openapi";
import { resendOtpSchema, verifyOtpSchema } from "@schema/otp";
import { userLoginSchema, userRegisterSchema } from "@schema/user";

export const userRegisterDoc = createRoute({
  tags: ["User"],
  method: "post",
  path: "/register",
  summary: "Register a new user",
  description: "Creates a new user account with the provided details",
  request: {
    body: {
      content: {
        "application/json": {
          schema: userRegisterSchema,
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
            token: z.string(),
          }),
        },
      },
    },
  },
});
export const userLoginDoc = createRoute({
  tags: ["User"],
  method: "post",
  path: "/login",
  summary: "Login to user",
  description: "Login to user account with the provided details",
  request: {
    body: {
      content: {
        "application/json": {
          schema: userLoginSchema,
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
export const userVerifyDoc = createRoute({
  tags: ["User"],
  method: "post",
  path: "/verify",
  summary: "Verify user account",
  description: "Verify user using register email",
  request: {
    body: {
      content: {
        "application/json": {
          schema: verifyOtpSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Successfully account verified",
      content: {
        "application/json": {
          schema: z.object({
            status: z.string(),
            message: z.string(),
          }),
        },
      },
    },
  },
});
export const userResendOtpDoc = createRoute({
  tags: ["User"],
  method: "post",
  path: "/resend-otp",
  summary: "Resend OTP",
  description: "Resend OTP",
  request: {
    body: {
      content: {
        "application/json": {
          schema: resendOtpSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Successfully OTP Resend",
      content: {
        "application/json": {
          schema: z.object({
            status: z.string(),
            token: z.string(),
          }),
        },
      },
    },
  },
});