import React, { memo, FC } from 'react'

const Connect: FC = memo(() => {
  return (
    <>
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </>
  )
})

Connect.displayName = 'Connect'
export default Connect
