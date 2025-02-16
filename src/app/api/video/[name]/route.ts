import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'minio';

const minioBucketName = process.env.MINIO_BUCKET_NAME;
const minioAccessKey = process.env.MINIO_ACCESS_KEY;
const minioSecretKey = process.env.MINIO_SECRET_KEY;
const minioEndpoint = process.env.MINIO_ENDPOINT;
if (!minioBucketName || !minioAccessKey || !minioSecretKey || !minioEndpoint) {
  throw new Error('Missing required MinIO configuration');
}

export const GET = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { name } = req.query;

  const client = new Client({
    endPoint: minioEndpoint,
    port: 443,
    useSSL: true,
    accessKey: minioAccessKey,
    secretKey: minioSecretKey,
  });

  const url = await client.presignedGetObject(minioBucketName, `videos/${name}`, 3600);
  res.redirect(url);
  res.end();
};
