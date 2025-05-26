import { logger } from "hono/logger";
import routes from "./routes/routes";
import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import { loadEnv } from "@lib/env";


const env = loadEnv();
const app = new OpenAPIHono();

app.use(logger());
app.get("/", (c) => {
  return c.text("Hello To Template API Documentation");
});

app.route("/api", routes);

app.onError((err, c) => {
  // Determine status code
  const statusCode = c.res?.status || 400;

  // Create error response object
  const errorResponse = {
    success: false,
    message: err.message || "An error occurred",
    ...(process.env.NODE_ENV === "development" && {
      stack: err.stack,
      details: err.cause,
    }),
  };

  return c.json(errorResponse, statusCode as 400);
});


app.doc("/doc", {
  info: {
    title: "Template API",
    version: "v1",
  },
  openapi: "3.1.0",
});
app.get('/docs', Scalar({ url: '/doc' }))

app.openAPIRegistry.registerComponent(
  "securitySchemes",
  "AuthorizationBearer", // <- Add security name
  {
    type: "http",
    scheme: "bearer",
    bearerFormat: "JWT",
  }
);

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
