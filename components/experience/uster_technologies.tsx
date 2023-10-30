import React, { type FC } from 'react';
import { H5, H6 } from '@bootstrap-styled/v4';
import { FloatRight } from '@cv/components/float';
import TooltipBadge from '@cv/components/tooltip_badge';
import { DashList, Dash } from '@cv/components/dash_list';
import { Trans as T } from '@cv/components/trans';
import { monthYear } from '@cv/helpers/date';
import { useLocale } from '@cv/helpers/use_locale';
import { LineBreak } from '@cv/components/print';

export const UsterTechnologies: FC = () => {
  const locale = useLocale();
  return (
    <>
      <LineBreak />
      <H5>Uster Technologies</H5>
      <div>
        <FloatRight>
          {monthYear('2002-08-01', { locale: locale })} - {monthYear('2006-07-01', { locale: locale })}
        </FloatRight>
        <H6>
          <T lang="en">Apprenticeship System Engineer</T>
          <T lang="de">Lehre als System Informatiker</T>
        </H6>
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
      <TooltipBadge namespace="uster_technologies" progress="70" name="PHP" />{' '}
      <TooltipBadge namespace="uster_technologies" progress="90" name="JavaScript" />{' '}
      <TooltipBadge namespace="uster_technologies" progress="70" name="CSS" />{' '}
      <TooltipBadge namespace="uster_technologies" progress="90" name="HTML" />{' '}
      <TooltipBadge namespace="uster_technologies" progress="60" name="C" />{' '}
      <TooltipBadge namespace="uster_technologies" progress="60" name="C++" />{' '}
      <TooltipBadge namespace="uster_technologies" progress="60" name="C#" />{' '}
      <TooltipBadge namespace="uster_technologies" progress="60" name="Java" />{' '}
      <TooltipBadge namespace="uster_technologies" progress="80" name="Mysql" />
    </>
  );
};
