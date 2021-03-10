import React, { memo } from 'react'

import { CardText } from '@bootstrap-styled/v4'
import styled from 'styled-components'
import { MyCard, MyCardBlock, MyCardTitle } from 'components/sidebar/card'
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
        <MyImage
          src="/images/me.jpg"
          alt="Philip Lehmann"
          width={250}
          height={250}
        />
        <br />
        <br />
        <MyCardTitle>About Me</MyCardTitle>
        <MyCardText>
          Computers have always fascinated me. I began my career with an
          apprenticeship as System Engineer but once I started my first course
          with C, I quickly discovered my passion for programming. In my free
          time I continued to study and discover PHP and Java and developing
          several private projects. After my apprenticeship it was clear to me
          that I had found my professional calling and pursued my career in
          programming, for 14 years.
        </MyCardText>
      </MyCardBlock>
    </MyCard>
  )
})
Contact.displayName = 'Contact'

export default Contact
