import React, { memo } from 'react'

import { CardText, Img } from '@bootstrap-styled/v4'
import styled from 'styled-components'
import { MyCard, MyCardBlock, MyCardTitle } from 'components/sidebar/card'
import T from 'components/trans'

const MyImage = styled(Img)`
  width: 250px;
  border-radius: 125px;
  max-width: 100%;
  height: auto;
`
const MyCardText = styled(CardText)`
  text-align: justify;
`

const Contact = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyImage
          src="/images/me@1x.jpg"
          srcSet="/images/me@1x.jpg, /images/me@2x.jpg 2x"
          alt="Philip Lehmann"
          figure={true}
          width={250}
          height={250}
        />
        <br />
        <br />
        <MyCardTitle>
          <T lang="en">About Me</T>
          <T lang="de">Über mich</T>
        </MyCardTitle>
        <MyCardText>
          <T lang="en">
            Computers have always fascinated me. I began my career with an
            apprenticeship as System Engineer but once I started my first course
            with C, I quickly discovered my passion for programming. In my free
            time I continued to study and discover PHP and Java and developing
            several private projects. After my apprenticeship it was clear to me
            that I had found my professional calling and pursued my career in
            programming, for 14 years.
          </T>
          <T lang="de">
            Computer haben mich schon immer fasziniert. Ich habe meine Karriere
            mit einer Lehre als System Informatiker gestartet, aber als wir den
            ersten Programmierkurs in C hatten, habe ich meine Leidenschaft
            gefunden für das Programmieren. In meiner Freizeit habe ich
            angefangen PHP und Java zu lernen. Nach meiner Lehre war für mich
            klar, dass ich meine Berufung gefunden habe als Entwickler und habe
            nun seit 14 Jahren Erfahrungen gesammelt.
          </T>
        </MyCardText>
      </MyCardBlock>
    </MyCard>
  )
})
Contact.displayName = 'Contact'

export default Contact
