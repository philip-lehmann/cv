import React, { memo } from 'react'

import { CardText } from '@bootstrap-styled/v4'
import styled from 'styled-components'
import { MyCard, MyCardBlock, MyCardTitle } from 'components/my_card'
import Image from 'next/image'

const MyImage = styled(Image)`
  width: 250px;
  border-radius: 125px;
`
const MyCardText = styled(CardText)`
  text-align: justify;
`

const Contact = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>About Me</MyCardTitle>
        <MyImage src="/images/me.jpg" alt="Philip Lehmann" width={250} height={250} />
        <br />
        <br />
        <MyCardText>
          I have always been facinated by computers. Started an apprenticeship
          as System Engineer but my passion for programming did rise fast once
          we startet our first courses with C. In my free time I continued with
          PHP and Java to develop several private projects. After my
          apprenticeship I made my passion my job.
        </MyCardText>
      </MyCardBlock>
    </MyCard>
  )
})
Contact.displayName = 'Contact'

export default Contact
