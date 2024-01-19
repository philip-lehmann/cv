import type { FC } from 'react';

import { H5, H6 } from '@bootstrap-styled/v4';
import { FloatRight } from '@cv/components/float';
import { TooltipBadge, TooltipBadgeGroup } from '@cv/components/tooltip_badge';
import { DashList, Dash } from '@cv/components/dash_list';
import { Trans as T } from '@cv/components/trans';
import { monthYear } from '@cv/helpers/date';
import { useLocale } from '@cv/helpers/use_locale';

export const DataQuest: FC = () => {
  const locale = useLocale();
  return (
    <>
      <H5>DataQuest</H5>
      <div>
        <FloatRight>
          {monthYear('2006-08-01', { locale: locale })} - {monthYear('2006-11-01', { locale: locale })}
        </FloatRight>
        <H6>
          <T lang="en">Service Desk - Support</T>
          <T lang="de">Service Desk - Support</T>
        </H6>
      </div>
      <DashList>
        <Dash>
          <T lang="en">
            Design and implement a warehouse management system for the iPod replacement program using Java
          </T>
          <T lang="de">Entwickeln einer Lagerverwalung für das iPod austausch Program in Java.</T>
        </Dash>
      </DashList>
      <TooltipBadgeGroup>
        <TooltipBadge namespace="dataquest" progress="60" name="Java" />
      </TooltipBadgeGroup>
    </>
  );
};
