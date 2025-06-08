import Stack from '@mui/material/Stack';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { SidebarItem } from './helper';

const LANGUAGES = ['typescript', 'rubyOnRails'] as const;

export const ComputerLanguages: FC = () => {
  const t = useTranslations('ComputerLanguages');
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
