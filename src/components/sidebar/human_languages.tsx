import type { FC } from 'react';

import { MyCard, MyCardBlock, MyCardTitle } from './card';
import { useTranslations } from 'next-intl';

export const HumanLanguages: FC = () => {
  const t = useTranslations('HumanLanguages');
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>{t('name')}</MyCardTitle>
        {t('swiss')}
        <br />
        {t('german')}
        <br />
        {t('english')}
      </MyCardBlock>
    </MyCard>
  );
};
