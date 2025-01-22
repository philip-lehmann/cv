import type { FC } from 'react';
import { Typography } from '@mui/material';
import { FloatRight } from '@cv/components/float';
import { TooltipBadge, TooltipBadgeGroup } from '@cv/components/tooltip_badge';
import { DashList, Dash } from '@cv/components/dash_list';
import { Trans as T } from '@cv/components/trans';
import { monthYear } from '@cv/helpers/date';
import { useLocale } from '@cv/helpers/use_locale';

export const UsterTechnologies: FC = () => {
  const locale = useLocale();
  return (
    <>
      <Typography variant="h5">Uster Technologies</Typography>
      <div>
        <FloatRight>
          {monthYear('2002-08-01', { locale: locale })} - {monthYear('2006-07-01', { locale: locale })}
        </FloatRight>
        <Typography variant="h6">
          <T lang="en">Apprenticeship System Engineer</T>
          <T lang="de">Lehre als System Informatiker</T>
        </Typography>
      </div>
      <DashList>
        <Dash>
          <T lang="en">Set up computers for all the employees and migrate data and applications</T>
          <T lang="de">
            Computer aufsetzten für alle Mitarbeiter und helfen beim migrieren von Daten und Applikationen
          </T>
        </Dash>
        <Dash>
          <T lang="en">Create intranet based on PHP as a variant to MS SharePoint</T>
          <T lang="de">Intranet mit PHP erstellen als Variante zu MS SharePoint</T>
        </Dash>
        <Dash>
          <T lang="en">Design software for microcontrollers in C / C++ / C#</T>
          <T lang="de">Software erstellen für Microcontroller in C / C++ / C#</T>
        </Dash>
      </DashList>
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
