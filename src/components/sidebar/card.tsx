import { Box, Card, CardContent, type CardProps, type CardContentProps } from '@mui/material';
import type { PropsWithChildren } from 'react';

export const MyCard = (props: PropsWithChildren<CardProps>) => <Card {...props} />;

export const MyCardBlock = (props: PropsWithChildren<CardContentProps>) => (
  <CardContent
    sx={{
      textAlign: 'center',
    }}
    {...props}
  />
);

export const MyCardTitle = (props: PropsWithChildren<{ className?: string }>) => (
  <Box
    component="div"
    sx={{
      fontSize: '1.25rem',
      fontWeight: 500,
      paddingBottom: '5px',
    }}
    {...props}
  />
);
