import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { FC, PropsWithChildren, ReactNode } from 'react';

export const SidebarTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="h4" component="h2" align="center">
      {children}
    </Typography>
  );
};

export const SidebarBody: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="body1" align="center" component="div">
      {children}
    </Typography>
  );
};

export const SidebarItem: FC<PropsWithChildren<{ title: ReactNode }>> = ({ title, children }) => {
  return (
    <Stack gap={1} direction="column">
      <SidebarTitle>{title}</SidebarTitle>
      <SidebarBody>{children}</SidebarBody>
    </Stack>
  );
};
