import type { FC } from 'react';
import { H5, H6 } from '@bootstrap-styled/v4';
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
      <H5>HealthAdvisor</H5>
      <div>
        <FloatRight>
          {monthYear('2024-04-01', { locale: locale })} - <T lang="en">Now</T>
          <T lang="de">Jetzt</T>
        </FloatRight>
        <H6>
          <T lang="en">Senior Full Stack Developer</T>
          <T lang="de">Senior Full Stack Developer</T>
        </H6>
        <DashList></DashList>
      </div>
      <TooltipBadgeGroup></TooltipBadgeGroup>
    </>
  );
};
