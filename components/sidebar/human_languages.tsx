import React, { type FC } from 'react';

import { MyCard, MyCardBlock, MyCardTitle } from '@cv/components/sidebar/card';
import { Trans as T } from '@cv/components/trans';

export const HumanLanguages: FC = () => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>
          <T lang="en">Human Languages</T>
          <T lang="de">Sprachen</T>
        </MyCardTitle>
        <T lang="en">Swiss German: Native</T>
        <T lang="de">Schweizerdeutsch: Muttersprache</T>
        <br />
        <T lang="en">German: Business Fluent</T>
        <T lang="de">Deutsch: fliessend</T>
        <br />
        <T lang="en">English: Business Fluent</T>
        <T lang="de">Englisch: fliessend</T>
      </MyCardBlock>
    </MyCard>
  );
};
