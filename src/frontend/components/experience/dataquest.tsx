import Typography from '@mui/material/Typography';
import type { FC } from 'react';

import { Duties } from '../duties';
import { useTranslations } from '../intl';
import { NoPageBreakBox } from '../print';
import { TooltipBadge, TooltipBadgeGroup } from '../tooltip_badge';

export const DataQuest: FC = () => {
  const t = useTranslations('DataQuest');
  return (
    <NoPageBreakBox>
      <Typography variant="h5">{t('name')}</Typography>
      <Duties namespace="DataQuest.roles1" duties={1} start="2006-08-01" end="2006-11-01" />
      <TooltipBadgeGroup>
        <TooltipBadge progress="60" name="java" />
      </TooltipBadgeGroup>
    </NoPageBreakBox>
  );
};
