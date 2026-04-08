import { Elysia } from 'elysia';

import { env } from './helpers/env';
import { logError, logInfo } from './helpers/log';
import { getOpenTelemetry } from './server/getOpenTelemetry';
import { apiRoute } from './server/routes/api';
import { pageRoute } from './server/routes/page';
import { staticRoute } from './server/routes/static';

const requestTimings = new WeakMap<Request, number>();

new Elysia()
  .use(getOpenTelemetry())
  .onRequest(({ request }) => {
    requestTimings.set(request, Date.now());
  })
  .onError(({ error, request, set }) => {
    const url = new URL(request.url);

    if (typeof (error as { status?: unknown }).status === 'number') {
      set.status = (error as { status: number }).status;
    } else {
      set.status = 500;
    }

    logError('http_error', {
      type: 'http',
      method: request.method,
      path: url.pathname,
      search: url.search,
      status: set.status,
      error,
    });
  })
  .onAfterHandle(({ set, request, status }) => {
    const start = requestTimings.get(request);
    const durationMs = start ? Date.now() - start : undefined;
    const url = new URL(request.url);
    logInfo('http_request', {
      type: 'http',
      method: request.method,
      path: url.pathname,
      search: url.search,
      status: set.status ?? status,
      duration_ms: durationMs,
    });
    requestTimings.delete(request);
  })
  .use(staticRoute)
  .use(apiRoute)
  .use(pageRoute)
  .listen({ port: env.PORT, hostname: '0.0.0.0' }, (server) => {
    logInfo('server_listen', { host: server.hostname, port: server.port });
  });
