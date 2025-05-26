import { HTTPException } from "hono/http-exception";
import prisma from "../../config/prisma";
import { getExpiryTime, validatePassword } from "../../lib/tools";
import { IAdminLogin } from "@schema/admin";
import { adminGenerateToken } from "@jwt/admin";
import { env } from "@lib/env";

export const login = async (body: IAdminLogin) => {
    const admin = await prisma.admin.findUnique({
      where: {
        email: body.email,
      },
    });
    if (!admin) {
      throw new HTTPException(404, {
        message: "Admin with this email does not exist",
      });
    }
    const passwordVerify = await validatePassword(body.password, admin.password);
    if (!passwordVerify) {
      throw new HTTPException(404, {
        message: "Incorrect password",
      });
    }
  
    if (!admin.emailVerified) {
      throw new HTTPException(404, {
        message: "Account not verified. Please verify your email.",
      });
    }
  
    return {
      token: await adminGenerateToken({
        id: admin.id,
        name: admin.name,
      }),
      refreshToken: await adminGenerateToken({
        id: admin.id,
        name: admin.name,
      }),
      expireTime: getExpiryTime(env.ADMIN_JWT_EXPIRE),
    };
  };
  