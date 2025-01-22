import type { FC } from 'react';
import { Typography } from '@mui/material';
import { FloatRight } from '@cv/components/float';
import { TooltipBadgeGroup } from '@cv/components/tooltip_badge';
import { DashList } from '@cv/components/dash_list';
import { Trans as T } from '@cv/components/trans';
import { monthYear } from '@cv/helpers/date';
import { useLocale } from '@cv/helpers/use_locale';

export const HealthAdvisor: FC = () => {
  const locale = useLocale();
  return (
    <>
      <Typography variant="h5">HealthAdvisor</Typography>
      <div>
        <FloatRight>
          {monthYear('2024-04-01', { locale: locale })} - <T lang="en">Now</T>
          <T lang="de">Jetzt</T>
        </FloatRight>
        <Typography variant="h6">
          <T lang="en">Senior Full Stack Developer</T>
          <T lang="de">Senior Full Stack Developer</T>
        </Typography>
        <DashList />
      </div>
      <TooltipBadgeGroup />
    </>
  );
};
