import type { FC, PropsWithChildren } from 'react';
import BootstrapProvider from '@bootstrap-styled/provider';
import { darken, lighten } from 'polished';

const theme = {
  '$card-border-width': 'none',
  '$body-color': '#343436',
  $black: '#000',
  '$font-family-sans-serif': "'Lato', 'Noto Sans JP', 'Open Sans', sans-serif",
  '$link-color': '#343436',
  '$link-decoration': 'none',
  '$link-hover-color': darken(0.4, '#343436'),
  '$link-hover-decoration': 'underline',
  '$brand-primary': lighten(0.4, '#343436'),
  '$badge-default-bg': '#E1E1E1',
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <BootstrapProvider theme={theme}>{children}</BootstrapProvider>;
};

export default Layout;
