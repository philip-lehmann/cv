import type { FC } from 'react';

import { Row, Col, Header, H1, H3, Card, CardBlock } from '@bootstrap-styled/v4';
import { styled } from 'styled-components';

import { Experience } from '@cv/components/experience';
import { Sidebar } from '@cv/components/sidebar';
import { LanguageSwitch } from './language_switch';

const HomeH1 = styled(H1)`
  margin-top: 100px;
`;

const SidebarCol = styled(Col)`
  background: linear-gradient(90deg, rgba(222, 222, 224, 1) 0%, rgba(233, 233, 235, 1) 100%);
  min-height: 100vh;
  @media print {
    height: 300vh;
  }
`;

const RowStyled = styled(Row)`
  position: relative;
`;

export const CV: FC = () => {
  return (
    <RowStyled>
      <LanguageSwitch />
      <SidebarCol sm={4}>
        <Sidebar />
      </SidebarCol>
      <Col sm={8}>
        <Card>
          <CardBlock>
            <Header>
              <HomeH1>Philip Lehmann</HomeH1>
              <H3>Software Engineer</H3>
            </Header>
          </CardBlock>
        </Card>
        <br />
        <br />
        <Experience />
      </Col>
    </RowStyled>
  );
};
