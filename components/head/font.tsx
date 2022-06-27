import React, { memo, FC } from 'react'

const Font: FC = memo(() => {
  return <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
})

Font.displayName = 'Font'
export default Font
