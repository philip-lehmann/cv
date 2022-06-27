import React from 'react'
import PropTypes from 'prop-types'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import Head from 'next/head'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import Twitter from 'components/head/twitter'
import OpenGraph from 'components/head/open_graph'
import Icons from 'components/head/icons'
import Meta from 'components/head/meta'
import GoogleAnalytics from 'components/head/google_analytics'
import Rollbar from 'components/head/rollbar'
import Canonical from 'components/head/canonical'
import Connect from 'components/head/connect'
import Font from 'components/head/font'

import createEmotionCache from '../helpers/emotion_cache'
import lightTheme from '../helpers/theme/light'
import type { LangType } from 'helpers/date'

const {
  publicRuntimeConfig: { googleAnalyticsKey, rollbarClientToken, env, siteUrl }
} = getConfig()

const clientSideEmotionCache = createEmotionCache()

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const { locale, pathname } = useRouter()

  const title = 'Philip Lehmann - Curriculum vitae'

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Head>
          <title>{title}</title>
          <Connect />
          <Canonical locale={locale as LangType} path={pathname} />
          <Meta title={title} />
          <Icons />
          <Twitter title={title} url={siteUrl} />
          <OpenGraph title={title} url={siteUrl} />

          {googleAnalyticsKey && <GoogleAnalytics googleAnalyticsKey={googleAnalyticsKey} />}
          {rollbarClientToken && <Rollbar rollbarClientToken={rollbarClientToken} env={env} />}
          <Font />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired
}
