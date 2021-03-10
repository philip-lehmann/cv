import React, { memo } from 'react'
import { A } from '@bootstrap-styled/v4'
import styled from 'styled-components'
import Image from 'next/image'
import { MyCard, MyCardBlock, MyCardTitle } from 'components/sidebar/card'

export const ImageSpan = styled('span')`
  line-height: 26px;
`

const ANoBreak = styled(A)`
  white-space: nowrap;
`

const PrintSpan = styled('span')`
  @media print {
    visibility: hidden;
  }
  @media screen and (max-width: 929px) {
    visibility: hidden;
  }
}
`

const FollowMe = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>Follow Me</MyCardTitle>
        <ANoBreak
          href="https://github.com/philiplehmann"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 5px' }}
        >
          <Image
            src="/images/github.png"
            alt="github"
            width={20}
            height={20}
            style={{
              width: '20px',
              height: '20px',
              marginRight: '2px'
            }}
          />
          <ImageSpan>Github</ImageSpan>
        </ANoBreak>
        <span>|</span>
        <ANoBreak
          href="https://www.linkedin.com/in/philip-lehmann-6362a256/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 5px' }}
        >
          <Image
            src="/images/linkedin.png"
            alt="linkedin"
            width={20}
            height={20}
            style={{
              width: '20px',
              height: '20px',
              marginRight: '2px'
            }}
          />
          LinkedIn
        </ANoBreak>
        <PrintSpan>|</PrintSpan>
        <ANoBreak
          href="https://www.xing.com/profile/Philip_Lehmann5/cv"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 5px' }}
        >
          <Image
            src="/images/xing.png"
            alt="xing"
            width={20}
            height={20}
            style={{
              width: '20px',
              height: '20px',
              marginRight: '2px'
            }}
          />
          Xing
        </ANoBreak>
      </MyCardBlock>
    </MyCard>
  )
})
FollowMe.displayName = 'FollowMe'

export default FollowMe
