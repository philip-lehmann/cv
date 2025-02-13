import type { FC } from 'react';

import { MyCard, MyCardBlock, MyCardTitle } from './card';
import { useTranslations } from 'next-intl';

export const ComputerLanguages: FC = () => {
  const t = useTranslations('ComputerLanguages');
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>{t('name')}</MyCardTitle>
        Typescript
        <br />
        Ruby on Rails
      </MyCardBlock>
    </MyCard>
  );
};
