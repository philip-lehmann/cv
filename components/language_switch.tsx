import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Button, Col } from '@bootstrap-styled/v4';
import { styled } from 'styled-components';
import { PdfIcon } from './icons/pdf';

const FloatingButtonGroup = styled('div')`
  > .btn {
    text-decoration: none;
    border-radius: 0;
    padding: 0.4rem 0.5rem;
    font-size: 0.875rem;
  };
  > :first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  };
  > :last-child {
    border-radius: 0 0.25rem 0.25rem 0;
  };
`;

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
`;

const PdfIconStyled = styled(PdfIcon)`
  height: 30px;
`;

const LinkStyled = styled(Link)`
  height: 30px;
  padding-right: 15px;
`;

export const LanguageSwitch = ({ className = '' }) => {
  const { locale } = useRouter();
  return (
    <LanguageCol sm={12}>
      <LinkStyled href={{ pathname: '/api/pdf', query: { locale } }} download title="download curriculum vitae">
        <PdfIconStyled />
      </LinkStyled>

      <FloatingButtonGroup className={className}>
        <Link href={{ href: '/' }} locale="en" passHref legacyBehavior>
          <Button color={locale === 'en' ? 'primary' : 'secondary'}>EN</Button>
        </Link>
        <Link href={{ href: '/' }} locale="de" passHref legacyBehavior>
          <Button color={locale === 'de' ? 'primary' : 'secondary'}>DE</Button>
        </Link>
      </FloatingButtonGroup>
    </LanguageCol>
  );
};
