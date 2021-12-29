import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { Button, ButtonGroup } from '@bootstrap-styled/v4'
import styled from 'styled-components'

const FloatingButtonGroup = styled(ButtonGroup)`
  justify-content: end;
  -webkit-justify-content: end;
  z-index: 1;

  @media print {
    display: none !important;
  }
  > a {
    text-decoration: none;
  }
`

export const LanguageSwitch = ({ className = '' }) => {
  const { locale } = useRouter()
  return (
    <FloatingButtonGroup className={className} size="sm">
      <Link href={{ href: '/' }} locale="en" passHref>
        <Button color={locale === 'en' ? 'primary' : 'secondary'}>EN</Button>
      </Link>
      <Link href={{ href: '/' }} locale="de" passHref>
        <Button color={locale === 'de' ? 'primary' : 'secondary'}>DE</Button>
      </Link>
    </FloatingButtonGroup>
  )
}
