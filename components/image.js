import React from 'react'
// import { Img } from '@bootstrap-styled/v4'
import Image from 'next/image'

const MyImage = ({ file = 'linkedin.png', ...props }) => {
  return <Image layout="fill" {...props} src={`/images/${file}`} />
}

export default MyImage
