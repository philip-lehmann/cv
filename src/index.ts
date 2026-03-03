import { opentelemetry } from '@elysiajs/opentelemetry';

import { DiagConsoleLogger, DiagLogLevel, diag } from '@opentelemetry/api';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-node';
import { Elysia } from 'elysia';
import { env } from './helpers/env';
import { logError, logInfo } from './helpers/log';
import { apiRoute } from './server/routes/api';
import { pageRoute } from './server/routes/page';
import { staticRoute } from './server/routes/static';

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

const openTelemetry = env.OPEN_TELEMETRY_URL && env.OPEN_TELEMETRY_USERNAME && env.OPEN_TELEMETRY_PASSWORD;
const requestTimings = new WeakMap<Request, number>();

new Elysia()
  .use(
    openTelemetry
      ? opentelemetry({
          spanProcessors: [
            // new BatchSpanProcessor(new ConsoleSpanExporter()),
            new BatchSpanProcessor(
              new OTLPTraceExporter({
                url: env.OPEN_TELEMETRY_URL,
                headers: {
                  Authorization: `Basic ${Buffer.from(`${env.OPEN_TELEMETRY_USERNAME}:${env.OPEN_TELEMETRY_PASSWORD}`).toString('base64')}`,
                },
              }),
            ),
          ],
        })
      : undefined,
  )
  .onRequest(({ request }) => {
    requestTimings.set(request, Date.now());
  })
  .onError(({ error, request, set }) => {
    const url = new URL(request.url);
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
