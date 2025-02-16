import { existsSync, createReadStream, createWriteStream, type ReadStream, mkdirSync } from 'node:fs';
import { finished } from 'node:stream/promises';
import { ReadableStream } from 'node:stream/web';
import { dirname, resolve as pathResolve } from 'node:path';
import { request as httpRequest } from 'node:http';
import { request as httpsRequest } from 'node:https';
import type { LangType } from '@cv/helpers/date';
import { type NextRequest, NextResponse } from 'next/server';

const outputPathByLang = Object.freeze({
  de: 'pdf/cv_pdf_de.pdf',
  en: 'pdf/cv_pdf_en.pdf',
});

const puppeteerURL = process.env.PUPPETEER_API_URL || 'http://localhost:3001';

const getFile = async (locale: LangType, isProduction = process.env.NODE_ENV === 'production'): Promise<ReadStream> => {
  const outputPath = pathResolve(process.cwd(), outputPathByLang[locale]);
  if (!existsSync(dirname(outputPath))) {
    mkdirSync(dirname(outputPath), { recursive: true });
  }

  if (isProduction && existsSync(outputPath)) {
    return createReadStream(outputPath);
  }

  const request = new URL(puppeteerURL).protocol === 'https:' ? httpsRequest : httpRequest;

  return new Promise<ReadStream>((resolve, reject) => {
    try {
      const req = request(
        puppeteerURL,
        { method: 'POST', path: '/', headers: { 'Content-Type': 'application/json' } },
        async (res) => {
          if (res.statusCode !== 200) {
            throw new Error(`Failed to generate PDF: ${res.statusMessage}`);
          }
          const file = createWriteStream(outputPath);
          await finished(res.pipe(file, { end: true }));

          resolve(getFile(locale, true));
        },
      );
      const siteUrl = process.env.NODE_ENV === 'production' ? process.env.SITE_URL : 'http://host.docker.internal:3000';
      const body = JSON.stringify({
        url: `${siteUrl}/${locale}`,
        format: 'a4',
        landscape: false,
        scale: 0.8,
        printBackground: true,
        omitBackground: true,
        pageRanges: '1-3',
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
      });

      req.end(body);
    } catch (error) {
      reject(error);
    }
  });
};

export const GET = async (req: NextRequest): Promise<Response> => {
  const locale = req.nextUrl.searchParams.get('locale') ?? process.env.DEFAULT_LOCALE ?? 'en';
  const strLocale = (Array.isArray(locale) ? locale[0] : locale) as LangType;
  try {
    const response = await getFile(strLocale);
    const stream = ReadableStream.from(response);
    return new NextResponse(stream, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition':
          process.env.NODE_ENV === 'production' ? `attachment; filename="philip_lehmann_cv_${strLocale}.pdf"` : '',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
