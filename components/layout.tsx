import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Noto+Sans+JP&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </>
  )
}

export default Layout
