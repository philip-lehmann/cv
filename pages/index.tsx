import React, { useEffect } from 'react'
import { NextPage } from 'next'

import { Container } from '@bootstrap-styled/v4'
import styled from 'styled-components'
import { Reset } from 'styled-reset'

import CV from 'components/cv'
import Layout from 'components/layout'
import hireMe from 'helpers/hire_me'
import { useRouter } from 'next/router'
import VideoModal from 'components/video'

import type { LangType } from 'helpers/date'

const PrintContainer = styled(Container)`
  @media screen and (max-width: 1024px) {
    max-width: calc(100vw - 30px);
  }
  @media print {
    max-width: calc(100vw - 30px);
  }
`

type VideoType = 'post' | 'avaloq' | 'trilux' | 'kinect' | 'local'

const videoTitle = Object.freeze({
  post: {
    de: 'Die Schweizerische Post: Multitouch Messelösung (HTML5)',
    en: 'Die Schweizerische Post: Multitouch Messelösung (HTML5)'
  },
  avaloq: {
    de: 'Avaloq Financial Planning Prototyp',
    en: 'Avaloq Financial Planning Prototyp'
  },
  trilux: {
    de: 'Trilux Verkausfsanwendung an der "Light+Building 2012"',
    en: 'Trilux Verkausfsanwendung an der "Light+Building 2012"'
  },
  kinect: {
    de: 'Kinect Demo HTML5 & Javascript',
    en: 'Kinect Demo HTML5 & Javascript'
  },
  local: {
    de: 'local.ch: Sales Butler',
    en: 'local.ch: Sales Butler'
  }
})

const IndexPage: NextPage = () => {
  useEffect(hireMe, [])
  const {
    query: { video },
    locale
  } = useRouter()
  return (
    <>
      <Reset />
      <Layout>
        {video && <VideoModal video={video as VideoType} title={videoTitle[video as VideoType][locale as LangType]} />}
        <PrintContainer>
          <CV />
        </PrintContainer>
      </Layout>
    </>
  )
}
IndexPage.displayName = 'IndexPage'

export default IndexPage
