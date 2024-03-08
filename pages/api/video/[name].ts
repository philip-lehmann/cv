import getConfig from 'next/config';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'minio';

const {
  serverRuntimeConfig: { minioEndpoint, minioAccessKey, minioSecretKey, minioBucketName },
} = getConfig();

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
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
