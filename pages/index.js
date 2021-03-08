/* eslint no-console:off, no-useless-escape:off */

import React, { useEffect } from 'react'

import {
  Container,
  Row,
  Col,
  Header,
  H1,
  H3,
  Card,
  CardBlock
} from '@bootstrap-styled/v4'
import styled from 'styled-components'
import { Reset } from 'styled-reset'

import Layout from 'components/layout'
import Experience from 'components/experience'
import SidebarContent from 'components/sidebar'

const HomeH1 = styled(H1)`
  margin-top: 100px;
`

const PrintContainer = styled(Container)`
  @media print {
    max-width: calc(100vw - 30px);
  }
`

const SidebarCol = styled(Col)`
  background: linear-gradient(
    90deg,
    rgba(222, 222, 224, 1) 0%,
    rgba(233, 233, 235, 1) 100%
  );
  min-height: 100vh;
`

const IndexPage = () => {
  useEffect(() => {
    console.log('_    _ _____ _____  ______   __  __ ______   ')
    console.log('| |  | |_   _|  __ \\|  ____| |  \\/  |  ____|  ')
    console.log('| |__| | | | | |__) | |__    | \\  / | |__     ')
    console.log('|  __  | | | |  _  /|  __|   | |\\/| |  __|    ')
    console.log('| |  | |_| |_| | \\ \\| |____  | |  | | |____ _ ')
    console.log('|_|  |_|_____|_|  \\_\\______| |_|  |_|______(_)')
  })
  return (
    <>
      <Reset />
      <Layout>
        <PrintContainer>
          <Row>
            <SidebarCol sm={4}>
              <SidebarContent />
            </SidebarCol>
            <Col sm={8}>
              <Card>
                <CardBlock>
                  <Header>
                    <HomeH1>Philip Lehmann</HomeH1>
                    <H3>Software Engineer</H3>
                  </Header>
                </CardBlock>
              </Card>
              <Experience />
            </Col>
          </Row>
        </PrintContainer>
      </Layout>
    </>
  )
}

export default IndexPage
