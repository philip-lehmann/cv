import React, { useEffect } from 'react'

import { Container } from '@bootstrap-styled/v4'
import { Reset } from 'styled-reset'

import CV from 'components/cv'
import Layout from 'components/layout'
import hireMe from 'helpers/hire_me'

const IndexPage = () => {
  useEffect(hireMe)
  return (
    <>
      <Reset />
      <Layout>
        <Container>
          <CV />
        </Container>
      </Layout>
    </>
  )
}
IndexPage.displayName = 'IndexPage'

export default IndexPage
