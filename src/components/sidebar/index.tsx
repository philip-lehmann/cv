'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import type { FC } from 'react';
import { breakpoint } from '../../breakpoint';
import { AboutMe } from './about_me';
import { ComputerLanguages } from './computer_languages';
import { Contact } from './contact';
import { FollowMe } from './follow_me';
import { HumanLanguages } from './human_languages';
import { Interests } from './interests';
import { OperatingSystems } from './operating_systems';

export const Sidebar: FC = () => {
  const theme = useTheme();
  return (
    <Stack
      direction="column"
      gap={4}
      sx={{
        background: 'var(--mui-palette-background-custom)',
        minHeight: '100vh',
        '@media print': {
          height: '300vh',
        },
        [theme.breakpoints.up(breakpoint)]: {
          width: '33%',
          maxWidth: '390px',
        },
        padding: '35px',
      }}
    >
      <AboutMe />
      <Contact />
      <HumanLanguages />
      <FollowMe />
      <Box
        sx={{
          display: 'none',
          '@media print': {
            display: 'block',
            pageBreakBefore: 'always',
            height: '50px',
          },
        }}
      />
      <ComputerLanguages />
      <OperatingSystems />
      <Interests />
    </Stack>
  );
};
