import { resolve } from 'node:path';
/* @ts-ignore */
import runtimeCaching from 'next-pwa/cache.js';
import nextPWA, { PWAConfig } from 'next-pwa';
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withPWA = nextPWA({
  dest: 'public',
  runtimeCaching,
  buildExcludes: [/app-build-manifest\.json$/],
});

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: 'standalone',
  async headers() {
    return [
      {
        source: "/icons/:all*(png|jpg|jpeg|avif|svg|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, immutable", // 7 days
          },
        ],
      },
      {
        source: "/images/:all*(png|jpg|avif|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, immutable", // 7 days
          },
        ],
      },
      {
        source: "/fonts/:all*(woff|woff2|eot|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, immutable", // 7 days
          },
        ],
      },
    ]
  },
  webpack: (config) => {
    config.resolve.alias['@cv/components'] = resolve('src/components');
    config.resolve.alias['@cv/helpers'] = resolve('src/helpers');
    config.resolve.alias['@cv/i18n'] = resolve('src/i18n');

    // Important: return the modified config
    return config;
  },
};

const config = withNextIntl(nextConfig);

export default process.env.NODE_ENV === 'production' ? withPWA(config as PWAConfig) : config;
