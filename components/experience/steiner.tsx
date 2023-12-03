import React, { type FC } from 'react';
import { H5, H6 } from '@bootstrap-styled/v4';
import { FloatRight } from '@cv/components/float';
import TooltipBadge from '@cv/components/tooltip_badge';
import { Dash, DashList } from '@cv/components/dash_list';
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
        <DashList>
          <Dash>
            <T lang="en">Ongoing enhancement of collaboration platform</T>
            <T lang="de">Laufende Verbesserung der Kollaborationsplattform</T>
          </Dash>
          <Dash>
            <T lang="en">Creating reusable components using React</T>
            <T lang="de">Erstellung von wiederverwendbaren Komponenten mit React</T>
          </Dash>
          <Dash>
            <T lang="en">Integrating REST endpoints using Nest.js</T>
            <T lang="de">Integration von REST-Endpunkten mit Nest.js</T>
          </Dash>
          <Dash>
            <T lang="en">Establishing and constructing workflows using Temporal.io</T>
            <T lang="de">Einrichten und Erstellen von Workflows mit Temporal.io</T>
          </Dash>
          <Dash>
            <T lang="en">Integrating third-party services into the platform</T>
            <T lang="de">Integration von Drittanbieterdiensten in die Plattform</T>
          </Dash>
          <Dash>
            <T lang="en">Developing and implementing integration and end-to-end tests</T>
            <T lang="de">Entwicklung und Implementierung von Integrations- und End-to-End-Tests</T>
          </Dash>
          <Dash>
            <T lang="en">Expanding and establishing GitHub Actions</T>
            <T lang="de">Erweiterung und Einrichtung von GitHub-Actions</T>
          </Dash>
        </DashList>
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
      <TooltipBadge namespace="steiner" progress="60" name="Temporal" />{' '}
      <TooltipBadge namespace="steiner" progress="30" name="TerraForm" />{' '}
      <TooltipBadge namespace="steiner" progress="60" name="Auth0" />{' '}
      <TooltipBadge namespace="steiner" progress="85" name="Docker" />{' '}
      <TooltipBadge namespace="steiner" progress="50" name="Kubernetes" />{' '}
      <TooltipBadge namespace="steiner" progress="80" name="VS Code" />{' '}
      <TooltipBadge namespace="steiner" progress="80" name="Jira" />{' '}
      <TooltipBadge namespace="steiner" progress="80" name="Confluence" />{' '}
    </>
  );
};
