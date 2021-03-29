import React, { FC } from 'react'
import BootstrapProvider from '@bootstrap-styled/provider'
import { darken, lighten } from 'polished'
import { Helmet } from 'react-helmet'

const theme = {
  '$card-border-width': 'none',
  '$body-color': '#343436',
  $black: '#000',
  '$font-family-sans-serif': "'Lato', 'Noto Sans JP', 'Open Sans', sans-serif",
  '$link-color': '#343436',
  '$link-decoration': 'none',
  '$link-hover-color': darken(0.4, '#343436'),
  '$link-hover-decoration': 'underline',
  '$brand-primary': lighten(0.4, '#343436')
}

const Layout: FC = ({ children }) => {
  return (
    <BootstrapProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Noto+Sans+JP&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </BootstrapProvider>
  )
}

export default Layout
