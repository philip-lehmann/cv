import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Container, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import type { FC, PropsWithChildren } from 'react';
import VideoModal from '@cv/components/video';
import Layout from '@cv/components/layout';
import Head from 'next/head';
import type { LangType } from '@cv/helpers/date';
import { GoogleAnalytics } from '@cv/components/head/google_analytics';
import { Rollbar, Canonical, OpenGraph, Twitter, Icons, Meta, Font, Connect } from '@cv/components/head';
import { HireMe } from '@cv/components/hire_me';

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const locale = 'de';
  const response = await fetch('http://localhost:3000/api/config');
  const { googleAnalyticsKey, rollbarClientToken, env, siteUrl } = await response.json();

  const title = 'Philip Lehmann - Curriculum vitae';

  return (
    <html lang="en">
      <Head>
        <HireMe />
        <title>{title}</title>
        <Connect />
        <Font />
        <Meta title={title} />
        <Icons />
        <Twitter title={title} url={siteUrl} />
        <OpenGraph title={title} url={siteUrl} />
        <Canonical locale={locale as LangType} path={'/'} />

        {googleAnalyticsKey && <GoogleAnalytics googleAnalyticsKey={googleAnalyticsKey} />}
        {rollbarClientToken && <Rollbar rollbarClientToken={rollbarClientToken} env={env} />}
      </Head>

      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Layout>
              <VideoModal />
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
            </Layout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
