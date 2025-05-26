import prisma from "@config/prisma";
import { hashedPassword } from "@lib/tools";
import { IAdminRegister } from "@schema/admin";
import { HTTPException } from "hono/http-exception";

export const register = async (body: IAdminRegister) => {
  const admin = await prisma.admin.findUnique({
    where: {
      email: body.email,
    },
  });
  if (admin !== null) {
    throw new HTTPException(404, {
      message: "Admin with this account already registered",
    });
  }
  const data = await prisma.admin.create({
    data: {
      ...body,
      password: await hashedPassword(body.password),
    },
    select: {
      id: true,
      name: true,
      email: true,
      emailVerified: true,
      createdAt: true,
    },
  });
  return data;
};
