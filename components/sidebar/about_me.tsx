import type { FC } from 'react';
import { differenceInYears, parseISO } from 'date-fns';
import { CardText, Img } from '@bootstrap-styled/v4';
import { styled } from 'styled-components';

import { MyCard, MyCardBlock, MyCardTitle } from '@cv/components/sidebar/card';
import { Trans as T } from '@cv/components/trans';

const ImgStyled = styled(Img)`
  width: 250px;
  border-radius: 125px;
  max-width: 100%;
`;
const CardTextStyled = styled(CardText)`
  text-align: justify;
`;

export const AboutMe: FC = () => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <picture>
          <source srcSet="/images/me/2@1x.avif, /images/me/2@2x.avif 2x" type="image/avif" />
          <source srcSet="/images/me/2@1x.webp, /images/me/2@2x.webp 2x" type="image/webp" />
          <source srcSet="/images/me/2@1x.jpg, /images/me/2@2x.jpg 2x" type="image/jpeg" />
          <ImgStyled src="/images/me/2@1x.jpg" alt="Philip Lehmann" figure={true} width="250" height="250" />
        </picture>
        <br />
        <br />
        <MyCardTitle>
          <T lang="en">About Me</T>
          <T lang="de">Über mich</T>
        </MyCardTitle>
        <CardTextStyled>
          <T lang="en">
            Computers have always fascinated me. I began my career with an apprenticeship as System Engineer but once I
            started my first course with C, I quickly discovered my passion for programming. In my free time I continued
            to study and discover PHP and Java and developing several private projects. After my apprenticeship it was
            clear to me that I had found my professional calling and pursued my career in programming, for{' '}
            {differenceInYears(new Date(), parseISO('2007-06-01'))} years.
          </T>
          <T lang="de">
            Computer haben mich schon immer fasziniert. Ich habe meine Karriere mit einer Lehre als System Informatiker
            gestartet, aber als wir den ersten Programmierkurs in C hatten, habe ich meine Leidenschaft gefunden für das
            Programmieren. In meiner Freizeit habe ich angefangen PHP und Java zu lernen. Nach meiner Lehre war für mich
            klar, dass ich meine Berufung gefunden habe als Entwickler und habe nun seit{' '}
            {differenceInYears(new Date(), parseISO('2007-06-01'))} Jahren Erfahrungen gesammelt.
          </T>
        </CardTextStyled>
      </MyCardBlock>
    </MyCard>
  );
};
