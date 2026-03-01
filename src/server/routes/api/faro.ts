import { env } from '@cv/helpers/env';
import { Elysia } from 'elysia';
import { validateFaroTempKey } from '../../faro';

export const faroRoute = new Elysia({ prefix: '/faro' }).post('/collect', async ({ request, set }) => {
  const faroUrl = env.FARO_URL;

  if (!faroUrl) {
    set.status = 501;
    return { error: 'Faro collector is not configured.' };
  }

  const body = await request.text();
  const contentType = request.headers.get('content-type') ?? 'application/json';
  const sessionId = request.headers.get('x-faro-session-id');
  const tempApiKey = request.headers.get('x-api-key');
  const upstreamApiKey = env.FARO_API_KEY;

  if (!upstreamApiKey) {
    set.status = 501;
    return { error: 'Faro API key is not configured.' };
  }

  const isValid = await validateFaroTempKey(tempApiKey);
  if (!isValid) {
    set.status = 401;
    return { error: 'Invalid Faro API key.' };
  }

  const headers: Record<string, string> = {
    'content-type': contentType,
  };

  if (sessionId) {
    headers['x-faro-session-id'] = sessionId;
  }

  headers['x-api-key'] = upstreamApiKey;

  try {
    const upstream = await fetch(faroUrl, {
      method: 'POST',
      headers,
      body,
    });

    const responseHeaders = new Headers();
    const upstreamContentType = upstream.headers.get('content-type');
    const faroSessionStatus = upstream.headers.get('x-faro-session-status');
    const retryAfter = upstream.headers.get('retry-after');

    if (upstreamContentType) {
      responseHeaders.set('content-type', upstreamContentType);
    }

    if (faroSessionStatus) {
      responseHeaders.set('x-faro-session-status', faroSessionStatus);
    }

    if (retryAfter) {
      responseHeaders.set('retry-after', retryAfter);
    }

    const responseBody = await upstream.text();

    return new Response(responseBody, {
      status: upstream.status,
      headers: responseHeaders,
    });
  } catch (error: unknown) {
    console.error('Failed to reach Faro collector:', error);
    set.status = 502;
    return { error: 'Failed to reach Faro collector.' };
  }
});
