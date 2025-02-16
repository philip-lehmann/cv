import type { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TooltipBadge, TooltipBadgeGroup } from '../tooltip_badge';
import { Duties } from '../duties';
import { useTranslations } from 'next-intl';

export const UsterTechnologies: FC = () => {
  const t = useTranslations('UsterTechnologies');
  return (
    <Box>
      <Typography variant="h5">Uster Technologies</Typography>
      <Duties namespace="UsterTechnologies.roles1" duties={3} start="2002-08-01" end="2006-07-01" />
      <TooltipBadgeGroup>
        <TooltipBadge progress="70" name="php" />
        <TooltipBadge progress="90" name="javascript" />
        <TooltipBadge progress="70" name="css" />
        <TooltipBadge progress="90" name="html" />
        <TooltipBadge progress="60" name="c" />
        <TooltipBadge progress="60" name="cpp" />
        <TooltipBadge progress="60" name="csharp" />
        <TooltipBadge progress="60" name="java" />
        <TooltipBadge progress="80" name="mysql" />
      </TooltipBadgeGroup>
    </Box>
  );
};
