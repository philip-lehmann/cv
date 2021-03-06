import React, { memo } from 'react'

import { MyCard, MyCardBlock, MyCardTitle } from 'components/sidebar/card'

const ComputerLanguages = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>Computer Languages</MyCardTitle>
        Ruby & Rails <br />
        JavaScript
      </MyCardBlock>
    </MyCard>
  )
})
ComputerLanguages.displayName = 'Languages'

export default ComputerLanguages
