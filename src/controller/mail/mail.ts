import { ISendMail } from "@schema/mail";
import { HTTPException } from "hono/http-exception";
import { Resend } from "resend";

export const sendMail = async (body: ISendMail) => {
  const { from, to, subject, html } = body;
  const resend = new Resend(process.env.EMAIL_API_KEY);
  const { data, error } = await resend.emails.send({
    from: from ? from : (process.env.EMAIL as string),
    to: [to],
    subject: subject,
    html: html,
  });
  if (error) {
    throw new HTTPException(404, {
      message: error.message || "An unknown error occurred",
    });
  }

  return {
    status: 201,
    message: "Mail send suscefully",
  };
};
