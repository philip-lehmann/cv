/* global process, __dirname */

// https://www.sejda.com/developers#html-pdf-api

import request from 'request'
import fs from 'fs'
import path from 'path'
import pdfcrowd from 'pdfcrowd'

const outputPath = path.resolve('cv_pdf.pdf')

const getFile = () => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(outputPath)) {
      resolve(fs.createReadStream(outputPath))
    } else {
      // create the API client instance
      const client = new pdfcrowd.HtmlToPdfClient(
        'nobody86',
        process.env.PDFCROWD_API_KEY
      )

      // configure the conversion
      try {
        client.setPageSize('A4')
        client.setOrientation('portrait')
        client.setNoMargins(true)
        client.setHeaderHeight('0')
        client.setFooterHeight('0')
        client.setNoHeaderFooterHorizontalMargins(true)
        client.setUsePrintMedia(true)
        client.setPageMode('full-screen')
        client.setInitialZoomType('fit-width')
      } catch (why) {
        // report the error
        console.error('Pdfcrowd Error: ' + why)
        process.exit(1)
      }

      // run the conversion and write the result to a file
      client.convertUrlToFile(
        'https://philiplehmann.ch/print',
        outputPath,
        (err, fileName) => {
          if (err) return reject(err)
          return resolve(getFile())
        }
      )
    }
  })
}

const opts = Object.freeze({
  uri: 'https://api.sejda.com/v2/html-pdf',
  headers: {
    Authorization: 'Token: ' + process.env.SEJDA_API_KEY
  },
  json: {
    url: 'https://philiplehmann.ch/print',
    viewportWidth: 3000,
    pageMarginUnits: 'px',
    pageMargin: 0,
    pageOrientation: 'portrait',
    pageSize: 'a4',
    scrollPage: true
  }
})

export default async (req, res) => {
  // res.status(200).json({ name: 'John Doe' })
  try {
    const response = await getFile()
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="cv.pdf'
    })
    response.pipe(res).on('finish', () => {
      res.end()
      console.log('PDF send')
    })
  } catch (e) {
    res.status(500).json(e)
  }
}
