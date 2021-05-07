import React, { FC } from 'react'
import Head from 'next/head'
import getConfig from 'next/config'
import { AppProps } from 'next/app'
import Twitter from 'components/head/twitter'
import OpenGraph from 'components/head/open_graph'
import Icons from 'components/head/icons'
import Meta from 'components/head/meta'
import GoogleAnalytics from 'components/head/google_analytics'
import Rollbar from 'components/head/rollbar'
import Connect from 'components/head/connect'

const {
  publicRuntimeConfig: { googleAnalyticsKey, rollbarClientToken, env, siteUrl }
} = getConfig()

const MyCv: FC<AppProps> = ({ Component, pageProps }) => {
  const title = 'Philip Lehmann - Curriculum vitae'
  return (
    <>
      <Head>
        <title>{title}</title>
        <Connect />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <Meta title={title} />
        <Icons />
        <Twitter title={title} url={siteUrl} />
        <OpenGraph title={title} url={siteUrl} />

        {googleAnalyticsKey && (
          <GoogleAnalytics googleAnalyticsKey={googleAnalyticsKey} />
        )}
        {rollbarClientToken && (
          <Rollbar rollbarClientToken={rollbarClientToken} env={env} />
        )}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyCv
