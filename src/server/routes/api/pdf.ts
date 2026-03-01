import { createReadStream, createWriteStream, existsSync, mkdirSync, type ReadStream } from 'node:fs';
import { request as httpRequest } from 'node:http';
import { request as httpsRequest } from 'node:https';
import { dirname, resolve as pathResolve } from 'node:path';
import { finished } from 'node:stream/promises';
import { LangEnum, type LangType } from '@cv/helpers/date';
import { env } from '@cv/helpers/env';
import { recordSpan } from '@cv/helpers/telemetry';
import { Elysia, t } from 'elysia';

const outputPathByLang = Object.freeze({
  de: 'pdf/cv_pdf_de.pdf',
  en: 'pdf/cv_pdf_en.pdf',
});

const getFile = async (locale: LangType, isProduction = env.NODE_ENV === 'production'): Promise<ReadStream> => {
  const outputPath = pathResolve(process.cwd(), outputPathByLang[locale]);
  if (!existsSync(dirname(outputPath))) {
    mkdirSync(dirname(outputPath), { recursive: true });
  }

  if (isProduction && existsSync(outputPath)) {
    return createReadStream(outputPath);
  }

  const request = new URL(env.PUPPETEER_API_URL).protocol === 'https:' ? httpsRequest : httpRequest;

  return recordSpan(
    'Pdf.puppeteer',
    () =>
      new Promise<ReadStream>((resolve, reject) => {
        try {
          const req = request(
            env.PUPPETEER_API_URL,
            { method: 'POST', path: '/', headers: { 'Content-Type': 'application/json' } },
            async (res) => {
              try {
                if (res.statusCode !== 200) {
                  // Drain the response to prevent socket leaks
                  res.resume();
                  reject(new Error(`Failed to generate PDF: ${res.statusCode} ${res.statusMessage}`));
                  return;
                }
                const file = createWriteStream(outputPath);
                await finished(res.pipe(file, { end: true }));

                resolve(getFile(locale, true));
              } catch (error) {
                // Drain the response in case of error
                res.resume();
                reject(error);
              }
            },
          );

          // Set timeout to prevent hung promises (60 seconds)
          req.setTimeout(60_000, () => {
            req.destroy();
            reject(new Error('Request timeout: PDF generation took too long'));
          });

          // Handle request errors
          req.on('error', (error) => {
            reject(new Error(`Request error: ${error.message}`));
          });

          const siteUrl = env.SITE_URL;
          const body = JSON.stringify({
            url: `${siteUrl}/${locale}`,
            format: 'a4',
            landscape: false,
            scale: 0.8,
            printBackground: true,
            omitBackground: true,
            // pageRanges: '1-3',
            margin: { top: 0, right: 0, bottom: 0, left: 0 },
          });

          req.end(body);
        } catch (error) {
          reject(error);
        }
      }),
  );
};

export const pdfRoute = new Elysia().get(
  '/pdf',
  async ({ query }) => {
    const { locale } = query;
    try {
      const response = await getFile(locale);
      const stream = new ReadableStream({
        start(controller) {
          response.on('data', (chunk) => controller.enqueue(chunk));
          response.on('end', () => controller.close());
          response.on('error', (err) => controller.error(err));
        },
      });
      return new Response(stream, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition':
            env.NODE_ENV === 'production' ? `attachment; filename="philip_lehmann_cv_${locale}.pdf"` : '',
        },
      });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  },
  {
    query: t.Object({
      locale: t.Enum(LangEnum),
    }),
  },
);
