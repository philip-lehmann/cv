import Stack from '@mui/material/Stack';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { SidebarItem } from './helper';

const LANGUAGES = ['swiss', 'german', 'english'] as const;

export const HumanLanguages: FC = () => {
  const t = useTranslations('HumanLanguages');
  return (
    <SidebarItem title={t('name')}>
      <Stack spacing={1}>
        {LANGUAGES.map((lang) => (
          <div key={lang}>{t(lang)}</div>
        ))}
      </Stack>
    </SidebarItem>
  );
};
