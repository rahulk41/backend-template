import { login } from "@controller/admin/login";
import { register } from "@controller/admin/register";
import { OpenAPIHono } from "@hono/zod-openapi";
import { IAdminRegister } from "@schema/admin";
import { adminLoginDoc, adminRegisterDoc } from "@swagger/admin";


const admin = new OpenAPIHono();

admin.openapi(adminRegisterDoc, async (c) => {
  const body: IAdminRegister = await c.req.json();
  await register(body);
  return c.json({
    status: 201,
    message: "Admin registered successfully",
  });
});
admin.openapi(adminLoginDoc, async (c) => {
  const body: IAdminRegister = await c.req.json();
  const data = await login(body);

  return c.json({
    status: 201,
    message: "You are login successfully",
    ...data,
  });
});

export default admin;