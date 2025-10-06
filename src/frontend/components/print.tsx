import { Box, type BoxProps, Divider, type SxProps, type Theme } from '@mui/material';
import type { FC } from 'react';

export const HrPrintHidden: FC = () => (
  <Divider
    sx={{
      '@media print': {
        display: 'none !important',
      },
    }}
  />
);

export const PageBreak: FC = () => (
  <Divider
    sx={{
      pageBreakBefore: 'always',
      '@media print': {
        visibility: 'hidden',
        height: '20px',
      },
    }}
  />
);

export const combineSxProps = (
  sx1: SxProps<Theme> | undefined,
  sx2: SxProps<Theme> | undefined,
): SxProps<Theme> | undefined => {
  return [sx1, sx2].filter((sx): sx is SxProps<Theme> => !!sx).flat();
};

export const NoPageBreakBox: FC<BoxProps> = ({ sx, children, ...props }) => {
  return (
    <Box sx={combineSxProps(sx, { breakInside: 'avoid', pageBreakInside: 'avoid', breakBefore: 'auto' })} {...props}>
      {children}
    </Box>
  );
};
