import React, { useEffect } from 'react'

import { Container } from '@bootstrap-styled/v4'
import styled from 'styled-components'
import { Reset } from 'styled-reset'
import { useRouter } from 'next/router'

import CV from 'components/cv'
import Layout from 'components/layout'
import hireMe from 'helpers/hire_me'

const PrintContainer = styled(Container)`
  @media screen and (max-width: 1024px) {
    max-width: calc(100vw - 30px);
  }
  @media print {
    max-width: calc(100vw - 30px);
  }
`

const IndexPage = () => {
  const { locale } = useRouter()
  useEffect(hireMe)
  return (
    <>
      <Reset />
      <Layout>
        <PrintContainer>
          <CV />
        </PrintContainer>
      </Layout>
    </>
  )
}
IndexPage.displayName = 'IndexPage'

export default IndexPage
