import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { Button, ButtonGroup, Col } from '@bootstrap-styled/v4'
import styled from 'styled-components'
import { PdfIcon } from './icons/pdf'
const FloatingButtonGroup = styled(ButtonGroup)`
  > a {
    text-decoration: none;
  }
`

const LanguageCol = styled(Col)`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  @media (min-width: 576px) {
    justify-content: flex-end;
  }
  position: absolute !important;
  left: 0;
  top: 0;
  margin-top: 15px;

  @media print {
    display: none !important;
  }
`

const PdfIconStyled = styled(PdfIcon)`
  height: 30px;
`

const LinkStyled = styled(Link)`
  height: 30px;
  padding-right: 15px;
`

export const LanguageSwitch = ({ className = '' }) => {
  const { locale } = useRouter()
  return (
    <LanguageCol sm={12}>
      <LinkStyled href={{ pathname: '/api/pdf', query: { locale } }} download title="download curriculum vitae">
        <PdfIconStyled />
      </LinkStyled>

      <FloatingButtonGroup className={className} size="sm">
        <Link href={{ href: '/' }} locale="en" passHref legacyBehavior>
          <Button color={locale === 'en' ? 'primary' : 'secondary'}>EN</Button>
        </Link>
        <Link href={{ href: '/' }} locale="de" passHref legacyBehavior>
          <Button color={locale === 'de' ? 'primary' : 'secondary'}>DE</Button>
        </Link>
      </FloatingButtonGroup>
    </LanguageCol>
  )
}
