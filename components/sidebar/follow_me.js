import React, { memo } from 'react'
import { A, Img } from '@bootstrap-styled/v4'
import styled from 'styled-components'
import { MyCard, MyCardBlock, MyCardTitle } from 'components/sidebar/card'
import T from 'components/trans'

export const ImageSpan = styled('span')`
  line-height: 26px;
`

const ANoBreak = styled(A)`
  white-space: nowrap;
`

const FollowMe = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>
          <T lang="en">Follow Me</T>
          <T lang="de">Follow Me</T>
        </MyCardTitle>
        <ANoBreak
          href="https://github.com/philiplehmann"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 5px' }}
        >
          <Img
            src="/images/github@1x.png"
            srcSet="/images/github@1x.png, /images/github@2x.png 2x"
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
          <Img
            src="/images/linkedin@1x.png"
            srcSet="/images/linkedin@1x.png, /images/linkedin@2x.png 2x"
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
        <span>|</span>
        <ANoBreak
          href="https://www.xing.com/profile/Philip_Lehmann5/cv"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 5px' }}
        >
          <Img
            src="/images/xing@1x.png"
            srcSet="/images/xing@1x.png, /images/xing@2x.png 2x"
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
