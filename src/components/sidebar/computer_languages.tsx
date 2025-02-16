import type { FC } from 'react';

import { useTranslations } from 'next-intl';
import { SidebarItem } from './helper';

export const ComputerLanguages: FC = () => {
  const t = useTranslations('ComputerLanguages');

  return (
    <SidebarItem title={t('name')}>
      Typescript
      <br />
      Ruby on Rails
    </SidebarItem>
  );
};
