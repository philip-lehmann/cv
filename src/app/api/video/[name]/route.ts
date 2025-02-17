import { Client } from 'minio';
import { env } from '@cv/helpers/env';
import { redirect } from 'next/navigation';

export const GET = async (req: Request, { params }: { params: Promise<{ name: string }> }): Promise<Response> => {
  const { name } = await params;

  const client = new Client({
    endPoint: env.MINIO_ENDPOINT,
    port: 443,
    useSSL: true,
    accessKey: env.MINIO_ACCESS_KEY,
    secretKey: env.MINIO_SECRET_KEY,
  });

  const url = await client.presignedGetObject(env.MINIO_BUCKET_NAME, `videos/${name}`, 3600);
  redirect(url);
};
