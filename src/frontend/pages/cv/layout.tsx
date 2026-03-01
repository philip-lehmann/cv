import type { EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import type { AppData, Messages } from 'global';
import { type FC, StrictMode } from 'react';
import { Canonical, Connect, Font, GoogleAnalytics, Icons, Meta, OpenGraph, Twitter } from '../../components/head';
import { HireMe } from '../../components/hire_me';
import { getTranslation } from '../../components/intl';

const Layout: FC<AppData & { messages: Messages; cache: EmotionCache; body: string; css: string }> = ({
  cache,
  body,
  css,
  ...props
}) => {
  const { locale, googleAnalyticsKey, siteUrl, messages } = props;

  const title = getTranslation(messages, 'Metadata.title') || '';

  return (
    <StrictMode>
      <CssBaseline />
      <html lang={locale}>
        <head>
          <title>{title}</title>
          <HireMe />
          <Connect />
          <Font />
          <Meta title={title} />
          <Icons />
          <Twitter title={title} url={siteUrl} />
          <OpenGraph title={title} url={siteUrl} />
          <Canonical locale={locale} path={'/'} url={siteUrl} />

          {googleAnalyticsKey && <GoogleAnalytics googleAnalyticsKey={googleAnalyticsKey} />}
        </head>

        <body data-appdata={JSON.stringify(props)}>
          <div id="root" />
        </body>
      </html>
    </StrictMode>
  );
};

export default Layout;
