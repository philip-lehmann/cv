import React from 'react'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
`

const MyCv = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Philip Lehmann - Curriculum vitae</title>
        <link rel="manifest" href="/site.webmanifest" crossorigin="use-credentials"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="icon" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="apple-touch-icon" href="/touch-icon-iphone.png"/>
        <link rel="icon" sizes="192x192" href="/favicon-192x192.png"/>
        <link rel="icon" sizes="512x512" href="/favicon-512x512.png"/>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyCv
