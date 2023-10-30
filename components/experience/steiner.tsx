import React, { type FC } from 'react';
import { H5, H6 } from '@bootstrap-styled/v4';
import { FloatRight } from '@cv/components/float';
import TooltipBadge from '@cv/components/tooltip_badge';
import { DashList } from '@cv/components/dash_list';
import { Trans as T } from '@cv/components/trans';
import { monthYear } from '@cv/helpers/date';
import { useLocale } from '@cv/helpers/use_locale';

export const Steiner: FC = () => {
  const locale = useLocale();
  return (
    <>
      <H5>Steiner AG</H5>
      <div>
        <FloatRight>
          {monthYear('2022-10-01', { locale: locale })} - <T lang="en">Now</T>
          <T lang="de">Jetzt</T>
        </FloatRight>
        <H6>
          <T lang="en">Senior Software Engineer</T>
          <T lang="de">Senior Software Engineer</T>
        </H6>
      </div>
      <DashList></DashList>
      <TooltipBadge namespace="steiner" progress="90" name="Typescript" />{' '}
      <TooltipBadge namespace="steiner" progress="90" name="Next.js" />{' '}
      <TooltipBadge namespace="steiner" progress="10" name="NestJs" />{' '}
      <TooltipBadge namespace="steiner" progress="60" name="Elasticsearch" />{' '}
      <TooltipBadge namespace="steiner" progress="80" name="Github" />{' '}
      <TooltipBadge namespace="steiner" progress="70" name="Github Actions" />{' '}
      <TooltipBadge namespace="steiner" progress="90" name="Git" />{' '}
      <TooltipBadge namespace="steiner" progress="10" name="NX" />{' '}
      <TooltipBadge namespace="steiner" progress="85" name="Docker" />{' '}
      <TooltipBadge namespace="steiner" progress="50" name="Kubernetes" />{' '}
      <TooltipBadge namespace="steiner" progress="80" name="VS Code" />{' '}
      <TooltipBadge namespace="steiner" progress="80" name="Jira" />{' '}
      <TooltipBadge namespace="steiner" progress="80" name="Confluence" />{' '}
    </>
  );
};
