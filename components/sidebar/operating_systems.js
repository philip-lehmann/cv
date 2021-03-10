import React, { memo } from 'react'
import styled from 'styled-components'

import { MyCard, MyCardBlock, MyCardTitle } from 'components/sidebar/card'

const SpanNoBreak = styled('span')`
  white-space: nowrap;
`

const OperatingSystems = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>Operating Systems</MyCardTitle>
        MacOS: <SpanNoBreak>Development / Personal use</SpanNoBreak>
        <br />
        Linux: <SpanNoBreak>Production</SpanNoBreak>
        <br />
        Windows: <SpanNoBreak>Graphic intensive work / Games</SpanNoBreak>
      </MyCardBlock>
    </MyCard>
  )
})
OperatingSystems.displayName = 'OperatingSystems'

export default OperatingSystems
