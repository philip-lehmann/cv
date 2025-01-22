import type { PropsWithChildren, FC } from 'react';
import { Box } from '@mui/material';

export const FloatRight: FC<PropsWithChildren> = ({ children }) => (
  <Box
    component="span"
    sx={{
      float: 'right',
      marginTop: '-3px',
    }}
  >
    {children}
  </Box>
);
