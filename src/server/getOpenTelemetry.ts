import { opentelemetry } from '@elysiajs/opentelemetry';
import { DiagConsoleLogger, DiagLogLevel, diag } from '@opentelemetry/api';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-node';

import { env } from '../helpers/env';

const openTelemetry = env.OPEN_TELEMETRY_URL && env.OPEN_TELEMETRY_USERNAME && env.OPEN_TELEMETRY_PASSWORD;

export const getOpenTelemetry = () => {
  if (!openTelemetry) {
    return undefined;
  }

  diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

  const basicAuth = Buffer.from(`${env.OPEN_TELEMETRY_USERNAME}:${env.OPEN_TELEMETRY_PASSWORD}`).toString('base64');
  return opentelemetry({
    spanProcessors: [
      // new BatchSpanProcessor(new ConsoleSpanExporter()),
      new BatchSpanProcessor(
        new OTLPTraceExporter({
          url: env.OPEN_TELEMETRY_URL,
          headers: {
            Authorization: `Basic ${basicAuth}`,
          },
        }),
      ),
    ],
  });
};
