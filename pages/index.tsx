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
  const {
    query: { video }
  } = useRouter()
  return (
    <>
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
