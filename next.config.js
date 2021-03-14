/* global require, module, __dirname, process */
require('dotenv').config()
const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const sharedConfig = {
  env: process.env.NODE_ENV || 'development',
  siteUrl: process.env.SITE_URL || 'http://localhost:3000'
}

module.exports = withPWA({
  serverRuntimeConfig: {
    // Will only be available on the server side
    ...sharedConfig,
    rollbarServerToken: process.env.ROLLBAR_SERVER_TOKEN
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    ...sharedConfig,
    rollbarClientToken: process.env.ROLLBAR_CLIENT_TOKEN,
    googleAnalyticsKey: process.env.GOOGLE_ANALYTICS_KEY
  },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    domains: [
      {
        domain: sharedConfig.siteUrl,
        defaultLocale: 'en'
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
  }
})
