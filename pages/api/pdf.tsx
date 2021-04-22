/* global process */
/* eslint no-console:off */

import fs, { ReadStream } from 'fs'
import path from 'path'
import pdfcrowd from 'pdfcrowd'
import getConfig from 'next/config'
import type { NextApiRequest, NextApiResponse } from 'next'
import { LangType } from 'helpers/date'

const {
  serverRuntimeConfig: { siteUrl, defaultLocale }
} = getConfig()

const outputPathByLang = Object.freeze({
  de: 'cv_pdf_de.pdf',
  en: 'cv_pdf_en.pdf'
})

const getFile = (locale: LangType): Promise<ReadStream> => {
  const outputPath = path.resolve(outputPathByLang[locale])
  return new Promise((resolve, reject) => {
    if (fs.existsSync(outputPath)) {
      resolve(fs.createReadStream(outputPath))
    } else {
      // create the API client instance
      const client = new pdfcrowd.HtmlToPdfClient(
        process.env.PDFCROWD_USER,
        process.env.PDFCROWD_API_KEY
      )

      // configure the conversion
      try {
        client.setPageSize('A4')
        client.setOrientation('portrait')
        client.setNoMargins(true)
        client.setHeaderHeight('0')
        client.setFooterHeight('0')
        client.setScaleFactor(80)
        client.setNoHeaderFooterHorizontalMargins(true)
        client.setUsePrintMedia(true)
        client.setPageMode('full-screen')
        client.setInitialZoomType('fit-width')
        client.setPrintPageRange('1-2')
      } catch (why) {
        // report the error
        console.error('Pdfcrowd Error: ' + why)
        reject(new Error(why))
      }

      // run the conversion and write the result to a file
      const url = `${siteUrl}/${locale}`
      console.log(`write ${url} to ${outputPath}`)
      client.convertUrlToFile(url, outputPath, (err) => {
        if (err) return reject(err)
        return resolve(getFile(locale))
      })
    }
  })
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { locale = defaultLocale } = req.query
  try {
    const response = await getFile(locale)
    res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="philip_lehmann_cv_${locale}.pdf"`
    })
    response.pipe(res).on('finish', () => {
      res.end()
      console.log('PDF send')
    })
  } catch (e) {
    res.status(500).json(e)
  }
}
