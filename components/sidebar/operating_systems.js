import React, { memo } from 'react'

import { MyCard, MyCardBlock, MyCardTitle } from 'components/sidebar/card'

const OperatingSystems = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>Operating Systems</MyCardTitle>
        MacOS: Development / Personal use <br />
        Linux: Production <br />
        Windows: Graphic intensive work / Games
      </MyCardBlock>
    </MyCard>
  )
})
OperatingSystems.displayName = 'OperatingSystems'

export default OperatingSystems
