import prisma from "@config/prisma";
import { hashedPassword } from "@lib/tools";
import { HTTPException } from "hono/http-exception";
import { generateOTPToken } from "./otp";
import { IUserRegister } from "@schema/user";

export const register = async (body: IUserRegister) => {
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (user !== null) {
    throw new HTTPException(404, {
      message: "User with this account already registered",
    });
  }
  const data = await prisma.user.create({
    data: {
      ...body,
      password: await hashedPassword(body.password),
    },
  });
  const verify = await generateOTPToken({
    email: data.email,
  });
  return verify;
};
