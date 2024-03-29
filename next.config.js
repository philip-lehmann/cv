require('dotenv').config();
const path = require('path');
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
});

const config = {
  serverRuntimeConfig: {
    rollbarServerToken: process.env.ROLLBAR_SERVER_TOKEN,
    minioBucketName: process.env.MINIO_BUCKET_NAME,
    minioAccessKey: process.env.MINIO_ACCESS_KEY,
    minioSecretKey: process.env.MINIO_SECRET_KEY,
    minioEndpoint: process.env.MINIO_ENDPOINT,
    env: process.env.NODE_ENV || 'development',
    siteUrl: process.env.SITE_URL || 'http://localhost:3000',
    defaultLocale: process.env.DEFAULT_LOCALE || 'en',
  },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: process.env.DEFAULT_LOCALE || 'en',
  },
  webpack: (config) => {
    config.resolve.alias['@cv/components'] = path.resolve(__dirname, 'components');
    config.resolve.alias['@cv/helpers'] = path.resolve(__dirname, 'helpers');

    // Important: return the modified config
    return config;
  },
  swcMinify: true,
};

module.exports = process.env.NODE_ENV === 'production' ? withPWA(config) : config;
