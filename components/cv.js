import React from 'react'

import { Row, Col, Header, H1, H3, Card, CardBlock } from '@bootstrap-styled/v4'
import styled from 'styled-components'

import Experience from 'components/experience'
import SidebarContent from 'components/sidebar'

const HomeH1 = styled(H1)`
  margin-top: 100px;
`

const SidebarCol = styled(Col)`
  background: linear-gradient(
    90deg,
    rgba(222, 222, 224, 1) 0%,
    rgba(233, 233, 235, 1) 100%
  );
  min-height: 100vh;
`

const CV = () => {
  return (
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
  )
}
CV.displayName = 'CV'

export default CV
