import { env } from "@lib/env";
import { getExpiryTime } from "@lib/tools";
import { IAdminPayload } from "@schema/jwt";
import { sign } from "hono/jwt";

export const adminGenerateToken = async (payload: IAdminPayload) => {
  const token = await sign(
    {
      ...payload,
      exp: getExpiryTime(env.ADMIN_JWT_EXPIRE),
    },
    env.ADMIN_JWT_SECRET
  );

  return token;
};
export const adminRefreshToken = async (payload: IAdminPayload) => {
  const token = await sign(
    {
      ...payload,
      exp: getExpiryTime(env.ADMIN_JWT_REFRESH_EXPIRE),
    },
    env.ADMIN_JWT_REFRESH_SECRET as string
  );

  return token;
};
