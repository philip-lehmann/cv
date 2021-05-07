import React, { memo, FC } from 'react'

type OpenGraphProps = {
  title: string
  url: string
}

const OpenGraph: FC<OpenGraphProps> = memo(({ title, url }) => {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}/apple-touch-icon.png`} />
    </>
  )
})

OpenGraph.displayName = 'OpenGraph'
export default OpenGraph
