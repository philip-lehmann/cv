import type { FC } from 'react';
import { Typography } from '@mui/material';
import { TooltipBadge, TooltipBadgeGroup } from '../tooltip_badge';
import { Duties } from '../duties';
import { useTranslations } from 'next-intl';

export const UsterTechnologies: FC = () => {
  const t = useTranslations('UsterTechnologies');
  return (
    <>
      <Typography variant="h5">Uster Technologies</Typography>
      <Duties namespace="UsterTechnologies.roles1" duties={3} start="2002-08-01" end="2006-07-01" />
      <TooltipBadgeGroup>
        <TooltipBadge namespace="uster_technologies" progress="70" name="php" />
        <TooltipBadge namespace="uster_technologies" progress="90" name="javascript" />
        <TooltipBadge namespace="uster_technologies" progress="70" name="css" />
        <TooltipBadge namespace="uster_technologies" progress="90" name="html" />
        <TooltipBadge namespace="uster_technologies" progress="60" name="c" />
        <TooltipBadge namespace="uster_technologies" progress="60" name="cpp" />
        <TooltipBadge namespace="uster_technologies" progress="60" name="csharp" />
        <TooltipBadge namespace="uster_technologies" progress="60" name="java" />
        <TooltipBadge namespace="uster_technologies" progress="80" name="mysql" />
      </TooltipBadgeGroup>
    </>
  );
};
