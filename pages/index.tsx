import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { Container } from '@bootstrap-styled/v4'
import styled from 'styled-components'
import { Reset } from 'styled-reset'

import { CV } from 'components/cv'
import Layout from 'components/layout'
import { isVideoKey } from 'components/video'
import hireMe from 'helpers/hire_me'

import Twitter from 'components/head/twitter'
import OpenGraph from 'components/head/open_graph'
import Icons from 'components/head/icons'
import Meta from 'components/head/meta'
import GoogleAnalytics from 'components/head/google_analytics'
import Rollbar from 'components/head/rollbar'
import Connect from 'components/head/connect'
import Font from 'components/head/font'
import Canonical from 'components/head/canonical'
import { LangType } from 'helpers/date'
import { ConfigProps, ConfigProvider } from 'helpers/config_context'

import dynamic from 'next/dynamic'

const VideoModal = dynamic(() => import('components/video'), { ssr: false })

const PrintContainer = styled(Container)`
  @media screen and (max-width: 1024px) {
    max-width: calc(100vw - 30px);
  }
  @media print {
    max-width: calc(100vw - 30px);
  }
`

const IndexPage: NextPage<{
  config: ConfigProps
}> = ({ config }) => {
  useEffect(hireMe, [])
  const { query, locale, defaultLocale, pathname } = useRouter()
  const video = isVideoKey(query.video) ? query.video : null
  const { googleAnalyticsKey, rollbarClientToken, env, siteUrl } = config

  let title = 'Philip Lehmann - Curriculum vitae'
  if (video) {
    title = `${title} - video ${video}`
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
        <Canonical locale={locale as LangType} defaultLocale={defaultLocale as LangType} path={pathname} />

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
  )
}

export const getServerSideProps = () => {
  // eslint-disable-next-line no-console
  return {
    props: {
      config: {
        googleAnalyticsKey: process.env.GOOGLE_ANALYTICS_KEY,
        rollbarClientToken: process.env.ROLLBAR_CLIENT_TOKEN,
        env: process.env.NODE_ENV || 'development',
        siteUrl: process.env.SITE_URL || 'http://localhost:3000'
      }
    }
  }
}

export default IndexPage
