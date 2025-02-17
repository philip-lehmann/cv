import { env } from '@cv/helpers/env';

export const GET = async (): Promise<Response> => {
  const googleAnalyticsKey = env.GOOGLE_ANALYTICS_KEY;
  const rollbarClientToken = env.ROLLBAR_CLIENT_TOKEN;
  const nodeEnv = env.NODE_ENV;
  const siteUrl = env.SITE_URL;
  try {
    return Response.json({ googleAnalyticsKey, rollbarClientToken, env: nodeEnv, siteUrl });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
