import type { FC } from 'react';
import { Experience } from './experience';
import { Sidebar } from './sidebar';
import { LanguageSwitch } from './language_switch';
import { Box, Typography, Card, CardContent } from '@mui/material';

export const CV: FC = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <LanguageSwitch />
      <Box
        sx={{
          background: 'linear-gradient(90deg, rgba(222, 222, 224, 1) 0%, rgba(233, 233, 235, 1) 100%)',
          minHeight: '100vh',
          '@media print': {
            height: '300vh',
          },
        }}
      >
        <Sidebar />
      </Box>
      <Box>
        <Card>
          <CardContent>
            <header>
              <Typography variant="h1" sx={{ mt: '100px' }}>
                Philip Lehmann
              </Typography>
              <Typography variant="h3">Software Engineer</Typography>
            </header>
          </CardContent>
        </Card>
        <br />
        <br />
        <Experience />
      </Box>
    </Box>
  );
};
