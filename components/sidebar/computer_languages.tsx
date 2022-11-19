import React, { memo } from 'react'

import { MyCard, MyCardBlock, MyCardTitle } from 'components/sidebar/card'
import T from 'components/trans'

const ComputerLanguages = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>
          <T lang="en">Computer Languages</T>
          <T lang="de">Programmiersprachen</T>
        </MyCardTitle>
        Typescript
        <br />
        Ruby on Rails
      </MyCardBlock>
    </MyCard>
  )
})
ComputerLanguages.displayName = 'Languages'

export default ComputerLanguages
