import type { FC } from 'react';

import { CardText } from '@bootstrap-styled/v4';
import { MyCard, MyCardBlock, MyCardTitle } from '@cv/components/sidebar/card';
import { Trans as T } from '@cv/components/trans';

export const Interests: FC = () => {
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>
          <T lang="en">Personal Interests</T>
          <T lang="de">Persönliche Interessen</T>
        </MyCardTitle>
        <CardText>
          <T lang="en">Cook / Surf / Scuba Dive / Snowboard / Bike / E-Sports</T>
          <T lang="de">Kochen / Surfen / Tauchen / Snowboard / Fahrrad / E-Sports</T>
        </CardText>
      </MyCardBlock>
    </MyCard>
  );
};
