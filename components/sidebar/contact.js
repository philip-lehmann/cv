import React, { memo } from 'react'

import { CardText, A, Strong } from '@bootstrap-styled/v4'
import { MyCard, MyCardBlock, MyCardTitle } from 'components/my_card'

const Contact = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>Contact</MyCardTitle>
        <CardText>
          <Strong>Phone:</Strong>
          <br />
          <A href="tel:0041797562627">+41 79 756 26 27</A>
          <br />
          <br />
          <Strong>Web:</Strong>
          <br />
          <A href="mailto:philiplehmann@gmail.com">philiplehmann@gmail.com</A>
          <br />
          <A
            href="https://lehme86.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            lehme86.ch
          </A>
          <br />
          <br />
          <Strong>Address:</Strong>
          <br />
          Richterwis 12
          <br />
          8303 Bassersdorf
        </CardText>
      </MyCardBlock>
    </MyCard>
  )
})
Contact.displayName = 'Contact'

export default Contact
