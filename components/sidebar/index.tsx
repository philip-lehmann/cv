import React, { type FC } from 'react';
import styled from 'styled-components';
import { AboutMe } from '@cv/components/sidebar/about_me';
import { Contact } from '@cv/components/sidebar/contact';
import { FollowMe } from '@cv/components/sidebar/follow_me';
import { Interests } from '@cv/components/sidebar/interests';
import { ComputerLanguages } from '@cv/components/sidebar/computer_languages';
import { HumanLanguages } from '@cv/components/sidebar/human_languages';
import { OperatingSystems } from '@cv/components/sidebar/operating_systems';

const LineBreak = styled('div')`
  page-break-before: always;
  @media print {
    height: 50px;
  }
`;

export const Sidebar: FC = () => {
  return (
    <>
      <AboutMe />
      <Contact />
      <HumanLanguages />
      <FollowMe />
      <LineBreak />
      <ComputerLanguages />
      <OperatingSystems />
      <Interests />
    </>
  );
};
