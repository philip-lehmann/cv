import React, { type FC } from 'react';
import { H5, H6 } from '@bootstrap-styled/v4';
import { FloatRight } from '@cv/components/float';
import TooltipBadge from '@cv/components/tooltip_badge';
import { DashList, Dash } from '@cv/components/dash_list';
import { Trans as T } from '@cv/components/trans';
import { monthYear } from '@cv/helpers/date';
import { useLocale } from '@cv/helpers/use_locale';

export const Quatico: FC = () => {
  const locale = useLocale();
  return (
    <>
      <H5>Quatico Solution AG</H5>
      <div>
        <FloatRight>
          {monthYear('2021-09-01', { locale: locale })} - {monthYear('2022-09-30', { locale: locale })}
        </FloatRight>
        <H6>
          <T lang="en">Agile Team Lead</T>
          <T lang="de">Agile Team Lead</T>
        </H6>
      </div>
      <DashList>
        <Dash>
          <T lang="en">Estimating tasks for client approval</T>
          <T lang="de">Aufwandschätzungen erstellen für Kundenwünsche</T>
        </Dash>
        <Dash>
          <T lang="en">Organize grooming and slicing for releases</T>
          <T lang="de">Organisieren von grooming und slicing für Releases</T>
        </Dash>
      </DashList>
      <div>
        <FloatRight>
          {monthYear('2021-09-01', { locale: locale })} - {monthYear('2022-01-01', { locale: locale })}
        </FloatRight>
        <H6>
          <T lang="en">Senior Frontend Developer</T>
          <T lang="de">Senior Frontend Developer</T>
        </H6>
      </div>
      <DashList>
        <Dash>
          <T lang="en">Magnolia-CMS Certification</T>
          <T lang="de">Magnolia-CMS Zertifizierung</T>
        </Dash>
        <Dash>
          <T lang="en">Build CMS components based on Web Components</T>
          <T lang="de">Erstellen von CMS Komponenten basierend auf Web Components</T>
        </Dash>
        <Dash>
          <T lang="en">Build and deploy releases</T>
          <T lang="de">Releases bauen und deployen</T>
        </Dash>
      </DashList>
      <TooltipBadge namespace="quatico" progress="90" name="ES6" />{' '}
      <TooltipBadge namespace="quatico" progress="90" name="Typescript" />{' '}
      <TooltipBadge namespace="quatico" progress="70" name="SCSS" />{' '}
      <TooltipBadge namespace="quatico" progress="90" name="HTML" />{' '}
      <TooltipBadge namespace="quatico" progress="95" name="React" />{' '}
      <TooltipBadge namespace="quatico" progress="90" name="node.js" />{' '}
      <TooltipBadge namespace="quatico" progress="60" name="Java" />{' '}
      <TooltipBadge namespace="quatico" progress="30" name="Solr" />{' '}
      <TooltipBadge namespace="quatico" progress="30" name="Jenkins" />{' '}
      <TooltipBadge namespace="quatico" progress="80" name="Git" />{' '}
      <TooltipBadge namespace="quatico" progress="85" name="Docker" />{' '}
      <TooltipBadge namespace="quatico" progress="30" name="Intellij" />{' '}
      <TooltipBadge namespace="quatico" progress="80" name="VS Code" />{' '}
      <TooltipBadge namespace="quatico" progress="30" name="Rancher" />{' '}
      <TooltipBadge namespace="quatico" progress="30" name="Argocd" />{' '}
      <TooltipBadge namespace="quatico" progress="80" name="Jira" />{' '}
      <TooltipBadge namespace="quatico" progress="80" name="Confluence" />{' '}
      <TooltipBadge namespace="quatico" progress="80" name="Bitbucket" />{' '}
    </>
  );
};
