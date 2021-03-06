import React from 'react'
import PropTypes from 'prop-types'
import BootstrapProvider from '@bootstrap-styled/provider'
import { darken, lighten } from 'polished'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'

const GlobalFonts = createGlobalStyle`
`

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

const Layout = ({ children }) => {
  return (
    <BootstrapProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Noto+Sans+JP&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalFonts />
      {children}
    </BootstrapProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
