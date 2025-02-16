import type { FC } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { AboutMe } from './about_me';
import { Contact } from './contact';
import { FollowMe } from './follow_me';
import { Interests } from './interests';
import { ComputerLanguages } from './computer_languages';
import { HumanLanguages } from './human_languages';
import { OperatingSystems } from './operating_systems';

export const Sidebar: FC = () => {
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
        width: '33%',
        maxWidth: '390px',
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
