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
  <Divider
    sx={{
      pageBreakBefore: 'always',
      '@media print': {
        visibility: 'hidden',
        height: '70px',
      },
    }}
  />
);
