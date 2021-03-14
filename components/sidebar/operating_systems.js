import React, { memo } from 'react'
import styled from 'styled-components'

import { MyCard, MyCardBlock, MyCardTitle } from 'components/sidebar/card'
import T from 'components/trans'

const SpanNoBreak = styled('span')`
  white-space: nowrap;
`

const OperatingSystems = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>
          <T lang="en">Operating Systems</T>
          <T lang="de">Betriebssysteme</T>
        </MyCardTitle>
        MacOS:{' '}
        <SpanNoBreak>
          <T lang="en">Development / Personal use</T>
          <T lang="de">Entwicklung / Privat</T>
        </SpanNoBreak>
        <br />
        Linux:{' '}
        <SpanNoBreak>
          <T lang="en">Production</T>
          <T lang="de">Produktiv</T>
        </SpanNoBreak>
        <br />
        Windows:{' '}
        <SpanNoBreak>
          <T lang="en">Graphic intensive work / Games</T>
          <T lang="de">Grafisch / Games</T>
        </SpanNoBreak>
      </MyCardBlock>
    </MyCard>
  )
})
OperatingSystems.displayName = 'OperatingSystems'

export default OperatingSystems
