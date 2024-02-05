import type { FC } from 'react';
import { H5, H6 } from '@bootstrap-styled/v4';
import { FloatRight } from '@cv/components/float';
import { TooltipBadge, TooltipBadgeGroup } from '@cv/components/tooltip_badge';
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
          {monthYear('2022-01-01', { locale: locale })} - {monthYear('2022-09-30', { locale: locale })}
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
          <T lang="en">Backend and frontend development in Java and TypeScript</T>
          <T lang="de">Backend- und Frontend-Entwicklung in Java und TypeScript</T>
        </Dash>
        <Dash>
          <T lang="en">
            Further development of continuous delivery pipelines for customer projects based on Kubernetes
          </T>
          <T lang="de">
            Weiterentwicklung von Continuous Delivery Pipelines für Kundenprojekte auf Basis von Kubernetes
          </T>
        </Dash>
      </DashList>
      <TooltipBadgeGroup>
        <TooltipBadge namespace="quatico" progress="90" name="es6" />
        <TooltipBadge namespace="quatico" progress="90" name="typescript" />
        <TooltipBadge namespace="quatico" progress="70" name="scss" />
        <TooltipBadge namespace="quatico" progress="90" name="html" />
        <TooltipBadge namespace="quatico" progress="95" name="react" />
        <TooltipBadge namespace="steiner" progress="60" name="storybook" />
        <TooltipBadge namespace="atpoint" progress="90" name="webpack" />
        <TooltipBadge namespace="atpoint" progress="40" name="playwright" />
        <TooltipBadge namespace="atpoint" progress="80" name="jest" />
        <TooltipBadge namespace="quatico" progress="90" name="node" />
        <TooltipBadge namespace="quatico" progress="60" name="java" />
        <TooltipBadge namespace="quatico" progress="50" name="maven" />
        <TooltipBadge namespace="quatico" progress="30" name="solr" />
        <TooltipBadge namespace="quatico" progress="30" name="jenkins" />
        <TooltipBadge namespace="quatico" progress="80" name="git" />
        <TooltipBadge namespace="quatico" progress="85" name="docker" />
        <TooltipBadge namespace="quatico" progress="30" name="intellij" />
        <TooltipBadge namespace="quatico" progress="80" name="vscode" />
        <TooltipBadge namespace="quatico" progress="30" name="rancher" />
        <TooltipBadge namespace="quatico" progress="30" name="argocd" />
        <TooltipBadge namespace="quatico" progress="80" name="jira" />
        <TooltipBadge namespace="quatico" progress="80" name="confluence" />
        <TooltipBadge namespace="quatico" progress="80" name="bitbucket" />
        <TooltipBadge namespace="quatico" progress="60" name="magnolia" />
        <TooltipBadge namespace="quatico" progress="20" name="aem" />
      </TooltipBadgeGroup>
    </>
  );
};
