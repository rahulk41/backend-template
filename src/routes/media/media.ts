import { singleMedia } from "@controller/media/media";
import { OpenAPIHono } from "@hono/zod-openapi";
import { ISingleMedia } from "@schema/media";
import { singleFileDoc } from "@swagger/media";

const media = new OpenAPIHono();

media.openapi(singleFileDoc, async (c) => {
  const body: ISingleMedia = c.req.valid("form");
  const data = await singleMedia(body);
  return c.json(data);
});

export default media;
