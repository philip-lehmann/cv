import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import type { ComponentProps, FC } from 'react';

export const DashList: FC<ComponentProps<typeof List>> = ({ children, ...props }) => {
  return (
    <List sx={{ ml: 0, pl: '10px' }} {...props}>
      {children}
    </List>
  );
};

export const Dash = ({ children, ...props }: ComponentProps<typeof ListItem>) => (
  <ListItem
    sx={{
      textIndent: '5px',
      '&:before': {
        content: '"-"',
        display: 'inline-block',
        width: '15px',
        marginLeft: '-20px',
      },
    }}
    {...props}
  >
    {children}
  </ListItem>
);
