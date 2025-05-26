import { StorageClient } from "@supabase/storage-js";
import { S3Client } from "bun";

export const storageClient = new StorageClient(
  process.env.SUPABASE_STORAGE_URL as string,
  {
    apikey: process.env.SUPABASE_SERVICE_KEY as string,
    Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY as string}`,
  }
);

export const supabase = new S3Client({
  accessKeyId: process.env.SUPABASE_ACCESS_ID,
  secretAccessKey: process.env.SUPABASE_ACCESS_KEY,
  bucket: process.env.BUCKET_NAME,
  region: process.env.SUPABASE_REGION,
  endpoint: process.env.SUPABASE_STORAGE_URL,
});
