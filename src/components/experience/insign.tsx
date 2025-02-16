import type { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TooltipBadge, TooltipBadgeGroup } from '../tooltip_badge';
import { useTranslations } from 'next-intl';
import { Duties } from '../duties';

export const Insign: FC = () => {
  const t = useTranslations('Insign');

  return (
    <Box>
      <Typography variant="h5">{t('name')}</Typography>
      <Duties namespace="Insign.roles1" duties={3} start="2007-06-01" end="2010-05-01" />
      <TooltipBadgeGroup>
        <TooltipBadge progress="70" name="php" />
        <TooltipBadge progress="90" name="javascript" />
        <TooltipBadge progress="70" name="css" />
        <TooltipBadge progress="90" name="html" />
        <TooltipBadge progress="80" name="mysql" />
        <TooltipBadge progress="70" name="svn" />
        <TooltipBadge progress="65" name="devops" />
      </TooltipBadgeGroup>
    </Box>
  );
};
