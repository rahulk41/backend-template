import { sendMail } from "@controller/mail/mail";
import { OpenAPIHono } from "@hono/zod-openapi";
import { ISendMail } from "@schema/mail";
import { sendMailDoc } from "@swagger/mail";

const mail = new OpenAPIHono();

mail.openapi(sendMailDoc, async (c) => {
  const body: ISendMail = await c.req.json();
  const data = await sendMail(body);
  return c.json(data);
});

export default mail;
