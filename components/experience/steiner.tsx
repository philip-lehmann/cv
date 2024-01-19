import type { FC } from 'react';
import { H5, H6 } from '@bootstrap-styled/v4';
import { FloatRight } from '@cv/components/float';
import { TooltipBadge, TooltipBadgeGroup } from '@cv/components/tooltip_badge';
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
          {monthYear('2022-10-01', { locale: locale })} - {monthYear('2024-02-29', { locale: locale })}
        </FloatRight>
        <H6>
          <T lang="en">Senior Software Engineer</T>
          <T lang="de">Senior Software Engineer</T>
        </H6>
        <DashList>
          <Dash>
            <T lang="en">Development of microservices using Node.js, Nest and other relevant technologies</T>
            <T lang="de">
              Entwicklung von Microservices unter Verwendung von Node.js, Nest und anderen relevanten Technologien
            </T>
          </Dash>
          <Dash>
            <T lang="en">Integration of PostgreSQL databases and external APls into the microservice architecture</T>
            <T lang="de">Integration von PostgreSQL Datenbanken und externen APls in die Microservice-Architektur</T>
          </Dash>
          <Dash>
            <T lang="en">
              Development of user-friendly and responsive web applications with TypeScript, Next.js and Tailwind CSS
            </T>
            <T lang="de">
              Entwicklung von benutzerfreundlichen und responsiven Webanwendungen mit TypeScript, Next.js und Tailwind
              CSS
            </T>
          </Dash>
          <Dash>
            <T lang="en">
              Collaboration on the configuration and management of the infrastructure as code using Terraform
            </T>
            <T lang="de">
              Mitarbeit an der Konfiguration und Verwaltung der Infrastruktur als Code mithilfe von Terraform
            </T>
          </Dash>
          <Dash>
            <T lang="en">Ensuring code quality through thorough code reviews and constructive feedback</T>
            <T lang="de">Sicherstellung der Code-Qualität durch gründliche Code-Reviews und konstruktives Feedback</T>
          </Dash>
          <Dash>
            <T lang="en">Support and expert coaching of team members</T>
            <T lang="de">Unterstützung und fachkundiges Coaching von Teammitgliedern</T>
          </Dash>
          <Dash>
            <T lang="en">Collaboration in an agile 6-member Scrum team</T>
            <T lang="de">Mitarbeit in einem agilen 6-köpfigen Scrum-Team</T>
          </Dash>
          <Dash>
            <T lang="en">Collaboration in the cross-team tech chapter</T>
            <T lang="de">Mitarbeit im teamübergreifenden Tech-Chapter</T>
          </Dash>
        </DashList>
      </div>
      <TooltipBadgeGroup>
        <TooltipBadge namespace="steiner" progress="90" name="Typescript" />
        <TooltipBadge namespace="steiner" progress="90" name="Next.js" />
        <TooltipBadge namespace="steiner" progress="10" name="NestJs" />
        <TooltipBadge namespace="steiner" progress="10" name="Tailwind" />
        <TooltipBadge namespace="steiner" progress="80" name="Github" />
        <TooltipBadge namespace="steiner" progress="70" name="Github Actions" />
        <TooltipBadge namespace="steiner" progress="90" name="Git" />
        <TooltipBadge namespace="steiner" progress="50" name="NX" />
        <TooltipBadge namespace="steiner" progress="80" name="Postgres" />
        <TooltipBadge namespace="steiner" progress="80" name="Redis" />
        <TooltipBadge namespace="steiner" progress="60" name="Temporal" />
        <TooltipBadge namespace="steiner" progress="50" name="RabbitMQ" />
        <TooltipBadge namespace="steiner" progress="60" name="Elasticsearch" />
        <TooltipBadge namespace="steiner" progress="30" name="TerraForm" />
        <TooltipBadge namespace="steiner" progress="60" name="Auth0" />
        <TooltipBadge namespace="steiner" progress="85" name="Docker" />
        <TooltipBadge namespace="steiner" progress="50" name="Kubernetes" />
        <TooltipBadge namespace="steiner" progress="80" name="VS Code" />
        <TooltipBadge namespace="steiner" progress="80" name="Jira" />
        <TooltipBadge namespace="steiner" progress="80" name="Confluence" />
      </TooltipBadgeGroup>
    </>
  );
};
