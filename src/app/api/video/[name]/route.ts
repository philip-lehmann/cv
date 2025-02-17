import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'minio';
import { env } from '@cv/helpers/env';

export const GET = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { name } = req.query;

  const client = new Client({
    endPoint: env.MINIO_ENDPOINT,
    port: 443,
    useSSL: true,
    accessKey: env.MINIO_ACCESS_KEY,
    secretKey: env.MINIO_SECRET_KEY,
  });

  const url = await client.presignedGetObject(env.MINIO_BUCKET_NAME, `videos/${name}`, 3600);
  res.redirect(url);
  res.end();
};
