import type { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TooltipBadge, TooltipBadgeGroup } from '../tooltip_badge';
import { useTranslations } from 'next-intl';
import { Duties } from '../duties';

export const DataQuest: FC = () => {
  const t = useTranslations('DataQuest');
  return (
    <Box>
      <Typography variant="h5">{t('name')}</Typography>
      <Duties namespace="DataQuest.roles1" duties={1} start="2006-08-01" end="2006-11-01" />
      <TooltipBadgeGroup>
        <TooltipBadge progress="60" name="java" />
      </TooltipBadgeGroup>
    </Box>
  );
};
