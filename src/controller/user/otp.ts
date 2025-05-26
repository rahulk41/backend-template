import { sendMail } from "@controller/mail/mail";
import { IGenerateOtp, IResendOtp, IVerifyOtp } from "@schema/otp";
import otpTemplate from "../../template/otp";
import { HTTPException } from "hono/http-exception";
import { decode, verify } from "hono/jwt";
import { generateOtp } from "@lib/tools";
import { generateOtpJwt } from "@jwt/otp";

export const generateOTPToken = async (body: IGenerateOtp) => {
  const otp = generateOtp();
  const payload = {
    email: body.email,
    otp,
  };
  const token = await generateOtpJwt(payload);

  await sendMail({
    subject: "Account verification",
    to: body.email,
    html: otpTemplate({
      otp,
      url: `${process.env.WEBSITE}/auth/verify?token=${token}`,
    }),
  });

  return {
    status: "OK",
    token,
  };
};

export const verifyOTPToken = async (body: IVerifyOtp) => {
  const payload = await verify(
    body.token,
    process.env.OTP_JWT_SECRET as string
  );

  if (body.otp !== payload.otp)
    throw new HTTPException(404, { message: "Invalid OTP" });
  if ((payload?.exp as number) < Math.floor(Date.now() / 1000)) {
    throw new HTTPException(404, {
      message: "OTP token expired. Please resend the OTP.",
    });
  }
  return {
    status: "Ok",
    message: "Email verified",
    email: payload.email as string,
  };
};

export const resendOTPToken = async (body: IResendOtp) => {
  const { payload } = decode(body.token);
  const otp = generateOtp();
  const token = await generateOtpJwt({
    email: payload.email as string,
    otp,
  });
  await sendMail({
    subject: "Account Verification - Resend OTP",
    to: payload.email as string,
    html: otpTemplate({
      otp,
      url: `${process.env.WEBSITE}/auth/verify?token=${token}`,
    }),
  });
  return {
    status: "OK",
    token,
  };
};