/* eslint no-console:off */
import getConfig from 'next/config'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Storage } from '@google-cloud/storage'
import { addHours } from 'date-fns'

const {
  serverRuntimeConfig: { googleStorageToken, googleBucketName }
} = getConfig()

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { name } = req.query

  const storage = new Storage({ credentials: googleStorageToken })
  const bucket = storage.bucket(googleBucketName)
  const file = bucket.file(`videos/${name}`)
  const [url] = await file.getSignedUrl({ action: 'read', version: 'v4', expires: addHours(Date.now(), 6) })
  res.redirect(url)
}
