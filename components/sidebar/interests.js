import React, { memo } from 'react'

import { CardText } from '@bootstrap-styled/v4'
import { MyCard, MyCardBlock, MyCardTitle } from 'components/sidebar/card'

const Interests = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>Personal Interests</MyCardTitle>
        <CardText>
          Cook / Surf / Scuba Dive / Snowboard / Bike / E-Sports
        </CardText>
      </MyCardBlock>
    </MyCard>
  )
})
Interests.displayName = 'Interessts'

export default Interests
