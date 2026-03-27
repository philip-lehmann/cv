import { env } from '@cv/helpers/env';
import { context, trace } from '@opentelemetry/api';
import pino from 'pino';

type LogLevel = 'debug' | 'info' | 'warn' | 'error';
type LogPayload = Record<string, unknown>;

const isDev = env.NODE_ENV !== 'production';

const logger = pino({
  level: env.LOG_LEVEL,
  base: null,
  timestamp: () => `,"ts":"${new Date().toISOString()}"`,
  formatters: {
    level: (label: string) => ({ level: label }),
  },
  mixin: () => ({
    service: env.OTEL_SERVICE_NAME,
    env: env.NODE_ENV,
  }),
  transport: isDev
    ? {
        target: 'pino-pretty',
        options: {
          colorize: true,
          singleLine: true,
        },
      }
    : undefined,
});

const serializeError = (error: unknown) => {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }
  if (typeof error === 'object' && error !== null) {
    return error as Record<string, unknown>;
  }
  return { message: String(error) };
};

const normalizePayload = (payload: LogPayload = {}) => {
  if ('error' in payload) {
    return {
      ...payload,
      error: serializeError((payload as { error?: unknown }).error),
    };
  }
  return payload;
};

const loggers: Record<LogLevel, (record: Record<string, unknown>, msg: string) => void> = {
  debug: (record, msg) => logger.debug(record, msg),
  info: (record, msg) => logger.info(record, msg),
  warn: (record, msg) => logger.warn(record, msg),
  error: (record, msg) => logger.error(record, msg),
};

const log = (level: LogLevel, msg: string, payload: LogPayload = {}) => {
  const span = trace.getSpan(context.active());
  const spanContext = span?.spanContext();

  const record = {
    trace_id: spanContext?.traceId ?? null,
    span_id: spanContext?.spanId ?? null,
    ...normalizePayload(payload),
  };

  loggers[level](record, msg);
};

export const logDebug = (msg: string, payload?: LogPayload) => log('debug', msg, payload);
export const logInfo = (msg: string, payload?: LogPayload) => log('info', msg, payload);
export const logWarn = (msg: string, payload?: LogPayload) => log('warn', msg, payload);
export const logError = (msg: string, payload?: LogPayload) => log('error', msg, payload);
