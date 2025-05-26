import { z } from "@hono/zod-openapi";

export const generateOtpSchema = z
  .object({
    email: z.string().email(),
  })
  .openapi({
    required: ["email"],
    example: {
      email: "example@gmail.com",
    },
  });
export const verifyOtpSchema = z
  .object({
    token: z.string(),
    otp: z.string(),
  })
  .openapi({
    required: ["token", "otp"],
    example: {
      token: "JWT token",
      otp: "1234",
    },
  });
export const resendOtpSchema = z
  .object({
    token: z.string(),
  })
  .openapi({
    required: ["token"],
    example: {
      token: "JWT token",
    },
  });

export type IGenerateOtp = z.infer<typeof generateOtpSchema>;
export type IVerifyOtp = z.infer<typeof verifyOtpSchema>;
export type IResendOtp = z.infer<typeof resendOtpSchema>;
