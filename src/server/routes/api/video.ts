import { env } from '@cv/helpers/env';
import { S3Client } from 'bun';
import { Elysia, t } from 'elysia';

export const videoRoute = new Elysia({ prefix: '/video' }).get(
  '/:name',
  async ({ params, redirect }) => {
    const { name } = params;

    const client = new S3Client({
      endpoint: `https://${env.MINIO_ENDPOINT}`,
      accessKeyId: env.MINIO_ACCESS_KEY,
      secretAccessKey: env.MINIO_SECRET_KEY,
      bucket: env.MINIO_BUCKET_NAME,
      region: env.MINIO_REGION,
    });

    const url = client.presign(`videos/${name}`, { expiresIn: 3600 });
    return redirect(url, 307);
  },
  { params: t.Object({ name: t.String() }) },
);
