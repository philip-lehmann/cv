import type { FC } from 'react';

import Box from '@mui/material/Box';
import { useTranslations } from 'next-intl';
import { SidebarItem } from './helper';

export const OperatingSystems: FC = () => {
  const t = useTranslations('OperatingSystems');
  return (
    <SidebarItem title={t('name')}>
      MacOS:{' '}
      <Box component="span" sx={{ whiteSpace: 'nowrap' }}>
        {t('macos')}
      </Box>
      <br />
      Linux:{' '}
      <Box component="span" sx={{ whiteSpace: 'nowrap' }}>
        {t('linux')}
      </Box>
      <br />
      Windows:{' '}
      <Box component="span" sx={{ whiteSpace: 'nowrap' }}>
        {t('windows')}
      </Box>
    </SidebarItem>
  );
};
