import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Container } from '@bootstrap-styled/v4'
import styled from 'styled-components'
import { Reset } from 'styled-reset'

import CV from 'components/cv'
import Layout from 'components/layout'
import VideoModal, { VideoType } from 'components/video'
import hireMe from 'helpers/hire_me'

import Head from 'next/head'
import getConfig from 'next/config'
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

const {
  publicRuntimeConfig: { googleAnalyticsKey, rollbarClientToken, env, siteUrl }
} = getConfig()

const PrintContainer = styled(Container)`
  @media screen and (max-width: 1024px) {
    max-width: calc(100vw - 30px);
  }
  @media print {
    max-width: calc(100vw - 30px);
  }
`

const IndexPage: NextPage = () => {
  useEffect(hireMe, [])
  const { query, locale, pathname } = useRouter()
  const video = query.video as unknown as VideoType | ''

  let title = 'Philip Lehmann - Curriculum vitae'
  if (video) {
    title = `${title} - video ${video}`
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <Connect />
        <Meta title={title} />
        <Icons />
        <Twitter title={title} url={siteUrl} />
        <OpenGraph title={title} url={siteUrl} />
        <Canonical locale={locale as LangType} path={pathname} />

        {googleAnalyticsKey && <GoogleAnalytics googleAnalyticsKey={googleAnalyticsKey} />}
        {rollbarClientToken && <Rollbar rollbarClientToken={rollbarClientToken} env={env} />}
        <Font />
      </Head>
      <Reset />
      <Layout>
        {video && <VideoModal video={video as VideoType} />}
        <PrintContainer>
          <CV />
        </PrintContainer>
      </Layout>
    </>
  )
}
IndexPage.displayName = 'IndexPage'

export default IndexPage
