import React, { useEffect, memo } from 'react'

import { Container } from '@bootstrap-styled/v4'
import styled from 'styled-components'
import { Reset } from 'styled-reset'

import CV from 'components/cv'
import Layout from 'components/layout'
import hireMe from 'helpers/hire_me'

const PrintContainer = styled(Container)`
  max-width: calc(100vw - 30px);
`

const PrintPage = memo(() => {
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
})
PrintPage.displayName = 'PrintPage'

export default PrintPage
