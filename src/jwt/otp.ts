import { env } from "@lib/env";
import { getExpiryTime } from "@lib/tools";
import { sign } from "hono/jwt";

export const generateOtpJwt = async (payload: {
  email: string;
  otp: string;
}) => {
  const token = await sign(
    {
      ...payload,
      exp: getExpiryTime(env.OTP_JWT_EXPIRE as string),
    },
    env.OTP_JWT_SECRET as string
  );

  return token;
};
