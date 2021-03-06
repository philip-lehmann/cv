import React, { memo } from 'react'

import { MyCard, MyCardBlock, MyCardTitle } from 'components/my_card'

const Languages = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>Human Languages</MyCardTitle>
        Swiss German: Native <br />
        German: Business fluent <br />
        English: Business fluent
      </MyCardBlock>
    </MyCard>
  )
})
Languages.displayName = 'Languages'

export default Languages
