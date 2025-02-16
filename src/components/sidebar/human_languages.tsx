import type { FC } from 'react';
import { useTranslations } from 'next-intl';
import { SidebarItem } from './helper';

export const HumanLanguages: FC = () => {
  const t = useTranslations('HumanLanguages');

  return (
    <SidebarItem title={t('name')}>
      {t('swiss')}
      <br />
      {t('german')}
      <br />
      {t('english')}
    </SidebarItem>
  );
};
