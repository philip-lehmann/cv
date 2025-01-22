import type { FC } from 'react';
import { Box } from '@mui/material';
import { AboutMe } from '@cv/components/sidebar/about_me';
import { Contact } from '@cv/components/sidebar/contact';
import { FollowMe } from '@cv/components/sidebar/follow_me';
import { Interests } from '@cv/components/sidebar/interests';
import { ComputerLanguages } from '@cv/components/sidebar/computer_languages';
import { HumanLanguages } from '@cv/components/sidebar/human_languages';
import { OperatingSystems } from '@cv/components/sidebar/operating_systems';

export const Sidebar: FC = () => {
  return (
    <>
      <AboutMe />
      <Contact />
      <HumanLanguages />
      <FollowMe />
      <Box
        sx={{
          pageBreakBefore: 'always',
          '@media print': {
            height: '50px',
          },
        }}
      />
      <ComputerLanguages />
      <OperatingSystems />
      <Interests />
    </>
  );
};
