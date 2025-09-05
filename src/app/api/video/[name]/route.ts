import { env } from '@cv/helpers/env';
import { S3Client } from 'bun';
import { redirect } from 'next/navigation';

export const GET = async (_req: Request, { params }: { params: Promise<{ name: string }> }): Promise<Response> => {
  const { name } = await params;

  const client = new S3Client({
    endpoint: `https://${env.MINIO_ENDPOINT}`,
    accessKeyId: env.MINIO_ACCESS_KEY,
    secretAccessKey: env.MINIO_SECRET_KEY,
    bucket: env.MINIO_BUCKET_NAME,
  });

  const url = await client.presign(`videos/${name}`, { expiresIn: 3600 });
  redirect(url);
};
