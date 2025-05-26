import { SwaggerUI } from "@hono/swagger-ui";
import { Hono } from "hono";

const swagger = new Hono();

swagger.get("/docs", (c) => {
  return c.html(`
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Custom Swagger" />
        <title>Custom Swagger</title>
        <script>
          // custom script
        </script>
        <style>
          /* custom style */
        </style>
      </head>
      ${SwaggerUI({ url: "/docs" })}
    </html>
  `);
});

export default swagger;
