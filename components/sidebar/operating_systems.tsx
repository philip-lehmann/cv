import type { FC } from 'react';

import { MyCard, MyCardBlock, MyCardTitle } from '@cv/components/sidebar/card';
import { Trans as T } from '@cv/components/trans';

export const OperatingSystems: FC = () => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>
          <T lang="en">Operating Systems</T>
          <T lang="de">Betriebssysteme</T>
        </MyCardTitle>
        MacOS:{' '}
        <span sx={{ whiteSpace: 'nowrap' }}>
          <T lang="en">Development / Personal use</T>
          <T lang="de">Entwicklung / Privat</T>
        </span>
        <br />
        Linux:{' '}
        <span sx={{ whiteSpace: 'nowrap' }}>
          <T lang="en">Production</T>
          <T lang="de">Produktiv</T>
        </span>
        <br />
        Windows:{' '}
        <span sx={{ whiteSpace: 'nowrap' }}>
          <T lang="en">Graphic intensive work / Games</T>
          <T lang="de">Grafisch / Games</T>
        </span>
      </MyCardBlock>
    </MyCard>
  );
};
