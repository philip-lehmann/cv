'use server';

import { LanguageSwitch } from '@cv/components/language_switch';
import { routing } from '@cv/i18n/routing';
import { ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { FC, PropsWithChildren } from 'react';
import { Canonical, Connect, Font, Icons, Meta, OpenGraph, Rollbar, Twitter } from '../../components/head';
import { GoogleAnalytics } from '../../components/head/google_analytics';
import { HireMe } from '../../components/hire_me';
import type { LangType } from '../../helpers/date';
import { theme } from '../../theme';

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
    <>
      <CssBaseline />
      <html lang={locale}>
        <NextIntlClientProvider messages={messages}>
          <head>
            <title>{title}</title>
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
          </head>

          <body className={roboto.variable}>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
              <ThemeProvider theme={theme}>
                <Container
                  sx={{
                    position: 'relative',
                    '@media print': {
                      maxWidth: '100vw',
                    },
                    padding: 0,
                  }}
                >
                  <LanguageSwitch />
                  {children}
                </Container>
              </ThemeProvider>
            </AppRouterCacheProvider>
          </body>
        </NextIntlClientProvider>
      </html>
    </>
  );
};

export default RootLayout;
