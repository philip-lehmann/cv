import type { FC } from 'react';

import { MyCard, MyCardBlock, MyCardTitle } from './card';
import { useTranslations } from 'next-intl';

export const OperatingSystems: FC = () => {
  const t = useTranslations('OperatingSystems');
  return (
    <MyCard backgroundColor="transparent">
      <MyCardBlock>
        <MyCardTitle>{t('name')}</MyCardTitle>
        MacOS: <span sx={{ whiteSpace: 'nowrap' }}>{t('macos')}</span>
        <br />
        Linux: <span sx={{ whiteSpace: 'nowrap' }}>{t('linux')}</span>
        <br />
        Windows: <span sx={{ whiteSpace: 'nowrap' }}>{t('windows')}</span>
      </MyCardBlock>
    </MyCard>
  );
};
