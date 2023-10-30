import React, { FC } from 'react';
import styled from 'styled-components';

const HeaderDiv = styled('header')`
  background: 'rebeccapurple';
  margin-bottom: '1.45rem';
`;

const HeaderWrapper = styled('div')`
  margin: '0 auto';
  max-width: 960;
  padding: '1.45rem 1.0875rem';
`;

const H1Styled = styled('h1')`
  margin: 0;
`;

const AStyled = styled('a')`
  color: 'white';
  text-decoration: 'none';
`;

const Header: FC<HeaderProps> = ({ siteTitle }) => (
  <HeaderDiv>
    <HeaderWrapper>
      <H1Styled>
        <AStyled href="/">{siteTitle}</AStyled>
      </H1Styled>
    </HeaderWrapper>
  </HeaderDiv>
);

interface HeaderProps {
  siteTitle: string;
}

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
