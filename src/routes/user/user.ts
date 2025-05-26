import { OpenAPIHono } from "@hono/zod-openapi";

import { HTTPException } from "hono/http-exception";
import { IResendOtp, IVerifyOtp } from "@schema/otp";
import prisma from "@config/prisma";
import {
  userLoginDoc,
  userRegisterDoc,
  userResendOtpDoc,
  userVerifyDoc,
} from "@swagger/user";
import { IUserLogin, IUserRegister } from "@schema/user";
import { register } from "@controller/user/register";
import { login } from "@controller/user/login";
import { resendOTPToken, verifyOTPToken } from "@controller/user/otp";
const user = new OpenAPIHono();

user.openapi(userRegisterDoc, async (c) => {
  const body: IUserRegister = await c.req.json();
  const data = await register(body);
  return c.json({
    status: 201,
    token: data.token,
  });
});
user.openapi(userLoginDoc, async (c) => {
  const body: IUserLogin = await c.req.json();
  const data = await login(body);

  return c.json({
    status: 201,
    message: "You are login successfully",
    ...data,
  });
});

user.openapi(userVerifyDoc, async (c) => {
  const body: IVerifyOtp = await c.req.json();
  const verify = await verifyOTPToken(body);
  const user = await prisma.user.update({
    where: {
      email: verify.email,
    },
    data: {
      emailVerified: true,
    },
  });
  if (!user) {
    throw new HTTPException(404, {
      message: "User with this email does not exist",
    });
  }
  return c.json({
    status: "OK",
    message: "Your account has been verified. You can log in now.",
  });
});
user.openapi(userResendOtpDoc, async (c) => {
  const body: IResendOtp = await c.req.json();
  const data = await resendOTPToken(body);

  return c.json(data);
});

export default user;
