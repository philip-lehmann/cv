import getConfig from 'next/config';
import type { NextApiRequest, NextApiResponse } from 'next';

const {
  serverRuntimeConfig: { defaultLocale },
} = getConfig();
console.log('defaultLocale', defaultLocale);

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const googleAnalyticsKey = process.env.GOOGLE_ANALYTICS_KEY;
  const rollbarClientToken = process.env.ROLLBAR_CLIENT_TOKEN;
  const env = process.env.NODE_ENV || 'development';
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  try {
    res.json({ googleAnalyticsKey, rollbarClientToken, env, siteUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
