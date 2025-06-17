'use client';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeBackground {
    custom: string;
  }
}

export const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    background: {
      custom: 'linear-gradient(90deg, rgba(222, 222, 224, 1) 0%, rgba(233, 233, 235, 1) 100%)',
    },
    primary: {
      main: 'rgb(153, 153, 157)',
      contrastText: 'rgb(255, 255, 255)',
    },
    secondary: {
      main: 'rgb(255, 255, 255)',
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.3rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
});

theme.components = {
  ...theme.components,
  MuiContainer: {
    styleOverrides: {
      root: {
        '@media (min-width: 600px)': {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        color: theme.palette.text.primary,
        textDecorationColor: theme.palette.text.primary,
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        display: 'list-item',
      },
    },
  },
};
