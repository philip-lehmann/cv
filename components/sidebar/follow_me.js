import React, { memo } from 'react'

import { CardText, A } from '@bootstrap-styled/v4'
import { MyCard, MyCardBlock, MyCardTitle } from 'components/my_card'
import Image from 'next/image'

const FollowMe = memo(() => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>Follow Me</MyCardTitle>
        <CardText>
          <A
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
            Github
          </A>
          |
          <A
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
          </A>
          |
          <A
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
          </A>
        </CardText>
      </MyCardBlock>
    </MyCard>
  )
})
FollowMe.displayName = 'FollowMe'

export default FollowMe
