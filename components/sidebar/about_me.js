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
        <MyImage
          src="/images/me.jpg"
          alt="Philip Lehmann"
          width={250}
          height={250}
        />
        <br />
        <br />
        <MyCardText>
          I have always been fascinated by computers. I began my working career
          with an apprenticeship as System Engineer, but I discovered quickly my
          passion for programming, once I started my first course with C. In my
          free time I continued to study and discover PHP and Java, to develop
          several private projects. After my apprenticeship it was clear to me
          that I had found my professional calling and pursued my career in
          programming, for now 14 years.
        </MyCardText>
      </MyCardBlock>
    </MyCard>
  )
})
Contact.displayName = 'Contact'

export default Contact
