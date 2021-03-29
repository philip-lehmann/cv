import React, { memo } from 'react'

import { MyCard, MyCardBlock, MyCardTitle } from 'components/sidebar/card'
import T from 'components/trans'

const HumanLanguages = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>
          <T lang="en">Human Languages</T>
          <T lang="de">Sprachen</T>
        </MyCardTitle>
        <T lang="en">Swiss German: Native</T>
        <T lang="de">Schweizerdeutsch: Muttersprache</T>
        <br />
        <T lang="en">German: Business fluent</T>
        <T lang="de">Deutsch: fliessend</T>
        <br />
        <T lang="en">English: Business fluent</T>
        <T lang="de">Englisch: fliessend</T>
      </MyCardBlock>
    </MyCard>
  )
})
HumanLanguages.displayName = 'HumanLanguages'

export default HumanLanguages
