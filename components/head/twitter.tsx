import React, { memo, FC } from 'react'

type TwitterProps = {
  title: string
  url: string
}

const Twitter: FC<TwitterProps> = memo(({ title, url }) => {
  return (
    <>
      <meta name="twitter:card" content={title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={title} />
      <meta
        name="twitter:image"
        content="https://philiplehmann.ch/android-chrome-192x192.png"
      />
      <meta name="twitter:creator" content="@philiplehmann" />
    </>
  )
})

Twitter.displayName = 'Twitter'
export default Twitter
