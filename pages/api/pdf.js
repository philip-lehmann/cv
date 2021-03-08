/* global process, __dirname */

import request from 'request'
import fs from 'fs'
import path from 'path'

const outputPath = path.resolve('cv_pdf.pdf')
console.log(__dirname, outputPath)

const getFile = () => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(outputPath)) {
      resolve(fs.createReadStream(outputPath))
    } else {
      request
        .post(opts)
        .on('error', (err) => {
          reject(new Error(err))
        })
        .on('response', (response) => {
          if (response.statusCode === 200) {
            response.pipe(fs.createWriteStream(outputPath)).on('finish', () => {
              console.log('PDF saved to disk')
              resolve(getFile())
            })
          } else {
            reject(new Error(response))
          }
        })
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
    viewportWidth: 1200
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
