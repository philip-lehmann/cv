import { existsSync, createReadStream, createWriteStream, type ReadStream } from 'node:fs';
import { finished } from 'node:stream/promises';
import path from 'node:path';
import { request as httpRequest } from 'node:http';
import { request as httpsRequest } from 'node:https';
import getConfig from 'next/config';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { LangType } from '@cv/helpers/date';

const {
  serverRuntimeConfig: { defaultLocale },
} = getConfig();

const outputPathByLang = Object.freeze({
  de: 'cv_pdf_de.pdf',
  en: 'cv_pdf_en.pdf',
});

const puppeteerURL = process.env.PUPPETEER_API_URL || 'http://localhost:3001';

const getFile = async (locale: LangType, isProduction = process.env.NODE_ENV === 'production'): Promise<ReadStream> => {
  console.log('getFile', locale, isProduction);
  const outputPath = path.resolve(outputPathByLang[locale]);
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
          console.log('PDF response', res.statusCode, res.statusMessage);
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
      console.log('body', body);

      req.write(body);
      req.end();
    } catch (error) {
      reject(error);
    }
  });
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { locale = defaultLocale } = req.query;
  const strLocale = (Array.isArray(locale) ? locale[0] : locale) as LangType;
  try {
    const response = await getFile(strLocale);
    res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Disposition':
        process.env.NODE_ENV === 'production' ? `attachment; filename="philip_lehmann_cv_${locale}.pdf"` : '',
    });
    response.pipe(res).on('finish', () => {
      res.end();
      console.log('PDF send');
    });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
