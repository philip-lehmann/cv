'use server';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Container, ThemeProvider } from '@mui/material';
import { theme } from '../../theme';
import type { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import type { LangType } from '../../helpers/date';
import { GoogleAnalytics } from '../../components/head/google_analytics';
import { Rollbar, Canonical, OpenGraph, Twitter, Icons, Meta, Font, Connect } from '../../components/head';
import { HireMe } from '../../components/hire_me';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@cv/i18n/routing';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const RootLayout: FC<
  PropsWithChildren<{
    params: Promise<{ locale: LangType }>;
  }>
> = async ({ children, params }) => {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const response = await fetch('http://localhost:3000/api/config');
  const { googleAnalyticsKey, rollbarClientToken, env, siteUrl } = await response.json();

  const messages = await getMessages();
  const title = messages['Metadata.title'] as string;

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <Head>
          <HireMe />
          <Connect />
          <Font />
          <Meta title={title} />
          <Icons />
          <Twitter title={title} url={siteUrl} />
          <OpenGraph title={title} url={siteUrl} />
          <Canonical locale={locale} path={'/'} />

          {googleAnalyticsKey && <GoogleAnalytics googleAnalyticsKey={googleAnalyticsKey} />}
          {rollbarClientToken && <Rollbar rollbarClientToken={rollbarClientToken} env={env} />}
        </Head>

        <body className={roboto.variable}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <Container
                sx={{
                  '@media screen and (max-width: 1024px)': {
                    maxWidth: 'calc(100vw - 30px)',
                  },
                  '@media print': {
                    maxWidth: 'calc(100vw - 30px)',
                  },
                }}
              >
                {children}
              </Container>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
};

export default RootLayout;
