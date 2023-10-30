import React, { type FC } from 'react';
import { A, Img } from '@bootstrap-styled/v4';
import styled from 'styled-components';
import { MyCard, MyCardBlock, MyCardTitle } from '@cv/components/sidebar/card';
import { Trans as T } from '@cv/components/trans';

export const ImageSpan = styled('span')`
  line-height: 26px;
`;

const ANoBreak = styled(A)`
  white-space: nowrap;
  margin: '0 5px';
`;

const StyledImg = styled(Img)`
  width: '20px';
  height: '20px';
  margin-right: '2px';
`;

const Devider = styled('span')`
  padding: 0 5px;
  ::before {
    content: '|';
  }
`;

export const FollowMe: FC = () => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>
          <T lang="en">Follow Me</T>
          <T lang="de">Follow Me</T>
        </MyCardTitle>
        <ANoBreak href="https://github.com/philiplehmann" target="_blank" rel="noopener noreferrer">
          <picture>
            <source srcSet="/images/github@1x.avif, /images/github@1x.avif 2x" type="image/avif" />
            <source srcSet="/images/github@1x.webp, /images/github@1x.webp 2x" type="image/webp" />
            <source srcSet="/images/github@1x.png, /images/github@2x.png 2x" type="image/png" />
            <StyledImg src="/images/github@1x.png" alt="github" width={20} height={20} />
          </picture>
          <ImageSpan>Github</ImageSpan>
        </ANoBreak>
        <Devider />
        <ANoBreak href="https://www.linkedin.com/in/philip-lehmann-6362a256/" target="_blank" rel="noopener noreferrer">
          <picture>
            <source srcSet="/images/linkedin@1x.avif, /images/linkedin@1x.avif 2x" type="image/avif" />
            <source srcSet="/images/linkedin@1x.webp, /images/linkedin@1x.webp 2x" type="image/webp" />
            <source srcSet="/images/linkedin@1x.png, /images/linkedin@2x.png 2x" type="image/png" />
            <StyledImg src="/images/linkedin@1x.png" alt="linkedin" width={20} height={20} />
          </picture>
          LinkedIn
        </ANoBreak>
        <Devider />
        <ANoBreak href="https://www.xing.com/profile/Philip_Lehmann5/cv" target="_blank" rel="noopener noreferrer">
          <picture>
            <source srcSet="/images/xing@1x.avif, /images/xing@1x.avif 2x" type="image/avif" />
            <source srcSet="/images/xing@1x.webp, /images/xing@1x.webp 2x" type="image/webp" />
            <source srcSet="/images/xing@1x.png, /images/xing@2x.png 2x" type="image/png" />
            <StyledImg src="/images/xing@1x.png" alt="xing" width={20} height={20} />
          </picture>
          Xing
        </ANoBreak>
      </MyCardBlock>
    </MyCard>
  );
};
