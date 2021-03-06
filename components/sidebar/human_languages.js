import React, { memo } from 'react'

import { MyCard, MyCardBlock, MyCardTitle } from 'components/sidebar/card'

const HumanLanguages = memo(() => {
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
HumanLanguages.displayName = 'HumanLanguages'

export default HumanLanguages
