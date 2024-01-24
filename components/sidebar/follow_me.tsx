import type { FC, ComponentPropsWithRef } from 'react';
import { A } from '@bootstrap-styled/v4';
import { styled } from 'styled-components';
import { MyCard, MyCardBlock, MyCardTitle } from '@cv/components/sidebar/card';
import { Trans as T } from '@cv/components/trans';

const ANoBreak = styled(A)`
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 5px;
  picture {
    height: 20px;
    width: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Links = styled('div')`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export interface LinkProps extends Omit<ComponentPropsWithRef<'a'>, 'children' | 'target' | 'rel'> {
  image: string;
  name: string;
}

const Link: FC<LinkProps> = ({ image, name, ...anchorProps }) => {
  return (
    <ANoBreak target="_blank" rel="noopener noreferrer" {...anchorProps}>
      <picture>
        <source srcSet={`/images/${image}@1x.avif, /images/${image}@1x.avif 2x`} type="image/avif" />
        <source srcSet={`/images/${image}@1x.webp, /images/${image}@1x.webp 2x`} type="image/webp" />
        <source srcSet={`/images/${image}@1x.png, /images/${image}@2x.png 2x`} type="image/png" />
        <img src={`/images/${image}@1x.png`} alt={image} />
      </picture>
      {name}
    </ANoBreak>
  );
};

export const FollowMe: FC = () => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>
          <T lang="en">Follow Me</T>
          <T lang="de">Follow Me</T>
        </MyCardTitle>
        <Links>
          <Link image="github" name="Github" href="https://github.com/philiplehmann" />
          <Link image="linkedin" name="LinkedIn" href="https://www.linkedin.com/in/philip-lehmann-6362a256/" />
          <Link image="xing" name="Xing" href="https://www.xing.com/profile/Philip_Lehmann5/cv" />
        </Links>
      </MyCardBlock>
    </MyCard>
  );
};
