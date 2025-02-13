import type { FC } from 'react';
import Typography from '@mui/material/Typography';
import { TooltipBadge, TooltipBadgeGroup } from '../tooltip_badge';
import { useTranslations } from 'next-intl';
import { Duties } from '../duties';

export const Insign: FC = () => {
  const t = useTranslations('Insign');

  return (
    <>
      <Typography variant="h5">{t('name')}</Typography>
      <Duties namespace="Insign.roles1" duties={3} start="2007-06-01" end="2010-05-01" />
      <TooltipBadgeGroup>
        <TooltipBadge namespace="insign" progress="70" name="php" />
        <TooltipBadge namespace="insign" progress="90" name="javascript" />
        <TooltipBadge namespace="insign" progress="70" name="css" />
        <TooltipBadge namespace="insign" progress="90" name="html" />
        <TooltipBadge namespace="insign" progress="80" name="mysql" />
        <TooltipBadge namespace="insign" progress="70" name="svn" />
        <TooltipBadge namespace="insign" progress="65" name="devops" />
      </TooltipBadgeGroup>
    </>
  );
};
