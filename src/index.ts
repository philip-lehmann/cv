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

const app = new Elysia()
  .use(
    opentelemetry({
      spanProcessors: [
        // new BatchSpanProcessor(new ConsoleSpanExporter()),
        new BatchSpanProcessor(
          new OTLPTraceExporter({
            url: 'https://http.tempo.riwi.dev/v1/traces',
            headers: {
              Authorization: `Basic ${Buffer.from(`${env.OPEN_TELEMETRY_USERNAME}:${env.OPEN_TELEMETRY_PASSWORD}`).toString('base64')}`,
            },
          }),
        ),
      ],
    }),
  )
  .use(staticRoute)
  .use(apiRoute)
  .use(pageRoute)
  .listen(env.PORT);

console.log(`🚀 Server is running at ${app.server?.hostname}:${app.server?.port}`);
