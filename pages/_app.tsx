import React, { FC } from 'react'
import { AppProps } from 'next/app'

const MyCv: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyCv
