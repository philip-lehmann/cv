/* global process */

import request from 'request'

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

export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  request
    .post(opts)
    .on('error', function (err) {
      res.status(500).json(err)
      console.error(err)
    })
    .on('response', function (response) {
      if (response.statusCode === 200) {
        response.pipe(res).on('finish', () => {
          res.end()
          console.log('PDF send')
        })
      } else {
        console.error('Got code: ' + response.statusCode)
        res.status(500).json(response)
      }
    })
}
