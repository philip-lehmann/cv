/* global require, module, __dirname, process */
require('dotenv').config()
const path = require('path')
const withPWA = require('next-pwa')({
  dest: 'public'
})
const runtimeCaching = require('next-pwa/cache')

const sharedConfig = {
  env: process.env.NODE_ENV || 'development',
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  defaultLocale: process.env.DEFAULT_LOCALE || 'en'
}

const url = new URL(sharedConfig.siteUrl)

const config = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    ...sharedConfig,
    rollbarServerToken: process.env.ROLLBAR_SERVER_TOKEN,
    minioBucketName: process.env.MINIO_BUCKET_NAME,
    minioAccessKey: process.env.MINIO_ACCESS_KEY,
    minioSecretKey: process.env.MINIO_SECRET_KEY,
    minioEndpoint: process.env.MINIO_ENDPOINT
  },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: sharedConfig.defaultLocale,
    domains: [
      {
        domain: url.hostname,
        defaultLocale: sharedConfig.defaultLocale
      }
    ]
  },
  pwa: {
    dest: 'public',
    runtimeCaching
  },
  webpack: (config) => {
    config.resolve.alias.components = path.resolve(__dirname, 'components')
    config.resolve.alias.helpers = path.resolve(__dirname, 'helpers')

    // Important: return the modified config
    return config
  },
  swcMinify: true
}

module.exports = process.env.NODE_ENV === 'production' ? withPWA(config) : config
