import { OpenAPIHono } from "@hono/zod-openapi";
import mail from "./mail/mail";
import media from "./media/media";
import user from "./user/user";
import admin from "./admin/admin";

const routes = new OpenAPIHono();

routes.route("/media", media);
routes.route("/user", user);
routes.route("/admin", admin);
routes.route("/mail", mail);

export default routes;
