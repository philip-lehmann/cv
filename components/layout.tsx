import type { FC, PropsWithChildren } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      primary: '#343436',
    },
    primary: {
      main: '#343436',
      dark: '#000',
      light: '#E1E1E1',
    },
  },
  typography: {
    fontFamily: "'Lato', 'Noto Sans JP', 'Open Sans', sans-serif",
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#343436',
          textDecoration: 'none',
          '&:hover': {
            color: '#000',
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Layout;
