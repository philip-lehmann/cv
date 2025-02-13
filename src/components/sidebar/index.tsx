import type { FC } from 'react';
import { Box } from '@mui/material';
import { AboutMe } from './about_me';
import { Contact } from './contact';
import { FollowMe } from './follow_me';
import { Interests } from './interests';
import { ComputerLanguages } from './computer_languages';
import { HumanLanguages } from './human_languages';
import { OperatingSystems } from './operating_systems';

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
