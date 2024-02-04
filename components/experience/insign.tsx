import type { FC } from 'react';
import { H5, H6 } from '@bootstrap-styled/v4';
import { FloatRight } from '@cv/components/float';
import { TooltipBadge, TooltipBadgeGroup } from '@cv/components/tooltip_badge';
import { DashList, Dash } from '@cv/components/dash_list';
import { Trans as T } from '@cv/components/trans';
import { monthYear } from '@cv/helpers/date';
import { useLocale } from '@cv/helpers/use_locale';

export const Insign: FC = () => {
  const locale = useLocale();
  return (
    <>
      <H5>insign GmbH</H5>
      <div>
        <FloatRight>
          {monthYear('2007-06-01', { locale: locale })} - {monthYear('2010-05-01', { locale: locale })}
        </FloatRight>
        <H6>
          <T lang="en">Software Engineer</T>
          <T lang="de">Software Entwickler</T>
        </H6>
      </div>
      <DashList>
        <Dash>
          <T lang="en">
            Maintain, create and deploy websites utilizing the internal CMS for customers (PWC, Finanz und Wirtschaft,
            Syngenta etc.)
          </T>
          <T lang="de">
            Unterhalt, entwicklung und deployment von Webseiten aufgebaut auf dem internen CMS nach Kundenwünschen (PWC,
            Finanz und Wirtschaft, Syngenta etc.)
          </T>
        </Dash>
        <Dash>
          <T lang="en">Update Piazza using PHP Template Engine Smarty</T>
          <T lang="de">Piazza Plattform mit der PHP Template Engine Smarty erweitern</T>
        </Dash>
        <Dash>
          <T lang="en">System administrator tasks</T>
          <T lang="de">Systemadministratoraufgaben</T>
        </Dash>
      </DashList>
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
