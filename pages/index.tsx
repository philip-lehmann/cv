import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { Container } from '@bootstrap-styled/v4';
import { styled } from 'styled-components';
import { Reset } from 'styled-reset';

import { CV } from '@cv/components/cv';
import Layout from '@cv/components/layout';
import { isVideoKey } from '@cv/components/video';
import hireMe from '@cv/helpers/hire_me';

import { Twitter } from '@cv/components/head/twitter';
import { OpenGraph } from '@cv/components/head/open_graph';
import { Icons } from '@cv/components/head/icons';
import { Meta } from '@cv/components/head/meta';
import { GoogleAnalytics } from '@cv/components/head/google_analytics';
import { Rollbar } from '@cv/components/head/rollbar';
import { Connect } from '@cv/components/head/connect';
import { Font } from '@cv/components/head/font';
import { Canonical } from '@cv/components/head/canonical';
import { type LangType } from '@cv/helpers/date';
import { type ConfigProps, ConfigProvider } from '@cv/helpers/config_context';

import dynamic from 'next/dynamic';

const VideoModal = dynamic(() => import('@cv/components/video'), { ssr: false });

const PrintContainer = styled(Container)`
  @media screen and (max-width: 1024px) {
    max-width: calc(100vw - 30px);
  }
  @media print {
    max-width: calc(100vw - 30px);
  }
`;

const IndexPage: NextPage<{
  config: ConfigProps;
}> = ({ config }) => {
  useEffect(hireMe, []);
  const { query, locale, pathname } = useRouter();
  const video = isVideoKey(query.video) ? query.video : null;
  const { googleAnalyticsKey, rollbarClientToken, env, siteUrl } = config;

  let title = 'Philip Lehmann - Curriculum vitae';
  if (video) {
    title = `${title} - video ${video}`;
  }
  return (
    <ConfigProvider value={config}>
      <Head>
        <title>{title}</title>
        <Connect />
        <Font />
        <Meta title={title} />
        <Icons />
        <Twitter title={title} url={siteUrl} />
        <OpenGraph title={title} url={siteUrl} />
        <Canonical locale={locale as LangType} path={pathname} />

        {googleAnalyticsKey && <GoogleAnalytics googleAnalyticsKey={googleAnalyticsKey} />}
        {rollbarClientToken && <Rollbar rollbarClientToken={rollbarClientToken} env={env} />}
      </Head>
      <Reset />
      <Layout>
        {video && <VideoModal video={video} />}
        <PrintContainer>
          <CV />
        </PrintContainer>
      </Layout>
    </ConfigProvider>
  );
};

export const getServerSideProps = () => {
  // eslint-disable-next-line no-console
  return {
    props: {
      config: {
        googleAnalyticsKey: process.env.GOOGLE_ANALYTICS_KEY,
        rollbarClientToken: process.env.ROLLBAR_CLIENT_TOKEN,
        env: process.env.NODE_ENV || 'development',
        siteUrl: process.env.SITE_URL || 'http://localhost:3000',
      },
    },
  };
};

export default IndexPage;
