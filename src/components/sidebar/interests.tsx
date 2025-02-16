import type { FC } from 'react';
import { useTranslations } from 'next-intl';
import { SidebarItem } from './helper';

export const Interests: FC = () => {
  const t = useTranslations('Interests');
  return <SidebarItem title={t('name')}>{t('list')}</SidebarItem>;
};
