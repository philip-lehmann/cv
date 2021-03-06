import React, { memo } from 'react'

import { CardText } from '@bootstrap-styled/v4'
import { MyCard, MyCardBlock, MyCardTitle } from 'components/my_card'

const Interests = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>Personal Interests</MyCardTitle>
        <CardText>Cook / Surf / Snowboard / Bike / E-Sports</CardText>
      </MyCardBlock>
    </MyCard>
  )
})
Interests.displayName = 'Interessts'

export default Interests
