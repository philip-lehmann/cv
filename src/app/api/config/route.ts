export const GET = async (): Promise<Response> => {
  const googleAnalyticsKey = process.env.GOOGLE_ANALYTICS_KEY;
  const rollbarClientToken = process.env.ROLLBAR_CLIENT_TOKEN;
  const env = process.env.NODE_ENV || 'development';
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  try {
    return Response.json({ googleAnalyticsKey, rollbarClientToken, env, siteUrl });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
