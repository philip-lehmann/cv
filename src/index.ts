import { opentelemetry } from '@elysiajs/opentelemetry';

import { DiagConsoleLogger, DiagLogLevel, diag } from '@opentelemetry/api';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-node';
import { Elysia } from 'elysia';
import { env } from './helpers/env';
import { apiRoute } from './server/routes/api';
import { pageRoute } from './server/routes/page';
import { staticRoute } from './server/routes/static';

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

process.env.OTEL_SERVICE_NAME ??= 'cv';

const openTelemetry = env.OPEN_TELEMETRY_URL && env.OPEN_TELEMETRY_USERNAME && env.OPEN_TELEMETRY_PASSWORD;

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
  .use(staticRoute)
  .use(apiRoute)
  .use(pageRoute)
  .listen({ port: env.PORT, hostname: '0.0.0.0' }, (server) => {
    console.log(`🚀 Server is running at ${server.hostname}:${server.port}`);
  });
