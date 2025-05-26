
import { supabase } from "@config/storage";
import { ISingleMedia } from "@schema/media";

export const singleMedia = async (body: ISingleMedia) => {
  const date = Date.now();
  const fileName = `/${body.folder}/${date}_${body.file.name}`;
  const file = await body.file.arrayBuffer();

  const upload = supabase.file(fileName);
  await upload.write(file);

  return {
    status: 201,
    path: `${process.env.BUCKET_NAME}${fileName}`,
  };
};
