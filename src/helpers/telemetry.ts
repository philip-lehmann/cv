import { type Exception, SpanStatusCode, type TimeInput, trace } from '@opentelemetry/api';

type MaybePromise<T> = T | Promise<T>;

const isPromise = <T>(value: MaybePromise<T>): value is Promise<T> => typeof (value as Promise<T>)?.then === 'function';

const safeEnd = (span: { end: () => void; ended?: boolean }) => {
  if (!span.ended) span.end();
};

const safeSetStatus = (
  span: { setStatus: (status: { code: SpanStatusCode; message?: string }) => void; ended?: boolean },
  status: { code: SpanStatusCode; message?: string },
) => {
  if (!span.ended) span.setStatus(status);
};

const safeRecordException = (
  span: { recordException: (error: Exception, time?: TimeInput) => void; ended?: boolean },
  error: Exception,
) => {
  if (!span.ended) span.recordException(error);
};

export function recordSpan<T>(name: string, fn: () => Promise<T>): Promise<T>;
export function recordSpan<T>(name: string, fn: () => T): T;
export function recordSpan<T>(name: string, fn: () => MaybePromise<T>): MaybePromise<T> {
  const tracer = trace.getTracer('cv');
  return tracer.startActiveSpan(name, (span) => {
    try {
      const result = fn();
      if (isPromise(result)) {
        return result
          .then((value) => {
            safeSetStatus(span, { code: SpanStatusCode.OK });
            safeEnd(span);
            return value;
          })
          .catch((error) => {
            safeSetStatus(span, {
              code: SpanStatusCode.ERROR,
              message: error instanceof Error ? error.message : String(error),
            });
            safeRecordException(span, error as Exception);
            safeEnd(span);
            throw error;
          });
      }

      safeSetStatus(span, { code: SpanStatusCode.OK });
      safeEnd(span);
      return result;
    } catch (error) {
      safeSetStatus(span, {
        code: SpanStatusCode.ERROR,
        message: error instanceof Error ? error.message : String(error),
      });
      safeRecordException(span, error as Exception);
      safeEnd(span);
      throw error;
    }
  });
}
