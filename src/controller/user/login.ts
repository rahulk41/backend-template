import { HTTPException } from "hono/http-exception";
import prisma from "../../config/prisma";
import { getExpiryTime, validatePassword } from "../../lib/tools";
import { IUserLogin } from "@schema/user";
import { userGenerateToken } from "@jwt/user";
import { env } from "@lib/env";

export const login = async (body: IUserLogin) => {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (!user) {
      throw new HTTPException(404, {
        message: "User with this email does not exist",
      });
    }
    const passwordVerify = await validatePassword(body.password, user.password);
    if (!passwordVerify) {
      throw new HTTPException(404, {
        message: "Incorrect password",
      });
    }
  
    if (!user.emailVerified) {
      throw new HTTPException(404, {
        message: "Account not verified. Please verify your email.",
      });
    }
  
    return {
      token: await userGenerateToken({
        id: user.id,
        name: user.name,
      }),
      refreshToken: await userGenerateToken({
        id: user.id,
        name: user.name,
      }),
      expireTime: getExpiryTime(env.USER_JWT_EXPIRE),
    };
  };
  