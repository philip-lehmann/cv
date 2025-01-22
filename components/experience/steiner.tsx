import type { FC } from 'react';
import { Typography } from '@mui/material';
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
      <Typography variant="h5">Steiner AG</Typography>
      <div>
        <FloatRight>
          {monthYear('2022-10-01', { locale: locale })} - {monthYear('2024-02-29', { locale: locale })}
        </FloatRight>
        <Typography variant="h6">
          <T lang="en">Senior Software Engineer</T>
          <T lang="de">Senior Software Engineer</T>
        </Typography>
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
        <TooltipBadge namespace="steiner" progress="90" name="typescript" />
        <TooltipBadge namespace="steiner" progress="90" name="nextjs" />
        <TooltipBadge namespace="steiner" progress="60" name="nestjs" />
        <TooltipBadge namespace="steiner" progress="60" name="tailwind" />
        <TooltipBadge namespace="steiner" progress="90" name="html" />
        <TooltipBadge namespace="steiner" progress="80" name="bullmq" />
        <TooltipBadge namespace="steiner" progress="85" name="typeorm" />
        <TooltipBadge namespace="steiner" progress="70" name="github-actions" />
        <TooltipBadge namespace="steiner" progress="90" name="git" />
        <TooltipBadge namespace="steiner" progress="50" name="nx" />
        <TooltipBadge namespace="steiner" progress="60" name="storybook" />
        <TooltipBadge namespace="steiner" progress="80" name="playwright" />
        <TooltipBadge namespace="steiner" progress="80" name="jest" />
        <TooltipBadge namespace="steiner" progress="80" name="postgres" />
        <TooltipBadge namespace="steiner" progress="80" name="redis" />
        <TooltipBadge namespace="steiner" progress="60" name="temporal" />
        <TooltipBadge namespace="steiner" progress="50" name="rabbitmq" />
        <TooltipBadge namespace="steiner" progress="60" name="kibana" />
        <TooltipBadge namespace="steiner" progress="30" name="terraform" />
        <TooltipBadge namespace="steiner" progress="60" name="auth0" />
        <TooltipBadge namespace="steiner" progress="80" name="git" />
        <TooltipBadge namespace="steiner" progress="85" name="docker" />
        <TooltipBadge namespace="steiner" progress="50" name="kubernetes" />
        <TooltipBadge namespace="steiner" progress="80" name="vscode" />
        <TooltipBadge namespace="steiner" progress="80" name="jira" />
        <TooltipBadge namespace="steiner" progress="80" name="confluence" />
        <TooltipBadge namespace="steiner" progress="30" name="azure" />
      </TooltipBadgeGroup>
    </>
  );
};
