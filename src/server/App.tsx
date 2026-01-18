import { resolve } from 'node:path';
import { env } from '@cv/helpers/env';
import type { EmotionCache } from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import type { AppData, Messages } from 'global';
import type { ElementType } from 'react';
import { renderToString } from 'react-dom/server';
import { RouteProvider } from '../frontend/components/route';
import { getMessages } from '../messages';
import { createEmotionCache } from '../shared/createEmotionCache';
import { assetBuilds, assetPath } from './routes/static';

export const ServerLayout = (
  Component: ElementType,
  props: AppData,
  {
    cache,
    body,
    css,
    messages,
    pathname,
    search,
  }: { cache: EmotionCache; body: string; css: string; messages: Messages; pathname: string; search: string },
) => {
  return (
    <RouteProvider pathname={pathname} search={search}>
      <Component {...props} messages={messages} cache={cache} body={body} css={css} />
    </RouteProvider>
  );
};

export const ServerPage = (
  Component: ElementType,
  props: AppData,
  { cache, messages, pathname, search }: { cache: EmotionCache; messages: Messages; pathname: string; search: string },
) => {
  return (
    <RouteProvider pathname={pathname} search={search}>
      <Component {...props} messages={messages} cache={cache} />
    </RouteProvider>
  );
};

export const serveApp = async (
  page: string,
  appData: Pick<AppData, 'locale'>,
  location: { pathname: string; search: string },
) => {
  const pagePath = resolve(process.cwd(), 'src', 'frontend', 'pages', page);
  const googleAnalyticsKey = env.GOOGLE_ANALYTICS_KEY;
  const rollbarClientToken = env.ROLLBAR_CLIENT_TOKEN;
  const nodeEnv = env.NODE_ENV;
  const siteUrl = env.SITE_URL;
  const cache = createEmotionCache();
  const messages = await getMessages(appData.locale);

  const { default: Page } = await import(`${pagePath}/page.tsx`);
  const PageComponent = ServerPage(
    Page,
    { ...appData, googleAnalyticsKey, rollbarClientToken, env: nodeEnv, siteUrl },
    { cache, messages, ...location },
  );
  const bodyHtml = renderToString(PageComponent);

  const { default: Layout } = await import(`${pagePath}/layout.tsx`);
  const LayoutComponent = ServerLayout(
    Layout,
    { ...appData, googleAnalyticsKey, rollbarClientToken, env: nodeEnv, siteUrl },
    { cache, messages, body: bodyHtml, css: '', ...location },
  );
  const layoutHtml = renderToString(LayoutComponent);
  const fullHtml = layoutHtml.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
  const emotionChunks = extractCriticalToChunks(fullHtml);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  const entryPoint = assetBuilds.filter((build) => build.kind === 'entry-point');
  const entryPointHtml = entryPoint
    .map((build) => `<script src="/static${assetPath(build)}" type="module" defer></script>`)
    .join('');

  return new Response(fullHtml.replace('</head>', `${emotionCss}${entryPointHtml}</head>`), {
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
  });
};
