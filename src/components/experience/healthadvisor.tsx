import type { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TooltipBadgeGroup } from '../tooltip_badge';
import { useTranslations } from 'next-intl';
import { Duties } from '../duties';

export const HealthAdvisor: FC = () => {
  const t = useTranslations('HealthAdvisor');

  return (
    <Box>
      <Typography variant="h5">{t('name')}</Typography>
      <Duties namespace="HealthAdvisor.roles1" duties={0} start="2024-04-01" end="now" />
      <TooltipBadgeGroup />
    </Box>
  );
};
