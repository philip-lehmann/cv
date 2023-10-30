import React, { type FC } from 'react';

import { MyCard, MyCardBlock, MyCardTitle } from '@cv/components/sidebar/card';
import { Trans as T } from '@cv/components/trans';

export const ComputerLanguages: FC = () => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>
          <T lang="en">Computer Languages</T>
          <T lang="de">Programmiersprachen</T>
        </MyCardTitle>
        Typescript
        <br />
        Ruby on Rails
      </MyCardBlock>
    </MyCard>
  );
};
