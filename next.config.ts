import { resolve } from 'node:path';
import runtimeCaching from 'next-pwa/cache.js';
import nextPWA from 'next-pwa';
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
  webpack: (config) => {
    config.resolve.alias['@cv/components'] = resolve('src/components');
    config.resolve.alias['@cv/helpers'] = resolve('src/helpers');
    config.resolve.alias['@cv/i18n'] = resolve('src/i18n');

    // Important: return the modified config
    return config;
  },
};

const config = withNextIntl(nextConfig);

export default process.env.NODE_ENV === 'production' ? withPWA(config as any) : config;
