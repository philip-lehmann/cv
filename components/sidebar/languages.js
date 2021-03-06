import React, { memo } from 'react'

import { Row, Col } from '@bootstrap-styled/v4'
import styled from 'styled-components'
import { MyCard, MyCardBlock, MyCardTitle } from 'components/my_card'

const ColLeft = styled(Col)`
  text-align: left;
  padding-left: 5px !important;
`

const ColRight = styled(Col)`
  text-align: right;
  padding-right: 0px !important;
`

const Languages = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>Human Languages</MyCardTitle>
        <Row>
          <ColRight>Swiss German:</ColRight>
          <ColLeft>Native</ColLeft>
        </Row>
        <Row>
          <ColRight>German:</ColRight>
          <ColLeft>Business fluent</ColLeft>
        </Row>
        <Row>
          <ColRight>English:</ColRight>
          <ColLeft>Business fluent</ColLeft>
        </Row>
      </MyCardBlock>
    </MyCard>
  )
})
Languages.displayName = 'Languages'

export default Languages
