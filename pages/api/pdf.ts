import fs, { type ReadStream } from 'node:fs';
import path from 'node:path';
import getConfig from 'next/config';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { LangType } from '@cv/helpers/date';
import puppeteer from 'puppeteer';

const {
  serverRuntimeConfig: { siteUrl, defaultLocale },
} = getConfig();

const outputPathByLang = Object.freeze({
  de: 'cv_pdf_de.pdf',
  en: 'cv_pdf_en.pdf',
});

const getFile = async (locale: LangType, isProduction = process.env.NODE_ENV === 'production'): Promise<ReadStream> => {
  const outputPath = path.resolve(outputPathByLang[locale]);
  if (isProduction && fs.existsSync(outputPath)) {
    return fs.createReadStream(outputPath);
  }
  const browser = await puppeteer.launch({
    headless: true,
    userDataDir: './chromium-data',
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  const url = `${siteUrl}/${locale}`;
  console.info(url);
  await page.goto(url);
  await page.pdf({
    path: outputPath,
    format: 'a4',
    landscape: false,
    scale: 0.8,
    printBackground: true,
    omitBackground: true,
    pageRanges: '1-3',
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  await browser.close();
  return getFile(locale, true);
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
