import type { FC } from 'react';
import { Divider, Box } from '@mui/material';

export const HrPrintHidden: FC = () => (
  <Divider
    sx={{
      '@media print': {
        display: 'none !important',
      },
    }}
  />
);

export const LineBreak: FC = () => (
  <Box
    sx={{
      pageBreakBefore: 'always',
      '@media print': {
        height: '70px',
      },
    }}
  />
);
